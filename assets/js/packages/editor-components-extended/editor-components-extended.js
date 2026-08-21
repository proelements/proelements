/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/packages/pro/editor-components-extended/src/components/angie-install-dialog/angie-install-dialog.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/angie-install-dialog/angie-install-dialog.tsx ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngieInstallDialog: function() { return /* binding */ AngieInstallDialog; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-mcp */ "@elementor/editor-mcp");
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/events */ "@elementor/events");
/* harmony import */ var _elementor_events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);







const PROMOTION_IMAGE_URL = 'https://assets.elementor.com/packages/v1/images/angie-components-promotion.svg';
const ANGIE_COMPONENTS_TAB_ENTRY = 'components_tab';
const ANGIE_INSTALL_STARTED_EVENT = 'angie_install_started';
function AngieInstallDialog({
  open,
  onClose,
  prompt
}) {
  const [installState, setInstallState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('idle');
  const handleClose = () => {
    if (installState === 'installing') {
      return;
    }
    setInstallState('idle');
    onClose();
  };
  const handleInstall = async () => {
    setInstallState('installing');
    (0,_elementor_events__WEBPACK_IMPORTED_MODULE_2__.trackEvent)({
      eventName: ANGIE_INSTALL_STARTED_EVENT,
      trigger_source: ANGIE_COMPONENTS_TAB_ENTRY
    });
    const result = await (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_1__.installAngiePlugin)();
    if (!result.success) {
      setInstallState('error');
      return;
    }
    (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_1__.redirectToAppAdmin)(prompt);
  };
  const handleFallbackInstall = () => {
    (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_1__.redirectToInstallation)(prompt);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
    fullWidth: true,
    maxWidth: "md",
    open: open,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close', 'elementor-pro'),
    onClick: handleClose,
    sx: {
      position: 'absolute',
      right: 8,
      top: 8,
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_3__.XIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {
    sx: {
      p: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    direction: "row",
    sx: {
      height: 400
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Image, {
    sx: {
      height: '100%',
      aspectRatio: '1 / 1',
      objectFit: 'cover',
      objectPosition: 'right center'
    },
    src: PROMOTION_IMAGE_URL
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    gap: 2,
    justifyContent: "center",
    p: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, {
    variant: "h6",
    fontWeight: 600,
    whiteSpace: "nowrap"
  }, installState === 'error' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Installation failed', 'elementor-pro') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Install Angie to build components', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, installState === 'error' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("We couldn't install Angie automatically. Click below to install it manually.", 'elementor-pro') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Angie lets you create components, widgets, sections, and code using simple instructions.', 'elementor-pro')), installState !== 'error' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Install once to start building directly inside the editor.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    direction: "row",
    justifyContent: "flex-end",
    sx: {
      mt: 2
    }
  }, installState === 'error' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    color: "accent",
    onClick: handleFallbackInstall
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Install Manually', 'elementor-pro')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    color: "accent",
    onClick: handleInstall,
    disabled: installState === 'installing',
    startIcon: installState === 'installing' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {
      size: 18,
      color: "inherit"
    }) : undefined
  }, installState === 'installing' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Installing…', 'elementor-pro') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Install Angie', 'elementor-pro')))))));
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/angie-install-dialog/index.ts":
/*!*******************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/angie-install-dialog/index.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngieInstallDialog: function() { return /* reexport safe */ _angie_install_dialog__WEBPACK_IMPORTED_MODULE_0__.AngieInstallDialog; }
/* harmony export */ });
/* harmony import */ var _angie_install_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angie-install-dialog */ "./packages/packages/pro/editor-components-extended/src/components/angie-install-dialog/angie-install-dialog.tsx");


/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/angie-intro/angie-intro-popover.tsx":
/*!*************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/angie-intro/angie-intro-popover.tsx ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANGIE_INTRO_MESSAGE_KEY: function() { return /* binding */ ANGIE_INTRO_MESSAGE_KEY; },
/* harmony export */   AngieIntroPopover: function() { return /* binding */ AngieIntroPopover; },
/* harmony export */   useAngieIntro: function() { return /* binding */ useAngieIntro; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-current-user */ "@elementor/editor-current-user");
/* harmony import */ var _elementor_editor_current_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_current_user__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const ANGIE_INTRO_MESSAGE_KEY = 'angie-components-intro';
const INTRO_IMAGE_URL = 'https://assets.elementor.com/packages/v1/images/angie-components-promotion.svg';
const IMAGE_OVERLAY_COLOR = 'rgba(255, 0, 191, 0.6)';
const BUTTON_COLOR = '#f0abfc';
const BUTTON_HOVER_COLOR = '#e879f9';
const BUTTON_TEXT_COLOR = '#0c0d0e';
const AngieIntroPopover = ({
  open,
  onClose,
  onConfirm,
  anchorRef
}) => {
  const anchorEl = anchorRef?.current;
  const slotProps = anchorEl ? {
    popper: {
      anchorEl,
      modifiers: [{
        name: 'offset',
        options: {
          offset: [-40, 8]
        }
      }]
    }
  } : undefined;
  const handleClose = e => {
    e.stopPropagation();
    onClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Infotip, {
    placement: "right-start",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AngieIntroCard, {
      onClose: handleClose,
      onConfirm: onConfirm
    }),
    open: open,
    slotProps: slotProps
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null));
};
function AngieIntroCard({
  onClose,
  onConfirm
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.ClickAwayListener, {
    disableReactTree: true,
    mouseEvent: "onMouseDown",
    touchEvent: "onTouchStart",
    onClickAway: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    elevation: 0,
    sx: {
      width: 296,
      borderRadius: '4px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "subtitle2"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Meet Angie', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Chip, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('New', 'elementor-pro'),
      size: "small",
      sx: {
        height: 24,
        fontSize: '13px',
        backgroundColor: '#ebf2fe',
        color: '#1945a4',
        borderRadius: '1000px'
      }
    })),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.CloseButton, {
      slotProps: {
        icon: {
          fontSize: 'tiny'
        }
      },
      onClick: onClose
    }),
    sx: {
      py: 1,
      px: 2
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
    sx: {
      position: 'relative',
      width: '100%',
      height: 148
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
    component: "img",
    image: INTRO_IMAGE_URL,
    alt: "",
    sx: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
    sx: {
      position: 'absolute',
      inset: 0,
      backgroundColor: IMAGE_OVERLAY_COLOR,
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
    sx: {
      px: 2,
      py: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Build components using simple instructions.', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.CardActions, {
    sx: {
      justifyContent: 'flex-end',
      px: 2,
      pb: 1.5,
      pt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "contained",
    size: "small",
    onClick: onConfirm,
    sx: {
      backgroundColor: BUTTON_COLOR,
      color: BUTTON_TEXT_COLOR,
      '&:hover': {
        backgroundColor: BUTTON_HOVER_COLOR
      }
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Start building', 'elementor-pro')))));
}
const useAngieIntro = () => {
  const [isMessageSuppressed, suppressMessage] = (0,_elementor_editor_current_user__WEBPACK_IMPORTED_MODULE_1__.useSuppressedMessage)(ANGIE_INTRO_MESSAGE_KEY);
  return {
    shouldShowIntro: !isMessageSuppressed,
    suppressIntro: suppressMessage
  };
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/angie-intro/index.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/angie-intro/index.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANGIE_INTRO_MESSAGE_KEY: function() { return /* reexport safe */ _angie_intro_popover__WEBPACK_IMPORTED_MODULE_0__.ANGIE_INTRO_MESSAGE_KEY; },
/* harmony export */   AngieIntroPopover: function() { return /* reexport safe */ _angie_intro_popover__WEBPACK_IMPORTED_MODULE_0__.AngieIntroPopover; },
/* harmony export */   useAngieIntro: function() { return /* reexport safe */ _angie_intro_popover__WEBPACK_IMPORTED_MODULE_0__.useAngieIntro; }
/* harmony export */ });
/* harmony import */ var _angie_intro_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angie-intro-popover */ "./packages/packages/pro/editor-components-extended/src/components/angie-intro/angie-intro-popover.tsx");


/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-introduction.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-introduction.tsx ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentIntroduction: function() { return /* binding */ ComponentIntroduction; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





const ComponentIntroduction = ({
  anchorRef,
  shouldShowIntroduction,
  onClose
}) => {
  if (!anchorRef.current || !shouldShowIntroduction) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    anchorEl: anchorRef.current,
    open: shouldShowIntroduction,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: -30
    },
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    sx: {
      width: '296px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_2__.PopoverHeader, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Add your first property', 'elementor-pro'),
    onClose: onClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Image, {
    sx: {
      width: '296px',
      height: '160px'
    },
    src: 'https://assets.elementor.com/packages/v1/images/components-properties-intro.png',
    alt: ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.PopoverContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    sx: {
      p: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: 'body2'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Properties make instances flexible.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: 'body2'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select any Element, then in the General tab, click next to any setting you want users to customize - like text, images, or links.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: 'body2',
    sx: {
      mt: 2
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Your properties will appear in the Properties panel, where you can organize and manage them anytime.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
    href: "http://go.elementor.com/components-guide",
    target: "_blank",
    sx: {
      mt: 2
    },
    color: "info.main",
    variant: "body2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Learn more', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    sx: {
      pt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    size: "medium",
    variant: "contained",
    onClick: onClose
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Got it', 'elementor-pro')))))));
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-panel-header/component-badge.tsx":
/*!********************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-panel-header/component-badge.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsBadge: function() { return /* binding */ ComponentsBadge; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const ComponentsBadge = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  overridablePropsCount,
  onClick
}, ref) => {
  const prevCount = usePrevious(overridablePropsCount);
  const isFirstExposedProperty = prevCount === 0 && overridablePropsCount === 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledBadge, {
    ref: ref,
    color: "primary",
    key: overridablePropsCount,
    invisible: overridablePropsCount === 0,
    animate: isFirstExposedProperty,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    badgeContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
      sx: {
        animation: !isFirstExposedProperty ? `${slideUp} 300ms ease-out` : 'none'
      }
    }, overridablePropsCount),
    "data-testid": "component-panel-header-properties-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Component properties', 'elementor-pro')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.ToggleButton, {
    value: "exposed properties",
    size: "tiny",
    onClick: onClick,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Component properties', 'elementor-pro')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__.ComponentPropListIcon, {
    fontSize: "tiny"
  }))));
});
const StyledBadge = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.styled)(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
  shouldForwardProp: prop => prop !== 'animate'
})(({
  theme,
  animate
}) => ({
  '& .MuiBadge-badge': {
    minWidth: theme.spacing(2),
    height: theme.spacing(2),
    minHeight: theme.spacing(2),
    maxWidth: theme.spacing(2),
    fontSize: theme.typography.caption.fontSize,
    animation: animate ? `${bounceIn} 300ms ease-out` : 'none'
  }
}));
function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
const bounceIn = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.keyframes)`
	0% { transform: scale(0) translate(50%, 50%); opacity: 0; }
	70% { transform: scale(1.1) translate(50%, -50%); opacity: 1; }
	100% { transform: scale(1) translate(50%, -50%); opacity: 1; }
`;
const slideUp = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.keyframes)`
	from { transform: translateY(100%); opacity: 0; }
	to { transform: translateY(0); opacity: 1; }
`;

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-panel-header/component-panel-header.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-panel-header/component-panel-header.tsx ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentPanelHeader: function() { return /* binding */ ComponentPanelHeader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-current-user */ "@elementor/editor-current-user");
/* harmony import */ var _elementor_editor_current_user__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_current_user__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-panels */ "@elementor/editor-panels");
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_use_navigate_back__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-navigate-back */ "./packages/packages/pro/editor-components-extended/src/hooks/use-navigate-back.ts");
/* harmony import */ var _component_introduction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component-introduction */ "./packages/packages/pro/editor-components-extended/src/components/component-introduction.tsx");
/* harmony import */ var _component_properties_panel_component_properties_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component-properties-panel/component-properties-panel */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel.tsx");
/* harmony import */ var _component_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component-badge */ "./packages/packages/pro/editor-components-extended/src/components/component-panel-header/component-badge.tsx");














const MESSAGE_KEY = 'components-properties-introduction';
const ComponentPanelHeader = () => {
  const {
    id: currentComponentId,
    uid: componentUid
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useCurrentComponent)() ?? {
    id: null,
    uid: null
  };
  const overridableProps = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useSanitizeOverridableProps)(currentComponentId);
  const onBack = (0,_hooks_use_navigate_back__WEBPACK_IMPORTED_MODULE_10__.useNavigateBack)();
  const componentName = getComponentName();
  const [isMessageSuppressed, suppressMessage] = (0,_elementor_editor_current_user__WEBPACK_IMPORTED_MODULE_2__.useSuppressedMessage)(MESSAGE_KEY);
  const [shouldShowIntroduction, setShouldShowIntroduction] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!isMessageSuppressed);
  const {
    open: openPropertiesPanel
  } = (0,_component_properties_panel_component_properties_panel__WEBPACK_IMPORTED_MODULE_12__.usePanelActions)();
  const overridablePropsCount = overridableProps ? Object.keys(overridableProps.props).length : 0;
  const anchorRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  if (!currentComponentId) {
    return null;
  }
  const handleCloseIntroduction = () => {
    suppressMessage();
    setShouldShowIntroduction(false);
  };
  const handleOpenPropertiesPanel = () => {
    openPropertiesPanel();
    (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.trackComponentEvent)({
      action: 'propertiesPanelOpened',
      // TODO: remove `source` in version 4.4.0
      source: 'user',
      executedBy: 'user',
      component_uid: componentUid,
      properties_count: overridablePropsCount
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_8__.Box, {
    "data-testid": "component-panel-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_4__.PanelHeader, {
    sx: {
      justifyContent: 'start',
      px: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Back', 'elementor-pro')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_8__.IconButton, {
    size: "tiny",
    onClick: onBack,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Back', 'elementor-pro')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_6__.ArrowLeftIcon, {
    fontSize: "tiny"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_6__.ComponentsFilledIcon, {
    fontSize: "tiny",
    stroke: "currentColor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_5__.EllipsisWithTooltip, {
    title: componentName,
    as: _elementor_ui__WEBPACK_IMPORTED_MODULE_8__.Typography,
    variant: "caption",
    sx: {
      fontWeight: 500,
      flexGrow: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_badge__WEBPACK_IMPORTED_MODULE_13__.ComponentsBadge, {
    overridablePropsCount: overridablePropsCount,
    ref: anchorRef,
    onClick: handleOpenPropertiesPanel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_8__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_introduction__WEBPACK_IMPORTED_MODULE_11__.ComponentIntroduction, {
    anchorRef: anchorRef,
    shouldShowIntroduction: shouldShowIntroduction,
    onClose: handleCloseIntroduction
  }));
};
function getComponentName() {
  const state = (0,_elementor_store__WEBPACK_IMPORTED_MODULE_7__.__getState)();
  const path = state[_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.SLICE_NAME].path;
  const {
    instanceTitle
  } = path.at(-1) ?? {};
  if (instanceTitle) {
    return instanceTitle;
  }
  const documentsManager = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__.getV1DocumentsManager)();
  const currentDocument = documentsManager.getCurrent();
  return currentDocument?.container?.settings?.get('post_title') ?? '';
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/apply-multi-sortable-update.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/apply-multi-sortable-update.ts ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyMultiSortableUpdate: function() { return /* binding */ applyMultiSortableUpdate; },
/* harmony export */   hasDuplicateIds: function() { return /* binding */ hasDuplicateIds; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_properties_sortable_ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-properties-sortable-ids */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-sortable-ids.ts");



function hasDuplicateIds(updated) {
  return Object.entries(updated).some(([key, ids]) => key !== _component_properties_sortable_ids__WEBPACK_IMPORTED_MODULE_2__.COMPONENT_PROP_GROUP_HEADERS_KEY && Array.isArray(ids) && ids.length !== new Set(ids).size);
}
function applyMultiSortableUpdate(updated, currentComponentId) {
  const latest = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(currentComponentId);
  if (!latest) {
    return;
  }
  const newOrder = updated[_component_properties_sortable_ids__WEBPACK_IMPORTED_MODULE_2__.COMPONENT_PROP_GROUP_HEADERS_KEY] ?? [];
  const {
    items,
    props
  } = buildGroupsAndProps(updated, latest);
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(currentComponentId, {
    ...latest,
    props,
    groups: {
      items,
      order: newOrder.filter(id => id in items)
    }
  });
  (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__.setDocumentModifiedStatus)(true);
}
function buildGroupsAndProps(updated, latest) {
  const items = {
    ...latest.groups.items
  };
  const props = {
    ...latest.props
  };
  for (const [groupId, propKeys] of Object.entries(updated)) {
    if (groupId === _component_properties_sortable_ids__WEBPACK_IMPORTED_MODULE_2__.COMPONENT_PROP_GROUP_HEADERS_KEY || !Array.isArray(propKeys)) {
      continue;
    }

    // Workaround: UnstableSortable (mode="multiple") reports duplicate IDs during same-group reorder.
    const uniquePropKeys = [...new Set(propKeys)];
    const group = items[groupId];
    if (group) {
      items[groupId] = {
        ...group,
        props: uniquePropKeys
      };
    }
    for (const propKey of uniquePropKeys) {
      const prop = props[propKey];
      if (prop && prop.groupId !== groupId) {
        props[propKey] = {
          ...prop,
          groupId
        };
      }
    }
  }
  return {
    items,
    props
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel-content.tsx":
/*!*******************************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel-content.tsx ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentPropertiesPanelContent: function() { return /* binding */ ComponentPropertiesPanelContent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-panels */ "@elementor/editor-panels");
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/utils */ "@elementor/utils");
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elementor_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_add_overridable_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/add-overridable-group */ "./packages/packages/pro/editor-components-extended/src/store/actions/add-overridable-group.ts");
/* harmony import */ var _store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/delete-component-overridable-prop */ "./packages/packages/pro/editor-components-extended/src/store/actions/delete-component-overridable-prop.ts");
/* harmony import */ var _store_actions_delete_overridable_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/delete-overridable-group */ "./packages/packages/pro/editor-components-extended/src/store/actions/delete-overridable-group.ts");
/* harmony import */ var _store_actions_reorder_group_props__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/reorder-group-props */ "./packages/packages/pro/editor-components-extended/src/store/actions/reorder-group-props.ts");
/* harmony import */ var _store_actions_reorder_overridable_groups__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/reorder-overridable-groups */ "./packages/packages/pro/editor-components-extended/src/store/actions/reorder-overridable-groups.ts");
/* harmony import */ var _store_actions_update_overridable_prop_params__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/update-overridable-prop-params */ "./packages/packages/pro/editor-components-extended/src/store/actions/update-overridable-prop-params.ts");
/* harmony import */ var _component_properties_sortable_ids__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component-properties-sortable-ids */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-sortable-ids.ts");
/* harmony import */ var _multi_group_properties_group__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./multi-group-properties-group */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/multi-group-properties-group.tsx");
/* harmony import */ var _properties_empty_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./properties-empty-state */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/properties-empty-state.tsx");
/* harmony import */ var _properties_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./properties-group */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/properties-group.tsx");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sortable */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/sortable.tsx");
/* harmony import */ var _use_current_editable_item__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./use-current-editable-item */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/use-current-editable-item.ts");
/* harmony import */ var _use_multi_sortable_sync__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./use-multi-sortable-sync */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/use-multi-sortable-sync.ts");
/* harmony import */ var _utils_generate_unique_label__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/generate-unique-label */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/utils/generate-unique-label.ts");























function ComponentPropertiesPanelContent({
  onClose
}) {
  const currentComponentId = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useCurrentComponentId)();
  const overridableProps = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useSanitizeOverridableProps)(currentComponentId);
  const [isAddingGroup, setIsAddingGroup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const introductionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const groupLabelEditable = (0,_use_current_editable_item__WEBPACK_IMPORTED_MODULE_19__.useCurrentEditableItem)();
  const groups = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!overridableProps) {
      return [];
    }
    return overridableProps.groups.order.map(groupId => overridableProps.groups.items[groupId] ?? null).filter(Boolean);
  }, [overridableProps]);
  const allGroupsForSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => groups.map(group => ({
    value: group.id,
    label: group.label
  })), [groups]);
  if (!currentComponentId || !overridableProps) {
    return null;
  }
  const hasGroups = groups.length > 0;
  const showEmptyState = !hasGroups && !isAddingGroup;
  const handleAddGroupClick = () => {
    if (isAddingGroup) {
      return;
    }
    const newGroupId = (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_6__.generateUniqueId)('group');
    const newLabel = (0,_utils_generate_unique_label__WEBPACK_IMPORTED_MODULE_21__.generateUniqueLabel)(groups);
    (0,_store_actions_add_overridable_group__WEBPACK_IMPORTED_MODULE_8__.addOverridableGroup)({
      componentId: currentComponentId,
      groupId: newGroupId,
      label: newLabel,
      executedBy: 'user'
    });
    (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.setDocumentModifiedStatus)(true);
    setIsAddingGroup(false);
    groupLabelEditable.setEditingGroupId(newGroupId);
  };
  const handlePropertyDelete = propKey => {
    (0,_store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_9__.deleteComponentOverridableProp)({
      componentId: currentComponentId,
      propKey,
      executedBy: 'user'
    });
    (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.setDocumentModifiedStatus)(true);
  };
  const handlePropertyUpdate = (overrideKey, data) => {
    (0,_store_actions_update_overridable_prop_params__WEBPACK_IMPORTED_MODULE_13__.updateOverridablePropParams)({
      componentId: currentComponentId,
      overrideKey,
      label: data.label,
      groupId: data.group
    });
    (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.setDocumentModifiedStatus)(true);
  };
  const handleGroupDelete = groupId => {
    (0,_store_actions_delete_overridable_group__WEBPACK_IMPORTED_MODULE_10__.deleteOverridableGroup)({
      componentId: currentComponentId,
      groupId
    });
    (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.setDocumentModifiedStatus)(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_3__.PanelHeader, {
    sx: {
      justifyContent: 'start',
      pl: 1.5,
      pr: 1,
      py: 1
    },
    "data-testid": "component-property-panel-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    direction: "row",
    alignItems: "center",
    gap: 0.5,
    flexGrow: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__.ComponentPropListIcon, {
    fontSize: "tiny"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_3__.PanelHeaderTitle, {
    variant: "subtitle2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Component properties', 'elementor-pro'))), !showEmptyState && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Add new group', 'elementor-pro')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    size: "tiny",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Add new group', 'elementor-pro'),
    onClick: handleAddGroupClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__.FolderPlusIcon, {
    fontSize: "tiny"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Close panel', 'elementor-pro')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    ref: introductionRef,
    size: "tiny",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Close panel', 'elementor-pro'),
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__.XIcon, {
    fontSize: "tiny"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, showEmptyState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_properties_empty_state__WEBPACK_IMPORTED_MODULE_16__.PropertiesEmptyState, {
    introductionRef: introductionRef
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.List, {
    sx: {
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, _sortable__WEBPACK_IMPORTED_MODULE_18__.isMultiGroupSortingEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MultiGroupSortableContent, {
    currentComponentId: currentComponentId,
    overridableProps: overridableProps,
    groups: groups,
    allGroupsForSelect: allGroupsForSelect,
    groupLabelEditable: groupLabelEditable,
    setIsAddingGroup: setIsAddingGroup,
    onPropertyDelete: handlePropertyDelete,
    onPropertyUpdate: handlePropertyUpdate,
    onGroupDelete: handleGroupDelete
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LegacySortableContent, {
    currentComponentId: currentComponentId,
    overridableProps: overridableProps,
    groups: groups,
    allGroupsForSelect: allGroupsForSelect,
    groupLabelEditable: groupLabelEditable,
    setIsAddingGroup: setIsAddingGroup,
    onPropertyDelete: handlePropertyDelete,
    onPropertyUpdate: handlePropertyUpdate,
    onGroupDelete: handleGroupDelete
  }))));
}
function LegacySortableContent({
  currentComponentId,
  overridableProps,
  groups,
  allGroupsForSelect,
  groupLabelEditable,
  setIsAddingGroup,
  onPropertyDelete,
  onPropertyUpdate,
  onGroupDelete
}) {
  const groupIds = overridableProps.groups.order;
  const handleGroupsReorder = newOrder => {
    (0,_store_actions_reorder_overridable_groups__WEBPACK_IMPORTED_MODULE_12__.reorderOverridableGroups)({
      componentId: currentComponentId,
      newOrder
    });
    (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.setDocumentModifiedStatus)(true);
  };
  const handlePropsReorder = (groupId, newPropsOrder) => {
    (0,_store_actions_reorder_group_props__WEBPACK_IMPORTED_MODULE_11__.reorderGroupProps)({
      componentId: currentComponentId,
      groupId,
      newPropsOrder
    });
    (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.setDocumentModifiedStatus)(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_18__.SortableProvider, {
    value: groupIds,
    onChange: handleGroupsReorder
  }, groups.map(group => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_18__.SortableItem, {
    key: group.id,
    id: group.id
  }, ({
    triggerProps,
    triggerStyle,
    isDragPlaceholder
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_properties_group__WEBPACK_IMPORTED_MODULE_17__.PropertiesGroup, {
    group: group,
    props: overridableProps.props,
    allGroups: allGroupsForSelect,
    allGroupsRecord: overridableProps.groups.items,
    sortableTriggerProps: {
      ...triggerProps,
      style: triggerStyle
    },
    isDragPlaceholder: isDragPlaceholder,
    setIsAddingGroup: setIsAddingGroup,
    onPropsReorder: newOrder => handlePropsReorder(group.id, newOrder),
    onPropertyDelete: onPropertyDelete,
    onPropertyUpdate: onPropertyUpdate,
    editableLabelProps: groupLabelEditable,
    onGroupDelete: onGroupDelete
  }))));
}
function MultiGroupSortableContent({
  currentComponentId,
  overridableProps,
  groups,
  allGroupsForSelect,
  groupLabelEditable,
  onPropertyDelete,
  onPropertyUpdate,
  onGroupDelete
}) {
  const {
    sortableKey,
    sortableValue,
    handlePropertyDelete: handlePropertyDeleteWithSortableResync,
    handlePropertyUpdate: handlePropertyUpdateWithSortableResync,
    handleSortableChange
  } = (0,_use_multi_sortable_sync__WEBPACK_IMPORTED_MODULE_20__.useMultiSortableSync)({
    currentComponentId,
    overridableProps,
    groups,
    onPropertyDelete,
    onPropertyUpdate
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_18__.MultiSortableRoot, {
    key: sortableKey,
    value: sortableValue,
    onChange: handleSortableChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_18__.MultiSortableGroup, {
    groupId: _component_properties_sortable_ids__WEBPACK_IMPORTED_MODULE_14__.COMPONENT_PROP_GROUP_HEADERS_KEY
  }, ({
    setDroppableRef,
    items
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    ref: setDroppableRef,
    direction: "column",
    sx: {
      width: '100%',
      gap: 2
    }
  }, items.map(headerItemId => {
    const groupId = String(headerItemId);
    const group = overridableProps.groups.items[groupId];
    if (!group) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_18__.MultiSortableItem, {
      key: groupId,
      id: headerItemId
    }, ({
      itemProps,
      itemStyle,
      triggerProps,
      triggerStyle,
      isDragPlaceholder
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_multi_group_properties_group__WEBPACK_IMPORTED_MODULE_15__.MultiGroupPropertiesGroup, {
      sortableItemProps: itemProps,
      sortableItemStyle: itemStyle,
      group: group,
      props: overridableProps.props,
      allGroups: allGroupsForSelect,
      sortableTriggerProps: {
        ...triggerProps,
        style: triggerStyle
      },
      isDragPlaceholder: isDragPlaceholder,
      onPropertyDelete: handlePropertyDeleteWithSortableResync,
      onPropertyUpdate: handlePropertyUpdateWithSortableResync,
      editableLabelProps: groupLabelEditable,
      onGroupDelete: onGroupDelete
    }));
  }))));
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel.tsx":
/*!***********************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel.tsx ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   panel: function() { return /* binding */ panel; },
/* harmony export */   usePanelActions: function() { return /* binding */ usePanelActions; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-panels */ "@elementor/editor-panels");
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_properties_panel_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-properties-panel-content */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel-content.tsx");







const id = 'component-properties-panel';
const {
  panel,
  usePanelActions
} = (0,_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__.__createPanel)({
  id,
  component: ComponentPropertiesPanel
});
function ComponentPropertiesPanel() {
  const {
    close: closePanel
  } = usePanelActions();
  const {
    open: openEditingPanel
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__.usePanelActions)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.ErrorBoundary, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundaryFallback, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__.Panel, {
    "data-testid": "component-properties-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_properties_panel_content__WEBPACK_IMPORTED_MODULE_6__.ComponentPropertiesPanelContent, {
    onClose: () => {
      closePanel();
      openEditingPanel();
    }
  }))));
}
const ErrorBoundaryFallback = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Box, {
  role: "alert",
  sx: {
    minHeight: '100%',
    p: 2
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
  severity: "error",
  sx: {
    mb: 2,
    maxWidth: 400,
    textAlign: 'center'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Something went wrong', 'elementor-pro'))));

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-sortable-ids.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-sortable-ids.ts ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPONENT_PROP_GROUP_HEADERS_KEY: function() { return /* binding */ COMPONENT_PROP_GROUP_HEADERS_KEY; }
/* harmony export */ });
const COMPONENT_PROP_GROUP_HEADERS_KEY = '__cpPropGroupHeaders__';

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/multi-group-properties-group.tsx":
/*!*************************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/multi-group-properties-group.tsx ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiGroupPropertiesGroup: function() { return /* binding */ MultiGroupPropertiesGroup; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _multi_group_property_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multi-group-property-item */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/multi-group-property-item.tsx");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortable */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/sortable.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }







function MultiGroupPropertiesGroup({
  group,
  props,
  allGroups,
  sortableItemProps,
  sortableItemStyle,
  sortableTriggerProps,
  isDragPlaceholder,
  onPropertyDelete,
  onPropertyUpdate,
  onGroupDelete,
  editableLabelProps
}) {
  const popupState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.usePopupState)({
    variant: 'popover',
    disableAutoFocus: true
  });
  const {
    editableRef,
    isEditing,
    error,
    getEditableProps,
    setEditingGroupId,
    editingGroupId
  } = editableLabelProps;
  const hasProperties = group.props.length > 0;
  const isThisGroupEditing = isEditing && editingGroupId === group.id;
  const handleRenameClick = () => {
    popupState.close();
    setEditingGroupId(group.id);
  };
  const handleDeleteClick = () => {
    popupState.close();
    onGroupDelete(group.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, _extends({}, sortableItemProps, {
    style: sortableItemStyle,
    sx: {
      opacity: isDragPlaceholder ? 0.5 : 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "group-header",
    sx: {
      position: 'relative',
      '&:hover .group-sortable-trigger': {
        visibility: 'visible'
      },
      '& .group-sortable-trigger': {
        visibility: 'hidden'
      },
      '&:hover .group-menu': {
        visibility: 'visible'
      },
      '& .group-menu': {
        visibility: 'hidden'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_6__.SortableTrigger, _extends({
    triggerClassName: "group-sortable-trigger"
  }, sortableTriggerProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2
  }, isThisGroupEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    sx: {
      height: 28,
      display: 'flex',
      alignItems: 'center',
      border: 2,
      borderColor: 'text.secondary',
      borderRadius: 1,
      pl: 0.5,
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.EditableField, _extends({
    ref: editableRef,
    as: _elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography,
    variant: "caption",
    error: error ?? undefined,
    sx: {
      color: 'text.primary',
      fontWeight: 400,
      lineHeight: 1.66
    }
  }, getEditableProps()))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.EllipsisWithTooltip, {
    title: group.label,
    as: _elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography,
    variant: "caption",
    sx: {
      color: 'text.primary',
      fontWeight: 400,
      lineHeight: 1.66
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, _extends({
    className: "group-menu",
    size: "tiny",
    sx: {
      p: 0.25,
      visibility: isThisGroupEditing ? 'visible' : undefined
    },
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Group actions', 'elementor-pro')
  }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindTrigger)(popupState)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__.DotsVerticalIcon, {
    fontSize: "tiny"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_6__.MultiSortableGroup, {
    groupId: group.id
  }, ({
    setDroppableRef,
    isEmpty,
    items
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.List, {
    ref: setDroppableRef,
    sx: {
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      ...(isEmpty && {
        minHeight: 40,
        backgroundColor: 'action.hover',
        borderRadius: 1
      })
    }
  }, items.map(propId => {
    const property = props[String(propId)];
    if (!property) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_6__.MultiSortableItem, {
      key: String(propId),
      id: propId
    }, ({
      itemProps,
      itemStyle,
      triggerProps,
      triggerStyle,
      isDragPlaceholder: isItemDragPlaceholder
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_multi_group_property_item__WEBPACK_IMPORTED_MODULE_5__.MultiGroupPropertyItem, {
      sortableItemProps: itemProps,
      sortableItemStyle: itemStyle,
      prop: property,
      sortableTriggerProps: {
        ...triggerProps,
        style: triggerStyle
      },
      isDragPlaceholder: isItemDragPlaceholder,
      groups: allGroups,
      existingLabels: Object.values(props).map(p => p.label),
      onDelete: onPropertyDelete,
      onUpdate: data => onPropertyUpdate(property.overrideKey, data)
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Menu, _extends({}, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindMenu)(popupState), {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.MenuListItem, {
    sx: {
      minWidth: '160px'
    },
    onClick: handleRenameClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "caption",
    sx: {
      color: 'text.primary'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Rename', 'elementor-pro'))), hasProperties ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('To delete the group, first remove all the properties', 'elementor-pro'),
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.MenuListItem, {
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "caption",
    sx: {
      color: 'text.disabled'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete', 'elementor-pro'))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.MenuListItem, {
    onClick: handleDeleteClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "caption",
    sx: {
      color: 'error.light'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete', 'elementor-pro')))));
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/multi-group-property-item.tsx":
/*!**********************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/multi-group-property-item.tsx ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiGroupPropertyItem: function() { return /* binding */ MultiGroupPropertyItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _overridable_props_overridable_prop_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../overridable-props/overridable-prop-form */ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-form.tsx");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortable */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/sortable.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }







function MultiGroupPropertyItem({
  prop,
  sortableItemProps,
  sortableItemStyle,
  sortableTriggerProps,
  isDragPlaceholder,
  groups,
  existingLabels,
  onDelete,
  onUpdate
}) {
  const popoverState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.usePopupState)({
    variant: 'popover'
  });
  const icon = getElementIcon(prop);
  const popoverProps = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindPopover)(popoverState);
  const handleSubmit = data => {
    onUpdate(data);
    popoverState.close();
  };
  const handleDelete = event => {
    event.stopPropagation();
    onDelete(prop.overrideKey);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, _extends({}, sortableItemProps, {
    style: sortableItemStyle
  }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindTrigger)(popoverState), {
    "data-testid": "component-property-item",
    sx: {
      position: 'relative',
      pl: 0.5,
      pr: 1,
      py: 0.25,
      minHeight: 28,
      borderRadius: 1,
      border: '1px solid',
      borderColor: 'divider',
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
      opacity: isDragPlaceholder ? 0.5 : 1,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'action.hover'
      },
      '&:hover .sortable-trigger': {
        visibility: 'visible'
      },
      '& .sortable-trigger': {
        visibility: 'hidden'
      },
      '&:hover .delete-button': {
        visibility: 'visible'
      },
      '& .delete-button': {
        visibility: 'hidden'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_6__.SortableTrigger, sortableTriggerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      color: 'text.primary',
      fontSize: 12,
      padding: 0.25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: icon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "caption",
    sx: {
      color: 'text.primary',
      flexGrow: 1,
      fontSize: 10
    }
  }, prop.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
    className: "delete-button",
    size: "tiny",
    onClick: handleDelete,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete property', 'elementor-pro'),
    sx: {
      p: 0.25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
    fontSize: "tiny"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Popover, _extends({}, popoverProps, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    PaperProps: {
      sx: {
        width: popoverState.anchorEl?.getBoundingClientRect().width
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_overridable_props_overridable_prop_form__WEBPACK_IMPORTED_MODULE_5__.OverridablePropForm, {
    onSubmit: handleSubmit,
    currentValue: prop,
    groups: groups,
    existingLabels: existingLabels,
    sx: {
      width: '100%'
    }
  })));
}
function getElementIcon(prop) {
  const elType = prop.elType === 'widget' ? prop.widgetType : prop.elType;
  const widgetsCache = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getWidgetsCache)();
  if (!widgetsCache) {
    return 'eicon-apps';
  }
  const widgetConfig = widgetsCache[elType];
  return widgetConfig?.icon || 'eicon-apps';
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/properties-empty-state.tsx":
/*!*******************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/properties-empty-state.tsx ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesEmptyState: function() { return /* binding */ PropertiesEmptyState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_introduction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component-introduction */ "./packages/packages/pro/editor-components-extended/src/components/component-introduction.tsx");






function PropertiesEmptyState({
  introductionRef
}) {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    color: "text.secondary",
    sx: {
      px: 2.5,
      pt: 10,
      pb: 5.5
    },
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__.ComponentPropListIcon, {
    fontSize: "large"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    align: "center",
    variant: "subtitle2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add your first property', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    align: "center",
    variant: "caption"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Make instances flexible while keeping design synced.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    align: "center",
    variant: "caption"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select any element, then click + next to a setting to expose it.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    variant: "caption",
    color: "secondary",
    sx: {
      textDecorationLine: 'underline'
    },
    onClick: () => setIsOpen(true)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Learn more', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_introduction__WEBPACK_IMPORTED_MODULE_4__.ComponentIntroduction, {
    anchorRef: introductionRef,
    shouldShowIntroduction: isOpen,
    onClose: () => setIsOpen(false)
  }));
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/properties-group.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/properties-group.tsx ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesGroup: function() { return /* binding */ PropertiesGroup; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _property_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property-item */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/property-item.tsx");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortable */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/sortable.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }







function PropertiesGroup({
  group,
  props,
  allGroups,
  sortableTriggerProps,
  isDragPlaceholder,
  onPropsReorder,
  onPropertyDelete,
  onPropertyUpdate,
  onGroupDelete,
  editableLabelProps
}) {
  const groupProps = group.props.map(propId => props[propId]).filter(prop => Boolean(prop));
  const popupState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.usePopupState)({
    variant: 'popover',
    disableAutoFocus: true
  });
  const {
    editableRef,
    isEditing,
    error,
    getEditableProps,
    setEditingGroupId,
    editingGroupId
  } = editableLabelProps;
  const hasProperties = group.props.length > 0;
  const isThisGroupEditing = isEditing && editingGroupId === group.id;
  const handleRenameClick = () => {
    popupState.close();
    setEditingGroupId(group.id);
  };
  const handleDeleteClick = () => {
    popupState.close();
    onGroupDelete(group.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    sx: {
      opacity: isDragPlaceholder ? 0.5 : 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "group-header",
    sx: {
      position: 'relative',
      '&:hover .group-sortable-trigger': {
        visibility: 'visible'
      },
      '& .group-sortable-trigger': {
        visibility: 'hidden'
      },
      '&:hover .group-menu': {
        visibility: 'visible'
      },
      '& .group-menu': {
        visibility: 'hidden'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_6__.SortableTrigger, _extends({
    triggerClassName: "group-sortable-trigger"
  }, sortableTriggerProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2
  }, isThisGroupEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    sx: {
      height: 28,
      display: 'flex',
      alignItems: 'center',
      border: 2,
      borderColor: 'text.secondary',
      borderRadius: 1,
      pl: 0.5,
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.EditableField, _extends({
    ref: editableRef,
    as: _elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography,
    variant: "caption",
    error: error ?? undefined,
    sx: {
      color: 'text.primary',
      fontWeight: 400,
      lineHeight: 1.66
    }
  }, getEditableProps()))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.EllipsisWithTooltip, {
    title: group.label,
    as: _elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography,
    variant: "caption",
    sx: {
      color: 'text.primary',
      fontWeight: 400,
      lineHeight: 1.66
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, _extends({
    className: "group-menu",
    size: "tiny",
    sx: {
      p: 0.25,
      visibility: isThisGroupEditing ? 'visible' : undefined
    },
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Group actions', 'elementor-pro')
  }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindTrigger)(popupState)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__.DotsVerticalIcon, {
    fontSize: "tiny"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.List, {
    sx: {
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_6__.SortableProvider, {
    value: group.props,
    onChange: onPropsReorder
  }, groupProps.map(prop => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_6__.SortableItem, {
    key: prop.overrideKey,
    id: prop.overrideKey
  }, ({
    triggerProps,
    triggerStyle,
    isDragPlaceholder: isItemDragPlaceholder
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_property_item__WEBPACK_IMPORTED_MODULE_5__.PropertyItem, {
    prop: prop,
    sortableTriggerProps: {
      ...triggerProps,
      style: triggerStyle
    },
    isDragPlaceholder: isItemDragPlaceholder,
    groups: allGroups,
    existingLabels: Object.values(props).map(p => p.label),
    onDelete: onPropertyDelete,
    onUpdate: data => onPropertyUpdate(prop.overrideKey, data)
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Menu, _extends({}, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindMenu)(popupState), {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.MenuListItem, {
    sx: {
      minWidth: '160px'
    },
    onClick: handleRenameClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "caption",
    sx: {
      color: 'text.primary'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Rename', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    title: hasProperties ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('To delete the group, first remove all the properties', 'elementor-pro') : '',
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.MenuListItem, {
    onClick: handleDeleteClick,
    disabled: hasProperties
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "caption",
    sx: {
      color: hasProperties ? 'text.disabled' : 'error.light'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete', 'elementor-pro')))))));
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/property-item.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/property-item.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyItem: function() { return /* binding */ PropertyItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _overridable_props_overridable_prop_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../overridable-props/overridable-prop-form */ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-form.tsx");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sortable */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/sortable.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






function PropertyItem({
  prop,
  sortableTriggerProps,
  isDragPlaceholder,
  groups,
  existingLabels,
  onDelete,
  onUpdate
}) {
  const popoverState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.usePopupState)({
    variant: 'popover'
  });
  const icon = getElementIcon(prop);
  const popoverProps = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindPopover)(popoverState);
  const handleSubmit = data => {
    onUpdate(data);
    popoverState.close();
  };
  const handleDelete = event => {
    event.stopPropagation();
    onDelete(prop.overrideKey);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, _extends({}, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindTrigger)(popoverState), {
    "data-testid": "component-property-item",
    sx: {
      position: 'relative',
      pl: 0.5,
      pr: 1,
      py: 0.25,
      minHeight: 28,
      borderRadius: 1,
      border: '1px solid',
      borderColor: 'divider',
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
      opacity: isDragPlaceholder ? 0.5 : 1,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'action.hover'
      },
      '&:hover .sortable-trigger': {
        visibility: 'visible'
      },
      '& .sortable-trigger': {
        visibility: 'hidden'
      },
      '&:hover .delete-button': {
        visibility: 'visible'
      },
      '& .delete-button': {
        visibility: 'hidden'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sortable__WEBPACK_IMPORTED_MODULE_5__.SortableTrigger, sortableTriggerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      color: 'text.primary',
      fontSize: 12,
      padding: 0.25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: icon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "caption",
    sx: {
      color: 'text.primary',
      flexGrow: 1,
      fontSize: 10
    }
  }, prop.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
    size: "tiny",
    onClick: handleDelete,
    "aria-label": "Delete property",
    sx: {
      p: 0.25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
    fontSize: "tiny"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Popover, _extends({}, popoverProps, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    PaperProps: {
      sx: {
        width: popoverState.anchorEl?.getBoundingClientRect().width
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_overridable_props_overridable_prop_form__WEBPACK_IMPORTED_MODULE_4__.OverridablePropForm, {
    onSubmit: handleSubmit,
    currentValue: prop,
    groups: groups,
    existingLabels: existingLabels,
    sx: {
      width: '100%'
    }
  })));
}
function getElementIcon(prop) {
  const elType = prop.elType === 'widget' ? prop.widgetType : prop.elType;
  const widgetsCache = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getWidgetsCache)();
  if (!widgetsCache) {
    return 'eicon-apps';
  }
  const widgetConfig = widgetsCache[elType];
  return widgetConfig?.icon || 'eicon-apps';
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/sortable.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/sortable.tsx ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiSortableGroup: function() { return /* binding */ MultiSortableGroup; },
/* harmony export */   MultiSortableItem: function() { return /* binding */ MultiSortableItem; },
/* harmony export */   MultiSortableRoot: function() { return /* binding */ MultiSortableRoot; },
/* harmony export */   SortableItem: function() { return /* binding */ SortableItem; },
/* harmony export */   SortableProvider: function() { return /* binding */ SortableProvider; },
/* harmony export */   SortableTrigger: function() { return /* binding */ SortableTrigger; },
/* harmony export */   isMultiGroupSortingEnabled: function() { return /* binding */ isMultiGroupSortingEnabled; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/core-adapter-utils */ "@elementor/core-adapter-utils");
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




const SortableProvider = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.UnstableSortableProvider, _extends({
  restrictAxis: true,
  variant: "static",
  dragPlaceholderStyle: {
    opacity: '1'
  }
}, props));
const SortableTrigger = ({
  triggerClassName,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSortableTrigger, _extends({}, props, {
  role: "button",
  className: `sortable-trigger ${triggerClassName ?? ''}`.trim(),
  "aria-label": "sort"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__.GripVerticalIcon, {
  fontSize: "tiny"
}));
const SortableItem = ({
  children,
  id
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.UnstableSortableItem, {
  id: id,
  render: ({
    itemProps,
    isDragged,
    triggerProps,
    itemStyle,
    triggerStyle,
    dropIndicationStyle,
    showDropIndication,
    isDragOverlay,
    isDragPlaceholder
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, _extends({}, itemProps, {
    style: itemStyle,
    component: "div",
    role: "listitem",
    sx: {
      backgroundColor: isDragOverlay ? 'background.paper' : undefined
    }
  }), children({
    isDragged,
    isDragPlaceholder,
    triggerProps,
    triggerStyle
  }), showDropIndication && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SortableItemIndicator, {
    style: dropIndicationStyle
  }))
});
const MULTI_GROUP_SORTABLE_MIN_CORE_VERSION = '4.1.0';
const isMultiGroupSortingEnabled = (0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__.isCoreAtLeast)(MULTI_GROUP_SORTABLE_MIN_CORE_VERSION);
function MultiSortableRoot({
  children,
  value,
  onChange
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.UnstableSortable, {
    mode: "multiple",
    restrictAxis: true,
    dragPlaceholderStyle: {
      opacity: '1'
    },
    value: value,
    onChange: onChange
  }, children);
}
function MultiSortableGroup({
  groupId,
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.UnstableSortableGroup, {
    groupId: groupId
  }, children);
}
function MultiSortableItem({
  id,
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.UnstableSortableItem, {
    id: id
  }, children);
}
const StyledSortableTrigger = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.styled)('div')(({
  theme
}) => ({
  position: 'absolute',
  left: '-2px',
  top: '50%',
  transform: `translate( -${theme.spacing(1.5)}, -50% )`,
  color: theme.palette.action.active,
  cursor: 'grab'
}));
const SortableItemIndicator = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.styled)((0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box))`
	width: 100%;
	height: 1px;
	background-color: ${({
  theme
}) => theme.palette.text.primary};
`;

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/use-current-editable-item.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/use-current-editable-item.ts ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCurrentEditableItem: function() { return /* binding */ useCurrentEditableItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_rename_overridable_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/rename-overridable-group */ "./packages/packages/pro/editor-components-extended/src/store/actions/rename-overridable-group.ts");
/* harmony import */ var _utils_validate_group_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/validate-group-label */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/utils/validate-group-label.ts");







function useCurrentEditableItem() {
  const [editingGroupId, setEditingGroupId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const currentComponentId = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useCurrentComponentId)();
  const overridableProps = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useOverridableProps)(currentComponentId);
  const allGroupsRecord = overridableProps?.groups?.items ?? {};
  const currentGroup = editingGroupId ? allGroupsRecord[editingGroupId] : null;
  const validateLabel = newLabel => {
    const otherGroups = Object.fromEntries(Object.entries(allGroupsRecord).filter(([id]) => id !== editingGroupId));
    return (0,_utils_validate_group_label__WEBPACK_IMPORTED_MODULE_6__.validateGroupLabel)(newLabel, otherGroups) || null;
  };
  const handleSubmit = newLabel => {
    if (!editingGroupId || !currentComponentId) {
      throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Group ID or component ID is missing', 'elementor-pro'));
    }
    (0,_store_actions_rename_overridable_group__WEBPACK_IMPORTED_MODULE_5__.renameOverridableGroup)({
      componentId: currentComponentId,
      groupId: editingGroupId,
      label: newLabel
    });
    (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.setDocumentModifiedStatus)(true);
  };
  const {
    ref: editableRef,
    openEditMode,
    isEditing,
    error,
    getProps: getEditableProps
  } = (0,_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__.useEditable)({
    value: currentGroup?.label ?? '',
    onSubmit: handleSubmit,
    validation: validateLabel
  });
  return {
    editableRef,
    isEditing,
    error,
    getEditableProps,
    setEditingGroupId: groupId => {
      setEditingGroupId(groupId);
      openEditMode();
    },
    editingGroupId
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/use-multi-sortable-sync.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/use-multi-sortable-sync.ts ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMultiSortableSync: function() { return /* binding */ useMultiSortableSync; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apply_multi_sortable_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-multi-sortable-update */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/apply-multi-sortable-update.ts");
/* harmony import */ var _component_properties_sortable_ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-properties-sortable-ids */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-sortable-ids.ts");



function useMultiSortableSync({
  currentComponentId,
  overridableProps,
  groups,
  onPropertyDelete,
  onPropertyUpdate
}) {
  const [syncNonce, setSyncNonce] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const handlePropertyDelete = propKey => {
    onPropertyDelete(propKey);
    setSyncNonce(n => n + 1);
  };
  const handlePropertyUpdate = (overrideKey, data) => {
    const existing = overridableProps.props[overrideKey];
    const groupChanged = existing ? data.group !== existing.groupId : false;
    onPropertyUpdate(overrideKey, data);
    if (groupChanged) {
      setSyncNonce(n => n + 1);
    }
  };
  const handleSortableChange = updated => {
    (0,_apply_multi_sortable_update__WEBPACK_IMPORTED_MODULE_1__.applyMultiSortableUpdate)(updated, currentComponentId);
    if ((0,_apply_multi_sortable_update__WEBPACK_IMPORTED_MODULE_1__.hasDuplicateIds)(updated)) {
      setSyncNonce(n => n + 1);
    }
  };
  const sortableValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const headers = groups.map(g => g.id);
    const byGroup = Object.fromEntries(groups.map(g => [g.id, [...g.props]]));
    return {
      [_component_properties_sortable_ids__WEBPACK_IMPORTED_MODULE_2__.COMPONENT_PROP_GROUP_HEADERS_KEY]: headers,
      ...byGroup
    };
  }, [groups]);
  const sortableKey = `${groups.length}:${syncNonce}`;
  return {
    sortableKey,
    sortableValue,
    handlePropertyDelete,
    handlePropertyUpdate,
    handleSortableChange
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/utils/generate-unique-label.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/utils/generate-unique-label.ts ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUniqueLabel: function() { return /* binding */ generateUniqueLabel; }
/* harmony export */ });
const DEFAULT_NEW_GROUP_LABEL = 'New group';
function generateUniqueLabel(groups) {
  const existingLabels = new Set(groups.map(group => group.label));
  if (!existingLabels.has(DEFAULT_NEW_GROUP_LABEL)) {
    return DEFAULT_NEW_GROUP_LABEL;
  }
  let index = 1;
  let newLabel = `${DEFAULT_NEW_GROUP_LABEL}-${index}`;
  while (existingLabels.has(newLabel)) {
    index++;
    newLabel = `${DEFAULT_NEW_GROUP_LABEL}-${index}`;
  }
  return newLabel;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/utils/validate-group-label.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/utils/validate-group-label.ts ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_MESSAGES: function() { return /* binding */ ERROR_MESSAGES; },
/* harmony export */   validateGroupLabel: function() { return /* binding */ validateGroupLabel; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const ERROR_MESSAGES = {
  EMPTY_NAME: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group name is required', 'elementor-pro'),
  DUPLICATE_NAME: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group name already exists', 'elementor-pro')
};
function validateGroupLabel(label, existingGroups) {
  const trimmedLabel = label.trim();
  if (!trimmedLabel) {
    return ERROR_MESSAGES.EMPTY_NAME;
  }
  const isDuplicate = Object.values(existingGroups).some(group => group.label === trimmedLabel);
  if (isDuplicate) {
    return ERROR_MESSAGES.DUPLICATE_NAME;
  }
  return '';
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/components-tab/component-item.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/components-tab/component-item.tsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentItem: function() { return /* binding */ ComponentItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_archive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/archive-component */ "./packages/packages/pro/editor-components-extended/src/store/actions/archive-component.ts");
/* harmony import */ var _store_actions_rename_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/rename-component */ "./packages/packages/pro/editor-components-extended/src/store/actions/rename-component.ts");
/* harmony import */ var _utils_component_name_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/component-name-validation */ "./packages/packages/pro/editor-components-extended/src/utils/component-name-validation.ts");
/* harmony import */ var _utils_create_component_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/create-component-model */ "./packages/packages/pro/editor-components-extended/src/utils/create-component-model.ts");
/* harmony import */ var _utils_get_container_for_new_element__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/get-container-for-new-element */ "./packages/packages/pro/editor-components-extended/src/utils/get-container-for-new-element.ts");
/* harmony import */ var _delete_confirmation_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delete-confirmation-dialog */ "./packages/packages/pro/editor-components-extended/src/components/components-tab/delete-confirmation-dialog.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
















function ComponentItem({
  component
}) {
  const itemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    canRename,
    canDelete
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__.useComponentsPermissions)();
  const {
    data: isLicenseExpired = true,
    isPending: isLicenseFetching
  } = (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_6__.useIsLicenseExpired)();
  const shouldShowActions = (canRename || canDelete) && !isLicenseExpired;
  const {
    ref: editableRef,
    isEditing,
    openEditMode,
    error,
    getProps: getEditableProps
  } = (0,_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__.useEditable)({
    value: component.name,
    onSubmit: newName => (0,_store_actions_rename_component__WEBPACK_IMPORTED_MODULE_10__.renameComponent)(component.uid, newName),
    validation: validateComponentTitle
  });
  const componentModel = (0,_utils_create_component_model__WEBPACK_IMPORTED_MODULE_12__.createComponentModel)(component);
  const popupState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.usePopupState)({
    variant: 'popover',
    disableAutoFocus: true
  });
  const handleClick = () => {
    addComponentToPage(componentModel);
  };
  const handleDragEnd = () => {
    (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__.loadComponentsAssets)([componentModel]);
    (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__.endDragElementFromPanel)();
  };
  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
    popupState.close();
  };
  const handleDeleteConfirm = () => {
    if (!component.id) {
      throw new Error('Component ID is required');
    }
    setIsDeleteDialogOpen(false);
    (0,_store_actions_archive_component__WEBPACK_IMPORTED_MODULE_9__.archiveComponent)(component.id, component.name);
  };
  const handleDeleteDialogClose = () => {
    setIsDeleteDialogOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentItemWrapper, {
    isAnimating: isLicenseFetching
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__.WarningInfotip, {
    open: Boolean(error),
    text: error ?? '',
    placement: "bottom",
    width: itemRef.current?.getBoundingClientRect().width,
    offset: [0, -15]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__.ComponentItem, {
    ref: itemRef,
    component: component,
    disabled: isLicenseExpired,
    draggable: !isLicenseExpired,
    onDragStart: event => (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__.startDragElementFromPanel)(componentModel, event),
    onDragEnd: handleDragEnd,
    onClick: handleClick,
    isEditing: isEditing,
    error: error,
    nameSlot: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__.ComponentName, {
      name: component.name,
      editable: {
        ref: editableRef,
        isEditing,
        getProps: getEditableProps
      }
    }),
    endSlot: shouldShowActions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton, _extends({
      size: "tiny"
    }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.bindTrigger)(popupState), {
      "aria-label": "More actions"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_5__.DotsVerticalIcon, {
      fontSize: "tiny"
    })) : undefined
  })), shouldShowActions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.Menu, _extends({}, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.bindMenu)(popupState), {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }), canRename && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__.MenuListItem, {
    sx: {
      minWidth: '160px'
    },
    primaryTypographyProps: {
      variant: 'caption',
      color: 'text.primary'
    },
    onClick: () => {
      popupState.close();
      openEditMode();
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Rename', 'elementor-pro')), canDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__.MenuListItem, {
    sx: {
      minWidth: '160px'
    },
    primaryTypographyProps: {
      variant: 'caption',
      color: 'error.light'
    },
    onClick: handleDeleteClick
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Delete', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_delete_confirmation_dialog__WEBPACK_IMPORTED_MODULE_14__.DeleteConfirmationDialog, {
    open: isDeleteDialogOpen,
    onClose: handleDeleteDialogClose,
    onConfirm: handleDeleteConfirm
  }));
}
const addComponentToPage = model => {
  const {
    container,
    options
  } = (0,_utils_get_container_for_new_element__WEBPACK_IMPORTED_MODULE_13__.getContainerForNewElement)();
  if (!container) {
    throw new Error(`Can't find container to drop new component instance at`);
  }
  (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__.loadComponentsAssets)([model]);
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__.dropElement)({
    containerId: container.id,
    model,
    options: {
      ...options,
      useHistory: false,
      scrollIntoView: true
    }
  });
};
const validateComponentTitle = newTitle => {
  const result = (0,_utils_component_name_validation__WEBPACK_IMPORTED_MODULE_11__.validateComponentName)(newTitle);
  if (!result.errorMessage) {
    return null;
  }
  return result.errorMessage;
};
const pulse = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.keyframes)`
	0%, 100% { opacity: 0.4; }
	50% { opacity: 0.8; }
`;
const ComponentItemWrapper = ({
  children,
  isAnimating
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, {
  sx: {
    animation: isAnimating ? `${pulse} 1.5s ease-in-out infinite` : undefined
  }
}, children);

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/components-tab/components-footer.tsx":
/*!**************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/components-tab/components-footer.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsFooter: function() { return /* binding */ ComponentsFooter; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-mcp */ "@elementor/editor-mcp");
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/events */ "@elementor/events");
/* harmony import */ var _elementor_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);







const GENERATE_COMPONENT_PROMPT = 'Tell Angie what component you want to build';
const ANGIE_COMPONENTS_TAB_ENTRY = 'components_tab';
const ANGIE_CTA_CLICKED_EVENT = 'angie_cta_clicked';
const ComponentsFooter = () => {
  const {
    canCreate
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useComponentsPermissions)();
  if (!canCreate || !(0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__.isAngieAvailable)()) {
    return null;
  }
  const handleCreateClick = () => {
    (0,_elementor_events__WEBPACK_IMPORTED_MODULE_3__.trackEvent)({
      eventName: ANGIE_CTA_CLICKED_EVENT,
      entry_point: ANGIE_COMPONENTS_TAB_ENTRY,
      has_angie_installed: true
    });
    (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__.sendPromptToAngie)(GENERATE_COMPONENT_PROMPT);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Box, {
    sx: {
      position: 'sticky',
      bottom: 0,
      backgroundColor: 'background.default',
      px: 2,
      pb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "caption",
    color: "text.secondary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Create components with Angie', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "text",
    size: "small",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__.AIIcon, {
      fontSize: "small"
    }),
    onClick: handleCreateClick,
    sx: {
      color: '#c00bb9',
      px: '5px',
      py: '4px',
      minWidth: 'auto'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Create', 'elementor-pro')))));
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/components-tab/components.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/components-tab/components.tsx ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedComponents: function() { return /* binding */ ExtendedComponents; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-item */ "./packages/packages/pro/editor-components-extended/src/components/components-tab/component-item.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components-footer */ "./packages/packages/pro/editor-components-extended/src/components/components-tab/components-footer.tsx");
/* harmony import */ var _expired_components_promotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expired-components-promotion */ "./packages/packages/pro/editor-components-extended/src/components/components-tab/expired-components-promotion.tsx");
/* harmony import */ var _expired_empty_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expired-empty-state */ "./packages/packages/pro/editor-components-extended/src/components/components-tab/expired-empty-state.tsx");
/* harmony import */ var _pro_empty_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pro-empty-state */ "./packages/packages/pro/editor-components-extended/src/components/components-tab/pro-empty-state.tsx");











const ExtendedComponents = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.SearchProvider, {
    localStorageKey: "elementor-components-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExtendedComponentsContent, null)));
};
const ExtendedComponentsContent = () => {
  const {
    components,
    isLoading
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useComponents)();
  const hasComponents = !isLoading && components.length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hasComponents && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.ComponentSearch, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExtendedComponentsList, null));
};
const EMPTY_STATE_STYLE_ID = 'components-empty-state-full-height';
const FULL_HEIGHT_CSS = `
#elementor-panel-page-elements {
	display: flex;
	flex-direction: column;
	height: 100%;
}

#elementor-panel-elements {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 0;
}

#elementor-panel-elements-wrapper {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 0;
}
`;
const useFullHeightPanel = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    let style = document.getElementById(EMPTY_STATE_STYLE_ID);
    if (!style) {
      style = document.createElement('style');
      style.id = EMPTY_STATE_STYLE_ID;
      style.textContent = FULL_HEIGHT_CSS;
      document.head.appendChild(style);
    }
    return () => {
      document.getElementById(EMPTY_STATE_STYLE_ID)?.remove();
    };
  }, []);
};
const ExtendedComponentsList = () => {
  const {
    isLoading: isAllLoading
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useComponents)();
  const {
    components: filteredComponents,
    isLoading,
    searchValue
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useFilteredComponents)();
  const {
    data: isLicenseExpired = false,
    isPending: isLicenseFetching
  } = (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_3__.useIsLicenseExpired)();
  useFullHeightPanel();
  if (isLoading || isAllLoading || isLicenseFetching) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.LoadingComponents, null);
  }
  const isEmpty = !filteredComponents?.length;
  const isSearching = searchValue.length > 0;
  if (isEmpty) {
    if (isSearching) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.EmptySearchResult, null);
    }
    if (isLicenseExpired) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_expired_empty_state__WEBPACK_IMPORTED_MODULE_8__.ExpiredEmptyState, null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pro_empty_state__WEBPACK_IMPORTED_MODULE_9__.ProEmptyState, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    justifyContent: "space-between",
    sx: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.List, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      px: 2
    }
  }, filteredComponents.map(component => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_item__WEBPACK_IMPORTED_MODULE_5__.ComponentItem, {
    key: component.uid,
    component: component
  }))), isLicenseExpired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_expired_components_promotion__WEBPACK_IMPORTED_MODULE_7__.ExpiredComponentsPromotion, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_6__.ComponentsFooter, null));
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/components-tab/delete-confirmation-dialog.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/components-tab/delete-confirmation-dialog.tsx ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteConfirmationDialog: function() { return /* binding */ DeleteConfirmationDialog; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function DeleteConfirmationDialog({
  open,
  onClose,
  onConfirm
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
    open: open,
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog.Title, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete this component?', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog.ContentText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Existing instances on your pages will remain functional. You will no longer find this component in your list.', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog.Actions, {
    onClose: onClose,
    onConfirm: onConfirm
  }));
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/components-tab/expired-components-promotion.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/components-tab/expired-components-promotion.tsx ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpiredComponentsPromotion: function() { return /* binding */ ExpiredComponentsPromotion; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const RENEW_COMPONENTS_URL = 'https://go.elementor.com/renew-license-components-exist-footer/';
const ExpiredComponentsPromotion = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
  sx: {
    px: 2.5,
    pb: 2,
    position: 'sticky',
    bottom: 0,
    zIndex: 1000
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
  variant: "standard",
  color: "promotion",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__.CrownFilledIcon, {
    fontSize: "tiny"
  }),
  "aria-label": "expired-components-promotion",
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.AlertAction, {
    color: "promotion",
    variant: "contained",
    href: RENEW_COMPONENTS_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upgrade Now', 'elementor-pro')),
  sx: {
    maxWidth: 296
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
  sx: {
    gap: 0.5,
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.AlertTitle, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Create New Components', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, {
  variant: "caption"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Your Pro subscription has expired. Renew to create new components.', 'elementor-pro')))));

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/components-tab/expired-empty-state.tsx":
/*!****************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/components-tab/expired-empty-state.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpiredEmptyState: function() { return /* binding */ ExpiredEmptyState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





const RENEW_COMPONENTS_URL = 'https://go.elementor.com/renew-license-components/';
const SUBTITLE_OVERRIDE_SX = {
  fontSize: '0.875rem !important',
  fontWeight: '500 !important'
};
const ExpiredEmptyState = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    alignItems: "center",
    justifyContent: "start",
    sx: {
      px: 2,
      pt: 4
    },
    gap: 1.75,
    overflow: "hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__.ComponentsIcon, {
    fontSize: "large",
    sx: {
      color: 'text.secondary'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    align: "center",
    variant: "subtitle2",
    color: "text.secondary",
    sx: SUBTITLE_OVERRIDE_SX
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Create Reusable Components', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    align: "center",
    variant: "caption",
    color: "text.secondary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Create design elements that sync across your entire site.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.CtaButton, {
    size: "small",
    href: RENEW_COMPONENTS_URL
  }));
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/components-tab/pro-empty-state.tsx":
/*!************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/components-tab/pro-empty-state.tsx ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProEmptyState: function() { return /* binding */ ProEmptyState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-mcp */ "@elementor/editor-mcp");
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/events */ "@elementor/events");
/* harmony import */ var _elementor_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_can_show_angie_elementor_promotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/can-show-angie-elementor-promotion */ "./packages/packages/pro/editor-components-extended/src/utils/can-show-angie-elementor-promotion.ts");
/* harmony import */ var _angie_install_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../angie-install-dialog */ "./packages/packages/pro/editor-components-extended/src/components/angie-install-dialog/index.ts");
/* harmony import */ var _angie_intro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../angie-intro */ "./packages/packages/pro/editor-components-extended/src/components/angie-intro/index.ts");











const LEARN_MORE_URL = 'http://go.elementor.com/components-guide-article';
const GENERATE_COMPONENT_PROMPT = 'Tell Angie what component you want to build';
const ANGIE_COMPONENTS_TAB_ENTRY = 'components_tab';
const ANGIE_CTA_CLICKED_EVENT = 'angie_cta_clicked';

// Injected dynamically because global CSS would break the Widgets tab (shared panel elements).
const SUBTITLE_OVERRIDE_SX = {
  fontSize: '0.875rem !important',
  fontWeight: '500 !important'
};
const ProEmptyState = () => {
  const {
    canCreate
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useComponentsPermissions)();
  const {
    shouldShowIntro,
    suppressIntro
  } = (0,_angie_intro__WEBPACK_IMPORTED_MODULE_9__.useAngieIntro)();
  const [isIntroOpen, setIsIntroOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isInstallDialogOpen, setIsInstallDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const linkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleGenerateClick = () => {
    const hasAngieInstalled = (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__.isAngieAvailable)();
    (0,_elementor_events__WEBPACK_IMPORTED_MODULE_3__.trackEvent)({
      eventName: ANGIE_CTA_CLICKED_EVENT,
      entry_point: ANGIE_COMPONENTS_TAB_ENTRY,
      has_angie_installed: hasAngieInstalled
    });
    if (!hasAngieInstalled) {
      setIsInstallDialogOpen(true);
      return;
    }
    if ((0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__.isAngieSidebarOpen)()) {
      (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__.sendPromptToAngie)(GENERATE_COMPONENT_PROMPT);
      return;
    }
    if (shouldShowIntro) {
      setIsIntroOpen(true);
      return;
    }
    (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__.sendPromptToAngie)(GENERATE_COMPONENT_PROMPT);
  };
  const handleIntroConfirm = () => {
    suppressIntro();
    setIsIntroOpen(false);
    (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_2__.sendPromptToAngie)(GENERATE_COMPONENT_PROMPT);
  };
  const handleIntroClose = () => {
    setIsIntroOpen(false);
  };
  const handleInstallDialogClose = () => {
    setIsInstallDialogOpen(false);
  };
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const shortcutKey = isMac ? 'Cmd' : 'Ctrl';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    alignItems: "center",
    justifyContent: "start",
    height: "100%",
    sx: {
      px: 2,
      py: 4
    },
    gap: 1,
    overflow: "hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    alignItems: "center",
    gap: 1.75
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__.ComponentsIcon, {
    fontSize: "large",
    sx: {
      color: 'text.secondary'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    alignItems: "center",
    gap: 1.75
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    align: "center",
    variant: "subtitle2",
    color: "text.secondary",
    sx: SUBTITLE_OVERRIDE_SX
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Create your first component', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    align: "center",
    variant: "caption",
    color: "text.tertiary"
  }, canCreate ? `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('To create, press', 'elementor-pro')} ${shortcutKey}+ Shift + K ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('on div-block or flexbox.', 'elementor-pro')}` : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('With your current role, you cannot create components. Contact an administrator to create one.', 'elementor-pro')))), canCreate && (0,_utils_can_show_angie_elementor_promotion__WEBPACK_IMPORTED_MODULE_7__.canShowAngieElementorPromotion)() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    alignItems: "center",
    gap: 1,
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    variant: "subtitle2",
    color: "text.primary",
    sx: {
      py: 0.5,
      fontWeight: 500
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Or', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    alignItems: "center",
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    align: "center",
    variant: "caption",
    color: "text.tertiary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Create a custom component with Angie', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Link, {
    ref: linkRef,
    component: "button",
    variant: "caption",
    onClick: handleGenerateClick,
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: 0.5,
      gap: 0.5,
      color: '#c00bb9',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_4__.AIIcon, {
    sx: {
      fontSize: 16
    }
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Create component', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_angie_intro__WEBPACK_IMPORTED_MODULE_9__.AngieIntroPopover, {
    open: isIntroOpen,
    onClose: handleIntroClose,
    onConfirm: handleIntroConfirm,
    anchorRef: linkRef
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    alignItems: "center",
    gap: 0.5,
    sx: {
      mt: 'auto',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Divider, {
    sx: {
      width: '100%',
      mb: 2
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Typography, {
    align: "center",
    variant: "caption",
    color: "text.tertiary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Components are reusable elements that sync across your site.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Link, {
    href: LEARN_MORE_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    variant: "caption",
    color: "info.main"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Learn more', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_angie_install_dialog__WEBPACK_IMPORTED_MODULE_8__.AngieInstallDialog, {
    open: isInstallDialogOpen,
    onClose: handleInstallDialogClose,
    prompt: GENERATE_COMPONENT_PROMPT
  }));
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/create-component-form/create-component-form.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/create-component-form/create-component-form.tsx ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateComponentForm: function() { return /* binding */ CreateComponentForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-notifications */ "@elementor/editor-notifications");
/* harmony import */ var _elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_create_unpublished_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/create-unpublished-component */ "./packages/packages/pro/editor-components-extended/src/store/actions/create-unpublished-component.ts");
/* harmony import */ var _sync_prevent_non_atomic_nesting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sync/prevent-non-atomic-nesting */ "./packages/packages/pro/editor-components-extended/src/sync/prevent-non-atomic-nesting.ts");
/* harmony import */ var _utils_component_form_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/component-form-schema */ "./packages/packages/pro/editor-components-extended/src/utils/component-form-schema.ts");
/* harmony import */ var _hooks_use_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/use-form */ "./packages/packages/pro/editor-components-extended/src/components/create-component-form/hooks/use-form.ts");
/* harmony import */ var _utils_get_component_event_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/get-component-event-data */ "./packages/packages/pro/editor-components-extended/src/components/create-component-form/utils/get-component-event-data.ts");














const MAX_COMPONENTS = 100;
function CreateComponentForm() {
  const [element, setElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [anchorPosition, setAnchorPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    components
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useComponents)();
  const eventData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const OPEN_SAVE_AS_COMPONENT_FORM_EVENT = 'elementor/editor/open-save-as-component-form';
    const openPopup = event => {
      const {
        shouldOpen,
        notification
      } = shouldOpenForm(event.detail.element, components?.length ?? 0);
      if (!shouldOpen) {
        (0,_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_3__.notify)(notification);
        return;
      }
      setElement({
        element: event.detail.element,
        elementLabel: (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__.getElementLabel)(event.detail.element.id)
      });
      setAnchorPosition(event.detail.anchorPosition);
      eventData.current = (0,_utils_get_component_event_data__WEBPACK_IMPORTED_MODULE_12__.getComponentEventData)(event.detail.element, event.detail.options);
      (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.trackComponentEvent)({
        action: 'createClicked',
        // TODO: remove `source` in version 4.4.0
        source: 'user',
        executedBy: 'user',
        ...eventData.current
      });
    };
    window.addEventListener(OPEN_SAVE_AS_COMPONENT_FORM_EVENT, openPopup);
    return () => {
      window.removeEventListener(OPEN_SAVE_AS_COMPONENT_FORM_EVENT, openPopup);
    };
  }, [components?.length]);
  const handleSave = async values => {
    try {
      if (!element) {
        throw new Error(`Can't save element as component: element not found`);
      }
      const {
        uid,
        instanceId
      } = await (0,_store_actions_create_unpublished_component__WEBPACK_IMPORTED_MODULE_8__.createUnpublishedComponent)({
        name: values.componentName,
        element: element.element,
        eventData: eventData.current,
        executedBy: 'user'
      });
      const publishedComponentId = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.componentsSelectors.getComponentByUid(uid)?.id;
      if (publishedComponentId) {
        (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.switchToComponent)(publishedComponentId, instanceId);
      } else {
        throw new Error('Failed to find published component');
      }
      (0,_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_3__.notify)({
        type: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Component created successfully.', 'elementor-pro'),
        id: `component-saved-successfully-${uid}`
      });
      resetAndClosePopup();
    } catch {
      const errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Failed to create component. Please try again.', 'elementor-pro');
      (0,_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_3__.notify)({
        type: 'error',
        message: errorMessage,
        id: 'component-save-failed'
      });
      resetAndClosePopup();
    }
  };
  const resetAndClosePopup = () => {
    setElement(null);
    setAnchorPosition(undefined);
  };
  const cancelSave = () => {
    resetAndClosePopup();
    (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.trackComponentEvent)({
      action: 'createCancelled',
      // TODO: remove `source` in version 4.4.0
      source: 'user',
      executedBy: 'user',
      ...eventData.current
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Popover, {
    open: element !== null,
    onClose: cancelSave,
    anchorReference: "anchorPosition",
    anchorPosition: anchorPosition,
    "data-testid": "create-component-form"
  }, element !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, {
    initialValues: {
      componentName: element.elementLabel
    },
    handleSave: handleSave,
    closePopup: cancelSave
  })));
}
function shouldOpenForm(element, componentsCount) {
  const nonAtomicElements = (0,_sync_prevent_non_atomic_nesting__WEBPACK_IMPORTED_MODULE_9__.findNonAtomicElementsInElement)(element);
  if (nonAtomicElements.length > 0) {
    return {
      shouldOpen: false,
      notification: {
        type: 'default',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Components require atomic elements only. Remove widgets to create this component.', 'elementor-pro'),
        id: 'non-atomic-element-save-blocked'
      }
    };
  }
  if (componentsCount >= MAX_COMPONENTS) {
    return {
      shouldOpen: false,
      notification: {
        type: 'default',
        /* translators: %s is the maximum number of components */
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)(`You've reached the limit of %s components. Please remove an existing one to create a new component.`, 'elementor-pro').replace('%s', MAX_COMPONENTS.toString()),
        id: 'maximum-number-of-components-exceeded'
      }
    };
  }
  return {
    shouldOpen: true,
    notification: null
  };
}
const FONT_SIZE = 'tiny';
const Form = ({
  initialValues,
  handleSave,
  closePopup
}) => {
  const {
    values,
    errors,
    isValid,
    handleChange,
    validateForm
  } = (0,_hooks_use_form__WEBPACK_IMPORTED_MODULE_11__.useForm)(initialValues);
  const nameInputRef = (0,_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__.useTextFieldAutoSelect)();
  const {
    components
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useComponents)();
  const existingComponentNames = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return components?.map(component => component.name) ?? [];
  }, [components]);
  const changeValidationSchema = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_component_form_schema__WEBPACK_IMPORTED_MODULE_10__.createBaseComponentSchema)(existingComponentNames), [existingComponentNames]);
  const submitValidationSchema = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_component_form_schema__WEBPACK_IMPORTED_MODULE_10__.createSubmitComponentSchema)(existingComponentNames), [existingComponentNames]);
  const handleSubmit = () => {
    const {
      success,
      parsedValues
    } = validateForm(submitValidationSchema);
    if (success) {
      handleSave(parsedValues);
    }
  };
  const texts = {
    heading: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Create component', 'elementor-pro'),
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Name', 'elementor-pro'),
    cancel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Cancel', 'elementor-pro'),
    create: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Create', 'elementor-pro')
  };
  const nameInputId = 'component-name';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_4__.Form, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    alignItems: "start",
    width: "268px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: "row",
    alignItems: "center",
    py: 1,
    px: 1.5,
    sx: {
      columnGap: 0.5,
      borderBottom: '1px solid',
      borderColor: 'divider',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_5__.ComponentsIcon, {
    fontSize: FONT_SIZE
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Typography, {
    variant: "caption",
    sx: {
      color: 'text.primary',
      fontWeight: '500',
      lineHeight: 1
    }
  }, texts.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Grid, {
    container: true,
    gap: 0.75,
    alignItems: "start",
    p: 1.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
    htmlFor: nameInputId,
    size: "tiny"
  }, texts.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.TextField, {
    id: nameInputId,
    size: FONT_SIZE,
    fullWidth: true,
    value: values.componentName,
    onChange: e => handleChange(e, 'componentName', changeValidationSchema),
    inputProps: {
      style: {
        color: 'text.primary',
        fontWeight: '600'
      }
    },
    error: Boolean(errors.componentName),
    helperText: errors.componentName,
    inputRef: nameInputRef
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: "row",
    justifyContent: "flex-end",
    alignSelf: "end",
    py: 1,
    px: 1.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
    onClick: closePopup,
    color: "secondary",
    variant: "text",
    size: "small"
  }, texts.cancel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
    type: "submit",
    disabled: !isValid,
    variant: "contained",
    color: "primary",
    size: "small"
  }, texts.create))));
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/create-component-form/hooks/use-form.ts":
/*!*****************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/create-component-form/hooks/use-form.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useForm: function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useForm = initialValues => {
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const isValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return !Object.values(errors).some(error => error);
  }, [errors]);
  const handleChange = (e, field, validationSchema) => {
    const updated = {
      ...values,
      [field]: e.target.value
    };
    setValues(updated);
    const {
      success,
      errors: validationErrors
    } = validateForm(updated, validationSchema);
    if (!success) {
      setErrors(validationErrors);
    } else {
      setErrors({});
    }
  };
  const validate = validationSchema => {
    const {
      success,
      errors: validationErrors,
      parsedValues
    } = validateForm(values, validationSchema);
    if (!success) {
      setErrors(validationErrors);
      return {
        success
      };
    }
    setErrors({});
    return {
      success,
      parsedValues
    };
  };
  return {
    values,
    errors,
    isValid,
    handleChange,
    validateForm: validate
  };
};
const validateForm = (values, schema) => {
  const result = schema.safeParse(values);
  if (result.success) {
    return {
      success: true,
      parsedValues: result.data
    };
  }
  const errors = {};
  Object.entries(result.error.formErrors.fieldErrors).forEach(([field, error]) => {
    errors[field] = error[0];
  });
  return {
    success: false,
    errors
  };
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/create-component-form/utils/get-component-event-data.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/create-component-form/utils/get-component-event-data.ts ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponentEventData: function() { return /* binding */ getComponentEventData; }
/* harmony export */ });
const getComponentEventData = (containerElement, options) => {
  const {
    elementsCount,
    componentsCount
  } = countNestedElements(containerElement);
  return {
    nested_elements_count: elementsCount,
    nested_components_count: componentsCount,
    top_element_type: containerElement.elType,
    location: options?.location,
    secondary_location: options?.secondaryLocation,
    trigger: options?.trigger
  };
};
function countNestedElements(container) {
  if (!container.elements || container.elements.length === 0) {
    return {
      elementsCount: 0,
      componentsCount: 0
    };
  }
  let elementsCount = container.elements.length;
  let componentsCount = 0;
  for (const element of container.elements) {
    if (element.widgetType === 'e-component') {
      componentsCount++;
    }
    const {
      elementsCount: nestedElementsCount,
      componentsCount: nestedComponentsCount
    } = countNestedElements(element);
    elementsCount += nestedElementsCount;
    componentsCount += nestedComponentsCount;
  }
  return {
    elementsCount,
    componentsCount
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/spotlight-backdrop.tsx":
/*!*******************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/spotlight-backdrop.tsx ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpotlightBackdropFallback: function() { return /* binding */ SpotlightBackdropFallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_element_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-element-rect */ "./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-element-rect.ts");


function SpotlightBackdropFallback({
  canvas,
  element,
  onExit,
  ariaLabel
}) {
  const rect = (0,_use_element_rect__WEBPACK_IMPORTED_MODULE_1__.useElementRectFallback)(element);
  const clipPath = element ? getRectClipPath(rect, canvas.defaultView) : undefined;
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    pointerEvents: 'painted',
    cursor: 'pointer',
    clipPath
  };
  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onExit();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: backdropStyle,
    onClick: onExit,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: 0,
    "aria-label": ariaLabel
  });
}
function getRectClipPath(rect, viewport) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  const {
    innerWidth: vw,
    innerHeight: vh
  } = viewport;
  return `path(evenodd, 'M 0 0 L ${vw} 0 L ${vw} ${vh} L 0 ${vh} Z M ${x} ${y} L ${x + width} ${y} L ${x + width} ${y + height} L ${x} ${y + height} L ${x} ${y} Z')`;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-canvas-document.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-canvas-document.ts ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCanvasDocumentFallback: function() { return /* binding */ useCanvasDocumentFallback; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);

function useCanvasDocumentFallback() {
  return (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateUseListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.commandEndEvent)('editor/documents/attach-preview'), () => (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.getCanvasIframeDocument)());
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-element-rect.ts":
/*!****************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-element-rect.ts ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useElementRectFallback: function() { return /* binding */ useElementRectFallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/utils */ "@elementor/utils");
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_utils__WEBPACK_IMPORTED_MODULE_1__);


function useElementRectFallback(element) {
  const [rect, setRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new DOMRect(0, 0, 0, 0));
  const onChange = (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_1__.throttle)(() => {
    setRect(element?.getBoundingClientRect() ?? new DOMRect(0, 0, 0, 0));
  }, 20, true);
  useScrollListener({
    element,
    onChange
  });
  useResizeListener({
    element,
    onChange
  });
  useMutationsListener({
    element,
    onChange
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    onChange.cancel();
  }, [onChange]);
  return rect;
}
function useScrollListener({
  element,
  onChange
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!element) {
      return;
    }
    const win = element.ownerDocument?.defaultView;
    win?.addEventListener('scroll', onChange, {
      passive: true
    });
    return () => {
      win?.removeEventListener('scroll', onChange);
    };
  }, [element, onChange]);
}
function useResizeListener({
  element,
  onChange
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!element) {
      return;
    }
    const resizeObserver = new ResizeObserver(onChange);
    resizeObserver.observe(element);
    const win = element.ownerDocument?.defaultView;
    win?.addEventListener('resize', onChange, {
      passive: true
    });
    return () => {
      resizeObserver.disconnect();
      win?.removeEventListener('resize', onChange);
    };
  }, [element, onChange]);
}
function useMutationsListener({
  element,
  onChange
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!element) {
      return;
    }
    const mutationObserver = new MutationObserver(onChange);
    mutationObserver.observe(element, {
      childList: true,
      subtree: true
    });
    return () => {
      mutationObserver.disconnect();
    };
  }, [element, onChange]);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-escape-on-canvas.ts":
/*!********************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-escape-on-canvas.ts ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEscapeOnCanvasFallback: function() { return /* binding */ useEscapeOnCanvasFallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEscapeOnCanvasFallback(canvasDocument, onEscape) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!canvasDocument) {
      return;
    }
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onEscape();
      }
    };
    canvasDocument.body.addEventListener('keydown', handleEsc);
    return () => {
      canvasDocument.body.removeEventListener('keydown', handleEsc);
    };
  }, [canvasDocument, onEscape]);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/edit-component/component-modal.tsx":
/*!************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/edit-component/component-modal.tsx ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentModal: function() { return /* binding */ ComponentModal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit_mode_infra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-mode-infra */ "./packages/packages/pro/editor-components-extended/src/components/edit-component/edit-mode-infra.tsx");




function ComponentModal({
  topLevelElementDom,
  onClose
}) {
  const canvasDocument = (0,_edit_mode_infra__WEBPACK_IMPORTED_MODULE_3__.useCanvasDocument)();
  (0,_edit_mode_infra__WEBPACK_IMPORTED_MODULE_3__.useEscapeOnCanvas)(canvasDocument, onClose);
  if (!canvasDocument?.body) {
    return null;
  }
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlockEditPage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_edit_mode_infra__WEBPACK_IMPORTED_MODULE_3__.SpotlightBackdrop, {
    canvas: canvasDocument,
    element: topLevelElementDom,
    onExit: onClose,
    ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Exit component editing mode', 'elementor-pro')
  })), canvasDocument.body);
}

/**
 * when switching to another document id, we get a document handler when hovering
 * this functionality originates in Pro, and is intended for editing templates, e.g. header/footer
 * in components we don't want that, so the easy way out is to prevent it of being displayed via a CSS rule
 */
function BlockEditPage() {
  const blockV3DocumentHandlesStyles = `
	.elementor-editor-active {
		& .elementor-section-wrap.ui-sortable {
			display: contents;
		}

		& *[data-editable-elementor-document]:not(.elementor-edit-mode):hover {
			& .elementor-document-handle:not(.elementor-document-save-back-handle) {
				display: none;

				&::before,
				& .elementor-document-handle__inner {
					display: none;
				}
			}
		}
	}
	`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", {
    "data-e-style-id": "e-block-v3-document-handles-styles"
  }, blockV3DocumentHandlesStyles);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/edit-component/edit-component.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/edit-component/edit-component.tsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: function() { return /* binding */ EditComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/utils */ "@elementor/utils");
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../consts */ "./packages/packages/pro/editor-components-extended/src/consts.ts");
/* harmony import */ var _hooks_use_navigate_back__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-navigate-back */ "./packages/packages/pro/editor-components-extended/src/hooks/use-navigate-back.ts");
/* harmony import */ var _store_actions_reset_sanitized_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/reset-sanitized-components */ "./packages/packages/pro/editor-components-extended/src/store/actions/reset-sanitized-components.ts");
/* harmony import */ var _store_actions_update_current_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/update-current-component */ "./packages/packages/pro/editor-components-extended/src/store/actions/update-current-component.ts");
/* harmony import */ var _component_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component-modal */ "./packages/packages/pro/editor-components-extended/src/components/edit-component/component-modal.tsx");












function EditComponent() {
  const currentComponentId = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useCurrentComponentId)();
  useHandleDocumentSwitches();
  const navigateBack = (0,_hooks_use_navigate_back__WEBPACK_IMPORTED_MODULE_7__.useNavigateBack)();
  const onClose = (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_5__.throttle)(navigateBack, 100);
  const topLevelElementDom = useComponentDOMElement(currentComponentId ?? undefined);
  if (!currentComponentId) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_modal__WEBPACK_IMPORTED_MODULE_10__.ComponentModal, {
    topLevelElementDom: topLevelElementDom,
    onClose: onClose
  });
}
function useHandleDocumentSwitches() {
  const documentsManager = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.getV1DocumentsManager)();
  const currentComponentId = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useCurrentComponentId)();
  const path = (0,_elementor_store__WEBPACK_IMPORTED_MODULE_4__.__useSelector)(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.selectPath);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.commandEndEvent)('editor/documents/open'), () => {
      const nextDocument = documentsManager.getCurrent();
      if (nextDocument.id === currentComponentId) {
        return;
      }
      if (currentComponentId) {
        _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.apiClient.unlockComponent(currentComponentId);
      }
      (0,_store_actions_reset_sanitized_components__WEBPACK_IMPORTED_MODULE_8__.resetSanitizedComponents)();
      const isComponent = nextDocument.config.type === _consts__WEBPACK_IMPORTED_MODULE_6__.COMPONENT_DOCUMENT_TYPE;
      if (!isComponent) {
        (0,_store_actions_update_current_component__WEBPACK_IMPORTED_MODULE_9__.updateCurrentComponent)({
          path: [],
          currentComponentId: null
        });
        return;
      }
      (0,_store_actions_update_current_component__WEBPACK_IMPORTED_MODULE_9__.updateCurrentComponent)({
        path: getUpdatedComponentPath(path, nextDocument),
        currentComponentId: nextDocument.id
      });
    });
  }, [path, documentsManager, currentComponentId]);
}
function getUpdatedComponentPath(path, nextDocument) {
  const componentIndex = path.findIndex(({
    componentId
  }) => componentId === nextDocument.id);
  if (componentIndex >= 0) {
    // When exiting the editing of a nested component - we in fact go back a step
    // so we need to make sure the path is cleaned up of any newer items
    // By doing it with the slice and not a simple pop() - we could jump to any component in the path and make sure it becomes the current one
    return path.slice(0, componentIndex + 1);
  }
  const instanceId = nextDocument?.container.view?.el?.dataset.id;
  const instanceTitle = getInstanceTitle(instanceId, path);
  return [...path, {
    instanceId,
    instanceTitle,
    componentId: nextDocument.id
  }];
}
function getInstanceTitle(instanceId, path) {
  if (!instanceId) {
    return undefined;
  }
  const documentsManager = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.getV1DocumentsManager)();
  const parentDocId = path.at(-1)?.componentId ?? documentsManager.getInitialId();
  const parentDoc = documentsManager.get(parentDocId);
  const parentContainer = parentDoc?.container;
  const widget = parentContainer?.children?.findRecursive?.(container => container.id === instanceId);
  const editorSettings = widget?.model?.get?.('editor_settings');
  return editorSettings?.title;
}
function useComponentDOMElement(id) {
  const {
    componentContainerDomElement,
    topLevelElementDom
  } = getComponentDOMElements(id);
  const [currentElementDom, setCurrentElementDom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(topLevelElementDom);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCurrentElementDom(topLevelElementDom);
  }, [topLevelElementDom]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!componentContainerDomElement) {
      return;
    }
    const mutationObserver = new MutationObserver(() => {
      const newElementDom = componentContainerDomElement.children[0];
      setCurrentElementDom(newElementDom);
    });
    mutationObserver.observe(componentContainerDomElement, {
      childList: true
    });
    return () => {
      mutationObserver.disconnect();
    };
  }, [componentContainerDomElement]);
  return currentElementDom;
}
function getComponentDOMElements(id) {
  if (!id) {
    return {
      componentContainerDomElement: null,
      topLevelElementDom: null
    };
  }
  const documentsManager = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.getV1DocumentsManager)();
  const currentComponent = documentsManager.get(id);
  const componentContainer = currentComponent?.container;
  const componentContainerDomElement = componentContainer?.view?.el?.children?.[0] ?? null;
  const topLevelElementDom = componentContainerDomElement?.children[0] ?? null;
  return {
    componentContainerDomElement,
    topLevelElementDom
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/edit-component/edit-mode-infra.tsx":
/*!************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/edit-component/edit-mode-infra.tsx ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpotlightBackdrop: function() { return /* binding */ SpotlightBackdrop; },
/* harmony export */   useCanvasDocument: function() { return /* binding */ useCanvasDocument; },
/* harmony export */   useEscapeOnCanvas: function() { return /* binding */ useEscapeOnCanvas; }
/* harmony export */ });
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/core-adapter-utils */ "@elementor/core-adapter-utils");
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _backward_compat_spotlight_backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backward-compat/spotlight-backdrop */ "./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/spotlight-backdrop.tsx");
/* harmony import */ var _backward_compat_use_canvas_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backward-compat/use-canvas-document */ "./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-canvas-document.ts");
/* harmony import */ var _backward_compat_use_escape_on_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backward-compat/use-escape-on-canvas */ "./packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-escape-on-canvas.ts");





const MINIMUM_CORE_WITH_SHARED_INFRA = '4.2.0';
const hasSharedEditModeInfra = (0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__.isCoreAtLeast)(MINIMUM_CORE_WITH_SHARED_INFRA);
const useCanvasDocument = hasSharedEditModeInfra ? _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__.useCanvasDocument : _backward_compat_use_canvas_document__WEBPACK_IMPORTED_MODULE_3__.useCanvasDocumentFallback;
const useEscapeOnCanvas = hasSharedEditModeInfra ? _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__.useEscapeOnCanvas : _backward_compat_use_escape_on_canvas__WEBPACK_IMPORTED_MODULE_4__.useEscapeOnCanvasFallback;
const SpotlightBackdrop = hasSharedEditModeInfra ? _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__.SpotlightBackdrop : _backward_compat_spotlight_backdrop__WEBPACK_IMPORTED_MODULE_2__.SpotlightBackdropFallback;

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/instance-editing-panel/instance-editing-panel.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/instance-editing-panel/instance-editing-panel.tsx ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedInstanceEditingPanel: function() { return /* binding */ ExtendedInstanceEditingPanel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





function ExtendedInstanceEditingPanel() {
  const {
    canEdit
  } = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useComponentsPermissions)();
  const data = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useInstancePanelData)();
  if (!data) {
    return null;
  }
  const {
    componentId,
    component,
    overrides,
    overridableProps,
    groups,
    isEmpty,
    componentInstanceId
  } = data;

  /* translators: %s: Item title. */
  const panelTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Edit %s', 'elementor-pro').replace('%s', component.name);
  const handleEditComponent = () => (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.switchToComponent)(componentId, componentInstanceId);
  const actions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: "row",
    gap: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.DetachAction, {
    componentInstanceId: componentInstanceId,
    componentId: componentId
  }), canEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.EditComponentAction, {
    label: panelTitle,
    onClick: handleEditComponent,
    icon: _elementor_icons__WEBPACK_IMPORTED_MODULE_2__.PencilIcon
  }) : null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "data-testid": "instance-editing-panel",
    sx: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.ComponentInstanceProvider, {
    componentId: componentId,
    overrides: overrides,
    overridableProps: overridableProps
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.InstancePanelHeader, {
    componentName: component.name,
    actions: actions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.InstancePanelBody, {
    groups: groups,
    isEmpty: isEmpty,
    emptyState: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.InstanceEmptyState, {
      onEditComponent: canEdit ? handleEditComponent : undefined
    }),
    componentInstanceId: componentInstanceId
  })));
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/load-template-components.tsx":
/*!******************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/load-template-components.tsx ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadTemplateComponents: function() { return /* binding */ LoadTemplateComponents; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_templates_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-templates-extended */ "@elementor/editor-templates-extended");
/* harmony import */ var _elementor_editor_templates_extended__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_templates_extended__WEBPACK_IMPORTED_MODULE_2__);




const LoadTemplateComponents = () => {
  if ((0,_elementor_editor_templates_extended__WEBPACK_IMPORTED_MODULE_2__.isCoreHandlingTemplateStyles)()) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadTemplateComponentsInternal, null);
};
function LoadTemplateComponentsInternal() {
  const templates = (0,_elementor_editor_templates_extended__WEBPACK_IMPORTED_MODULE_2__.useLoadedTemplates)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.loadComponentsAssets)(templates.flatMap(elements => elements ?? []));
  }, [templates]);
  return null;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/indicator.tsx":
/*!*********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/overridable-props/indicator.tsx ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Indicator: function() { return /* binding */ Indicator; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }





const SIZE = 'tiny';
const IconContainer = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.styled)((0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Box))`
	pointer-events: none;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;

	& > svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50% );
		width: 10px;
		height: 10px;
		fill: ${({
  theme
}) => theme.palette.primary.contrastText};
		stroke: ${({
  theme
}) => theme.palette.primary.contrastText};
		stroke-width: 2px;
	}
`;
const Content = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.styled)((0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Box))`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 16px;
	height: 16px;
	margin-inline: ${({
  theme
}) => theme.spacing(0.5)};

	&:before {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50% ) rotate( 45deg );
		width: 5px;
		height: 5px;
		border-radius: 1px;
		background-color: ${({
  theme
}) => theme.palette.primary.main};
		transition: all 0.1s ease-in-out;
	}

	&:hover,
	&.enlarged {
		&:before {
			width: 12px;
			height: 12px;
			border-radius: 2px;
		}

		.icon {
			opacity: 1;
		}
	}
`;
const Indicator = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  isOpen,
  isOverridable,
  ...props
}, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content, _extends({
  role: "button",
  ref: ref
}, props, {
  className: isOpen || isOverridable ? 'enlarged' : '',
  "aria-label": isOverridable ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Overridable property', 'elementor-pro') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Make prop overridable', 'elementor-pro')
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconContainer, {
  className: "icon"
}, isOverridable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__.CheckIcon, {
  fontSize: SIZE
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__.PlusIcon, {
  fontSize: SIZE
}))));

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-control.tsx":
/*!************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-control.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverridablePropControl: function() { return /* binding */ OverridablePropControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../consts */ "./packages/packages/pro/editor-components-extended/src/consts.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






function OverridablePropControl({
  OriginalControl,
  ...props
}) {
  const {
    elementType
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.useElement)();
  const {
    value,
    bind,
    setValue,
    placeholder,
    ...propContext
  } = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.useBoundProp)(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.componentOverridablePropTypeUtil);
  const componentId = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useCurrentComponentId)();
  const overridableProps = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useOverridableProps)(componentId);
  const filteredReplacements = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.getControlReplacements)().filter(r => !r.id || r.id !== _consts__WEBPACK_IMPORTED_MODULE_4__.OVERRIDABLE_PROP_REPLACEMENT_ID);
  if (!componentId) {
    return null;
  }
  if (!value?.override_key) {
    throw new Error('Override key is required');
  }
  const isComponentInstance = elementType.key === 'e-component';
  const overridablePropData = overridableProps?.props?.[value.override_key];
  const setOverridableValue = newValue => {
    const propValue = {
      ...value,
      origin_value: newValue[bind]
    };
    setValue(propValue);
    if (!isComponentInstance) {
      (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.updateOverridableProp)(componentId, propValue, overridablePropData?.originPropFields);
    }
  };
  const defaultPropType = elementType.propsSchema[bind];
  const overridePropType = overridablePropData ? (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.getPropTypeForComponentOverride)(overridablePropData) : undefined;
  const resolvedPropType = overridePropType ?? defaultPropType;
  if (!resolvedPropType) {
    return null;
  }
  const propType = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.createTopLevelObjectType)({
    schema: {
      [bind]: resolvedPropType
    }
  });
  const propValue = isComponentInstance ? (value.origin_value?.value).override_value : value.origin_value;
  const objectPlaceholder = placeholder ? {
    [bind]: placeholder
  } : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.OverridablePropProvider, {
    value: value
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.PropProvider, _extends({}, propContext, {
    propType: propType,
    setValue: setOverridableValue,
    value: {
      [bind]: propValue
    },
    placeholder: objectPlaceholder
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.PropKeyProvider, {
    bind: bind
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.ControlReplacementsProvider, {
    replacements: filteredReplacements
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControlWithReplacements, {
    OriginalControl: OriginalControl,
    props: props
  })))));
}
function ControlWithReplacements({
  OriginalControl,
  props
}) {
  const {
    ControlToRender,
    isReplaced
  } = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.useControlReplacement)(OriginalControl);
  if (isReplaced) {
    const ReplacementControl = ControlToRender;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReplacementControl, _extends({}, props, {
      OriginalControl: OriginalControl
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OriginalControl, props);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-form.tsx":
/*!*********************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-form.tsx ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverridablePropForm: function() { return /* binding */ OverridablePropForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_validate_prop_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/validate-prop-label */ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/utils/validate-prop-label.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






const SIZE = 'tiny';
const DEFAULT_GROUP = {
  value: null,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'elementor-pro')
};
function OverridablePropForm({
  onSubmit,
  groups,
  currentValue,
  existingLabels = [],
  sx
}) {
  const selectGroups = groups?.length ? groups : [DEFAULT_GROUP];
  const [propLabel, setPropLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentValue?.label ?? null);
  const [group, setGroup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentValue?.groupId ?? selectGroups[0]?.value ?? null);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const name = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Name', 'elementor-pro');
  const groupName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Group Name', 'elementor-pro');
  const isCreate = currentValue === undefined;
  const title = isCreate ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Create new property', 'elementor-pro') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Update property', 'elementor-pro');
  const ctaLabel = isCreate ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Create', 'elementor-pro') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Update', 'elementor-pro');
  const handleSubmit = () => {
    const validationResult = (0,_utils_validate_prop_label__WEBPACK_IMPORTED_MODULE_4__.validatePropLabel)(propLabel ?? '', existingLabels, currentValue?.label);
    if (!validationResult.isValid) {
      setError(validationResult.errorMessage);
      return;
    }
    onSubmit({
      label: propLabel ?? '',
      group
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: handleSubmit,
    "data-testid": "overridable-prop-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    alignItems: "start",
    sx: {
      width: '268px',
      ...sx
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    direction: "row",
    alignItems: "center",
    py: 1,
    px: 1.5,
    sx: {
      columnGap: 0.5,
      borderBottom: '1px solid',
      borderColor: 'divider',
      width: '100%',
      mb: 1.5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "caption",
    sx: {
      color: 'text.primary',
      fontWeight: '500',
      lineHeight: 1
    }
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    container: true,
    gap: 0.75,
    alignItems: "start",
    px: 1.5,
    mb: 1.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
    size: "tiny"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: name,
    size: SIZE,
    fullWidth: true,
    autoFocus: true // eslint-disable-line jsx-a11y/no-autofocus -- ED-23316: primary field when exposing a property
    ,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter value', 'elementor-pro'),
    value: propLabel ?? '',
    onChange: e => {
      const newValue = e.target.value;
      setPropLabel(newValue);
      const validationResult = (0,_utils_validate_prop_label__WEBPACK_IMPORTED_MODULE_4__.validatePropLabel)(newValue, existingLabels, currentValue?.label);
      setError(validationResult.errorMessage);
    },
    error: Boolean(error),
    helperText: error
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    container: true,
    gap: 0.75,
    alignItems: "start",
    px: 1.5,
    mb: 1.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
    size: "tiny"
  }, groupName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
    name: groupName,
    size: SIZE,
    fullWidth: true,
    value: group ?? null,
    onChange: e => setGroup(e.target.value),
    displayEmpty: true,
    renderValue: selectedValue => {
      if (!selectedValue) {
        return selectGroups[0].label;
      }
      return selectGroups.find(({
        value
      }) => value === selectedValue)?.label ?? selectedValue;
    }
  }, selectGroups.map(({
    label: groupLabel,
    ...props
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.MenuListItem, _extends({
    key: props.value
  }, props, {
    value: props.value ?? ''
  }), groupLabel))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    direction: "row",
    justifyContent: "flex-end",
    alignSelf: "end",
    mt: 1.5,
    py: 1,
    px: 1.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "submit",
    disabled: !propLabel || Boolean(error),
    variant: "contained",
    color: "primary",
    size: "small"
  }, ctaLabel))));
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-indicator.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-indicator.tsx ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: function() { return /* binding */ Content; },
/* harmony export */   OverridablePropIndicator: function() { return /* binding */ OverridablePropIndicator; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_create_component_overridable_prop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/create-component-overridable-prop */ "./packages/packages/pro/editor-components-extended/src/store/actions/create-component-overridable-prop.ts");
/* harmony import */ var _store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/delete-component-overridable-prop */ "./packages/packages/pro/editor-components-extended/src/store/actions/delete-component-overridable-prop.ts");
/* harmony import */ var _store_actions_update_overridable_prop_params__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/update-overridable-prop-params */ "./packages/packages/pro/editor-components-extended/src/store/actions/update-overridable-prop-params.ts");
/* harmony import */ var _indicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./indicator */ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/indicator.tsx");
/* harmony import */ var _overridable_prop_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overridable-prop-form */ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-form.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }















function OverridablePropIndicator() {
  const {
    propType
  } = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.useBoundProp)();
  const componentId = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useCurrentComponentId)();
  const overridableProps = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useSanitizeOverridableProps)(componentId);
  if (!isPropAllowed(propType) || !componentId || !overridableProps) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content, {
    componentId: componentId,
    overridableProps: overridableProps
  });
}
function Content({
  componentId,
  overridableProps
}) {
  const {
    element: {
      id: elementId
    },
    elementType
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__.useElement)();
  const {
    value,
    bind,
    propType,
    setValue: setElementOriginValue
  } = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.useBoundProp)();
  const contextOverridableValue = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useOverridablePropValue)();
  const componentInstanceElement = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useComponentInstanceElement)();
  const {
    value: boundPropOverridableValue,
    setValue: setElementOverridableValue
  } = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.useBoundProp)(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.componentOverridablePropTypeUtil);
  const makePropOverridable = useUndoableMakePropOverridable({
    setElementOverridableValue,
    setElementOriginValue
  });

  /**
   * This is intended to handle custom layout controls, such as <LinkControl />, which has <ControlLabel /> nested within it
   * i.e. its bound prop value would be the one manipulated by the new <PropProvider /> thus won't be considered overridable
   */
  const overridableValue = boundPropOverridableValue ?? contextOverridableValue;
  const popupState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.usePopupState)({
    variant: 'popover'
  });
  const triggerProps = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.bindTrigger)(popupState);
  const popoverProps = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.bindPopover)(popupState);
  const {
    elType
  } = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_5__.getWidgetsCache)()?.[elementType.key] ?? {
    elType: 'widget'
  };
  const handleSubmit = ({
    label,
    group
  }) => {
    const matchingOverridableProp = overridableValue ? overridableProps?.props?.[overridableValue.override_key] : undefined;
    if (matchingOverridableProp) {
      // updating label / group of the existing overridable prop
      (0,_store_actions_update_overridable_prop_params__WEBPACK_IMPORTED_MODULE_11__.updateOverridablePropParams)({
        componentId,
        overrideKey: matchingOverridableProp.overrideKey,
        label,
        groupId: group
      });
    } else {
      // making the prop overridable for the first time
      const propTypeDefault = propType.default ?? {};
      const elementOriginValue = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.resolveOverridePropValue)(overridableValue?.origin_value) ?? value ?? propTypeDefault;
      const componentOverridablePropConfig = {
        componentId,
        overrideKey: overridableValue?.override_key ?? null,
        elementId: componentInstanceElement?.element.id ?? elementId,
        label,
        groupId: group,
        propKey: bind,
        elType: elType ?? 'widget',
        widgetType: componentInstanceElement?.elementType.key ?? elementType.key,
        originValue: elementOriginValue,
        executedBy: 'user'
      };
      makePropOverridable({
        componentOverridablePropConfig,
        elementOriginValue
      });
    }
    popupState.close();
  };
  const overridableConfig = overridableValue ? (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.getOverridableProp)({
    componentId,
    overrideKey: overridableValue.override_key
  }) : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
    placement: "top",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Override Property', 'elementor-pro')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_indicator__WEBPACK_IMPORTED_MODULE_12__.Indicator, _extends({}, triggerProps, {
    isOpen: !!popoverProps.open,
    isOverridable: !!overridableValue
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_7__.Popover, _extends({
    disableScrollLock: true,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    PaperProps: {
      sx: {
        my: 2.5
      }
    }
  }, popoverProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_overridable_prop_form__WEBPACK_IMPORTED_MODULE_13__.OverridablePropForm, {
    onSubmit: handleSubmit,
    groups: overridableProps?.groups.order.map(groupId => ({
      value: groupId,
      label: overridableProps.groups.items[groupId].label
    })),
    existingLabels: Object.values(overridableProps?.props ?? {}).map(prop => prop.label),
    currentValue: overridableConfig
  })));
}
function isPropAllowed(propType) {
  return propType.meta.overridable !== false;
}
function useUndoableMakePropOverridable({
  setElementOverridableValue,
  setElementOriginValue
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const makePropOverridable = ({
      componentOverridablePropConfig,
      elementOriginValue
    }) => {
      const overridableProp = (0,_store_actions_create_component_overridable_prop__WEBPACK_IMPORTED_MODULE_9__.createComponentOverridableProp)(componentOverridablePropConfig);
      setElementOverridableValue({
        override_key: overridableProp.overrideKey,
        origin_value: elementOriginValue
      }, undefined, {
        withHistory: false
      });
      (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__.setDocumentModifiedStatus)(true);
      return {
        createdOverridableProp: overridableProp
      };
    };
    return (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_6__.undoable)({
      do: ({
        componentOverridablePropConfig,
        elementOriginValue
      }) => {
        return makePropOverridable({
          componentOverridablePropConfig,
          elementOriginValue
        });
      },
      undo: ({
        componentOverridablePropConfig,
        elementOriginValue
      }, {
        createdOverridableProp
      }) => {
        (0,_store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_10__.deleteComponentOverridableProp)({
          componentId: componentOverridablePropConfig.componentId,
          propKey: createdOverridableProp.overrideKey,
          executedBy: 'system',
          revertElementOverridable: false
        });
        setElementOriginValue(elementOriginValue, undefined, {
          withHistory: false
        });
      },
      redo: ({
        elementOriginValue,
        componentOverridablePropConfig
      }, {
        createdOverridableProp
      }) => {
        return makePropOverridable({
          componentOverridablePropConfig: {
            ...componentOverridablePropConfig,
            overrideKey: createdOverridableProp.overrideKey
          },
          elementOriginValue
        });
      }
    }, {
      title: ({
        componentOverridablePropConfig
      }) => componentOverridablePropConfig.label,
      subtitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('property exposed', 'elementor-pro')
    });
  }, [setElementOriginValue, setElementOverridableValue]);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/utils/validate-prop-label.ts":
/*!************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/components/overridable-props/utils/validate-prop-label.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_MESSAGES: function() { return /* binding */ ERROR_MESSAGES; },
/* harmony export */   validatePropLabel: function() { return /* binding */ validatePropLabel; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const ERROR_MESSAGES = {
  EMPTY_NAME: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Property name is required', 'elementor-pro'),
  DUPLICATE_NAME: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Property name already exists', 'elementor-pro')
};
function validatePropLabel(label, existingLabels, currentLabel) {
  const trimmedLabel = label.trim();
  if (!trimmedLabel) {
    return {
      isValid: false,
      errorMessage: ERROR_MESSAGES.EMPTY_NAME
    };
  }
  const normalizedLabel = trimmedLabel.toLowerCase();
  const normalizedCurrentLabel = currentLabel?.trim().toLowerCase();
  const isDuplicate = existingLabels.some(existingLabel => {
    const normalizedExisting = existingLabel.trim().toLowerCase();
    if (normalizedCurrentLabel && normalizedExisting === normalizedCurrentLabel) {
      return false;
    }
    return normalizedExisting === normalizedLabel;
  });
  if (isDuplicate) {
    return {
      isValid: false,
      errorMessage: ERROR_MESSAGES.DUPLICATE_NAME
    };
  }
  return {
    isValid: true,
    errorMessage: null
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/consts.ts":
/*!************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/consts.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPONENTS_FEATURE_NAME: function() { return /* binding */ COMPONENTS_FEATURE_NAME; },
/* harmony export */   COMPONENTS_MCP_INSTRUCTIONS: function() { return /* binding */ COMPONENTS_MCP_INSTRUCTIONS; },
/* harmony export */   COMPONENT_DOCUMENT_TYPE: function() { return /* binding */ COMPONENT_DOCUMENT_TYPE; },
/* harmony export */   OVERRIDABLE_PROP_REPLACEMENT_ID: function() { return /* binding */ OVERRIDABLE_PROP_REPLACEMENT_ID; }
/* harmony export */ });
const OVERRIDABLE_PROP_REPLACEMENT_ID = 'overridable-prop';
const COMPONENTS_FEATURE_NAME = 'atomic-components';
const COMPONENT_DOCUMENT_TYPE = 'elementor_component';
const COMPONENTS_MCP_INSTRUCTIONS = `Elementor Editor Components MCP - Tools for creating and managing reusable components.
        Components are reusable blocks of content that can be used multiple times across the pages, its a widget which contains a set of elements and styles.
		
		Before using the tools, you must fetch the list of components from the resource (as mentioned in the required resources), if you see something that might fit, get the component instance.
		Then you can save the component instance as a new component (Name is unique so do not repeat it).

		If you see that there is a component that might match the needs of the user, get the component, see if it's published and suggest the user to use it (but only if you are 100% sure on that).
		Ignore this If statement when the users asks to create a new component, you can only suggest it after the work is done.`;

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/feature-guarded-injections.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/feature-guarded-injections.tsx ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureGuardedComponentPropertiesPanel: function() { return /* binding */ FeatureGuardedComponentPropertiesPanel; },
/* harmony export */   FeatureGuardedLogicInjections: function() { return /* binding */ FeatureGuardedLogicInjections; },
/* harmony export */   FeatureGuardedTopInjections: function() { return /* binding */ FeatureGuardedTopInjections; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_component_properties_panel_component_properties_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/component-properties-panel/component-properties-panel */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel.tsx");
/* harmony import */ var _components_create_component_form_create_component_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-component-form/create-component-form */ "./packages/packages/pro/editor-components-extended/src/components/create-component-form/create-component-form.tsx");
/* harmony import */ var _components_edit_component_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-component/edit-component */ "./packages/packages/pro/editor-components-extended/src/components/edit-component/edit-component.tsx");
/* harmony import */ var _components_load_template_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/load-template-components */ "./packages/packages/pro/editor-components-extended/src/components/load-template-components.tsx");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consts */ "./packages/packages/pro/editor-components-extended/src/consts.ts");
/* harmony import */ var _sync_cleanup_overridable_props_on_delete_and_detach__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sync/cleanup-overridable-props-on-delete-and-detach */ "./packages/packages/pro/editor-components-extended/src/sync/cleanup-overridable-props-on-delete-and-detach.ts");
/* harmony import */ var _sync_sanitize_overridable_props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sync/sanitize-overridable-props */ "./packages/packages/pro/editor-components-extended/src/sync/sanitize-overridable-props.ts");









function FeatureGuardedComponentPropertiesPanel() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeatureGuard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_properties_panel_component_properties_panel__WEBPACK_IMPORTED_MODULE_2__.panel.component, null));
}
function FeatureGuardedTopInjections() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeatureGuard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_create_component_form_create_component_form__WEBPACK_IMPORTED_MODULE_3__.CreateComponentForm, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_edit_component_edit_component__WEBPACK_IMPORTED_MODULE_4__.EditComponent, null));
}
function FeatureGuardedLogicInjections() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeatureGuard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sync_sanitize_overridable_props__WEBPACK_IMPORTED_MODULE_8__.SanitizeOverridableProps, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_load_template_components__WEBPACK_IMPORTED_MODULE_5__.LoadTemplateComponents, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sync_cleanup_overridable_props_on_delete_and_detach__WEBPACK_IMPORTED_MODULE_7__.CleanupOverridablePropsOnDeleteAndDetach, null));
}
function FeatureGuard({
  children
}) {
  const {
    data: isFeatureEnabled,
    isFetched: isFeatureFetched
  } = (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_1__.useHasFeature)(_consts__WEBPACK_IMPORTED_MODULE_6__.COMPONENTS_FEATURE_NAME);
  if (!isFeatureFetched || !isFeatureEnabled) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/hooks/use-navigate-back.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/hooks/use-navigate-back.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNavigateBack: function() { return /* binding */ useNavigateBack; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_3__);




function useNavigateBack() {
  const path = (0,_elementor_store__WEBPACK_IMPORTED_MODULE_3__.__useSelector)(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.selectPath);
  const documentsManager = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.getV1DocumentsManager)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const {
      componentId: prevComponentId,
      instanceId: prevComponentInstanceId
    } = path.at(-2) ?? {};
    if (prevComponentId && prevComponentInstanceId) {
      (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.switchToComponent)(prevComponentId, prevComponentInstanceId);
      return;
    }
    (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.switchToComponent)(documentsManager.getInitialId());
  }, [path, documentsManager]);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/init.ts":
/*!**********************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/init.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./packages/packages/pro/editor-components-extended/src/consts.ts");
/* harmony import */ var _initialize_editor_components_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialize-editor-components-extended */ "./packages/packages/pro/editor-components-extended/src/initialize-editor-components-extended.ts");



async function init() {
  // Temporary workaround: register locations-based injections before async work,
  // since locations snapshots injections on first render.
  // Move this back into the regular init flow once locations updates become reactive.
  (0,_initialize_editor_components_extended__WEBPACK_IMPORTED_MODULE_2__.initComponentLocations)();
  const {
    isFeatureEnabled,
    isLicenseExpired
  } = await getTierFeaturesAndLicenseStatus();
  if (!isFeatureEnabled) {
    return;
  }
  (0,_initialize_editor_components_extended__WEBPACK_IMPORTED_MODULE_2__.initEditorComponentsExtended)({
    isLicenseExpired
  });
}
async function getTierFeaturesAndLicenseStatus() {
  const [featuresPromise, licenseStatusPromise] = await Promise.allSettled([(0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_0__.fetchTierFeatures)(), (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_0__.fetchLicenseStatus)()]);
  const features = featuresPromise.status === 'fulfilled' ? featuresPromise.value : [];
  const licenseStatus = licenseStatusPromise.status === 'fulfilled' ? licenseStatusPromise.value : false;
  return {
    isFeatureEnabled: features.includes(_consts__WEBPACK_IMPORTED_MODULE_1__.COMPONENTS_FEATURE_NAME),
    isLicenseExpired: licenseStatus
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/initialize-editor-components-extended.ts":
/*!*******************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/initialize-editor-components-extended.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initComponentLocations: function() { return /* binding */ initComponentLocations; },
/* harmony export */   initEditorComponentsExtended: function() { return /* binding */ initEditorComponentsExtended; }
/* harmony export */ });
/* harmony import */ var _elementor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor */ "@elementor/editor");
/* harmony import */ var _elementor_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_editor_elements_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/editor-elements-panel */ "@elementor/editor-elements-panel");
/* harmony import */ var _elementor_editor_elements_panel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements_panel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/editor-mcp */ "@elementor/editor-mcp");
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @elementor/editor-panels */ "@elementor/editor-panels");
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_component_panel_header_component_panel_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/component-panel-header/component-panel-header */ "./packages/packages/pro/editor-components-extended/src/components/component-panel-header/component-panel-header.tsx");
/* harmony import */ var _components_component_properties_panel_component_properties_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/component-properties-panel/component-properties-panel */ "./packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel.tsx");
/* harmony import */ var _components_components_tab_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components-tab/components */ "./packages/packages/pro/editor-components-extended/src/components/components-tab/components.tsx");
/* harmony import */ var _components_instance_editing_panel_instance_editing_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/instance-editing-panel/instance-editing-panel */ "./packages/packages/pro/editor-components-extended/src/components/instance-editing-panel/instance-editing-panel.tsx");
/* harmony import */ var _components_overridable_props_overridable_prop_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/overridable-props/overridable-prop-control */ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-control.tsx");
/* harmony import */ var _components_overridable_props_overridable_prop_indicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/overridable-props/overridable-prop-indicator */ "./packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-indicator.tsx");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./consts */ "./packages/packages/pro/editor-components-extended/src/consts.ts");
/* harmony import */ var _feature_guarded_injections__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feature-guarded-injections */ "./packages/packages/pro/editor-components-extended/src/feature-guarded-injections.tsx");
/* harmony import */ var _mcp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mcp */ "./packages/packages/pro/editor-components-extended/src/mcp/index.ts");
/* harmony import */ var _shortcuts_create_component_shortcut__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shortcuts/create-component-shortcut */ "./packages/packages/pro/editor-components-extended/src/shortcuts/create-component-shortcut.ts");
/* harmony import */ var _sync_before_save__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sync/before-save */ "./packages/packages/pro/editor-components-extended/src/sync/before-save.ts");
/* harmony import */ var _sync_handle_component_edit_mode_container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sync/handle-component-edit-mode-container */ "./packages/packages/pro/editor-components-extended/src/sync/handle-component-edit-mode-container.ts");
/* harmony import */ var _sync_prevent_non_atomic_nesting__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sync/prevent-non-atomic-nesting */ "./packages/packages/pro/editor-components-extended/src/sync/prevent-non-atomic-nesting.ts");
/* harmony import */ var _sync_revert_overridables_on_copy_or_duplicate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sync/revert-overridables-on-copy-or-duplicate */ "./packages/packages/pro/editor-components-extended/src/sync/revert-overridables-on-copy-or-duplicate.ts");
/* harmony import */ var _utils_track_instance_added__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/track-instance-added */ "./packages/packages/pro/editor-components-extended/src/utils/track-instance-added.ts");

























const PRIORITY = 1;
function initEditorComponentsExtended({
  isLicenseExpired
}) {
  (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__.registerEditingPanelReplacement)({
    id: 'extended-component-instance-edit-panel',
    priority: PRIORITY,
    condition: (_, elementType) => elementType.key === 'e-component',
    component: _components_instance_editing_panel_instance_editing_panel__WEBPACK_IMPORTED_MODULE_13__.ExtendedInstanceEditingPanel
  });
  (0,_elementor_editor_elements_panel__WEBPACK_IMPORTED_MODULE_5__.registerTab)({
    id: 'components',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Components', 'elementor-pro'),
    component: _components_components_tab_components__WEBPACK_IMPORTED_MODULE_12__.ExtendedComponents,
    priority: PRIORITY
  });
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_8__.registerDataHook)('dependency', 'editor/documents/close', args => {
    const document = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_3__.getV1CurrentDocument)();
    if (document.config.type === _consts__WEBPACK_IMPORTED_MODULE_16__.COMPONENT_DOCUMENT_TYPE) {
      args.mode = 'autosave';
    }
    return true;
  });
  window.elementorCommon.__beforeSave = _sync_before_save__WEBPACK_IMPORTED_MODULE_20__.beforeSave;
  (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__.injectIntoPanelHeaderTop)({
    id: 'component-panel-header',
    component: _components_component_panel_header_component_panel_header__WEBPACK_IMPORTED_MODULE_10__.ComponentPanelHeader,
    options: {
      overwrite: true
    }
  });
  (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__.registerFieldIndicator)({
    fieldType: _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_4__.FIELD_TYPE.SETTINGS,
    id: 'component-overridable-prop',
    priority: 1,
    indicator: _components_overridable_props_overridable_prop_indicator__WEBPACK_IMPORTED_MODULE_15__.OverridablePropIndicator
  });
  (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_2__.registerControlReplacement)({
    id: _consts__WEBPACK_IMPORTED_MODULE_16__.OVERRIDABLE_PROP_REPLACEMENT_ID,
    component: _components_overridable_props_overridable_prop_control__WEBPACK_IMPORTED_MODULE_14__.OverridablePropControl,
    condition: ({
      value
    }) => _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.componentOverridablePropTypeUtil.isValid(value)
  });
  (0,_sync_prevent_non_atomic_nesting__WEBPACK_IMPORTED_MODULE_22__.initNonAtomicNestingPrevention)();
  (0,_sync_handle_component_edit_mode_container__WEBPACK_IMPORTED_MODULE_21__.initHandleComponentEditModeContainer)();
  (0,_sync_revert_overridables_on_copy_or_duplicate__WEBPACK_IMPORTED_MODULE_23__.initRevertOverridablesOnCopyOrDuplicate)();
  if (!isLicenseExpired) {
    (0,_shortcuts_create_component_shortcut__WEBPACK_IMPORTED_MODULE_19__.initCreateComponentShortcut)();
  }
  (0,_mcp__WEBPACK_IMPORTED_MODULE_18__.initMcp)((0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_6__.getMCPByDomain)('components', {
    instructions: _consts__WEBPACK_IMPORTED_MODULE_16__.COMPONENTS_MCP_INSTRUCTIONS
  }));
}
function initComponentLocations() {
  (0,_elementor_editor__WEBPACK_IMPORTED_MODULE_0__.injectIntoTop)({
    id: 'component-popups',
    component: _feature_guarded_injections__WEBPACK_IMPORTED_MODULE_17__.FeatureGuardedTopInjections,
    options: {
      overwrite: true
    }
  });
  (0,_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_7__.__registerPanel)({
    id: _components_component_properties_panel_component_properties_panel__WEBPACK_IMPORTED_MODULE_11__.panel.id,
    component: _feature_guarded_injections__WEBPACK_IMPORTED_MODULE_17__.FeatureGuardedComponentPropertiesPanel
  });
  (0,_elementor_editor__WEBPACK_IMPORTED_MODULE_0__.injectIntoLogic)({
    id: 'components-logic-effects',
    component: _feature_guarded_injections__WEBPACK_IMPORTED_MODULE_17__.FeatureGuardedLogicInjections,
    options: {
      overwrite: true
    }
  });
  (0,_elementor_editor__WEBPACK_IMPORTED_MODULE_0__.injectIntoLogic)({
    id: 'components-track-instance-added',
    component: _utils_track_instance_added__WEBPACK_IMPORTED_MODULE_24__.TrackInstanceAdded
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/mcp/components-list-resource.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/mcp/components-list-resource.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPONENTS_LIST_URI: function() { return /* binding */ COMPONENTS_LIST_URI; },
/* harmony export */   initComponentsListResource: function() { return /* binding */ initComponentsListResource; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_1__);


const COMPONENTS_LIST_URI = 'elementor://components/list';
function buildComponentsList() {
  const published = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getComponents() ?? [];
  const unpublished = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getUnpublishedComponents() ?? [];
  return [...published, ...unpublished];
}
const initComponentsListResource = reg => {
  const {
    resource,
    sendResourceUpdated
  } = reg;
  resource('components-list', COMPONENTS_LIST_URI, {
    description: 'Live list of all reusable components (published and unpublished) with full component data.'
  }, () => ({
    contents: [{
      uri: COMPONENTS_LIST_URI,
      mimeType: 'application/json',
      text: JSON.stringify(buildComponentsList())
    }]
  }));
  (0,_elementor_store__WEBPACK_IMPORTED_MODULE_1__.__subscribeWithSelector)(state => state[_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.SLICE_NAME], () => {
    sendResourceUpdated({
      uri: COMPONENTS_LIST_URI
    });
  });
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/mcp/index.ts":
/*!***************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/mcp/index.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMcp: function() { return /* binding */ initMcp; }
/* harmony export */ });
/* harmony import */ var _components_list_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-list-resource */ "./packages/packages/pro/editor-components-extended/src/mcp/components-list-resource.ts");
/* harmony import */ var _manage_component_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-component-tool */ "./packages/packages/pro/editor-components-extended/src/mcp/manage-component-tool.ts");


function initMcp(reg) {
  const {
    setMCPDescription,
    waitForReady
  } = reg;
  setMCPDescription(`Components V4 MCP Server - Tools for creating and managing reusable components.`);
  waitForReady().then(() => {
    (0,_components_list_resource__WEBPACK_IMPORTED_MODULE_0__.initComponentsListResource)(reg);
    (0,_manage_component_tool__WEBPACK_IMPORTED_MODULE_1__.initManageComponentTool)(reg);
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/mcp/manage-component-tool.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/mcp/manage-component-tool.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_MESSAGES: function() { return /* binding */ ERROR_MESSAGES; },
/* harmony export */   handleManageComponent: function() { return /* binding */ handleManageComponent; },
/* harmony export */   initManageComponentTool: function() { return /* binding */ initManageComponentTool; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-mcp */ "@elementor/editor-mcp");
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/http-client */ "@elementor/http-client");
/* harmony import */ var _elementor_http_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_http_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/schema */ "@elementor/schema");
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elementor_schema__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @elementor/utils */ "@elementor/utils");
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_elementor_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_create_unpublished_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/create-unpublished-component */ "./packages/packages/pro/editor-components-extended/src/store/actions/create-unpublished-component.ts");
/* harmony import */ var _components_list_resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components-list-resource */ "./packages/packages/pro/editor-components-extended/src/mcp/components-list-resource.ts");










const InputSchema = {
  action: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.enum(['save', 'get']).describe('The operation to perform: ' + '"get" - retrieve a specific component by UID; ' + '"save" - create a new component from an existing element.'),
  element_id: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().optional().describe('[Required for "save"] The unique identifier of the element to save as a component. ' + 'Use the "list-elements" tool to find available element IDs in the current document.'),
  component_name: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().optional().describe('[Required for "save"] The name for the new component. Should be descriptive and unique among existing components. Must be unique among all components.'),
  overridable_props: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.object({
    props: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.record(_elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.object({
      elementId: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().describe('The id of the child element that you want to override its settings'),
      propKey: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().describe('The property key of the child element that you want to override its settings (e.g., "text", "url", "tag"). To get the available propKeys for an element, use the "get-element-type-config" tool.'),
      label: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().describe('A unique, user-friendly display name for this property (e.g., "Hero Headline", "CTA Button Text"). Must be unique within the same component.'),
      group: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().optional().describe('Non unique, optional property grouping')
    }))
  }).optional().describe('[Optional for "save"] Overridable properties configuration. Specify which CHILD element properties can be customized. ' + 'Only elementId and propKey are required; To get the available propKeys for a child element you must use the "get-element-type-config" tool.'),
  groups: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.array(_elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string()).describe('[Optional for "save"] Property Groups, by order, unique values').optional(),
  component_uid: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().optional().describe('[Required for "get"] The unique identifier of the component to retrieve.')
};
const OutputSchema = {
  message: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().optional().describe('Additional information about the operation result'),
  component_uid: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string().optional().describe('The unique identifier of the newly created component (only present on "save" success)'),
  component: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.object({
    uid: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string(),
    name: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.string(),
    status: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.enum(['published', 'unpublished']),
    id: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.number().optional(),
    overridableProps: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.unknown().optional(),
    elements: _elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.array(_elementor_schema__WEBPACK_IMPORTED_MODULE_6__.z.any()).optional().describe('The elements of the component (only when component is unpublished)')
  }).optional().describe('The requested component data (only present on "get")')
};
const ERROR_MESSAGES = {
  ELEMENT_NOT_FOUND: "Element not found. Use 'list-elements' to get valid element IDs.",
  ELEMENT_NOT_ONE_OF_TYPES: validTypes => `Element is not one of the following types: ${validTypes.join(', ')}`,
  ELEMENT_IS_LOCKED: 'Cannot save a locked element as a component.',
  COMPONENT_NOT_FOUND: uid => `Component with UID "${uid}" not found.`,
  MISSING_ELEMENT_ID: 'element_id is required for the "save" action.',
  MISSING_COMPONENT_NAME: 'component_name is required for the "save" action.',
  MISSING_COMPONENT_UID: 'component_uid is required for the "get" action.'
};
const handleManageComponent = async params => {
  const {
    action
  } = params;
  switch (action) {
    case 'get':
      return handleGet(params);
    case 'save':
      return handleSave(params);
  }
};
async function handleGet(params) {
  const {
    component_uid: componentUid
  } = params;
  if (!componentUid) {
    throw new Error(ERROR_MESSAGES.MISSING_COMPONENT_UID);
  }
  const found = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.componentsSelectors.getComponentByUid(componentUid);
  if (!found) {
    throw new Error(ERROR_MESSAGES.COMPONENT_NOT_FOUND(componentUid));
  }
  const isPublished = 'id' in found;

  /** This block can be reused at version 4.2.0 with getComponentDocumentData function */
  let elements;
  if (isPublished) {
    const documentManager = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_2__.getV1DocumentsManager)();
    try {
      const document = await documentManager.request(found.id);
      elements = document?.elements;
    } catch {
      elements = undefined;
    }
  }
  /** End of the block */

  return {
    status: 'ok',
    component: {
      uid: found.uid,
      name: found.name,
      status: isPublished ? 'published' : 'unpublished',
      id: isPublished ? found.id : undefined,
      overridableProps: found.overridableProps,
      elements
    }
  };
}
async function handleSave(params) {
  const {
    groups = [],
    element_id: elementId,
    component_name: componentName,
    overridable_props: overridablePropsInput
  } = params;
  if (!elementId) {
    throw new Error(ERROR_MESSAGES.MISSING_ELEMENT_ID);
  }
  if (!componentName) {
    throw new Error(ERROR_MESSAGES.MISSING_COMPONENT_NAME);
  }
  const validElementTypes = getValidElementTypes();
  const container = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__.getContainer)(elementId);
  if (!container) {
    throw new Error(ERROR_MESSAGES.ELEMENT_NOT_FOUND);
  }
  const elType = container.model.get('elType');
  if (!validElementTypes.includes(elType)) {
    throw new Error(ERROR_MESSAGES.ELEMENT_NOT_ONE_OF_TYPES(validElementTypes));
  }
  const element = container.model.toJSON({
    remove: ['default']
  });
  if (element?.isLocked) {
    throw new Error(ERROR_MESSAGES.ELEMENT_IS_LOCKED);
  }
  const groupsWithDefaultGroup = groups.indexOf('Default') >= 0 ? [...groups] : ['Default', ...groups];
  const propertyGroups = groupsWithDefaultGroup.map(groupName => ({
    id: (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_7__.generateUniqueId)('group'),
    label: groupName,
    props: []
  }));
  const overridableProps = overridablePropsInput ? enrichOverridableProps(overridablePropsInput, element, propertyGroups) : undefined;
  if (overridableProps) {
    updateElementDataWithOverridableProps(element, overridableProps);
  }
  const uid = (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_7__.generateUniqueId)('component');
  try {
    await _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.apiClient.validate({
      items: [{
        uid,
        title: componentName,
        elements: [element],
        settings: {
          overridable_props: overridableProps
        }
      }]
    });
  } catch (error) {
    if (error instanceof _elementor_http_client__WEBPACK_IMPORTED_MODULE_5__.AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw new Error('Unknown error');
  }
  await (0,_store_actions_create_unpublished_component__WEBPACK_IMPORTED_MODULE_8__.createUnpublishedComponent)({
    name: componentName,
    element,
    eventData: null,
    uid,
    overridableProps,
    executedBy: 'mcp_tool'
  });
  if (overridableProps) {
    Object.values(overridableProps.props).forEach(prop => {
      (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.trackComponentEvent)({
        action: 'propertyExposed',
        // TODO: remove this in version 4.4.0
        source: 'mcp_tool',
        executedBy: 'mcp_tool',
        component_uid: uid,
        property_id: prop.overrideKey,
        property_path: prop.propKey,
        property_name: prop.label,
        element_type: prop.widgetType ?? prop.elType
      });
    });
  }
  return {
    status: 'ok',
    message: `Component "${componentName}" created successfully.`,
    component_uid: uid
  };
}
function enrichOverridableProps(input, rootElement, propertyGroups) {
  const enrichedProps = {};
  const enrichedGroups = {};
  const defaultGroup = propertyGroups.find(g => g.label === 'Default');
  if (!defaultGroup) {
    throw new Error('Internal mcp error: could not generate default group');
  }
  Object.entries(input.props).forEach(([, prop]) => {
    const {
      elementId,
      propKey,
      label,
      group = 'Default'
    } = prop;
    const targetGroup = propertyGroups.find(g => g.label === group) || defaultGroup;
    const targetGroupId = targetGroup.id;
    const element = findElementById(rootElement, elementId);
    if (!element) {
      throw new Error(`Element with ID "${elementId}" not found in component`);
    }
    const elType = element.elType;
    const widgetType = element.widgetType || element.elType;

    // Validate that the propKey exists in the element's schema
    const elementType = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__.getElementType)(widgetType);
    if (!elementType) {
      throw new Error(`Element type "${widgetType}" is not atomic or does not have a settings schema. ` + `Cannot expose property "${propKey}" for element "${elementId}".`);
    }
    if (!elementType.propsSchema[propKey]) {
      const availableProps = Object.keys(elementType.propsSchema).join(', ');
      throw new Error(`Property "${propKey}" does not exist in element "${elementId}" (type: ${widgetType}). ` + `Available properties: ${availableProps}`);
    }
    const overrideKey = (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_7__.generateUniqueId)('prop');
    const originValue = element.settings?.[propKey] ? element.settings[propKey] : elementType.propsSchema[propKey].default ?? null;
    if (!enrichedGroups[targetGroupId]) {
      enrichedGroups[targetGroupId] = {
        id: targetGroupId,
        label: targetGroup.label,
        props: []
      };
    }
    enrichedGroups[targetGroupId].props.push(overrideKey);
    enrichedProps[overrideKey] = {
      overrideKey,
      label,
      elementId,
      propKey,
      elType,
      widgetType,
      originValue,
      groupId: targetGroupId
    };
  });
  return {
    props: enrichedProps,
    groups: {
      items: enrichedGroups,
      order: propertyGroups.filter(g => enrichedGroups[g.id]).map(g => g.id)
    }
  };
}
function updateElementDataWithOverridableProps(rootElement, overridableProps) {
  Object.values(overridableProps.props).forEach(prop => {
    const element = findElementById(rootElement, prop.elementId);
    if (!element || !element.settings) {
      return;
    }
    element.settings[prop.propKey] = {
      $$type: 'overridable',
      value: {
        override_key: prop.overrideKey,
        origin_value: prop.originValue
      }
    };
  });
}
function findElementById(root, targetId) {
  if (root.id === targetId) {
    return root;
  }
  if (root.elements) {
    for (const child of root.elements) {
      const found = findElementById(child, targetId);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
function getValidElementTypes() {
  const types = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__.getWidgetsCache)();
  if (!types) {
    return [];
  }
  return Object.entries(types).reduce((acc, [type, value]) => {
    if (!value.atomic_props_schema || !value.show_in_panel || value.elType === 'widget') {
      return acc;
    }
    acc.push(type);
    return acc;
  }, []);
}
const generatePrompt = () => {
  const prompt = (0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_4__.toolPrompts)('manage-component');
  prompt.description(`
Manage reusable components in the Elementor editor: retrieve a specific component or save an element as a new component.

# **CRITICAL - Before any operation, read the resources**
Always read all required resources before performing any action.

# Actions

## "get" - Get a specific component
Returns full details of a component including its overridable properties.
Required: component_uid

## "save" - Save an element as a new component
Creates a new reusable component from an existing element.
Required: element_id, component_name
Optional: overridable_props, groups

# IMPORTANT - Before saving a new component
**Always read [${_components_list_resource__WEBPACK_IMPORTED_MODULE_9__.COMPONENTS_LIST_URI}] first** to see existing components and avoid creating duplicates.
Use "get" to inspect an existing component if you need to understand its structure.

# When NOT to use "save"
- Element is already a component (widgetType: 'e-component')
- Element is locked
- Element is not an atomic element (atomic_props_schema is not defined)
- Element elType is a 'widget'

# **REQUIRED RESOURCES (Must read before any operation)**
1. [${_components_list_resource__WEBPACK_IMPORTED_MODULE_9__.COMPONENTS_LIST_URI}]
   **MANDATORY** - Live list of all existing components. Always read this first to check for duplicates.

2. [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_STRUCTURE_URI}]
   **MANDATORY** - Required to understand the document structure and identify child elements for overridable properties.

3. [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.WIDGET_SCHEMA_URI}]
   **MANDATORY** - Required to understand which properties are available for each widget type.

# Instructions for "save" - MUST FOLLOW IN ORDER
## Step 1: Check existing components
1. Read the [${_components_list_resource__WEBPACK_IMPORTED_MODULE_9__.COMPONENTS_LIST_URI}] resource to see all existing components
2. If a suitable component already exists, consider using it instead

## Step 2: Identify the Target Element
1. Read the [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_STRUCTURE_URI}] resource
2. Locate the element by its element_id
3. Verify the element type is valid, not locked, and not already a component

## Step 3: Define Overridable Properties
Skip ONLY if the user explicitly requests no customizable properties.

1. **Identify Child Elements** via [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_STRUCTURE_URI}]
2. **Find Available Properties** via [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.WIDGET_SCHEMA_URI}] → atomic_props_schema
   - Use only top-level props (e.g., "text", "url", "tag", "size")
3. **Build the overridable_props object** with unique, user-friendly labels

## Step 4: Execute "save"
Call with element_id, component_name, and optionally overridable_props and groups.

# CONSTRAINTS
- NEVER try to override properties of the parent element itself — ONLY child elements
- NEVER use invalid propKeys — always verify against atomic_props_schema in [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.WIDGET_SCHEMA_URI}]
- Element IDs must exist within the target element's children
- The element being saved must not be inside another component
`);
  prompt.parameter('action', `**MANDATORY** The operation to perform:
- "get": Returns details of a specific component. Requires component_uid.
- "save": Creates a new component from an element. Requires element_id and component_name.`);
  prompt.parameter('component_uid', `**Required for "get"** The unique identifier of the component to retrieve.
Read the [${_components_list_resource__WEBPACK_IMPORTED_MODULE_9__.COMPONENTS_LIST_URI}] resource first to discover available component UIDs.`);
  prompt.parameter('element_id', `**Required for "save"** The unique identifier of the element to save as a component.
Use the [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_STRUCTURE_URI}] resource to find available element IDs.`);
  prompt.parameter('component_name', `**Required for "save"** A descriptive name for the new component.
Should be unique and clearly describe the component's purpose (e.g., "Hero Section", "Feature Card").`);
  prompt.parameter('overridable_props', `**Optional for "save"** Configuration for which child element properties can be customized in component instances.

Structure:
\`\`\`json
{
  "props": {
    "<unique-key>": {
      "elementId": "<child-element-id>",
      "propKey": "<property-key>",
      "label": "<user-friendly-name>"
    }
  }
}
\`\`\`

To populate this correctly:
1. Use [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_STRUCTURE_URI}] to find child element IDs and their widgetType
2. Use [${_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.WIDGET_SCHEMA_URI}] to find the atomic_props_schema for each child element's widgetType
3. Only include properties you want to be customizable in component instances
4. Provide a unique, user-friendly label for each property`);
  prompt.example(`
Get a specific component:
\`\`\`json
{ "action": "get", "component_uid": "component-abc123" }
\`\`\`

Save without overridable properties:
\`\`\`json
{ "action": "save", "element_id": "abc123", "component_name": "Hero Section" }
\`\`\`

Save with overridable properties:
\`\`\`json
{
  "action": "save",
  "element_id": "abc123",
  "component_name": "Feature Card",
  "overridable_props": {
    "props": {
      "heading-text": {
        "elementId": "heading-123",
        "propKey": "text",
        "label": "Card Title",
        "group": "Content"
      },
      "button-link": {
        "elementId": "button-456",
        "propKey": "url",
        "label": "Button Link",
        "group": "Settings"
      }
    }
  }
}
\`\`\`
`);
  prompt.instruction(`After successful "save", the component will be available in the components library and can be inserted into any page or template.`);
  prompt.instruction(`When overridable properties are defined, component instances will show customization controls for those specific properties in the editing panel.`);
  return prompt.prompt();
};
const initManageComponentTool = reg => {
  const {
    addTool
  } = reg;
  addTool({
    name: 'manage-component',
    schema: InputSchema,
    outputSchema: OutputSchema,
    description: generatePrompt(),
    requiredResources: [{
      uri: _components_list_resource__WEBPACK_IMPORTED_MODULE_9__.COMPONENTS_LIST_URI,
      description: 'List of all components'
    }, {
      uri: _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_STRUCTURE_URI,
      description: 'Document structure'
    }, {
      uri: _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.WIDGET_SCHEMA_URI,
      description: 'Widget schema'
    }],
    handler: handleManageComponent
  });
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/shortcuts/create-component-shortcut.ts":
/*!*****************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/shortcuts/create-component-shortcut.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CREATE_COMPONENT_SHORTCUT_KEYS: function() { return /* binding */ CREATE_COMPONENT_SHORTCUT_KEYS; },
/* harmony export */   initCreateComponentShortcut: function() { return /* binding */ initCreateComponentShortcut; },
/* harmony export */   isCreateComponentAllowed: function() { return /* binding */ isCreateComponentAllowed; },
/* harmony export */   triggerCreateComponentForm: function() { return /* binding */ triggerCreateComponentForm; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_COMPONENT_SHORTCUT_KEYS = 'ctrl+shift+k';
const OPEN_SAVE_AS_COMPONENT_FORM_EVENT = 'elementor/editor/open-save-as-component-form';
function isCreateComponentAllowed() {
  const selectedElements = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getSelectedElements)();
  if (selectedElements.length !== 1) {
    return {
      allowed: false
    };
  }
  const element = selectedElements[0];
  const elementType = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getElementType)(element.type);
  if (!elementType) {
    return {
      allowed: false
    };
  }
  const widgetsCache = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getWidgetsCache)();
  const elementConfig = widgetsCache?.[element.type];
  if (!elementConfig?.atomic_props_schema || !elementConfig?.show_in_panel || elementConfig?.elType === 'widget') {
    return {
      allowed: false
    };
  }
  const legacyWindow = window;
  const container = legacyWindow.elementor.getContainer(element.id);
  if (!container || container.isLocked()) {
    return {
      allowed: false
    };
  }
  return {
    allowed: true,
    container
  };
}
function triggerCreateComponentForm(container) {
  const legacyWindow = window;
  const elementRect = container.view.el.getBoundingClientRect();
  const iframeRect = legacyWindow.elementor.$preview[0].getBoundingClientRect();
  const anchorPosition = {
    left: iframeRect.left + elementRect.left + elementRect.width / 2,
    top: iframeRect.top + elementRect.top
  };
  window.dispatchEvent(new CustomEvent(OPEN_SAVE_AS_COMPONENT_FORM_EVENT, {
    detail: {
      element: container.model.toJSON({
        remove: ['default']
      }),
      anchorPosition,
      options: {
        trigger: 'keyboard',
        location: 'canvas',
        secondaryLocation: 'canvasElement'
      }
    }
  }));
}
function initCreateComponentShortcut() {
  const legacyWindow = window;
  legacyWindow.$e.shortcuts.register(CREATE_COMPONENT_SHORTCUT_KEYS, {
    callback: () => {
      const result = isCreateComponentAllowed();
      if (!result.allowed) {
        return;
      }
      triggerCreateComponentForm(result.container);
    },
    dependency: () => {
      const result = isCreateComponentAllowed();
      return result.allowed;
    },
    exclude: ['input']
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/add-overridable-group.ts":
/*!*****************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/add-overridable-group.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOverridableGroup: function() { return /* binding */ addOverridableGroup; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);

function addOverridableGroup({
  componentId,
  groupId,
  label,
  executedBy
}) {
  const currentComponent = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getCurrentComponent();
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(componentId);
  if (!overridableProps) {
    return;
  }
  const newGroup = {
    id: groupId,
    label,
    props: []
  };
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(componentId, {
    ...overridableProps,
    groups: {
      ...overridableProps.groups,
      items: {
        ...overridableProps.groups.items,
        [groupId]: newGroup
      },
      order: [groupId, ...overridableProps.groups.order]
    }
  });
  (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.trackComponentEvent)({
    action: 'propertiesGroupCreated',
    // TODO: remove `source` in version 4.4.0
    source: executedBy,
    executedBy,
    component_uid: currentComponent?.uid,
    group_name: label
  });
  return newGroup;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/archive-component.ts":
/*!*************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/archive-component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   archiveComponent: function() { return /* binding */ archiveComponent; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-notifications */ "@elementor/editor-notifications");
/* harmony import */ var _elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const successNotification = (componentId, componentName) => ({
  type: 'success',
  /* translators: %s: component name */
  message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Successfully deleted component %s', 'elementor-pro').replace('%s', componentName),
  id: `success-archived-components-notification-${componentId}`
});
const archiveComponent = (componentId, componentName) => {
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.archive(componentId);
  (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__.setDocumentModifiedStatus)(true);
  (0,_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2__.notify)(successNotification(componentId, componentName));
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/create-component-overridable-prop.ts":
/*!*****************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/create-component-overridable-prop.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponentOverridableProp: function() { return /* binding */ createComponentOverridableProp; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/utils */ "@elementor/utils");
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_groups_transformers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/groups-transformers */ "./packages/packages/pro/editor-components-extended/src/store/utils/groups-transformers.ts");



function createComponentOverridableProp({
  componentId,
  overrideKey,
  elementId,
  label,
  groupId,
  propKey,
  elType,
  widgetType,
  originValue,
  originPropFields,
  executedBy
}) {
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(componentId);
  if (!overridableProps) {
    throw new Error(`Component not found for componentId: ${componentId}`);
  }
  const duplicatedTargetProps = Object.values(overridableProps.props).filter(prop => prop.elementId === elementId && prop.propKey === propKey);
  const {
    groups: groupsAfterResolve,
    groupId: currentGroupId
  } = (0,_utils_groups_transformers__WEBPACK_IMPORTED_MODULE_2__.resolveOrCreateGroup)(overridableProps.groups, groupId ?? undefined);
  const overridableProp = {
    overrideKey: overrideKey || (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_1__.generateUniqueId)('prop'),
    label,
    elementId,
    propKey,
    widgetType,
    elType,
    originValue,
    groupId: currentGroupId,
    originPropFields
  };
  const stateAfterRemovingDuplicates = (0,_utils_groups_transformers__WEBPACK_IMPORTED_MODULE_2__.removePropsFromState)({
    ...overridableProps,
    groups: groupsAfterResolve
  }, duplicatedTargetProps);
  const props = {
    ...stateAfterRemovingDuplicates.props,
    [overridableProp.overrideKey]: overridableProp
  };
  let groups = (0,_utils_groups_transformers__WEBPACK_IMPORTED_MODULE_2__.addPropToGroup)(stateAfterRemovingDuplicates.groups, currentGroupId, overridableProp.overrideKey);
  groups = (0,_utils_groups_transformers__WEBPACK_IMPORTED_MODULE_2__.ensureGroupInOrder)(groups, currentGroupId);
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(componentId, {
    props,
    groups
  });
  const currentComponent = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getCurrentComponent();
  (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.trackComponentEvent)({
    action: 'propertyExposed',
    // TODO: remove `source` in version 4.4.0
    source: executedBy,
    executedBy,
    component_uid: currentComponent?.uid,
    property_id: overridableProp.overrideKey,
    property_path: propKey,
    property_name: label,
    element_type: widgetType ?? elType
  });
  return overridableProp;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/create-unpublished-component.ts":
/*!************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/create-unpublished-component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUnpublishedComponent: function() { return /* binding */ createUnpublishedComponent; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/utils */ "@elementor/utils");
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_apply_overridables_to_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/apply-overridables-to-elements */ "./packages/packages/pro/editor-components-extended/src/utils/apply-overridables-to-elements.ts");
/* harmony import */ var _utils_replace_element_with_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/replace-element-with-component */ "./packages/packages/pro/editor-components-extended/src/utils/replace-element-with-component.ts");
/* harmony import */ var _utils_revert_overridable_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/revert-overridable-settings */ "./packages/packages/pro/editor-components-extended/src/utils/revert-overridable-settings.ts");








async function createUnpublishedComponent({
  name,
  element,
  eventData,
  uid,
  overridableProps,
  executedBy
}) {
  const generatedUid = uid ?? (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_3__.generateUniqueId)('component');
  const componentBase = {
    uid: generatedUid,
    name
  };
  const elementDataWithOverridablesReverted = (0,_utils_revert_overridable_settings__WEBPACK_IMPORTED_MODULE_7__.revertAllOverridablesInElementData)(element);
  const elements = [elementDataWithOverridablesReverted];
  if (overridableProps) {
    (0,_utils_apply_overridables_to_elements__WEBPACK_IMPORTED_MODULE_5__.applyOverridablesToElements)(elements, overridableProps);
  }
  const container = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getContainer)(element.id);
  const modelFromContainer = container?.model?.toJSON?.();
  const originalElement = {
    model: modelFromContainer ?? element,
    parentId: container?.parent?.id ?? '',
    index: container?.view?._index ?? 0
  };
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.addUnpublished({
    ...componentBase,
    elements,
    overridableProps
  });
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.addCreatedThisSession(generatedUid);
  const componentInstance = (0,_utils_replace_element_with_component__WEBPACK_IMPORTED_MODULE_6__.replaceElementWithComponent)(element, componentBase);
  (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.trackComponentEvent)({
    action: 'created',
    // TODO: remove `source` in version 4.4.0
    source: executedBy,
    executedBy,
    component_uid: generatedUid,
    component_name: name,
    ...eventData
  });
  try {
    await (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__.__privateRunCommand)('document/save/auto');
  } catch (error) {
    restoreOriginalElement(originalElement, componentInstance.id);
    _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.removeUnpublished(generatedUid);
    _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.removeCreatedThisSession(generatedUid);
    throw error;
  }
  try {
    await (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.loadComponentsAssets)([componentInstance.model.toJSON()]);
  } catch {}
  return {
    uid: generatedUid,
    instanceId: componentInstance.id
  };
}
function restoreOriginalElement(originalElement, componentInstanceId) {
  const componentContainer = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getContainer)(componentInstanceId);
  if (componentContainer) {
    (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.deleteElement)({
      container: componentContainer,
      options: {
        useHistory: false
      }
    });
  }
  const parentContainer = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getContainer)(originalElement.parentId);
  if (!parentContainer) {
    return;
  }
  const clonedModel = structuredClone(originalElement.model);
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.createElements)({
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Restore Element', 'elementor-pro'),
    elements: [{
      container: parentContainer,
      model: clonedModel,
      options: {
        at: originalElement.index
      }
    }]
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/delete-component-overridable-prop.ts":
/*!*****************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/delete-component-overridable-prop.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteComponentOverridableProp: function() { return /* binding */ deleteComponentOverridableProp; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_revert_overridable_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/revert-overridable-settings */ "./packages/packages/pro/editor-components-extended/src/utils/revert-overridable-settings.ts");
/* harmony import */ var _utils_groups_transformers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/groups-transformers */ "./packages/packages/pro/editor-components-extended/src/store/utils/groups-transformers.ts");



function deleteComponentOverridableProp({
  componentId,
  propKey,
  executedBy,
  revertElementOverridable = true
}) {
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(componentId);
  if (!overridableProps || Object.keys(overridableProps.props).length === 0) {
    return;
  }
  const propKeysToDelete = Array.isArray(propKey) ? propKey : [propKey];
  const deletedProps = [];
  for (const key of propKeysToDelete) {
    const prop = overridableProps.props[key];
    if (!prop) {
      continue;
    }
    deletedProps.push(prop);
    if (revertElementOverridable) {
      (0,_utils_revert_overridable_settings__WEBPACK_IMPORTED_MODULE_1__.revertElementOverridableSetting)(prop.elementId, prop.propKey, prop.originValue, key);
    }
  }
  if (deletedProps.length === 0) {
    return;
  }
  const remainingProps = Object.fromEntries(Object.entries(overridableProps.props).filter(([key]) => !propKeysToDelete.includes(key)));
  const updatedGroups = (0,_utils_groups_transformers__WEBPACK_IMPORTED_MODULE_2__.removePropFromAllGroups)(overridableProps.groups, propKey);
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(componentId, {
    ...overridableProps,
    props: remainingProps,
    groups: updatedGroups
  });
  const currentComponent = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getCurrentComponent();
  for (const prop of deletedProps) {
    (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.trackComponentEvent)({
      action: 'propertyRemoved',
      // TODO: remove `source` in version 4.4.0
      source: executedBy,
      executedBy,
      component_uid: currentComponent?.uid,
      property_id: prop.overrideKey,
      property_path: prop.propKey,
      property_name: prop.label,
      element_type: prop.widgetType ?? prop.elType
    });
  }
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/delete-overridable-group.ts":
/*!********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/delete-overridable-group.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOverridableGroup: function() { return /* binding */ deleteOverridableGroup; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_groups_transformers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/groups-transformers */ "./packages/packages/pro/editor-components-extended/src/store/utils/groups-transformers.ts");


function deleteOverridableGroup({
  componentId,
  groupId
}) {
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(componentId);
  if (!overridableProps) {
    return false;
  }
  const group = overridableProps.groups.items[groupId];
  if (!group || group.props.length > 0) {
    return false;
  }
  const updatedGroups = (0,_utils_groups_transformers__WEBPACK_IMPORTED_MODULE_1__.deleteGroup)(overridableProps.groups, groupId);
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(componentId, {
    ...overridableProps,
    groups: updatedGroups
  });
  return true;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/rename-component.ts":
/*!************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/rename-component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renameComponent: function() { return /* binding */ renameComponent; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__);



const TITLE_EXTERNAL_CHANGE_COMMAND = 'title_external_change';
const renameComponent = (componentUid, newName) => {
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.rename(componentUid, newName);
  (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__.setDocumentModifiedStatus)(true);
  refreshComponentInstanceTitles(componentUid);
};
function refreshComponentInstanceTitles(componentUid) {
  const documentContainer = getDocumentContainer();
  if (!documentContainer) {
    return;
  }
  const componentInstances = findComponentInstancesByUid(documentContainer, componentUid);
  componentInstances.forEach(element => {
    element.model.trigger?.(TITLE_EXTERNAL_CHANGE_COMMAND);
  });
}
function getDocumentContainer() {
  const documentsManager = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__.getV1DocumentsManager)();
  return documentsManager?.getCurrent()?.container;
}
function findComponentInstancesByUid(documentContainer, componentUid) {
  const allDescendants = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__.getAllDescendants)(documentContainer);
  return allDescendants.filter(element => {
    const widgetType = element.model.get('widgetType');
    const editorSettings = element.model.get('editor_settings');
    const isMatch = widgetType === _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.COMPONENT_WIDGET_TYPE && editorSettings?.component_uid === componentUid;
    return isMatch;
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/rename-overridable-group.ts":
/*!********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/rename-overridable-group.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renameOverridableGroup: function() { return /* binding */ renameOverridableGroup; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_groups_transformers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/groups-transformers */ "./packages/packages/pro/editor-components-extended/src/store/utils/groups-transformers.ts");


function renameOverridableGroup({
  componentId,
  groupId,
  label
}) {
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(componentId);
  if (!overridableProps) {
    return false;
  }
  const group = overridableProps.groups.items[groupId];
  if (!group) {
    return false;
  }
  const updatedGroups = (0,_utils_groups_transformers__WEBPACK_IMPORTED_MODULE_1__.renameGroup)(overridableProps.groups, groupId, label);
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(componentId, {
    ...overridableProps,
    groups: updatedGroups
  });
  return true;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/reorder-group-props.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/reorder-group-props.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reorderGroupProps: function() { return /* binding */ reorderGroupProps; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);

function reorderGroupProps({
  componentId,
  groupId,
  newPropsOrder
}) {
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(componentId);
  if (!overridableProps) {
    return;
  }
  const group = overridableProps.groups.items[groupId];
  if (!group) {
    return;
  }
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(componentId, {
    ...overridableProps,
    groups: {
      ...overridableProps.groups,
      items: {
        ...overridableProps.groups.items,
        [groupId]: {
          ...group,
          props: newPropsOrder
        }
      }
    }
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/reorder-overridable-groups.ts":
/*!**********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/reorder-overridable-groups.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reorderOverridableGroups: function() { return /* binding */ reorderOverridableGroups; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);

function reorderOverridableGroups({
  componentId,
  newOrder
}) {
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(componentId);
  if (!overridableProps) {
    return;
  }
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(componentId, {
    ...overridableProps,
    groups: {
      ...overridableProps.groups,
      order: newOrder
    }
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/reset-sanitized-components.ts":
/*!**********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/reset-sanitized-components.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetSanitizedComponents: function() { return /* binding */ resetSanitizedComponents; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);

function resetSanitizedComponents() {
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.resetSanitizedComponents();
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/update-component-sanitized-attribute.ts":
/*!********************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/update-component-sanitized-attribute.ts ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateComponentSanitizedAttribute: function() { return /* binding */ updateComponentSanitizedAttribute; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);

function updateComponentSanitizedAttribute(componentId, attribute) {
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.updateComponentSanitizedAttribute(componentId, attribute);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/update-current-component.ts":
/*!********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/update-current-component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateCurrentComponent: function() { return /* binding */ updateCurrentComponent; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);

function updateCurrentComponent(params) {
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setPath(params.path);
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setCurrentComponentId(params.currentComponentId);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/actions/update-overridable-prop-params.ts":
/*!**************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/actions/update-overridable-prop-params.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateOverridablePropParams: function() { return /* binding */ updateOverridablePropParams; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_groups_transformers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/groups-transformers */ "./packages/packages/pro/editor-components-extended/src/store/utils/groups-transformers.ts");


function updateOverridablePropParams({
  componentId,
  overrideKey,
  label,
  groupId
}) {
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(componentId);
  if (!overridableProps) {
    return;
  }
  const prop = overridableProps.props[overrideKey];
  if (!prop) {
    return;
  }
  const oldGroupId = prop.groupId;
  const newGroupId = groupId ?? oldGroupId;
  const updatedProp = {
    ...prop,
    label,
    groupId: newGroupId
  };
  const updatedGroups = (0,_utils_groups_transformers__WEBPACK_IMPORTED_MODULE_1__.movePropBetweenGroups)(overridableProps.groups, overrideKey, oldGroupId, newGroupId);
  _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.setOverridableProps(componentId, {
    ...overridableProps,
    props: {
      ...overridableProps.props,
      [overrideKey]: updatedProp
    },
    groups: updatedGroups
  });
  return updatedProp;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/store/utils/groups-transformers.ts":
/*!*************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/store/utils/groups-transformers.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPropToGroup: function() { return /* binding */ addPropToGroup; },
/* harmony export */   deleteGroup: function() { return /* binding */ deleteGroup; },
/* harmony export */   ensureGroupInOrder: function() { return /* binding */ ensureGroupInOrder; },
/* harmony export */   movePropBetweenGroups: function() { return /* binding */ movePropBetweenGroups; },
/* harmony export */   removePropFromAllGroups: function() { return /* binding */ removePropFromAllGroups; },
/* harmony export */   removePropFromGroup: function() { return /* binding */ removePropFromGroup; },
/* harmony export */   removePropsFromState: function() { return /* binding */ removePropsFromState; },
/* harmony export */   renameGroup: function() { return /* binding */ renameGroup; },
/* harmony export */   resolveOrCreateGroup: function() { return /* binding */ resolveOrCreateGroup; }
/* harmony export */ });
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/utils */ "@elementor/utils");
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function removePropFromAllGroups(groups, propKey) {
  const propKeys = Array.isArray(propKey) ? propKey : [propKey];
  return {
    ...groups,
    items: Object.fromEntries(Object.entries(groups.items).map(([groupId, group]) => [groupId, {
      ...group,
      props: group.props.filter(p => !propKeys.includes(p))
    }]))
  };
}
function addPropToGroup(groups, groupId, propKey) {
  const group = groups.items[groupId];
  if (!group) {
    return groups;
  }
  if (group.props.includes(propKey)) {
    return groups;
  }
  return {
    ...groups,
    items: {
      ...groups.items,
      [groupId]: {
        ...group,
        props: [...group.props, propKey]
      }
    }
  };
}
function movePropBetweenGroups(groups, propKey, fromGroupId, toGroupId) {
  if (fromGroupId === toGroupId) {
    return groups;
  }
  const withoutProp = removePropFromGroup(groups, fromGroupId, propKey);
  return addPropToGroup(withoutProp, toGroupId, propKey);
}
function removePropFromGroup(groups, groupId, propKey) {
  const group = groups.items[groupId];
  if (!group) {
    return groups;
  }
  return {
    ...groups,
    items: {
      ...groups.items,
      [groupId]: {
        ...group,
        props: group.props.filter(p => p !== propKey)
      }
    }
  };
}
function resolveOrCreateGroup(groups, requestedGroupId) {
  if (requestedGroupId && groups.items[requestedGroupId]) {
    return {
      groups,
      groupId: requestedGroupId
    };
  }
  if (!requestedGroupId && groups.order.length > 0) {
    return {
      groups,
      groupId: groups.order[0]
    };
  }
  return createGroup(groups, requestedGroupId);
}
function createGroup(groups, groupId, label) {
  const newGroupId = groupId || (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_0__.generateUniqueId)('group');
  const newLabel = label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'elementor-pro');
  return {
    groups: {
      ...groups,
      items: {
        ...groups.items,
        [newGroupId]: {
          id: newGroupId,
          label: newLabel,
          props: []
        }
      },
      order: [...groups.order, newGroupId]
    },
    groupId: newGroupId
  };
}
function removePropsFromState(overridableProps, propsToRemove) {
  const overrideKeysToRemove = propsToRemove.map(prop => prop.overrideKey);
  const remainingProps = Object.fromEntries(Object.entries(overridableProps.props).filter(([, prop]) => !propsToRemove.includes(prop)));
  const updatedGroupItems = Object.fromEntries(Object.entries(overridableProps.groups.items).map(([groupId, group]) => [groupId, {
    ...group,
    props: group.props.filter(prop => !overrideKeysToRemove.includes(prop))
  }]));
  return {
    props: remainingProps,
    groups: {
      items: updatedGroupItems,
      order: overridableProps.groups.order.filter(groupId => !overrideKeysToRemove.includes(groupId))
    }
  };
}
function ensureGroupInOrder(groups, groupId) {
  if (groups.order.includes(groupId)) {
    return groups;
  }
  return {
    ...groups,
    order: [...groups.order, groupId]
  };
}
function deleteGroup(groups, groupId) {
  const {
    [groupId]: removed,
    ...remainingItems
  } = groups.items;
  return {
    items: remainingItems,
    order: groups.order.filter(id => id !== groupId)
  };
}
function renameGroup(groups, groupId, newLabel) {
  const group = groups.items[groupId];
  if (!group) {
    return groups;
  }
  return {
    ...groups,
    items: {
      ...groups.items,
      [groupId]: {
        ...group,
        label: newLabel
      }
    }
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/before-save.ts":
/*!**********************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/before-save.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   beforeSave: function() { return /* binding */ beforeSave; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sync_set_component_overridable_props_settings_before_save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sync/set-component-overridable-props-settings-before-save */ "./packages/packages/pro/editor-components-extended/src/sync/set-component-overridable-props-settings-before-save.ts");
/* harmony import */ var _sync_update_archived_component_before_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sync/update-archived-component-before-save */ "./packages/packages/pro/editor-components-extended/src/sync/update-archived-component-before-save.ts");
/* harmony import */ var _sync_update_component_title_before_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync/update-component-title-before-save */ "./packages/packages/pro/editor-components-extended/src/sync/update-component-title-before-save.ts");
/* harmony import */ var _create_components_before_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-components-before-save */ "./packages/packages/pro/editor-components-extended/src/sync/create-components-before-save.ts");





const beforeSave = ({
  container,
  status
}) => {
  const elements = container?.model.get('elements').toJSON?.() ?? [];
  return Promise.all([syncComponents({
    elements,
    status
  }), (0,_sync_set_component_overridable_props_settings_before_save__WEBPACK_IMPORTED_MODULE_1__.setComponentOverridablePropsSettingsBeforeSave)({
    container
  })]);
};

// These operations run sequentially to prevent race conditions when multiple
// edits occur on the same component simultaneously.
// TODO: Consolidate these into a single PUT /components endpoint.
const syncComponents = async ({
  elements,
  status
}) => {
  // This order is important - first update existing components, then create new components,
  // Since new component validation depends on the existing components (preventing duplicate names).
  await updateExistingComponentsBeforeSave({
    elements,
    status
  });
  await (0,_create_components_before_save__WEBPACK_IMPORTED_MODULE_4__.createComponentsBeforeSave)({
    elements,
    status
  });
};
const updateExistingComponentsBeforeSave = async ({
  elements,
  status
}) => {
  await (0,_sync_update_component_title_before_save__WEBPACK_IMPORTED_MODULE_3__.updateComponentTitleBeforeSave)(status);
  await (0,_sync_update_archived_component_before_save__WEBPACK_IMPORTED_MODULE_2__.updateArchivedComponentBeforeSave)(status);
  await (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.publishDraftComponentsInPageBeforeSave)({
    elements,
    status
  });
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/cleanup-overridable-props-on-delete-and-detach.ts":
/*!*********************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/cleanup-overridable-props-on-delete-and-detach.ts ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CleanupOverridablePropsOnDeleteAndDetach: function() { return /* binding */ CleanupOverridablePropsOnDeleteAndDetach; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/core-adapter-utils */ "@elementor/core-adapter-utils");
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_actions_create_component_overridable_prop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/create-component-overridable-prop */ "./packages/packages/pro/editor-components-extended/src/store/actions/create-component-overridable-prop.ts");
/* harmony import */ var _store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/delete-component-overridable-prop */ "./packages/packages/pro/editor-components-extended/src/store/actions/delete-component-overridable-prop.ts");








const deleteActionEntries = new Map();

// Inside component edit mode, when an inner element is deleted, we should cleanup the overridable props related to it.
// Then, we should restore them on delete undo, and re-delete them on delete redo.
// Same logic applies to detach of inner component instance -
// cleanup exposed further props on the inner instance, restore them on detach undo, and re-delete them on detach redo.
function CleanupOverridablePropsOnDeleteAndDetach() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Cleanup overridable props on delete, restore on undo, re-delete on redo.
    registerCleanupOverridablePropsOnDelete();
    registerRestoreOverridablePropsOnUndo();
    registerCleanupOverridablePropsOnRedo();

    // Cleanup overridable props on detach of inner instance, restore on undo, re-delete on redo.
    const removeDetachEventHandlers = registerDetachEventHandlers();

    // Clear delete action entries on document switch - undo/redo are supported only while we're editing the same component.
    registerClearDeleteEntriesOnDocumentSwitch();
    return () => {
      removeDetachEventHandlers();
    };
  }, []);
  return null;
}
function cleanupOverridableProps(deletedElementIds, actionId) {
  const currentComponentId = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_3__.componentsSelectors.getCurrentComponentId();
  if (!currentComponentId) {
    return;
  }
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_3__.componentsSelectors.getOverridableProps(currentComponentId);
  if (!overridableProps || Object.keys(overridableProps.props).length === 0) {
    return;
  }
  const propsToDelete = Object.values(overridableProps.props).filter(prop => deletedElementIds.includes(prop.elementId));
  if (propsToDelete.length === 0) {
    return;
  }
  if (actionId !== undefined) {
    deleteActionEntries.set(actionId, {
      props: propsToDelete,
      elementIds: deletedElementIds
    });
  }
  const propKeysToDelete = propsToDelete.map(prop => prop.overrideKey);
  (0,_store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_7__.deleteComponentOverridableProp)({
    componentId: currentComponentId,
    propKey: propKeysToDelete,
    executedBy: 'system',
    revertElementOverridable: false
  });
}
function undoCleanupOverridableProps(actionId) {
  const currentComponentId = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_3__.componentsSelectors.getCurrentComponentId();
  if (!currentComponentId) {
    return;
  }
  const entry = deleteActionEntries.get(actionId);
  if (!entry) {
    return;
  }
  const restoreProps = () => {
    for (const prop of entry.props) {
      (0,_store_actions_create_component_overridable_prop__WEBPACK_IMPORTED_MODULE_6__.createComponentOverridableProp)({
        componentId: currentComponentId,
        ...prop,
        executedBy: 'system'
      });
    }
  };
  if ((0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__.isCoreAtLeast)('4.1.0')) {
    (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__.doAfterRender)(entry.elementIds, restoreProps);
  }
}
function redoCleanupOverridableProps(actionId) {
  const currentComponentId = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_3__.componentsSelectors.getCurrentComponentId();
  if (!currentComponentId) {
    return;
  }
  const entry = deleteActionEntries.get(actionId);
  if (!entry) {
    return;
  }
  const propKeysToDelete = entry.props.map(prop => prop.overrideKey);
  (0,_store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_7__.deleteComponentOverridableProp)({
    componentId: currentComponentId,
    propKey: propKeysToDelete,
    executedBy: 'system',
    revertElementOverridable: false
  });
}
function registerCleanupOverridablePropsOnDelete() {
  // This hook is not a real dependency - it doesn't block the execution of the command in any case, only perform side effect.
  // We use `dependency` and not `after` hook because the `after` hook doesn't include the children of a deleted container
  // in the callback parameters (as they already were deleted).
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_5__.registerDataHook)('dependency', 'document/elements/delete', (args, options) => {
    if (isPartOfMoveCommand(options)) {
      return true;
    }
    const containers = args.containers ?? (args.container ? [args.container] : []);
    if (containers.length === 0) {
      return true;
    }
    const deletedElementIds = collectDeletedElementIds(containers);
    if (deletedElementIds.length === 0) {
      return true;
    }
    cleanupOverridableProps(deletedElementIds, options?.currentHistoryItemId);
    return true;
  });
}
function registerClearDeleteEntriesOnDocumentSwitch() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_5__.registerDataHook)('after', 'editor/documents/attach-preview', () => {
    deleteActionEntries.clear();
  });
}
function registerRestoreOverridablePropsOnUndo() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_5__.registerDataHook)('after', 'document/history/undo', async (_, results) => {
    if (!results?.originHistoryItemId) {
      return;
    }
    undoCleanupOverridableProps(results.originHistoryItemId);
  });
}
function registerCleanupOverridablePropsOnRedo() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_5__.registerDataHook)('after', 'document/history/redo', (_, results) => {
    if (!results?.originHistoryItemId) {
      return;
    }
    redoCleanupOverridableProps(results.originHistoryItemId);
  });
}
const DETACH_EVENT = 'elementor/components/detach-instance';
const DETACH_UNDO_EVENT = 'elementor/components/undo-detach-instance';
const DETACH_REDO_EVENT = 'elementor/components/redo-detach-instance';
function registerDetachEventHandlers() {
  const onDetach = event => {
    const {
      detachedInstanceId,
      detachActionId
    } = event.detail;
    cleanupOverridableProps([detachedInstanceId], detachActionId);
  };
  const onDetachUndo = event => {
    const {
      detachActionId
    } = event.detail;
    undoCleanupOverridableProps(detachActionId);
  };
  const onDetachRedo = event => {
    const {
      detachActionId
    } = event.detail;
    redoCleanupOverridableProps(detachActionId);
  };
  window.addEventListener(DETACH_EVENT, onDetach);
  window.addEventListener(DETACH_UNDO_EVENT, onDetachUndo);
  window.addEventListener(DETACH_REDO_EVENT, onDetachRedo);
  return () => {
    window.removeEventListener(DETACH_EVENT, onDetach);
    window.removeEventListener(DETACH_UNDO_EVENT, onDetachUndo);
    window.removeEventListener(DETACH_REDO_EVENT, onDetachRedo);
  };
}
function collectDeletedElementIds(containers) {
  const elementIds = containers.filter(Boolean).flatMap(container => [container, ...(0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_4__.getAllDescendants)(container)]).map(element => element.model?.get?.('id') ?? element.id).filter(id => Boolean(id));
  return elementIds;
}
function isPartOfMoveCommand(options) {
  // Skip cleanup if this delete is part of a move command
  // Move = delete + create, and we don't want to delete the overridable prop in this case.
  // See assets/dev/js/editor/document/elements/commands/move.js
  const isMoveCommandInTrace = options?.commandsCurrentTrace?.includes('document/elements/move') || options?.commandsCurrentTrace?.includes('document/repeater/move');
  return Boolean(isMoveCommandInTrace);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/create-components-before-save.ts":
/*!****************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/create-components-before-save.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponentsBeforeSave: function() { return /* binding */ createComponentsBeforeSave; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__);


async function createComponentsBeforeSave({
  elements,
  status
}) {
  const unpublishedComponents = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getUnpublishedComponents();
  if (!unpublishedComponents.length) {
    return;
  }
  try {
    const uidToComponentId = await createComponents(unpublishedComponents, status);
    updateComponentInstances(elements, uidToComponentId);
    _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.add(unpublishedComponents.map(component => ({
      id: uidToComponentId.get(component.uid),
      name: component.name,
      uid: component.uid,
      overridableProps: component.overridableProps ? component.overridableProps : undefined
    })));
    _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.resetUnpublished();
  } catch (error) {
    const failedUids = unpublishedComponents.map(component => component.uid);
    _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.removeUnpublished(failedUids);
    throw new Error(`Failed to publish components: ${error}`);
  }
}
async function createComponents(components, status) {
  const response = await _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.apiClient.create({
    status,
    items: components.map(component => ({
      uid: component.uid,
      title: component.name,
      elements: component.elements,
      settings: component.overridableProps ? {
        overridable_props: component.overridableProps
      } : undefined
    }))
  });
  const map = new Map();
  Object.entries(response).forEach(([key, value]) => {
    map.set(key, value);
  });
  return map;
}
function updateComponentInstances(elements, uidToComponentId) {
  elements.forEach(element => {
    const {
      shouldUpdate,
      newComponentId
    } = shouldUpdateElement(element, uidToComponentId);
    if (shouldUpdate) {
      updateElementComponentId(element.id, newComponentId);
    }
    if (element.elements) {
      updateComponentInstances(element.elements, uidToComponentId);
    }
  });
}
function shouldUpdateElement(element, uidToComponentId) {
  if (element.widgetType === 'e-component') {
    const currentComponentId = element.settings?.component_instance?.value?.component_id.value;
    if (currentComponentId && uidToComponentId.has(currentComponentId.toString())) {
      return {
        shouldUpdate: true,
        newComponentId: uidToComponentId.get(currentComponentId.toString())
      };
    }
  }
  return {
    shouldUpdate: false,
    newComponentId: null
  };
}
function updateElementComponentId(elementId, componentId) {
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.updateElementSettings)({
    id: elementId,
    props: {
      component_instance: {
        $$type: 'component-instance',
        value: {
          component_id: {
            $$type: 'number',
            value: componentId
          }
        }
      }
    },
    withHistory: false
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/handle-component-edit-mode-container.ts":
/*!***********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/handle-component-edit-mode-container.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHandleComponentEditModeContainer: function() { return /* binding */ initHandleComponentEditModeContainer; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas-extended */ "@elementor/editor-canvas-extended");
/* harmony import */ var _elementor_editor_canvas_extended__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas_extended__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts */ "./packages/packages/pro/editor-components-extended/src/consts.ts");
/* harmony import */ var _utils_is_editing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-editing-component */ "./packages/packages/pro/editor-components-extended/src/utils/is-editing-component.ts");





const V4_DEFAULT_CONTAINER_TYPE = 'e-flexbox';
function initHandleComponentEditModeContainer() {
  initRedirectDropIntoComponent();
  initHandleTopLevelElementDelete();
}
function initHandleTopLevelElementDelete() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__.registerDataHook)('after', 'document/elements/delete', args => {
    if (!(0,_utils_is_editing_component__WEBPACK_IMPORTED_MODULE_4__.isEditingComponent)()) {
      return;
    }
    const containers = args.containers ?? (args.container ? [args.container] : []);
    for (const container of containers) {
      if (!container.parent || !isComponent(container.parent)) {
        continue;
      }
      const component = container.parent;
      const isComponentEmpty = component.children?.length === 0;
      if (isComponentEmpty) {
        createEmptyTopLevelContainer(container.parent);
      }
    }
  });
}
function initRedirectDropIntoComponent() {
  (0,_elementor_editor_canvas_extended__WEBPACK_IMPORTED_MODULE_0__.registerDropContainerRedirect)({
    shouldHandle: _utils_is_editing_component__WEBPACK_IMPORTED_MODULE_4__.isEditingComponent,
    resolveRedirect: container => {
      if (!isComponent(container)) {
        return {
          shouldRedirect: false,
          container
        };
      }
      return getComponentContainer(container);
    }
  });
}
function createEmptyTopLevelContainer(container) {
  const newContainer = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    container,
    model: {
      elType: V4_DEFAULT_CONTAINER_TYPE
    }
  });
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.selectElement)(newContainer.id);
}
function getComponentContainer(container) {
  const topLevelElement = container.children?.[0];
  if (topLevelElement) {
    return {
      shouldRedirect: true,
      container: topLevelElement
    };
  }
  return {
    shouldRedirect: false,
    container
  };
}
function isComponent(container) {
  const isDocument = container.id === 'document';
  if (!isDocument) {
    return false;
  }
  return container.document?.config.type === _consts__WEBPACK_IMPORTED_MODULE_3__.COMPONENT_DOCUMENT_TYPE;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/prevent-non-atomic-nesting.ts":
/*!*************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/prevent-non-atomic-nesting.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findNonAtomicElements: function() { return /* binding */ findNonAtomicElements; },
/* harmony export */   findNonAtomicElementsInElement: function() { return /* binding */ findNonAtomicElementsInElement; },
/* harmony export */   hasNonAtomicElementsInTree: function() { return /* binding */ hasNonAtomicElementsInTree; },
/* harmony export */   initNonAtomicNestingPrevention: function() { return /* binding */ initNonAtomicNestingPrevention; },
/* harmony export */   isElementAtomic: function() { return /* binding */ isElementAtomic; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-notifications */ "@elementor/editor-notifications");
/* harmony import */ var _elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_is_editing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-editing-component */ "./packages/packages/pro/editor-components-extended/src/utils/is-editing-component.ts");






const NON_ATOMIC_ELEMENT_ALERT = {
  type: 'default',
  message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("This widget isn't compatible with components. Use atomic elements instead.", 'elementor-pro'),
  id: 'non-atomic-element-blocked'
};
function initNonAtomicNestingPrevention() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.blockCommand)({
    command: 'document/elements/create',
    condition: blockNonAtomicCreate
  });
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.blockCommand)({
    command: 'document/elements/move',
    condition: blockNonAtomicMove
  });
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.blockCommand)({
    command: 'document/elements/paste',
    condition: blockNonAtomicPaste
  });
}
function isElementAtomic(elementType) {
  return (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getElementType)(elementType) !== null;
}
function blockNonAtomicCreate(args) {
  if (!(0,_utils_is_editing_component__WEBPACK_IMPORTED_MODULE_5__.isEditingComponent)()) {
    return false;
  }
  const {
    model
  } = args;
  const elementType = model?.widgetType || model?.elType;
  if (!elementType) {
    return false;
  }
  if (isElementAtomic(elementType)) {
    return false;
  }
  (0,_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2__.notify)(NON_ATOMIC_ELEMENT_ALERT);
  return true;
}
function blockNonAtomicMove(args) {
  if (!(0,_utils_is_editing_component__WEBPACK_IMPORTED_MODULE_5__.isEditingComponent)()) {
    return false;
  }
  const {
    containers = [args.container]
  } = args;
  const hasNonAtomicElement = containers.some(container => {
    if (!container) {
      return false;
    }
    const allElements = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getAllDescendants)(container);
    return allElements.some(element => !(0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.isAtomicWidget)(element));
  });
  if (hasNonAtomicElement) {
    (0,_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2__.notify)(NON_ATOMIC_ELEMENT_ALERT);
  }
  return hasNonAtomicElement;
}
function blockNonAtomicPaste(args) {
  if (!(0,_utils_is_editing_component__WEBPACK_IMPORTED_MODULE_5__.isEditingComponent)()) {
    return false;
  }
  const {
    storageType
  } = args;
  if (storageType !== 'localstorage') {
    return false;
  }
  const data = window?.elementorCommon?.storage?.get();
  if (!data?.clipboard?.elements) {
    return false;
  }
  const hasNonAtomicElement = hasNonAtomicElementsInTree(data.clipboard.elements);
  if (hasNonAtomicElement) {
    (0,_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_2__.notify)(NON_ATOMIC_ELEMENT_ALERT);
  }
  return hasNonAtomicElement;
}
function hasNonAtomicElementsInTree(elements) {
  for (const element of elements) {
    const elementType = element.widgetType || element.elType;
    if (elementType && !isElementAtomic(elementType)) {
      return true;
    }
    if (element.elements?.length) {
      if (hasNonAtomicElementsInTree(element.elements)) {
        return true;
      }
    }
  }
  return false;
}
function findNonAtomicElements(elements) {
  const nonAtomicElements = [];
  for (const element of elements) {
    const elementType = element.widgetType || element.elType;
    if (elementType && !isElementAtomic(elementType)) {
      nonAtomicElements.push(elementType);
    }
    if (element.elements?.length) {
      nonAtomicElements.push(...findNonAtomicElements(element.elements));
    }
  }
  return [...new Set(nonAtomicElements)];
}
function findNonAtomicElementsInElement(element) {
  const nonAtomicElements = [];
  const elementType = element.widgetType || element.elType;
  if (elementType && !isElementAtomic(elementType)) {
    nonAtomicElements.push(elementType);
  }
  if (element.elements?.length) {
    for (const child of element.elements) {
      nonAtomicElements.push(...findNonAtomicElementsInElement(child));
    }
  }
  return [...new Set(nonAtomicElements)];
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/revert-overridables-on-copy-or-duplicate.ts":
/*!***************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/revert-overridables-on-copy-or-duplicate.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRevertOverridablesOnCopyOrDuplicate: function() { return /* binding */ initRevertOverridablesOnCopyOrDuplicate; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_editing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-editing-component */ "./packages/packages/pro/editor-components-extended/src/utils/is-editing-component.ts");
/* harmony import */ var _utils_revert_overridable_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/revert-overridable-settings */ "./packages/packages/pro/editor-components-extended/src/utils/revert-overridable-settings.ts");



function initRevertOverridablesOnCopyOrDuplicate() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.registerDataHook)('after', 'document/elements/duplicate', (_args, result) => {
    if (!(0,_utils_is_editing_component__WEBPACK_IMPORTED_MODULE_1__.isEditingComponent)()) {
      return;
    }
    revertOverridablesForDuplicatedElements(result);
  });
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.registerDataHook)('after', 'document/elements/copy', args => {
    if (!(0,_utils_is_editing_component__WEBPACK_IMPORTED_MODULE_1__.isEditingComponent)()) {
      return;
    }
    revertOverridablesInStorage(args.storageKey ?? 'clipboard');
  });
}
function revertOverridablesForDuplicatedElements(duplicatedElements) {
  const containers = Array.isArray(duplicatedElements) ? duplicatedElements : [duplicatedElements];
  containers.forEach(container => {
    (0,_utils_revert_overridable_settings__WEBPACK_IMPORTED_MODULE_2__.revertAllOverridablesInContainer)(container);
  });
}
function revertOverridablesInStorage(storageKey) {
  const storage = window.elementorCommon?.storage;
  if (!storage) {
    return;
  }
  const storageData = storage.get(storageKey);
  if (!storageData?.elements?.length) {
    return;
  }
  const elementsDataWithOverridablesReverted = storageData.elements.map(_utils_revert_overridable_settings__WEBPACK_IMPORTED_MODULE_2__.revertAllOverridablesInElementData);
  storage.set(storageKey, {
    ...storageData,
    elements: elementsDataWithOverridablesReverted
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/sanitize-overridable-props.ts":
/*!*************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/sanitize-overridable-props.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SanitizeOverridableProps: function() { return /* binding */ SanitizeOverridableProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/delete-component-overridable-prop */ "./packages/packages/pro/editor-components-extended/src/store/actions/delete-component-overridable-prop.ts");
/* harmony import */ var _store_actions_update_component_sanitized_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/update-component-sanitized-attribute */ "./packages/packages/pro/editor-components-extended/src/store/actions/update-component-sanitized-attribute.ts");




function SanitizeOverridableProps() {
  const currentComponentId = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useCurrentComponentId)();
  const overridableProps = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useOverridableProps)(currentComponentId);
  const isSanitized = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.useIsSanitizedComponent)(currentComponentId, 'overridableProps');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSanitized || !overridableProps || !currentComponentId) {
      return;
    }
    const filtered = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_1__.filterValidOverridableProps)(overridableProps);
    const propsToDelete = Object.keys(overridableProps.props ?? {}).filter(key => !filtered.props[key]);
    if (propsToDelete.length > 0) {
      propsToDelete.forEach(key => {
        (0,_store_actions_delete_component_overridable_prop__WEBPACK_IMPORTED_MODULE_2__.deleteComponentOverridableProp)({
          componentId: currentComponentId,
          propKey: key,
          executedBy: 'system'
        });
      });
    }
    (0,_store_actions_update_component_sanitized_attribute__WEBPACK_IMPORTED_MODULE_3__.updateComponentSanitizedAttribute)(currentComponentId, 'overridableProps');
  }, [currentComponentId, isSanitized, overridableProps]);
  return null;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/set-component-overridable-props-settings-before-save.ts":
/*!***************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/set-component-overridable-props-settings-before-save.ts ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setComponentOverridablePropsSettingsBeforeSave: function() { return /* binding */ setComponentOverridablePropsSettingsBeforeSave; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts */ "./packages/packages/pro/editor-components-extended/src/consts.ts");


const setComponentOverridablePropsSettingsBeforeSave = ({
  container
}) => {
  const currentDocument = container.document;
  if (!currentDocument || currentDocument.config.type !== _consts__WEBPACK_IMPORTED_MODULE_1__.COMPONENT_DOCUMENT_TYPE) {
    return;
  }
  const overridableProps = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getOverridableProps(currentDocument.id);
  if (overridableProps) {
    container.settings.set('overridable_props', overridableProps);
  }
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/update-archived-component-before-save.ts":
/*!************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/update-archived-component-before-save.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateArchivedComponentBeforeSave: function() { return /* binding */ updateArchivedComponentBeforeSave; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-notifications */ "@elementor/editor-notifications");
/* harmony import */ var _elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_1__);


const failedNotification = message => ({
  type: 'error',
  message: `Failed to archive components: ${message}`,
  id: 'failed-archived-components-notification'
});
const updateArchivedComponentBeforeSave = async status => {
  try {
    const archivedComponents = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getArchivedThisSession();
    if (!archivedComponents.length) {
      return;
    }
    const result = await _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.apiClient.updateArchivedComponents(archivedComponents, status);
    const failedIds = result.failedIds.join(', ');
    if (failedIds) {
      (0,_elementor_editor_notifications__WEBPACK_IMPORTED_MODULE_1__.notify)(failedNotification(failedIds));
    }
  } catch (error) {
    throw new Error(`Failed to update archived components: ${error}`);
  }
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/sync/update-component-title-before-save.ts":
/*!*********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/sync/update-component-title-before-save.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateComponentTitleBeforeSave: function() { return /* binding */ updateComponentTitleBeforeSave; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);

const updateComponentTitleBeforeSave = async status => {
  const updatedComponentNames = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getUpdatedComponentNames();
  if (!updatedComponentNames.length) {
    return;
  }
  const result = await _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.apiClient.updateComponentTitle(updatedComponentNames, status);
  if (result.failedIds.length === 0) {
    _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsActions.cleanUpdatedComponentNames();
  }
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/apply-overridables-to-elements.ts":
/*!******************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/apply-overridables-to-elements.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyOverridablesToElements: function() { return /* binding */ applyOverridablesToElements; }
/* harmony export */ });
function applyOverridablesToElements(elements, overridableProps) {
  Object.values(overridableProps.props).forEach(prop => {
    const element = findElementById(elements, prop.elementId);
    if (!element?.settings) {
      return;
    }
    element.settings[prop.propKey] = {
      $$type: 'overridable',
      value: {
        override_key: prop.overrideKey,
        origin_value: element.settings[prop.propKey]
      }
    };
  });
}
function findElementById(elements, targetId) {
  for (const element of elements) {
    if (element.id === targetId) {
      return element;
    }
    if (element.elements) {
      const found = findElementById(element.elements, targetId);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/can-show-angie-elementor-promotion.ts":
/*!**********************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/can-show-angie-elementor-promotion.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canShowAngieElementorPromotion: function() { return /* binding */ canShowAngieElementorPromotion; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-mcp */ "@elementor/editor-mcp");
/* harmony import */ var _elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_0__);

function canShowAngieElementorPromotion() {
  if ((0,_elementor_editor_mcp__WEBPACK_IMPORTED_MODULE_0__.isAngieAvailable)()) {
    return true;
  }
  return !!window.elementor?.config?.user?.is_administrator;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/component-form-schema.ts":
/*!*********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/component-form-schema.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MIN_NAME_LENGTH: function() { return /* binding */ MIN_NAME_LENGTH; },
/* harmony export */   createBaseComponentSchema: function() { return /* binding */ createBaseComponentSchema; },
/* harmony export */   createSubmitComponentSchema: function() { return /* binding */ createSubmitComponentSchema; }
/* harmony export */ });
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/schema */ "@elementor/schema");
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_schema__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 50;
const baseComponentSchema = _elementor_schema__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().max(MAX_NAME_LENGTH, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Component name is too long. Please keep it under 50 characters.', 'elementor-pro'));
const createBaseComponentSchema = existingNames => {
  return _elementor_schema__WEBPACK_IMPORTED_MODULE_0__.z.object({
    componentName: baseComponentSchema.refine(value => !existingNames.includes(value), {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Component name already exists', 'elementor-pro')
    })
  });
};
const createSubmitComponentSchema = existingNames => {
  const baseSchema = createBaseComponentSchema(existingNames);
  return baseSchema.extend({
    componentName: baseSchema.shape.componentName.refine(value => value.length > 0, {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Component name is required.', 'elementor-pro')
    }).refine(value => value.length >= MIN_NAME_LENGTH, {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Component name is too short. Please enter at least 2 characters.', 'elementor-pro')
    })
  });
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/component-name-validation.ts":
/*!*************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/component-name-validation.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateComponentName: function() { return /* binding */ validateComponentName; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_form_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-form-schema */ "./packages/packages/pro/editor-components-extended/src/utils/component-form-schema.ts");


function validateComponentName(label) {
  const existingComponentTitles = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getComponents()?.map(({
    name
  }) => name) ?? [];
  const schema = (0,_component_form_schema__WEBPACK_IMPORTED_MODULE_1__.createSubmitComponentSchema)(existingComponentTitles);
  const result = schema.safeParse({
    componentName: label.toLowerCase()
  });
  if (result.success) {
    return {
      isValid: true,
      errorMessage: null
    };
  }
  const formattedErrors = result.error.format();
  const errorMessage = formattedErrors.componentName?._errors[0] ?? formattedErrors._errors[0];
  return {
    isValid: false,
    errorMessage
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/create-component-model.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/create-component-model.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponentModel: function() { return /* binding */ createComponentModel; }
/* harmony export */ });
const createComponentModel = component => {
  return {
    elType: 'widget',
    widgetType: 'e-component',
    settings: {
      component_instance: {
        $$type: 'component-instance',
        value: {
          component_id: {
            $$type: 'number',
            value: component.id ?? component.uid
          }
        }
      }
    },
    editor_settings: {
      component_uid: component.uid
    }
  };
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/get-container-for-new-element.ts":
/*!*****************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/get-container-for-new-element.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContainerForNewElement: function() { return /* binding */ getContainerForNewElement; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);

const getContainerForNewElement = () => {
  const currentDocumentContainer = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getCurrentDocumentContainer)();
  const selectedElement = getSelectedElementContainer();
  let container, options;
  if (selectedElement) {
    switch (selectedElement.model.get('elType')) {
      case 'widget':
        {
          container = selectedElement?.parent;
          const selectedElIndex = selectedElement.view?._index ?? -1;
          if (selectedElIndex > -1) {
            options = {
              at: selectedElIndex + 1
            };
          }
          break;
        }
      case 'section':
        {
          container = selectedElement?.children?.[0];
          break;
        }
      default:
        {
          container = selectedElement;
          break;
        }
    }
  }
  return {
    container: container ?? currentDocumentContainer,
    options
  };
};
function getSelectedElementContainer() {
  const selectedElements = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getSelectedElements)();
  if (selectedElements.length !== 1) {
    return undefined;
  }
  return (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getContainer)(selectedElements[0].id);
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/is-editing-component.ts":
/*!********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/is-editing-component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEditingComponent: function() { return /* binding */ isEditingComponent; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);

function isEditingComponent() {
  return _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentsSelectors.getCurrentComponentId() !== null;
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/replace-element-with-component.ts":
/*!******************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/replace-element-with-component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replaceElementWithComponent: function() { return /* binding */ replaceElementWithComponent; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_component_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-component-model */ "./packages/packages/pro/editor-components-extended/src/utils/create-component-model.ts");


const replaceElementWithComponent = (element, component) => {
  return (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.replaceElement)({
    currentElementId: element.id,
    newElement: (0,_create_component_model__WEBPACK_IMPORTED_MODULE_1__.createComponentModel)(component),
    withHistory: false
  });
};

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/revert-overridable-settings.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/revert-overridable-settings.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   revertAllOverridablesInContainer: function() { return /* binding */ revertAllOverridablesInContainer; },
/* harmony export */   revertAllOverridablesInElementData: function() { return /* binding */ revertAllOverridablesInElementData; },
/* harmony export */   revertElementOverridableSetting: function() { return /* binding */ revertElementOverridableSetting; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__);


function revertElementOverridableSetting(elementId, settingKey, originValue, overrideKey) {
  const container = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getContainer)(elementId);
  if (!container) {
    return;
  }
  if ((0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.isComponentInstance)(container.model.toJSON())) {
    revertComponentInstanceOverridableSetting(elementId, overrideKey);
    return;
  }
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.updateElementSettings)({
    id: elementId,
    props: {
      [settingKey]: originValue ?? null
    },
    withHistory: false
  });
}
function revertComponentInstanceOverridableSetting(elementId, overrideKey) {
  const setting = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getElementSetting)(elementId, 'component_instance');
  const componentInstance = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstancePropTypeUtil.extract(setting);
  const overrides = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstanceOverridesPropTypeUtil.extract(componentInstance?.overrides);
  if (!overrides?.length) {
    return;
  }
  const revertedOverrides = revertComponentInstanceOverrides(overrides, overrideKey);
  const updatedSetting = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstancePropTypeUtil.create({
    ...componentInstance,
    overrides: _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstanceOverridesPropTypeUtil.create(revertedOverrides)
  });
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.updateElementSettings)({
    id: elementId,
    props: {
      component_instance: updatedSetting
    },
    withHistory: false
  });
}
function revertComponentInstanceOverrides(overrides, filterByKey) {
  return overrides.map(item => {
    if (!_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentOverridablePropTypeUtil.isValid(item)) {
      return item;
    }
    if (!_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstanceOverridePropTypeUtil.isValid(item.value.origin_value)) {
      return null;
    }
    if (filterByKey && item.value.override_key !== filterByKey) {
      return item;
    }
    return item.value.origin_value;
  }).filter(item => item !== null);
}
function revertOverridablePropsFromSettings(settings) {
  let hasChanges = false;
  const revertedSettings = {};
  for (const [key, value] of Object.entries(settings)) {
    if (_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentOverridablePropTypeUtil.isValid(value)) {
      revertedSettings[key] = value.value.origin_value;
      hasChanges = true;
    } else {
      revertedSettings[key] = value;
    }
  }
  return {
    hasChanges,
    settings: revertedSettings
  };
}
function revertAllOverridablesInElementData(elementData) {
  const revertedElement = {
    ...elementData
  };
  if ((0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.isComponentInstance)({
    widgetType: elementData.widgetType,
    elType: elementData.elType
  })) {
    revertedElement.settings = revertComponentInstanceSettings(elementData.settings);
  } else if (revertedElement.settings) {
    const {
      settings
    } = revertOverridablePropsFromSettings(revertedElement.settings);
    revertedElement.settings = settings;
  }
  if (revertedElement.elements) {
    revertedElement.elements = revertedElement.elements.map(revertAllOverridablesInElementData);
  }
  return revertedElement;
}
function revertComponentInstanceSettings(settings) {
  if (!settings?.component_instance) {
    return settings;
  }
  const componentInstance = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstancePropTypeUtil.extract(settings.component_instance);
  const overrides = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstanceOverridesPropTypeUtil.extract(componentInstance?.overrides);
  if (!overrides?.length) {
    return settings;
  }
  const revertedOverrides = revertComponentInstanceOverrides(overrides);
  return {
    ...settings,
    component_instance: _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstancePropTypeUtil.create({
      ...componentInstance,
      overrides: _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstanceOverridesPropTypeUtil.create(revertedOverrides)
    })
  };
}
function revertAllOverridablesInContainer(container) {
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getAllDescendants)(container).forEach(element => {
    if (element.model.get('widgetType') === _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.COMPONENT_WIDGET_TYPE) {
      revertComponentInstanceOverridesInElement(element);
    } else {
      revertElementSettings(element);
    }
  });
}
function revertComponentInstanceOverridesInElement(element) {
  const settings = element.settings?.toJSON() ?? {};
  const componentInstance = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstancePropTypeUtil.extract(settings.component_instance);
  const overrides = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstanceOverridesPropTypeUtil.extract(componentInstance?.overrides);
  if (!overrides?.length) {
    return;
  }
  const revertedOverrides = revertComponentInstanceOverrides(overrides);
  const updatedSetting = _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstancePropTypeUtil.create({
    ...componentInstance,
    overrides: _elementor_editor_components__WEBPACK_IMPORTED_MODULE_0__.componentInstanceOverridesPropTypeUtil.create(revertedOverrides)
  });
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.updateElementSettings)({
    id: element.id,
    props: {
      component_instance: updatedSetting
    },
    withHistory: false
  });
}
function revertElementSettings(element) {
  const settings = element.settings?.toJSON() ?? {};
  const {
    hasChanges,
    settings: revertedSettings
  } = revertOverridablePropsFromSettings(settings);
  if (!hasChanges) {
    return;
  }
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.updateElementSettings)({
    id: element.id,
    props: revertedSettings,
    withHistory: false
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-components-extended/src/utils/track-instance-added.ts":
/*!********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/utils/track-instance-added.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackInstanceAdded: function() { return /* binding */ TrackInstanceAdded; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-components */ "@elementor/editor-components");
/* harmony import */ var _elementor_editor_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_4__);





function TrackInstanceAdded() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__.ELEMENT_ADDED_EVENT, onElementAddedEvent);
    (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.registerDataHook)('after', 'preview/drop', (_args, element) => {
      if (!(element?.model?.get('widgetType') === 'e-component')) {
        return;
      }
      const elementData = element.model.toJSON();
      onElementAdded(elementData, 'user');
    });
    return () => {
      window.removeEventListener(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_1__.ELEMENT_ADDED_EVENT, onElementAddedEvent);
    };
  }, []);
  return null;
}
function onElementAddedEvent(event) {
  const {
    element,
    executedBy
  } = event.detail;
  onElementAdded(element, executedBy);
}
function onElementAdded(element, executedBy) {
  if (!(element?.widgetType === 'e-component')) {
    return;
  }
  const editorSettings = element.editor_settings;
  const componentUID = editorSettings?.component_uid;
  const componentName = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__.selectComponentByUid)?.((0,_elementor_store__WEBPACK_IMPORTED_MODULE_4__.__getState)(), componentUID ?? '')?.name;
  const instanceId = element.id;
  const createdThisSession = (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__.selectCreatedThisSession)((0,_elementor_store__WEBPACK_IMPORTED_MODULE_4__.__getState)());
  const isSameSessionReuse = componentUID && createdThisSession.includes(componentUID);
  const eventsManagerConfig = window.elementorCommon.eventsManager.config;
  const {
    locations,
    secondaryLocations
  } = eventsManagerConfig;
  const componentPanelLocation = {
    location: locations.widgetPanel,
    secondary_location: secondaryLocations.componentsTab
  };
  let eventData = {
    // TODO: remove `source` in version 4.4.0
    source: executedBy,
    executedBy,
    instance_id: instanceId,
    component_uid: componentUID,
    component_name: componentName,
    is_same_session_reuse: isSameSessionReuse
  };
  if (executedBy !== 'mcp_tool') {
    eventData = {
      ...eventData,
      ...componentPanelLocation
    };
  }
  (0,_elementor_editor_components__WEBPACK_IMPORTED_MODULE_2__.trackComponentEvent)({
    action: 'instanceAdded',
    ...eventData
  });
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

/***/ "@elementor/editor-components":
/*!***************************************************!*\
  !*** external ["elementorV2","editorComponents"] ***!
  \***************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorComponents"];

/***/ }),

/***/ "@elementor/editor-controls":
/*!*************************************************!*\
  !*** external ["elementorV2","editorControls"] ***!
  \*************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorControls"];

/***/ }),

/***/ "@elementor/editor-current-user":
/*!****************************************************!*\
  !*** external ["elementorV2","editorCurrentUser"] ***!
  \****************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorCurrentUser"];

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

/***/ "@elementor/editor-elements-panel":
/*!******************************************************!*\
  !*** external ["elementorV2","editorElementsPanel"] ***!
  \******************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorElementsPanel"];

/***/ }),

/***/ "@elementor/editor-mcp":
/*!********************************************!*\
  !*** external ["elementorV2","editorMcp"] ***!
  \********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorMcp"];

/***/ }),

/***/ "@elementor/editor-notifications":
/*!******************************************************!*\
  !*** external ["elementorV2","editorNotifications"] ***!
  \******************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorNotifications"];

/***/ }),

/***/ "@elementor/editor-panels":
/*!***********************************************!*\
  !*** external ["elementorV2","editorPanels"] ***!
  \***********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorPanels"];

/***/ }),

/***/ "@elementor/editor-templates-extended":
/*!**********************************************************!*\
  !*** external ["elementorV2","editorTemplatesExtended"] ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorTemplatesExtended"];

/***/ }),

/***/ "@elementor/editor-ui":
/*!*******************************************!*\
  !*** external ["elementorV2","editorUi"] ***!
  \*******************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorUi"];

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

/***/ "@elementor/store":
/*!****************************************!*\
  !*** external ["elementorV2","store"] ***!
  \****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["store"];

/***/ }),

/***/ "@elementor/ui":
/*!*************************************!*\
  !*** external ["elementorV2","ui"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["ui"];

/***/ }),

/***/ "@elementor/utils":
/*!****************************************!*\
  !*** external ["elementorV2","utils"] ***!
  \****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["utils"];

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
/*!***********************************************************************!*\
  !*** ./packages/packages/pro/editor-components-extended/src/index.ts ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* reexport safe */ _init__WEBPACK_IMPORTED_MODULE_0__.init; }
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./packages/packages/pro/editor-components-extended/src/init.ts");

}();
(window.elementorV2 = window.elementorV2 || {}).editorComponentsExtended = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorComponentsExtended?.init?.();

/*! pro-elements - v3.26.0 - 07-01-2025 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../tests/qunit/editor/editor.js":
/*!***************************************!*\
  !*** ../tests/qunit/editor/editor.js ***!
  \***************************************/
/***/ (() => {

/**
 * This file load elementor core in order to run 'editor' tests, since the 'pro' does not include the editor it self.
 * for enabling the feature use '--development-tests' in command arguments ( at building command ).
 * dependencies/how to run:
 * core node_modules ( npm install ).
 * core compiled scripts ( grunt watch_scripts ).
 * pro compiled scripts with '--development-tests' ( grunt watch_scripts --development-tests )
 * pro: grunt karma:unit.
 */
// #if true === process.argv.includes( '--development-tests' )
// import EditorBootstrapCore from 'elementor/tests/qunit/editor/bootstrap';
// import editorConfig from '../mock/config/editor.json';
// 
// import tests from '../tests/';
// 
// export class EditorBootstrapPro extends EditorBootstrapCore {
// 	initialize() {
// 		window.elementorProEditorConfig = editorConfig;
// 
// 		// Load elementor-pro.
// 		require( 'editor/editor' );
// 
// 		super.initialize();
// 	}
// 
// 	runTests() {
// 		return tests();
// 	}
// }
// // #else
// export class NullClass {}
// #endif


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ../tests/qunit/main.js ***!
  \******************************/


var _editor = __webpack_require__(/*! ./editor/editor */ "../tests/qunit/editor/editor.js");
new _editor.EditorBootstrapPro();
})();

/******/ })()
;
//# sourceMappingURL=qunit-tests.js.map
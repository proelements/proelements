/*! pro-elements - v4.4.0 - 09-11-2026 */
(function(_elementor_frontend_handlers) {
	//#endregion
	//#region modules/atomic-form/assets/js/frontend/hidden-handler.js
	function isEditorContext() {
		return !!window.elementor;
	}
	(0, _elementor_frontend_handlers.register)({
		elementType: "e-form-hidden",
		id: "e-form-hidden-request-param-handler",
		callback: ({ element }) => {
			const { requestParam, requestBefore = "", requestAfter = "", requestFallback = "" } = element.dataset;
			if (isEditorContext() || !requestParam) return;
			const paramValue = new URLSearchParams(window.location.search).get(requestParam);
			element.value = paramValue ? requestBefore + paramValue + requestAfter : requestFallback;
		}
	});
	//#endregion
})(elementorV2.frontendHandlers);

//# sourceMappingURL=atomic-form-hidden-handler.js.map
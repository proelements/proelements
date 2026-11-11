/*! pro-elements - v4.4.0 - 09-11-2026 */
(function(_elementor_frontend_handlers) {
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/asyncToGenerator.js
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c);
			var u = i.value;
		} catch (n) {
			e(n);
			return;
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
		return function() {
			var t = this;
			var e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
				}
				function _throw(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
				}
				_next(void 0);
			});
		};
	}
	//#endregion
	//#region modules/atomic-form/assets/js/frontend/recaptcha-score-handler.js
	var ENTERPRISE_SCRIPT_URL = "https://www.google.com/recaptcha/enterprise.js?render=explicit";
	var BEFORE_SUBMIT_EVENT = "elementor/atomic-form/before-submit";
	var FORM_SELECTOR = "[data-element_type=\"e-form\"]";
	var enterpriseApiPromise = null;
	function isEditorContext() {
		return !!window.elementor;
	}
	function waitForEnterpriseApi(resolve) {
		window.grecaptcha.enterprise.ready(() => resolve(window.grecaptcha.enterprise));
	}
	function loadEnterpriseApi() {
		if (enterpriseApiPromise) return enterpriseApiPromise;
		enterpriseApiPromise = new Promise((resolve, reject) => {
			var _window$grecaptcha;
			if ((_window$grecaptcha = window.grecaptcha) === null || _window$grecaptcha === void 0 ? void 0 : _window$grecaptcha.enterprise) {
				waitForEnterpriseApi(resolve);
				return;
			}
			const script = document.createElement("script");
			script.src = ENTERPRISE_SCRIPT_URL;
			script.async = true;
			script.addEventListener("load", () => waitForEnterpriseApi(resolve));
			script.addEventListener("error", () => {
				enterpriseApiPromise = null;
				reject(/* @__PURE__ */ new Error("reCAPTCHA failed to load."));
			});
			document.head.appendChild(script);
		});
		return enterpriseApiPromise;
	}
	(0, _elementor_frontend_handlers.register)({
		elementType: "e-form-recaptcha-score",
		id: "e-form-recaptcha-score-handler",
		callback: ({ element, signal }) => {
			if (isEditorContext()) return;
			const { sitekey: siteKey, badge, action, tokenField } = element.dataset;
			const form = element.closest(FORM_SELECTOR);
			if (!siteKey || !tokenField || !form) return;
			let widgetIdPromise = null;
			const getWidgetId = () => {
				if (!widgetIdPromise) widgetIdPromise = loadEnterpriseApi().then((enterprise) => enterprise.render(element, {
					sitekey: siteKey,
					badge,
					size: "invisible"
				})).catch((error) => {
					widgetIdPromise = null;
					throw error;
				});
				return widgetIdPromise;
			};
			const getToken = function() {
				var _ref = _asyncToGenerator(function* () {
					const [enterprise, widgetId] = yield Promise.all([loadEnterpriseApi(), getWidgetId()]);
					return enterprise.execute(widgetId, { action });
				});
				return function getToken() {
					return _ref.apply(this, arguments);
				};
			}();
			form.addEventListener(BEFORE_SUBMIT_EVENT, (event) => {
				event.detail.addFields(getToken().then((token) => ({ [tokenField]: token })));
			}, { signal });
			getWidgetId().catch(() => {});
		}
	});
	//#endregion
})(elementorV2.frontendHandlers);

//# sourceMappingURL=atomic-form-recaptcha-score-handler.js.map
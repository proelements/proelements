/*! pro-elements - v4.3.0 - 22-09-2026 */
(function() {
	//#endregion
	//#region \0component-scss:/home/runner/work/elementor-pro/elementor-pro/modules/page-transitions/assets/js/frontend/components/page-transition/page-transition.component.scss.js
	var page_transition_component_scss_default = "e-page-transition{--preloader-fade-duration: .5s;--preloader-delay: calc( var( --e-page-transition-animation-duration, 0s ) + var( --e-preloader-delay, 0s ) );--page-transition-delay: var( --preloader-fade-duration );position:fixed;inset:0;display:grid;place-items:center;z-index:10000;background:#fff;animation-fill-mode:both;animation-duration:var(--e-page-transition-animation-duration)}e-page-transition[disabled]{display:none}e-page-transition e-preloader,e-page-transition .e-page-transition--preloader{opacity:0}e-page-transition .e-page-transition--preloader{position:absolute;font-size:var(--e-preloader-size);color:var(--e-preloader-color);fill:var(--e-preloader-color);width:var(--e-preloader-width);max-width:var(--e-preloader-max-width);transform:rotate(var(--e-preloader-rotate, 0deg));animation-name:var(--e-preloader-animation);animation-duration:var(--e-preloader-animation-duration, 1000ms);animation-iteration-count:infinite;animation-timing-function:linear}e-page-transition svg.e-page-transition--preloader{width:var(--e-preloader-size)}.e-page-transition--entering{animation-name:var(--e-page-transition-entrance-animation);animation-delay:var(--preloader-fade-duration, 0s)}.e-page-transition--entering e-preloader,.e-page-transition--entering .e-page-transition--preloader{animation:var(--e-preloader-animation, none) var(--e-preloader-animation-duration, 0s) linear infinite,e-page-transition-fade-out var(--preloader-fade-duration) both;transition:none}.e-page-transition--exiting{animation-name:var(--e-page-transition-exit-animation)}.e-page-transition--exiting e-preloader,.e-page-transition--exiting .e-page-transition--preloader{opacity:var(--e-preloader-opacity, 1);transition:var(--preloader-fade-duration) all;transition-delay:var(--preloader-delay, 0s)}.e-page-transition--entered:not(.e-page-transition--preview){display:none}.e-page-transition--preview{animation-fill-mode:initial}.e-page-transition--preview.e-page-transition--entered e-preloader,.e-page-transition--preview.e-page-transition--entered .e-page-transition--preloader{opacity:var(--e-preloader-opacity, 1)}@media(prefers-reduced-motion: reduce){e-page-transition{display:none}}@keyframes e-page-transition-fade-in{from{opacity:0}to{opacity:1}}@keyframes e-page-transition-fade-in-down{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:none}}@keyframes e-page-transition-fade-in-left{from{opacity:0;transform:translate3d(-100%, 0, 0)}to{opacity:1;transform:none}}@keyframes e-page-transition-fade-in-right{from{opacity:0;transform:translate3d(100%, 0, 0)}to{opacity:1;transform:none}}@keyframes e-page-transition-fade-in-up{from{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:none}}@keyframes e-page-transition-zoom-in{from{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}50%{opacity:1}}@keyframes e-page-transition-slide-in-down{from{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes e-page-transition-slide-in-left{from{transform:translate3d(-100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes e-page-transition-slide-in-right{from{transform:translate3d(100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes e-page-transition-slide-in-up{from{transform:translate3d(0, 100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes e-page-transition-fade-out{from{opacity:1}to{opacity:0}}@keyframes e-page-transition-fade-out-up{from{opacity:1;transform:none}to{opacity:0;transform:translate3d(0, -100%, 0)}}@keyframes e-page-transition-fade-out-left{from{opacity:1;transform:none}to{opacity:0;transform:translate3d(-100%, 0, 0)}}@keyframes e-page-transition-fade-out-right{from{opacity:1;transform:none}to{opacity:0;transform:translate3d(100%, 0, 0)}}@keyframes e-page-transition-fade-out-down{from{opacity:1;transform:none}to{opacity:0;transform:translate3d(0, 100%, 0)}}@keyframes e-page-transition-slide-out-up{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(0, -100%, 0);visibility:visible}}@keyframes e-page-transition-slide-out-left{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(-100%, 0, 0);visibility:visible}}@keyframes e-page-transition-slide-out-right{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(100%, 0, 0);visibility:visible}}@keyframes e-page-transition-slide-out-down{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(0, 100%, 0);visibility:visible}}@keyframes e-page-transition-zoom-out{from{opacity:1}50%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}}";
	//#endregion
	//#region modules/page-transitions/assets/js/frontend/components/page-transition/filters.js
	var urlFragmentPattern = /.*#[\w\-/$.+()*@?~!&',;=:%]*$/;
	var filters_default = {
		isDisabled: (a) => Object.prototype.hasOwnProperty.call(a.dataset, "eDisablePageTransition"),
		isEmptyHref: (a) => !a.getAttribute("href"),
		isTargetBlank: (a) => "_blank" === a.target,
		notSameOrigin: (a) => !a.href.startsWith(window.location.origin),
		hasFragment: (a) => !!a.href.match(urlFragmentPattern),
		isPopup: (a) => "true" === a.getAttribute("aria-haspopup") && "false" === a.getAttribute("aria-expanded"),
		isWoocommerce: (a) => {
			var _a$parentElement;
			const isAddToCart = a.href.match(/\?add-to-cart=/);
			const isRemoveFromCart = a.href.match(/\?remove_item=/);
			const isRestoreToCart = a.href.match(/\?undo_item=/);
			const isWoocommercePagination = a.href.match(/\?product-page=/);
			const isWoocommerceLogout = a.href.match(/\?elementor_wc_logout=/);
			const isWoocommerceTab = (_a$parentElement = a.parentElement) === null || _a$parentElement === void 0 ? void 0 : _a$parentElement.classList.contains("woocommerce-MyAccount-navigation-link");
			return isAddToCart || isRemoveFromCart || isRestoreToCart || isWoocommercePagination || isWoocommerceLogout || isWoocommerceTab;
		},
		isExcluded: (a, exclude) => a.href.match(new RegExp(exclude))
	};
	//#endregion
	//#region modules/page-transitions/assets/js/frontend/components/page-transition/page-transition.js
	var PageTransition = class extends HTMLElement {
		/**
		* Initialize the Page Transitions element.
		*
		* @return {void}
		*/
		constructor() {
			super();
			this.classes = this.getClasses();
			this.elements = this.getElements();
			this.bindEvents();
		}
		/**
		* Get a list of classes that are used in the code.
		*
		* @return {Object} - List of classes.
		*/
		getClasses() {
			return {
				preloader: "e-page-transition--preloader",
				entering: "e-page-transition--entering",
				exiting: "e-page-transition--exiting",
				entered: "e-page-transition--entered",
				preview: "e-page-transition--preview"
			};
		}
		/**
		* Get the Page Transition CSS.
		*
		* @return {string} - CSS code.
		*/
		getStyle() {
			return `<style>${page_transition_component_scss_default.toString()}</style>`;
		}
		/**
		* A list of attributes to observe for changes.
		*
		* @return {string[]} - Attributes to observe.
		*/
		static get observedAttributes() {
			return [
				"preloader-type",
				"preloader-icon",
				"preloader-image-url",
				"preloader-animation-type",
				"disabled"
			];
		}
		/**
		* Get the Page Transitions elements.
		*
		* @return {Object} - Elements.
		*/
		getElements() {
			const selector = this.getAttribute("triggers") || "a:not( [data-elementor-open-lightbox=\"yes\"] )";
			return { links: document.querySelectorAll(selector) };
		}
		/**
		* Determine if a link should trigger a Page Transition effect.
		*
		* @param {HTMLAnchorElement} a - The anchor element to check.
		* @return {boolean} - Whether the given link should activate the Page Transition.
		*/
		shouldPageTriggerTransition(a) {
			return Object.values(filters_default).every((shouldDisable) => !shouldDisable(a, this.getAttribute("exclude")));
		}
		/**
		* Hide the loader on page show.
		*
		* @return {void}
		*/
		onPageShow() {
			if (this.classList.contains(this.classes.exiting)) {
				this.classList.add(this.classes.entered);
				this.classList.remove(this.classes.exiting);
			}
			this.animateState("entering").then(() => {
				this.classList.add(this.classes.entered);
			});
		}
		/**
		* Trigger the Page Transition on link click.
		*
		* @param {MouseEvent} e - The click Event.
		* @return {void}
		*/
		onLinkClick(e) {
			if (!this.shouldPageTriggerTransition(e.currentTarget)) return;
			e.preventDefault();
			const href = e.currentTarget.href;
			this.classList.remove(this.classes.entered);
			this.animateState("exiting", this.getPreloaderDelay()).then(() => {
				this.classList.add(this.classes.exiting);
				location.href = href;
			});
		}
		/**
		* Prerender a webpage using `rel=prerender`.
		*
		* @param {string} href
		* @return {void}
		*/
		prerender(href) {
			if (document.querySelector(`link[href="${href}"]`)) return;
			const link = document.createElement("link");
			link.setAttribute("rel", "prerender");
			link.setAttribute("href", href);
			document.head.appendChild(link);
		}
		/**
		* Trigger a `prerender` on link mouse enter.
		*
		* @param {MouseEvent} e
		* @return {void}
		*/
		onLinkMouseEnter(e) {
			if (!this.shouldPageTriggerTransition(e.currentTarget)) return;
			this.prerender(e.currentTarget.href);
		}
		/**
		* Bind events to the window & links.
		*
		* @return {void}
		*/
		bindEvents() {
			window.addEventListener("pageshow", this.onPageShow.bind(this));
			window.addEventListener("DOMContentLoaded", () => {
				this.elements = this.getElements();
				this.elements.links.forEach((a) => {
					a.addEventListener("click", this.onLinkClick.bind(this));
					a.addEventListener("mouseenter", this.onLinkMouseEnter.bind(this));
					a.addEventListener("touchstart", this.onLinkMouseEnter.bind(this));
				});
			});
		}
		/**
		* Escape HTML special chars to prevent XSS.
		*
		* @param {string} str - String to escape.
		*
		* @return {string} escaped string
		*/
		escapeHTML(str) {
			const specialChars = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"'": "&#39;",
				"\"": "&quot;"
			};
			return str.replace(/[&<>'"]/g, (tag) => specialChars[tag] || tag);
		}
		/**
		* Retrieve an icon loader HTML markup.
		*
		* @return {string} - HTML markup.
		*/
		getIconLoader() {
			const icon = this.getAttribute("preloader-icon") || "";
			return `
			<i class="${this.escapeHTML(icon)} ${this.classes.preloader}"></i>
		`;
		}
		/**
		* Retrieve an image loader HTML markup.
		*
		* @return {string} - HTML markup.
		*/
		getImageLoader() {
			const url = this.getAttribute("preloader-image-url") || "";
			return `
			<img class="${this.classes.preloader}" src="${this.escapeHTML(url)}" />
		`;
		}
		/**
		* Retrieve a custom loader HTML markup.
		*
		* @return {string} - HTML markup.
		*/
		getAnimationLoader() {
			const type = this.getAttribute("preloader-animation-type");
			if (!type) return "";
			return `
			<e-preloader type="${type}"></e-preloader>
		`;
		}
		/**
		* Render the Page Transition element.
		*
		* @return {void}
		*/
		render() {
			if (this.hasAttribute("disabled")) {
				this.innerHTML = "";
				return;
			}
			switch (this.getAttribute("preloader-type")) {
				case "icon":
					this.innerHTML = this.getIconLoader();
					break;
				case "image":
					this.innerHTML = this.getImageLoader();
					break;
				case "animation":
					this.innerHTML = this.getAnimationLoader();
					break;
				default:
					this.innerHTML = "";
					break;
			}
			this.innerHTML += this.getStyle();
		}
		/**
		* Get a CSS variable value from the current element's context.
		*
		* @param {string} variable - Variable name.
		* @param {string} prefix   - Variable prefix, defaults to `e-page-transition`.
		* @return {string} - CSS variable value.
		*/
		getCssVar(variable, prefix = "e-page-transition-") {
			return window.getComputedStyle(this).getPropertyValue(`--${prefix}${variable}`);
		}
		/**
		* Get the animation duration as an integer in order to be used inside a `setTimeout`.
		*
		* Assumes that all of the timings are in `ms`.
		*
		* @return {number} - Animation duration.
		*/
		getAnimationDuration() {
			return parseInt(this.getCssVar("animation-duration")) || 0;
		}
		/**
		* Get the preloader delay.
		*
		* Assumes that all of the timings are in `ms`.
		*
		* @return {number} - Preloader delay.
		*/
		getPreloaderDelay() {
			return parseInt(this.getCssVar("delay", "e-preloader-")) || 0;
		}
		/**
		* Start the animate sequence of the Page Transition (enter && exit).
		*
		* @return {Promise} - Animation sequence Promise.
		*/
		animate() {
			if (this.isAnimating) return new Promise((resolve, reject) => {
				reject("Animation is already in progress.");
			});
			this.isAnimating = true;
			const delay = this.getPreloaderDelay() + 1500;
			this.classList.remove(this.classes.entered);
			return new Promise((resolve) => {
				setTimeout(() => {
					this.animateState("exiting", delay).then(() => {
						this.animateState("entering").then(() => {
							this.classList.add(this.classes.entered);
							this.isAnimating = false;
							resolve();
						});
					});
				});
			});
		}
		/**
		* Animate a state of the Page Transition (enter || exit).
		*
		* @param {('entering'|'exiting')} state - The state name to animate.
		* @param {number}                 delay - Delay (in ms) before resolving the Promise.
		* @return {Promise} - Animation sequence Promise.
		*/
		animateState(state, delay = 0) {
			var _a;
			const className = (_a = this.classes) == null ? void 0 : _a[state];
			if (!className) return new Promise((resolve, reject) => {
				reject(state);
			});
			this.classList.remove(className);
			this.classList.add(className);
			const animationDuration = this.getAnimationDuration();
			return new Promise((resolve) => {
				setTimeout(() => {
					this.classList.remove(className);
					resolve(state);
				}, animationDuration + delay);
			});
		}
		/**
		* Listen to attribute changes and re-render the element.
		*
		* @return {void}
		*/
		attributeChangedCallback() {
			this.render();
		}
		/**
		* Render the element when attached to the document.
		*
		* @return {void}
		*/
		connectedCallback() {
			this.render();
		}
	};
	//#endregion
	//#region \0component-scss:/home/runner/work/elementor-pro/elementor-pro/modules/page-transitions/assets/js/frontend/components/preloader/preloader.component.scss.js
	var preloader_component_scss_default = "e-preloader{--default-duartion: 1000ms;--duration: var( --e-preloader-animation-duration, var( --default-duration ) );display:block;font-size:var(--e-preloader-size)}e-preloader[type=circle],e-preloader[type=circle-dashed],e-preloader[type=spinners]{--e-preloader-animation: e-preloader-spin;height:1em;width:1em;border:.1em solid var(--e-preloader-color);border-top-color:rgba(0,0,0,0);border-radius:100%;animation:var(--duration) var(--e-preloader-animation) linear infinite}e-preloader[type=circle-dashed]{border:.1em solid hsla(0,0%,100%,.3);border-top-color:var(--e-preloader-color)}e-preloader[type=spinners]{border-bottom-color:rgba(0,0,0,0)}e-preloader[type=bouncing-dots],e-preloader[type=pulsing-dots]{display:flex;gap:1em}e-preloader[type=bouncing-dots] i,e-preloader[type=pulsing-dots] i{height:1em;width:1em;border-radius:100%;background-color:var(--e-preloader-color)}e-preloader[type=bouncing-dots] i:nth-child(2),e-preloader[type=pulsing-dots] i:nth-child(2){animation-delay:var(--delay)}e-preloader[type=bouncing-dots] i:nth-child(3),e-preloader[type=pulsing-dots] i:nth-child(3){animation-delay:calc(var(--delay)*2)}e-preloader[type=bouncing-dots] i:nth-child(4),e-preloader[type=pulsing-dots] i:nth-child(4){animation-delay:calc(var(--delay)*3)}e-preloader[type=bouncing-dots] i{--delay: calc( var( --duration ) / 10 );animation:var(--duration) e-preloader-bounce linear infinite}e-preloader[type=pulsing-dots] i{--delay: calc( var( --duration ) / 6 );animation:var(--duration) e-preloader-pulsing-dots linear infinite}e-preloader[type=pulse]{height:1em;width:1em;position:relative}e-preloader[type=pulse]::before,e-preloader[type=pulse]::after{content:\"\";position:absolute;inset:0;border:.05em solid var(--e-preloader-color);border-radius:100%;animation:1.2s e-preloader-pulse infinite both ease-out}e-preloader[type=pulse]::after{animation-delay:.6s}e-preloader[type=overlap]{height:1em;width:1em;position:relative}e-preloader[type=overlap]::before,e-preloader[type=overlap]::after{content:\"\";inset:0;position:absolute;background:var(--e-preloader-color);border-radius:100%;opacity:.5;animation:2s e-preloader-overlap infinite both ease-in-out}e-preloader[type=overlap]::after{animation-delay:-1s;animation-direction:reverse}e-preloader[type=nested-spinners],e-preloader[type=opposing-nested-spinners],e-preloader[type=opposing-nested-rings]{height:1em;width:1em;position:relative}e-preloader[type=nested-spinners]::before,e-preloader[type=nested-spinners]::after,e-preloader[type=opposing-nested-spinners]::before,e-preloader[type=opposing-nested-spinners]::after,e-preloader[type=opposing-nested-rings]::before,e-preloader[type=opposing-nested-rings]::after{content:\"\";display:block;position:absolute;border-radius:100%;border:.1em solid var(--e-preloader-color);border-top-color:rgba(0,0,0,0);animation:var(--duration) e-preloader-spin linear infinite}e-preloader[type=nested-spinners]::before,e-preloader[type=opposing-nested-spinners]::before,e-preloader[type=opposing-nested-rings]::before{inset:-0.3em}e-preloader[type=nested-spinners]::after,e-preloader[type=opposing-nested-spinners]::after,e-preloader[type=opposing-nested-rings]::after{animation-duration:calc(var(--duration) - .2s);inset:0;opacity:.5}e-preloader[type=nested-spinners]::before,e-preloader[type=nested-spinners]::after,e-preloader[type=opposing-nested-spinners]::before,e-preloader[type=opposing-nested-spinners]::after{border-bottom-color:rgba(0,0,0,0)}e-preloader[type=opposing-nested-rings]::after,e-preloader[type=opposing-nested-spinners]::after{animation-direction:reverse}e-preloader[type=progress-bar],e-preloader[type=two-way-progress-bar],e-preloader[type=repeating-bar]{--e-preloader-animation: e-preloader-progress-bar;height:.05em;width:5em;max-width:50vw;background:var(--e-preloader-color);animation:var(--duration) var(--e-preloader-animation) linear infinite both}e-preloader[type=progress-bar]{transform-origin:0 50%}e-preloader[type=repeating-bar]{--e-preloader-animation: e-preloader-repeating-bar}@media(prefers-reduced-motion: reduce){e-preloader{display:none}}@keyframes e-preloader-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes e-preloader-bounce{0%,40%,100%{transform:translateY(0)}20%{transform:translateY(-80%)}}@keyframes e-preloader-pulsing-dots{0%,40%,100%{transform:scale(1)}20%{transform:scale(1.5)}}@keyframes e-preloader-pulse{from{transform:scale(0);opacity:1}to{transform:scale(1);opacity:0}}@keyframes e-preloader-overlap{0%,100%{transform:scale(0.2)}50%{transform:scale(1)}}@keyframes e-preloader-progress-bar{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}@keyframes e-preloader-repeating-bar{0%{transform:scaleX(0);transform-origin:0 50%}49%{transform-origin:0 50%}50%{transform:scaleX(1);transform-origin:100% 50%}100%{transform:scaleX(0);transform-origin:100% 50%}}";
	//#endregion
	//#region modules/page-transitions/assets/js/frontend/components/preloader/preloader.js
	var Preloader = class extends HTMLElement {
		/**
		* A list of attributes to observe for changes.
		*
		* @return {string[]} - Attributes to observe.
		*/
		static get observedAttributes() {
			return ["type"];
		}
		/**
		* Listen to attribute changes and re-render the element.
		*
		* @return {void}
		*/
		attributeChangedCallback() {
			this.render();
		}
		/**
		* Get the Preloader CSS.
		*
		* @return {string} - CSS code.
		*/
		getStyle() {
			return `<style>${preloader_component_scss_default.toString()}</style>`;
		}
		/**
		* Render the Preloader element.
		*
		* @return {void}
		*/
		render() {
			const type = this.getAttribute("type");
			const dotsTypes = ["bouncing-dots", "pulsing-dots"];
			this.innerHTML = "";
			if (!type) return;
			if (dotsTypes.includes(type)) this.innerHTML += `
				<i></i>
				<i></i>
				<i></i>
				<i></i>
			`;
			this.innerHTML += this.getStyle();
		}
		/**
		* Render the element when attached to the document.
		*
		* @return {void}
		*/
		connectedCallback() {
			this.render();
		}
	};
	//#endregion
	//#region modules/page-transitions/assets/js/frontend/frontend.js
	var PageTransitionsFrontend = class {
		/**
		* Initialize the module.
		*
		* @return {void}
		*/
		constructor() {
			customElements.define("e-preloader", Preloader);
			customElements.define("e-page-transition", PageTransition);
		}
	};
	new PageTransitionsFrontend();
	//#endregion
})();

//# sourceMappingURL=page-transitions.js.map
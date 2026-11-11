/*! pro-elements - v4.4.0 - 09-11-2026 */
(function(_elementor_frontend_handlers) {
	//#region \0rolldown/runtime.js
	var __defProp$1 = Object.defineProperty;
	var __name = (target, value) => __defProp$1(target, "name", {
		value,
		configurable: true
	});
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/resolve-responsive-value.js
	function unwrapResponsiveEntry(entry) {
		if (null === entry || void 0 === entry || "" === entry) return null;
		if ("object" === typeof entry && !Array.isArray(entry) && "$$type" in entry && "value" in entry) return entry.value;
		return entry;
	}
	function isResponsiveMap(value) {
		return null !== value && "object" === typeof value && !Array.isArray(value);
	}
	/**
	* @param {*} value Responsive map, or a plain value.
	* @return {*} The desktop entry of a map, or the plain value itself.
	*/
	function desktopValue(value) {
		return isResponsiveMap(value) ? unwrapResponsiveEntry(value.desktop) : unwrapResponsiveEntry(value);
	}
	/**
	* Engine media-query options for a responsive value, one per active breakpoint. The engine merges
	* every matching query in key order, so wider max-width breakpoints come first and narrower ones
	* override them: a breakpoint the author left unset gets empty options and inherits from the next
	* wider one, as in `Responsive_Prop_Type::fallback_chain()`. Unset breakpoints are still listed so
	* the engine re-initialises, and the handler re-reads the gap, whenever any breakpoint is crossed.
	*
	* @param {*}        value     Responsive map, or a plain value.
	* @param {Window}   win
	* @param {Function} toOptions Maps a breakpoint's value to engine options.
	* @return {Object} Media query в†’ options.
	*/
	function breakpointMediaOptions(value, win, toOptions) {
		var _win$elementorFronten;
		var _win$elementorFronten2;
		const active = (_win$elementorFronten = win === null || win === void 0 || (_win$elementorFronten2 = win.elementorFrontend) === null || _win$elementorFronten2 === void 0 || (_win$elementorFronten2 = _win$elementorFronten2.config) === null || _win$elementorFronten2 === void 0 || (_win$elementorFronten2 = _win$elementorFronten2.responsive) === null || _win$elementorFronten2 === void 0 ? void 0 : _win$elementorFronten2.activeBreakpoints) !== null && _win$elementorFronten !== void 0 ? _win$elementorFronten : {};
		const map = isResponsiveMap(value) ? value : {};
		return Object.fromEntries(Object.entries(active).filter(([, data]) => data === null || data === void 0 ? void 0 : data.value).sort(([, a], [, b]) => {
			if (a.direction !== b.direction) return "min" === a.direction ? -1 : 1;
			return "min" === a.direction ? a.value - b.value : b.value - a.value;
		}).map(([key, data]) => {
			const entry = unwrapResponsiveEntry(map[key]);
			return [`(${"min" === data.direction ? "min" : "max"}-width: ${data.value}px)`, null === entry ? {} : toOptions(entry)];
		}));
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/shared.js
	var TYPE = {
		viewport: "e-carousel-viewport",
		container: "e-carousel-container",
		slide: "e-carousel-slide",
		prev: "e-carousel-arrow-prev",
		next: "e-carousel-arrow-next",
		pagination: "e-carousel-pagination",
		dot: "e-carousel-dot",
		autoplayControls: "e-carousel-autoplay-controls",
		autoplayPlay: "e-carousel-autoplay-play",
		autoplayPause: "e-carousel-autoplay-pause"
	};
	var GAP_VARIABLE = "--e-carousel-gap";
	var SLIDE_ALIGN_VARIABLE = "--e-carousel-slide-align";
	var TRACK_CLASS = "e-carousel__track";
	TYPE.prev, TYPE.next, TYPE.pagination, TYPE.dot, TYPE.autoplayControls, TYPE.autoplayPlay, TYPE.autoplayPause;
	var child = (root, type) => root === null || root === void 0 ? void 0 : root.querySelector(`:scope > [data-e-type="${type}"]`);
	var slideTrack = (container) => {
		var _container$querySelec;
		return (_container$querySelec = container === null || container === void 0 ? void 0 : container.querySelector(`:scope > .e-carousel__track`)) !== null && _container$querySelec !== void 0 ? _container$querySelec : null;
	};
	var SLIDE_MATCHERS = [`[data-e-type="${TYPE.slide}"]`, "[data-model-cid]"];
	var SLIDE_SELECTOR = SLIDE_MATCHERS.map((matcher) => `:scope > ${matcher}`).join(", ");
	var isSlideNode = (node) => 1 === (node === null || node === void 0 ? void 0 : node.nodeType) && node.matches(SLIDE_MATCHERS.join(", "));
	var slides = (container) => {
		var _parent$children;
		const parent = slideTrack(container) || container;
		return Array.from((_parent$children = parent === null || parent === void 0 ? void 0 : parent.children) !== null && _parent$children !== void 0 ? _parent$children : []).filter(isSlideNode);
	};
	/**
	* Slides are `.e-con`, which transitions `transform` through this variable. The engine repositions
	* looped slides with `transform`, so the transition would animate each wrap. Set on the slides
	* themselves: on the track it would also reach every `.e-con` inside a slide.
	*
	* @param {HTMLElement} container Slides element.
	*/
	function disableSlideTransformTransition(container) {
		slides(container).forEach((slide) => slide.style.setProperty("--e-con-transform-transition-duration", "0s"));
	}
	/**
	* Embla must transform this node, not the Slides element. The editor draws the Slides frame from
	* that element's border box, and a transform on it drags the frame over slides that have already
	* left the viewport.
	*
	* Every slide ends in a gap-wide margin, the last one included, so the loop seam is spaced. The
	* engine counts that trailing margin as content, so the track's border box is one gap wider than
	* the clip. The last slide then still ends flush with the viewport. Slide widths resolve against the
	* content box, which stays at 100%.
	*
	* @param {HTMLElement} container Slides element.
	* @return {HTMLElement} Inner track.
	*/
	function ensureSlideTrack(container) {
		let track = slideTrack(container);
		if (!track) {
			track = container.ownerDocument.createElement("div");
			track.className = TRACK_CLASS;
			container.append(track);
		}
		Object.assign(track.style, {
			display: "flex",
			alignItems: `var(${SLIDE_ALIGN_VARIABLE}, stretch)`,
			flex: "0 0 100%",
			minWidth: "0",
			width: "100%",
			boxSizing: "content-box",
			columnGap: "",
			paddingInlineEnd: `var(${GAP_VARIABLE}, 0px)`
		});
		Array.from(container.children).forEach((node) => {
			if (isSlideNode(node)) track.append(node);
		});
		return track;
	}
	/**
	* Interpolate a WordPress i18n template (`%d`, `%1$d`, `%2$d`, `%%`).
	*
	* @param {string} template
	* @param {...*}   args
	* @return {string} The interpolated label.
	*/
	function formatLabel(template, ...args) {
		if ("string" !== typeof template) return "";
		let sequential = 0;
		return template.replace(/%%|%(?:(\d+)\$)?d/g, (match, position) => {
			if ("%%" === match) return "%";
			const value = args[position ? Number(position) - 1 : sequential++];
			return void 0 === value || null === value ? match : String(value);
		});
	}
	/**
	* @param {?HTMLElement} root
	* @return {Object} Parsed label templates, or an empty object.
	*/
	function readCarouselLabels(root) {
		try {
			var _root$dataset;
			return JSON.parse((root === null || root === void 0 || (_root$dataset = root.dataset) === null || _root$dataset === void 0 ? void 0 : _root$dataset.eCarouselLabels) || "{}");
		} catch (error) {
			return {};
		}
	}
	/**
	* @param {HTMLElement} slide
	* @return {string} The slide element id.
	*/
	function ensureSlideId(slide) {
		if (slide.id) return slide.id;
		const dataId = slide.dataset.id;
		if (dataId) slide.id = `e-carousel-slide-${dataId}`;
		return slide.id;
	}
	/**
	* Author `display` on arrows and pagination beats the UA `[hidden]` rule, so both are required.
	*
	* @param {?HTMLElement} element
	* @param {boolean}      hidden
	*/
	function setHidden(element, hidden) {
		if (!element) return;
		element.hidden = hidden;
		element.style.display = hidden ? "none" : "";
	}
	function prefersReducedMotion(win) {
		var _win$matchMedia;
		return Boolean((_win$matchMedia = win.matchMedia) === null || _win$matchMedia === void 0 ? void 0 : _win$matchMedia.call(win, "(prefers-reduced-motion: reduce)").matches);
	}
	function isEditorPreview(win) {
		var _win$elementorFronten;
		var _win$elementorFronten2;
		if (!win) return false;
		if ((_win$elementorFronten = win.elementorFrontend) === null || _win$elementorFronten === void 0 || (_win$elementorFronten2 = _win$elementorFronten.isEditMode) === null || _win$elementorFronten2 === void 0 ? void 0 : _win$elementorFronten2.call(_win$elementorFronten)) return true;
		try {
			const parent = win.parent;
			return Boolean((parent === null || parent === void 0 ? void 0 : parent.elementor) && (win.frameElement || parent !== win));
		} catch (error) {
			return false;
		}
	}
	function documentDirection(element) {
		var _element$closest;
		return "rtl" === (((_element$closest = element.closest("[dir]")) === null || _element$closest === void 0 ? void 0 : _element$closest.getAttribute("dir")) || element.ownerDocument.dir) ? "rtl" : "ltr";
	}
	function clampCount(value, fallback) {
		return Math.max(1, Number(value) || fallback);
	}
	/**
	* `slides_to_scroll` as engine options: the desktop value, plus one media query per breakpoint the
	* author set. The engine re-applies them itself when the viewport crosses a breakpoint.
	*
	* @param {Object} settings
	* @param {Window} [win]
	* @return {{slidesToScroll: number, breakpoints: Object}} Engine options.
	*/
	function slidesToScrollOptions(settings, win = globalThis) {
		const isFade = "fade" === (settings === null || settings === void 0 ? void 0 : settings.transition_type);
		const value = settings === null || settings === void 0 ? void 0 : settings.slides_to_scroll;
		return {
			slidesToScroll: isFade ? 1 : clampCount(desktopValue(value), 1),
			breakpoints: breakpointMediaOptions(value, win, (entry) => isFade ? {} : { slidesToScroll: clampCount(entry, 1) })
		};
	}
	function publishGap(root, container, win) {
		const { columnGap } = win.getComputedStyle(container);
		const gapValue = "normal" === columnGap || !columnGap ? "0px" : columnGap;
		if (root.style.getPropertyValue("--e-carousel-gap") === gapValue) return false;
		root.style.setProperty(GAP_VARIABLE, gapValue);
		return true;
	}
	/**
	* The editor builds part of the canvas from the parent window, so those nodes fail an
	* `instanceof Element` check against the canvas window.
	*
	* @param {*} node
	* @return {boolean} Whether the node is an element, from any window.
	*/
	function isElementNode(node) {
		return 1 === (node === null || node === void 0 ? void 0 : node.nodeType);
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/autoplay.js
	function syncAriaLive(container, engine, autoplayEnabled) {
		if (!container) return;
		const playing = autoplayEnabled && engine.isPlaying();
		container.setAttribute("aria-live", playing ? "off" : "polite");
	}
	var isTouch = (event) => "touch" === (event == null ? void 0 : event.pointerType);
	function isKeyboardFocus(element) {
		try {
			return element.matches(":focus-visible");
		} catch (e) {
			return true;
		}
	}
	function initAutoplay({ root, container, engine, autoplayEnabled, pauseOnHover = true, pauseOnInteraction = true }) {
		const listeners = /* @__PURE__ */ new Set();
		const state = {
			userPaused: false,
			interactionStopped: false,
			hovered: false,
			focused: false,
			dragging: false,
			destroyed: false
		};
		const isActive = () => autoplayEnabled && !state.userPaused && !state.interactionStopped;
		const shouldRun = () => isActive() && !(pauseOnHover && state.hovered) && !state.focused && !state.dragging && engine.snapCount() > 1;
		const reconcile = () => {
			if (state.focused && !(container == null ? void 0 : container.contains(container.ownerDocument.activeElement))) state.focused = false;
			if (autoplayEnabled) {
				const playing = engine.isPlaying();
				if (shouldRun() && !playing) engine.play();
				else if (!shouldRun() && playing) engine.pause();
			}
			syncAriaLive(container, engine, autoplayEnabled);
			listeners.forEach((listener) => listener());
		};
		const controller = {
			isActive,
			toggle: () => {
				if (isActive()) state.userPaused = true;
				else {
					state.userPaused = false;
					state.interactionStopped = false;
				}
				reconcile();
			},
			onChange: (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			},
			destroy: () => {}
		};
		syncAriaLive(container, engine, autoplayEnabled);
		if (!autoplayEnabled) return controller;
		const onPointerEnter = (event) => {
			if (isTouch(event)) return;
			state.hovered = true;
			reconcile();
		};
		const onPointerLeave = (event) => {
			if (isTouch(event)) return;
			state.hovered = false;
			reconcile();
		};
		const onFocusIn = (event) => {
			state.focused = isKeyboardFocus(event.target);
			state.interactionStopped || (state.interactionStopped = state.focused && pauseOnInteraction);
			reconcile();
		};
		const onFocusOut = (event) => {
			if (container.contains(event.relatedTarget)) return;
			state.focused = false;
			reconcile();
		};
		if (pauseOnHover) {
			root == null || root.addEventListener("pointerenter", onPointerEnter);
			root == null || root.addEventListener("pointerleave", onPointerLeave);
		}
		container == null || container.addEventListener("focusin", onFocusIn);
		container == null || container.addEventListener("focusout", onFocusOut);
		const onAutoplayStateChange = () => {
			syncAriaLive(container, engine, autoplayEnabled);
			if (engine.isPlaying() && !shouldRun()) queueMicrotask(() => !state.destroyed && reconcile());
		};
		const offs = [
			engine.on("pointerDown", () => {
				state.dragging = true;
				state.interactionStopped || (state.interactionStopped = pauseOnInteraction);
				reconcile();
			}),
			engine.on("pointerUp", () => {
				state.dragging = false;
				reconcile();
			}),
			engine.on("structureChange", reconcile),
			engine.on("autoplayStateChange", onAutoplayStateChange)
		];
		controller.destroy = () => {
			state.destroyed = true;
			root == null || root.removeEventListener("pointerenter", onPointerEnter);
			root == null || root.removeEventListener("pointerleave", onPointerLeave);
			container == null || container.removeEventListener("focusin", onFocusIn);
			container == null || container.removeEventListener("focusout", onFocusOut);
			offs.forEach((off) => off());
			listeners.clear();
		};
		reconcile();
		return controller;
	}
	var ROOT_PLAYING_CLASS = "e-carousel--autoplay-playing";
	var ROOT_PAUSED_CLASS = "e-carousel--autoplay-paused";
	var CONTROLS_PLAYING_CLASS = "e--playing";
	var CONTROLS_PAUSED_CLASS = "e--paused";
	var DEFAULT_LABEL_ATTRIBUTE = "data-e-carousel-default-label";
	function hasVisibleText(button) {
		var _a;
		const walker = button.ownerDocument.createTreeWalker(button, NodeFilter.SHOW_TEXT);
		while (walker.nextNode()) {
			const node = walker.currentNode;
			if (node.textContent.trim() && !((_a = node.parentElement) == null ? void 0 : _a.closest("svg"))) return true;
		}
		return false;
	}
	function preferVisibleTextLabels(buttons) {
		const removed = buttons.filter((button) => (button == null ? void 0 : button.hasAttribute(DEFAULT_LABEL_ATTRIBUTE)) && hasVisibleText(button)).map((button) => {
			const label = button.getAttribute("aria-label");
			button.removeAttribute("aria-label");
			return () => null !== label && button.setAttribute("aria-label", label);
		});
		return () => removed.forEach((restore) => restore());
	}
	function initAutoplayControls({ root, controls, playButton, pauseButton, controller, engine, autoplayEnabled, showAutoplayButton, isEditor }) {
		if (isEditor || !autoplayEnabled || !showAutoplayButton || !root || !controls || !controller) return () => {};
		const initialRootClasses = [ROOT_PLAYING_CLASS, ROOT_PAUSED_CLASS].filter((name) => root.classList.contains(name));
		const sync = () => {
			var _a;
			const playing = controller.isActive();
			root.classList.toggle(ROOT_PLAYING_CLASS, playing);
			root.classList.toggle(ROOT_PAUSED_CLASS, !playing);
			controls.classList.toggle(CONTROLS_PLAYING_CLASS, playing);
			controls.classList.toggle(CONTROLS_PAUSED_CLASS, !playing);
			setHidden(controls, ((_a = engine == null ? void 0 : engine.snapCount()) != null ? _a : 2) <= 1);
		};
		const setPlaying = (wanted, from, to) => {
			if (controller.isActive() === wanted) return;
			const hadFocus = Boolean(from == null ? void 0 : from.contains(from.ownerDocument.activeElement));
			controller.toggle();
			if (hadFocus && controller.isActive() === wanted) to == null || to.focus({ preventScroll: true });
		};
		const onPlayClick = () => setPlaying(true, playButton, pauseButton);
		const onPauseClick = () => setPlaying(false, pauseButton, playButton);
		playButton == null || playButton.addEventListener("click", onPlayClick);
		pauseButton == null || pauseButton.addEventListener("click", onPauseClick);
		const restoreLabels = preferVisibleTextLabels([playButton, pauseButton]);
		const offChange = controller.onChange(sync);
		sync();
		return () => {
			playButton == null || playButton.removeEventListener("click", onPlayClick);
			pauseButton == null || pauseButton.removeEventListener("click", onPauseClick);
			offChange();
			restoreLabels();
			setHidden(controls, false);
			root.classList.remove(ROOT_PLAYING_CLASS, ROOT_PAUSED_CLASS);
			root.classList.add(...initialRootClasses);
			controls.classList.remove(CONTROLS_PLAYING_CLASS, CONTROLS_PAUSED_CLASS);
		};
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/dots.js
	var SELECTED_CLASS = "e--selected";
	var EDITOR_CHROME_SELECTOR = ":scope > .elementor-element-overlay, :scope > .elementor-empty-view";
	var EDITOR_STATE_CLASSES = ["elementor-element-edit-mode", "elementor-element-editable"];
	function nextDotSnapIndex({ selected, key, rtl, snapCount, loop }) {
		let next = selected;
		if ("Home" === key) next = 0;
		else if ("End" === key) next = snapCount - 1;
		else if ("ArrowRight" === key) next = selected + (rtl ? -1 : 1);
		else if ("ArrowLeft" === key) next = selected + (rtl ? 1 : -1);
		else return null;
		if (loop) return (next + snapCount) % snapCount;
		return Math.min(Math.max(0, next), snapCount - 1);
	}
	function findPrototype(pagination) {
		var _a;
		return (_a = pagination.querySelector(`[data-e-type="${TYPE.dot}"][data-id]`)) != null ? _a : pagination.querySelector("[data-e-carousel-dot-fallback]");
	}
	function createFallbackPrototype(pagination) {
		const dot = pagination.ownerDocument.createElement("button");
		dot.type = "button";
		dot.className = "elementor-element e-atomic-element e-carousel-dot-base e-carousel__dot";
		dot.setAttribute("data-e-type", TYPE.dot);
		dot.setAttribute("data-element_type", TYPE.dot);
		dot.setAttribute("data-e-carousel-dot-fallback", "");
		dot.hidden = true;
		pagination.prepend(dot);
		return dot;
	}
	function clonesOf(pagination) {
		return Array.from(pagination.querySelectorAll("[data-e-carousel-dot]"));
	}
	function cloneDot(prototype, index) {
		const dot = prototype.cloneNode(true);
		dot.removeAttribute("id");
		dot.removeAttribute("data-id");
		dot.removeAttribute("hidden");
		dot.removeAttribute("aria-hidden");
		dot.removeAttribute("data-e-carousel-dot-fallback");
		dot.querySelectorAll(EDITOR_CHROME_SELECTOR).forEach((node) => node.remove());
		dot.classList.remove(...EDITOR_STATE_CLASSES);
		Array.from(dot.attributes).forEach((attribute) => {
			if (attribute.name.startsWith("data-interaction")) dot.removeAttribute(attribute.name);
		});
		dot.hidden = false;
		dot.style.display = "";
		dot.setAttribute("data-e-carousel-dot", String(index));
		dot.setAttribute("type", "button");
		return dot;
	}
	function isDocumentPrototype(node) {
		return 1 === (node == null ? void 0 : node.nodeType) && node.matches(`[data-e-type="${TYPE.dot}"][data-id]`);
	}
	function styleClassesOf(className) {
		return (className != null ? className : "").split(/\s+/).filter((name) => name && !EDITOR_STATE_CLASSES.includes(name)).sort().join(" ");
	}
	function observePrototype(pagination, win, onChange) {
		if (!win.MutationObserver) return () => {};
		const observer = new win.MutationObserver((mutations) => {
			if (mutations.some((mutation) => {
				if ("attributes" === mutation.type) return isDocumentPrototype(mutation.target) && styleClassesOf(mutation.oldValue) !== styleClassesOf(mutation.target.className);
				return [...mutation.addedNodes, ...mutation.removedNodes].some(isDocumentPrototype);
			})) onChange();
		});
		observer.observe(pagination, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ["class"],
			attributeOldValue: true
		});
		return () => observer.disconnect();
	}
	function initDots({ root, engine, pagination, container, isEditor = false, win = globalThis }) {
		if (!pagination) return () => {};
		const resolvePrototype = () => {
			var _a;
			return (_a = findPrototype(pagination)) != null ? _a : createFallbackPrototype(pagination);
		};
		const dotHandlers = [];
		const slideForSnap = (snapIndex) => {
			if (!container) return null;
			return slides(container)[engine.slideIndexForSnap(snapIndex)] || null;
		};
		const clearClones = () => {
			dotHandlers.forEach(({ dot, handler }) => dot.removeEventListener("click", handler));
			dotHandlers.length = 0;
			clonesOf(pagination).forEach((dot) => dot.remove());
		};
		const syncActive = () => {
			const selected = engine.selectedSnap();
			clonesOf(pagination).forEach((dot, index) => {
				const isActive = index === selected;
				if (isActive) dot.setAttribute("aria-current", "true");
				else dot.removeAttribute("aria-current");
				dot.setAttribute("tabindex", isActive ? "0" : "-1");
				dot.classList.toggle(SELECTED_CLASS, isActive);
			});
		};
		const linkDotToSlide = (dot, index) => {
			const target = slideForSnap(index);
			const slideId = target ? ensureSlideId(target) : "";
			if (slideId) dot.setAttribute("aria-controls", slideId);
			else dot.removeAttribute("aria-controls");
		};
		let builtFor = null;
		const build = ({ force = false } = {}) => {
			const prototype = resolvePrototype();
			const snapCount = engine.snapCount();
			if (!force && (builtFor == null ? void 0 : builtFor.prototype) === prototype && (builtFor == null ? void 0 : builtFor.snapCount) === snapCount) {
				clonesOf(pagination).forEach(linkDotToSlide);
				syncActive();
				return;
			}
			builtFor = {
				prototype,
				snapCount
			};
			clearClones();
			setHidden(prototype, true);
			prototype.setAttribute("aria-hidden", "true");
			setHidden(pagination, snapCount <= 1);
			if (snapCount <= 1) return;
			const labels = readCarouselLabels(root);
			for (let index = 0; index < snapCount; index++) {
				const dot = cloneDot(prototype, index);
				dot.setAttribute("tabindex", "0" === String(index) ? "0" : "-1");
				if (labels.go_to_slide) dot.setAttribute("aria-label", formatLabel(labels.go_to_slide, index + 1));
				linkDotToSlide(dot, index);
				const handler = () => engine.goTo(index);
				dot.addEventListener("click", handler);
				dotHandlers.push({
					dot,
					handler
				});
				pagination.appendChild(dot);
			}
			syncActive();
		};
		const focusSelectedDot = () => {
			var _a;
			(_a = pagination.querySelector("[data-e-carousel-dot][tabindex=\"0\"]")) == null || _a.focus();
		};
		const onKeyDown = (event) => {
			const snapCount = engine.snapCount();
			if (snapCount <= 1) return;
			const next = nextDotSnapIndex({
				selected: engine.selectedSnap(),
				key: event.key,
				rtl: "rtl" === documentDirection(root),
				snapCount,
				loop: engine.isLoop()
			});
			if (null === next) return;
			event.preventDefault();
			event.stopPropagation();
			if (next === engine.selectedSnap()) return;
			engine.goTo(next);
			requestAnimationFrame(focusSelectedDot);
		};
		pagination.addEventListener("keydown", onKeyDown);
		const offSelect = engine.on("select", syncActive);
		const offStructureChange = engine.on("structureChange", () => build());
		const stopPrototypeSync = isEditor ? observePrototype(pagination, win, () => build({ force: true })) : () => {};
		build();
		return () => {
			stopPrototypeSync();
			pagination.removeEventListener("keydown", onKeyDown);
			offSelect();
			offStructureChange();
			clearClones();
		};
	}
	//#endregion
	//#region node_modules/embla-carousel/esm/embla-carousel.esm.js
	function isNumber$1(subject) {
		return typeof subject === "number";
	}
	__name(isNumber$1, "isNumber");
	function isString(subject) {
		return typeof subject === "string";
	}
	function isBoolean(subject) {
		return typeof subject === "boolean";
	}
	function isObject(subject) {
		return Object.prototype.toString.call(subject) === "[object Object]";
	}
	function mathAbs(n) {
		return Math.abs(n);
	}
	function mathSign(n) {
		return Math.sign(n);
	}
	function deltaAbs(valueB, valueA) {
		return mathAbs(valueB - valueA);
	}
	function factorAbs(valueB, valueA) {
		if (valueB === 0 || valueA === 0) return 0;
		if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
		return mathAbs(deltaAbs(mathAbs(valueB), mathAbs(valueA)) / valueB);
	}
	function roundToTwoDecimals(num) {
		return Math.round(num * 100) / 100;
	}
	function arrayKeys(array) {
		return objectKeys(array).map(Number);
	}
	function arrayLast(array) {
		return array[arrayLastIndex(array)];
	}
	function arrayLastIndex(array) {
		return Math.max(0, array.length - 1);
	}
	function arrayIsLastIndex(array, index) {
		return index === arrayLastIndex(array);
	}
	function arrayFromNumber(n, startAt = 0) {
		return Array.from(Array(n), (_, i) => startAt + i);
	}
	function objectKeys(object) {
		return Object.keys(object);
	}
	function objectsMergeDeep(objectA, objectB) {
		return [objectA, objectB].reduce((mergedObjects, currentObject) => {
			objectKeys(currentObject).forEach((key) => {
				const valueA = mergedObjects[key];
				const valueB = currentObject[key];
				mergedObjects[key] = isObject(valueA) && isObject(valueB) ? objectsMergeDeep(valueA, valueB) : valueB;
			});
			return mergedObjects;
		}, {});
	}
	function isMouseEvent(evt, ownerWindow) {
		return typeof ownerWindow.MouseEvent !== "undefined" && evt instanceof ownerWindow.MouseEvent;
	}
	function Alignment(align, viewSize) {
		const predefined = {
			start,
			center,
			end
		};
		function start() {
			return 0;
		}
		function center(n) {
			return end(n) / 2;
		}
		function end(n) {
			return viewSize - n;
		}
		function measure(n, index) {
			if (isString(align)) return predefined[align](n);
			return align(viewSize, n, index);
		}
		return { measure };
	}
	function EventStore() {
		let listeners = [];
		function add(node, type, handler, options = { passive: true }) {
			let removeListener;
			if ("addEventListener" in node) {
				node.addEventListener(type, handler, options);
				removeListener = () => node.removeEventListener(type, handler, options);
			} else {
				const legacyMediaQueryList = node;
				legacyMediaQueryList.addListener(handler);
				removeListener = () => legacyMediaQueryList.removeListener(handler);
			}
			listeners.push(removeListener);
			return self;
		}
		function clear() {
			listeners = listeners.filter((remove) => remove());
		}
		const self = {
			add,
			clear
		};
		return self;
	}
	function Animations(ownerDocument, ownerWindow, update, render) {
		const documentVisibleHandler = EventStore();
		const fixedTimeStep = 1e3 / 60;
		let lastTimeStamp = null;
		let accumulatedTime = 0;
		let animationId = 0;
		function init() {
			documentVisibleHandler.add(ownerDocument, "visibilitychange", () => {
				if (ownerDocument.hidden) reset();
			});
		}
		function destroy() {
			stop();
			documentVisibleHandler.clear();
		}
		function animate(timeStamp) {
			if (!animationId) return;
			if (!lastTimeStamp) {
				lastTimeStamp = timeStamp;
				update();
				update();
			}
			const timeElapsed = timeStamp - lastTimeStamp;
			lastTimeStamp = timeStamp;
			accumulatedTime += timeElapsed;
			while (accumulatedTime >= fixedTimeStep) {
				update();
				accumulatedTime -= fixedTimeStep;
			}
			render(accumulatedTime / fixedTimeStep);
			if (animationId) animationId = ownerWindow.requestAnimationFrame(animate);
		}
		function start() {
			if (animationId) return;
			animationId = ownerWindow.requestAnimationFrame(animate);
		}
		function stop() {
			ownerWindow.cancelAnimationFrame(animationId);
			lastTimeStamp = null;
			accumulatedTime = 0;
			animationId = 0;
		}
		function reset() {
			lastTimeStamp = null;
			accumulatedTime = 0;
		}
		return {
			init,
			destroy,
			start,
			stop,
			update,
			render
		};
	}
	function Axis(axis, contentDirection) {
		const isRightToLeft = contentDirection === "rtl";
		const isVertical = axis === "y";
		const scroll = isVertical ? "y" : "x";
		const cross = isVertical ? "x" : "y";
		const sign = !isVertical && isRightToLeft ? -1 : 1;
		const startEdge = getStartEdge();
		const endEdge = getEndEdge();
		function measureSize(nodeRect) {
			const { height, width } = nodeRect;
			return isVertical ? height : width;
		}
		function getStartEdge() {
			if (isVertical) return "top";
			return isRightToLeft ? "right" : "left";
		}
		function getEndEdge() {
			if (isVertical) return "bottom";
			return isRightToLeft ? "left" : "right";
		}
		function direction(n) {
			return n * sign;
		}
		return {
			scroll,
			cross,
			startEdge,
			endEdge,
			measureSize,
			direction
		};
	}
	function Limit(min = 0, max = 0) {
		const length = mathAbs(min - max);
		function reachedMin(n) {
			return n < min;
		}
		function reachedMax(n) {
			return n > max;
		}
		function reachedAny(n) {
			return reachedMin(n) || reachedMax(n);
		}
		function constrain(n) {
			if (!reachedAny(n)) return n;
			return reachedMin(n) ? min : max;
		}
		function removeOffset(n) {
			if (!length) return n;
			return n - length * Math.ceil((n - max) / length);
		}
		return {
			length,
			max,
			min,
			constrain,
			reachedAny,
			reachedMax,
			reachedMin,
			removeOffset
		};
	}
	function Counter(max, start, loop) {
		const { constrain } = Limit(0, max);
		const loopEnd = max + 1;
		let counter = withinLimit(start);
		function withinLimit(n) {
			return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
		}
		function get() {
			return counter;
		}
		function set(n) {
			counter = withinLimit(n);
			return self;
		}
		function add(n) {
			return clone().set(get() + n);
		}
		function clone() {
			return Counter(max, get(), loop);
		}
		const self = {
			get,
			set,
			add,
			clone
		};
		return self;
	}
	function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
		const { cross: crossAxis, direction } = axis;
		const focusNodes = [
			"INPUT",
			"SELECT",
			"TEXTAREA"
		];
		const nonPassiveEvent = { passive: false };
		const initEvents = EventStore();
		const dragEvents = EventStore();
		const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
		const snapForceBoost = {
			mouse: 300,
			touch: 400
		};
		const freeForceBoost = {
			mouse: 500,
			touch: 600
		};
		const baseSpeed = dragFree ? 43 : 25;
		let isMoving = false;
		let startScroll = 0;
		let startCross = 0;
		let pointerIsDown = false;
		let preventScroll = false;
		let preventClick = false;
		let isMouse = false;
		function init(emblaApi) {
			if (!watchDrag) return;
			function downIfAllowed(evt) {
				if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
			}
			const node = rootNode;
			initEvents.add(node, "dragstart", (evt) => evt.preventDefault(), nonPassiveEvent).add(node, "touchmove", () => void 0, nonPassiveEvent).add(node, "touchend", () => void 0).add(node, "touchstart", downIfAllowed).add(node, "mousedown", downIfAllowed).add(node, "touchcancel", up).add(node, "contextmenu", up).add(node, "click", click, true);
		}
		function destroy() {
			initEvents.clear();
			dragEvents.clear();
		}
		function addDragEvents() {
			const node = isMouse ? ownerDocument : rootNode;
			dragEvents.add(node, "touchmove", move, nonPassiveEvent).add(node, "touchend", up).add(node, "mousemove", move, nonPassiveEvent).add(node, "mouseup", up);
		}
		function isFocusNode(node) {
			const nodeName = node.nodeName || "";
			return focusNodes.includes(nodeName);
		}
		function forceBoost() {
			return (dragFree ? freeForceBoost : snapForceBoost)[isMouse ? "mouse" : "touch"];
		}
		function allowedForce(force, targetChanged) {
			const next = index.add(mathSign(force) * -1);
			const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
			if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
			if (skipSnaps && targetChanged) return baseForce * .5;
			return scrollTarget.byIndex(next.get(), 0).distance;
		}
		function down(evt) {
			const isMouseEvt = isMouseEvent(evt, ownerWindow);
			isMouse = isMouseEvt;
			preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
			isMoving = deltaAbs(target.get(), location.get()) >= 2;
			if (isMouseEvt && evt.button !== 0) return;
			if (isFocusNode(evt.target)) return;
			pointerIsDown = true;
			dragTracker.pointerDown(evt);
			scrollBody.useFriction(0).useDuration(0);
			target.set(location);
			addDragEvents();
			startScroll = dragTracker.readPoint(evt);
			startCross = dragTracker.readPoint(evt, crossAxis);
			eventHandler.emit("pointerDown");
		}
		function move(evt) {
			if (!isMouseEvent(evt, ownerWindow) && evt.touches.length >= 2) return up(evt);
			const lastScroll = dragTracker.readPoint(evt);
			const lastCross = dragTracker.readPoint(evt, crossAxis);
			const diffScroll = deltaAbs(lastScroll, startScroll);
			const diffCross = deltaAbs(lastCross, startCross);
			if (!preventScroll && !isMouse) {
				if (!evt.cancelable) return up(evt);
				preventScroll = diffScroll > diffCross;
				if (!preventScroll) return up(evt);
			}
			const diff = dragTracker.pointerMove(evt);
			if (diffScroll > dragThreshold) preventClick = true;
			scrollBody.useFriction(.3).useDuration(.75);
			animation.start();
			target.add(direction(diff));
			evt.preventDefault();
		}
		function up(evt) {
			const targetChanged = scrollTarget.byDistance(0, false).index !== index.get();
			const rawForce = dragTracker.pointerUp(evt) * forceBoost();
			const force = allowedForce(direction(rawForce), targetChanged);
			const forceFactor = factorAbs(rawForce, force);
			const speed = baseSpeed - 10 * forceFactor;
			const friction = baseFriction + forceFactor / 50;
			preventScroll = false;
			pointerIsDown = false;
			dragEvents.clear();
			scrollBody.useDuration(speed).useFriction(friction);
			scrollTo.distance(force, !dragFree);
			isMouse = false;
			eventHandler.emit("pointerUp");
		}
		function click(evt) {
			if (preventClick) {
				evt.stopPropagation();
				evt.preventDefault();
				preventClick = false;
			}
		}
		function pointerDown() {
			return pointerIsDown;
		}
		return {
			init,
			destroy,
			pointerDown
		};
	}
	function DragTracker(axis, ownerWindow) {
		const logInterval = 170;
		let startEvent;
		let lastEvent;
		function readTime(evt) {
			return evt.timeStamp;
		}
		function readPoint(evt, evtAxis) {
			const coord = `client${(evtAxis || axis.scroll) === "x" ? "X" : "Y"}`;
			return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
		}
		function pointerDown(evt) {
			startEvent = evt;
			lastEvent = evt;
			return readPoint(evt);
		}
		function pointerMove(evt) {
			const diff = readPoint(evt) - readPoint(lastEvent);
			const expired = readTime(evt) - readTime(startEvent) > logInterval;
			lastEvent = evt;
			if (expired) startEvent = evt;
			return diff;
		}
		function pointerUp(evt) {
			if (!startEvent || !lastEvent) return 0;
			const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
			const diffTime = readTime(evt) - readTime(startEvent);
			const expired = readTime(evt) - readTime(lastEvent) > logInterval;
			const force = diffDrag / diffTime;
			return diffTime && !expired && mathAbs(force) > .1 ? force : 0;
		}
		return {
			pointerDown,
			pointerMove,
			pointerUp,
			readPoint
		};
	}
	function NodeRects() {
		function measure(node) {
			const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
			return {
				top: offsetTop,
				right: offsetLeft + offsetWidth,
				bottom: offsetTop + offsetHeight,
				left: offsetLeft,
				width: offsetWidth,
				height: offsetHeight
			};
		}
		return { measure };
	}
	function PercentOfView(viewSize) {
		function measure(n) {
			return viewSize * (n / 100);
		}
		return { measure };
	}
	function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
		const observeNodes = [container].concat(slides);
		let resizeObserver;
		let containerSize;
		let slideSizes = [];
		let destroyed = false;
		function readSize(node) {
			return axis.measureSize(nodeRects.measure(node));
		}
		function init(emblaApi) {
			if (!watchResize) return;
			containerSize = readSize(container);
			slideSizes = slides.map(readSize);
			function defaultCallback(entries) {
				for (const entry of entries) {
					if (destroyed) return;
					const isContainer = entry.target === container;
					const slideIndex = slides.indexOf(entry.target);
					const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
					if (mathAbs(readSize(isContainer ? container : slides[slideIndex]) - lastSize) >= .5) {
						emblaApi.reInit();
						eventHandler.emit("resize");
						break;
					}
				}
			}
			resizeObserver = new ResizeObserver((entries) => {
				if (isBoolean(watchResize) || watchResize(emblaApi, entries)) defaultCallback(entries);
			});
			ownerWindow.requestAnimationFrame(() => {
				observeNodes.forEach((node) => resizeObserver.observe(node));
			});
		}
		function destroy() {
			destroyed = true;
			if (resizeObserver) resizeObserver.disconnect();
		}
		return {
			init,
			destroy
		};
	}
	function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
		let scrollVelocity = 0;
		let scrollDirection = 0;
		let scrollDuration = baseDuration;
		let scrollFriction = baseFriction;
		let rawLocation = location.get();
		let rawLocationPrevious = 0;
		function seek() {
			const displacement = target.get() - location.get();
			const isInstant = !scrollDuration;
			let scrollDistance = 0;
			if (isInstant) {
				scrollVelocity = 0;
				previousLocation.set(target);
				location.set(target);
				scrollDistance = displacement;
			} else {
				previousLocation.set(location);
				scrollVelocity += displacement / scrollDuration;
				scrollVelocity *= scrollFriction;
				rawLocation += scrollVelocity;
				location.add(scrollVelocity);
				scrollDistance = rawLocation - rawLocationPrevious;
			}
			scrollDirection = mathSign(scrollDistance);
			rawLocationPrevious = rawLocation;
			return self;
		}
		function settled() {
			return mathAbs(target.get() - offsetLocation.get()) < .001;
		}
		function duration() {
			return scrollDuration;
		}
		function direction() {
			return scrollDirection;
		}
		function velocity() {
			return scrollVelocity;
		}
		function useBaseDuration() {
			return useDuration(baseDuration);
		}
		function useBaseFriction() {
			return useFriction(baseFriction);
		}
		function useDuration(n) {
			scrollDuration = n;
			return self;
		}
		function useFriction(n) {
			scrollFriction = n;
			return self;
		}
		const self = {
			direction,
			duration,
			velocity,
			seek,
			settled,
			useBaseFriction,
			useBaseDuration,
			useFriction,
			useDuration
		};
		return self;
	}
	function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
		const pullBackThreshold = percentOfView.measure(10);
		const edgeOffsetTolerance = percentOfView.measure(50);
		const frictionLimit = Limit(.1, .99);
		let disabled = false;
		function shouldConstrain() {
			if (disabled) return false;
			if (!limit.reachedAny(target.get())) return false;
			if (!limit.reachedAny(location.get())) return false;
			return true;
		}
		function constrain(pointerDown) {
			if (!shouldConstrain()) return;
			const diffToEdge = mathAbs(limit[limit.reachedMin(location.get()) ? "min" : "max"] - location.get());
			const diffToTarget = target.get() - location.get();
			const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
			target.subtract(diffToTarget * friction);
			if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
				target.set(limit.constrain(target.get()));
				scrollBody.useDuration(25).useBaseFriction();
			}
		}
		function toggleActive(active) {
			disabled = !active;
		}
		return {
			shouldConstrain,
			constrain,
			toggleActive
		};
	}
	function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
		const scrollBounds = Limit(-contentSize + viewSize, 0);
		const snapsBounded = measureBounded();
		const scrollContainLimit = findScrollContainLimit();
		const snapsContained = measureContained();
		function usePixelTolerance(bound, snap) {
			return deltaAbs(bound, snap) <= 1;
		}
		function findScrollContainLimit() {
			const startSnap = snapsBounded[0];
			const endSnap = arrayLast(snapsBounded);
			return Limit(snapsBounded.lastIndexOf(startSnap), snapsBounded.indexOf(endSnap) + 1);
		}
		function measureBounded() {
			return snapsAligned.map((snapAligned, index) => {
				const { min, max } = scrollBounds;
				const snap = scrollBounds.constrain(snapAligned);
				const isFirst = !index;
				const isLast = arrayIsLastIndex(snapsAligned, index);
				if (isFirst) return max;
				if (isLast) return min;
				if (usePixelTolerance(min, snap)) return min;
				if (usePixelTolerance(max, snap)) return max;
				return snap;
			}).map((scrollBound) => parseFloat(scrollBound.toFixed(3)));
		}
		function measureContained() {
			if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
			if (containScroll === "keepSnaps") return snapsBounded;
			const { min, max } = scrollContainLimit;
			return snapsBounded.slice(min, max);
		}
		return {
			snapsContained,
			scrollContainLimit
		};
	}
	function ScrollLimit(contentSize, scrollSnaps, loop) {
		const max = scrollSnaps[0];
		return { limit: Limit(loop ? max - contentSize : arrayLast(scrollSnaps), max) };
	}
	function ScrollLooper(contentSize, limit, location, vectors) {
		const jointSafety = .1;
		const { reachedMin, reachedMax } = Limit(limit.min + jointSafety, limit.max + jointSafety);
		function shouldLoop(direction) {
			if (direction === 1) return reachedMax(location.get());
			if (direction === -1) return reachedMin(location.get());
			return false;
		}
		function loop(direction) {
			if (!shouldLoop(direction)) return;
			const loopDistance = contentSize * (direction * -1);
			vectors.forEach((v) => v.add(loopDistance));
		}
		return { loop };
	}
	function ScrollProgress(limit) {
		const { max, length } = limit;
		function get(n) {
			const currentLocation = n - max;
			return length ? currentLocation / -length : 0;
		}
		return { get };
	}
	function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
		const { startEdge, endEdge } = axis;
		const { groupSlides } = slidesToScroll;
		const alignments = measureSizes().map(alignment.measure);
		const snaps = measureUnaligned();
		const snapsAligned = measureAligned();
		function measureSizes() {
			return groupSlides(slideRects).map((rects) => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
		}
		function measureUnaligned() {
			return slideRects.map((rect) => containerRect[startEdge] - rect[startEdge]).map((snap) => -mathAbs(snap));
		}
		function measureAligned() {
			return groupSlides(snaps).map((g) => g[0]).map((snap, index) => snap + alignments[index]);
		}
		return {
			snaps,
			snapsAligned
		};
	}
	function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
		const { groupSlides } = slidesToScroll;
		const { min, max } = scrollContainLimit;
		const slideRegistry = createSlideRegistry();
		function createSlideRegistry() {
			const groupedSlideIndexes = groupSlides(slideIndexes);
			const doNotContain = !containSnaps || containScroll === "keepSnaps";
			if (scrollSnaps.length === 1) return [slideIndexes];
			if (doNotContain) return groupedSlideIndexes;
			return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
				const isFirst = !index;
				const isLast = arrayIsLastIndex(groups, index);
				if (isFirst) return arrayFromNumber(arrayLast(groups[0]) + 1);
				if (isLast) return arrayFromNumber(arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1, arrayLast(groups)[0]);
				return group;
			});
		}
		return { slideRegistry };
	}
	function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
		const { reachedAny, removeOffset, constrain } = limit;
		function minDistance(distances) {
			return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
		}
		function findTargetSnap(target) {
			const distance = loop ? removeOffset(target) : constrain(target);
			const { index } = scrollSnaps.map((snap, index) => ({
				diff: shortcut(snap - distance, 0),
				index
			})).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff))[0];
			return {
				index,
				distance
			};
		}
		function shortcut(target, direction) {
			const targets = [
				target,
				target + contentSize,
				target - contentSize
			];
			if (!loop) return target;
			if (!direction) return minDistance(targets);
			const matchingTargets = targets.filter((t) => mathSign(t) === direction);
			if (matchingTargets.length) return minDistance(matchingTargets);
			return arrayLast(targets) - contentSize;
		}
		function byIndex(index, direction) {
			return {
				index,
				distance: shortcut(scrollSnaps[index] - targetVector.get(), direction)
			};
		}
		function byDistance(distance, snap) {
			const target = targetVector.get() + distance;
			const { index, distance: targetSnapDistance } = findTargetSnap(target);
			const reachedBound = !loop && reachedAny(target);
			if (!snap || reachedBound) return {
				index,
				distance
			};
			return {
				index,
				distance: distance + shortcut(scrollSnaps[index] - targetSnapDistance, 0)
			};
		}
		return {
			byDistance,
			byIndex,
			shortcut
		};
	}
	function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
		function scrollTo(target) {
			const distanceDiff = target.distance;
			const indexDiff = target.index !== indexCurrent.get();
			targetVector.add(distanceDiff);
			if (distanceDiff) if (scrollBody.duration()) animation.start();
			else {
				animation.update();
				animation.render(1);
				animation.update();
			}
			if (indexDiff) {
				indexPrevious.set(indexCurrent.get());
				indexCurrent.set(target.index);
				eventHandler.emit("select");
			}
		}
		function distance(n, snap) {
			scrollTo(scrollTarget.byDistance(n, snap));
		}
		function index(n, direction) {
			const targetIndex = indexCurrent.clone().set(n);
			scrollTo(scrollTarget.byIndex(targetIndex.get(), direction));
		}
		return {
			distance,
			index
		};
	}
	function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
		const focusListenerOptions = {
			passive: true,
			capture: true
		};
		let lastTabPressTime = 0;
		function init(emblaApi) {
			if (!watchFocus) return;
			function defaultCallback(index) {
				if ((/* @__PURE__ */ new Date()).getTime() - lastTabPressTime > 10) return;
				eventHandler.emit("slideFocusStart");
				root.scrollLeft = 0;
				const group = slideRegistry.findIndex((group) => group.includes(index));
				if (!isNumber$1(group)) return;
				scrollBody.useDuration(0);
				scrollTo.index(group, 0);
				eventHandler.emit("slideFocus");
			}
			eventStore.add(document, "keydown", registerTabPress, false);
			slides.forEach((slide, slideIndex) => {
				eventStore.add(slide, "focus", (evt) => {
					if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) defaultCallback(slideIndex);
				}, focusListenerOptions);
			});
		}
		function registerTabPress(event) {
			if (event.code === "Tab") lastTabPressTime = (/* @__PURE__ */ new Date()).getTime();
		}
		return { init };
	}
	function Vector1D(initialValue) {
		let value = initialValue;
		function get() {
			return value;
		}
		function set(n) {
			value = normalizeInput(n);
		}
		function add(n) {
			value += normalizeInput(n);
		}
		function subtract(n) {
			value -= normalizeInput(n);
		}
		function normalizeInput(n) {
			return isNumber$1(n) ? n : n.get();
		}
		return {
			get,
			set,
			add,
			subtract
		};
	}
	function Translate(axis, container) {
		const translate = axis.scroll === "x" ? x : y;
		const containerStyle = container.style;
		let previousTarget = null;
		let disabled = false;
		function x(n) {
			return `translate3d(${n}px,0px,0px)`;
		}
		function y(n) {
			return `translate3d(0px,${n}px,0px)`;
		}
		function to(target) {
			if (disabled) return;
			const newTarget = roundToTwoDecimals(axis.direction(target));
			if (newTarget === previousTarget) return;
			containerStyle.transform = translate(newTarget);
			previousTarget = newTarget;
		}
		function toggleActive(active) {
			disabled = !active;
		}
		function clear() {
			if (disabled) return;
			containerStyle.transform = "";
			if (!container.getAttribute("style")) container.removeAttribute("style");
		}
		return {
			clear,
			to,
			toggleActive
		};
	}
	function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
		const roundingSafety = .5;
		const ascItems = arrayKeys(slideSizesWithGaps);
		const descItems = arrayKeys(slideSizesWithGaps).reverse();
		const loopPoints = startPoints().concat(endPoints());
		function removeSlideSizes(indexes, from) {
			return indexes.reduce((a, i) => {
				return a - slideSizesWithGaps[i];
			}, from);
		}
		function slidesInGap(indexes, gap) {
			return indexes.reduce((a, i) => {
				return removeSlideSizes(a, gap) > 0 ? a.concat([i]) : a;
			}, []);
		}
		function findSlideBounds(offset) {
			return snaps.map((snap, index) => ({
				start: snap - slideSizes[index] + roundingSafety + offset,
				end: snap + viewSize - roundingSafety + offset
			}));
		}
		function findLoopPoints(indexes, offset, isEndEdge) {
			const slideBounds = findSlideBounds(offset);
			return indexes.map((index) => {
				const initial = isEndEdge ? 0 : -contentSize;
				const altered = isEndEdge ? contentSize : 0;
				const boundEdge = isEndEdge ? "end" : "start";
				const loopPoint = slideBounds[index][boundEdge];
				return {
					index,
					loopPoint,
					slideLocation: Vector1D(-1),
					translate: Translate(axis, slides[index]),
					target: () => location.get() > loopPoint ? initial : altered
				};
			});
		}
		function startPoints() {
			const gap = scrollSnaps[0];
			return findLoopPoints(slidesInGap(descItems, gap), contentSize, false);
		}
		function endPoints() {
			const gap = viewSize - scrollSnaps[0] - 1;
			return findLoopPoints(slidesInGap(ascItems, gap), -contentSize, true);
		}
		function canLoop() {
			return loopPoints.every(({ index }) => {
				return removeSlideSizes(ascItems.filter((i) => i !== index), viewSize) <= .1;
			});
		}
		function loop() {
			loopPoints.forEach((loopPoint) => {
				const { target, translate, slideLocation } = loopPoint;
				const shiftLocation = target();
				if (shiftLocation === slideLocation.get()) return;
				translate.to(shiftLocation);
				slideLocation.set(shiftLocation);
			});
		}
		function clear() {
			loopPoints.forEach((loopPoint) => loopPoint.translate.clear());
		}
		return {
			canLoop,
			clear,
			loop,
			loopPoints
		};
	}
	function SlidesHandler(container, eventHandler, watchSlides) {
		let mutationObserver;
		let destroyed = false;
		function init(emblaApi) {
			if (!watchSlides) return;
			function defaultCallback(mutations) {
				for (const mutation of mutations) if (mutation.type === "childList") {
					emblaApi.reInit();
					eventHandler.emit("slidesChanged");
					break;
				}
			}
			mutationObserver = new MutationObserver((mutations) => {
				if (destroyed) return;
				if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) defaultCallback(mutations);
			});
			mutationObserver.observe(container, { childList: true });
		}
		function destroy() {
			if (mutationObserver) mutationObserver.disconnect();
			destroyed = true;
		}
		return {
			init,
			destroy
		};
	}
	function SlidesInView(container, slides, eventHandler, threshold) {
		const intersectionEntryMap = {};
		let inViewCache = null;
		let notInViewCache = null;
		let intersectionObserver;
		let destroyed = false;
		function init() {
			intersectionObserver = new IntersectionObserver((entries) => {
				if (destroyed) return;
				entries.forEach((entry) => {
					const index = slides.indexOf(entry.target);
					intersectionEntryMap[index] = entry;
				});
				inViewCache = null;
				notInViewCache = null;
				eventHandler.emit("slidesInView");
			}, {
				root: container.parentElement,
				threshold
			});
			slides.forEach((slide) => intersectionObserver.observe(slide));
		}
		function destroy() {
			if (intersectionObserver) intersectionObserver.disconnect();
			destroyed = true;
		}
		function createInViewList(inView) {
			return objectKeys(intersectionEntryMap).reduce((list, slideIndex) => {
				const index = parseInt(slideIndex);
				const { isIntersecting } = intersectionEntryMap[index];
				if (inView && isIntersecting || !inView && !isIntersecting) list.push(index);
				return list;
			}, []);
		}
		function get(inView = true) {
			if (inView && inViewCache) return inViewCache;
			if (!inView && notInViewCache) return notInViewCache;
			const slideIndexes = createInViewList(inView);
			if (inView) inViewCache = slideIndexes;
			if (!inView) notInViewCache = slideIndexes;
			return slideIndexes;
		}
		return {
			init,
			destroy,
			get
		};
	}
	function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
		const { measureSize, startEdge, endEdge } = axis;
		const withEdgeGap = slideRects[0] && readEdgeGap;
		const startGap = measureStartGap();
		const endGap = measureEndGap();
		const slideSizes = slideRects.map(measureSize);
		const slideSizesWithGaps = measureWithGaps();
		function measureStartGap() {
			if (!withEdgeGap) return 0;
			const slideRect = slideRects[0];
			return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
		}
		function measureEndGap() {
			if (!withEdgeGap) return 0;
			const style = ownerWindow.getComputedStyle(arrayLast(slides));
			return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
		}
		function measureWithGaps() {
			return slideRects.map((rect, index, rects) => {
				const isFirst = !index;
				const isLast = arrayIsLastIndex(rects, index);
				if (isFirst) return slideSizes[index] + startGap;
				if (isLast) return slideSizes[index] + endGap;
				return rects[index + 1][startEdge] - rect[startEdge];
			}).map(mathAbs);
		}
		return {
			slideSizes,
			slideSizesWithGaps,
			startGap,
			endGap
		};
	}
	function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
		const { startEdge, endEdge, direction } = axis;
		const groupByNumber = isNumber$1(slidesToScroll);
		function byNumber(array, groupSize) {
			return arrayKeys(array).filter((i) => i % groupSize === 0).map((i) => array.slice(i, i + groupSize));
		}
		function bySize(array) {
			if (!array.length) return [];
			return arrayKeys(array).reduce((groups, rectB, index) => {
				const rectA = arrayLast(groups) || 0;
				const isFirst = rectA === 0;
				const isLast = rectB === arrayLastIndex(array);
				const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
				const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
				const gapA = !loop && isFirst ? direction(startGap) : 0;
				const chunkSize = mathAbs(edgeB - (!loop && isLast ? direction(endGap) : 0) - (edgeA + gapA));
				if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
				if (isLast) groups.push(array.length);
				return groups;
			}, []).map((currentSize, index, groups) => {
				const previousSize = Math.max(groups[index - 1] || 0);
				return array.slice(previousSize, currentSize);
			});
		}
		function groupSlides(array) {
			return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
		}
		return { groupSlides };
	}
	function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
		const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
		const pixelTolerance = 2;
		const nodeRects = NodeRects();
		const containerRect = nodeRects.measure(container);
		const slideRects = slides.map(nodeRects.measure);
		const axis = Axis(scrollAxis, direction);
		const viewSize = axis.measureSize(containerRect);
		const percentOfView = PercentOfView(viewSize);
		const alignment = Alignment(align, viewSize);
		const containSnaps = !loop && !!containScroll;
		const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, loop || !!containScroll, ownerWindow);
		const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
		const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
		const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
		const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
		const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
		const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
		const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
		const indexPrevious = index.clone();
		const slideIndexes = arrayKeys(slides);
		const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } }) => {
			if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
			scrollBody.seek();
		};
		const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha) => {
			const shouldSettle = scrollBody.settled();
			const withinBounds = !scrollBounds.shouldConstrain();
			const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
			const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
			if (hasSettledAndIdle) animation.stop();
			const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
			offsetLocation.set(interpolatedLocation);
			if (loop) {
				scrollLooper.loop(scrollBody.direction());
				slideLooper.loop();
			}
			translate.to(offsetLocation.get());
			if (hasSettledAndIdle) eventHandler.emit("settle");
			if (!hasSettled) eventHandler.emit("scroll");
		};
		const animation = Animations(ownerDocument, ownerWindow, () => update(engine), (alpha) => render(engine, alpha));
		const friction = .68;
		const startLocation = scrollSnaps[index.get()];
		const location = Vector1D(startLocation);
		const previousLocation = Vector1D(startLocation);
		const offsetLocation = Vector1D(startLocation);
		const target = Vector1D(startLocation);
		const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
		const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
		const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
		const scrollProgress = ScrollProgress(limit);
		const eventStore = EventStore();
		const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
		const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
		const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
		const engine = {
			ownerDocument,
			ownerWindow,
			eventHandler,
			containerRect,
			slideRects,
			animation,
			axis,
			dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
			eventStore,
			percentOfView,
			index,
			indexPrevious,
			limit,
			location,
			offsetLocation,
			previousLocation,
			options,
			resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
			scrollBody,
			scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
			scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
				location,
				offsetLocation,
				previousLocation,
				target
			]),
			scrollProgress,
			scrollSnapList: scrollSnaps.map(scrollProgress.get),
			scrollSnaps,
			scrollTarget,
			scrollTo,
			slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
			slideFocus,
			slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
			slidesInView,
			slideIndexes,
			slideRegistry,
			slidesToScroll,
			target,
			translate: Translate(axis, container)
		};
		return engine;
	}
	function EventHandler() {
		let listeners = {};
		let api;
		function init(emblaApi) {
			api = emblaApi;
		}
		function getListeners(evt) {
			return listeners[evt] || [];
		}
		function emit(evt) {
			getListeners(evt).forEach((e) => e(api, evt));
			return self;
		}
		function on(evt, cb) {
			listeners[evt] = getListeners(evt).concat([cb]);
			return self;
		}
		function off(evt, cb) {
			listeners[evt] = getListeners(evt).filter((e) => e !== cb);
			return self;
		}
		function clear() {
			listeners = {};
		}
		const self = {
			init,
			emit,
			off,
			on,
			clear
		};
		return self;
	}
	var defaultOptions$1 = {
		align: "center",
		axis: "x",
		container: null,
		slides: null,
		containScroll: "trimSnaps",
		direction: "ltr",
		slidesToScroll: 1,
		inViewThreshold: 0,
		breakpoints: {},
		dragFree: false,
		dragThreshold: 10,
		loop: false,
		skipSnaps: false,
		duration: 25,
		startIndex: 0,
		active: true,
		watchDrag: true,
		watchResize: true,
		watchSlides: true,
		watchFocus: true
	};
	function OptionsHandler(ownerWindow) {
		function mergeOptions(optionsA, optionsB) {
			return objectsMergeDeep(optionsA, optionsB || {});
		}
		function optionsAtMedia(options) {
			const optionsAtMedia = options.breakpoints || {};
			return mergeOptions(options, objectKeys(optionsAtMedia).filter((media) => ownerWindow.matchMedia(media).matches).map((media) => optionsAtMedia[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {}));
		}
		function optionsMediaQueries(optionsList) {
			return optionsList.map((options) => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
		}
		return {
			mergeOptions,
			optionsAtMedia,
			optionsMediaQueries
		};
	}
	function PluginsHandler(optionsHandler) {
		let activePlugins = [];
		function init(emblaApi, plugins) {
			activePlugins = plugins.filter(({ options }) => optionsHandler.optionsAtMedia(options).active !== false);
			activePlugins.forEach((plugin) => plugin.init(emblaApi, optionsHandler));
			return plugins.reduce((map, plugin) => Object.assign(map, { [plugin.name]: plugin }), {});
		}
		function destroy() {
			activePlugins = activePlugins.filter((plugin) => plugin.destroy());
		}
		return {
			init,
			destroy
		};
	}
	function EmblaCarousel(root, userOptions, userPlugins) {
		const ownerDocument = root.ownerDocument;
		const ownerWindow = ownerDocument.defaultView;
		const optionsHandler = OptionsHandler(ownerWindow);
		const pluginsHandler = PluginsHandler(optionsHandler);
		const mediaHandlers = EventStore();
		const eventHandler = EventHandler();
		const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
		const { on, off, emit } = eventHandler;
		const reInit = reActivate;
		let destroyed = false;
		let engine;
		let optionsBase = mergeOptions(defaultOptions$1, EmblaCarousel.globalOptions);
		let options = mergeOptions(optionsBase);
		let pluginList = [];
		let pluginApis;
		let container;
		let slides;
		function storeElements() {
			const { container: userContainer, slides: userSlides } = options;
			container = (isString(userContainer) ? root.querySelector(userContainer) : userContainer) || root.children[0];
			const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
			slides = [].slice.call(customSlides || container.children);
		}
		function createEngine(options) {
			const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
			if (options.loop && !engine.slideLooper.canLoop()) return createEngine(Object.assign({}, options, { loop: false }));
			return engine;
		}
		function activate(withOptions, withPlugins) {
			if (destroyed) return;
			optionsBase = mergeOptions(optionsBase, withOptions);
			options = optionsAtMedia(optionsBase);
			pluginList = withPlugins || pluginList;
			storeElements();
			engine = createEngine(options);
			optionsMediaQueries([optionsBase, ...pluginList.map(({ options }) => options)]).forEach((query) => mediaHandlers.add(query, "change", reActivate));
			if (!options.active) return;
			engine.translate.to(engine.location.get());
			engine.animation.init();
			engine.slidesInView.init();
			engine.slideFocus.init(self);
			engine.eventHandler.init(self);
			engine.resizeHandler.init(self);
			engine.slidesHandler.init(self);
			if (engine.options.loop) engine.slideLooper.loop();
			if (container.offsetParent && slides.length) engine.dragHandler.init(self);
			pluginApis = pluginsHandler.init(self, pluginList);
		}
		function reActivate(withOptions, withPlugins) {
			const startIndex = selectedScrollSnap();
			deActivate();
			activate(mergeOptions({ startIndex }, withOptions), withPlugins);
			eventHandler.emit("reInit");
		}
		function deActivate() {
			engine.dragHandler.destroy();
			engine.eventStore.clear();
			engine.translate.clear();
			engine.slideLooper.clear();
			engine.resizeHandler.destroy();
			engine.slidesHandler.destroy();
			engine.slidesInView.destroy();
			engine.animation.destroy();
			pluginsHandler.destroy();
			mediaHandlers.clear();
		}
		function destroy() {
			if (destroyed) return;
			destroyed = true;
			mediaHandlers.clear();
			deActivate();
			eventHandler.emit("destroy");
			eventHandler.clear();
		}
		function scrollTo(index, jump, direction) {
			if (!options.active || destroyed) return;
			engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
			engine.scrollTo.index(index, direction || 0);
		}
		function scrollNext(jump) {
			scrollTo(engine.index.add(1).get(), jump, -1);
		}
		function scrollPrev(jump) {
			scrollTo(engine.index.add(-1).get(), jump, 1);
		}
		function canScrollNext() {
			return engine.index.add(1).get() !== selectedScrollSnap();
		}
		function canScrollPrev() {
			return engine.index.add(-1).get() !== selectedScrollSnap();
		}
		function scrollSnapList() {
			return engine.scrollSnapList;
		}
		function scrollProgress() {
			return engine.scrollProgress.get(engine.offsetLocation.get());
		}
		function selectedScrollSnap() {
			return engine.index.get();
		}
		function previousScrollSnap() {
			return engine.indexPrevious.get();
		}
		function slidesInView() {
			return engine.slidesInView.get();
		}
		function slidesNotInView() {
			return engine.slidesInView.get(false);
		}
		function plugins() {
			return pluginApis;
		}
		function internalEngine() {
			return engine;
		}
		function rootNode() {
			return root;
		}
		function containerNode() {
			return container;
		}
		function slideNodes() {
			return slides;
		}
		const self = {
			canScrollNext,
			canScrollPrev,
			containerNode,
			internalEngine,
			destroy,
			off,
			on,
			emit,
			plugins,
			previousScrollSnap,
			reInit,
			rootNode,
			scrollNext,
			scrollPrev,
			scrollProgress,
			scrollSnapList,
			scrollTo,
			selectedScrollSnap,
			slideNodes,
			slidesInView,
			slidesNotInView
		};
		activate(userOptions, userPlugins);
		setTimeout(() => eventHandler.emit("init"), 0);
		return self;
	}
	EmblaCarousel.globalOptions = void 0;
	//#endregion
	//#region node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js
	var defaultOptions = {
		active: true,
		breakpoints: {},
		delay: 4e3,
		jump: false,
		playOnInit: true,
		stopOnFocusIn: true,
		stopOnInteraction: true,
		stopOnMouseEnter: false,
		stopOnLastSnap: false,
		rootNode: null
	};
	function normalizeDelay(emblaApi, delay) {
		const scrollSnaps = emblaApi.scrollSnapList();
		if (typeof delay === "number") return scrollSnaps.map(() => delay);
		return delay(scrollSnaps, emblaApi);
	}
	function getAutoplayRootNode(emblaApi, rootNode) {
		const emblaRootNode = emblaApi.rootNode();
		return rootNode && rootNode(emblaRootNode) || emblaRootNode;
	}
	function Autoplay(userOptions = {}) {
		let options;
		let emblaApi;
		let destroyed;
		let delay;
		let timerStartTime = null;
		let timerId = 0;
		let autoplayActive = false;
		let mouseIsOver = false;
		let playOnDocumentVisible = false;
		let jump = false;
		function init(emblaApiInstance, optionsHandler) {
			emblaApi = emblaApiInstance;
			const { mergeOptions, optionsAtMedia } = optionsHandler;
			options = optionsAtMedia(mergeOptions(mergeOptions(defaultOptions, Autoplay.globalOptions), userOptions));
			if (emblaApi.scrollSnapList().length <= 1) return;
			jump = options.jump;
			destroyed = false;
			delay = normalizeDelay(emblaApi, options.delay);
			const { eventStore, ownerDocument } = emblaApi.internalEngine();
			const isDraggable = !!emblaApi.internalEngine().options.watchDrag;
			const root = getAutoplayRootNode(emblaApi, options.rootNode);
			eventStore.add(ownerDocument, "visibilitychange", visibilityChange);
			if (isDraggable) emblaApi.on("pointerDown", pointerDown);
			if (isDraggable && !options.stopOnInteraction) emblaApi.on("pointerUp", pointerUp);
			if (options.stopOnMouseEnter) eventStore.add(root, "mouseenter", mouseEnter);
			if (options.stopOnMouseEnter && !options.stopOnInteraction) eventStore.add(root, "mouseleave", mouseLeave);
			if (options.stopOnFocusIn) emblaApi.on("slideFocusStart", stopAutoplay);
			if (options.stopOnFocusIn && !options.stopOnInteraction) eventStore.add(emblaApi.containerNode(), "focusout", startAutoplay);
			if (options.playOnInit) startAutoplay();
		}
		function destroy() {
			emblaApi.off("pointerDown", pointerDown).off("pointerUp", pointerUp).off("slideFocusStart", stopAutoplay);
			stopAutoplay();
			destroyed = true;
			autoplayActive = false;
		}
		function setTimer() {
			const { ownerWindow } = emblaApi.internalEngine();
			ownerWindow.clearTimeout(timerId);
			timerId = ownerWindow.setTimeout(next, delay[emblaApi.selectedScrollSnap()]);
			timerStartTime = (/* @__PURE__ */ new Date()).getTime();
			emblaApi.emit("autoplay:timerset");
		}
		function clearTimer() {
			const { ownerWindow } = emblaApi.internalEngine();
			ownerWindow.clearTimeout(timerId);
			timerId = 0;
			timerStartTime = null;
			emblaApi.emit("autoplay:timerstopped");
		}
		function startAutoplay() {
			if (destroyed) return;
			if (documentIsHidden()) {
				playOnDocumentVisible = true;
				return;
			}
			if (!autoplayActive) emblaApi.emit("autoplay:play");
			setTimer();
			autoplayActive = true;
		}
		function stopAutoplay() {
			if (destroyed) return;
			if (autoplayActive) emblaApi.emit("autoplay:stop");
			clearTimer();
			autoplayActive = false;
		}
		function visibilityChange() {
			if (documentIsHidden()) {
				playOnDocumentVisible = autoplayActive;
				return stopAutoplay();
			}
			if (playOnDocumentVisible) startAutoplay();
		}
		function documentIsHidden() {
			const { ownerDocument } = emblaApi.internalEngine();
			return ownerDocument.visibilityState === "hidden";
		}
		function pointerDown() {
			if (!mouseIsOver) stopAutoplay();
		}
		function pointerUp() {
			if (!mouseIsOver) startAutoplay();
		}
		function mouseEnter() {
			mouseIsOver = true;
			stopAutoplay();
		}
		function mouseLeave() {
			mouseIsOver = false;
			startAutoplay();
		}
		function play(jumpOverride) {
			if (typeof jumpOverride !== "undefined") jump = jumpOverride;
			startAutoplay();
		}
		function stop() {
			if (autoplayActive) stopAutoplay();
		}
		function reset() {
			if (autoplayActive) startAutoplay();
		}
		function isPlaying() {
			return autoplayActive;
		}
		function next() {
			const { index } = emblaApi.internalEngine();
			const nextIndex = index.clone().add(1).get();
			const lastIndex = emblaApi.scrollSnapList().length - 1;
			const kill = options.stopOnLastSnap && nextIndex === lastIndex;
			if (emblaApi.canScrollNext()) emblaApi.scrollNext(jump);
			else emblaApi.scrollTo(0, jump);
			emblaApi.emit("autoplay:select");
			if (kill) return stopAutoplay();
			startAutoplay();
		}
		function timeUntilNext() {
			if (!timerStartTime) return null;
			return delay[emblaApi.selectedScrollSnap()] - ((/* @__PURE__ */ new Date()).getTime() - timerStartTime);
		}
		return {
			name: "autoplay",
			options: userOptions,
			init,
			destroy,
			play,
			stop,
			reset,
			isPlaying,
			timeUntilNext
		};
	}
	Autoplay.globalOptions = void 0;
	//#endregion
	//#region node_modules/embla-carousel-fade/esm/embla-carousel-fade.esm.js
	function clampNumber(number, min, max) {
		return Math.min(Math.max(number, min), max);
	}
	function isNumber(value) {
		return typeof value === "number" && !isNaN(value);
	}
	function Fade(userOptions = {}) {
		const fullOpacity = 1;
		const noOpacity = 0;
		const fadeFriction = .68;
		let emblaApi;
		let opacities = [];
		let fadeToNextDistance;
		let distanceFromPointerDown = 0;
		let fadeVelocity = 0;
		let progress = 0;
		let shouldFadePair = false;
		let defaultSettledBehaviour;
		let defaultProgressBehaviour;
		function init(emblaApiInstance) {
			emblaApi = emblaApiInstance;
			const selectedSnap = emblaApi.selectedScrollSnap();
			const { scrollBody, containerRect, axis } = emblaApi.internalEngine();
			fadeToNextDistance = clampNumber(axis.measureSize(containerRect) * .75, 200, 500);
			shouldFadePair = false;
			opacities = emblaApi.scrollSnapList().map((_, index) => index === selectedSnap ? fullOpacity : noOpacity);
			defaultSettledBehaviour = scrollBody.settled;
			defaultProgressBehaviour = emblaApi.scrollProgress;
			scrollBody.settled = settled;
			emblaApi.scrollProgress = scrollProgress;
			emblaApi.on("select", select).on("slideFocus", fadeToSelectedSnapInstantly).on("pointerDown", pointerDown).on("pointerUp", pointerUp);
			disableScroll();
			fadeToSelectedSnapInstantly();
		}
		function destroy() {
			const { scrollBody } = emblaApi.internalEngine();
			scrollBody.settled = defaultSettledBehaviour;
			emblaApi.scrollProgress = defaultProgressBehaviour;
			emblaApi.off("select", select).off("slideFocus", fadeToSelectedSnapInstantly).off("pointerDown", pointerDown).off("pointerUp", pointerUp);
			emblaApi.slideNodes().forEach((slideNode) => {
				const slideStyle = slideNode.style;
				slideStyle.opacity = "";
				slideStyle.transform = "";
				slideStyle.pointerEvents = "";
				if (!slideNode.getAttribute("style")) slideNode.removeAttribute("style");
			});
		}
		function fadeToSelectedSnapInstantly() {
			setOpacities(emblaApi.selectedScrollSnap(), fullOpacity);
		}
		function pointerUp() {
			shouldFadePair = false;
		}
		function pointerDown() {
			shouldFadePair = false;
			distanceFromPointerDown = 0;
			fadeVelocity = 0;
		}
		function select() {
			const duration = emblaApi.internalEngine().scrollBody.duration();
			fadeVelocity = duration ? 0 : fullOpacity;
			shouldFadePair = true;
			if (!duration) fadeToSelectedSnapInstantly();
		}
		function getSlideTransform(position) {
			const { axis } = emblaApi.internalEngine();
			return `translate${axis.scroll.toUpperCase()}(${axis.direction(position)}px)`;
		}
		function disableScroll() {
			const { translate, slideLooper } = emblaApi.internalEngine();
			translate.clear();
			translate.toggleActive(false);
			slideLooper.loopPoints.forEach(({ translate }) => {
				translate.clear();
				translate.toggleActive(false);
			});
		}
		function lockExcessiveScroll(fadeIndex) {
			const { scrollSnaps, location, target } = emblaApi.internalEngine();
			if (!isNumber(fadeIndex) || opacities[fadeIndex] < .5) return;
			location.set(scrollSnaps[fadeIndex]);
			target.set(location);
		}
		function setOpacities(fadeIndex, velocity) {
			emblaApi.scrollSnapList().forEach((_, indexA) => {
				const absVelocity = Math.abs(velocity);
				const currentOpacity = opacities[indexA];
				const isFadeIndex = indexA === fadeIndex;
				const clampedOpacity = clampNumber(isFadeIndex ? currentOpacity + absVelocity : currentOpacity - absVelocity, noOpacity, fullOpacity);
				opacities[indexA] = clampedOpacity;
				const fadePair = isFadeIndex && shouldFadePair;
				const indexB = emblaApi.previousScrollSnap();
				if (fadePair) opacities[indexB] = 1 - clampedOpacity;
				if (isFadeIndex) setProgress(fadeIndex, clampedOpacity);
				setOpacity(indexA);
			});
		}
		function setOpacity(index) {
			const slidesInSnap = emblaApi.internalEngine().slideRegistry[index];
			const { scrollSnaps, containerRect } = emblaApi.internalEngine();
			const opacity = opacities[index];
			slidesInSnap.forEach((slideIndex) => {
				const slideStyle = emblaApi.slideNodes()[slideIndex].style;
				const roundedOpacity = parseFloat(opacity.toFixed(2));
				const hasOpacity = roundedOpacity > noOpacity;
				const transform = getSlideTransform(hasOpacity ? scrollSnaps[index] : containerRect.width + 2);
				if (hasOpacity) slideStyle.transform = transform;
				slideStyle.opacity = roundedOpacity.toString();
				slideStyle.pointerEvents = opacity > .5 ? "auto" : "none";
				if (!hasOpacity) slideStyle.transform = transform;
			});
		}
		function setProgress(fadeIndex, opacity) {
			const { index, dragHandler, scrollSnaps } = emblaApi.internalEngine();
			const pointerDown = dragHandler.pointerDown();
			const snapFraction = 1 / (scrollSnaps.length - 1);
			let indexA = fadeIndex;
			let indexB = pointerDown ? emblaApi.selectedScrollSnap() : emblaApi.previousScrollSnap();
			if (pointerDown && indexA === indexB) {
				const reverseSign = Math.sign(distanceFromPointerDown) * -1;
				indexA = indexB;
				indexB = index.clone().set(indexB).add(reverseSign).get();
			}
			progress = indexB * snapFraction + (indexA - indexB) * snapFraction * opacity;
		}
		function getFadeIndex() {
			const { dragHandler, index, scrollBody } = emblaApi.internalEngine();
			const selectedSnap = emblaApi.selectedScrollSnap();
			if (!dragHandler.pointerDown()) return selectedSnap;
			const directionSign = Math.sign(scrollBody.velocity());
			const distanceSign = Math.sign(distanceFromPointerDown);
			const nextSnap = index.clone().set(selectedSnap).add(directionSign * -1).get();
			if (!directionSign || !distanceSign) return null;
			return distanceSign === directionSign ? nextSnap : selectedSnap;
		}
		function fade(emblaApi) {
			const { dragHandler, scrollBody } = emblaApi.internalEngine();
			const pointerDown = dragHandler.pointerDown();
			const velocity = scrollBody.velocity();
			const duration = scrollBody.duration();
			const fadeIndex = getFadeIndex();
			const noFadeIndex = !isNumber(fadeIndex);
			if (pointerDown) {
				if (!velocity) return;
				distanceFromPointerDown += velocity;
				fadeVelocity = Math.abs(velocity / fadeToNextDistance);
				lockExcessiveScroll(fadeIndex);
			}
			if (!pointerDown) {
				if (!duration || noFadeIndex) return;
				fadeVelocity += (fullOpacity - opacities[fadeIndex]) / duration;
				fadeVelocity *= fadeFriction;
			}
			if (noFadeIndex) return;
			setOpacities(fadeIndex, fadeVelocity);
		}
		function settled() {
			const { target, location } = emblaApi.internalEngine();
			const diffToTarget = target.get() - location.get();
			const notReachedTarget = Math.abs(diffToTarget) >= 1;
			const fadeIndex = getFadeIndex();
			const noFadeIndex = !isNumber(fadeIndex);
			fade(emblaApi);
			if (noFadeIndex || notReachedTarget) return false;
			return opacities[fadeIndex] > .999;
		}
		function scrollProgress() {
			return progress;
		}
		return {
			name: "fade",
			options: userOptions,
			init,
			destroy
		};
	}
	Fade.globalOptions = void 0;
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/engine/index.js
	var DURATION_MIN = 12;
	var DURATION_MAX = 60;
	var MS_MIN = 100;
	var MS_MAX = 3e3;
	function msToEngineDuration(ms) {
		const parsed = Number(ms);
		const ratio = (Math.min(Math.max(Number.isFinite(parsed) ? parsed : MS_MIN, MS_MIN), MS_MAX) - MS_MIN) / (MS_MAX - MS_MIN);
		return Math.round(DURATION_MIN + ratio * (DURATION_MAX - DURATION_MIN));
	}
	var EVENT_MAP = {
		select: ["select"],
		settle: ["settle"],
		resize: ["resize"],
		structureChange: ["reInit"],
		autoplayStateChange: ["autoplay:play", "autoplay:stop"],
		pointerDown: ["pointerDown"],
		pointerUp: ["pointerUp"]
	};
	function buildAutoplayPlugin(autoplay, root) {
		return Autoplay({
			delay: Number(autoplay.delay) || 5e3,
			stopOnMouseEnter: false,
			stopOnInteraction: true,
			stopOnFocusIn: false,
			rootNode: () => root
		});
	}
	function buildPlugins({ autoplay, isFade, root }) {
		const plugins = [];
		if (autoplay) plugins.push(buildAutoplayPlugin(autoplay, root));
		if (isFade) plugins.push(Fade());
		return plugins;
	}
	function buildEmblaOptions({ loop, slidesToScroll, breakpoints, transitionSpeedMs, isFade, direction, draggable, instant, container }) {
		return {
			loop,
			align: "start",
			slidesToScroll: isFade ? 1 : Number(slidesToScroll) || 1,
			breakpoints,
			duration: instant ? 0 : msToEngineDuration(transitionSpeedMs),
			direction: "rtl" === direction ? "rtl" : "ltr",
			containScroll: isFade ? false : "trimSnaps",
			watchDrag: draggable,
			container,
			slides: SLIDE_SELECTOR
		};
	}
	function subscribeEngineEvent(embla, event, callback) {
		const names = EVENT_MAP[event];
		if (!names) return () => {};
		names.forEach((name) => embla.on(name, callback));
		return () => names.forEach((name) => embla.off(name, callback));
	}
	/**
	* @param {Object}      config
	* @param {HTMLElement} config.viewport          Node the engine measures and initialises on.
	* @param {HTMLElement} config.container         Inner slide track. Embla's default is the
	*                                               viewport's first child, which can be the editor overlay.
	*                                               Arrows and pagination are siblings of the viewport, not
	*                                               children of this track.
	* @param {HTMLElement} config.root              Carousel root, used to scope pointer and focus.
	* @param {boolean}     config.loop
	* @param {number}      config.slidesToScroll    Desktop value.
	* @param {Object}      config.breakpoints       Media query в†’ options, applied by the engine.
	* @param {number}      config.transitionSpeedMs
	* @param {string}      config.transition        `slide` or `fade`.
	* @param {string}      config.direction         `ltr` or `rtl`.
	* @param {boolean}     config.draggable
	* @param {boolean}     config.instant           Skip animation entirely (reduced motion).
	* @param {?Object}     config.autoplay          `{ delay }`, or
	*                                               null when autoplay is off.
	*/
	function createEngine({ viewport, container, root, loop = false, slidesToScroll = 1, breakpoints = {}, transitionSpeedMs = 600, transition = "slide", direction = "ltr", draggable = true, instant = false, autoplay = null }) {
		var _autoplayPlugin;
		const isFade = "fade" === transition;
		const plugins = buildPlugins({
			autoplay,
			isFade,
			root
		});
		const config = {
			loop,
			slidesToScroll,
			breakpoints,
			transitionSpeedMs,
			isFade,
			direction,
			draggable,
			instant,
			container
		};
		const embla = EmblaCarousel(viewport, buildEmblaOptions(config), plugins);
		const autoplayPlugin = () => {
			var _embla$plugins$autopl;
			var _embla$plugins;
			return (_embla$plugins$autopl = (_embla$plugins = embla.plugins()) === null || _embla$plugins === void 0 ? void 0 : _embla$plugins.autoplay) !== null && _embla$plugins$autopl !== void 0 ? _embla$plugins$autopl : null;
		};
		let playing = Boolean((_autoplayPlugin = autoplayPlugin()) === null || _autoplayPlugin === void 0 ? void 0 : _autoplayPlugin.isPlaying());
		const trackPlaying = (_api, eventName) => {
			playing = "autoplay:play" === eventName;
		};
		embla.on("autoplay:play", trackPlaying);
		embla.on("autoplay:stop", trackPlaying);
		return {
			next: () => embla.scrollNext(),
			prev: () => embla.scrollPrev(),
			goTo: (index) => embla.scrollTo(index),
			snapCount: () => embla.scrollSnapList().length,
			selectedSnap: () => embla.selectedScrollSnap(),
			/**
			* Map a slide node index to a snap that contains it.
			*
			* @param {number} slideIndex
			* @return {number} Snap index.
			*/
			snapIndexForSlide: (slideIndex) => {
				var _embla$internalEngine;
				const registry = (_embla$internalEngine = embla.internalEngine()) === null || _embla$internalEngine === void 0 ? void 0 : _embla$internalEngine.slideRegistry;
				const snapIndex = Array.isArray(registry) ? registry.findIndex((group) => group.includes(slideIndex)) : -1;
				if (snapIndex >= 0) return snapIndex;
				const last = Math.max(0, embla.scrollSnapList().length - 1);
				return Math.min(Math.max(0, slideIndex), last);
			},
			/**
			* First slide node index in a snap group.
			*
			* @param {number} snapIndex
			* @return {number} Slide index.
			*/
			slideIndexForSnap: (snapIndex) => {
				var _embla$internalEngine2;
				const group = (_embla$internalEngine2 = embla.internalEngine()) === null || _embla$internalEngine2 === void 0 || (_embla$internalEngine2 = _embla$internalEngine2.slideRegistry) === null || _embla$internalEngine2 === void 0 ? void 0 : _embla$internalEngine2[snapIndex];
				if (Array.isArray(group) && group.length) return group[0];
				return Math.max(0, snapIndex);
			},
			canPrev: () => embla.canScrollPrev(),
			canNext: () => embla.canScrollNext(),
			/**
			* Embla drops `loop` when the slides are too few to wrap, so the requested option can lie.
			*
			* @return {boolean} Whether the engine is looping right now.
			*/
			isLoop: () => {
				var _embla$internalEngine3;
				return Boolean((_embla$internalEngine3 = embla.internalEngine()) === null || _embla$internalEngine3 === void 0 || (_embla$internalEngine3 = _embla$internalEngine3.options) === null || _embla$internalEngine3 === void 0 ? void 0 : _embla$internalEngine3.loop);
			},
			/**
			* @param {string}   event    One of the keys of EVENT_MAP.
			* @param {Function} callback
			* @return {Function} Unsubscribe.
			*/
			on: (event, callback) => subscribeEngineEvent(embla, event, callback),
			play: () => {
				var _autoplayPlugin2;
				return (_autoplayPlugin2 = autoplayPlugin()) === null || _autoplayPlugin2 === void 0 ? void 0 : _autoplayPlugin2.play();
			},
			pause: () => {
				var _autoplayPlugin3;
				return (_autoplayPlugin3 = autoplayPlugin()) === null || _autoplayPlugin3 === void 0 ? void 0 : _autoplayPlugin3.stop();
			},
			isPlaying: () => playing,
			reinit: (overrides = {}) => {
				Object.assign(config, overrides);
				embla.reInit(buildEmblaOptions(config));
			},
			destroy: () => embla.destroy()
		};
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/engine-registry.js
	var ENGINE_PROPERTY = "__elementorProCarouselEngine";
	var engines = /* @__PURE__ */ new WeakMap();
	function setEngine(element, engine) {
		engines.set(element, engine);
		element[ENGINE_PROPERTY] = engine;
	}
	function clearEngine(element) {
		engines.delete(element);
		delete element[ENGINE_PROPERTY];
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/keyboard.js
	function mapNavigationKey({ key, direction }) {
		const rtl = "rtl" === direction;
		if ("Home" === key) return "first";
		if ("End" === key) return "last";
		if ("ArrowLeft" === key) return rtl ? "next" : "prev";
		if ("ArrowRight" === key) return rtl ? "prev" : "next";
		return null;
	}
	var CAROUSEL_TYPE = "e-carousel";
	var CHROME_SELECTOR = [
		`[data-e-type="${TYPE.prev}"]`,
		`[data-e-type="${TYPE.next}"]`,
		`[data-e-type="${TYPE.pagination}"]`,
		`[data-e-type="${TYPE.autoplayControls}"]`
	].join(", ");
	var WIDGET_SKIP_SELECTOR = [
		"input",
		"textarea",
		"select",
		"[contenteditable]:not([contenteditable=\"false\"])",
		"[role=\"slider\"]",
		"[role=\"spinbutton\"]",
		"[role=\"listbox\"]",
		"[role=\"menu\"]",
		"[role=\"menubar\"]",
		"[role=\"radiogroup\"]",
		"[role=\"combobox\"]",
		"[role=\"grid\"]",
		"[role=\"tablist\"]",
		"[role=\"tree\"]"
	].join(", ");
	var INTERACTIVE_SELECTOR = "a[href], button, summary, audio, video, iframe, [tabindex]:not([tabindex=\"-1\"])";
	function shouldHandleCarouselKeys(root, event) {
		if (event.defaultPrevented) return false;
		const target = event.target;
		if (!isElementNode(target) || !root.contains(target)) return false;
		if (target.closest(`[data-e-type="${CAROUSEL_TYPE}"]`) !== root) return false;
		if (target.closest(WIDGET_SKIP_SELECTOR)) return false;
		if (target.closest(CHROME_SELECTOR)) return true;
		const interactive = target.closest(INTERACTIVE_SELECTOR);
		if (interactive && !interactive.closest(CHROME_SELECTOR)) return false;
		return true;
	}
	function initKeyboard({ root, engine, isEditor = false }) {
		if (isEditor) return () => {};
		const onKeyDown = (event) => {
			if (!shouldHandleCarouselKeys(root, event)) return;
			const action = mapNavigationKey({
				key: event.key,
				direction: documentDirection(root)
			});
			if (!action) return;
			const snapCount = engine.snapCount();
			if (snapCount <= 1) return;
			event.preventDefault();
			event.stopPropagation();
			if ("prev" === action) engine.prev();
			else if ("next" === action) engine.next();
			else if ("first" === action) engine.goTo(0);
			else engine.goTo(snapCount - 1);
		};
		root.addEventListener("keydown", onKeyDown);
		return () => root.removeEventListener("keydown", onKeyDown);
	}
	var VISIBILITY_TOLERANCE = .5;
	function isFullyInView(slide, viewport) {
		if (!viewport) return false;
		const bounds = viewport.getBoundingClientRect();
		if (!bounds.width) return false;
		const rect = slide.getBoundingClientRect();
		const left = rect.left + viewport.scrollLeft;
		const right = rect.right + viewport.scrollLeft;
		return left >= bounds.left - VISIBILITY_TOLERANCE && right <= bounds.right + VISIBILITY_TOLERANCE;
	}
	function initFocusFollow({ container, viewport = null, engine, isEditor = false, isFade = false }) {
		if (isEditor || !container) return () => {};
		const resetNativeScroll = () => {
			if (viewport == null ? void 0 : viewport.scrollLeft) viewport.scrollLeft = 0;
		};
		const onFocusIn = (event) => {
			const slideNodes = slides(container);
			const slideIndex = slideNodes.findIndex((node) => node.contains(event.target));
			if (slideIndex < 0) return;
			const inView = !isFade && isFullyInView(slideNodes[slideIndex], viewport);
			resetNativeScroll();
			if (inView) return;
			const snapCount = engine.snapCount();
			if (snapCount <= 1) return;
			const snapIndex = engine.snapIndexForSlide(slideIndex);
			if (snapIndex === engine.selectedSnap()) return;
			engine.goTo(Math.min(snapIndex, snapCount - 1));
		};
		container.addEventListener("focusin", onFocusIn);
		viewport == null || viewport.addEventListener("scroll", resetNativeScroll);
		return () => {
			container.removeEventListener("focusin", onFocusIn);
			viewport == null || viewport.removeEventListener("scroll", resetNativeScroll);
		};
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/labels.js
	/**
	* @param {HTMLElement} container
	* @param {HTMLElement} root
	*/
	function labelSlides(container, root) {
		const all = slides(container);
		const labels = readCarouselLabels(root);
		const roleDescription = labels.slide_roledescription || "";
		const positionTemplate = labels.slide_position || "";
		all.forEach((slide, index) => {
			ensureSlideId(slide);
			slide.setAttribute("role", "group");
			if (roleDescription) slide.setAttribute("aria-roledescription", roleDescription);
			if (positionTemplate) slide.setAttribute("aria-label", formatLabel(positionTemplate, index + 1, all.length));
		});
	}
	/**
	* @param {Object}      config
	* @param {HTMLElement} config.container
	* @param {HTMLElement} config.root
	* @param {Object}      config.engine
	* @return {Function} Unsubscribe.
	*/
	function initLabels({ container, root, engine }) {
		const refresh = () => labelSlides(container, root);
		refresh();
		const offStructureChange = engine.on("structureChange", refresh);
		return () => offStructureChange();
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/nav.js
	var DISABLED_CLASS = "e--disabled";
	function initNav({ engine, prevBtn, nextBtn }) {
		if (!prevBtn && !nextBtn) return () => {};
		const clearDisabledClass = (btn) => {
			btn == null || btn.classList.remove(DISABLED_CLASS);
		};
		const setDisabledClass = (btn, disabled) => {
			if (!btn) return;
			btn.classList.toggle(DISABLED_CLASS, disabled);
		};
		const sync = () => {
			const everythingVisible = engine.snapCount() <= 1;
			setHidden(prevBtn, everythingVisible);
			setHidden(nextBtn, everythingVisible);
			if (everythingVisible) {
				clearDisabledClass(prevBtn);
				clearDisabledClass(nextBtn);
				return;
			}
			const atStart = !engine.canPrev();
			const atEnd = !engine.canNext();
			if (prevBtn) {
				prevBtn.setAttribute("aria-disabled", atStart ? "true" : "false");
				setDisabledClass(prevBtn, atStart);
			}
			if (nextBtn) {
				nextBtn.setAttribute("aria-disabled", atEnd ? "true" : "false");
				setDisabledClass(nextBtn, atEnd);
			}
		};
		const onPrevClick = (event) => {
			if ("true" === (prevBtn == null ? void 0 : prevBtn.getAttribute("aria-disabled"))) {
				event.preventDefault();
				return;
			}
			engine.prev();
		};
		const onNextClick = (event) => {
			if ("true" === (nextBtn == null ? void 0 : nextBtn.getAttribute("aria-disabled"))) {
				event.preventDefault();
				return;
			}
			engine.next();
		};
		prevBtn == null || prevBtn.addEventListener("click", onPrevClick);
		nextBtn == null || nextBtn.addEventListener("click", onNextClick);
		const offSelect = engine.on("select", sync);
		const offStructureChange = engine.on("structureChange", sync);
		const offResize = engine.on("resize", sync);
		sync();
		return () => {
			prevBtn == null || prevBtn.removeEventListener("click", onPrevClick);
			nextBtn == null || nextBtn.removeEventListener("click", onNextClick);
			clearDisabledClass(prevBtn);
			clearDisabledClass(nextBtn);
			offSelect();
			offStructureChange();
			offResize();
		};
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/carousel-handler.js
	var __defProp = Object.defineProperty;
	var __defProps = Object.defineProperties;
	var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __spreadValues = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		if (__getOwnPropSymbols) {
			for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		}
		return a;
	};
	var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
	var isStylesheetNode = (node) => {
		var _a;
		return ["STYLE", "LINK"].includes(node == null ? void 0 : node.nodeName) || "STYLE" === ((_a = node == null ? void 0 : node.parentNode) == null ? void 0 : _a.nodeName);
	};
	(0, _elementor_frontend_handlers.register)({
		elementType: "e-carousel",
		id: "e-carousel-handler",
		callback: ({ element, settings, listenToChildren }) => {
			const doc = element.ownerDocument;
			const win = doc.defaultView;
			const viewport = child(element, TYPE.viewport);
			const container = child(viewport, TYPE.container);
			if (!viewport || !container) return;
			let track = ensureSlideTrack(container);
			const isEditor = isEditorPreview(win);
			const reducedMotion = prefersReducedMotion(win);
			publishGap(element, container, win);
			disableSlideTransformTransition(container);
			const autoplayEnabled = !isEditor && !reducedMotion && Boolean(settings.autoplay);
			const direction = documentDirection(element);
			const engine = createEngine(__spreadProps(__spreadValues({
				viewport,
				container: track,
				root: element,
				loop: Boolean(settings.loop)
			}, slidesToScrollOptions(settings, win)), {
				transitionSpeedMs: settings.transition_speed,
				transition: settings.transition_type,
				direction,
				draggable: !isEditor,
				instant: reducedMotion || "none" === settings.transition_type,
				autoplay: autoplayEnabled ? { delay: settings.autoplay_delay } : null
			}));
			setEngine(element, engine);
			const prevBtn = child(element, TYPE.prev);
			const nextBtn = child(element, TYPE.next);
			const pagination = child(element, TYPE.pagination);
			const teardown = [];
			teardown.push(initNav({
				engine,
				prevBtn,
				nextBtn
			}));
			teardown.push(initDots({
				root: element,
				engine,
				pagination,
				container,
				isEditor,
				win
			}));
			teardown.push(initLabels({
				container,
				root: element,
				engine
			}));
			teardown.push(initKeyboard({
				root: element,
				engine,
				isEditor
			}));
			teardown.push(initFocusFollow({
				container,
				viewport,
				engine,
				isEditor,
				isFade: "fade" === settings.transition_type
			}));
			const autoplay = initAutoplay({
				root: element,
				container,
				engine,
				autoplayEnabled,
				pauseOnHover: false !== settings.pause_on_hover,
				pauseOnInteraction: false !== settings.pause_on_interaction
			});
			const autoplayControls = child(element, TYPE.autoplayControls);
			teardown.push(initAutoplayControls({
				root: element,
				controls: autoplayControls,
				playButton: child(autoplayControls, TYPE.autoplayPlay),
				pauseButton: child(autoplayControls, TYPE.autoplayPause),
				controller: autoplay,
				engine,
				autoplayEnabled,
				showAutoplayButton: true === settings.show_autoplay_button,
				isEditor
			}));
			teardown.push(autoplay.destroy);
			const syncLayout = () => {
				disableSlideTransformTransition(container);
				if (publishGap(element, container, win)) engine.reinit();
			};
			const offStructureChange = engine.on("structureChange", syncLayout);
			let styleSyncFrame = null;
			const scheduleStyleSync = () => {
				if (null === styleSyncFrame) styleSyncFrame = win.requestAnimationFrame(() => {
					styleSyncFrame = null;
					syncLayout();
				});
			};
			const styleObserver = isEditor ? new MutationObserver((mutations) => {
				let stylesChanged = false;
				mutations.forEach(({ target, addedNodes, removedNodes }) => {
					addedNodes.forEach((node) => {
						if ("LINK" === node.nodeName) node.addEventListener("load", scheduleStyleSync, { once: true });
					});
					stylesChanged || (stylesChanged = isStylesheetNode(target) || [...addedNodes, ...removedNodes].some(isStylesheetNode));
				});
				if (stylesChanged) scheduleStyleSync();
			}) : null;
			styleObserver == null || styleObserver.observe(doc.head, {
				childList: true,
				subtree: true,
				characterData: true
			});
			let childRenderFrame = null;
			const adoptRenderedSlides = () => {
				childRenderFrame = null;
				track = ensureSlideTrack(container);
				engine.reinit({ container: track });
			};
			if (isEditor) listenToChildren == null || listenToChildren([TYPE.slide, TYPE.container]).render((event) => {
				var _a;
				var _b;
				var _c;
				if (((_c = (_b = (_a = event == null ? void 0 : event.detail) == null ? void 0 : _a.element) == null ? void 0 : _b.closest) == null ? void 0 : _c.call(_b, `[data-e-type="e-carousel"]`)) !== element) return;
				if (null === childRenderFrame) childRenderFrame = win.requestAnimationFrame(adoptRenderedSlides);
			});
			return () => {
				offStructureChange();
				styleObserver == null || styleObserver.disconnect();
				if (null !== childRenderFrame) win.cancelAnimationFrame(childRenderFrame);
				if (null !== styleSyncFrame) win.cancelAnimationFrame(styleSyncFrame);
				teardown.forEach((off) => off());
				clearEngine(element);
				engine.destroy();
			};
		}
	});
	//#endregion
})(elementorV2.frontendHandlers);

//# sourceMappingURL=carousel-handler.js.map
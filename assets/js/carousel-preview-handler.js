/*! pro-elements - v4.4.0 - 09-11-2026 */
(function(_elementor_frontend_handlers) {
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/engine-registry.js
	var ENGINE_PROPERTY = "__elementorProCarouselEngine";
	var engines = /* @__PURE__ */ new WeakMap();
	function getEngine(element) {
		var _a;
		return (_a = element == null ? void 0 : element[ENGINE_PROPERTY]) != null ? _a : engines.get(element);
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
	var CHROME_TYPES = [
		TYPE.prev,
		TYPE.next,
		TYPE.pagination,
		TYPE.dot,
		TYPE.autoplayControls,
		TYPE.autoplayPlay,
		TYPE.autoplayPause
	];
	var child = (root, type) => root === null || root === void 0 ? void 0 : root.querySelector(`:scope > [data-e-type="${type}"]`);
	var slideTrack = (container) => {
		var _container$querySelec;
		return (_container$querySelec = container === null || container === void 0 ? void 0 : container.querySelector(`:scope > .e-carousel__track`)) !== null && _container$querySelec !== void 0 ? _container$querySelec : null;
	};
	var SLIDE_MATCHERS = [`[data-e-type="${TYPE.slide}"]`, "[data-model-cid]"];
	SLIDE_MATCHERS.map((matcher) => `:scope > ${matcher}`).join(", ");
	var isSlideNode = (node) => 1 === (node === null || node === void 0 ? void 0 : node.nodeType) && node.matches(SLIDE_MATCHERS.join(", "));
	var slides = (container) => {
		var _parent$children;
		const parent = slideTrack(container) || container;
		return Array.from((_parent$children = parent === null || parent === void 0 ? void 0 : parent.children) !== null && _parent$children !== void 0 ? _parent$children : []).filter(isSlideNode);
	};
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
	/**
	* Closest arrow, pagination or autoplay control of this carousel, or null when the node is a nested
	* carousel's control or not chrome at all.
	*
	* @param {?EventTarget} target
	* @param {HTMLElement}  carousel
	* @return {?HTMLElement} Chrome element.
	*/
	function closestCarouselChrome(target, carousel) {
		if (!isElementNode(target) || !carousel) return null;
		const chrome = target.closest(CHROME_TYPES.map((type) => `[data-e-type="${type}"]`).join(","));
		if (!chrome || !carousel.contains(chrome)) return null;
		if (chrome.closest(`[data-e-type="e-carousel"]`) !== carousel) return null;
		return chrome;
	}
	//#endregion
	//#region modules/atomic-carousel/assets/js/frontend/carousel-preview-handler.js
	var SLIDE_TYPE = TYPE.slide;
	var CAROUSEL_TYPE = "e-carousel";
	var SELECT_COMMAND = "document/elements/select";
	var COMMAND_RUN_AFTER_EVENT = "elementor/commands/run/after";
	var POINTER_DRAG_SUPPRESS_PX = 5;
	var EDITOR_STYLE_ID = "e-carousel-editor-style";
	var EMPTY_BUTTON_MIN_WIDTH = "40px";
	var BUTTON_TYPES = [
		TYPE.prev,
		TYPE.next,
		TYPE.autoplayPlay,
		TYPE.autoplayPause
	];
	var ROOT_AUTOPLAY_PAUSED_CLASS = "e-carousel--autoplay-paused";
	var EDITOR_CSS = `
[data-e-type="${TYPE.pagination}"] > [data-e-carousel-dot]:hover {
	outline: 1px solid var(--e-p-border-con);
	outline-offset: 2px;
}
[data-e-type="${TYPE.pagination}"] > .elementor-element-editable ~ [data-e-carousel-dot] {
	outline: 2px solid var(--e-p-border-con);
	outline-offset: 2px;
}
${BUTTON_TYPES.map((type) => `:where([data-e-type="${type}"]):has(> .elementor-empty-view)`).join(",\n")} {
	min-width: ${EMPTY_BUTTON_MIN_WIDTH};
}
.e-carousel__arrow.e-con > .elementor-element-overlay > .elementor-editor-element-settings {
	top: auto;
	bottom: 100%;
}
${[
		"e-carousel__autoplay-controls",
		"e-carousel__autoplay-play",
		"e-carousel__autoplay-pause"
	].map((name) => `.${name}.e-con > .elementor-element-overlay > .elementor-editor-element-settings`).join(",\n")} {
	top: 100%;
	bottom: auto;
}`;
	/**
	* Editor canvas drags must not be treated as slide taps or selection-driven navigation.
	*
	* @param {HTMLElement}      root
	* @param {AbortSignal|null} signal
	* @return {{ shouldSuppressSlideNavigation: () => boolean }} Guard API; `shouldSuppressSlideNavigation` is true while the current pointer gesture should block slide navigation.
	*/
	function bindPointerDragGuard(root, signal) {
		let dragStart = null;
		let suppressSlideNavigation = false;
		const onPointerDown = (event) => {
			dragStart = {
				x: event.clientX,
				y: event.clientY
			};
			suppressSlideNavigation = false;
		};
		const onPointerMove = (event) => {
			if (!dragStart || suppressSlideNavigation) return;
			const dx = event.clientX - dragStart.x;
			const dy = event.clientY - dragStart.y;
			if (Math.hypot(dx, dy) > POINTER_DRAG_SUPPRESS_PX) suppressSlideNavigation = true;
		};
		const resetGesture = () => {
			if (suppressSlideNavigation) requestAnimationFrame(() => {
				suppressSlideNavigation = false;
			});
			dragStart = null;
		};
		root.addEventListener("pointerdown", onPointerDown, {
			capture: true,
			signal
		});
		root.addEventListener("pointermove", onPointerMove, {
			capture: true,
			signal
		});
		root.addEventListener("pointerup", resetGesture, {
			capture: true,
			signal
		});
		root.addEventListener("pointercancel", resetGesture, {
			capture: true,
			signal
		});
		return { shouldSuppressSlideNavigation: () => suppressSlideNavigation };
	}
	/**
	* @param {Document} doc
	*/
	function ensureEditorStyle(doc) {
		if (doc.getElementById(EDITOR_STYLE_ID)) return;
		const style = doc.createElement("style");
		style.id = EDITOR_STYLE_ID;
		style.textContent = EDITOR_CSS;
		doc.head.appendChild(style);
	}
	/**
	* The controls' Playing/Paused style states preview the States value. The root's class comes from
	* Twig and is left alone; it is mirrored onto the controls as `e--playing` / `e--paused`.
	*
	* @param {HTMLElement} carousel
	*/
	function syncEditorAutoplayControlsState(carousel) {
		const controls = child(carousel, TYPE.autoplayControls);
		if (!controls) return;
		const paused = carousel.classList.contains(ROOT_AUTOPLAY_PAUSED_CLASS);
		controls.classList.toggle("e--paused", paused);
		controls.classList.toggle("e--playing", !paused);
	}
	/**
	* The arrow, pagination or autoplay control when the click lands on it, not on an element placed
	* inside it: the SVG in an arrow or play/pause button is the user's own element and keeps its own
	* selection.
	*
	* @param {EventTarget} target
	* @param {HTMLElement} carousel
	* @return {?HTMLElement} Chrome to select.
	*/
	function chromeHitDirectly(target, carousel) {
		const chrome = closestCarouselChrome(target, carousel);
		if (!(chrome === null || chrome === void 0 ? void 0 : chrome.dataset.id)) return null;
		return target.closest("[data-id]") === chrome ? chrome : null;
	}
	/**
	* @param {HTMLElement} carousel
	* @param {HTMLElement} slide
	* @return {number} Zero-based slide index, or -1 when not found.
	*/
	function getSlideIndex(carousel, slide) {
		const container = child(child(carousel, TYPE.viewport), TYPE.container);
		if (!container) return -1;
		return slides(container).indexOf(slide);
	}
	/**
	* @param {HTMLElement} carousel
	* @param {string}      elementId
	* @return {?HTMLElement} Matching slide element, or null when not found.
	*/
	function getSlideById(carousel, elementId) {
		var _slides$find;
		const container = child(child(carousel, TYPE.viewport), TYPE.container);
		if (!container) return null;
		return (_slides$find = slides(container).find((node) => node.dataset.id === elementId)) !== null && _slides$find !== void 0 ? _slides$find : null;
	}
	/**
	* Dot clicks with a document prototype select that element immediately and set pending for the
	* pagination race (the clone has no `data-id`, so the editor may still select pagination).
	* Redirect pagination to the prototype only inside PENDING_DOT_REDIRECT_MS so a later
	* Structure в†’ Pagination select is not hijacked. Navigator or structure races in between
	* must not drop pending while the window is open.
	*
	* @param {?{prototypeId: string, paginationId: string, setAt: number}} pending
	* @param {?string}                                                     selectedId
	* @param {number}                                                      [now]
	* @param {boolean}                                                     [isCarouselSlide]
	* @return {{ pending: ?{prototypeId: string, paginationId: string, setAt: number}, selectId: ?string }} Resolved pending state and editor select target.
	*/
	function resolvePendingDotSelection(pending, selectedId, now = Date.now(), isCarouselSlide = false) {
		if (!pending) return {
			pending: null,
			selectId: null
		};
		if (now - pending.setAt > 500) return {
			pending: null,
			selectId: null
		};
		if (selectedId === pending.prototypeId) return {
			pending: null,
			selectId: null
		};
		if (selectedId === pending.paginationId && selectedId !== pending.prototypeId) return {
			pending: null,
			selectId: pending.prototypeId
		};
		if (isCarouselSlide) return {
			pending: null,
			selectId: pending.prototypeId
		};
		return {
			pending,
			selectId: null
		};
	}
	/**
	* @param {string} elementId
	*/
	function selectElement(elementId) {
		var _parent$elementor;
		var _parent$elementor$get;
		var _parent$$e;
		var _parent$$e$run;
		const parent = window.parent;
		const container = parent === null || parent === void 0 || (_parent$elementor = parent.elementor) === null || _parent$elementor === void 0 || (_parent$elementor$get = _parent$elementor.getContainer) === null || _parent$elementor$get === void 0 ? void 0 : _parent$elementor$get.call(_parent$elementor, elementId);
		if (!container) return;
		(_parent$$e = parent.$e) === null || _parent$$e === void 0 || (_parent$$e$run = _parent$$e.run) === null || _parent$$e$run === void 0 || _parent$$e$run.call(_parent$$e, SELECT_COMMAND, { container });
	}
	/**
	* `$e.run( 'document/elements/select' )` args are `{ container }` or `{ containers }`, not an
	* array. Prefer the command args on run/after so the handler sees the selection that just ran.
	*
	* @param {?Object} args
	* @return {?string} Selected element id.
	*/
	function getSelectedElementId(args) {
		var _ref;
		var _args$container$id;
		var _args$container;
		var _args$containers;
		var _window$parent$elemen;
		var _window$parent;
		var _window$parent$getEle;
		var _selected$model$get;
		var _selected$model;
		var _selected$model$get2;
		const fromArgs = (_ref = (_args$container$id = args === null || args === void 0 || (_args$container = args.container) === null || _args$container === void 0 ? void 0 : _args$container.id) !== null && _args$container$id !== void 0 ? _args$container$id : args === null || args === void 0 || (_args$containers = args.containers) === null || _args$containers === void 0 || (_args$containers = _args$containers[0]) === null || _args$containers === void 0 ? void 0 : _args$containers.id) !== null && _ref !== void 0 ? _ref : null;
		if (fromArgs) return fromArgs;
		const [selected] = (_window$parent$elemen = (_window$parent = window.parent) === null || _window$parent === void 0 || (_window$parent = _window$parent.elementor) === null || _window$parent === void 0 || (_window$parent = _window$parent.selection) === null || _window$parent === void 0 || (_window$parent$getEle = _window$parent.getElements) === null || _window$parent$getEle === void 0 ? void 0 : _window$parent$getEle.call(_window$parent)) !== null && _window$parent$elemen !== void 0 ? _window$parent$elemen : [];
		return (_selected$model$get = selected === null || selected === void 0 || (_selected$model = selected.model) === null || _selected$model === void 0 || (_selected$model$get2 = _selected$model.get) === null || _selected$model$get2 === void 0 ? void 0 : _selected$model$get2.call(_selected$model, "id")) !== null && _selected$model$get !== void 0 ? _selected$model$get : null;
	}
	/**
	* Drive Embla to the snap that contains the slide. Native overflow scrolling fought the engine
	* when the canvas used a flattened strip; with a live track, `goTo` is enough.
	*
	* @param {HTMLElement} carousel
	* @param {HTMLElement} slide
	*/
	function navigateToSlide(carousel, slide) {
		const engine = getEngine(carousel);
		const index = getSlideIndex(carousel, slide);
		if (engine && index >= 0) {
			engine.goTo(engine.snapIndexForSlide(index));
			return;
		}
		slide.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	}
	(0, _elementor_frontend_handlers.register)({
		elementType: CAROUSEL_TYPE,
		id: "e-carousel-preview-handler",
		callback: ({ element, signal, listenToChildren }) => {
			var _window$parent2;
			var _window$parent3;
			const dragGuard = bindPointerDragGuard(element, signal);
			ensureEditorStyle(element.ownerDocument);
			syncEditorAutoplayControlsState(element);
			listenToChildren === null || listenToChildren === void 0 || listenToChildren([TYPE.autoplayControls]).render((event) => {
				var _event$detail;
				var _event$detail$closest;
				if ((event === null || event === void 0 || (_event$detail = event.detail) === null || _event$detail === void 0 || (_event$detail = _event$detail.element) === null || _event$detail === void 0 || (_event$detail$closest = _event$detail.closest) === null || _event$detail$closest === void 0 ? void 0 : _event$detail$closest.call(_event$detail, `[data-e-type="${CAROUSEL_TYPE}"]`)) !== element) return;
				syncEditorAutoplayControlsState(element);
			});
			const goToSlide = (slideElement) => {
				if (!slideElement) return;
				navigateToSlide(element, slideElement);
			};
			const onNavigatorClick = (event) => {
				var _event$detail2;
				const { id, type } = (_event$detail2 = event.detail) !== null && _event$detail2 !== void 0 ? _event$detail2 : {};
				if (SLIDE_TYPE !== type || !id) return;
				const slide = getSlideById(element, id);
				goToSlide(slide);
			};
			let pendingDotSelection = null;
			const onCommandRunAfter = (event) => {
				var _event$detail3;
				const { command, args } = (_event$detail3 = event.detail) !== null && _event$detail3 !== void 0 ? _event$detail3 : {};
				if (SELECT_COMMAND !== command) return;
				const selectedId = getSelectedElementId(args);
				const isCarouselSlide = Boolean(selectedId && getSlideById(element, selectedId));
				const resolved = resolvePendingDotSelection(pendingDotSelection, selectedId, Date.now(), isCarouselSlide);
				pendingDotSelection = resolved.pending;
				if (resolved.selectId) {
					selectElement(resolved.selectId);
					return;
				}
				if (!selectedId) return;
				const slide = getSlideById(element, selectedId);
				if (!slide || dragGuard.shouldSuppressSlideNavigation()) return;
				goToSlide(slide);
			};
			const onSlideClick = (event) => {
				if (dragGuard.shouldSuppressSlideNavigation()) return;
				const slide = event.target.closest(`[data-e-type="${SLIDE_TYPE}"]`);
				if (!slide || !element.contains(slide)) return;
				goToSlide(slide);
			};
			const onChromeClick = (event) => {
				if (event.target.closest("[data-e-carousel-dot]")) return;
				const chrome = chromeHitDirectly(event.target, element);
				if (chrome) selectElement(chrome.dataset.id);
			};
			const onDotClick = (event) => {
				const clone = event.target.closest("[data-e-carousel-dot]");
				if (!clone || !element.contains(clone)) return;
				const pagination = clone.closest(`[data-e-type="${TYPE.pagination}"]`);
				if (!(pagination === null || pagination === void 0 ? void 0 : pagination.dataset.id)) return;
				const documentPrototype = pagination.querySelector(`[data-e-type="${TYPE.dot}"][data-id]`);
				if (documentPrototype === null || documentPrototype === void 0 ? void 0 : documentPrototype.dataset.id) {
					pendingDotSelection = {
						prototypeId: documentPrototype.dataset.id,
						paginationId: pagination.dataset.id,
						setAt: Date.now()
					};
					selectElement(documentPrototype.dataset.id);
					return;
				}
				if (!pagination.querySelector("[data-e-carousel-dot-fallback]")) return;
				event.preventDefault();
				event.stopPropagation();
				const snapIndex = Number(clone.getAttribute("data-e-carousel-dot"));
				if (Number.isFinite(snapIndex)) {
					var _getEngine;
					(_getEngine = getEngine(element)) === null || _getEngine === void 0 || _getEngine.goTo(snapIndex);
				}
			};
			(_window$parent2 = window.parent) === null || _window$parent2 === void 0 || _window$parent2.addEventListener("elementor/navigator/item/click", onNavigatorClick, { signal });
			(_window$parent3 = window.parent) === null || _window$parent3 === void 0 || _window$parent3.addEventListener(COMMAND_RUN_AFTER_EVENT, onCommandRunAfter, { signal });
			element.addEventListener("click", onDotClick, {
				signal,
				capture: true
			});
			element.addEventListener("click", onChromeClick, {
				signal,
				capture: true
			});
			element.addEventListener("click", onSlideClick, {
				signal,
				capture: true
			});
			signal === null || signal === void 0 || signal.addEventListener("abort", () => {
				pendingDotSelection = null;
			});
		}
	});
	//#endregion
})(elementorV2.frontendHandlers);

//# sourceMappingURL=carousel-preview-handler.js.map
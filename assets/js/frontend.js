/*! pro-elements - v4.3.0 - 22-09-2026 */
(function() {
	//#region \0rolldown/runtime.js
	var __defProp$1 = Object.defineProperty;
	var __name = (target, value) => __defProp$1(target, "name", {
		value,
		configurable: true
	});
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp$1(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$1(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	//#endregion
	//#region assets/dev/js/public-path.js
	__webpack_public_path__ = ElementorProFrontendConfig.urls.assets + "js/";
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/typeof.js
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPrimitive.js
	function toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/defineProperty.js
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	//#endregion
	//#region modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js
	var base_default = class extends elementorModules.ViewModule {
		static {
			__name(this, "default");
		}
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "onInsideViewport", () => {
				this.run();
				this.animationFrameRequest = requestAnimationFrame(this.onInsideViewport);
			});
		}
		__construct(options) {
			this.motionFX = options.motionFX;
			if (!this.intersectionObservers) this.setElementInViewportObserver();
		}
		setElementInViewportObserver() {
			this.intersectionObserver = elementorModules.utils.Scroll.scrollObserver({ callback: (event) => {
				if (event.isInViewport) this.onInsideViewport();
				else this.removeAnimationFrameRequest();
			} });
			const observedElement = "page" === this.motionFX.getSettings("range") ? elementorFrontend.elements.$body[0] : this.motionFX.elements.$parent[0];
			this.intersectionObserver.observe(observedElement);
		}
		runCallback(...args) {
			this.getSettings("callback")(...args);
		}
		removeIntersectionObserver() {
			if (this.intersectionObserver) this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0]);
		}
		removeAnimationFrameRequest() {
			if (this.animationFrameRequest) cancelAnimationFrame(this.animationFrameRequest);
		}
		destroy() {
			this.removeAnimationFrameRequest();
			this.removeIntersectionObserver();
		}
		onInit() {
			super.onInit();
		}
	};
	//#endregion
	//#region modules/motion-fx/assets/js/frontend/motion-fx/interactions/scroll.js
	var scroll_default = class extends base_default {
		static {
			__name(this, "default");
		}
		run() {
			if (pageYOffset === this.windowScrollTop) return false;
			this.onScrollMovement();
			this.windowScrollTop = pageYOffset;
		}
		onScrollMovement() {
			this.updateMotionFxDimensions();
			this.updateAnimation();
			this.resetTransitionVariable();
		}
		resetTransitionVariable() {
			this.motionFX.$element.css("--e-transform-transition-duration", "100ms");
		}
		updateMotionFxDimensions() {
			if (this.motionFX.getSettings().refreshDimensions) this.motionFX.defineDimensions();
		}
		updateAnimation() {
			let passedRangePercents;
			if ("page" === this.motionFX.getSettings("range")) passedRangePercents = elementorModules.utils.Scroll.getPageScrollPercentage();
			else if (this.motionFX.getSettings("isFixedPosition")) passedRangePercents = elementorModules.utils.Scroll.getPageScrollPercentage({}, window.innerHeight);
			else passedRangePercents = elementorModules.utils.Scroll.getElementViewportPercentage(this.motionFX.elements.$parent);
			this.runCallback(passedRangePercents);
		}
	};
	//#endregion
	//#region modules/motion-fx/assets/js/frontend/motion-fx/interactions/mouse-move.js
	var MouseMoveInteraction = class MouseMoveInteraction extends base_default {
		bindEvents() {
			if (!MouseMoveInteraction.mouseTracked) {
				elementorFrontend.elements.$window.on("mousemove", MouseMoveInteraction.updateMousePosition);
				MouseMoveInteraction.mouseTracked = true;
			}
		}
		run() {
			const mousePosition = MouseMoveInteraction.mousePosition;
			const oldMousePosition = this.oldMousePosition;
			if (oldMousePosition.x === mousePosition.x && oldMousePosition.y === mousePosition.y) return;
			this.oldMousePosition = {
				x: mousePosition.x,
				y: mousePosition.y
			};
			const passedPercentsX = 100 / innerWidth * mousePosition.x;
			const passedPercentsY = 100 / innerHeight * mousePosition.y;
			this.runCallback(passedPercentsX, passedPercentsY);
		}
		onInit() {
			this.oldMousePosition = {};
			super.onInit();
		}
	};
	MouseMoveInteraction.mousePosition = {};
	MouseMoveInteraction.updateMousePosition = (event) => {
		MouseMoveInteraction.mousePosition = {
			x: event.clientX,
			y: event.clientY
		};
	};
	//#endregion
	//#region modules/motion-fx/assets/js/frontend/motion-fx/actions.js
	var actions_default = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		getMovePointFromPassedPercents(movableRange, passedPercents) {
			return +(passedPercents / movableRange * 100).toFixed(2);
		}
		getEffectValueFromMovePoint(range, movePoint) {
			return range * movePoint / 100;
		}
		getStep(passedPercents, options) {
			if ("element" === this.getSettings("type")) return this.getElementStep(passedPercents, options);
			return this.getBackgroundStep(passedPercents, options);
		}
		getElementStep(passedPercents, options) {
			return -(passedPercents - 50) * options.speed;
		}
		getBackgroundStep(passedPercents, options) {
			const movableRange = this.getSettings("dimensions.movable" + options.axis.toUpperCase());
			return -this.getEffectValueFromMovePoint(movableRange, passedPercents);
		}
		getDirectionMovePoint(passedPercents, direction, range) {
			let movePoint;
			if (passedPercents < range.start) if ("out-in" === direction) movePoint = 0;
			else if ("in-out" === direction) movePoint = 100;
			else {
				movePoint = this.getMovePointFromPassedPercents(range.start, passedPercents);
				if ("in-out-in" === direction) movePoint = 100 - movePoint;
			}
			else if (passedPercents < range.end) if ("in-out-in" === direction) movePoint = 0;
			else if ("out-in-out" === direction) movePoint = 100;
			else {
				movePoint = this.getMovePointFromPassedPercents(range.end - range.start, passedPercents - range.start);
				if ("in-out" === direction) movePoint = 100 - movePoint;
			}
			else if ("in-out" === direction) movePoint = 0;
			else if ("out-in" === direction) movePoint = 100;
			else {
				movePoint = this.getMovePointFromPassedPercents(100 - range.end, 100 - passedPercents);
				if ("in-out-in" === direction) movePoint = 100 - movePoint;
			}
			return movePoint;
		}
		translateX(actionData, passedPercents) {
			actionData.axis = "x";
			actionData.unit = "px";
			this.transform("translateX", passedPercents, actionData);
		}
		translateY(actionData, passedPercents) {
			actionData.axis = "y";
			actionData.unit = "px";
			this.transform("translateY", passedPercents, actionData);
		}
		translateXY(actionData, passedPercentsX, passedPercentsY) {
			this.translateX(actionData, passedPercentsX);
			this.translateY(actionData, passedPercentsY);
		}
		tilt(actionData, passedPercentsX, passedPercentsY) {
			const options = {
				speed: actionData.speed / 10,
				direction: actionData.direction
			};
			this.rotateX(options, passedPercentsY);
			this.rotateY(options, 100 - passedPercentsX);
		}
		rotateX(actionData, passedPercents) {
			actionData.axis = "x";
			actionData.unit = "deg";
			this.transform("rotateX", passedPercents, actionData);
		}
		rotateY(actionData, passedPercents) {
			actionData.axis = "y";
			actionData.unit = "deg";
			this.transform("rotateY", passedPercents, actionData);
		}
		rotateZ(actionData, passedPercents) {
			actionData.unit = "deg";
			this.transform("rotateZ", passedPercents, actionData);
		}
		scale(actionData, passedPercents) {
			const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range);
			this.updateRulePart("transform", "scale", 1 + actionData.speed * movePoint / 1e3);
		}
		transform(action, passedPercents, actionData) {
			if (actionData.direction) passedPercents = 100 - passedPercents;
			this.updateRulePart("transform", action, this.getStep(passedPercents, actionData) + actionData.unit);
		}
		setCSSTransformVariables(elementSettings) {
			this.CSSTransformVariables = [];
			jQuery.each(elementSettings, (settingKey, settingValue) => {
				const transformKeyMatches = settingKey.match(/_transform_(.+?)_effect/m);
				if (transformKeyMatches && settingValue) {
					if ("perspective" === transformKeyMatches[1]) {
						this.CSSTransformVariables.unshift(transformKeyMatches[1]);
						return;
					}
					if (this.CSSTransformVariables.includes(transformKeyMatches[1])) return;
					this.CSSTransformVariables.push(transformKeyMatches[1]);
				}
			});
		}
		opacity(actionData, passedPercents) {
			const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range);
			const level = actionData.level / 10;
			const opacity = 1 - level + this.getEffectValueFromMovePoint(level, movePoint);
			this.$element.css({
				opacity,
				"will-change": "opacity"
			});
		}
		blur(actionData, passedPercents) {
			const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range);
			const blur = actionData.level - this.getEffectValueFromMovePoint(actionData.level, movePoint);
			this.updateRulePart("filter", "blur", blur + "px");
		}
		updateRulePart(ruleName, key, value) {
			if (!this.rulesVariables[ruleName]) this.rulesVariables[ruleName] = {};
			if (!this.rulesVariables[ruleName][key]) {
				this.rulesVariables[ruleName][key] = true;
				this.updateRule(ruleName);
			}
			const cssVarKey = `--${key}`;
			this.$element[0].style.setProperty(cssVarKey, value);
		}
		updateRule(ruleName) {
			let value = "";
			value += this.concatTransformCSSProperties(ruleName);
			value += this.concatTransformMotionEffectCSSProperties(ruleName);
			this.$element.css(ruleName, value);
		}
		concatTransformCSSProperties(ruleName) {
			let value = "";
			if ("transform" === ruleName) jQuery.each(this.CSSTransformVariables, (index, variableKey) => {
				const variableName = variableKey;
				if (variableKey.startsWith("flip")) variableKey = variableKey.replace("flip", "scale");
				const defaultUnit = variableKey.startsWith("rotate") || variableKey.startsWith("skew") ? "deg" : "px";
				const defaultValue = variableKey.startsWith("scale") ? 1 : 0 + defaultUnit;
				value += `${variableKey}(var(--e-transform-${variableName}, ${defaultValue}))`;
			});
			return value;
		}
		concatTransformMotionEffectCSSProperties(ruleName) {
			let value = "";
			jQuery.each(this.rulesVariables[ruleName], (variableKey) => {
				value += `${variableKey}(var(--${variableKey}))`;
			});
			return value;
		}
		runAction(actionName, actionData, passedPercents, ...args) {
			if (actionData.affectedRange) {
				if (actionData.affectedRange.start > passedPercents) passedPercents = actionData.affectedRange.start;
				if (actionData.affectedRange.end < passedPercents) passedPercents = actionData.affectedRange.end;
			}
			this[actionName](actionData, passedPercents, ...args);
		}
		refresh() {
			this.rulesVariables = {};
			this.CSSTransformVariables = [];
			this.$element.css({
				transform: "",
				filter: "",
				opacity: "",
				"will-change": ""
			});
		}
		onInit() {
			this.$element = this.getSettings("$targetElement");
			this.refresh();
		}
	};
	//#endregion
	//#region modules/motion-fx/assets/js/frontend/motion-fx/motion-fx.js
	var motion_fx_default = class extends elementorModules.ViewModule {
		static {
			__name(this, "default");
		}
		getDefaultSettings() {
			return {
				type: "element",
				$element: null,
				$dimensionsElement: null,
				addBackgroundLayerTo: null,
				interactions: {},
				refreshDimensions: false,
				range: "viewport",
				classes: {
					element: "motion-fx-element",
					parent: "motion-fx-parent",
					backgroundType: "motion-fx-element-type-background",
					container: "motion-fx-container",
					layer: "motion-fx-layer",
					perspective: "motion-fx-perspective"
				}
			};
		}
		bindEvents() {
			this.defineDimensions = this.defineDimensions.bind(this);
			elementorFrontend.elements.$window.on("resize elementor-pro/motion-fx/recalc", this.defineDimensions);
		}
		unbindEvents() {
			elementorFrontend.elements.$window.off("resize elementor-pro/motion-fx/recalc", this.defineDimensions);
		}
		addBackgroundLayer() {
			const settings = this.getSettings();
			this.elements.$motionFXContainer = jQuery("<div>", { class: settings.classes.container });
			this.elements.$motionFXLayer = jQuery("<div>", { class: settings.classes.layer });
			this.updateBackgroundLayerSize();
			this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);
			(settings.addBackgroundLayerTo ? this.$element.find(settings.addBackgroundLayerTo) : this.$element).prepend(this.elements.$motionFXContainer);
		}
		removeBackgroundLayer() {
			this.elements.$motionFXContainer.remove();
		}
		updateBackgroundLayerSize() {
			const settings = this.getSettings();
			const speed = {
				x: 0,
				y: 0
			};
			const mouseInteraction = settings.interactions.mouseMove;
			const scrollInteraction = settings.interactions.scroll;
			if (mouseInteraction && mouseInteraction.translateXY) {
				speed.x = mouseInteraction.translateXY.speed * 10;
				speed.y = mouseInteraction.translateXY.speed * 10;
			}
			if (scrollInteraction) {
				if (scrollInteraction.translateX) speed.x = scrollInteraction.translateX.speed * 10;
				if (scrollInteraction.translateY) speed.y = scrollInteraction.translateY.speed * 10;
			}
			this.elements.$motionFXLayer.css({
				width: 100 + speed.x + "%",
				height: 100 + speed.y + "%"
			});
		}
		defineDimensions() {
			const $dimensionsElement = this.getSettings("$dimensionsElement") || this.$element;
			const elementOffset = $dimensionsElement.offset();
			const dimensions = {
				elementHeight: $dimensionsElement.outerHeight(),
				elementWidth: $dimensionsElement.outerWidth(),
				elementTop: elementOffset.top,
				elementLeft: elementOffset.left
			};
			dimensions.elementRange = dimensions.elementHeight + innerHeight;
			this.setSettings("dimensions", dimensions);
			if ("background" === this.getSettings("type")) this.defineBackgroundLayerDimensions();
		}
		defineBackgroundLayerDimensions() {
			const dimensions = this.getSettings("dimensions");
			dimensions.layerHeight = this.elements.$motionFXLayer.height();
			dimensions.layerWidth = this.elements.$motionFXLayer.width();
			dimensions.movableX = dimensions.layerWidth - dimensions.elementWidth;
			dimensions.movableY = dimensions.layerHeight - dimensions.elementHeight;
			this.setSettings("dimensions", dimensions);
		}
		initInteractionsTypes() {
			this.interactionsTypes = {
				scroll: scroll_default,
				mouseMove: MouseMoveInteraction
			};
		}
		prepareSpecialActions() {
			const settings = this.getSettings();
			const hasTiltEffect = !!(settings.interactions.mouseMove && settings.interactions.mouseMove.tilt);
			this.elements.$parent.toggleClass(settings.classes.perspective, hasTiltEffect);
		}
		cleanSpecialActions() {
			const settings = this.getSettings();
			this.elements.$parent.removeClass(settings.classes.perspective);
		}
		runInteractions() {
			const settings = this.getSettings();
			this.actions.setCSSTransformVariables(settings.elementSettings);
			this.prepareSpecialActions();
			jQuery.each(settings.interactions, (interactionName, actions) => {
				this.interactions[interactionName] = new this.interactionsTypes[interactionName]({
					motionFX: this,
					callback: (...args) => {
						jQuery.each(actions, (actionName, actionData) => this.actions.runAction(actionName, actionData, ...args));
					}
				});
				this.interactions[interactionName].run();
			});
		}
		destroyInteractions() {
			this.cleanSpecialActions();
			jQuery.each(this.interactions, (interactionName, interaction) => interaction.destroy());
			this.interactions = {};
		}
		refresh() {
			this.actions.setSettings(this.getSettings());
			if ("background" === this.getSettings("type")) {
				this.updateBackgroundLayerSize();
				this.defineBackgroundLayerDimensions();
			}
			this.actions.refresh();
			this.destroyInteractions();
			this.runInteractions();
		}
		destroy() {
			this.destroyInteractions();
			this.actions.refresh();
			const settings = this.getSettings();
			this.$element.removeClass(settings.classes.element);
			this.elements.$parent.removeClass(settings.classes.parent);
			if ("background" === settings.type) {
				this.$element.removeClass(settings.classes.backgroundType);
				this.removeBackgroundLayer();
			}
		}
		onInit() {
			super.onInit();
			const settings = this.getSettings();
			this.$element = settings.$element;
			this.elements.$parent = this.$element.parent();
			this.$element.addClass(settings.classes.element);
			this.elements.$parent = this.$element.parent();
			this.elements.$parent.addClass(settings.classes.parent);
			if ("background" === settings.type) {
				this.$element.addClass(settings.classes.backgroundType);
				this.addBackgroundLayer();
			}
			this.defineDimensions();
			settings.$targetElement = "element" === settings.type ? this.$element : this.elements.$motionFXLayer;
			this.interactions = {};
			this.actions = new actions_default(settings);
			this.initInteractionsTypes();
			this.runInteractions();
		}
	};
	//#endregion
	//#region modules/motion-fx/assets/js/frontend/handler.js
	var handler_default = class extends elementorModules.frontend.handlers.Base {
		static {
			__name(this, "default");
		}
		__construct(...args) {
			super.__construct(...args);
			this.toggle = elementorFrontend.debounce(this.toggle, 200);
		}
		getDefaultSettings() {
			return { selectors: { container: ".elementor-widget-container" } };
		}
		getDefaultElements() {
			const selectors = this.getSettings("selectors");
			let container = this.$element.find(selectors.container);
			if (0 === container.length) container = this.$element;
			return { $container: container };
		}
		bindEvents() {
			elementorFrontend.elements.$window.on("resize", this.toggle);
		}
		unbindEvents() {
			elementorFrontend.elements.$window.off("resize", this.toggle);
		}
		addCSSTransformEvents() {
			if (this.getElementSettings("motion_fx_motion_fx_scrolling") && !this.isTransitionEventAdded) {
				this.isTransitionEventAdded = true;
				this.elements.$container.on("mouseenter", () => {
					this.elements.$container.css("--e-transform-transition-duration", "");
				});
			}
		}
		initEffects() {
			this.effects = {
				translateY: {
					interaction: "scroll",
					actions: ["translateY"]
				},
				translateX: {
					interaction: "scroll",
					actions: ["translateX"]
				},
				rotateZ: {
					interaction: "scroll",
					actions: ["rotateZ"]
				},
				scale: {
					interaction: "scroll",
					actions: ["scale"]
				},
				opacity: {
					interaction: "scroll",
					actions: ["opacity"]
				},
				blur: {
					interaction: "scroll",
					actions: ["blur"]
				},
				mouseTrack: {
					interaction: "mouseMove",
					actions: ["translateXY"]
				},
				tilt: {
					interaction: "mouseMove",
					actions: ["tilt"]
				}
			};
		}
		prepareOptions(name) {
			const elementSettings = this.getElementSettings();
			const type = "motion_fx" === name ? "element" : "background";
			const interactions = {};
			jQuery.each(elementSettings, (key, value) => {
				const keyRegex = new RegExp("^" + name + "_(.+?)_effect");
				const keyMatches = key.match(keyRegex);
				if (!keyMatches || !value) return;
				const options = {};
				const effectName = keyMatches[1];
				jQuery.each(elementSettings, (subKey, subValue) => {
					const subKeyRegex = new RegExp(name + "_" + effectName + "_(.+)");
					const subKeyMatches = subKey.match(subKeyRegex);
					if (!subKeyMatches) return;
					if ("effect" === subKeyMatches[1]) return;
					if ("object" === typeof subValue) subValue = Object.keys(subValue.sizes).length ? subValue.sizes : subValue.size;
					options[subKeyMatches[1]] = subValue;
				});
				const effect = this.effects[effectName];
				const interactionName = effect.interaction;
				if (!interactions[interactionName]) interactions[interactionName] = {};
				effect.actions.forEach((action) => interactions[interactionName][action] = options);
			});
			let $element = this.$element;
			let $dimensionsElement;
			let $childElement;
			const elementType = this.getElementType();
			if ("element" === type && !["section", "container"].includes(elementType)) {
				$dimensionsElement = $element;
				let childElementSelector;
				if ("column" === elementType) childElementSelector = ".elementor-widget-wrap";
				else childElementSelector = ".elementor-widget-container";
				$childElement = $element.find("> " + childElementSelector);
				$element = 0 === $childElement.length ? this.$element : $childElement;
			}
			const options = {
				type,
				interactions,
				elementSettings,
				$element,
				$dimensionsElement,
				refreshDimensions: this.isEdit,
				range: elementSettings[name + "_range"],
				classes: {
					element: "elementor-motion-effects-element",
					parent: "elementor-motion-effects-parent",
					backgroundType: "elementor-motion-effects-element-type-background",
					container: "elementor-motion-effects-container",
					layer: "elementor-motion-effects-layer",
					perspective: "elementor-motion-effects-perspective"
				}
			};
			if (!options.range && "fixed" === this.getCurrentDeviceSetting("_position")) options.range = "page";
			if ("fixed" === this.getCurrentDeviceSetting("_position")) options.isFixedPosition = true;
			if ("background" === type && "column" === this.getElementType()) options.addBackgroundLayerTo = " > .elementor-element-populated";
			return options;
		}
		activate(name) {
			const options = this.prepareOptions(name);
			if (jQuery.isEmptyObject(options.interactions)) return;
			this[name] = new motion_fx_default(options);
		}
		deactivate(name) {
			if (this[name]) {
				this[name].destroy();
				delete this[name];
			}
		}
		toggle() {
			const currentDeviceMode = elementorFrontend.getCurrentDeviceMode();
			const elementSettings = this.getElementSettings();
			["motion_fx", "background_motion_fx"].forEach((name) => {
				const devices = elementSettings[name + "_devices"];
				if ((!devices || -1 !== devices.indexOf(currentDeviceMode)) && (elementSettings[name + "_motion_fx_scrolling"] || elementSettings[name + "_motion_fx_mouse"])) if (this[name]) this.refreshInstance(name);
				else this.activate(name);
				else this.deactivate(name);
			});
		}
		refreshInstance(instanceName) {
			const instance = this[instanceName];
			if (!instance) return;
			const preparedOptions = this.prepareOptions(instanceName);
			instance.setSettings(preparedOptions);
			instance.refresh();
		}
		onInit() {
			super.onInit();
			const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
			if (prefersReducedMotion && prefersReducedMotion.matches) return;
			this.initEffects();
			this.addCSSTransformEvents();
			this.toggle();
		}
		onElementChange(propertyName) {
			if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(propertyName)) {
				if ("motion_fx_motion_fx_scrolling" === propertyName) this.addCSSTransformEvents();
				this.toggle();
				return;
			}
			const propertyMatches = propertyName.match(".*?(motion_fx|_transform)");
			if (propertyMatches) {
				const instanceName = propertyMatches[0].match("(_transform)") ? "motion_fx" : propertyMatches[0];
				this.refreshInstance(instanceName);
				if (!this[instanceName]) this.activate(instanceName);
			}
			if (/^_position/.test(propertyName)) ["motion_fx", "background_motion_fx"].forEach((instanceName) => {
				this.refreshInstance(instanceName);
			});
		}
		onDestroy() {
			super.onDestroy();
			["motion_fx", "background_motion_fx"].forEach((name) => {
				this.deactivate(name);
			});
		}
	};
	//#endregion
	//#region modules/motion-fx/assets/js/frontend/frontend.js
	var frontend_default$5 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("global", handler_default, null);
		}
	};
	//#endregion
	//#region ../elementor/assets/dev/js/frontend/utils/utils.js
	var isScrollSnapActive = () => {
		var _a;
		var _b;
		return "yes" === (elementorFrontend.isEditMode() ? (_a = elementor.settings.page.model.attributes) == null ? void 0 : _a.scroll_snap : (_b = elementorFrontend.config.settings.page) == null ? void 0 : _b.scroll_snap) ? true : false;
	};
	//#endregion
	//#region modules/sticky/assets/js/frontend/handlers/sticky.js
	var sticky_default = elementorModules.frontend.handlers.Base.extend({
		currentConfig: {},
		debouncedReactivate: null,
		bindEvents() {
			elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + "sticky", "resize", this.reactivateOnResize);
		},
		unbindEvents() {
			elementorFrontend.removeListeners(this.getUniqueHandlerID() + "sticky", "resize", this.reactivateOnResize);
		},
		isStickyInstanceActive() {
			return void 0 !== this.$element.data("sticky");
		},
		/**
		* Get the current active setting value for a responsive control.
		*
		* @param {string} setting
		* @return {any} - Setting value.
		*/
		getResponsiveSetting(setting) {
			const elementSettings = this.getElementSettings();
			return elementorFrontend.getCurrentDeviceSetting(elementSettings, setting);
		},
		/**
		* Return an array of settings names for responsive control (e.g. `settings`, `setting_tablet`, `setting_mobile` ).
		*
		* @param {string} setting
		* @return {string[]} - List of settings.
		*/
		getResponsiveSettingList(setting) {
			return ["", ...Object.keys(elementorFrontend.config.responsive.activeBreakpoints)].map((suffix) => {
				return suffix ? `${setting}_${suffix}` : setting;
			});
		},
		getConfig() {
			const elementSettings = this.getElementSettings();
			const stickyOptions = {
				to: elementSettings.sticky,
				offset: this.getResponsiveSetting("sticky_offset"),
				effectsOffset: this.getResponsiveSetting("sticky_effects_offset"),
				classes: {
					sticky: "elementor-sticky",
					stickyActive: "elementor-sticky--active elementor-section--handles-inside",
					stickyEffects: "elementor-sticky--effects",
					spacer: "elementor-sticky__spacer"
				},
				isRTL: elementorFrontend.config.is_rtl,
				isScrollSnapActive: isScrollSnapActive(),
				handleScrollbarWidth: elementorFrontend.isEditMode()
			};
			const $wpAdminBar = elementorFrontend.elements.$wpAdminBar;
			const isParentContainer = this.isContainerElement(this.$element[0]) && !this.isContainerElement(this.$element[0].parentElement);
			if ($wpAdminBar.length && "top" === elementSettings.sticky && "fixed" === $wpAdminBar.css("position")) stickyOptions.offset += $wpAdminBar.height();
			if (elementSettings.sticky_parent && !isParentContainer) stickyOptions.parent = ".e-con, .e-con-inner, .elementor-widget-wrap";
			return stickyOptions;
		},
		activate() {
			this.currentConfig = this.getConfig();
			this.$element.sticky(this.currentConfig);
		},
		deactivate() {
			if (!this.isStickyInstanceActive()) return;
			this.$element.sticky("destroy");
		},
		run(refresh) {
			if (!this.getElementSettings("sticky")) {
				this.deactivate();
				return;
			}
			var currentDeviceMode = elementorFrontend.getCurrentDeviceMode();
			if (-1 !== this.getElementSettings("sticky_on").indexOf(currentDeviceMode)) {
				if (true === refresh) this.reactivate();
				else if (!this.isStickyInstanceActive()) this.activate();
			} else this.deactivate();
		},
		/**
		* Reactivate the sticky instance on resize only if the new sticky config is different from the current active one,
		* in order to avoid re-initializing the sticky when not needed, and avoid layout shifts.
		* The config can be different between devices, so this need to be checked on each screen resize to make sure that
		* the current screen size uses the appropriate Sticky config.
		*
		* @return {void}
		*/
		reactivateOnResize() {
			clearTimeout(this.debouncedReactivate);
			this.debouncedReactivate = setTimeout(() => {
				const config = this.getConfig();
				if (JSON.stringify(config) !== JSON.stringify(this.currentConfig)) this.run(true);
			}, 300);
		},
		reactivate() {
			this.deactivate();
			this.activate();
		},
		onElementChange(settingKey) {
			if (-1 !== ["sticky", "sticky_on"].indexOf(settingKey)) this.run(true);
			if (-1 !== [
				...this.getResponsiveSettingList("sticky_offset"),
				...this.getResponsiveSettingList("sticky_effects_offset"),
				"sticky_parent"
			].indexOf(settingKey)) this.reactivate();
		},
		/**
		* Listen to device mode changes and re-initialize the sticky.
		*
		* @return {void}
		*/
		onDeviceModeChange() {
			setTimeout(() => this.run(true));
		},
		onInit() {
			elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
			if (elementorFrontend.isEditMode()) elementor.listenTo(elementor.channels.deviceMode, "change", () => this.onDeviceModeChange());
			this.run();
		},
		onDestroy() {
			elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments);
			this.deactivate();
		},
		/**
		*
		* @param {HTMLElement|null|undefined} element
		* @return {boolean} Is the passed element a container.
		*/
		isContainerElement(element) {
			return ["e-con", "e-con-inner"].some((containerClass) => {
				return element === null || element === void 0 ? void 0 : element.classList.contains(containerClass);
			});
		}
	});
	//#endregion
	//#region modules/sticky/assets/js/frontend/frontend.js
	var frontend_default$4 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("section", sticky_default, null);
			elementorFrontend.elementsHandler.attachHandler("container", sticky_default, null);
			elementorFrontend.elementsHandler.attachHandler("widget", sticky_default, null);
		}
	};
	var __vitePreload = function preload(baseModule, deps, importerUrl) {
		let promise = Promise.resolve();
		function handlePreloadError(err) {
			const e = new Event("vite:preloadError", { cancelable: true });
			e.payload = err;
			window.dispatchEvent(e);
			if (!e.defaultPrevented) throw err;
		}
		return promise.then((res) => {
			for (const item of res || []) {
				if (item.status !== "rejected") continue;
				handlePreloadError(item.reason);
			}
			return baseModule().catch(handlePreloadError);
		});
	};
	//#endregion
	//#region modules/code-highlight/assets/js/frontend/handler.js
	var handler_exports$1 = /* @__PURE__ */ __exportAll({ default: () => codeHighlightHandler });
	var codeHighlightHandler;
	var init_handler$1 = __esmMin((() => {
		codeHighlightHandler = class extends elementorModules.frontend.handlers.Base {
			onInit(...args) {
				super.onInit(...args);
				Prism.highlightAllUnder(this.$element[0], false);
			}
			onElementChange() {
				Prism.highlightAllUnder(this.$element[0], false);
			}
		};
	}));
	//#endregion
	//#region modules/code-highlight/assets/js/frontend/frontend.js
	var frontend_default$3 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("code-highlight", () => __vitePreload(() => Promise.resolve().then(() => (init_handler$1(), handler_exports$1)), void 0));
		}
	};
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
	var init_asyncToGenerator = __esmMin((() => {}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/base-tabs.js
	var baseTabs;
	var init_base_tabs = __esmMin((() => {
		baseTabs = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return {
					selectors: {
						tablist: "[role=\"tablist\"]",
						tabTitle: ".e-tab-title",
						tabContent: ".e-tab-content"
					},
					classes: { active: "e-active" },
					showTabFn: "show",
					hideTabFn: "hide",
					toggleSelf: true,
					hidePrevious: true,
					autoExpand: true,
					keyDirection: {
						ArrowLeft: elementorFrontendConfig.is_rtl ? 1 : -1,
						ArrowUp: -1,
						ArrowRight: elementorFrontendConfig.is_rtl ? -1 : 1,
						ArrowDown: 1
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$tabTitles: this.findElement(selectors.tabTitle),
					$tabContents: this.findElement(selectors.tabContent)
				};
			}
			activateDefaultTab(videoId) {
				const settings = this.getSettings();
				if (!settings.autoExpand || "editor" === settings.autoExpand && !this.isEdit) return;
				const defaultActiveTab = this.getEditSettings("activeItemIndex") || videoId || 1;
				const originalToggleMethods = {
					showTabFn: settings.showTabFn,
					hideTabFn: settings.hideTabFn
				};
				this.setSettings({
					showTabFn: "show",
					hideTabFn: "hide"
				});
				this.changeActiveTab(defaultActiveTab);
				this.setSettings(originalToggleMethods);
			}
			handleKeyboardNavigation(event) {
				const tab = event.currentTarget;
				const $tabList = jQuery(tab.closest(this.getSettings("selectors").tablist));
				const $tabs = $tabList.find(this.getSettings("selectors").tabTitle);
				const isVertical = "vertical" === $tabList.attr("aria-orientation");
				switch (event.key) {
					case "ArrowLeft":
					case "ArrowRight":
						if (isVertical) return;
						break;
					case "ArrowUp":
					case "ArrowDown":
						if (!isVertical) return;
						event.preventDefault();
						break;
					case "Home":
						event.preventDefault();
						$tabs.first().trigger("focus");
						return;
					case "End":
						event.preventDefault();
						$tabs.last().trigger("focus");
						return;
					default: return;
				}
				const tabIndex = tab.getAttribute("data-tab") - 1;
				const direction = this.getSettings("keyDirection")[event.key];
				const nextTab = $tabs[tabIndex + direction];
				if (nextTab) nextTab.focus();
				else if (-1 === tabIndex + direction) $tabs.last().trigger("focus");
				else $tabs.first().trigger("focus");
			}
			deactivateActiveTab(tabIndex) {
				const settings = this.getSettings();
				const activeClass = settings.classes.active;
				const activeFilter = tabIndex ? "[data-tab=\"" + tabIndex + "\"]" : "." + activeClass;
				const $activeTitle = this.elements.$tabTitles.filter(activeFilter);
				const $activeContent = this.elements.$tabContents.filter(activeFilter);
				$activeTitle.add($activeContent).removeClass(activeClass);
				$activeTitle.attr({
					tabindex: "-1",
					"aria-selected": "false"
				});
				$activeContent[settings.hideTabFn]();
				$activeContent.attr("hidden", "hidden");
			}
			activateTab(tabIndex) {
				const settings = this.getSettings();
				const activeClass = settings.classes.active;
				const $requestedTitle = this.elements.$tabTitles.filter("[data-tab=\"" + tabIndex + "\"]");
				const $requestedContent = this.elements.$tabContents.filter("[data-tab=\"" + tabIndex + "\"]");
				const animationDuration = "show" === settings.showTabFn ? 0 : 400;
				$requestedTitle.add($requestedContent).addClass(activeClass);
				$requestedTitle.attr({
					tabindex: "0",
					"aria-selected": "true"
				});
				$requestedContent[settings.showTabFn](animationDuration, () => elementorFrontend.elements.$window.trigger("resize"));
				$requestedContent.removeAttr("hidden");
			}
			isActiveTab(tabIndex) {
				return this.elements.$tabTitles.filter("[data-tab=\"" + tabIndex + "\"]").hasClass(this.getSettings("classes.active"));
			}
			bindEvents() {
				this.elements.$tabTitles.on({
					keydown: (event) => {
						if (jQuery(event.target).is("a") && `Enter` === event.key) event.preventDefault();
						if ([
							"End",
							"Home",
							"ArrowUp",
							"ArrowDown"
						].includes(event.key)) this.handleKeyboardNavigation(event);
					},
					keyup: (event) => {
						switch (event.key) {
							case "ArrowLeft":
							case "ArrowRight":
								this.handleKeyboardNavigation(event);
								break;
							case "Enter":
							case "Space":
								event.preventDefault();
								this.changeActiveTab(event.currentTarget.getAttribute("data-tab"));
								break;
						}
					},
					click: (event) => {
						event.preventDefault();
						this.changeActiveTab(event.currentTarget.getAttribute("data-tab"));
					}
				});
			}
			onInit(...args) {
				super.onInit(...args);
			}
			changeActiveTab(tabIndex) {
				const isActiveTab = this.isActiveTab(tabIndex);
				const settings = this.getSettings();
				if ((settings.toggleSelf || !isActiveTab) && settings.hidePrevious) this.deactivateActiveTab();
				if (!settings.hidePrevious && isActiveTab) this.deactivateActiveTab(tabIndex);
				if (!isActiveTab) this.activateTab(tabIndex);
			}
		};
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/player-base.js
	var PlayerBase;
	var init_player_base = __esmMin((() => {
		PlayerBase = class {
			constructor(playlistItem, videoIndex) {
				this.playlistItem = playlistItem;
				this.positionInVideoList = videoIndex;
			}
			formatDuration(duration) {
				const dateObj = /* @__PURE__ */ new Date(duration * 1e3);
				const hours = dateObj.getUTCHours();
				const minutes = dateObj.getUTCMinutes();
				const seconds = dateObj.getSeconds();
				if (hours !== 0) return `${hours.toString()}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
				return `${minutes.toString()}:${seconds.toString().padStart(2, "0")}`;
			}
		};
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/player-youtube.js
	var playerYoutube;
	var init_player_youtube = __esmMin((() => {
		init_player_base();
		init_asyncToGenerator();
		playerYoutube = class extends PlayerBase {
			constructor(playlistItem, videoIndex) {
				super(playlistItem, videoIndex);
				this.apiProvider = elementorFrontend.utils.youtube;
				this.playerObject = null;
				this.watchCount = 0;
				this.isVideoPlaying = false;
				this.isVideoPausedLocal = false;
				this.isVideoEnded = false;
				this.seekSequenceArray = [];
				this.pauseCurrentTime = null;
				this.isReady = false;
			}
			create() {
				this.currentVideoID = this.apiProvider.getVideoIDFromURL(this.playlistItem.videoUrl);
				return new Promise((resolve) => {
					this.apiProvider.onApiReady((apiObject) => {
						const playerOptions = {
							width: "773",
							videoId: this.currentVideoID,
							playerVars: {
								rel: 0,
								showinfo: 0,
								ecver: 2
							},
							events: { onReady: () => {
								this.isReady = true;
								resolve();
							} }
						};
						this.playerObject = new apiObject.Player(this.playlistItem.tabContent.querySelector("div"), playerOptions);
						this.playerObject.addEventListener("onStateChange", (event) => {
							if (3 === event.data) if (2 === this.seekSequenceArray[this.seekSequenceArray.length - 1]) this.seekSequenceArray.push(3);
							else {
								this.seekSequenceArray = [];
								clearTimeout(this.seekTimeOut);
							}
						});
					});
				});
			}
			handleEnded(callback) {
				this.playerObject.addEventListener("onStateChange", (event) => {
					if (0 === event.data) {
						this.watchCount++;
						this.isVideoEnded = true;
						event.target.seekTo(0);
						event.target.stopVideo();
						this.isVideoPlaying = false;
						callback();
					}
				});
			}
			handlePaused(callback) {
				this.playerObject.addEventListener("onStateChange", (event) => {
					if (2 === event.data) {
						this.seekSequenceArray = [];
						this.seekSequenceArray.push(2);
						this.pauseCurrentTime = this.playerObject.playerInfo.currentTime;
						this.seekTimeOut = setTimeout(() => {
							if (2 === this.seekSequenceArray.length && 2 === this.seekSequenceArray[0] && 3 === this.seekSequenceArray[1]) {
								this.seekSequenceArray = [];
								clearTimeout(this.seekTimeOut);
							} else {
								callback(this.positionInVideoList);
								this.isVideoPausedLocal = true;
							}
						}, 1e3);
					}
				});
			}
			handlePlayed(callback) {
				this.playerObject.addEventListener("onStateChange", (event) => {
					if (1 === event.data && !this.isVideoEnded) {
						if (!(2 === this.seekSequenceArray.length && 2 === this.seekSequenceArray[0] && 3 === this.seekSequenceArray[1])) callback();
					} else this.isVideoEnded = false;
				});
			}
			handleError(callback) {
				this.playerObject.addEventListener("onError", () => {
					callback();
				});
			}
			handleFullScreenChange(callback) {
				this.playerObject.h.addEventListener("fullscreenchange", () => {
					callback(document.fullscreenElement);
				});
			}
			getCurrentTime() {
				const currentTime = this.pauseCurrentTime ? this.pauseCurrentTime : this.playerObject.playerInfo.currentTime;
				this.pauseCurrentTime = null;
				return currentTime;
			}
			play() {
				if (!this.isReady) return;
				this.isVideoPlaying = true;
				this.playerObject.playVideo();
			}
			pause() {
				if (!this.isReady) return;
				this.isVideoPlaying = false;
				this.playerObject.pauseVideo();
			}
			mute() {
				this.playerObject.mute();
			}
			setVideoProviderData() {
				var _this = this;
				return _asyncToGenerator(function* () {
					if (!_this.isReady) return;
					if (_this.currentVideoID && 11 === _this.currentVideoID.length) {
						_this.playlistItem.thumbnail = { url: "https://img.youtube.com/vi/" + _this.playerObject.getVideoData().video_id + "/maxresdefault.jpg" };
						_this.playlistItem.video_title = _this.playerObject.getVideoData().title;
						_this.playlistItem.duration = _this.formatDuration(_this.playerObject.getDuration());
					} else {
						_this.playlistItem.thumbnail = { url: "" };
						_this.playlistItem.video_title = "";
						_this.playlistItem.duration = "";
					}
				})();
			}
		};
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/player-vimeo.js
	var playerVimeo;
	var init_player_vimeo = __esmMin((() => {
		init_player_base();
		init_asyncToGenerator();
		playerVimeo = class extends PlayerBase {
			constructor(playlistItem, videoIndex) {
				super(playlistItem, videoIndex);
				this.apiProvider = elementorFrontend.utils.vimeo;
				this.playerObject = null;
				this.watchCount = 0;
				this.isVideoInFullScreenChange = false;
				this.isReady = false;
			}
			create() {
				this.currentVideoID = this.apiProvider.getVideoIDFromURL(this.playlistItem.videoUrl);
				return new Promise((resolve) => {
					this.apiProvider.onApiReady((apiObject) => {
						const playerOptions = {
							id: this.currentVideoID,
							autoplay: false
						};
						this.playerObject = new apiObject.Player(this.playlistItem.tabContent.querySelector("div"), playerOptions);
						this.playerObject.ready().then(() => {
							this.isReady = true;
							resolve();
						});
					});
				});
			}
			handleEnded(callback) {
				this.playerObject.on("ended", () => {
					this.watchCount++;
					callback(this.playlistItem);
				});
			}
			handlePaused(callback) {
				this.playerObject.on("pause", (event) => {
					if (0 === event.percent || event.percent >= 1 || this.isVideoInFullScreenChange) return;
					callback(this.positionInVideoList);
				});
			}
			handlePlayed(callback) {
				this.playerObject.on("play", () => {
					if (this.isVideoInFullScreenChange) {
						this.isVideoInFullScreenChange = false;
						return;
					}
					callback(this.playlistItem);
				});
			}
			handleFullScreenChange(callback) {
				this.playerObject.element.addEventListener("fullscreenchange", () => {
					callback(document.fullscreenElement);
					this.isVideoInFullScreenChange = true;
				});
			}
			getCurrentTime() {
				return this.playerObject.getCurrentTime().then((seconds) => seconds);
			}
			play() {
				if (!this.isReady) return;
				this.playerObject.play();
			}
			pause() {
				if (!this.isReady) return;
				this.playerObject.pause();
			}
			mute() {
				this.playerObject.setMuted(true);
			}
			setVideoProviderData() {
				var _this = this;
				return _asyncToGenerator(function* () {
					if (!_this.currentVideoID && 9 === !_this.currentVideoID.length) return;
					const videoId = yield _this.playerObject.getVideoId();
					const videoData = yield (yield fetch("https://vimeo.com/api/v2/video/" + videoId + ".json")).json();
					_this.playlistItem.duration = _this.formatDuration(videoData[0].duration);
					_this.playlistItem.video_title = videoData[0].title;
					_this.playlistItem.thumbnail = { url: videoData[0].thumbnail_medium };
					return _this.playlistItem;
				})();
			}
		};
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/player-hosted.js
	var playerHosted;
	var init_player_hosted = __esmMin((() => {
		init_player_base();
		playerHosted = class extends PlayerBase {
			constructor(playlistItem, videoIndex) {
				super(playlistItem, videoIndex);
				this.playerObject = null;
				this.watchCount = 0;
				this.isVideoPlaying = false;
				this.isVideoPausedLocal = false;
				this.isVideoSeeking = false;
				this.isVideoEnded = false;
				this.isReady = false;
			}
			create() {
				return new Promise((resolve) => {
					const video = document.createElement("video");
					video.setAttribute("controls", "");
					const text = document.createTextNode("Sorry, your browser doesn't support embedded videos.");
					const source = document.createElement("source");
					source.setAttribute("src", this.playlistItem.videoUrl);
					source.setAttribute("type", "video/" + this.playlistItem.videoUrl.split(".").pop());
					video.appendChild(source);
					video.appendChild(text);
					this.playerObject = video;
					this.playlistItem.tabContent.querySelector("div").replaceWith(this.playerObject);
					this.playerObject.addEventListener("canplay", () => {
						this.isReady = true;
						resolve();
					});
					this.playerObject.addEventListener("seeked", () => {
						this.isVideoSeeking = false;
					});
					this.playerObject.addEventListener("seeking", () => {
						clearTimeout(this.seekTimeOut);
						this.isVideoSeeking = true;
					});
				});
			}
			handleEnded(callback) {
				this.playerObject.addEventListener("ended", () => {
					this.watchCount++;
					this.isVideoEnded = true;
					this.isVideoPlaying = false;
					callback(this.playlistItem);
				});
			}
			handlePaused(callback) {
				this.playerObject.addEventListener("pause", () => {
					this.seekTimeOut = setTimeout(() => {
						if (!this.isVideoSeeking && !this.isVideoEnded) {
							callback(this.positionInVideoList);
							this.isVideoPausedLocal = true;
						} else this.isVideoEnded = false;
					}, 30);
				});
			}
			handlePlayed(callback) {
				this.playerObject.addEventListener("play", () => {
					if (!this.isVideoSeeking) callback(this.playlistItem);
				});
			}
			handleFullScreenChange(callback) {
				jQuery(this.playerObject).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", () => {
					callback(document.fullscreenElement);
				});
			}
			getCurrentTime() {
				return this.playerObject.currentTime;
			}
			play() {
				if (!this.isReady) return;
				this.isVideoPlaying = true;
				this.playerObject.play();
			}
			pause() {
				if (!this.isReady) return;
				this.isVideoPlaying = false;
				this.playerObject.pause();
			}
			mute() {
				this.playerObject.muted = true;
			}
		};
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/scroll-utils.js
	function handleVideosPanelScroll(elements, event) {
		if (!event) {
			if (elements.$tabsItems[0].offsetHeight < elements.$tabsItems[0].scrollHeight) elements.$tabsWrapper.addClass("bottom-shadow");
			return;
		}
		if (event.target.scrollTop > 0) elements.$tabsWrapper.addClass("top-shadow");
		else elements.$tabsWrapper.removeClass("top-shadow");
		if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) elements.$tabsWrapper.removeClass("bottom-shadow");
		else elements.$tabsWrapper.addClass("bottom-shadow");
	}
	var init_scroll_utils = __esmMin((() => {}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/playlist-event.js
	var PlaylistEvent;
	var init_playlist_event = __esmMin((() => {
		PlaylistEvent = class {
			constructor({ event, tab, playlist, video }) {
				this.event = {
					type: event.type || "",
					time: event.time || 0,
					element: event.element,
					trigger: event.trigger || "",
					watchCount: event.watchCount || 0
				};
				this.tab = {
					name: tab.name,
					index: tab.index
				};
				this.playlist = {
					name: playlist.name,
					currentItem: playlist.currentItem,
					amount: playlist.amount
				};
				this.video = {
					provider: video.provider,
					url: video.url,
					title: video.title,
					duration: video.duration
				};
			}
		};
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/event-trigger.js
	function getEventTabsObject(widgetObject) {
		const currentInnerTabsTitleElements = widgetObject.elements.$innerTabs.filter(".e-active").find(".e-inner-tabs-wrapper .e-inner-tab-title");
		if (currentInnerTabsTitleElements.length) {
			const activeInnerTabTitleElement = currentInnerTabsTitleElements.filter(".e-inner-tab-active");
			return {
				name: activeInnerTabTitleElement.text().trim(),
				index: activeInnerTabTitleElement.index() + 1
			};
		}
		return {
			name: "none",
			index: "none"
		};
	}
	function getEventPlaylistObject(widgetObject, positionInVideoList) {
		const currentVideoIndex = positionInVideoList || widgetObject.currentPlaylistItemIndex;
		return {
			name: widgetObject.getElementSettings("playlist_title"),
			currentItem: currentVideoIndex,
			amount: widgetObject.playlistItemsArray.filter((video) => video.videoType !== "section").length
		};
	}
	function getEventVideoObject(widgetObject, positionInVideoList) {
		const currentVideoIndex = positionInVideoList || widgetObject.currentPlaylistItemIndex;
		const currentVideo = widgetObject.playlistItemsArray[currentVideoIndex - 1];
		return {
			provider: currentVideo.videoType,
			url: currentVideo.videoUrl,
			title: currentVideo.videoTitle,
			duration: currentVideo.videoDuration
		};
	}
	function getEventEventObject(_x, _x2, _x3, _x4) {
		return _getEventEventObject.apply(this, arguments);
	}
	function _getEventEventObject() {
		_getEventEventObject = _asyncToGenerator(function* (widgetObject, eventType, eventTrigger, positionInVideoList) {
			const currentVideoIndex = positionInVideoList || widgetObject.currentPlaylistItemIndex;
			const currentVideo = widgetObject.playlistItemsArray[currentVideoIndex - 1];
			return {
				type: eventType,
				time: yield currentVideo.playerInstance.getCurrentTime(),
				element: widgetObject.$element,
				trigger: eventTrigger,
				watchCount: currentVideo.playerInstance.watchCount
			};
		});
		return _getEventEventObject.apply(this, arguments);
	}
	function triggerEvent(_x5, _x6, _x7, _x8) {
		return _triggerEvent.apply(this, arguments);
	}
	function _triggerEvent() {
		_triggerEvent = _asyncToGenerator(function* (widgetObject, eventType, eventTrigger, positionInVideoList) {
			const currentEvent = new PlaylistEvent({
				event: yield getEventEventObject(widgetObject, eventType, eventTrigger, positionInVideoList),
				tab: getEventTabsObject(widgetObject),
				playlist: getEventPlaylistObject(widgetObject, positionInVideoList),
				video: getEventVideoObject(widgetObject, positionInVideoList)
			});
			jQuery("body").trigger("elementor-video-playList", currentEvent);
		});
		return _triggerEvent.apply(this, arguments);
	}
	var init_event_trigger = __esmMin((() => {
		init_playlist_event();
		init_asyncToGenerator();
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/inner-tabs.js
	function toggleInnerTabs(event, clickedTab, widgetObject) {
		const activeTabWrapper = event.currentTarget;
		const tabTitles = activeTabWrapper.querySelectorAll(".e-inner-tab-title");
		if (clickedTab.hasClass("e-inner-tab-active") || tabTitles.length < 2) return;
		const tabsContents = activeTabWrapper.querySelectorAll(".e-inner-tab-content");
		tabTitles.forEach((tabTitle) => {
			tabTitle.classList.toggle("e-inner-tab-active");
		});
		tabsContents.forEach((tabContent) => {
			tabContent.toggleAttribute("hidden");
			tabContent.classList.toggle("e-inner-tab-active");
		});
		handleInnerTabsButtonsDisplay(Array.from(tabsContents), widgetObject.isCollapsible, widgetObject.innerTabsHeightLimit);
		triggerEvent(widgetObject, "tabOpened", "click");
	}
	function handleInnerTabs(event, widgetObject) {
		const clickedTarget = event.target;
		const clickedTagType = clickedTarget.tagName;
		if (clickedTarget.classList.contains("e-inner-tab-title-text")) {
			event.preventDefault();
			toggleInnerTabs(event, jQuery(clickedTarget).parent(".e-inner-tab-title"), widgetObject);
		}
		if (clickedTarget.classList.contains("e-tab-mobile-title")) toggleInnerTabs(event, jQuery(clickedTarget), widgetObject);
		if ("button" === clickedTagType.toLowerCase()) onTabContentButtonsClick(event, widgetObject);
	}
	function handleInnerTabsButtonsDisplay(tabsContents, isCollapsible, innerTabsHeightLimit) {
		if (!isCollapsible) return;
		const activeInnerTab = tabsContents.filter((tabsContent) => tabsContent.classList.contains("e-inner-tab-active"));
		const innerTabScrollableHeight = activeInnerTab[0].querySelector(".e-inner-tab-text > div").offsetHeight;
		const innerTabsLimitHeight = parseInt(innerTabsHeightLimit.size);
		if (innerTabsLimitHeight && innerTabScrollableHeight > innerTabsLimitHeight) activeInnerTab[0].classList.add("show-inner-tab-buttons");
	}
	function onTabContentButtonsClick(event, widgetObject) {
		const $activeTabContent = jQuery(event.currentTarget).find(".e-inner-tab-content").filter(".e-inner-tab-active");
		$activeTabContent.find("button").toggleClass("show-button");
		$activeTabContent.toggleClass("show-full-height");
		triggerEvent(widgetObject, $activeTabContent.hasClass("show-full-height") ? "tabExpanded" : "tabCollapsed", "click");
	}
	var init_inner_tabs = __esmMin((() => {
		init_event_trigger();
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/url-params.js
	function handleURLParams(playlistId, playlistItemsArray) {
		const params = new URLSearchParams(location.search);
		const playlistName = params.get("playlist");
		const defaultTabIndex = 1;
		if (!playlistName) return false;
		if (playlistName === playlistId) {
			const videoId = params.get("video");
			const videoItem = playlistItemsArray.find((playlistItem) => videoId === playlistItem.dataItemId);
			const tabIndex = videoItem ? videoItem.dataTab : defaultTabIndex;
			if (!tabIndex) setVideoParams(playlistId, playlistItemsArray, defaultTabIndex);
			return tabIndex || false;
		}
	}
	function setVideoParams(playlistId, playlistItemsArray, videoId) {
		const params = new URLSearchParams(location.search);
		params.set("playlist", playlistId);
		params.set("video", playlistItemsArray[videoId - 1].dataItemId);
		history.replaceState({}, "", location.pathname + "?" + params);
	}
	var init_url_params = __esmMin((() => {}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/handler.js
	var handler_exports = /* @__PURE__ */ __exportAll({ default: () => VideoPlaylistHandler });
	var __defProp, __defProps, __getOwnPropDescs, __getOwnPropSymbols, __hasOwnProp, __propIsEnum, __defNormalProp, __spreadValues, __spreadProps, VideoPlaylistHandler;
	var init_handler = __esmMin((() => {
		init_base_tabs();
		init_player_youtube();
		init_player_vimeo();
		init_player_hosted();
		init_scroll_utils();
		init_inner_tabs();
		init_url_params();
		init_event_trigger();
		__defProp = Object.defineProperty;
		__defProps = Object.defineProperties;
		__getOwnPropDescs = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols = Object.getOwnPropertySymbols;
		__hasOwnProp = Object.prototype.hasOwnProperty;
		__propIsEnum = Object.prototype.propertyIsEnumerable;
		__defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value;
		__spreadValues = (a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
			if (__getOwnPropSymbols) {
				for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
			}
			return a;
		};
		__spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
		VideoPlaylistHandler = class extends baseTabs {
			getDefaultSettings() {
				const defaultSettings = super.getDefaultSettings();
				return __spreadProps(__spreadValues({}, defaultSettings), { selectors: __spreadValues(__spreadValues({}, defaultSettings.selectors), {
					tabsWrapper: ".e-tabs-items-wrapper",
					tabsItems: ".e-tabs-items",
					toggleVideosDisplayButton: ".e-tabs-toggle-videos-display-button",
					videos: ".e-tabs-content-wrapper .e-tab-content",
					innerTabs: ".e-tabs-inner-tabs .e-tab-content",
					imageOverlay: ".elementor-custom-embed-image-overlay"
				}) });
			}
			getDefaultElements() {
				const elements = super.getDefaultElements();
				const selectors = this.getSettings("selectors");
				return __spreadProps(__spreadValues({}, elements), {
					$tabsWrapper: this.findElement(selectors.tabsWrapper),
					$tabsItems: this.findElement(selectors.tabsItems),
					$toggleVideosDisplayButton: this.findElement(selectors.toggleVideosDisplayButton),
					$videos: this.findElement(selectors.videos),
					$innerTabs: this.findElement(selectors.innerTabs),
					$imageOverlay: this.findElement(selectors.imageOverlay)
				});
			}
			initEditorListeners() {
				super.initEditorListeners();
				this.editorListeners.push({
					event: "elementorPlaylistWidget:fetchVideoData",
					to: elementor.channels.editor,
					callback: (e) => {
						this.getCurrentPlayerSelected().setVideoProviderData().then(() => {
							e.currentItem = this.getCurrentItemSelected();
							elementor.channels.editor.trigger("elementorPlaylistWidget:setVideoData", e);
						});
					}
				});
			}
			bindEvents() {
				super.bindEvents();
				this.elements.$imageOverlay.on({ click: (e) => {
					e.currentTarget.remove();
					this.getCurrentPlayerSelected().play();
				} });
				this.elements.$innerTabs.on({ click: (event) => {
					handleInnerTabs(event, this);
				} });
				this.elements.$tabsItems.on({ scroll: (event) => {
					handleVideosPanelScroll(this.elements, event);
				} });
				this.elements.$toggleVideosDisplayButton.on({ click: (event) => {
					jQuery(event.target).toggleClass("rotate-up");
					jQuery(event.target).toggleClass("rotate-down");
					this.elements.$tabsWrapper.slideToggle("slow");
				} });
			}
			onInit(...args) {
				super.onInit(...args);
				this.playlistId = this.getID();
				this.storageKey = "watched_videos_" + this.getID();
				const storageObject = elementorFrontend.storage.get(this.storageKey);
				if (storageObject) this.watchedVideosArray = JSON.parse(storageObject);
				else this.watchedVideosArray = [];
				this.watchedIndication = this.getElementSettings("show_watched_indication");
				handleVideosPanelScroll(this.elements);
				this.isAutoplayOnLoad = "yes" === this.getElementSettings("autoplay_on_load");
				this.isAutoplayNextUp = "yes" === this.getElementSettings("autoplay_next");
				this.isFirstVideoActivated = true;
				this.createPlaylistItems();
				this.isCollapsible = this.getElementSettings("inner_tab_is_content_collapsible");
				this.innerTabsHeightLimit = this.getElementSettings("inner_tab_collapsible_height");
				this.currentPlayingPlaylistItemIndex = 1;
				this.activateInitialVideo();
				this.activateInnerTabInEditMode();
			}
			onEditSettingsChange(propertyName) {
				if ("panel" === propertyName) this.preventTabActivation = true;
				if ("activeItemIndex" !== propertyName) return;
				if (this.preventTabActivation) {
					this.preventTabActivation = false;
					return;
				}
				this.activateDefaultTab();
			}
			activateInitialVideo() {
				var _a;
				this.isPageOnLoad = true;
				const isLazyLoad = !!this.getElementSettings("lazy_load");
				const initialTabIndex = handleURLParams(this.playlistId, this.playlistItemsArray);
				let isUrlParamsExist = false;
				if (initialTabIndex) {
					this.currentPlaylistItemIndex = initialTabIndex;
					this.currentPlayingPlaylistItemIndex = initialTabIndex;
					isUrlParamsExist = true;
				} else {
					this.currentPlaylistItemIndex = 1;
					this.currentPlayingPlaylistItemIndex = 1;
				}
				if (this.isAutoplayOnLoad && !isUrlParamsExist) setVideoParams(this.playlistId, this.playlistItemsArray, this.currentPlaylistItemIndex);
				if (isUrlParamsExist) (_a = this.$element[0]) == null || _a.scrollIntoView({ behavior: "smooth" });
				this.handleFirstVideoActivation(isLazyLoad);
			}
			handleFirstVideoActivation(isLazyLoad) {
				if (!isLazyLoad) {
					this.activateDefaultTab(this.currentPlaylistItemIndex);
					return;
				}
				const playlistElement = document.querySelector(".elementor-element-" + this.playlistId + " .e-tabs-main-area");
				const observer = elementorModules.utils.Scroll.scrollObserver({ callback: (event) => {
					if (event.isInViewport) {
						this.activateDefaultTab(this.currentPlaylistItemIndex);
						observer.unobserve(playlistElement);
					}
				} });
				observer.observe(playlistElement);
			}
			getCurrentItemSelected() {
				return this.playlistItemsArray[this.currentPlaylistItemIndex - 1];
			}
			getCurrentPlayerSelected() {
				return this.getCurrentItemSelected().playerInstance;
			}
			getCurrentPlayerPlaying() {
				return this.playlistItemsArray[this.currentPlayingPlaylistItemIndex - 1].playerInstance;
			}
			isVideoShouldBePlayed() {
				if (this.currentPlayingPlaylistItemIndex !== this.currentPlaylistItemIndex) {
					if (this.getCurrentPlayerPlaying()) this.getCurrentPlayerPlaying().pause();
					this.currentPlayingPlaylistItemIndex = this.currentPlaylistItemIndex;
				} else if (this.getCurrentPlayerPlaying().isVideoPlaying) {
					this.getCurrentPlayerPlaying().pause();
					return false;
				}
				return true;
			}
			activateInnerTabInEditMode() {
				if (this.isEdit && this.getEditSettings("innerActiveIndex")) {
					const innerTabActivated = this.getEditSettings("innerActiveIndex");
					jQuery(this.elements.$innerTabs.eq(this.currentPlaylistItemIndex - 1).find(".e-inner-tab-title a"))[innerTabActivated].click();
				}
			}
			handleVideo(playListItem) {
				if (playListItem.playerInstance) {
					if (this.isVideoShouldBePlayed()) {
						if (1 === this.currentPlaylistItemIndex && this.elements.$imageOverlay) this.elements.$imageOverlay.remove();
						this.playVideoAfterCreation(playListItem);
					}
				} else {
					playListItem.playerInstance = new {
						youtube: playerYoutube,
						vimeo: playerVimeo,
						hosted: playerHosted
					}[playListItem.videoType](playListItem, this.currentPlaylistItemIndex);
					playListItem.playerInstance.create().then(() => {
						if (this.isVideoShouldBePlayed()) this.playVideoOnCreation(playListItem);
						playListItem.playerInstance.handleFullScreenChange((isEnterFullScreenMode) => {
							triggerEvent(this, isEnterFullScreenMode ? "videoFullScreen" : "videoExitFullScreen", "click");
						});
						playListItem.playerInstance.handlePlayed(() => {
							const currentPlaylistItem = this.getCurrentItemSelected();
							let videoTrigger = "click";
							if (currentPlaylistItem.isAutoplayOnLoad) {
								videoTrigger = "onLoad";
								playListItem.isAutoplayOnLoad = false;
							} else if (currentPlaylistItem.isAutoPlayNextUp) videoTrigger = "nextVideo";
							triggerEvent(this, currentPlaylistItem.playerInstance.isVideoPausedLocal ? "videoResume" : "videoStart", videoTrigger);
						});
						playListItem.playerInstance.handleEnded(() => {
							triggerEvent(this, "videoEnded", "click");
							if (this.watchedIndication) this.elements.$tabTitles.filter(".e-active").addClass("watched-video");
							const endedVideoId = this.getCurrentItemSelected().dataItemId;
							if (!this.watchedVideosArray.includes(endedVideoId) && this.watchedIndication) {
								this.watchedVideosArray.push(this.getCurrentItemSelected().dataItemId);
								elementorFrontend.storage.set(this.storageKey, JSON.stringify(this.watchedVideosArray));
							}
							if (this.isAutoplayNextUp) {
								if (this.playlistItemsArray.length >= ++this.currentPlaylistItemIndex) {
									while ("section" === this.getCurrentItemSelected().videoType) {
										this.currentPlaylistItemIndex++;
										if (this.playlistItemsArray.length < this.currentPlaylistItemIndex) {
											this.currentPlaylistItemIndex = this.playlistItemsArray.length;
											return;
										}
									}
									this.changeActiveTab(this.currentPlaylistItemIndex, true);
								}
							}
						});
						playListItem.playerInstance.handlePaused((positionInVideoList) => {
							triggerEvent(this, "videoPaused", "click", positionInVideoList);
						});
					});
				}
			}
			playVideoAfterCreation(playListItem) {
				playListItem.playerInstance.play();
			}
			playVideoOnCreation(playListItem) {
				if (this.isAutoplayOnLoad) {
					playListItem.isAutoplayOnLoad = true;
					playListItem.playerInstance.mute();
					playListItem.playerInstance.play();
					this.isAutoplayOnLoad = false;
				} else if (!this.isFirstVideoActivated) {
					playListItem.isAutoPlayNextUp = true;
					playListItem.playerInstance.play();
				}
				this.isFirstVideoActivated = false;
			}
			createPlaylistItems() {
				this.playlistItemsArray = [];
				this.elements.$videos.each((index, tabContent) => {
					const playListItem = {};
					const $tabContent = jQuery(tabContent);
					playListItem.videoUrl = $tabContent.attr("data-video-url");
					playListItem.videoType = $tabContent.attr("data-video-type");
					playListItem.videoTitle = $tabContent.attr("data-video-title");
					playListItem.videoDuration = $tabContent.attr("data-video-duration");
					playListItem.tabContent = tabContent;
					playListItem.dataTab = index + 1;
					playListItem.dataItemId = this.getElementSettings().tabs[index]._id;
					this.playlistItemsArray.push(playListItem);
				});
				if (this.watchedVideosArray.length > 0 && this.watchedIndication) this.watchedVideosArray.forEach((watchedVideoId) => {
					const watchedPlaylistItem = this.playlistItemsArray.find((playlistItem) => playlistItem.dataItemId === watchedVideoId);
					this.elements.$tabTitles.filter("[data-tab=\"" + watchedPlaylistItem.dataTab + "\"]").addClass("watched-video");
				});
			}
			changeActiveTab(tabIndex, isVideoSelectedAutomatically) {
				super.changeActiveTab(tabIndex);
				if (this.playlistItemsArray[tabIndex - 1] && this.playlistItemsArray[tabIndex - 1].videoType !== "section") {
					this.currentPlaylistItemIndex = parseInt(tabIndex);
					if (isVideoSelectedAutomatically) this.currentPlayingPlaylistItemIndex = this.currentPlaylistItemIndex;
					this.handleVideo(this.getCurrentItemSelected(), isVideoSelectedAutomatically);
					if (!this.isPageOnLoad) setVideoParams(this.playlistId, this.playlistItemsArray, this.currentPlaylistItemIndex);
					this.isPageOnLoad = false;
					if (jQuery(this.elements.$innerTabs.eq(tabIndex - 1)).find(".e-inner-tab-content").length > 0) handleInnerTabsButtonsDisplay(this.elements.$innerTabs.filter(".e-active").find(".e-inner-tab-content").toArray(), this.isCollapsible, this.innerTabsHeightLimit);
				}
			}
		};
	}));
	//#endregion
	//#region modules/video-playlist/assets/js/frontend/frontend.js
	init_asyncToGenerator();
	var frontend_default$2 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.hooks.addAction("frontend/element_ready/video-playlist.default", ($element) => {
				__vitePreload(_asyncToGenerator(function* () {
					const { default: dynamicHandler } = yield Promise.resolve().then(() => (init_handler(), handler_exports));
					return { default: dynamicHandler };
				}), void 0).then(({ default: dynamicHandler }) => {
					elementorFrontend.elementsHandler.addHandler(dynamicHandler, {
						$element,
						toggleSelf: false
					});
				});
			});
		}
	};
	//#endregion
	//#region modules/payments/assets/js/frontend/handlers/paypal-button.js
	var paypal_button_exports = /* @__PURE__ */ __exportAll({ default: () => PayPalHandler });
	var PayPalHandler;
	var init_paypal_button = __esmMin((() => {
		PayPalHandler = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return { selectors: {
					button: ".elementor-button.elementor-paypal-legacy",
					errors: ".elementor-message-danger"
				} };
			}
			getDefaultElements() {
				const settings = this.getSettings();
				return {
					wrapper: this.$element[0],
					button: this.$element[0].querySelector(settings.selectors.button),
					errors: this.$element[0].querySelectorAll(settings.selectors.errors)
				};
			}
			handleClick(event) {
				if (0 < this.elements.errors.length) {
					event.preventDefault();
					this.elements.errors.forEach((error) => {
						error.classList.remove("elementor-hidden");
					});
				}
			}
			bindEvents() {
				this.elements.button.addEventListener("click", this.handleClick.bind(this));
			}
		};
	}));
	//#endregion
	//#region node_modules/dompurify/dist/purify.es.mjs
	/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	function _arrayWithHoles(r) {
		if (Array.isArray(r)) return r;
	}
	function _iterableToArrayLimit(r, l) {
		var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (null != t) {
			var e;
			var n;
			var i;
			var u;
			var a = [];
			var f = true;
			var o = false;
			try {
				if (i = (t = t.call(r)).next, 0 === l);
				else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
			} catch (r) {
				o = true, n = r;
			} finally {
				try {
					if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
				} finally {
					if (o) throw n;
				}
			}
			return a;
		}
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}
	/**
	* Creates a new function that calls the given function with a specified thisArg and arguments.
	*
	* @param func - The function to be wrapped and called.
	* @returns A new function that calls the given function with a specified thisArg and arguments.
	*/
	function unapply(func) {
		return function(thisArg) {
			if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
			for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
			return apply(func, thisArg, args);
		};
	}
	/**
	* Creates a new function that constructs an instance of the given constructor function with the provided arguments.
	*
	* @param func - The constructor function to be wrapped and called.
	* @returns A new function that constructs an instance of the given constructor function with the provided arguments.
	*/
	function unconstruct(Func) {
		return function() {
			for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
			return construct(Func, args);
		};
	}
	/**
	* Add properties to a lookup table
	*
	* @param set - The set to which elements will be added.
	* @param array - The array containing elements to be added to the set.
	* @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
	* @returns The modified set with added elements.
	*/
	function addToSet(set, array) {
		let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
		if (setPrototypeOf) setPrototypeOf(set, null);
		if (!arrayIsArray(array)) return set;
		let l = array.length;
		while (l--) {
			let element = array[l];
			if (typeof element === "string") {
				const lcElement = transformCaseFunc(element);
				if (lcElement !== element) {
					if (!isFrozen(array)) array[l] = lcElement;
					element = lcElement;
				}
			}
			set[element] = true;
		}
		return set;
	}
	/**
	* Clean up an array to harden against CSPP
	*
	* @param array - The array to be cleaned.
	* @returns The cleaned version of the array
	*/
	function cleanArray(array) {
		for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
		return array;
	}
	/**
	* Shallow clone an object
	*
	* @param object - The object to be cloned.
	* @returns A new object that copies the original.
	*/
	function clone(object) {
		const newObject = create(null);
		for (const _ref2 of entries(object)) {
			var _ref3 = _slicedToArray(_ref2, 2);
			const property = _ref3[0];
			const value = _ref3[1];
			if (objectHasOwnProperty(object, property)) if (arrayIsArray(value)) newObject[property] = cleanArray(value);
			else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
			else newObject[property] = value;
		}
		return newObject;
	}
	/**
	* Convert non-node values into strings without depending on direct property access.
	*
	* @param value - The value to stringify.
	* @returns A string representation of the provided value.
	*/
	function stringifyValue(value) {
		switch (typeof value) {
			case "string": return value;
			case "number": return numberToString(value);
			case "boolean": return booleanToString(value);
			case "bigint": return bigintToString ? bigintToString(value) : "0";
			case "symbol": return symbolToString ? symbolToString(value) : "Symbol()";
			case "undefined": return objectToString(value);
			case "function":
			case "object": {
				if (value === null) return objectToString(value);
				const valueAsRecord = value;
				const valueToString = lookupGetter(valueAsRecord, "toString");
				if (typeof valueToString === "function") {
					const stringified = valueToString(valueAsRecord);
					return typeof stringified === "string" ? stringified : objectToString(stringified);
				}
				return objectToString(value);
			}
			default: return objectToString(value);
		}
	}
	/**
	* This method automatically checks if the prop is function or getter and behaves accordingly.
	*
	* @param object - The object to look up the getter function in its prototype chain.
	* @param prop - The property name for which to find the getter function.
	* @returns The getter function found in the prototype chain or a fallback function.
	*/
	function lookupGetter(object, prop) {
		while (object !== null) {
			const desc = getOwnPropertyDescriptor(object, prop);
			if (desc) {
				if (desc.get) return unapply(desc.get);
				if (typeof desc.value === "function") return unapply(desc.value);
			}
			object = getPrototypeOf(object);
		}
		function fallbackValue() {
			return null;
		}
		return fallbackValue;
	}
	function isRegex(value) {
		try {
			regExpTest(value, "");
			return true;
		} catch (_unused) {
			return false;
		}
	}
	function createDOMPurify() {
		let window = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
		const DOMPurify = (root) => createDOMPurify(root);
		DOMPurify.version = "3.4.11";
		DOMPurify.removed = [];
		if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
			DOMPurify.isSupported = false;
			return DOMPurify;
		}
		let document = window.document;
		const originalDocument = document;
		const currentScript = originalDocument.currentScript;
		window.DocumentFragment;
		const HTMLTemplateElement = window.HTMLTemplateElement;
		const Node = window.Node;
		const Element = window.Element;
		const NodeFilter = window.NodeFilter;
		window.NamedNodeMap === void 0 && (window.NamedNodeMap || window.MozNamedAttrMap);
		window.HTMLFormElement;
		const DOMParser = window.DOMParser;
		const trustedTypes = window.trustedTypes;
		const ElementPrototype = Element.prototype;
		const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
		const remove = lookupGetter(ElementPrototype, "remove");
		const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
		const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
		const getParentNode = lookupGetter(ElementPrototype, "parentNode");
		const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
		const getAttributes = lookupGetter(ElementPrototype, "attributes");
		const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
		const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
		if (typeof HTMLTemplateElement === "function") {
			const template = document.createElement("template");
			if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
		}
		let trustedTypesPolicy;
		let emptyHTML = "";
		let defaultTrustedTypesPolicy;
		let defaultTrustedTypesPolicyResolved = false;
		let IN_TRUSTED_TYPES_POLICY = 0;
		const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy() {
			if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
		};
		const _createTrustedHTML = function _createTrustedHTML(html) {
			_assertNotInTrustedTypesPolicy();
			IN_TRUSTED_TYPES_POLICY++;
			try {
				return trustedTypesPolicy.createHTML(html);
			} finally {
				IN_TRUSTED_TYPES_POLICY--;
			}
		};
		const _createTrustedScriptURL = function _createTrustedScriptURL(scriptUrl) {
			_assertNotInTrustedTypesPolicy();
			IN_TRUSTED_TYPES_POLICY++;
			try {
				return trustedTypesPolicy.createScriptURL(scriptUrl);
			} finally {
				IN_TRUSTED_TYPES_POLICY--;
			}
		};
		const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy() {
			if (!defaultTrustedTypesPolicyResolved) {
				defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
				defaultTrustedTypesPolicyResolved = true;
			}
			return defaultTrustedTypesPolicy;
		};
		const _document = document;
		const implementation = _document.implementation;
		const createNodeIterator = _document.createNodeIterator;
		const createDocumentFragment = _document.createDocumentFragment;
		const getElementsByTagName = _document.getElementsByTagName;
		const importNode = originalDocument.importNode;
		let hooks = _createHooksMap();
		/**
		* Expose whether this browser supports running the full DOMPurify.
		*/
		DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
		const MUSTACHE_EXPR$1 = MUSTACHE_EXPR;
		const ERB_EXPR$1 = ERB_EXPR;
		const TMPLIT_EXPR$1 = TMPLIT_EXPR;
		const DATA_ATTR$1 = DATA_ATTR;
		const ARIA_ATTR$1 = ARIA_ATTR;
		const IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA;
		const ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
		const CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
		let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
		/**
		* We consider the elements and attributes below to be safe. Ideally
		* don't add any new ones but feel free to remove unwanted ones.
		*/
		let ALLOWED_TAGS = null;
		const DEFAULT_ALLOWED_TAGS = addToSet({}, [
			...html$1,
			...svg$1,
			...svgFilters,
			...mathMl$1,
			...text
		]);
		let ALLOWED_ATTR = null;
		const DEFAULT_ALLOWED_ATTR = addToSet({}, [
			...html,
			...svg,
			...mathMl,
			...xml
		]);
		let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
			tagNameCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			attributeNameCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			allowCustomizedBuiltInElements: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: false
			}
		}));
		let FORBID_TAGS = null;
		let FORBID_ATTR = null;
		const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
			tagCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			attributeCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			}
		}));
		let ALLOW_ARIA_ATTR = true;
		let ALLOW_DATA_ATTR = true;
		let ALLOW_UNKNOWN_PROTOCOLS = false;
		let ALLOW_SELF_CLOSE_IN_ATTR = true;
		let SAFE_FOR_TEMPLATES = false;
		let SAFE_FOR_XML = true;
		let WHOLE_DOCUMENT = false;
		let SET_CONFIG = false;
		let SET_CONFIG_ALLOWED_TAGS = null;
		let SET_CONFIG_ALLOWED_ATTR = null;
		let FORCE_BODY = false;
		let RETURN_DOM = false;
		let RETURN_DOM_FRAGMENT = false;
		let RETURN_TRUSTED_TYPE = false;
		let SANITIZE_DOM = true;
		let SANITIZE_NAMED_PROPS = false;
		const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
		let KEEP_CONTENT = true;
		let IN_PLACE = false;
		let USE_PROFILES = {};
		let FORBID_CONTENTS = null;
		const DEFAULT_FORBID_CONTENTS = addToSet({}, [
			"annotation-xml",
			"audio",
			"colgroup",
			"desc",
			"foreignobject",
			"head",
			"iframe",
			"math",
			"mi",
			"mn",
			"mo",
			"ms",
			"mtext",
			"noembed",
			"noframes",
			"noscript",
			"plaintext",
			"script",
			"selectedcontent",
			"style",
			"svg",
			"template",
			"thead",
			"title",
			"video",
			"xmp"
		]);
		let DATA_URI_TAGS = null;
		const DEFAULT_DATA_URI_TAGS = addToSet({}, [
			"audio",
			"video",
			"img",
			"source",
			"image",
			"track"
		]);
		let URI_SAFE_ATTRIBUTES = null;
		const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
			"alt",
			"class",
			"for",
			"id",
			"label",
			"name",
			"pattern",
			"placeholder",
			"role",
			"summary",
			"title",
			"value",
			"style",
			"xmlns"
		]);
		const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
		const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
		const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
		let NAMESPACE = HTML_NAMESPACE;
		let IS_EMPTY_INPUT = false;
		let ALLOWED_NAMESPACES = null;
		const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
			MATHML_NAMESPACE,
			SVG_NAMESPACE,
			HTML_NAMESPACE
		], stringToString);
		const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze([
			"mi",
			"mo",
			"mn",
			"ms",
			"mtext"
		]);
		let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
		const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
		let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
		const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
			"title",
			"style",
			"font",
			"a",
			"script"
		]);
		let PARSER_MEDIA_TYPE = null;
		const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
		const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
		let transformCaseFunc = null;
		let CONFIG = null;
		const formElement = document.createElement("form");
		const isRegexOrFunction = function isRegexOrFunction(testValue) {
			return testValue instanceof RegExp || testValue instanceof Function;
		};
		/**
		* _parseConfig
		*
		* @param cfg optional config literal
		*/
		const _parseConfig = function _parseConfig() {
			let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (CONFIG && CONFIG === cfg) return;
			if (!cfg || typeof cfg !== "object") cfg = {};
			cfg = clone(cfg);
			PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
			transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
			ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
			ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
			ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
			URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
				transform: transformCaseFunc,
				base: DEFAULT_URI_SAFE_ATTRIBUTES
			});
			DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
				transform: transformCaseFunc,
				base: DEFAULT_DATA_URI_TAGS
			});
			FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
			FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), { transform: transformCaseFunc });
			FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), { transform: transformCaseFunc });
			USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
			ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
			ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
			ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
			ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
			SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
			SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
			WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
			RETURN_DOM = cfg.RETURN_DOM || false;
			RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
			RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
			FORCE_BODY = cfg.FORCE_BODY || false;
			SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
			SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
			KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
			IN_PLACE = cfg.IN_PLACE || false;
			IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
			NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
			MATHML_TEXT_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "MATHML_TEXT_INTEGRATION_POINTS") && cfg.MATHML_TEXT_INTEGRATION_POINTS && typeof cfg.MATHML_TEXT_INTEGRATION_POINTS === "object" ? clone(cfg.MATHML_TEXT_INTEGRATION_POINTS) : addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
			HTML_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "HTML_INTEGRATION_POINTS") && cfg.HTML_INTEGRATION_POINTS && typeof cfg.HTML_INTEGRATION_POINTS === "object" ? clone(cfg.HTML_INTEGRATION_POINTS) : addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
			const customElementHandling = objectHasOwnProperty(cfg, "CUSTOM_ELEMENT_HANDLING") && cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING === "object" ? clone(cfg.CUSTOM_ELEMENT_HANDLING) : create(null);
			CUSTOM_ELEMENT_HANDLING = create(null);
			if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
			if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
			if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
			seal(CUSTOM_ELEMENT_HANDLING);
			if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
			if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
			if (USE_PROFILES) {
				ALLOWED_TAGS = addToSet({}, text);
				ALLOWED_ATTR = create(null);
				if (USE_PROFILES.html === true) {
					addToSet(ALLOWED_TAGS, html$1);
					addToSet(ALLOWED_ATTR, html);
				}
				if (USE_PROFILES.svg === true) {
					addToSet(ALLOWED_TAGS, svg$1);
					addToSet(ALLOWED_ATTR, svg);
					addToSet(ALLOWED_ATTR, xml);
				}
				if (USE_PROFILES.svgFilters === true) {
					addToSet(ALLOWED_TAGS, svgFilters);
					addToSet(ALLOWED_ATTR, svg);
					addToSet(ALLOWED_ATTR, xml);
				}
				if (USE_PROFILES.mathMl === true) {
					addToSet(ALLOWED_TAGS, mathMl$1);
					addToSet(ALLOWED_ATTR, mathMl);
					addToSet(ALLOWED_ATTR, xml);
				}
			}
			EXTRA_ELEMENT_HANDLING.tagCheck = null;
			EXTRA_ELEMENT_HANDLING.attributeCheck = null;
			if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
				if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
				else if (arrayIsArray(cfg.ADD_TAGS)) {
					if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
					addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
				}
			}
			if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
				if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
				else if (arrayIsArray(cfg.ADD_ATTR)) {
					if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
					addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
				}
			}
			if (objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") && arrayIsArray(cfg.ADD_URI_SAFE_ATTR)) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
			if (objectHasOwnProperty(cfg, "FORBID_CONTENTS") && arrayIsArray(cfg.FORBID_CONTENTS)) {
				if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
				addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
			}
			if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
				if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
				addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
			}
			if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
			if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
				"html",
				"head",
				"body"
			]);
			if (ALLOWED_TAGS.table) {
				addToSet(ALLOWED_TAGS, ["tbody"]);
				delete FORBID_TAGS.tbody;
			}
			if (cfg.TRUSTED_TYPES_POLICY) {
				if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				const previousTrustedTypesPolicy = trustedTypesPolicy;
				trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
				try {
					emptyHTML = _createTrustedHTML("");
				} catch (error) {
					trustedTypesPolicy = previousTrustedTypesPolicy;
					throw error;
				}
			} else if (cfg.TRUSTED_TYPES_POLICY === null) {
				trustedTypesPolicy = void 0;
				emptyHTML = "";
			} else {
				if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
				if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
			}
			if (freeze) freeze(cfg);
			CONFIG = cfg;
		};
		const ALL_SVG_TAGS = addToSet({}, [
			...svg$1,
			...svgFilters,
			...svgDisallowed
		]);
		const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
		/**
		* Namespace rules for an element in the SVG namespace.
		*
		* @param tagName the element's lowercase tag name
		* @param parent the (possibly simulated) parent node
		* @param parentTagName the parent's lowercase tag name
		* @returns true if a spec-compliant parser could produce this element
		*/
		const _checkSvgNamespace = function _checkSvgNamespace(tagName, parent, parentTagName) {
			if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
			if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
			return Boolean(ALL_SVG_TAGS[tagName]);
		};
		/**
		* Namespace rules for an element in the MathML namespace.
		*
		* @param tagName the element's lowercase tag name
		* @param parent the (possibly simulated) parent node
		* @param parentTagName the parent's lowercase tag name
		* @returns true if a spec-compliant parser could produce this element
		*/
		const _checkMathMlNamespace = function _checkMathMlNamespace(tagName, parent, parentTagName) {
			if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
			if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
			return Boolean(ALL_MATHML_TAGS[tagName]);
		};
		/**
		* Namespace rules for an element in the HTML namespace.
		*
		* @param tagName the element's lowercase tag name
		* @param parent the (possibly simulated) parent node
		* @param parentTagName the parent's lowercase tag name
		* @returns true if a spec-compliant parser could produce this element
		*/
		const _checkHtmlNamespace = function _checkHtmlNamespace(tagName, parent, parentTagName) {
			if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
			if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
			return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
		};
		/**
		* @param element a DOM element whose namespace is being checked
		* @returns Return false if the element has a
		*  namespace that a spec-compliant parser would never
		*  return. Return true otherwise.
		*/
		const _checkValidNamespace = function _checkValidNamespace(element) {
			let parent = getParentNode(element);
			if (!parent || !parent.tagName) parent = {
				namespaceURI: NAMESPACE,
				tagName: "template"
			};
			const tagName = stringToLowerCase(element.tagName);
			const parentTagName = stringToLowerCase(parent.tagName);
			if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
			if (element.namespaceURI === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parent, parentTagName);
			if (element.namespaceURI === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parent, parentTagName);
			if (element.namespaceURI === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parent, parentTagName);
			if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
			return false;
		};
		/**
		* _forceRemove
		*
		* @param node a DOM node
		*/
		const _forceRemove = function _forceRemove(node) {
			arrayPush(DOMPurify.removed, { element: node });
			try {
				getParentNode(node).removeChild(node);
			} catch (_) {
				remove(node);
				if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
			}
		};
		/**
		* _neutralizeRoot
		*
		* Fail-closed teardown of an in-place root after the sanitize walk aborts
		* (campaign-3 F2). An internal throw mid-walk вЂ” e.g. a page-registered
		* custom element's reaction detaches a node so `_forceRemove`'s deliberate
		* parentless guard throws, or any other re-entrant engine mutation вЂ” would
		* otherwise leave the caller's *live* tree half-sanitized, with everything
		* after the abort point still carrying its handlers. There is no safe way
		* to resume the walk (the tree mutated under us), so we strip the root bare:
		* remove every child and every attribute, then let the caller's catch see
		* the original error. Clobber-safe (cached `remove`/`childNodes`/`attributes`
		* getters; the root was already clobber-pre-flighted at the IN_PLACE entry).
		*
		* @param root the in-place root to empty
		*/
		const _neutralizeRoot = function _neutralizeRoot(root) {
			const childNodes = getChildNodes(root);
			if (childNodes) {
				const snapshot = [];
				arrayForEach(childNodes, (child) => {
					arrayPush(snapshot, child);
				});
				arrayForEach(snapshot, (child) => {
					try {
						remove(child);
					} catch (_) {}
				});
			}
			const attributes = getAttributes(root);
			if (attributes) for (let i = attributes.length - 1; i >= 0; --i) {
				const attribute = attributes[i];
				const name = attribute && attribute.name;
				if (typeof name === "string") try {
					root.removeAttribute(name);
				} catch (_) {}
			}
		};
		/**
		* _removeAttribute
		*
		* @param name an Attribute name
		* @param element a DOM node
		*/
		const _removeAttribute = function _removeAttribute(name, element) {
			try {
				arrayPush(DOMPurify.removed, {
					attribute: element.getAttributeNode(name),
					from: element
				});
			} catch (_) {
				arrayPush(DOMPurify.removed, {
					attribute: null,
					from: element
				});
			}
			element.removeAttribute(name);
			if (name === "is") if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
				_forceRemove(element);
			} catch (_) {}
			else try {
				element.setAttribute(name, "");
			} catch (_) {}
		};
		/**
		* _stripDisallowedAttributes
		*
		* Removes every attribute the active configuration does not allow from a
		* single element, using the same allowlist as the main attribute pass (so
		* `on*` handlers go, but no `/^on/` blocklist is introduced). Used only to
		* neutralise nodes that are being discarded from an in-place tree.
		*
		* @param element the element to strip
		*/
		const _stripDisallowedAttributes = function _stripDisallowedAttributes(element) {
			const attributes = getAttributes(element);
			if (!attributes) return;
			for (let i = attributes.length - 1; i >= 0; --i) {
				const attribute = attributes[i];
				const name = attribute && attribute.name;
				if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) continue;
				try {
					element.removeAttribute(name);
				} catch (_) {}
			}
		};
		/**
		* _neutralizeSubtree
		*
		* Completes the audit-5 F1 fix across every removal path. The KEEP_CONTENT
		* move-hoist neutralises only disallowed-tag removals; clobber, mXSS-canary,
		* namespace, comment, processing-instruction and KEEP_CONTENT:false removals
		* all drop their subtree wholesale via `_forceRemove`. On the IN_PLACE path
		* those dropped nodes are detached from the caller's LIVE tree but a
		* handler-bearing original among them (an `<img onerror>`/`<video>` that was
		* loading) keeps its queued resource event, which fires in page scope after
		* sanitize returns. This walks a removed subtree and strips every attribute
		* the active configuration does not allow вЂ” so `on*` handlers are cancelled
		* through the SAME allowlist that governs kept nodes, not a separate `/^on/`
		* blocklist. Run synchronously before sanitize returns, i.e. before any
		* queued event can fire. Hook-free by design: these nodes leave the output,
		* so firing attribute hooks for them would be surprising. Clobber-safe reads;
		* a doomed clobbered node may shadow `removeAttribute` (its own attributes are
		* irrelevant вЂ” it is discarded вЂ” while its non-clobbered descendants, e.g.
		* the `<img>`, are reached and scrubbed).
		*
		* @param root the root of a removed subtree to neutralise
		*/
		const _neutralizeSubtree = function _neutralizeSubtree(root) {
			const stack = [root];
			while (stack.length > 0) {
				const node = stack.pop();
				if ((getNodeType ? getNodeType(node) : node.nodeType) === NODE_TYPE.element) _stripDisallowedAttributes(node);
				const childNodes = getChildNodes(node);
				if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
			}
		};
		/**
		* _initDocument
		*
		* @param dirty - a string of dirty markup
		* @return a DOM, filled with the dirty markup
		*/
		const _initDocument = function _initDocument(dirty) {
			let doc = null;
			let leadingWhitespace = null;
			if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
			else {
				const matches = stringMatch(dirty, /^[\r\n\t ]+/);
				leadingWhitespace = matches && matches[0];
			}
			if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
			const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
			if (NAMESPACE === HTML_NAMESPACE) try {
				doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
			} catch (_) {}
			if (!doc || !doc.documentElement) {
				doc = implementation.createDocument(NAMESPACE, "template", null);
				try {
					doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
				} catch (_) {}
			}
			const body = doc.body || doc.documentElement;
			if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
			if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
			return WHOLE_DOCUMENT ? doc.documentElement : body;
		};
		/**
		* Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
		*
		* @param root The root element or node to start traversing on.
		* @return The created NodeIterator
		*/
		const _createNodeIterator = function _createNodeIterator(root) {
			return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
		};
		/**
		* Replace template expression syntax (mustache, ERB, template
		* literal) with a space; shared by all SAFE_FOR_TEMPLATES scrub
		* sites. Order matters: mustache, then ERB, then template literal.
		*
		* @param value the string to scrub
		* @returns the scrubbed string
		*/
		const _stripTemplateExpressions = function _stripTemplateExpressions(value) {
			value = stringReplace(value, MUSTACHE_EXPR$1, " ");
			value = stringReplace(value, ERB_EXPR$1, " ");
			value = stringReplace(value, TMPLIT_EXPR$1, " ");
			return value;
		};
		/**
		* Strip template-engine expressions ({{...}}, ${...}, <%...%>) from the
		* character data of an element subtree. Used as the final safety net for
		* SAFE_FOR_TEMPLATES on every DOM-returning code path so that expressions
		* which only form after text-node normalization (e.g. fragments split across
		* stripped elements) cannot survive into a template-evaluating framework.
		*
		* Walks text/comment/CDATA/processing-instruction nodes and mutates `.data`
		* in place rather than round-tripping through innerHTML. This preserves
		* descendant node references (important for IN_PLACE callers), avoids a
		* serialize/reparse cycle, and reads literal character data вЂ” which means
		* `<%...%>` in text content matches the ERB regex against its real bytes
		* instead of the HTML-entity-escaped form innerHTML would produce.
		*
		* Attribute values are not visited here; SAFE_FOR_TEMPLATES handling for
		* attributes is performed during the per-node `_sanitizeAttributes` pass.
		*
		* @param node The root element whose character data should be scrubbed.
		*/
		const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
			var _node$querySelectorAl;
			node.normalize();
			const walker = createNodeIterator.call(node.ownerDocument || node, node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION, null);
			let currentNode = walker.nextNode();
			while (currentNode) {
				currentNode.data = _stripTemplateExpressions(currentNode.data);
				currentNode = walker.nextNode();
			}
			const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
			if (templates) arrayForEach(templates, (tmpl) => {
				if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
			});
		};
		/**
		* _isClobbered
		*
		* Detect DOM-clobbering on HTMLFormElement nodes. Form is the only HTML
		* interface with [LegacyOverrideBuiltIns]; a descendant element with a
		* `name` attribute matching a prototype property shadows that property
		* on direct reads. We use this check at the IN_PLACE entry-point and
		* during attribute sanitization to refuse clobbered forms.
		*
		* @param element element to check for clobbering attacks
		* @return true if clobbered, false if safe
		*/
		const _isClobbered = function _isClobbered(element) {
			const realTagName = getNodeName ? getNodeName(element) : null;
			if (typeof realTagName !== "string") return false;
			if (transformCaseFunc(realTagName) !== "form") return false;
			return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
		};
		/**
		* Checks whether the given value is a DocumentFragment from any realm.
		*
		* The realm-independent replacement reads `nodeType` through the cached
		* Node.prototype getter and compares to the DOCUMENT_FRAGMENT_NODE
		* constant (11). nodeType is a numeric value resolved from the node's
		* internal slot, identical across realms for the same kind of node.
		*
		* @param value object to check
		* @return true if value is a DocumentFragment-shaped node from any realm
		*/
		const _isDocumentFragment = function _isDocumentFragment(value) {
			if (!getNodeType || typeof value !== "object" || value === null) return false;
			try {
				return getNodeType(value) === NODE_TYPE.documentFragment;
			} catch (_) {
				return false;
			}
		};
		/**
		* Checks whether the given object is a DOM node, including nodes that
		* originate from a different window/realm (e.g. an iframe's
		* contentDocument). The previous `value instanceof Node` check was
		* realm-bound: nodes from a different window failed it, causing
		* sanitize() to silently stringify them and reset IN_PLACE to false,
		* returning the original node unsanitized. See GHSA-4w3q-35jp-p934.
		*
		* @param value object to check whether it's a DOM node
		* @return true if value is a DOM node from any realm
		*/
		const _isNode = function _isNode(value) {
			if (!getNodeType || typeof value !== "object" || value === null) return false;
			try {
				return typeof getNodeType(value) === "number";
			} catch (_) {
				return false;
			}
		};
		function _executeHooks(hooks, currentNode, data) {
			if (hooks.length === 0) return;
			arrayForEach(hooks, (hook) => {
				hook.call(DOMPurify, currentNode, data, CONFIG);
			});
		}
		/**
		* Structural-threat checks that condemn a node regardless of the
		* allowlists: mXSS via namespace confusion, risky CSS construction,
		* processing instructions, markup-bearing comments. Pure predicate;
		* the caller removes. Check order is load-bearing.
		*
		* @param currentNode the node to inspect
		* @param tagName the node's transformCaseFunc'd tag name
		* @return true if the node must be removed
		*/
		const _isUnsafeNode = function _isUnsafeNode(currentNode, tagName) {
			if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
			if (SAFE_FOR_XML && currentNode.namespaceURI === HTML_NAMESPACE && tagName === "style" && _isNode(currentNode.firstElementChild)) return true;
			if (currentNode.nodeType === NODE_TYPE.processingInstruction) return true;
			if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
			return false;
		};
		/**
		* Handle a node whose tag is forbidden or not allowlisted: keep
		* allowed custom elements (false return exits _sanitizeElements
		* early - namespace/fallback checks and the afterSanitizeElements
		* hook are intentionally skipped for kept custom elements), else
		* hoist content per KEEP_CONTENT and remove.
		*
		* @param currentNode the disallowed node
		* @param tagName the node's transformCaseFunc'd tag name
		* @return true if the node was removed, false if kept
		*/
		const _sanitizeDisallowedNode = function _sanitizeDisallowedNode(currentNode, tagName) {
			if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
				if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
				if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
			}
			if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
				const parentNode = getParentNode(currentNode);
				const childNodes = getChildNodes(currentNode);
				if (childNodes && parentNode) {
					const childCount = childNodes.length;
					for (let i = childCount - 1; i >= 0; --i) {
						const hoisted = IN_PLACE ? childNodes[i] : cloneNode(childNodes[i], true);
						parentNode.insertBefore(hoisted, getNextSibling(currentNode));
					}
				}
			}
			_forceRemove(currentNode);
			return true;
		};
		/**
		* _sanitizeElements
		*
		* @protect nodeName
		* @protect textContent
		* @protect removeChild
		* @param currentNode to check for permission to exist
		* @return true if node was killed, false if left alive
		*/
		const _sanitizeElements = function _sanitizeElements(currentNode) {
			_executeHooks(hooks.beforeSanitizeElements, currentNode, null);
			if (_isClobbered(currentNode)) {
				_forceRemove(currentNode);
				return true;
			}
			const tagName = transformCaseFunc(getNodeName ? getNodeName(currentNode) : currentNode.nodeName);
			_executeHooks(hooks.uponSanitizeElement, currentNode, {
				tagName,
				allowedTags: ALLOWED_TAGS
			});
			if (_isUnsafeNode(currentNode, tagName)) {
				_forceRemove(currentNode);
				return true;
			}
			if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) return _sanitizeDisallowedNode(currentNode, tagName);
			if ((getNodeType ? getNodeType(currentNode) : currentNode.nodeType) === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
				_forceRemove(currentNode);
				return true;
			}
			if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
				_forceRemove(currentNode);
				return true;
			}
			if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
				const content = _stripTemplateExpressions(currentNode.textContent);
				if (currentNode.textContent !== content) {
					arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
					currentNode.textContent = content;
				}
			}
			_executeHooks(hooks.afterSanitizeElements, currentNode, null);
			return false;
		};
		/**
		* _isValidAttribute
		*
		* @param lcTag Lowercase tag name of containing element.
		* @param lcName Lowercase attribute name.
		* @param value Attribute value.
		* @return Returns true if `value` is valid, otherwise false.
		*/
		const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
			if (FORBID_ATTR[lcName]) return false;
			if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
			const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
			if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName));
			else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName));
			else if (!nameIsPermitted) if (_isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)));
			else return false;
			else if (URI_SAFE_ATTRIBUTES[lcName]);
			else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, "")));
			else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]);
			else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, "")));
			else if (value) return false;
			return true;
		};
		const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
			"annotation-xml",
			"color-profile",
			"font-face",
			"font-face-format",
			"font-face-name",
			"font-face-src",
			"font-face-uri",
			"missing-glyph"
		]);
		/**
		* _isBasicCustomElement
		* checks if at least one dash is included in tagName, and it's not the first char
		* for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
		*
		* @param tagName name of the tag of the node to sanitize
		* @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
		*/
		const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
			return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
		};
		/**
		* Wrap an attribute value in the matching Trusted Types object when
		* the active policy requires it. Namespaced attributes pass through
		* unchanged (no TT support yet, see
		* https://bugs.chromium.org/p/chromium/issues/detail?id=1305293).
		*
		* @param lcTag lowercase tag name of the containing element
		* @param lcName lowercase attribute name
		* @param namespaceURI the attribute's namespace, if any
		* @param value the attribute value to wrap
		* @return the value, wrapped when Trusted Types demand it
		*/
		const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value) {
			if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
				case "TrustedHTML": return _createTrustedHTML(value);
				case "TrustedScriptURL": return _createTrustedScriptURL(value);
			}
			return value;
		};
		/**
		* Write a modified attribute value back onto the element. On
		* success, re-probe for clobbering introduced by the new value and
		* remove the element when found; otherwise pop the removal entry
		* recorded by the earlier _removeAttribute (long-standing pairing
		* with the SANITIZE_NAMED_PROPS path - do not "fix" casually). On
		* failure, remove the attribute instead.
		*
		* @param currentNode the element carrying the attribute
		* @param name the attribute name as present on the element
		* @param namespaceURI the attribute's namespace, if any
		* @param value the new attribute value
		*/
		const _setAttributeValue = function _setAttributeValue(currentNode, name, namespaceURI, value) {
			try {
				if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
				else currentNode.setAttribute(name, value);
				if (_isClobbered(currentNode)) _forceRemove(currentNode);
				else arrayPop(DOMPurify.removed);
			} catch (_) {
				_removeAttribute(name, currentNode);
			}
		};
		/**
		* _sanitizeAttributes
		*
		* @protect attributes
		* @protect nodeName
		* @protect removeAttribute
		* @protect setAttribute
		*
		* @param currentNode to sanitize
		*/
		const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
			_executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
			const attributes = currentNode.attributes;
			if (!attributes || _isClobbered(currentNode)) return;
			const hookEvent = {
				attrName: "",
				attrValue: "",
				keepAttr: true,
				allowedAttributes: ALLOWED_ATTR,
				forceKeepAttr: void 0
			};
			let l = attributes.length;
			const lcTag = transformCaseFunc(currentNode.nodeName);
			while (l--) {
				const attr = attributes[l];
				const name = attr.name;
				const namespaceURI = attr.namespaceURI;
				const attrValue = attr.value;
				const lcName = transformCaseFunc(name);
				const initValue = attrValue;
				let value = name === "value" ? initValue : stringTrim(initValue);
				hookEvent.attrName = lcName;
				hookEvent.attrValue = value;
				hookEvent.keepAttr = true;
				hookEvent.forceKeepAttr = void 0;
				_executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
				value = hookEvent.attrValue;
				if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
					_removeAttribute(name, currentNode);
					value = SANITIZE_NAMED_PROPS_PREFIX + value;
				}
				if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (lcName === "attributename" && stringMatch(value, "href")) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (hookEvent.forceKeepAttr) continue;
				if (!hookEvent.keepAttr) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
				if (!_isValidAttribute(lcTag, lcName, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
				if (value !== initValue) _setAttributeValue(currentNode, name, namespaceURI, value);
			}
			_executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
		};
		/**
		* _sanitizeShadowDOM
		*
		* @param fragment to iterate over recursively
		*/
		const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
			let shadowNode = null;
			const shadowIterator = _createNodeIterator(fragment);
			_executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
			while (shadowNode = shadowIterator.nextNode()) {
				_executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
				_sanitizeElements(shadowNode);
				_sanitizeAttributes(shadowNode);
				if (_isDocumentFragment(shadowNode.content)) _sanitizeShadowDOM2(shadowNode.content);
				if ((getNodeType ? getNodeType(shadowNode) : shadowNode.nodeType) === NODE_TYPE.element) {
					const innerSr = getShadowRoot(shadowNode);
					if (_isDocumentFragment(innerSr)) {
						_sanitizeAttachedShadowRoots(innerSr);
						_sanitizeShadowDOM2(innerSr);
					}
				}
			}
			_executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
		};
		/**
		* _sanitizeAttachedShadowRoots
		*
		* Walks `root` and feeds every attached shadow root we encounter into
		* the existing _sanitizeShadowDOM pipeline. The default node iterator
		* does not descend into shadow trees, so nodes inside an attached
		* shadow root would otherwise be skipped entirely.
		*
		* Two real input paths put attached shadow roots in front of us:
		*   1. IN_PLACE on a DOM node that already has shadow roots attached.
		*   2. DOM-node input where importNode(dirty, true) deep-clones the
		*      shadow root because it was created with `clonable: true`.
		*
		* This pass runs once, up front, so the main iteration loop (and the
		* existing _sanitizeShadowDOM template-content recursion) stay
		* untouched вЂ” string-input paths are not affected.
		*
		* @param root the subtree root to walk for attached shadow roots
		*/
		const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots(root) {
			const stack = [{
				node: root,
				shadow: null
			}];
			while (stack.length > 0) {
				const item = stack.pop();
				if (item.shadow) {
					_sanitizeShadowDOM2(item.shadow);
					continue;
				}
				const node = item.node;
				const isElement = (getNodeType ? getNodeType(node) : node.nodeType) === NODE_TYPE.element;
				const childNodes = getChildNodes(node);
				if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
					node: childNodes[i],
					shadow: null
				});
				if (isElement) {
					const rootName = getNodeName ? getNodeName(node) : null;
					if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
						const content = node.content;
						if (_isDocumentFragment(content)) stack.push({
							node: content,
							shadow: null
						});
					}
				}
				if (isElement) {
					const sr = getShadowRoot(node);
					if (_isDocumentFragment(sr)) stack.push({
						node: null,
						shadow: sr
					}, {
						node: sr,
						shadow: null
					});
				}
			}
		};
		DOMPurify.sanitize = function(dirty) {
			let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			let body = null;
			let importedNode = null;
			let currentNode = null;
			let returnNode = null;
			IS_EMPTY_INPUT = !dirty;
			if (IS_EMPTY_INPUT) dirty = "<!-->";
			if (typeof dirty !== "string" && !_isNode(dirty)) {
				dirty = stringifyValue(dirty);
				if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
			}
			if (!DOMPurify.isSupported) return dirty;
			if (SET_CONFIG) {
				ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
				ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
			} else _parseConfig(cfg);
			if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) ALLOWED_TAGS = clone(ALLOWED_TAGS);
			if (hooks.uponSanitizeAttribute.length > 0) ALLOWED_ATTR = clone(ALLOWED_ATTR);
			DOMPurify.removed = [];
			const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
			if (inPlace) {
				const nn = getNodeName ? getNodeName(dirty) : dirty.nodeName;
				if (typeof nn === "string") {
					const tagName = transformCaseFunc(nn);
					if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
				}
				if (_isClobbered(dirty)) throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
				try {
					_sanitizeAttachedShadowRoots(dirty);
				} catch (error) {
					_neutralizeRoot(dirty);
					throw error;
				}
			} else if (_isNode(dirty)) {
				body = _initDocument("<!---->");
				importedNode = body.ownerDocument.importNode(dirty, true);
				if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
				else if (importedNode.nodeName === "HTML") body = importedNode;
				else body.appendChild(importedNode);
				_sanitizeAttachedShadowRoots(importedNode);
			} else {
				if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
				body = _initDocument(dirty);
				if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
			}
			if (body && FORCE_BODY) _forceRemove(body.firstChild);
			const nodeIterator = _createNodeIterator(inPlace ? dirty : body);
			try {
				while (currentNode = nodeIterator.nextNode()) {
					_sanitizeElements(currentNode);
					_sanitizeAttributes(currentNode);
					if (_isDocumentFragment(currentNode.content)) _sanitizeShadowDOM2(currentNode.content);
				}
			} catch (error) {
				if (inPlace) _neutralizeRoot(dirty);
				throw error;
			}
			if (inPlace) {
				arrayForEach(DOMPurify.removed, (entry) => {
					if (entry.element) _neutralizeSubtree(entry.element);
				});
				if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
				return dirty;
			}
			if (RETURN_DOM) {
				if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
				if (RETURN_DOM_FRAGMENT) {
					returnNode = createDocumentFragment.call(body.ownerDocument);
					while (body.firstChild) returnNode.appendChild(body.firstChild);
				} else returnNode = body;
				if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
				return returnNode;
			}
			let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
			if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
			if (SAFE_FOR_TEMPLATES) serializedHTML = _stripTemplateExpressions(serializedHTML);
			return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
		};
		DOMPurify.setConfig = function() {
			let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_parseConfig(cfg);
			SET_CONFIG = true;
			SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
			SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
		};
		DOMPurify.clearConfig = function() {
			CONFIG = null;
			SET_CONFIG = false;
			SET_CONFIG_ALLOWED_TAGS = null;
			SET_CONFIG_ALLOWED_ATTR = null;
			trustedTypesPolicy = defaultTrustedTypesPolicy;
			emptyHTML = "";
		};
		DOMPurify.isValidAttribute = function(tag, attr, value) {
			if (!CONFIG) _parseConfig({});
			const lcTag = transformCaseFunc(tag);
			const lcName = transformCaseFunc(attr);
			return _isValidAttribute(lcTag, lcName, value);
		};
		DOMPurify.addHook = function(entryPoint, hookFunction) {
			if (typeof hookFunction !== "function") return;
			if (!objectHasOwnProperty(hooks, entryPoint)) return;
			arrayPush(hooks[entryPoint], hookFunction);
		};
		DOMPurify.removeHook = function(entryPoint, hookFunction) {
			if (!objectHasOwnProperty(hooks, entryPoint)) return;
			if (hookFunction !== void 0) {
				const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
				return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
			}
			return arrayPop(hooks[entryPoint]);
		};
		DOMPurify.removeHooks = function(entryPoint) {
			if (!objectHasOwnProperty(hooks, entryPoint)) return;
			hooks[entryPoint] = [];
		};
		DOMPurify.removeAllHooks = function() {
			hooks = _createHooksMap();
		};
		return DOMPurify;
	}
	var entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor, freeze, seal, create, _ref, apply, construct, arrayForEach, arrayLastIndexOf, arrayPop, arrayPush, arraySplice, arrayIsArray, stringToLowerCase, stringToString, stringMatch, stringReplace, stringIndexOf, stringTrim, numberToString, booleanToString, bigintToString, symbolToString, objectHasOwnProperty, objectToString, regExpTest, typeErrorCreate, html$1, svg$1, svgFilters, svgDisallowed, mathMl$1, mathMlDisallowed, text, html, svg, mathMl, xml, MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, DATA_ATTR, ARIA_ATTR, IS_ALLOWED_URI, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, DOCTYPE_NAME, CUSTOM_ELEMENT, ELEMENT_MARKUP_PROBE, COMMENT_MARKUP_PROBE, FALLBACK_TAG_CLOSE, SELF_CLOSING_TAG, NODE_TYPE, getGlobal, _createTrustedTypesPolicy, _createHooksMap, _resolveSetOption, purify;
	var init_purify_es = __esmMin((() => {
		entries = Object.entries;
		setPrototypeOf = Object.setPrototypeOf;
		isFrozen = Object.isFrozen;
		getPrototypeOf = Object.getPrototypeOf;
		getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		freeze = Object.freeze;
		seal = Object.seal;
		create = Object.create;
		_ref = typeof Reflect !== "undefined" && Reflect;
		apply = _ref.apply;
		construct = _ref.construct;
		if (!freeze) freeze = function freeze(x) {
			return x;
		};
		if (!seal) seal = function seal(x) {
			return x;
		};
		if (!apply) apply = function apply(func, thisArg) {
			for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
			return func.apply(thisArg, args);
		};
		if (!construct) construct = function construct(Func) {
			for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
			return new Func(...args);
		};
		arrayForEach = unapply(Array.prototype.forEach);
		arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
		arrayPop = unapply(Array.prototype.pop);
		arrayPush = unapply(Array.prototype.push);
		arraySplice = unapply(Array.prototype.splice);
		arrayIsArray = Array.isArray;
		stringToLowerCase = unapply(String.prototype.toLowerCase);
		stringToString = unapply(String.prototype.toString);
		stringMatch = unapply(String.prototype.match);
		stringReplace = unapply(String.prototype.replace);
		stringIndexOf = unapply(String.prototype.indexOf);
		stringTrim = unapply(String.prototype.trim);
		numberToString = unapply(Number.prototype.toString);
		booleanToString = unapply(Boolean.prototype.toString);
		bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
		symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
		objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
		objectToString = unapply(Object.prototype.toString);
		regExpTest = unapply(RegExp.prototype.test);
		typeErrorCreate = unconstruct(TypeError);
		html$1 = freeze([
			"a",
			"abbr",
			"acronym",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"bdi",
			"bdo",
			"big",
			"blink",
			"blockquote",
			"body",
			"br",
			"button",
			"canvas",
			"caption",
			"center",
			"cite",
			"code",
			"col",
			"colgroup",
			"content",
			"data",
			"datalist",
			"dd",
			"decorator",
			"del",
			"details",
			"dfn",
			"dialog",
			"dir",
			"div",
			"dl",
			"dt",
			"element",
			"em",
			"fieldset",
			"figcaption",
			"figure",
			"font",
			"footer",
			"form",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"head",
			"header",
			"hgroup",
			"hr",
			"html",
			"i",
			"img",
			"input",
			"ins",
			"kbd",
			"label",
			"legend",
			"li",
			"main",
			"map",
			"mark",
			"marquee",
			"menu",
			"menuitem",
			"meter",
			"nav",
			"nobr",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"search",
			"section",
			"select",
			"shadow",
			"slot",
			"small",
			"source",
			"spacer",
			"span",
			"strike",
			"strong",
			"style",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"template",
			"textarea",
			"tfoot",
			"th",
			"thead",
			"time",
			"tr",
			"track",
			"tt",
			"u",
			"ul",
			"var",
			"video",
			"wbr"
		]);
		svg$1 = freeze([
			"svg",
			"a",
			"altglyph",
			"altglyphdef",
			"altglyphitem",
			"animatecolor",
			"animatemotion",
			"animatetransform",
			"circle",
			"clippath",
			"defs",
			"desc",
			"ellipse",
			"enterkeyhint",
			"exportparts",
			"filter",
			"font",
			"g",
			"glyph",
			"glyphref",
			"hkern",
			"image",
			"inputmode",
			"line",
			"lineargradient",
			"marker",
			"mask",
			"metadata",
			"mpath",
			"part",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"radialgradient",
			"rect",
			"stop",
			"style",
			"switch",
			"symbol",
			"text",
			"textpath",
			"title",
			"tref",
			"tspan",
			"view",
			"vkern"
		]);
		svgFilters = freeze([
			"feBlend",
			"feColorMatrix",
			"feComponentTransfer",
			"feComposite",
			"feConvolveMatrix",
			"feDiffuseLighting",
			"feDisplacementMap",
			"feDistantLight",
			"feDropShadow",
			"feFlood",
			"feFuncA",
			"feFuncB",
			"feFuncG",
			"feFuncR",
			"feGaussianBlur",
			"feImage",
			"feMerge",
			"feMergeNode",
			"feMorphology",
			"feOffset",
			"fePointLight",
			"feSpecularLighting",
			"feSpotLight",
			"feTile",
			"feTurbulence"
		]);
		svgDisallowed = freeze([
			"animate",
			"color-profile",
			"cursor",
			"discard",
			"font-face",
			"font-face-format",
			"font-face-name",
			"font-face-src",
			"font-face-uri",
			"foreignobject",
			"hatch",
			"hatchpath",
			"mesh",
			"meshgradient",
			"meshpatch",
			"meshrow",
			"missing-glyph",
			"script",
			"set",
			"solidcolor",
			"unknown",
			"use"
		]);
		mathMl$1 = freeze([
			"math",
			"menclose",
			"merror",
			"mfenced",
			"mfrac",
			"mglyph",
			"mi",
			"mlabeledtr",
			"mmultiscripts",
			"mn",
			"mo",
			"mover",
			"mpadded",
			"mphantom",
			"mroot",
			"mrow",
			"ms",
			"mspace",
			"msqrt",
			"mstyle",
			"msub",
			"msup",
			"msubsup",
			"mtable",
			"mtd",
			"mtext",
			"mtr",
			"munder",
			"munderover",
			"mprescripts"
		]);
		mathMlDisallowed = freeze([
			"maction",
			"maligngroup",
			"malignmark",
			"mlongdiv",
			"mscarries",
			"mscarry",
			"msgroup",
			"mstack",
			"msline",
			"msrow",
			"semantics",
			"annotation",
			"annotation-xml",
			"mprescripts",
			"none"
		]);
		text = freeze(["#text"]);
		html = freeze([
			"accept",
			"action",
			"align",
			"alt",
			"autocapitalize",
			"autocomplete",
			"autopictureinpicture",
			"autoplay",
			"background",
			"bgcolor",
			"border",
			"capture",
			"cellpadding",
			"cellspacing",
			"checked",
			"cite",
			"class",
			"clear",
			"color",
			"cols",
			"colspan",
			"command",
			"commandfor",
			"controls",
			"controlslist",
			"coords",
			"crossorigin",
			"datetime",
			"decoding",
			"default",
			"dir",
			"disabled",
			"disablepictureinpicture",
			"disableremoteplayback",
			"download",
			"draggable",
			"enctype",
			"enterkeyhint",
			"exportparts",
			"face",
			"for",
			"headers",
			"height",
			"hidden",
			"high",
			"href",
			"hreflang",
			"id",
			"inert",
			"inputmode",
			"integrity",
			"ismap",
			"kind",
			"label",
			"lang",
			"list",
			"loading",
			"loop",
			"low",
			"max",
			"maxlength",
			"media",
			"method",
			"min",
			"minlength",
			"multiple",
			"muted",
			"name",
			"nonce",
			"noshade",
			"novalidate",
			"nowrap",
			"open",
			"optimum",
			"part",
			"pattern",
			"placeholder",
			"playsinline",
			"popover",
			"popovertarget",
			"popovertargetaction",
			"poster",
			"preload",
			"pubdate",
			"radiogroup",
			"readonly",
			"rel",
			"required",
			"rev",
			"reversed",
			"role",
			"rows",
			"rowspan",
			"spellcheck",
			"scope",
			"selected",
			"shape",
			"size",
			"sizes",
			"slot",
			"span",
			"srclang",
			"start",
			"src",
			"srcset",
			"step",
			"style",
			"summary",
			"tabindex",
			"title",
			"translate",
			"type",
			"usemap",
			"valign",
			"value",
			"width",
			"wrap",
			"xmlns"
		]);
		svg = freeze([
			"accent-height",
			"accumulate",
			"additive",
			"alignment-baseline",
			"amplitude",
			"ascent",
			"attributename",
			"attributetype",
			"azimuth",
			"basefrequency",
			"baseline-shift",
			"begin",
			"bias",
			"by",
			"class",
			"clip",
			"clippathunits",
			"clip-path",
			"clip-rule",
			"color",
			"color-interpolation",
			"color-interpolation-filters",
			"color-profile",
			"color-rendering",
			"cx",
			"cy",
			"d",
			"dx",
			"dy",
			"diffuseconstant",
			"direction",
			"display",
			"divisor",
			"dur",
			"edgemode",
			"elevation",
			"end",
			"exponent",
			"fill",
			"fill-opacity",
			"fill-rule",
			"filter",
			"filterunits",
			"flood-color",
			"flood-opacity",
			"font-family",
			"font-size",
			"font-size-adjust",
			"font-stretch",
			"font-style",
			"font-variant",
			"font-weight",
			"fx",
			"fy",
			"g1",
			"g2",
			"glyph-name",
			"glyphref",
			"gradientunits",
			"gradienttransform",
			"height",
			"href",
			"id",
			"image-rendering",
			"in",
			"in2",
			"intercept",
			"k",
			"k1",
			"k2",
			"k3",
			"k4",
			"kerning",
			"keypoints",
			"keysplines",
			"keytimes",
			"lang",
			"lengthadjust",
			"letter-spacing",
			"kernelmatrix",
			"kernelunitlength",
			"lighting-color",
			"local",
			"marker-end",
			"marker-mid",
			"marker-start",
			"markerheight",
			"markerunits",
			"markerwidth",
			"maskcontentunits",
			"maskunits",
			"max",
			"mask",
			"mask-type",
			"media",
			"method",
			"mode",
			"min",
			"name",
			"numoctaves",
			"offset",
			"operator",
			"opacity",
			"order",
			"orient",
			"orientation",
			"origin",
			"overflow",
			"paint-order",
			"path",
			"pathlength",
			"patterncontentunits",
			"patterntransform",
			"patternunits",
			"points",
			"preservealpha",
			"preserveaspectratio",
			"primitiveunits",
			"r",
			"rx",
			"ry",
			"radius",
			"refx",
			"refy",
			"repeatcount",
			"repeatdur",
			"restart",
			"result",
			"rotate",
			"scale",
			"seed",
			"shape-rendering",
			"slope",
			"specularconstant",
			"specularexponent",
			"spreadmethod",
			"startoffset",
			"stddeviation",
			"stitchtiles",
			"stop-color",
			"stop-opacity",
			"stroke-dasharray",
			"stroke-dashoffset",
			"stroke-linecap",
			"stroke-linejoin",
			"stroke-miterlimit",
			"stroke-opacity",
			"stroke",
			"stroke-width",
			"style",
			"surfacescale",
			"systemlanguage",
			"tabindex",
			"tablevalues",
			"targetx",
			"targety",
			"transform",
			"transform-origin",
			"text-anchor",
			"text-decoration",
			"text-rendering",
			"textlength",
			"type",
			"u1",
			"u2",
			"unicode",
			"values",
			"viewbox",
			"visibility",
			"version",
			"vert-adv-y",
			"vert-origin-x",
			"vert-origin-y",
			"width",
			"word-spacing",
			"wrap",
			"writing-mode",
			"xchannelselector",
			"ychannelselector",
			"x",
			"x1",
			"x2",
			"xmlns",
			"y",
			"y1",
			"y2",
			"z",
			"zoomandpan"
		]);
		mathMl = freeze([
			"accent",
			"accentunder",
			"align",
			"bevelled",
			"close",
			"columnalign",
			"columnlines",
			"columnspacing",
			"columnspan",
			"denomalign",
			"depth",
			"dir",
			"display",
			"displaystyle",
			"encoding",
			"fence",
			"frame",
			"height",
			"href",
			"id",
			"largeop",
			"length",
			"linethickness",
			"lquote",
			"lspace",
			"mathbackground",
			"mathcolor",
			"mathsize",
			"mathvariant",
			"maxsize",
			"minsize",
			"movablelimits",
			"notation",
			"numalign",
			"open",
			"rowalign",
			"rowlines",
			"rowspacing",
			"rowspan",
			"rspace",
			"rquote",
			"scriptlevel",
			"scriptminsize",
			"scriptsizemultiplier",
			"selection",
			"separator",
			"separators",
			"stretchy",
			"subscriptshift",
			"supscriptshift",
			"symmetric",
			"voffset",
			"width",
			"xmlns"
		]);
		xml = freeze([
			"xlink:href",
			"xml:id",
			"xlink:title",
			"xml:space",
			"xmlns:xlink"
		]);
		MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
		ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
		TMPLIT_EXPR = seal(/\${[\w\W]*/g);
		DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
		ARIA_ATTR = seal(/^aria-[\-\w]+$/);
		IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
		IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
		ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
		DOCTYPE_NAME = seal(/^html$/i);
		CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
		ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
		COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
		FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
		SELF_CLOSING_TAG = seal(/\/>/i);
		NODE_TYPE = {
			element: 1,
			attribute: 2,
			text: 3,
			cdataSection: 4,
			entityReference: 5,
			entityNode: 6,
			processingInstruction: 7,
			comment: 8,
			document: 9,
			documentType: 10,
			documentFragment: 11,
			notation: 12
		};
		getGlobal = function getGlobal() {
			return typeof window === "undefined" ? null : window;
		};
		_createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
			if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
			let suffix = null;
			const ATTR_NAME = "data-tt-policy-suffix";
			if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
			const policyName = "dompurify" + (suffix ? "#" + suffix : "");
			try {
				return trustedTypes.createPolicy(policyName, {
					createHTML(html) {
						return html;
					},
					createScriptURL(scriptUrl) {
						return scriptUrl;
					}
				});
			} catch (_) {
				console.warn("TrustedTypes policy " + policyName + " could not be created.");
				return null;
			}
		};
		_createHooksMap = function _createHooksMap() {
			return {
				afterSanitizeAttributes: [],
				afterSanitizeElements: [],
				afterSanitizeShadowDOM: [],
				beforeSanitizeAttributes: [],
				beforeSanitizeElements: [],
				beforeSanitizeShadowDOM: [],
				uponSanitizeAttribute: [],
				uponSanitizeElement: [],
				uponSanitizeShadowNode: []
			};
		};
		_resolveSetOption = function _resolveSetOption(cfg, key, fallback, options) {
			return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
		};
		purify = createDOMPurify();
	}));
	//#endregion
	//#region modules/payments/assets/js/frontend/handlers/stripe-button.js
	var stripe_button_exports = /* @__PURE__ */ __exportAll({ default: () => StripeHandler });
	var StripeHandler;
	var init_stripe_button = __esmMin((() => {
		init_purify_es();
		StripeHandler = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return { selectors: {
					form: ".elementor-stripe-form",
					errors: ".elementor-message-danger"
				} };
			}
			getDefaultElements() {
				const settings = this.getSettings();
				return {
					form: this.$element[0].querySelector(settings.selectors.form),
					errors: this.$element[0].querySelectorAll(settings.selectors.errors),
					post_id: this.$element.closest("[data-elementor-id]").attr("data-elementor-id")
				};
			}
			handleSubmit(event) {
				event.preventDefault();
				if (elementorFrontend.isEditMode()) return;
				if (this.elements.errors.innerHTML !== "") document.querySelectorAll(".elementor-stripe-error-message").forEach((e) => e.remove());
				const stripeForm = this.elements.form;
				const formData = new FormData(stripeForm);
				const ajaxurl = formData.get("url");
				const action = formData.get("action");
				const postId = parseInt(this.elements.post_id);
				const widgetId = formData.get("widget_id");
				const customErrorMsg = formData.get("custom_error_msg");
				const customErrorMsgGlobal = formData.get("custom_error_msg_global");
				const customErrorMsgPayment = formData.get("custom_error_msg_payment");
				const nonce = formData.get("stripe_form_submit_nonce");
				const pageUrl = document.URL;
				const target = "yes" === formData.get("open_in_new_window") ? "_blank" : "_self";
				const createErrorContainer = (errorMsg) => {
					const errorDiv = document.createElement("div");
					const errorCont = stripeForm.appendChild(errorDiv);
					errorCont.className = "elementor-message elementor-stripe-error-message elementor-message-danger";
					errorCont.innerHTML = `${purify.sanitize(errorMsg)}`;
				};
				const data = {
					action,
					postId,
					widgetId,
					pageUrl,
					nonce
				};
				if (0 < this.elements.errors.length) this.elements.errors.forEach((error) => {
					error.classList.remove("elementor-hidden");
				});
				else jQuery.post(ajaxurl, {
					action,
					data
				}).done((response) => {
					const code = response.response.code;
					const result2 = response.body && JSON.parse(response.body);
					switch (code) {
						case 200:
							window.open(result2.url, target);
							break;
						case 401:
						case 403:
							if (customErrorMsg) createErrorContainer(customErrorMsgPayment);
							else createErrorContainer(result2.error.message);
							break;
						default: if (customErrorMsg) createErrorContainer(customErrorMsgGlobal);
						else createErrorContainer(result2.error.message);
					}
				}).fail(() => {
					if (customErrorMsg) createErrorContainer(customErrorMsgGlobal);
					else createErrorContainer(result.error.message);
				});
			}
			bindEvents() {
				this.elements.form.addEventListener("submit", (e) => this.handleSubmit(e));
			}
		};
	}));
	//#endregion
	//#region modules/payments/assets/js/frontend/frontend.js
	var frontend_default$1 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("paypal-button", () => __vitePreload(() => Promise.resolve().then(() => (init_paypal_button(), paypal_button_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("stripe-button", () => __vitePreload(() => Promise.resolve().then(() => (init_stripe_button(), stripe_button_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/progress-tracker/assets/js/frontend/handlers/circular-progress.js
	var CircularProgress;
	var init_circular_progress = __esmMin((() => {
		CircularProgress = class {
			constructor(element, settings) {
				this.settings = settings;
				this.lastKnownProgress = null;
				this.circularProgressTracker = element.find(".elementor-scrolling-tracker-circular")[0];
				this.circularCurrentProgress = this.circularProgressTracker.getElementsByClassName("current-progress")[0];
				this.circularCurrentProgressPercentage = this.circularProgressTracker.getElementsByClassName("current-progress-percentage")[0];
				const circumference = this.circularCurrentProgress.r.baseVal.value * 2 * Math.PI;
				this.circularCurrentProgress.style.strokeDasharray = `${circumference} ${circumference}`;
				this.circularCurrentProgress.style.strokeDashoffset = circumference;
				this.elements = this.cacheElements();
				this.resizeObserver = new ResizeObserver(() => {
					if (this.lastKnownProgress) this.updateProgress(this.lastKnownProgress);
				});
				this.resizeObserver.observe(this.circularProgressTracker);
			}
			cacheElements() {
				return {
					circularProgressTracker: this.circularProgressTracker,
					circularCurrentProgress: this.circularCurrentProgress,
					circularCurrentProgressPercentage: this.circularCurrentProgressPercentage
				};
			}
			updateProgress(progress) {
				if (progress <= 0) {
					this.elements.circularCurrentProgress.style.display = "none";
					this.elements.circularCurrentProgressPercentage.style.display = "none";
					return;
				}
				this.elements.circularCurrentProgress.style.display = "block";
				this.elements.circularCurrentProgressPercentage.style.display = "block";
				const circumference = this.elements.circularCurrentProgress.r.baseVal.value * 2 * Math.PI;
				const offset = circumference - progress / 100 * circumference;
				this.lastKnownProgress = progress;
				this.elements.circularCurrentProgress.style.strokeDasharray = `${circumference} ${circumference}`;
				this.elements.circularCurrentProgress.style.strokeDashoffset = "ltr" === this.settings.direction ? -offset : offset;
				if ("yes" === this.settings.percentage) this.elements.circularCurrentProgressPercentage.innerHTML = Math.round(progress) + "%";
			}
			onDestroy() {
				this.resizeObserver.unobserve(this.circularProgressTracker);
			}
		};
	}));
	//#endregion
	//#region modules/progress-tracker/assets/js/frontend/handlers/linear-progress.js
	var LinearProgress;
	var init_linear_progress = __esmMin((() => {
		LinearProgress = class {
			constructor(element, settings) {
				this.settings = settings;
				this.linearProgressTracker = element.find(".elementor-scrolling-tracker-horizontal")[0];
				this.linearCurrentProgress = this.linearProgressTracker.getElementsByClassName("current-progress")[0];
				this.linearCurrentProgressPercentage = this.linearProgressTracker.getElementsByClassName("current-progress-percentage")[0];
				this.elements = this.cacheElements();
			}
			cacheElements() {
				return {
					linearProgressTracker: this.linearProgressTracker,
					linearCurrentProgress: this.linearCurrentProgress,
					linearCurrentProgressPercentage: this.linearCurrentProgressPercentage
				};
			}
			updateProgress(progress) {
				if (progress < 1) {
					this.elements.linearCurrentProgress.style.display = "none";
					return;
				}
				this.elements.linearCurrentProgress.style.display = "flex";
				this.elements.linearCurrentProgress.style.width = progress + "%";
				if ("yes" === this.settings.percentage && this.elements.linearCurrentProgress.getBoundingClientRect().width > this.elements.linearCurrentProgressPercentage.getBoundingClientRect().width * 1.5) {
					this.elements.linearCurrentProgressPercentage.innerHTML = Math.round(progress) + "%";
					this.elements.linearCurrentProgressPercentage.style.color = getComputedStyle(this.linearCurrentProgress).getPropertyValue("--percentage-color");
				} else this.elements.linearCurrentProgressPercentage.style.color = "transparent";
			}
		};
	}));
	//#endregion
	//#region modules/progress-tracker/assets/js/frontend/handlers/progress-tracker.js
	var progress_tracker_exports = /* @__PURE__ */ __exportAll({ default: () => ProgressTracker });
	var ProgressTracker;
	var init_progress_tracker = __esmMin((() => {
		init_circular_progress();
		init_linear_progress();
		ProgressTracker = class extends elementorModules.frontend.handlers.Base {
			onInit() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				this.circular = "circular" === this.getElementSettings().type;
				const Handler = this.circular ? CircularProgress : LinearProgress;
				this.progressBar = new Handler(this.$element, this.getElementSettings());
				this.progressPercentage = 0;
				this.scrollHandler();
				this.handler = this.scrollHandler.bind(this);
				this.initListeners();
			}
			getTrackingElementSelector() {
				const trackingElementSetting = this.getElementSettings().relative_to;
				let selector;
				switch (trackingElementSetting) {
					case "selector":
						selector = jQuery(this.getElementSettings().selector);
						break;
					case "post_content":
						selector = jQuery(".elementor-widget-theme-post-content");
						break;
					default:
						selector = this.isScrollSnap() ? jQuery("#e-scroll-snap-container") : elementorFrontend.elements.$body;
						break;
				}
				return selector;
			}
			isScrollSnap() {
				return "yes" === (this.isEdit ? elementor.settings.page.model.attributes.scroll_snap : elementorFrontend.config.settings.page.scroll_snap) ? true : false;
			}
			addScrollSnapContainer() {
				if (this.isScrollSnap() && !jQuery("#e-scroll-snap-container").length) jQuery("body").wrapInner("<div id=\"e-scroll-snap-container\" />");
			}
			scrollHandler() {
				this.addScrollSnapContainer();
				const $trackingElementSelector = this.getTrackingElementSelector();
				const scrollStartPercentage = $trackingElementSelector.is(elementorFrontend.elements.$body) || $trackingElementSelector.is(jQuery("#e-scroll-snap-container")) ? -100 : 0;
				this.progressPercentage = elementorModules.utils.Scroll.getElementViewportPercentage(this.getTrackingElementSelector(), {
					start: scrollStartPercentage,
					end: -100
				});
				this.progressBar.updateProgress(this.progressPercentage);
			}
			initListeners() {
				window.addEventListener("scroll", this.handler);
				elementorFrontend.elements.$body[0].addEventListener("scroll", this.handler);
			}
			onDestroy() {
				if (this.progressBar.onDestroy) this.progressBar.onDestroy();
				window.removeEventListener("scroll", this.handler);
				elementorFrontend.elements.$body[0].removeEventListener("scroll", this.handler);
			}
		};
	}));
	//#endregion
	//#region modules/progress-tracker/assets/js/frontend/frontend.js
	var frontend_default = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("progress-tracker", () => __vitePreload(() => Promise.resolve().then(() => (init_progress_tracker(), progress_tracker_exports)), void 0));
		}
	};
	//#endregion
	//#region assets/dev/js/frontend/utils/controls.js
	var Controls = class {
		/**
		* Get Control Value
		*
		* Retrieves a control value.
		* This function has been copied from `elementor/assets/dev/js/editor/utils/conditions.js`.
		*
		* @since 3.11.0
		*
		* @param {{}}     controlSettings A settings object (e.g. element settings - keys and values)
		* @param {string} controlKey      The control key name
		* @param {string} controlSubKey   A specific property of the control object.
		* @return {*} Control Value
		*/
		getControlValue(controlSettings, controlKey, controlSubKey) {
			let value;
			if ("object" === typeof controlSettings[controlKey] && controlSubKey) value = controlSettings[controlKey][controlSubKey];
			else value = controlSettings[controlKey];
			return value;
		}
		/**
		* Get the value of a responsive control.
		*
		* Retrieves the value of a responsive control for the current device or for this first parent device which has a control value.
		*
		* @since 3.11.0
		*
		* @param {{}}     controlSettings A settings object (e.g. element settings - keys and values)
		* @param {string} controlKey      The control key name
		* @param {string} controlSubKey   A specific property of the control object.
		* @return {*} Control Value
		*/
		getResponsiveControlValue(controlSettings, controlKey, controlSubKey = "") {
			const currentDeviceMode = elementorFrontend.getCurrentDeviceMode();
			const controlValueDesktop = this.getControlValue(controlSettings, controlKey, controlSubKey);
			if ("widescreen" === currentDeviceMode) {
				const controlValueWidescreen = this.getControlValue(controlSettings, `${controlKey}_widescreen`, controlSubKey);
				return !!controlValueWidescreen || 0 === controlValueWidescreen ? controlValueWidescreen : controlValueDesktop;
			}
			const activeBreakpoints = elementorFrontend.breakpoints.getActiveBreakpointsList({ withDesktop: true });
			let parentDeviceMode = currentDeviceMode;
			let deviceIndex = activeBreakpoints.indexOf(currentDeviceMode);
			let controlValue = "";
			while (deviceIndex <= activeBreakpoints.length) {
				if ("desktop" === parentDeviceMode) {
					controlValue = controlValueDesktop;
					break;
				}
				const responsiveControlKey = `${controlKey}_${parentDeviceMode}`;
				const responsiveControlValue = this.getControlValue(controlSettings, responsiveControlKey, controlSubKey);
				if (!!responsiveControlValue || 0 === responsiveControlValue) {
					controlValue = responsiveControlValue;
					break;
				}
				deviceIndex++;
				parentDeviceMode = activeBreakpoints[deviceIndex];
			}
			return controlValue;
		}
	};
	//#endregion
	//#region assets/dev/js/frontend/utils/dropdown-menu-height-controller.js
	var DropdownMenuHeightController = class {
		constructor(widgetConfig) {
			this.widgetConfig = widgetConfig;
		}
		calculateStickyMenuNavHeight() {
			this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName, "");
			const menuToggleHeight = this.widgetConfig.elements.$dropdownMenuContainer.offset().top - jQuery(window).scrollTop();
			return elementorFrontend.elements.$window.height() - menuToggleHeight;
		}
		calculateMenuTabContentHeight($tab) {
			return elementorFrontend.elements.$window.height() - $tab[0].getBoundingClientRect().top;
		}
		isElementSticky() {
			return this.widgetConfig.elements.$element.hasClass("elementor-sticky") || this.widgetConfig.elements.$element.parents(".elementor-sticky").length;
		}
		getMenuHeight() {
			return this.isElementSticky() ? this.calculateStickyMenuNavHeight() + "px" : this.widgetConfig.settings.dropdownMenuContainerMaxHeight;
		}
		setMenuHeight(menuHeight) {
			this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName, menuHeight);
		}
		reassignMobileMenuHeight() {
			const menuHeight = this.isToggleActive() ? this.getMenuHeight() : 0;
			return this.setMenuHeight(menuHeight);
		}
		reassignMenuHeight($activeTabContent) {
			if (!this.isElementSticky() || 0 === $activeTabContent.length) return;
			const offsetBottom = elementorFrontend.elements.$window.height() - $activeTabContent[0].getBoundingClientRect().top;
			if (!($activeTabContent.height() > offsetBottom)) return;
			$activeTabContent.css("height", this.calculateMenuTabContentHeight($activeTabContent) + "px");
			$activeTabContent.css("overflow-y", "scroll");
		}
		resetMenuHeight($activeTabContent) {
			if (!this.isElementSticky()) return;
			$activeTabContent.css("height", "initial");
			$activeTabContent.css("overflow-y", "visible");
		}
		isToggleActive() {
			var _this$widgetConfig$at;
			const $menuToggle = this.widgetConfig.elements.$menuToggle;
			if (!!((_this$widgetConfig$at = this.widgetConfig.attributes) === null || _this$widgetConfig$at === void 0 ? void 0 : _this$widgetConfig$at.menuToggleState)) return "true" === $menuToggle.attr(this.widgetConfig.attributes.menuToggleState);
			return $menuToggle.hasClass(this.widgetConfig.classes.menuToggleActiveClass);
		}
	};
	//#endregion
	//#region assets/dev/js/frontend/frontend.js
	var ElementorProFrontend = class extends elementorModules.ViewModule {
		onInit() {
			super.onInit();
			this.config = ElementorProFrontendConfig;
			this.modules = {};
			this.initOnReadyComponents();
		}
		bindEvents() {
			jQuery(window).on("elementor/frontend/init", this.onElementorFrontendInit.bind(this));
		}
		initModules() {
			let handlers = {
				motionFX: frontend_default$5,
				sticky: frontend_default$4,
				codeHighlight: frontend_default$3,
				videoPlaylist: frontend_default$2,
				payments: frontend_default$1,
				progressTracker: frontend_default
			};
			elementorProFrontend.trigger("elementor-pro/modules/init/before");
			handlers = elementorFrontend.hooks.applyFilters("elementor-pro/frontend/handlers", handlers);
			jQuery.each(handlers, (moduleName, ModuleClass) => {
				this.modules[moduleName] = new ModuleClass();
			});
			this.modules.linkActions = { addAction: (...args) => {
				elementorFrontend.utils.urlActions.addAction(...args);
			} };
		}
		onElementorFrontendInit() {
			this.initModules();
		}
		initOnReadyComponents() {
			this.utils = {
				controls: new Controls(),
				DropdownMenuHeightController
			};
		}
	};
	window.elementorProFrontend = new ElementorProFrontend();
	//#endregion
})();

//# sourceMappingURL=frontend.js.map
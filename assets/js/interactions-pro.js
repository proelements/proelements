/*! pro-elements - v4.3.0 - 22-09-2026 */
"use strict";
(function() {
	//#endregion
	//#region modules/interactions/assets/js/interactions-utils.js
	var __defProp = Object.defineProperty;
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
	var { config: getConfig, skipInteraction, extractInteractionId, getAnimateFunction, getInViewFunction, waitForAnimateFunction, parseInteractionsData, unwrapInteractionValue, timingValueToMs } = window.elementorModules.interactions;
	var { resetElementStyles, getTransformBaselineFromComputedStyle, preserveTransformKeyframes } = window.elementorModules.interactions;
	if (!resetElementStyles) resetElementStyles = (element) => {
		if (!element) return;
		element.style.transition = "";
		element.style.transform = "";
		element.style.opacity = "";
	};
	if (!getTransformBaselineFromComputedStyle || !preserveTransformKeyframes) {
		let parseMatrixValues = function(transformValue) {
			const match = transformValue.match(/^matrix(3d)?\((.+)\)$/);
			if (!match) return null;
			return match[2].split(",").map((token) => Number.parseFloat(token.trim())).filter((value) => Number.isFinite(value));
		};
		let createMatrixFromTransform = function(transformValue) {
			var _a;
			var _b;
			var _c;
			var _d;
			var _e;
			var _f;
			var _g;
			var _h;
			var _i;
			var _j;
			var _k;
			var _l;
			if (!transformValue || "none" === transformValue) return null;
			const matrixFactories = [window.DOMMatrixReadOnly, window.DOMMatrix].filter((Factory) => "function" === typeof Factory);
			for (const MatrixFactory of matrixFactories) try {
				const matrix = new MatrixFactory(transformValue);
				const compactMatrix = {
					matrixXfromX: (_b = (_a = matrix.a) != null ? _a : matrix.m11) != null ? _b : 1,
					matrixYfromX: (_d = (_c = matrix.b) != null ? _c : matrix.m12) != null ? _d : 0,
					matrixXfromY: (_f = (_e = matrix.c) != null ? _e : matrix.m21) != null ? _f : 0,
					matrixYfromY: (_h = (_g = matrix.d) != null ? _g : matrix.m22) != null ? _h : 1,
					matrixTranslateX: (_j = (_i = matrix.e) != null ? _i : matrix.m41) != null ? _j : 0,
					matrixTranslateY: (_l = (_k = matrix.f) != null ? _k : matrix.m42) != null ? _l : 0
				};
				if (Object.values(compactMatrix).every(Number.isFinite)) return compactMatrix;
			} catch (e) {}
			const parsedValues = parseMatrixValues(transformValue);
			if (!parsedValues) return null;
			if (6 === parsedValues.length) {
				const [matrixXfromX, matrixYfromX, matrixXfromY, matrixYfromY, matrixTranslateX, matrixTranslateY] = parsedValues;
				return {
					matrixXfromX,
					matrixYfromX,
					matrixXfromY,
					matrixYfromY,
					matrixTranslateX,
					matrixTranslateY
				};
			}
			if (16 === parsedValues.length) {
				const [matrixXfromX, matrixYfromX, , , matrixXfromY, matrixYfromY, , , , , , , matrixTranslateX, matrixTranslateY] = parsedValues;
				return {
					matrixXfromX,
					matrixYfromX,
					matrixXfromY,
					matrixYfromY,
					matrixTranslateX,
					matrixTranslateY
				};
			}
			return null;
		};
		const TRANSFORM_EPSILON = .001;
		const radiansToDegrees = (radians) => radians * (180 / Math.PI);
		const isNear = (value, expected) => Math.abs(value - expected) <= TRANSFORM_EPSILON;
		const isNearZero = (value) => isNear(value, 0);
		const isNearOne = (value) => isNear(value, 1);
		if (!getTransformBaselineFromComputedStyle) getTransformBaselineFromComputedStyle = (element) => {
			if (!element) return null;
			const computedStyle = window.getComputedStyle(element);
			const matrix = createMatrixFromTransform((computedStyle == null ? void 0 : computedStyle.transform) || "");
			if (!matrix) return null;
			const { matrixXfromX, matrixYfromX, matrixXfromY, matrixYfromY, matrixTranslateX, matrixTranslateY } = matrix;
			const scaleX = Math.hypot(matrixXfromX, matrixYfromX);
			const determinant = matrixXfromX * matrixYfromY - matrixYfromX * matrixXfromY;
			const scaleY = scaleX ? determinant / scaleX : Math.hypot(matrixXfromY, matrixYfromY);
			const rotate = radiansToDegrees(Math.atan2(matrixYfromX, matrixXfromX));
			const shear = scaleX ? (matrixXfromX * matrixXfromY + matrixYfromX * matrixYfromY) / (scaleX * scaleX) : 0;
			const skewX = radiansToDegrees(Math.atan(shear));
			return {
				x: matrixTranslateX,
				y: matrixTranslateY,
				scaleX: Number.isFinite(scaleX) ? scaleX : 1,
				scaleY: Number.isFinite(scaleY) ? scaleY : 1,
				rotate: Number.isFinite(rotate) ? rotate : 0,
				skewX: Number.isFinite(skewX) ? skewX : 0
			};
		};
		if (!preserveTransformKeyframes) preserveTransformKeyframes = (keyframes, baseline) => {
			if (!baseline) return keyframes;
			const mergedKeyframes = __spreadValues({}, keyframes);
			const hasScaleShorthand = mergedKeyframes.scale !== void 0;
			const canSetScaleX = mergedKeyframes.scaleX === void 0 && !isNearOne(baseline.scaleX);
			const canSetScaleY = mergedKeyframes.scaleY === void 0 && !isNearOne(baseline.scaleY);
			if (mergedKeyframes.x === void 0 && !isNearZero(baseline.x)) mergedKeyframes.x = [baseline.x, baseline.x];
			if (mergedKeyframes.y === void 0 && !isNearZero(baseline.y)) mergedKeyframes.y = [baseline.y, baseline.y];
			if (!hasScaleShorthand) if (canSetScaleX && canSetScaleY && isNear(baseline.scaleX, baseline.scaleY)) mergedKeyframes.scale = [baseline.scaleX, baseline.scaleX];
			else {
				if (canSetScaleX) mergedKeyframes.scaleX = [baseline.scaleX, baseline.scaleX];
				if (canSetScaleY) mergedKeyframes.scaleY = [baseline.scaleY, baseline.scaleY];
			}
			if (mergedKeyframes.rotate === void 0 && mergedKeyframes.rotateZ === void 0 && !isNearZero(baseline.rotate)) mergedKeyframes.rotate = [baseline.rotate, baseline.rotate];
			if (mergedKeyframes.skew === void 0 && mergedKeyframes.skewX === void 0 && !isNearZero(baseline.skewX)) mergedKeyframes.skewX = [baseline.skewX, baseline.skewX];
			return mergedKeyframes;
		};
	}
	function getScrollFunction() {
		return motionFunc("scroll");
	}
	function getClickFunction() {
		return motionFunc("press");
	}
	function getHoverFunction() {
		return motionFunc("hover");
	}
	function motionFunc(name) {
		var _a;
		var _b;
		if ("function" !== typeof ((_a = window == null ? void 0 : window.Motion) == null ? void 0 : _a[name])) return null;
		return (_b = window == null ? void 0 : window.Motion) == null ? void 0 : _b[name];
	}
	function animationKeyframes(animConfig) {
		if ("custom" === animConfig.animation.effect) return getKeyframes({
			type: "custom",
			preset: animConfig.animation.customEffect
		});
		return getKeyframes({
			type: "preset",
			preset: {
				effect: animConfig.animation.effect,
				type: animConfig.animation.type,
				direction: animConfig.animation.direction
			}
		});
	}
	function buildKeyframesFromConfig(customEffect) {
		var _a;
		const mapping = {
			opacity: [],
			scaleX: [],
			scaleY: [],
			skewX: [],
			skewY: [],
			rotateX: [],
			rotateY: [],
			rotateZ: [],
			x: [],
			y: [],
			z: []
		};
		(_a = customEffect == null ? void 0 : customEffect.keyframes) == null || _a.forEach((keyframe) => {
			const settings = keyframe.settings;
			Object.entries(mapping).forEach(([key, value]) => {
				if (settings.hasOwnProperty(key)) value.push(settings[key]);
			});
		});
		const keyframes = {};
		for (const [key, value] of Object.entries(mapping)) {
			if (1 > value.length) continue;
			keyframes[key] = value;
		}
		return keyframes;
	}
	function buildKeyframesFromPreset({ effect, type, direction }) {
		const isIn = "in" === type;
		const keyframes = {};
		if ("fade" === effect) keyframes.opacity = isIn ? [0, 1] : [1, 0];
		const config = getConfig();
		if ("scale" === effect) keyframes.scale = isIn ? [config.scaleStart, 1] : [1, config.scaleStart];
		if (direction && "string" === typeof direction) {
			const distance = config.slideDistance;
			const movement = {
				left: { x: isIn ? [-distance, 0] : [0, -distance] },
				right: { x: isIn ? [distance, 0] : [0, distance] },
				top: { y: isIn ? [-distance, 0] : [0, -distance] },
				bottom: { y: isIn ? [distance, 0] : [0, distance] }
			};
			direction.split("-").forEach((part) => {
				if (movement[part]) Object.assign(keyframes, movement[part]);
			});
		}
		return keyframes;
	}
	function getKeyframes({ type, preset }) {
		if ("custom" === type) return buildKeyframesFromConfig(preset);
		if ("preset" !== type) return {};
		return buildKeyframesFromPreset(preset);
	}
	function parseAnimationName(name) {
		const [trigger, effect, type, direction, duration, delay, replay, easing, relativeTo, end, start] = name.split("-");
		const config = getConfig();
		return {
			trigger,
			animation: {
				effect,
				customEffect: {},
				type,
				direction: direction || null,
				replay: replay != null ? replay : false,
				relativeTo: relativeTo != null ? relativeTo : config.relativeTo,
				start: start ? parseInt(start, 10) : config.start,
				end: end ? parseInt(end, 10) : config.end,
				easing: easing != null ? easing : config.defaultEasing,
				repeat: "",
				times: 1,
				timing: {
					duration: duration ? parseInt(duration, 10) : config.defaultDuration,
					delay: delay ? parseInt(delay, 10) : config.defaultDelay
				}
			}
		};
	}
	function extractAnimationConfig(interaction) {
		var _a;
		if ("string" === typeof interaction) return parseAnimationName(interaction);
		const payload = "interaction-item" === (interaction == null ? void 0 : interaction.$$type) && (interaction == null ? void 0 : interaction.value) ? interaction.value : interaction;
		if (!payload) return null;
		if ((_a = payload == null ? void 0 : payload.animation) == null ? void 0 : _a.animation_id) return parseAnimationName(payload.animation.animation_id);
		const animation = unwrapInteractionValue(payload.animation);
		if (!animation) return null;
		const breakpoints = unwrapInteractionBreakpoints(payload.breakpoints);
		const animationConfig = unwrapInteractionValue(animation.config, {});
		const config = getConfig();
		return {
			trigger: unwrapInteractionValue(payload.trigger, "load"),
			breakpoints,
			animation: {
				effect: unwrapInteractionValue(animation.effect, "fade"),
				customEffect: unwrapCustomEffect(animation.custom_effect, {}),
				type: unwrapInteractionValue(animation.type, "in"),
				direction: unwrapInteractionValue(animation.direction, ""),
				replay: unwrapInteractionValue(animationConfig.replay, false),
				relativeTo: unwrapInteractionValue(animationConfig.relativeTo, config.relativeTo),
				start: sizeValueToNumber(animationConfig.start, config.start),
				end: sizeValueToNumber(animationConfig.end, config.end),
				easing: unwrapInteractionValue(animationConfig.easing, config.defaultEasing),
				repeat: unwrapInteractionValue(animationConfig.repeat, ""),
				times: unwrapInteractionValue(animationConfig.times, 1),
				timing: unwrapTiming(animation.timing_config)
			}
		};
	}
	function unwrapInteractionBreakpoints(propValue) {
		const excluded = unwrapInteractionValue(unwrapInteractionValue(propValue, {}).excluded, []);
		if (1 > excluded.length) return {};
		return { excluded: excluded.map((breakpoint) => unwrapInteractionValue(breakpoint, "")) };
	}
	function unwrapTiming(propValue) {
		const config = getConfig();
		const timingConfig = unwrapInteractionValue(propValue, {});
		return {
			duration: timingValueToMs(timingConfig == null ? void 0 : timingConfig.duration, config.defaultDuration),
			delay: timingValueToMs(timingConfig == null ? void 0 : timingConfig.delay, config.defaultDelay)
		};
	}
	function denullify(obj) {
		return Object.entries(obj).reduce((acc, [key, value]) => {
			if (null === value || void 0 === value || "" === value) return acc;
			acc[key] = value;
			return acc;
		}, {});
	}
	function unwrapCustomEffect(propValue) {
		const keyframes = unwrapInteractionValue(unwrapInteractionValue(propValue, {}).keyframes, []).map((keyframe) => {
			const keyframeStop = unwrapInteractionValue(keyframe, {});
			const stop = unwrapInteractionValue(keyframeStop.stop, {});
			const settings = unwrapInteractionValue(keyframeStop.settings, {});
			const move = unwrapInteractionValue(settings.move, {});
			const scale = unwrapInteractionValue(settings.scale, {});
			const skew = unwrapInteractionValue(settings.skew, {});
			const rotate = unwrapInteractionValue(settings.rotate, {});
			return {
				stop: stop.size,
				settings: denullify({
					opacity: sizeValue(settings.opacity),
					x: sizeValue(move.x),
					y: sizeValue(move.y),
					z: sizeValue(move.z),
					rotateX: sizeValue(rotate.x),
					rotateY: sizeValue(rotate.y),
					rotateZ: sizeValue(rotate.z),
					scaleX: sizeValueToNumber(scale.x),
					scaleY: sizeValueToNumber(scale.y),
					skewX: sizeValue(skew.x),
					skewY: sizeValue(skew.y)
				})
			};
		}).sort((a, b) => {
			if (a.stop === b.stop) return 0;
			return a.stop - b.stop;
		});
		if (1 > keyframes.length) return {};
		return { keyframes };
	}
	function sizeValue(propValue) {
		const size = unwrapInteractionValue(unwrapInteractionValue(propValue));
		return [size == null ? void 0 : size.size, size == null ? void 0 : size.unit].join("") || null;
	}
	function sizeValueToNumber(value, fallback = null) {
		if (null === value || value === void 0) return fallback;
		const unwrapped = unwrapInteractionValue(value);
		if ("number" === typeof unwrapped) return unwrapped;
		const sizeObj = unwrapInteractionValue(unwrapped);
		return sizeObj == null ? void 0 : sizeObj.size;
	}
	function getAnimationRepeatOptions(animationConfig = {}) {
		const repeatMode = unwrapInteractionValue(animationConfig.repeat, "");
		if ("loop" === repeatMode) return { repeat: Infinity };
		if ("times" === repeatMode) {
			const rawTimes = unwrapInteractionValue(animationConfig.times, 1);
			return { repeat: Math.max((Number.isFinite(rawTimes) ? Math.max(0, Math.floor(rawTimes)) : 0) - 1, 0) };
		}
		return {};
	}
	//#endregion
	//#region modules/interactions/assets/js/interactions-breakpoints.js
	var RESIZE_DEBOUNCE_TIMEOUT = 100;
	var breakpoints = {
		list: {},
		active: {},
		onChange: () => {}
	};
	function matchBreakpoint(width) {
		for (const label in breakpoints.list) {
			const breakpoint = breakpoints.list[label];
			if ("min" === breakpoint.direction && width >= breakpoint.value) return label;
			if ("max" === breakpoint.direction && breakpoint.value >= width) return label;
		}
		return "desktop";
	}
	function attachEventListeners() {
		let timeout = null;
		const onResize = () => {
			if (timeout) {
				window.clearTimeout(timeout);
				timeout = null;
			}
			timeout = window.setTimeout(() => {
				const currentBreakpoint = matchBreakpoint(window.innerWidth);
				if (currentBreakpoint === breakpoints.active) return;
				breakpoints.active = currentBreakpoint;
				if ("function" === typeof breakpoints.onChange) breakpoints.onChange(breakpoints.active);
			}, RESIZE_DEBOUNCE_TIMEOUT);
		};
		window.addEventListener("resize", onResize);
	}
	function getBreakpointsList() {
		var _ElementorInteraction;
		return ((_ElementorInteraction = ElementorInteractionsConfig) === null || _ElementorInteraction === void 0 ? void 0 : _ElementorInteraction.breakpoints) || {};
	}
	function initBreakpoints({ onChange } = {}) {
		breakpoints.list = getBreakpointsList();
		breakpoints.active = matchBreakpoint(window.innerWidth);
		if ("function" === typeof onChange) breakpoints.onChange = onChange;
		attachEventListeners();
	}
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
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/objectSpread2.js
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r2) {
				return Object.getOwnPropertyDescriptor(e, r2).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
				_defineProperty(e, r2, t[r2]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
				Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
			});
		}
		return e;
	}
	//#endregion
	//#region modules/interactions/assets/js/interactions-pro.js
	function shouldStopAnimation(replay) {
		return [
			false,
			0,
			"0",
			"false",
			void 0
		].includes(replay);
	}
	function scrollOutAnimation(element, transition, animConfig, keyframes, options, animateFunc, inViewFunc, baseline) {
		const viewOptions = {
			amount: .85,
			root: null
		};
		animateFunc(element, preserveTransformKeyframes(getKeyframes({
			type: "preset",
			preset: {
				effect: animConfig.animation.effect,
				type: "in",
				direction: animConfig.animation.direction
			}
		}), baseline), { duration: 0 });
		const stop = inViewFunc(element, () => {
			return () => {
				animateFunc(element, keyframes, options).then(() => {
					element.style.transition = transition;
				});
				if (false === animConfig.animation.replay) stop();
			};
		}, viewOptions);
	}
	function scrollInAnimation(element, transition, animConfig, keyframes, options, animateFunc, inViewFunc) {
		const viewOptions = {
			amount: 0,
			root: null
		};
		const initialKeyframes = {};
		Object.keys(keyframes).forEach((key) => {
			initialKeyframes[key] = keyframes[key][0];
		});
		const shouldStop = shouldStopAnimation(animConfig.animation.replay);
		const stop = inViewFunc(element, () => {
			animateFunc(element, keyframes, options).then(() => {
				element.style.transition = transition;
			});
			if (shouldStop) stop();
			return () => {
				if (!shouldStop) animateFunc(element, initialKeyframes, { duration: 0 });
			};
		}, viewOptions);
	}
	function offsetValue(value, fallback) {
		if (isNaN(Number(value))) return fallback;
		return Number(value);
	}
	function scrollOnAnimation(element, transition, animConfig, keyframes, options, animateFunc, scrollFunc) {
		const start = offsetValue(animConfig.animation.start, 85);
		const end = offsetValue(animConfig.animation.end, 15);
		const relativeTo = animConfig.animation.relativeTo || "viewport";
		const initialKeyframes = {};
		Object.keys(keyframes).forEach((key) => {
			initialKeyframes[key] = keyframes[key][0];
		});
		animateFunc(element, initialKeyframes, { duration: 0 });
		const animation = animateFunc(element, keyframes, _objectSpread2(_objectSpread2({}, options), {}, { autoplay: false }));
		const scrollOptions = {};
		if ("viewport" === relativeTo) {
			scrollOptions.target = element;
			scrollOptions.offset = [`start ${start}%`, `start ${end}%`];
		} else scrollOptions.offset = [`${end}%`, `${start}%`];
		return scrollFunc(animation, scrollOptions);
	}
	function defaultAnimation(element, transition, keyframes, options, animateFunc) {
		animateFunc(element, keyframes, options).then(() => {
			element.style.transition = transition;
		});
	}
	function applyAnimation(element, animConfig, animateFunc, inViewFunc, scrollFunc, hoverFunc, clickFunc) {
		var _animConfig$animation;
		var _config;
		const baseline = getTransformBaselineFromComputedStyle(element);
		const keyframes = preserveTransformKeyframes(animationKeyframes(animConfig), baseline);
		const options = _objectSpread2({
			duration: animConfig.animation.timing.duration * .001,
			delay: animConfig.animation.timing.delay * .001,
			ease: (_animConfig$animation = animConfig.animation.easing) !== null && _animConfig$animation !== void 0 ? _animConfig$animation : (_config = getConfig()) === null || _config === void 0 ? void 0 : _config.defaultEasing
		}, getAnimationRepeatOptions(animConfig.animation));
		const transition = element.style.transition;
		element.style.transition = "none";
		if ("click" === animConfig.trigger) clickAnimation(element, transition, animConfig, keyframes, options, animateFunc, clickFunc);
		else if ("hover" === animConfig.trigger) hoverAnimation(element, transition, animConfig, keyframes, options, animateFunc, hoverFunc);
		else if ("scrollOut" === animConfig.trigger) scrollOutAnimation(element, transition, animConfig, keyframes, options, animateFunc, inViewFunc, baseline);
		else if ("scrollIn" === animConfig.trigger) scrollInAnimation(element, transition, animConfig, keyframes, options, animateFunc, inViewFunc);
		else if ("scrollOn" === animConfig.trigger) scrollOnAnimation(element, transition, animConfig, keyframes, options, animateFunc, scrollFunc);
		else defaultAnimation(element, transition, keyframes, options, animateFunc);
	}
	function clickAnimation(element, transition, animConfig, keyframes, options, animateFunc, clickFunc) {
		clickFunc(element, (elm) => {
			animateFunc(elm, keyframes, options).then(() => {
				elm.style.transition = transition;
			});
		});
	}
	function hoverAnimation(element, transition, animConfig, keyframes, options, animateFunc, hoverFunc) {
		hoverFunc(element, (elm) => {
			animateFunc(elm, keyframes, options).then(() => {
				elm.style.transition = transition;
			});
		});
	}
	function processElementInteractions(element, interactions, animateFunc, inViewFunc, scrollFunc, hoverFunc, clickFunc) {
		if (!interactions || !Array.isArray(interactions)) return;
		interactions.forEach((interaction) => {
			const animConfig = extractAnimationConfig(interaction);
			if (animConfig && !skipInteraction(animConfig)) applyAnimation(element, animConfig, animateFunc, inViewFunc, scrollFunc, hoverFunc, clickFunc);
		});
	}
	function initInteractions() {
		waitForAnimateFunction(() => {
			const animateFunc = getAnimateFunction();
			const inViewFunc = getInViewFunction();
			const scrollFunc = getScrollFunction();
			const hoverFunc = getHoverFunction();
			const clickFunc = getClickFunction();
			if (!inViewFunc || !animateFunc || !scrollFunc || !hoverFunc || !clickFunc) return;
			const dataScript = document.getElementById("elementor-interactions-data");
			if (dataScript) {
				JSON.parse(dataScript.textContent).forEach((elementData) => {
					const { elementId, interactions } = elementData;
					if (!elementId || !interactions || !Array.isArray(interactions)) return;
					document.querySelectorAll(`[data-interaction-id="${elementId}"]`).forEach((element) => {
						processElementInteractions(element, interactions, animateFunc, inViewFunc, scrollFunc, hoverFunc, clickFunc);
					});
				});
				return;
			}
			document.querySelectorAll("[data-interactions]").forEach((element) => {
				processElementInteractions(element, parseInteractionsData(element.getAttribute("data-interactions")), animateFunc, inViewFunc, scrollFunc, hoverFunc, clickFunc);
			});
		});
	}
	function init() {
		initBreakpoints();
		initInteractions();
	}
	if ("loading" === document.readyState) document.addEventListener("DOMContentLoaded", init);
	else init();
	//#endregion
})();

//# sourceMappingURL=interactions-pro.js.map
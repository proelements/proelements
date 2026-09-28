/*! pro-elements - v4.3.0 - 22-09-2026 */
"use strict";
(function() {
	//#region \0rolldown/runtime.js
	var __defProp$2 = Object.defineProperty;
	var __name = (target, value) => __defProp$2(target, "name", {
		value,
		configurable: true
	});
	//#endregion
	//#region modules/interactions/assets/js/interactions-utils.js
	var __defProp$1 = Object.defineProperty;
	var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$1 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$1(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$1 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
		if (__getOwnPropSymbols$1) {
			for (var prop of __getOwnPropSymbols$1(b)) if (__propIsEnum$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
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
			const mergedKeyframes = __spreadValues$1({}, keyframes);
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
	//#region modules/interactions/assets/js/editor-interactions-pro.js
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
	var playingInteractionsToStop = {};
	var MAX_REPEAT_COUNT_EDITOR = 3;
	function applyAnimation(element, animConfig, animateFunc) {
		var _a;
		var _b;
		const { id } = element;
		if (playingInteractionsToStop[id]) {
			playingInteractionsToStop[id].cancel();
			delete playingInteractionsToStop[id];
		}
		const baseline = getTransformBaselineFromComputedStyle(element);
		const keyframes = preserveTransformKeyframes(animationKeyframes(animConfig), baseline);
		const repeatOptions = "scrollOn" === animConfig.trigger ? {} : getAnimationRepeatOptions(animConfig.animation);
		if (repeatOptions.repeat === Infinity) repeatOptions.repeat = MAX_REPEAT_COUNT_EDITOR;
		const options = __spreadValues({
			duration: animConfig.animation.timing.duration * .001,
			delay: animConfig.animation.timing.delay * .001,
			ease: (_b = animConfig.animation.easing) != null ? _b : (_a = getConfig()) == null ? void 0 : _a.defaultEasing
		}, repeatOptions);
		const initialKeyframes = {};
		Object.keys(keyframes).forEach((key) => {
			initialKeyframes[key] = keyframes[key][0];
		});
		element.style.transition = "initial";
		animateFunc(element, initialKeyframes, { duration: 0 }).then(() => {
			const animation = animateFunc(element, keyframes, options);
			playingInteractionsToStop[id] = animation;
			animation.then(() => {
				requestAnimationFrame(() => {
					resetElementStyles(element);
				});
				delete playingInteractionsToStop[id];
			});
		});
	}
	function getInteractionsData() {
		const scriptTag = document.querySelector("script[data-e-interactions=\"true\"]");
		if (!scriptTag) return [];
		try {
			return JSON.parse(scriptTag.textContent || "[]");
		} catch (e) {
			return [];
		}
	}
	function findElementByInteractionId(interactionId) {
		return document.querySelector("[data-interaction-id=\"" + interactionId + "\"]");
	}
	function applyInteractionsToElement(element, interactionsData) {
		const animateFunc = getAnimateFunction();
		if (!animateFunc) return;
		const parsedData = parseInteractionsData(interactionsData);
		if (!parsedData) return;
		Object.values((parsedData == null ? void 0 : parsedData.items) || []).forEach((interaction) => {
			const animConfig = extractAnimationConfig(interaction);
			if (animConfig) applyAnimation(element, animConfig, animateFunc);
		});
	}
	var previousInteractionsData = [];
	function handleInteractionsUpdate() {
		const currentInteractionsData = getInteractionsData();
		currentInteractionsData.filter((currentItem) => {
			var _a;
			var _b;
			const previousItem = previousInteractionsData.find((prev) => prev.dataId === currentItem.dataId);
			if (!previousItem) return true;
			return (((_a = currentItem.interactions) == null ? void 0 : _a.items) || []).map(extractInteractionId).filter(Boolean).sort().join(",") !== (((_b = previousItem.interactions) == null ? void 0 : _b.items) || []).map(extractInteractionId).filter(Boolean).sort().join(",");
		}).forEach((item) => {
			var _a;
			var _b;
			var _c;
			const element = findElementByInteractionId(item.dataId);
			const prevInteractions = (_a = previousInteractionsData.find((prev) => prev.dataId === item.dataId)) == null ? void 0 : _a.interactions;
			if (!element || !((_c = (_b = item.interactions) == null ? void 0 : _b.items) == null ? void 0 : _c.length)) return;
			const prevIds = new Set(((prevInteractions == null ? void 0 : prevInteractions.items) || []).map(extractInteractionId).filter(Boolean));
			const changedInteractions = item.interactions.items.filter((interaction) => {
				const id = extractInteractionId(interaction);
				return !id || !prevIds.has(id);
			});
			if (changedInteractions.length > 0) applyInteractionsToElement(element, __spreadProps(__spreadValues({}, item.interactions), { items: changedInteractions }));
		});
		previousInteractionsData = currentInteractionsData;
	}
	function initEditorInteractionsHandler() {
		waitForAnimateFunction(() => {
			const head = document.head;
			let scriptTag = null;
			let observer = null;
			function setupObserver(tag) {
				if (observer) observer.disconnect();
				observer = new MutationObserver(() => {
					handleInteractionsUpdate();
				});
				observer.observe(tag, {
					childList: true,
					characterData: true,
					subtree: true
				});
				handleInteractionsUpdate();
				registerWindowEvents();
			}
			const headObserver = new MutationObserver(() => {
				const foundScriptTag = document.querySelector("script[data-e-interactions=\"true\"]");
				if (foundScriptTag && foundScriptTag !== scriptTag) {
					scriptTag = foundScriptTag;
					setupObserver(scriptTag);
					headObserver.disconnect();
				}
			});
			headObserver.observe(head, {
				childList: true,
				subtree: true
			});
			scriptTag = document.querySelector("script[data-e-interactions=\"true\"]");
			if (scriptTag) {
				setupObserver(scriptTag);
				headObserver.disconnect();
			}
		});
	}
	function registerWindowEvents() {
		window.top.addEventListener("atomic/play_interactions", handlePlayInteractions);
	}
	function handlePlayInteractions(event) {
		const { elementId, interactionId } = event.detail;
		const item = getInteractionsData().find((elementItemData) => elementItemData.dataId === elementId);
		if (!item) return;
		const element = findElementByInteractionId(elementId);
		if (!element) return;
		applyInteractionsToElement(element, __spreadProps(__spreadValues({}, item.interactions), { items: item.interactions.items.filter((interactionItem) => {
			return extractInteractionId(interactionItem) === interactionId;
		}) }));
	}
	if ("loading" === document.readyState) document.addEventListener("DOMContentLoaded", initEditorInteractionsHandler);
	else initEditorInteractionsHandler();
	//#endregion
})();

//# sourceMappingURL=editor-interactions-pro.js.map
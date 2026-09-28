/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(_wordpress_i18n) {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$7 = Object.defineProperty;
	var __name = (target, value) => __defProp$7(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp$7(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$7(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$3.call(to, key) && key !== except) __defProp$7(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$7(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
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
	//#region modules/animated-headline/assets/js/frontend/handlers/animated-headlines.js
	var animated_headlines_exports = /* @__PURE__ */ __exportAll({ default: () => animated_headlines_default });
	var animated_headlines_default;
	var init_animated_headlines = __esmMin((() => {
		animated_headlines_default = elementorModules.frontend.handlers.Base.extend({
			svgPaths: {
				circle: ["M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"],
				underline_zigzag: ["M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"],
				x: ["M497.4,23.9C301.6,40,155.9,80.6,4,144.4", "M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"],
				strikethrough: ["M3,75h493.5"],
				curly: ["M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"],
				diagonal: ["M13.5,15.5c131,13.7,289.3,55.5,475,125.5"],
				double: ["M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2", "M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8"],
				double_underline: ["M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6", "M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"],
				underline: ["M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"]
			},
			getDefaultSettings() {
				const iterationDelay = this.getElementSettings("rotate_iteration_delay");
				const settings = {
					animationDelay: iterationDelay || 2500,
					lettersDelay: iterationDelay * .02 || 50,
					typeLettersDelay: iterationDelay * .06 || 150,
					selectionDuration: iterationDelay * .2 || 500,
					revealDuration: iterationDelay * .24 || 600,
					revealAnimationDelay: iterationDelay * .6 || 1500,
					highlightAnimationDuration: this.getElementSettings("highlight_animation_duration") || 1200,
					highlightAnimationDelay: this.getElementSettings("highlight_iteration_delay") || 8e3
				};
				settings.typeAnimationDelay = settings.selectionDuration + 800;
				settings.selectors = {
					headline: ".elementor-headline",
					dynamicWrapper: ".elementor-headline-dynamic-wrapper",
					dynamicText: ".elementor-headline-dynamic-text"
				};
				settings.classes = {
					dynamicText: "elementor-headline-dynamic-text",
					dynamicLetter: "elementor-headline-dynamic-letter",
					textActive: "elementor-headline-text-active",
					textInactive: "elementor-headline-text-inactive",
					letters: "elementor-headline-letters",
					animationIn: "elementor-headline-animation-in",
					typeSelected: "elementor-headline-typing-selected",
					activateHighlight: "e-animated",
					hideHighlight: "e-hide-highlight"
				};
				return settings;
			},
			getDefaultElements() {
				var selectors = this.getSettings("selectors");
				return {
					$headline: this.$element.find(selectors.headline),
					$dynamicWrapper: this.$element.find(selectors.dynamicWrapper),
					$dynamicText: this.$element.find(selectors.dynamicText)
				};
			},
			getNextWord($word) {
				return $word.is(":last-child") ? $word.parent().children().eq(0) : $word.next();
			},
			switchWord($oldWord, $newWord) {
				$oldWord.removeClass("elementor-headline-text-active").addClass("elementor-headline-text-inactive");
				$newWord.removeClass("elementor-headline-text-inactive").addClass("elementor-headline-text-active");
				this.setDynamicWrapperWidth($newWord);
			},
			singleLetters() {
				var classes = this.getSettings("classes");
				this.elements.$dynamicText.each(function() {
					var $word = jQuery(this);
					var letters = $word.text().split("");
					var isActive = $word.hasClass(classes.textActive);
					$word.empty();
					letters.forEach(function(letter) {
						var $letter = jQuery("<span>", { class: classes.dynamicLetter }).text(letter);
						if (isActive) $letter.addClass(classes.animationIn);
						$word.append($letter);
					});
					$word.css("opacity", 1);
				});
			},
			showLetter($letter, $word, bool, duration) {
				var self = this;
				var classes = this.getSettings("classes");
				$letter.addClass(classes.animationIn);
				if (!$letter.is(":last-child")) setTimeout(function() {
					self.showLetter($letter.next(), $word, bool, duration);
				}, duration);
				else if (!bool) setTimeout(function() {
					self.hideWord($word);
				}, self.getSettings("animationDelay"));
			},
			hideLetter($letter, $word, bool, duration) {
				var self = this;
				var settings = this.getSettings();
				$letter.removeClass(settings.classes.animationIn);
				if (!$letter.is(":last-child")) setTimeout(function() {
					self.hideLetter($letter.next(), $word, bool, duration);
				}, duration);
				else if (bool) setTimeout(function() {
					self.hideWord(self.getNextWord($word));
				}, self.getSettings("animationDelay"));
			},
			showWord($word, $duration) {
				var self = this;
				var settings = self.getSettings();
				var animationType = self.getElementSettings("animation_type");
				if ("typing" === animationType) {
					self.showLetter($word.find("." + settings.classes.dynamicLetter).eq(0), $word, false, $duration);
					$word.addClass(settings.classes.textActive).removeClass(settings.classes.textInactive);
				} else if ("clip" === animationType) self.elements.$dynamicWrapper.animate({ width: $word.width() + 10 }, settings.revealDuration, function() {
					setTimeout(function() {
						self.hideWord($word);
					}, settings.revealAnimationDelay);
				});
			},
			hideWord($word) {
				var self = this;
				var settings = self.getSettings();
				var classes = settings.classes;
				var letterSelector = "." + classes.dynamicLetter;
				if (!this.isLoopMode && $word.is(":last-child")) return;
				var animationType = self.getElementSettings("animation_type");
				var nextWord = self.getNextWord($word);
				if ("typing" === animationType) {
					self.elements.$dynamicWrapper.addClass(classes.typeSelected);
					setTimeout(function() {
						self.elements.$dynamicWrapper.removeClass(classes.typeSelected);
						$word.addClass(settings.classes.textInactive).removeClass(classes.textActive).children(letterSelector).removeClass(classes.animationIn);
					}, settings.selectionDuration);
					setTimeout(function() {
						self.showWord(nextWord, settings.typeLettersDelay);
					}, settings.typeAnimationDelay);
				} else if (self.elements.$headline.hasClass(classes.letters)) {
					var bool = $word.children(letterSelector).length >= nextWord.children(letterSelector).length;
					self.hideLetter($word.find(letterSelector).eq(0), $word, bool, settings.lettersDelay);
					self.showLetter(nextWord.find(letterSelector).eq(0), nextWord, bool, settings.lettersDelay);
					self.setDynamicWrapperWidth(nextWord);
				} else if ("clip" === animationType) self.elements.$dynamicWrapper.animate({ width: "2px" }, settings.revealDuration, function() {
					self.switchWord($word, nextWord);
					self.showWord(nextWord);
				});
				else {
					self.switchWord($word, nextWord);
					setTimeout(function() {
						self.hideWord(nextWord);
					}, settings.animationDelay);
				}
			},
			setDynamicWrapperWidth($word) {
				const animationType = this.getElementSettings("animation_type");
				if ("clip" !== animationType && "typing" !== animationType) this.elements.$dynamicWrapper.css("width", $word.width());
			},
			animateHeadline() {
				var self = this;
				var animationType = self.getElementSettings("animation_type");
				var $dynamicWrapper = self.elements.$dynamicWrapper;
				if ("clip" === animationType) $dynamicWrapper.width($dynamicWrapper.width() + 10);
				else if ("typing" !== animationType) self.setDynamicWrapperWidth(self.elements.$dynamicText);
				setTimeout(function() {
					self.hideWord(self.elements.$dynamicText.eq(0));
				}, self.getSettings("animationDelay"));
			},
			getSvgPaths(pathName) {
				var pathsInfo = this.svgPaths[pathName];
				var $paths = jQuery();
				pathsInfo.forEach(function(pathInfo) {
					$paths = $paths.add(jQuery("<path>", { d: pathInfo }));
				});
				return $paths;
			},
			addHighlight() {
				const elementSettings = this.getElementSettings();
				const $svg = jQuery("<svg>", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 500 150",
					preserveAspectRatio: "none",
					"aria-hidden": "true"
				}).html(this.getSvgPaths(elementSettings.marker));
				this.elements.$dynamicWrapper.append($svg[0].outerHTML);
			},
			rotateHeadline() {
				var settings = this.getSettings();
				if (this.elements.$headline.hasClass(settings.classes.letters)) this.singleLetters();
				this.animateHeadline();
			},
			initHeadline() {
				const headlineStyle = this.getElementSettings("headline_style");
				if ("rotate" === headlineStyle) this.rotateHeadline();
				else if ("highlight" === headlineStyle) {
					this.addHighlight();
					this.activateHighlightAnimation();
				}
				this.deactivateScrollListener();
			},
			activateHighlightAnimation() {
				const settings = this.getSettings();
				const classes = settings.classes;
				const $headline = this.elements.$headline;
				if (!this.prefersReducedMotion) this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
				if (this.prefersReducedMotion.matches) {
					$headline.addClass(classes.activateHighlight);
					return;
				}
				$headline.removeClass(classes.hideHighlight).addClass(classes.activateHighlight);
				if (!this.isLoopMode) return;
				setTimeout(() => {
					$headline.removeClass(classes.activateHighligh).addClass(classes.hideHighlight);
				}, settings.highlightAnimationDuration + settings.highlightAnimationDelay * .8);
				setTimeout(() => {
					this.activateHighlightAnimation(false);
				}, settings.highlightAnimationDuration + settings.highlightAnimationDelay);
			},
			activateScrollListener() {
				const scrollBuffer = -100;
				this.intersectionObservers.startAnimation.observer = elementorModules.utils.Scroll.scrollObserver({
					offset: `0px 0px ${scrollBuffer}px`,
					callback: (event) => {
						if (event.isInViewport) this.initHeadline();
					}
				});
				this.intersectionObservers.startAnimation.element = this.elements.$headline[0];
				this.intersectionObservers.startAnimation.observer.observe(this.intersectionObservers.startAnimation.element);
			},
			deactivateScrollListener() {
				this.intersectionObservers.startAnimation.observer.unobserve(this.intersectionObservers.startAnimation.element);
			},
			onInit() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				this.intersectionObservers = { startAnimation: {
					observer: null,
					element: null
				} };
				this.isLoopMode = "yes" === this.getElementSettings("loop");
				this.activateScrollListener();
			}
		});
	}));
	//#endregion
	//#region modules/animated-headline/assets/js/frontend/frontend.js
	var frontend_default$23 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("animated-headline", () => __vitePreload(() => Promise.resolve().then(() => (init_animated_headlines(), animated_headlines_exports)), void 0));
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
	//#region modules/carousel/assets/js/frontend/handlers/base.js
	var CarouselBase;
	var init_base$1 = __esmMin((() => {
		init_asyncToGenerator();
		CarouselBase = class extends elementorModules.frontend.handlers.SwiperBase {
			getDefaultSettings() {
				return {
					selectors: {
						swiperContainer: ".elementor-main-swiper",
						swiperSlide: ".swiper-slide"
					},
					slidesPerView: {
						widescreen: 3,
						desktop: 3,
						laptop: 3,
						tablet_extra: 3,
						tablet: 2,
						mobile_extra: 2,
						mobile: 1
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				const elements = { $swiperContainer: this.$element.find(selectors.swiperContainer) };
				elements.$slides = elements.$swiperContainer.find(selectors.swiperSlide);
				return elements;
			}
			getEffect() {
				return this.getElementSettings("effect");
			}
			getDeviceSlidesPerView(device) {
				const slidesPerViewKey = "slides_per_view" + ("desktop" === device ? "" : "_" + device);
				return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesPerViewKey) || this.getSettings("slidesPerView")[device]);
			}
			getSlidesPerView(device) {
				if ("slide" === this.getEffect()) return this.getDeviceSlidesPerView(device);
				return 1;
			}
			getDeviceSlidesToScroll(device) {
				const slidesToScrollKey = "slides_to_scroll" + ("desktop" === device ? "" : "_" + device);
				return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesToScrollKey) || 1);
			}
			getSlidesToScroll(device) {
				if ("slide" === this.getEffect()) return this.getDeviceSlidesToScroll(device);
				return 1;
			}
			getSpaceBetween(device) {
				let propertyName = "space_between";
				if (device && "desktop" !== device) propertyName += "_" + device;
				return this.getElementSettings(propertyName).size || 0;
			}
			getSwiperOptions() {
				const elementSettings = this.getElementSettings();
				const swiperOptions = {
					grabCursor: true,
					initialSlide: this.getInitialSlide(),
					slidesPerView: this.getSlidesPerView("desktop"),
					slidesPerGroup: this.getSlidesToScroll("desktop"),
					spaceBetween: this.getSpaceBetween(),
					loop: "yes" === elementSettings.loop,
					speed: elementSettings.speed,
					effect: this.getEffect(),
					preventClicksPropagation: false,
					slideToClickedSlide: true,
					handleElementorBreakpoints: true
				};
				if ("yes" === elementSettings.lazyload) swiperOptions.lazy = {
					loadPrevNext: true,
					loadPrevNextAmount: 1
				};
				if (elementSettings.show_arrows) swiperOptions.navigation = {
					prevEl: ".elementor-swiper-button-prev",
					nextEl: ".elementor-swiper-button-next"
				};
				if (elementSettings.pagination) swiperOptions.pagination = {
					el: ".swiper-pagination",
					type: elementSettings.pagination,
					clickable: true
				};
				if ("cube" !== this.getEffect()) {
					const breakpointsSettings = {};
					const breakpoints = elementorFrontend.config.responsive.activeBreakpoints;
					Object.keys(breakpoints).forEach((breakpointName) => {
						breakpointsSettings[breakpoints[breakpointName].value] = {
							slidesPerView: this.getSlidesPerView(breakpointName),
							slidesPerGroup: this.getSlidesToScroll(breakpointName),
							spaceBetween: this.getSpaceBetween(breakpointName)
						};
					});
					swiperOptions.breakpoints = breakpointsSettings;
				}
				if (!this.isEdit && elementSettings.autoplay) swiperOptions.autoplay = {
					delay: elementSettings.autoplay_speed,
					disableOnInteraction: !!elementSettings.pause_on_interaction
				};
				return swiperOptions;
			}
			getDeviceBreakpointValue(device) {
				if (!this.breakpointsDictionary) {
					const breakpoints = elementorFrontend.config.responsive.activeBreakpoints;
					this.breakpointsDictionary = {};
					Object.keys(breakpoints).forEach((breakpointName) => {
						this.breakpointsDictionary[breakpointName] = breakpoints[breakpointName].value;
					});
				}
				return this.breakpointsDictionary[device];
			}
			updateSpaceBetween(propertyName) {
				const deviceMatch = propertyName.match("space_between_(.*)");
				const device = deviceMatch ? deviceMatch[1] : "desktop";
				const newSpaceBetween = this.getSpaceBetween(device);
				if ("desktop" !== device) this.swiper.params.breakpoints[this.getDeviceBreakpointValue(device)].spaceBetween = newSpaceBetween;
				else this.swiper.params.spaceBetween = newSpaceBetween;
				this.swiper.params.spaceBetween = newSpaceBetween;
				this.swiper.update();
			}
			onInit() {
				var _arguments = arguments;
				var _this = this;
				return _asyncToGenerator(function* () {
					elementorModules.frontend.handlers.Base.prototype.onInit.apply(_this, _arguments);
					if (1 >= _this.getSlidesCount()) return;
					const Swiper = elementorFrontend.utils.swiper;
					_this.swiper = yield new Swiper(_this.elements.$swiperContainer, _this.getSwiperOptions());
					if ("yes" === _this.getElementSettings().pause_on_hover) _this.togglePauseOnHover(true);
					_this.elements.$swiperContainer.data("swiper", _this.swiper);
				})();
			}
			getChangeableProperties() {
				return {
					autoplay: "autoplay",
					pause_on_hover: "pauseOnHover",
					pause_on_interaction: "disableOnInteraction",
					autoplay_speed: "delay",
					speed: "speed",
					width: "width"
				};
			}
			updateSwiperOption(propertyName) {
				if (0 === propertyName.indexOf("width")) {
					this.swiper.update();
					return;
				}
				const elementSettings = this.getElementSettings();
				const newSettingValue = elementSettings[propertyName];
				let propertyToUpdate = this.getChangeableProperties()[propertyName];
				let valueToUpdate = newSettingValue;
				switch (propertyName) {
					case "autoplay":
						if (newSettingValue) valueToUpdate = {
							delay: elementSettings.autoplay_speed,
							disableOnInteraction: "yes" === elementSettings.pause_on_interaction
						};
						else valueToUpdate = false;
						break;
					case "autoplay_speed":
						propertyToUpdate = "autoplay";
						valueToUpdate = {
							delay: newSettingValue,
							disableOnInteraction: "yes" === elementSettings.pause_on_interaction
						};
						break;
					case "pause_on_hover":
						this.togglePauseOnHover("yes" === newSettingValue);
						break;
					case "pause_on_interaction":
						valueToUpdate = "yes" === newSettingValue;
						break;
				}
				if ("pause_on_hover" !== propertyName) this.swiper.params[propertyToUpdate] = valueToUpdate;
				this.swiper.update();
			}
			onElementChange(propertyName) {
				if (1 >= this.getSlidesCount()) return;
				if (0 === propertyName.indexOf("width")) {
					this.swiper.update();
					if (this.thumbsSwiper) this.thumbsSwiper.update();
					return;
				}
				if (0 === propertyName.indexOf("space_between")) {
					this.updateSpaceBetween(propertyName);
					return;
				}
				const changeableProperties = this.getChangeableProperties();
				if (Object.prototype.hasOwnProperty.call(changeableProperties, propertyName)) this.updateSwiperOption(propertyName);
			}
			onEditSettingsChange(propertyName) {
				if (1 >= this.getSlidesCount()) return;
				if ("activeItemIndex" === propertyName) this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1);
			}
		};
	}));
	//#endregion
	//#region modules/carousel/assets/js/frontend/handlers/media-carousel.js
	var media_carousel_exports = /* @__PURE__ */ __exportAll({ default: () => MediaCarousel });
	var MediaCarousel;
	var init_media_carousel = __esmMin((() => {
		init_base$1();
		init_asyncToGenerator();
		MediaCarousel = class extends CarouselBase {
			isSlideshow() {
				return "slideshow" === this.getElementSettings("skin");
			}
			getDefaultSettings(...args) {
				const defaultSettings = super.getDefaultSettings(...args);
				if (this.isSlideshow()) {
					defaultSettings.selectors.thumbsSwiper = ".elementor-thumbnails-swiper";
					defaultSettings.slidesPerView = {
						widescreen: 5,
						desktop: 5,
						laptop: 5,
						tablet_extra: 5,
						tablet: 4,
						mobile_extra: 4,
						mobile: 3
					};
				}
				return defaultSettings;
			}
			getSlidesPerViewSettingNames() {
				if (!this.slideshowElementSettings) {
					this.slideshowElementSettings = ["slides_per_view"];
					const activeBreakpoints = elementorFrontend.config.responsive.activeBreakpoints;
					Object.keys(activeBreakpoints).forEach((breakpointName) => {
						this.slideshowElementSettings.push("slides_per_view_" + breakpointName);
					});
				}
				return this.slideshowElementSettings;
			}
			getElementSettings(setting) {
				if (-1 !== this.getSlidesPerViewSettingNames().indexOf(setting) && this.isSlideshow()) setting = "slideshow_" + setting;
				return super.getElementSettings(setting);
			}
			getDefaultElements(...args) {
				const selectors = this.getSettings("selectors");
				const defaultElements = super.getDefaultElements(...args);
				if (this.isSlideshow()) defaultElements.$thumbsSwiper = this.$element.find(selectors.thumbsSwiper);
				return defaultElements;
			}
			getEffect() {
				if ("coverflow" === this.getElementSettings("skin")) return "coverflow";
				return super.getEffect();
			}
			getSlidesPerView(device) {
				if (this.isSlideshow()) return 1;
				if ("coverflow" === this.getElementSettings("skin")) return this.getDeviceSlidesPerView(device);
				return super.getSlidesPerView(device);
			}
			getSwiperOptions() {
				const options = super.getSwiperOptions();
				if (this.isSlideshow()) {
					options.loopedSlides = this.getSlidesCount();
					delete options.pagination;
					delete options.breakpoints;
				}
				return options;
			}
			onInit() {
				var _superprop_getOnInit = () => super.onInit;
				var _this = this;
				return _asyncToGenerator(function* () {
					yield _superprop_getOnInit().call(_this);
					const slidesCount = _this.getSlidesCount();
					if (!_this.isSlideshow() || 1 >= slidesCount) return;
					const elementSettings = _this.getElementSettings();
					const loop = "yes" === elementSettings.loop;
					const breakpointsSettings = {};
					const breakpoints = elementorFrontend.config.responsive.activeBreakpoints;
					const desktopSlidesPerView = _this.getDeviceSlidesPerView("desktop");
					Object.keys(breakpoints).forEach((breakpointName) => {
						breakpointsSettings[breakpoints[breakpointName].value] = {
							slidesPerView: _this.getDeviceSlidesPerView(breakpointName),
							spaceBetween: _this.getSpaceBetween(breakpointName)
						};
					});
					const thumbsSliderOptions = {
						slidesPerView: desktopSlidesPerView,
						initialSlide: _this.getInitialSlide(),
						centeredSlides: elementSettings.centered_slides,
						slideToClickedSlide: true,
						spaceBetween: _this.getSpaceBetween(),
						loopedSlides: slidesCount,
						loop,
						breakpoints: breakpointsSettings,
						handleElementorBreakpoints: true
					};
					if ("yes" === elementSettings.lazyload) thumbsSliderOptions.lazy = {
						loadPrevNext: true,
						loadPrevNextAmount: 1
					};
					const Swiper = elementorFrontend.utils.swiper;
					_this.swiper.controller.control = _this.thumbsSwiper = yield new Swiper(_this.elements.$thumbsSwiper, thumbsSliderOptions);
					_this.elements.$thumbsSwiper.data("swiper", _this.thumbsSwiper);
					_this.thumbsSwiper.controller.control = _this.swiper;
				})();
			}
		};
	}));
	//#endregion
	//#region modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js
	var testimonial_carousel_exports = /* @__PURE__ */ __exportAll({ default: () => TestimonialCarousel });
	var TestimonialCarousel;
	var init_testimonial_carousel = __esmMin((() => {
		init_base$1();
		TestimonialCarousel = class extends CarouselBase {
			getDefaultSettings() {
				const defaultSettings = super.getDefaultSettings();
				defaultSettings.slidesPerView = { desktop: 1 };
				Object.keys(elementorFrontend.config.responsive.activeBreakpoints).forEach((breakpointName) => {
					defaultSettings.slidesPerView[breakpointName] = 1;
				});
				if (defaultSettings.loop) defaultSettings.loopedSlides = this.getSlidesCount();
				return defaultSettings;
			}
			getEffect() {
				return "slide";
			}
		};
	}));
	//#endregion
	//#region modules/carousel/assets/js/frontend/frontend.js
	var frontend_default$22 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("media-carousel", () => __vitePreload(() => Promise.resolve().then(() => (init_media_carousel(), media_carousel_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("testimonial-carousel", () => __vitePreload(() => Promise.resolve().then(() => (init_testimonial_carousel(), testimonial_carousel_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("reviews", () => __vitePreload(() => Promise.resolve().then(() => (init_testimonial_carousel(), testimonial_carousel_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/countdown/assets/js/frontend/handlers/countdown.js
	var countdown_exports = /* @__PURE__ */ __exportAll({ default: () => countdown_default });
	var countdown_default;
	var init_countdown = __esmMin((() => {
		countdown_default = elementorModules.frontend.handlers.Base.extend({
			cache: null,
			cacheElements() {
				const $countDown = this.$element.find(".elementor-countdown-wrapper");
				this.cache = {
					$countDown,
					timeInterval: null,
					elements: {
						$countdown: $countDown.find(".elementor-countdown-wrapper"),
						$daysSpan: $countDown.find(".elementor-countdown-days"),
						$hoursSpan: $countDown.find(".elementor-countdown-hours"),
						$minutesSpan: $countDown.find(".elementor-countdown-minutes"),
						$secondsSpan: $countDown.find(".elementor-countdown-seconds"),
						$expireMessage: $countDown.parent().find(".elementor-countdown-expire--message")
					},
					data: {
						id: this.$element.data("id"),
						endTime: /* @__PURE__ */ new Date($countDown.data("date") * 1e3),
						actions: $countDown.data("expire-actions"),
						evergreenInterval: $countDown.data("evergreen-interval")
					}
				};
			},
			onInit() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				this.cacheElements();
				if (0 < this.cache.data.evergreenInterval) this.cache.data.endTime = this.getEvergreenDate();
				this.initializeClock();
			},
			updateClock() {
				const self = this;
				const timeRemaining = this.getTimeRemaining(this.cache.data.endTime);
				jQuery.each(timeRemaining.parts, function(timePart) {
					const $element = self.cache.elements["$" + timePart + "Span"];
					let partValue = this.toString();
					if (1 === partValue.length) partValue = 0 + partValue;
					if ($element.length) $element.text(partValue);
				});
				if (timeRemaining.total <= 0) {
					clearInterval(this.cache.timeInterval);
					this.runActions();
				}
			},
			initializeClock() {
				const self = this;
				this.updateClock();
				this.cache.timeInterval = setInterval(function() {
					self.updateClock();
				}, 1e3);
			},
			runActions() {
				const self = this;
				self.$element.trigger("countdown_expire", self.$element);
				if (!this.cache.data.actions) return;
				this.cache.data.actions.forEach(function(action) {
					switch (action.type) {
						case "hide":
							self.cache.$countDown.hide();
							break;
						case "redirect":
							if (action.redirect_url && action.redirect_url.startsWith("http")) window.location.href = action.redirect_url;
							break;
						case "message":
							self.cache.elements.$expireMessage.show();
							break;
					}
				});
			},
			getTimeRemaining(endTime) {
				const timeRemaining = endTime - /* @__PURE__ */ new Date();
				let seconds = Math.floor(timeRemaining / 1e3 % 60);
				let minutes = Math.floor(timeRemaining / 1e3 / 60 % 60);
				let hours = Math.floor(timeRemaining / (1e3 * 60 * 60) % 24);
				let days = Math.floor(timeRemaining / (1e3 * 60 * 60 * 24));
				if (days < 0 || hours < 0 || minutes < 0) seconds = minutes = hours = days = 0;
				return {
					total: timeRemaining,
					parts: {
						days,
						hours,
						minutes,
						seconds
					}
				};
			},
			getEvergreenDate() {
				const self = this;
				const id = this.cache.data.id;
				const interval = this.cache.data.evergreenInterval;
				const dueDateKey = id + "-evergreen_due_date";
				const intervalKey = id + "-evergreen_interval";
				const localData = {
					dueDate: localStorage.getItem(dueDateKey),
					interval: localStorage.getItem(intervalKey)
				};
				const initEvergreen = function() {
					var evergreenDueDate = /* @__PURE__ */ new Date();
					self.cache.data.endTime = evergreenDueDate.setSeconds(evergreenDueDate.getSeconds() + interval);
					localStorage.setItem(dueDateKey, self.cache.data.endTime);
					localStorage.setItem(intervalKey, interval);
					return self.cache.data.endTime;
				};
				if (null === localData.dueDate && null === localData.interval) return initEvergreen();
				if (null !== localData.dueDate && interval !== parseInt(localData.interval, 10)) return initEvergreen();
				if (localData.dueDate > 0 && parseInt(localData.interval, 10) === interval) return localData.dueDate;
			}
		});
	}));
	//#endregion
	//#region modules/countdown/assets/js/frontend/frontend.js
	var frontend_default$21 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("countdown", () => __vitePreload(() => Promise.resolve().then(() => (init_countdown(), countdown_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/dynamic-tags/assets/js/frontend/frontend.js
	var frontend_default$20 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.on("components:init", () => this.onFrontendComponentsInit());
		}
		onFrontendComponentsInit() {
			elementorFrontend.utils.urlActions.addAction("reload-page", () => document.location.reload());
		}
	};
	//#endregion
	//#region modules/hotspot/assets/js/frontend/handlers/hotspot.js
	var hotspot_exports = /* @__PURE__ */ __exportAll({ default: () => Hotspot });
	var Hotspot;
	var init_hotspot = __esmMin((() => {
		Hotspot = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return { selectors: {
					hotspot: ".e-hotspot",
					tooltip: ".e-hotspot__tooltip"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$hotspot: this.$element.find(selectors.hotspot),
					$hotspotsExcludesLinks: this.$element.find(selectors.hotspot).filter(":not(.e-hotspot--no-tooltip)"),
					$tooltip: this.$element.find(selectors.tooltip)
				};
			}
			bindEvents() {
				const tooltipTrigger = this.getCurrentDeviceSetting("tooltip_trigger");
				const tooltipTriggerEvent = "mouseenter" === tooltipTrigger ? "mouseleave mouseenter" : tooltipTrigger;
				if (tooltipTriggerEvent !== "none") this.elements.$hotspotsExcludesLinks.on(tooltipTriggerEvent, (event) => this.onHotspotTriggerEvent(event));
			}
			onDeviceModeChange() {
				this.elements.$hotspotsExcludesLinks.off();
				this.bindEvents();
			}
			onHotspotTriggerEvent(event) {
				const elementTarget = jQuery(event.target);
				const isHotspotButtonEvent = elementTarget.closest(".e-hotspot__button").length;
				const isTooltipMouseLeave = "mouseleave" === event.type && (elementTarget.is(".e-hotspot--tooltip-position") || elementTarget.parents(".e-hotspot--tooltip-position").length);
				const isMobile = "mobile" === elementorFrontend.getCurrentDeviceMode();
				if (!(elementTarget.closest(".e-hotspot--link").length && isMobile && ("mouseleave" === event.type || "mouseenter" === event.type)) && (isHotspotButtonEvent || isTooltipMouseLeave)) {
					const currentHotspot = jQuery(event.currentTarget);
					this.elements.$hotspot.not(currentHotspot).removeClass("e-hotspot--active");
					currentHotspot.toggleClass("e-hotspot--active");
				}
			}
			editorAddSequencedAnimation() {
				this.elements.$hotspot.toggleClass("e-hotspot--sequenced", "yes" === this.getElementSettings("hotspot_sequenced_animation"));
			}
			hotspotSequencedAnimation() {
				const elementSettings = this.getElementSettings();
				if ("no" === elementSettings.hotspot_sequenced_animation) return;
				const hotspotObserver = elementorModules.utils.Scroll.scrollObserver({ callback: (event) => {
					if (event.isInViewport) {
						hotspotObserver.unobserve(this.$element[0]);
						this.elements.$hotspot.each((index, element) => {
							if (0 === index) return;
							const sequencedAnimation = elementSettings.hotspot_sequenced_animation_duration;
							const animationDelay = index * ((sequencedAnimation ? sequencedAnimation.size : 1e3) / this.elements.$hotspot.length);
							element.style.animationDelay = animationDelay + "ms";
						});
					}
				} });
				hotspotObserver.observe(this.$element[0]);
			}
			setTooltipPositionControl() {
				const elementSettings = this.getElementSettings();
				if ("undefined" !== typeof elementSettings.tooltip_animation && elementSettings.tooltip_animation.match(/^e-hotspot--(slide|fade)-direction/)) {
					this.elements.$tooltip.removeClass("e-hotspot--tooltip-animation-from-left e-hotspot--tooltip-animation-from-top e-hotspot--tooltip-animation-from-right e-hotspot--tooltip-animation-from-bottom");
					this.elements.$tooltip.addClass("e-hotspot--tooltip-animation-from-" + elementSettings.tooltip_position);
				}
			}
			onInit(...args) {
				super.onInit(...args);
				this.hotspotSequencedAnimation();
				this.setTooltipPositionControl();
				if (window.elementor) elementor.listenTo(elementor.channels.deviceMode, "change", () => this.onDeviceModeChange());
			}
			onElementChange(propertyName) {
				if (propertyName.startsWith("tooltip_position")) this.setTooltipPositionControl();
				if (propertyName.startsWith("hotspot_sequenced_animation")) this.editorAddSequencedAnimation();
			}
		};
	}));
	//#endregion
	//#region modules/hotspot/assets/js/frontend/frontend.js
	var frontend_default$19 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("hotspot", () => __vitePreload(() => Promise.resolve().then(() => (init_hotspot(), hotspot_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/forms/assets/js/frontend/handlers/form-steps.js
	var form_steps_exports = /* @__PURE__ */ __exportAll({ default: () => FormSteps });
	var __defProp$6, __getOwnPropSymbols$2, __hasOwnProp$2, __propIsEnum$2, __defNormalProp$6, __spreadValues$2, FormSteps;
	var init_form_steps = __esmMin((() => {
		__defProp$6 = Object.defineProperty;
		__getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
		__hasOwnProp$2 = Object.prototype.hasOwnProperty;
		__propIsEnum$2 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$6 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$6(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$2 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$2.call(b, prop)) __defNormalProp$6(a, prop, b[prop]);
			if (__getOwnPropSymbols$2) {
				for (var prop of __getOwnPropSymbols$2(b)) if (__propIsEnum$2.call(b, prop)) __defNormalProp$6(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		FormSteps = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return {
					selectors: {
						form: ".elementor-form",
						fieldsWrapper: ".elementor-form-fields-wrapper",
						fieldGroup: ".elementor-field-group",
						stepWrapper: ".elementor-field-type-step",
						stepField: ".e-field-step",
						submitWrapper: ".elementor-field-type-submit",
						submitButton: "[type=\"submit\"]",
						buttons: ".e-form__buttons",
						buttonWrapper: ".e-form__buttons__wrapper",
						button: ".e-form__buttons__wrapper__button",
						indicator: ".e-form__indicators__indicator",
						indicatorProgress: ".e-form__indicators__indicator__progress",
						indicatorProgressMeter: ".e-form__indicators__indicator__progress__meter",
						formHelpInline: ".elementor-form-help-inline"
					},
					classes: {
						hidden: "elementor-hidden",
						column: "elementor-column",
						fieldGroup: "elementor-field-group",
						elementorButton: "elementor-button",
						step: "e-form__step",
						buttons: "e-form__buttons",
						buttonWrapper: "e-form__buttons__wrapper",
						button: "e-form__buttons__wrapper__button",
						indicators: "e-form__indicators",
						indicator: "e-form__indicators__indicator",
						indicatorIcon: "e-form__indicators__indicator__icon",
						indicatorNumber: "e-form__indicators__indicator__number",
						indicatorLabel: "e-form__indicators__indicator__label",
						indicatorProgress: "e-form__indicators__indicator__progress",
						indicatorProgressMeter: "e-form__indicators__indicator__progress__meter",
						indicatorSeparator: "e-form__indicators__indicator__separator",
						indicatorInactive: "e-form__indicators__indicator--state-inactive",
						indicatorActive: "e-form__indicators__indicator--state-active",
						indicatorCompleted: "e-form__indicators__indicator--state-completed",
						indicatorShapeCircle: "e-form__indicators__indicator--shape-circle",
						indicatorShapeSquare: "e-form__indicators__indicator--shape-square",
						indicatorShapeRounded: "e-form__indicators__indicator--shape-rounded",
						indicatorShapeNone: "e-form__indicators__indicator--shape-none"
					}
				};
			}
			getDefaultElements() {
				const { selectors } = this.getSettings(), elements = { $form: this.$element.find(selectors.form) };
				elements.$fieldsWrapper = elements.$form.children(selectors.fieldsWrapper);
				elements.$stepWrapper = elements.$fieldsWrapper.children(selectors.stepWrapper);
				elements.$stepField = elements.$stepWrapper.children(selectors.stepField);
				elements.$fieldGroup = elements.$fieldsWrapper.children(selectors.fieldGroup);
				elements.$submitWrapper = elements.$fieldsWrapper.children(selectors.submitWrapper);
				elements.$submitButton = elements.$submitWrapper.children(selectors.submitButton);
				return elements;
			}
			onInit(...args) {
				super.onInit(...args);
				if (!this.isStepsExist()) return;
				this.data = {
					steps: [],
					indicatorsWithObjectTags: []
				};
				this.state = {
					currentStep: 0,
					stepsType: "",
					stepsShape: ""
				};
				this.buildSteps();
				this.elements = __spreadValues$2(__spreadValues$2(__spreadValues$2({}, this.elements), this.createStepsIndicators()), this.createStepsButtons());
				this.initProgressBar();
				this.extractResponsiveSizeFromSubmitWrapper();
			}
			bindEvents() {
				if (!this.isStepsExist()) return;
				const { selectors } = this.getSettings();
				this.elements.$form.on({
					submit: () => this.resetForm(),
					keydown: (e) => {
						var _a;
						var _b;
						if (13 === e.keyCode && !this.isLastStep() && "textarea" !== e.target.localName) {
							e.preventDefault();
							const direction = ((_b = (_a = e.target.closest(selectors.button)) == null ? void 0 : _a.dataset) == null ? void 0 : _b.direction) || "next";
							this.applyStep(direction);
						}
					},
					error: () => this.onFormError()
				});
			}
			isStepsExist() {
				return this.elements.$stepWrapper.length;
			}
			initProgressBar() {
				if ("progress_bar" === this.getElementSettings().step_type) this.setProgressBar();
			}
			buildSteps() {
				this.elements.$stepWrapper.each((index, el) => {
					const { selectors, classes } = this.getSettings(), $currentStep = jQuery(el);
					$currentStep.addClass(classes.step).removeClass(classes.fieldGroup, classes.column);
					if (index) $currentStep.addClass(classes.hidden);
					this.setStepData($currentStep.children(selectors.stepField));
					$currentStep.append($currentStep.nextUntil(this.elements.$stepWrapper).not(this.elements.$submitWrapper));
				});
			}
			setStepData($stepElement) {
				const dataAttributes = [
					"label",
					"previousButton",
					"nextButton",
					"iconUrl",
					"iconLibrary",
					"icon"
				];
				const stepData = {};
				dataAttributes.forEach((attr) => {
					const attrValue = $stepElement.attr("data-" + attr);
					if (attrValue) stepData[attr] = attrValue;
				});
				this.data.steps.push(stepData);
			}
			createStepsIndicators() {
				const stepsSettings = this.getElementSettings();
				const stepsElements = {};
				if ("none" !== stepsSettings.step_type) {
					const { selectors, classes } = this.getSettings(), indicatorsTypeClass = classes.indicators + "--type-" + stepsSettings.step_type, indicatorsClasses = [classes.indicators, indicatorsTypeClass];
					stepsElements.$indicatorsWrapper = jQuery("<div>", { class: indicatorsClasses.join(" ") });
					stepsElements.$indicatorsWrapper.append(this.buildIndicators());
					this.elements.$fieldsWrapper.before(stepsElements.$indicatorsWrapper);
					if ("progress_bar" === stepsSettings.step_type) {
						stepsElements.$progressBar = stepsElements.$indicatorsWrapper.find(selectors.indicatorProgress);
						stepsElements.$progressBarMeter = stepsElements.$indicatorsWrapper.find(selectors.indicatorProgressMeter);
					} else {
						stepsElements.$indicators = stepsElements.$indicatorsWrapper.find(selectors.indicator);
						stepsElements.$currentIndicator = stepsElements.$indicators.eq(this.state.currentStep);
					}
				}
				this.saveIndicatorsState();
				return stepsElements;
			}
			buildIndicators() {
				return "progress_bar" === this.getElementSettings().step_type ? this.buildProgressBar() : this.buildIndicatorsFromStepsData();
			}
			buildProgressBar() {
				const { classes } = this.getSettings(), $progressBar = jQuery("<div>", { class: classes.indicatorProgress }), $progressBarMeter = jQuery("<div>", { class: classes.indicatorProgressMeter });
				$progressBar.append($progressBarMeter);
				return $progressBar;
			}
			getProgressBarValue() {
				const totalSteps = this.data.steps.length;
				const currentStep = this.state.currentStep;
				const percentage = currentStep ? (currentStep + 1) / totalSteps * 100 : 100 / totalSteps;
				return Math.floor(percentage) + "%";
			}
			setProgressBar() {
				const progressBarValue = this.getProgressBarValue();
				this.updateProgressMeterCSSVariable(progressBarValue);
				this.elements.$progressBarMeter.text(progressBarValue);
			}
			updateProgressMeterCSSVariable(value) {
				this.$element[0].style.setProperty("--e-form-steps-indicator-progress-meter-width", value);
			}
			saveIndicatorsState() {
				const stepsSettings = this.getElementSettings();
				this.state.stepsType = stepsSettings.step_type;
				if (![
					"none",
					"text",
					"progress_bar"
				].includes(stepsSettings.step_type)) this.state.stepsShape = stepsSettings.step_icon_shape;
			}
			buildIndicatorsFromStepsData() {
				const indicators = [];
				this.data.steps.forEach((stepObj, index) => {
					if (index) indicators.push(this.getStepSeparator());
					indicators.push(this.getStepIndicatorElement(stepObj, index));
				});
				return indicators;
			}
			getStepIndicatorElement(stepObj, index) {
				const { classes } = this.getSettings(), stepsSettings = this.getElementSettings(), indicatorStateClass = this.getIndicatorStateClass(index), indicatorClasses = [classes.indicator, indicatorStateClass], $stepIndicator = jQuery("<div>", { class: indicatorClasses.join(" ") });
				if (stepsSettings.step_type.includes("icon")) $stepIndicator.append(this.getStepIconElement(stepObj));
				if (stepsSettings.step_type.includes("number")) $stepIndicator.append(this.getStepNumberElement(index));
				if (stepsSettings.step_type.includes("text")) $stepIndicator.append(this.getStepLabelElement(stepObj.label));
				return $stepIndicator;
			}
			getIndicatorStateClass(index) {
				const { classes } = this.getSettings();
				if (index < this.state.currentStep) return classes.indicatorCompleted;
				else if (index > this.state.currentStep) return classes.indicatorInactive;
				return classes.indicatorActive;
			}
			getIndicatorShapeClass() {
				const stepsSettings = this.getElementSettings(), { classes } = this.getSettings();
				return classes["indicatorShape" + this.firstLetterToUppercase(stepsSettings.step_icon_shape)];
			}
			firstLetterToUppercase(str) {
				return str.charAt(0).toUpperCase() + str.slice(1);
			}
			getStepNumberElement(index) {
				const { classes } = this.getSettings(), numberClasses = [classes.indicatorNumber, this.getIndicatorShapeClass()];
				return jQuery("<div>", {
					class: numberClasses.join(" "),
					text: index + 1
				});
			}
			getStepIconElement(stepObj) {
				const { classes } = this.getSettings(), iconClasses = [classes.indicatorIcon, this.getIndicatorShapeClass()], $icon = jQuery("<div>", { class: iconClasses.join(" ") });
				if (stepObj.icon) $icon.html(stepObj.icon);
				else {
					let $iconElement;
					if (stepObj.iconLibrary) $iconElement = jQuery("<i>", { class: stepObj.iconLibrary });
					else {
						$iconElement = jQuery(`<object type="image/svg+xml" data="${stepObj.iconUrl}"></object>`);
						$iconElement.on("load", (event) => {
							event.target.contentDocument.querySelector("svg").style.fill = $iconElement.css("fill");
						});
						this.data.indicatorsWithObjectTags.push($iconElement);
					}
					$icon.append($iconElement);
				}
				return $icon;
			}
			getStepLabelElement(label) {
				const { classes } = this.getSettings();
				return jQuery("<label>", {
					class: classes.indicatorLabel,
					text: label
				});
			}
			getStepSeparator() {
				const { classes } = this.getSettings();
				return jQuery("<div>", { class: classes.indicatorSeparator });
			}
			createStepsButtons() {
				const { selectors } = this.getSettings(), stepsElements = {};
				this.injectButtonsToSteps(stepsElements);
				stepsElements.$buttonsContainer = this.elements.$stepWrapper.find(selectors.buttons);
				stepsElements.$buttonsWrappers = stepsElements.$buttonsContainer.children(selectors.buttonWrapper);
				return stepsElements;
			}
			injectButtonsToSteps() {
				const totalSteps = this.elements.$stepWrapper.length;
				this.elements.$stepWrapper.each((index, el) => {
					const $el = jQuery(el);
					const $container = this.getButtonsContainer();
					let $nextButton;
					if (index) {
						$container.append(this.getStepButton("previous", index));
						$nextButton = index === totalSteps - 1 ? this.getSubmitButton() : this.getStepButton("next", index);
					} else $nextButton = this.getStepButton("next", index);
					$container.append($nextButton);
					$el.append($container);
				});
			}
			getButtonsContainer() {
				const { classes } = this.getSettings(), stepsSettings = this.getElementSettings(), buttonColumnWidthClasses = [
					classes.buttons,
					classes.column,
					"elementor-col-" + stepsSettings.button_width
				];
				return jQuery("<div>", { class: buttonColumnWidthClasses.join(" ") });
			}
			extractResponsiveSizeFromSubmitWrapper() {
				let sizeClasses = [];
				this.elements.$submitWrapper.removeClass((index, className) => {
					var _a;
					sizeClasses = (_a = className.match(/elementor-(sm|md)-[0-9]+/g)) == null ? void 0 : _a.join(" ");
					return sizeClasses;
				});
				this.elements.$buttonsContainer.addClass(sizeClasses);
			}
			getStepButton(buttonType, index) {
				const { classes } = this.getSettings(), $button = this.getButton(buttonType, index).on("click", () => this.applyStep(buttonType)), buttonWrapperClasses = [
					classes.fieldGroup,
					classes.buttonWrapper,
					"elementor-field-type-" + buttonType
				];
				return jQuery("<div>", { class: buttonWrapperClasses.join(" ") }).append($button);
			}
			getSubmitButton() {
				const { classes } = this.getSettings();
				this.elements.$submitButton.addClass(classes.button);
				return this.elements.$submitWrapper.attr("class", (index, className) => {
					return this.replaceClassNameColSize(className, "");
				}).removeClass(classes.column).removeClass(classes.buttons).addClass(classes.buttonWrapper);
			}
			replaceClassNameColSize(className, value) {
				return className.replace(/elementor-col-([0-9]+)/g, value);
			}
			getButton(buttonType, index) {
				const { classes } = this.getSettings(), submitSizeClass = this.elements.$submitButton.attr("class").match(/elementor-size-([^\W\d]+)/g), buttonClasses = [
					classes.elementorButton,
					submitSizeClass,
					classes.button,
					classes.button + "-" + buttonType
				];
				return jQuery("<button>", {
					type: "button",
					text: this.getButtonLabel(buttonType, index),
					class: buttonClasses.join(" "),
					"data-direction": buttonType
				});
			}
			getButtonLabel(buttonType, index) {
				const stepsSettings = this.getElementSettings();
				const stepData = this.data.steps[index];
				const buttonName = buttonType + "Button";
				const buttonSettingsProp = `step_${buttonType}_label`;
				return stepData[buttonName] || stepsSettings[buttonSettingsProp];
			}
			applyStep(direction) {
				const nextIndex = "next" === direction ? this.state.currentStep + 1 : this.state.currentStep - 1;
				if ("next" === direction && !this.isFieldsValid(this.elements.$stepWrapper)) return false;
				this.goToStep(nextIndex);
				this.state.currentStep = nextIndex;
				if ("progress_bar" === this.state.stepsType) this.setProgressBar();
				else if ("none" !== this.state.stepsType) this.updateIndicatorsState(direction);
			}
			goToStep(index) {
				const { classes } = this.getSettings();
				this.elements.$stepWrapper.eq(this.state.currentStep).addClass(classes.hidden);
				this.elements.$stepWrapper.eq(index).removeClass(classes.hidden);
				const $firstFocusableField = this.getFirstFocusableField(index);
				if (!$firstFocusableField) return;
				$firstFocusableField.attr("tabindex", "0");
				$firstFocusableField.trigger("focus");
			}
			getFirstFocusableField(index) {
				const $fieldGroups = this.elements.$stepWrapper.eq(index).children(this.getSettings("selectors.fieldGroup"));
				let $firstFocusableField = null;
				$fieldGroups.each((fieldGroupIndex, element) => {
					const $fieldGroup = jQuery(element);
					const $focusableElement = this.getFocusableElement($fieldGroup);
					if (!!$focusableElement) {
						$firstFocusableField = $focusableElement;
						return false;
					}
				});
				return $firstFocusableField;
			}
			getFocusableElement($fieldGroup) {
				if (!$fieldGroup.is(":visible")) return;
				const $inputFieldInFieldGroup = $fieldGroup.find(":input").first();
				if (!!$inputFieldInFieldGroup.length) return $inputFieldInFieldGroup;
				return $fieldGroup;
			}
			isFieldsValid($stepWrapper) {
				let isValid = true;
				$stepWrapper.eq(this.state.currentStep).find(".elementor-field-group :input").each((index, el) => {
					if (!el.checkValidity()) {
						el.reportValidity();
						return isValid = false;
					}
				});
				return isValid;
			}
			isLastStep() {
				return this.state.currentStep === this.data.steps.length - 1;
			}
			resetForm() {
				this.state.currentStep = 0;
				this.resetSteps();
				if ("progress_bar" === this.state.stepsType) this.setProgressBar();
				else if ("none" !== this.state.stepsType) {
					this.elements.$currentIndicator = this.elements.$indicators.eq(this.state.currentStep);
					this.resetIndicators();
				}
			}
			resetSteps() {
				const { classes } = this.getSettings();
				this.elements.$stepWrapper.addClass(classes.hidden).eq(0).removeClass(classes.hidden);
			}
			resetIndicators() {
				const { classes } = this.getSettings(), stateClasses = [
					"inactive",
					"active",
					"completed"
				].map((state) => classes.indicator + "--state-" + state);
				this.elements.$indicators.removeClass(stateClasses.join(" ")).not(this.elements.$indicators.eq(0)).addClass(classes.indicatorInactive);
				this.elements.$indicators.eq(0).addClass(classes.indicatorActive);
			}
			updateIndicatorsState(direction) {
				const { classes } = this.getSettings(), indicatorsClasses = {
					current: {
						remove: classes.indicatorActive,
						add: "next" === direction ? classes.indicatorCompleted : classes.indicatorInactive
					},
					next: {
						remove: "next" === direction ? classes.indicatorInactive : classes.indicatorCompleted,
						add: classes.indicatorActive
					}
				};
				this.elements.$currentIndicator.removeClass(indicatorsClasses.current.remove).addClass(indicatorsClasses.current.add);
				this.elements.$currentIndicator = this.elements.$indicators.eq(this.state.currentStep);
				this.elements.$currentIndicator.removeClass(indicatorsClasses.next.remove).addClass(indicatorsClasses.next.add);
				this.data.indicatorsWithObjectTags.forEach(($element) => {
					$element.contents().children("svg").css("fill", $element.css("fill"));
				});
			}
			updateValue(updatedValue) {
				const actionsMap = {
					step_type: () => this.updateStepsType(),
					step_icon_shape: () => this.updateStepsShape(),
					step_next_label: () => this.updateStepButtonsLabel("next"),
					step_previous_label: () => this.updateStepButtonsLabel("previous")
				};
				if (actionsMap[updatedValue]) actionsMap[updatedValue]();
			}
			updateStepsType() {
				const stepsSettings = this.getElementSettings();
				if (this.elements.$indicatorsWrapper) this.elements.$indicatorsWrapper.remove();
				if ("none" !== stepsSettings.step_type) this.rebuildIndicators();
				this.state.stepsType = stepsSettings.step_type;
			}
			rebuildIndicators() {
				this.elements = __spreadValues$2(__spreadValues$2({}, this.elements), this.createStepsIndicators());
				this.initProgressBar();
			}
			updateStepsShape() {
				const stepsSettings = this.getElementSettings(), { selectors, classes } = this.getSettings(), shapeClassStart = classes.indicator + "--shape-", currentShapeClass = shapeClassStart + this.state.stepsShape, newShapeClass = shapeClassStart + stepsSettings.step_icon_shape;
				let elementsTargetType = "";
				if (stepsSettings.step_type.includes("icon")) elementsTargetType = "icon";
				else if (stepsSettings.step_type.includes("number")) elementsTargetType = "number";
				this.elements.$indicators.children(selectors.indicator + "__" + elementsTargetType).removeClass(currentShapeClass).addClass(newShapeClass);
				this.state.stepsShape = stepsSettings.step_icon_shape;
			}
			updateStepButtonsLabel(buttonType) {
				const { selectors } = this.getSettings(), buttonSelector = {
					previous: selectors.button + "-previous",
					next: selectors.button + "-next"
				};
				this.elements.$stepWrapper.each((index, el) => {
					jQuery(el).find(buttonSelector[buttonType]).text(this.getButtonLabel(buttonType, index));
				});
			}
			onFormError() {
				const { selectors } = this.getSettings(), $errorStepElement = this.elements.$form.find(selectors.formHelpInline).closest(selectors.stepWrapper);
				if ($errorStepElement.length) this.goToStep($errorStepElement.index());
			}
			onElementChange(updatedValue) {
				if (!this.isStepsExist()) return;
				this.updateValue(updatedValue);
			}
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/frontend/handlers/form-sender.js
	var form_sender_exports = /* @__PURE__ */ __exportAll({ default: () => form_sender_default });
	var form_sender_default;
	var init_form_sender = __esmMin((() => {
		form_sender_default = elementorModules.frontend.handlers.Base.extend({
			getDefaultSettings() {
				return {
					selectors: {
						form: ".elementor-form",
						submitButton: "[type=\"submit\"]"
					},
					action: "elementor_pro_forms_send_form",
					ajaxUrl: elementorProFrontend.config.ajaxurl
				};
			},
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				const elements = {};
				elements.$form = this.$element.find(selectors.form);
				elements.$submitButton = elements.$form.find(selectors.submitButton);
				return elements;
			},
			bindEvents() {
				this.elements.$form.on("submit", this.handleSubmit);
				const $fileInput = this.elements.$form.find("input[type=file]");
				if ($fileInput.length) $fileInput.on("change", this.validateFileSize);
			},
			validateFileSize(event) {
				const $field = jQuery(event.currentTarget);
				const files = $field[0].files;
				if (!files.length) return;
				const maxSize = parseInt($field.attr("data-maxsize")) * 1024 * 1024;
				const maxSizeMessage = $field.attr("data-maxsize-message");
				Array.prototype.slice.call(files).forEach((file) => {
					if (maxSize < file.size) {
						$field.parent().addClass("elementor-error").append("<span class=\"elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline\" role=\"alert\">" + maxSizeMessage + "</span>").find(":input").attr("aria-invalid", "true");
						this.elements.$form.trigger("error");
					}
				});
			},
			beforeSend() {
				const $form = this.elements.$form;
				$form.animate({ opacity: "0.45" }, 500).addClass("elementor-form-waiting");
				$form.find(".elementor-message").remove();
				$form.find(".elementor-error").removeClass("elementor-error");
				$form.find("div.elementor-field-group").removeClass("error").find("span.elementor-form-help-inline").remove().end().find(":input").attr("aria-invalid", "false");
				this.elements.$submitButton.attr("disabled", "disabled").find("> span").prepend("<span class=\"elementor-button-text elementor-form-spinner\"><i class=\"fa fa-spinner fa-spin\"></i>&nbsp;</span>");
			},
			getFormData() {
				const formData = new FormData(this.elements.$form[0]);
				formData.append("action", this.getSettings("action"));
				formData.append("referrer", location.toString());
				return formData;
			},
			onSuccess(response) {
				const $form = this.elements.$form;
				this.elements.$submitButton.removeAttr("disabled").find(".elementor-form-spinner").remove();
				$form.animate({ opacity: "1" }, 100).removeClass("elementor-form-waiting");
				if (!response.success) {
					if (response.data.errors) {
						jQuery.each(response.data.errors, function(key, title) {
							$form.find("#form-field-" + key).parent().addClass("elementor-error").append("<span class=\"elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline\" role=\"alert\">" + title + "</span>").find(":input").attr("aria-invalid", "true");
						});
						$form.trigger("error");
					}
					$form.append("<div class=\"elementor-message elementor-message-danger\" role=\"alert\">" + response.data.message + "</div>");
				} else {
					$form.trigger("submit_success", response.data);
					$form.trigger("form_destruct", response.data);
					$form.trigger("reset");
					let successClass = "elementor-message elementor-message-success";
					if (elementorFrontendConfig.experimentalFeatures.e_font_icon_svg) successClass += " elementor-message-svg";
					if ("undefined" !== typeof response.data.message && "" !== response.data.message) $form.append("<div class=\"" + successClass + "\" role=\"alert\">" + response.data.message + "</div>");
				}
			},
			onError(xhr, desc) {
				const $form = this.elements.$form;
				$form.append("<div class=\"elementor-message elementor-message-danger\" role=\"alert\">" + desc + "</div>");
				this.elements.$submitButton.html(this.elements.$submitButton.text()).removeAttr("disabled");
				$form.animate({ opacity: "1" }, 100).removeClass("elementor-form-waiting");
				$form.trigger("error");
			},
			handleSubmit(event) {
				const self = this;
				const $form = this.elements.$form;
				event.preventDefault();
				if ($form.hasClass("elementor-form-waiting")) return false;
				this.beforeSend();
				jQuery.ajax({
					url: self.getSettings("ajaxUrl"),
					type: "POST",
					dataType: "json",
					data: self.getFormData(),
					processData: false,
					contentType: false,
					success: self.onSuccess,
					error: self.onError
				});
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/frontend/handlers/form-redirect.js
	var form_redirect_exports = /* @__PURE__ */ __exportAll({ default: () => form_redirect_default });
	var form_redirect_default;
	var init_form_redirect = __esmMin((() => {
		form_redirect_default = elementorModules.frontend.handlers.Base.extend({
			getDefaultSettings() {
				return { selectors: { form: ".elementor-form" } };
			},
			getDefaultElements() {
				var selectors = this.getSettings("selectors");
				var elements = {};
				elements.$form = this.$element.find(selectors.form);
				return elements;
			},
			bindEvents() {
				this.elements.$form.on("form_destruct", this.handleSubmit);
			},
			handleSubmit(event, response) {
				if ("undefined" !== typeof response.data.redirect_url) location.href = response.data.redirect_url;
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js
	var DataTimeFieldBase;
	var init_data_time_field_base = __esmMin((() => {
		DataTimeFieldBase = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return {
					selectors: { fields: this.getFieldsSelector() },
					classes: { useNative: "elementor-use-native" }
				};
			}
			getDefaultElements() {
				const { selectors } = this.getDefaultSettings();
				return { $fields: this.$element.find(selectors.fields) };
			}
			addPicker(element) {
				const { classes } = this.getDefaultSettings();
				if (jQuery(element).hasClass(classes.useNative)) return;
				element.flatpickr(this.getPickerOptions(element));
			}
			onInit(...args) {
				super.onInit(...args);
				this.elements.$fields.each((index, element) => this.addPicker(element));
			}
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/frontend/handlers/fields/date.js
	var date_exports = /* @__PURE__ */ __exportAll({ default: () => DateField });
	var DateField;
	var init_date = __esmMin((() => {
		init_data_time_field_base();
		DateField = class extends DataTimeFieldBase {
			getFieldsSelector() {
				return ".elementor-date-field";
			}
			getPickerOptions(element) {
				const $element = jQuery(element);
				return {
					minDate: $element.attr("min") || null,
					maxDate: $element.attr("max") || null,
					allowInput: true
				};
			}
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/frontend/handlers/recaptcha.js
	var recaptcha_exports = /* @__PURE__ */ __exportAll({ default: () => Recaptcha });
	var Recaptcha;
	var init_recaptcha = __esmMin((() => {
		Recaptcha = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return { selectors: {
					recaptcha: ".elementor-g-recaptcha:last",
					submit: "button[type=\"submit\"]",
					recaptchaResponse: "[name=\"g-recaptcha-response\"]"
				} };
			}
			getDefaultElements() {
				const { selectors } = this.getDefaultSettings(), elements = { $recaptcha: this.$element.find(selectors.recaptcha) };
				elements.$form = elements.$recaptcha.parents("form");
				elements.$submit = elements.$form.find(selectors.submit);
				return elements;
			}
			bindEvents() {
				this.onRecaptchaApiReady();
			}
			isActive(settings) {
				const { selectors } = this.getDefaultSettings();
				return settings.$element.find(selectors.recaptcha).length;
			}
			addRecaptcha() {
				const settings = this.elements.$recaptcha.data();
				const isV2 = "v3" !== settings.type;
				const captchaIds = [];
				captchaIds.forEach((id) => window.grecaptcha.reset(id));
				const widgetId = window.grecaptcha.render(this.elements.$recaptcha[0], settings);
				this.elements.$form.on("reset error", () => {
					window.grecaptcha.reset(widgetId);
				});
				if (isV2) this.elements.$recaptcha.data("widgetId", widgetId);
				else {
					captchaIds.push(widgetId);
					this.elements.$submit.on("click", (e) => this.onV3FormSubmit(e, widgetId));
				}
			}
			onV3FormSubmit(e, widgetId) {
				e.preventDefault();
				window.grecaptcha.ready(() => {
					const $form = this.elements.$form;
					grecaptcha.execute(widgetId, { action: this.elements.$recaptcha.data("action") }).then((token) => {
						if (this.elements.$recaptchaResponse) this.elements.$recaptchaResponse.val(token);
						else {
							this.elements.$recaptchaResponse = jQuery("<input>", {
								type: "hidden",
								value: token,
								name: "g-recaptcha-response"
							});
							$form.append(this.elements.$recaptchaResponse);
						}
						if (!$form[0].reportValidity || "function" !== typeof $form[0].reportValidity || $form[0].reportValidity()) $form.trigger("submit");
					});
				});
			}
			onRecaptchaApiReady() {
				if (window.grecaptcha && window.grecaptcha.render) this.addRecaptcha();
				else setTimeout(() => this.onRecaptchaApiReady(), 350);
			}
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/frontend/handlers/fields/time.js
	var time_exports = /* @__PURE__ */ __exportAll({ default: () => TimeField });
	var TimeField;
	var init_time = __esmMin((() => {
		init_data_time_field_base();
		TimeField = class extends DataTimeFieldBase {
			getFieldsSelector() {
				return ".elementor-time-field";
			}
			getPickerOptions() {
				return {
					noCalendar: true,
					enableTime: true,
					allowInput: true
				};
			}
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/frontend/frontend.js
	var frontend_default$18 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("form", [
				() => __vitePreload(() => Promise.resolve().then(() => (init_form_steps(), form_steps_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_form_sender(), form_sender_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_form_redirect(), form_redirect_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_date(), date_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_recaptcha(), recaptcha_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_time(), time_exports)), void 0)
			]);
			elementorFrontend.elementsHandler.attachHandler("subscribe", [
				() => __vitePreload(() => Promise.resolve().then(() => (init_form_steps(), form_steps_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_form_sender(), form_sender_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_form_redirect(), form_redirect_exports)), void 0)
			]);
		}
	};
	//#endregion
	//#region modules/gallery/assets/js/frontend/handler.js
	var handler_exports$1 = /* @__PURE__ */ __exportAll({ default: () => galleryHandler });
	var galleryHandler;
	var init_handler$1 = __esmMin((() => {
		galleryHandler = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return {
					selectors: {
						container: ".elementor-gallery__container",
						galleryTitles: ".elementor-gallery-title",
						galleryImages: ".e-gallery-image",
						galleryItemOverlay: ".elementor-gallery-item__overlay",
						galleryItemContent: ".elementor-gallery-item__content"
					},
					classes: { activeTitle: "elementor-item-active" }
				};
			}
			getDefaultElements() {
				const { selectors } = this.getSettings(), elements = {
					$container: this.$element.find(selectors.container),
					$titles: this.$element.find(selectors.galleryTitles)
				};
				elements.$items = elements.$container.children();
				elements.$images = elements.$items.children(selectors.galleryImages);
				elements.$itemsOverlay = elements.$items.children(selectors.galleryItemOverlay);
				elements.$itemsContent = elements.$items.children(selectors.galleryItemContent);
				elements.$itemsContentElements = elements.$itemsContent.children();
				return elements;
			}
			getGallerySettings() {
				const settings = this.getElementSettings();
				const activeBreakpoints = elementorFrontend.config.responsive.activeBreakpoints;
				const activeBreakpointsKeys = Object.keys(activeBreakpoints);
				const breakPointSettings = {};
				const desktopIdealRowHeight = elementorFrontend.getDeviceSetting("desktop", settings, "ideal_row_height");
				activeBreakpointsKeys.forEach((breakpoint) => {
					if ("widescreen" !== breakpoint) {
						const idealRowHeight = elementorFrontend.getDeviceSetting(breakpoint, settings, "ideal_row_height");
						breakPointSettings[activeBreakpoints[breakpoint].value] = {
							horizontalGap: elementorFrontend.getDeviceSetting(breakpoint, settings, "gap").size,
							verticalGap: elementorFrontend.getDeviceSetting(breakpoint, settings, "gap").size,
							columns: elementorFrontend.getDeviceSetting(breakpoint, settings, "columns"),
							idealRowHeight: idealRowHeight == null ? void 0 : idealRowHeight.size
						};
					}
				});
				return {
					type: settings.gallery_layout,
					idealRowHeight: desktopIdealRowHeight == null ? void 0 : desktopIdealRowHeight.size,
					container: this.elements.$container,
					columns: settings.columns,
					aspectRatio: settings.aspect_ratio,
					lastRow: "normal",
					horizontalGap: elementorFrontend.getDeviceSetting("desktop", settings, "gap").size,
					verticalGap: elementorFrontend.getDeviceSetting("desktop", settings, "gap").size,
					animationDuration: settings.content_animation_duration,
					breakpoints: breakPointSettings,
					rtl: elementorFrontend.config.is_rtl,
					lazyLoad: "yes" === settings.lazyload
				};
			}
			initGallery() {
				this.gallery = new EGallery(this.getGallerySettings());
				this.toggleAllAnimationsClasses();
			}
			removeAnimationClasses($element) {
				$element.removeClass((index, className) => (className.match(/elementor-animated-item-\S+/g) || []).join(" "));
			}
			toggleOverlayHoverAnimation() {
				this.removeAnimationClasses(this.elements.$itemsOverlay);
				const hoverAnimation = this.getElementSettings("background_overlay_hover_animation");
				if (hoverAnimation) this.elements.$itemsOverlay.addClass("elementor-animated-item--" + hoverAnimation);
			}
			toggleOverlayContentAnimation() {
				this.removeAnimationClasses(this.elements.$itemsContentElements);
				const contentHoverAnimation = this.getElementSettings("content_hover_animation");
				if (contentHoverAnimation) this.elements.$itemsContentElements.addClass("elementor-animated-item--" + contentHoverAnimation);
			}
			toggleOverlayContentSequencedAnimation() {
				this.elements.$itemsContent.toggleClass("elementor-gallery--sequenced-animation", "yes" === this.getElementSettings("content_sequenced_animation"));
			}
			toggleImageHoverAnimation() {
				const imageHoverAnimation = this.getElementSettings("image_hover_animation");
				this.removeAnimationClasses(this.elements.$images);
				if (imageHoverAnimation) this.elements.$images.addClass("elementor-animated-item--" + imageHoverAnimation);
			}
			toggleAllAnimationsClasses() {
				const elementSettings = this.getElementSettings();
				const animation = elementSettings.background_overlay_hover_animation || elementSettings.content_hover_animation || elementSettings.image_hover_animation;
				this.elements.$items.toggleClass("elementor-animated-content", !!animation);
				this.toggleImageHoverAnimation();
				this.toggleOverlayHoverAnimation();
				this.toggleOverlayContentAnimation();
				this.toggleOverlayContentSequencedAnimation();
			}
			toggleAnimationClasses(settingKey) {
				if ("content_sequenced_animation" === settingKey) this.toggleOverlayContentSequencedAnimation();
				if ("background_overlay_hover_animation" === settingKey) this.toggleOverlayHoverAnimation();
				if ("content_hover_animation" === settingKey) this.toggleOverlayContentAnimation();
				if ("image_hover_animation" === settingKey) this.toggleImageHoverAnimation();
			}
			setGalleryTags(id) {
				this.gallery.setSettings("tags", "all" === id ? [] : ["" + id]);
			}
			bindEvents() {
				this.elements.$titles.on("click", this.galleriesNavigationListener.bind(this)).on("keyup", (event) => {
					if (13 === event.keyCode || 32 === event.keyCode) event.currentTarget.click();
				});
				elementorFrontend.elements.$window.on("elementor/nested-tabs/activate", this.initGallery.bind(this));
			}
			galleriesNavigationListener(event) {
				const classes = this.getSettings("classes");
				const clickedElement = jQuery(event.target);
				this.elements.$titles.removeClass(classes.activeTitle);
				clickedElement.addClass(classes.activeTitle);
				this.setGalleryTags(clickedElement.data("gallery-index"));
				const updateLightboxGroup = () => this.setLightboxGalleryIndex(clickedElement.data("gallery-index"));
				setTimeout(updateLightboxGroup, 1e3);
			}
			setLightboxGalleryIndex(index = "all") {
				if ("all" === index) return this.elements.$items.attr("data-elementor-lightbox-slideshow", "all_" + this.getID());
				this.elements.$items.not(".e-gallery-item--hidden").attr("data-elementor-lightbox-slideshow", index + "_" + this.getID());
			}
			onInit(...args) {
				super.onInit(...args);
				if (elementorFrontend.isEditMode() && 1 <= this.$element.find(".elementor-widget-empty-icon").length) this.$element.addClass("elementor-widget-empty");
				if (!this.elements.$container.length) return;
				this.initGallery();
				this.elements.$titles.first().trigger("click");
			}
			getSettingsDictionary() {
				if (this.settingsDictionary) return this.settingsDictionary;
				const activeBreakpoints = elementorFrontend.config.responsive.activeBreakpoints;
				const activeBreakpointsKeys = Object.keys(activeBreakpoints);
				const settingsDictionary = {
					columns: ["columns"],
					gap: ["horizontalGap", "verticalGap"],
					ideal_row_height: ["idealRowHeight"]
				};
				activeBreakpointsKeys.forEach((breakpoint) => {
					if ("widescreen" === breakpoint) return;
					settingsDictionary["columns_" + breakpoint] = ["breakpoints." + activeBreakpoints[breakpoint].value + ".columns"];
					settingsDictionary["gap_" + breakpoint] = ["breakpoints." + activeBreakpoints[breakpoint].value + ".horizontalGap", "breakpoints." + activeBreakpoints[breakpoint].value + ".verticalGap"];
					settingsDictionary["ideal_row_height_" + breakpoint] = ["breakpoints." + activeBreakpoints[breakpoint].value + ".idealRowHeight"];
				});
				settingsDictionary.aspect_ratio = ["aspectRatio"];
				this.settingsDictionary = settingsDictionary;
				return this.settingsDictionary;
			}
			onElementChange(settingKey) {
				this.getGallerySettings();
				if (-1 !== [
					"background_overlay_hover_animation",
					"content_hover_animation",
					"image_hover_animation",
					"content_sequenced_animation"
				].indexOf(settingKey)) {
					this.toggleAnimationClasses(settingKey);
					return;
				}
				const settingsToUpdate = this.getSettingsDictionary()[settingKey];
				if (settingsToUpdate) {
					const gallerySettings = this.getGallerySettings();
					settingsToUpdate.forEach((settingToUpdate) => {
						this.gallery.setSettings(settingToUpdate, this.getItems(gallerySettings, settingToUpdate));
					});
				}
			}
			onDestroy() {
				super.onDestroy();
				if (this.gallery) this.gallery.destroy();
			}
		};
	}));
	//#endregion
	//#region modules/gallery/assets/js/frontend/frontend.js
	var frontend_default$17 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("gallery", () => __vitePreload(() => Promise.resolve().then(() => (init_handler$1(), handler_exports$1)), void 0));
		}
	};
	//#endregion
	//#region modules/lottie/assets/js/frontend/handler.js
	var handler_exports = /* @__PURE__ */ __exportAll({ default: () => lottieHandler });
	var __defProp$5, __defProps$1, __getOwnPropDescs$1, __getOwnPropSymbols$1, __hasOwnProp$1, __propIsEnum$1, __defNormalProp$5, __spreadValues$1, __spreadProps$1, lottieHandler;
	var init_handler = __esmMin((() => {
		__defProp$5 = Object.defineProperty;
		__defProps$1 = Object.defineProperties;
		__getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
		__hasOwnProp$1 = Object.prototype.hasOwnProperty;
		__propIsEnum$1 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$5 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$5(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$1 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
			if (__getOwnPropSymbols$1) {
				for (var prop of __getOwnPropSymbols$1(b)) if (__propIsEnum$1.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$1 = /* @__PURE__ */ __name((a, b) => __defProps$1(a, __getOwnPropDescs$1(b)), "__spreadProps");
		lottieHandler = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return {
					selectors: {
						container: ".e-lottie__container",
						containerLink: ".e-lottie__container__link",
						animation: ".e-lottie__animation",
						caption: ".e-lottie__caption"
					},
					classes: { caption: "e-lottie__caption" }
				};
			}
			getDefaultElements() {
				const { selectors } = this.getSettings();
				return {
					$widgetWrapper: this.$element,
					$container: this.$element.find(selectors.container),
					$containerLink: this.$element.find(selectors.containerLink),
					$animation: this.$element.find(selectors.animation),
					$caption: this.$element.find(selectors.caption),
					$sectionParent: this.$element.closest(".elementor-section"),
					$columnParent: this.$element.closest(".elementor-column"),
					$containerParent: this.$element.closest(".e-con")
				};
			}
			onInit(...args) {
				super.onInit(...args);
				this.lottie = null;
				this.state = {
					isAnimationScrollUpdateNeededOnFirstLoad: true,
					isNewLoopCycle: false,
					isInViewport: false,
					loop: false,
					animationDirection: "forward",
					currentAnimationTrigger: "",
					effectsRelativeTo: "",
					hoverOutMode: "",
					hoverArea: "",
					caption: "",
					playAnimationCount: 0,
					animationSpeed: 0,
					linkTimeout: 0,
					viewportOffset: {
						start: 0,
						end: 100
					}
				};
				this.intersectionObservers = {
					animation: {
						observer: null,
						element: null
					},
					lazyload: {
						observer: null,
						element: null
					}
				};
				this.animationFrameRequest = {
					timer: null,
					lastScrollY: 0
				};
				this.listeners = {
					collection: [],
					elements: {
						$widgetArea: {
							triggerAnimationHoverIn: null,
							triggerAnimationHoverOut: null
						},
						$container: { triggerAnimationClick: null }
					}
				};
				this.initLottie();
			}
			initLottie() {
				if (this.getLottieSettings().lazyload) this.lazyloadLottie();
				else this.generateLottie();
			}
			lazyloadLottie() {
				const bufferHeightBeforeTriggerLottie = 200;
				this.intersectionObservers.lazyload.observer = elementorModules.utils.Scroll.scrollObserver({
					offset: `0px 0px ${bufferHeightBeforeTriggerLottie}px`,
					callback: (event) => {
						if (event.isInViewport) {
							this.generateLottie();
							this.intersectionObservers.lazyload.observer.unobserve(this.intersectionObservers.lazyload.element);
						}
					}
				});
				this.intersectionObservers.lazyload.element = this.elements.$container[0];
				this.intersectionObservers.lazyload.observer.observe(this.intersectionObservers.lazyload.element);
			}
			generateLottie() {
				this.createLottieInstance();
				this.setLottieEvents();
			}
			createLottieInstance() {
				const lottieSettings = this.getLottieSettings();
				this.lottie = bodymovin.loadAnimation({
					container: this.elements.$animation[0],
					path: this.getAnimationPath(),
					renderer: lottieSettings.renderer,
					autoplay: false,
					name: "lottie-widget"
				});
				this.elements.$animation.data("lottie", this.lottie);
			}
			getAnimationPath() {
				var _a;
				var _b;
				const lottieSettings = this.getLottieSettings();
				if (((_a = lottieSettings.source_json) == null ? void 0 : _a.url) && "json" === lottieSettings.source_json.url.toLowerCase().substr(-4)) return lottieSettings.source_json.url;
				else if ((_b = lottieSettings.source_external_url) == null ? void 0 : _b.url) return lottieSettings.source_external_url.url;
				return elementorProFrontend.config.lottie.defaultAnimationUrl;
			}
			setCaption() {
				const lottieSettings = this.getLottieSettings();
				if ("external_url" === lottieSettings.source || "media_file" === lottieSettings.source && "custom" === lottieSettings.caption_source) this.getCaptionElement().text(lottieSettings.caption);
			}
			getCaptionElement() {
				if (!this.elements.$caption.length) {
					const { classes } = this.getSettings();
					this.elements.$caption = jQuery("<p>", { class: classes.caption });
					this.elements.$container.append(this.elements.$caption);
					return this.elements.$caption;
				}
				return this.elements.$caption;
			}
			setLottieEvents() {
				this.lottie.addEventListener("DOMLoaded", () => this.onLottieDomLoaded());
				this.lottie.addEventListener("complete", () => this.onComplete());
			}
			saveInitialValues() {
				var _a;
				const lottieSettings = this.getLottieSettings();
				this.lottie.__initialTotalFrames = this.lottie.totalFrames;
				this.lottie.__initialFirstFrame = this.lottie.firstFrame;
				this.state.currentAnimationTrigger = lottieSettings.trigger;
				this.state.effectsRelativeTo = lottieSettings.effects_relative_to;
				this.state.viewportOffset.start = lottieSettings.viewport ? lottieSettings.viewport.sizes.start : 0;
				this.state.viewportOffset.end = lottieSettings.viewport ? lottieSettings.viewport.sizes.end : 100;
				this.state.animationSpeed = (_a = lottieSettings.play_speed) == null ? void 0 : _a.size;
				this.state.linkTimeout = lottieSettings.link_timeout;
				this.state.caption = lottieSettings.caption;
				this.state.loop = lottieSettings.loop;
			}
			setAnimationFirstFrame() {
				const frame = this.getAnimationFrames();
				frame.first = frame.first - this.lottie.__initialFirstFrame;
				this.lottie.goToAndStop(frame.first, true);
			}
			initAnimationTrigger() {
				switch (this.getLottieSettings().trigger) {
					case "none":
						this.playLottie();
						break;
					case "arriving_to_viewport":
						this.playAnimationWhenArrivingToViewport();
						break;
					case "bind_to_scroll":
						this.playAnimationWhenBindToScroll();
						break;
					case "on_click":
						this.bindAnimationClickEvents();
						break;
					case "on_hover":
						this.bindAnimationHoverEvents();
						break;
				}
			}
			playAnimationWhenArrivingToViewport() {
				const offset = this.getOffset();
				this.intersectionObservers.animation.observer = elementorModules.utils.Scroll.scrollObserver({
					offset: `${offset.end}% 0% ${offset.start}%`,
					callback: (event) => {
						if (event.isInViewport) {
							this.state.isInViewport = true;
							this.playLottie();
						} else {
							this.state.isInViewport = false;
							this.lottie.pause();
						}
					}
				});
				this.intersectionObservers.animation.element = this.elements.$widgetWrapper[0];
				this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
			}
			getOffset() {
				const lottieSettings = this.getLottieSettings();
				return {
					start: -lottieSettings.viewport.sizes.start || 0,
					end: -(100 - lottieSettings.viewport.sizes.end) || 0
				};
			}
			playAnimationWhenBindToScroll() {
				const lottieSettings = this.getLottieSettings();
				const offset = this.getOffset();
				this.intersectionObservers.animation.observer = elementorModules.utils.Scroll.scrollObserver({
					offset: `${offset.end}% 0% ${offset.start}%`,
					callback: (event) => this.onLottieIntersection(event)
				});
				this.intersectionObservers.animation.element = "viewport" === lottieSettings.effects_relative_to ? this.elements.$widgetWrapper[0] : document.documentElement;
				this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
			}
			updateAnimationByScrollPosition() {
				const lottieSettings = this.getLottieSettings();
				let percentage;
				if ("page" === lottieSettings.effects_relative_to) percentage = this.getLottiePagePercentage();
				else if ("fixed" === this.getCurrentDeviceSetting("_position")) percentage = this.getLottieViewportHeightPercentage();
				else percentage = this.getLottieViewportPercentage();
				let nextFrameToPlay = this.getFrameNumberByPercent(percentage);
				nextFrameToPlay = nextFrameToPlay - this.lottie.__initialFirstFrame;
				this.lottie.goToAndStop(nextFrameToPlay, true);
			}
			getLottieViewportPercentage() {
				return elementorModules.utils.Scroll.getElementViewportPercentage(this.elements.$widgetWrapper, this.getOffset());
			}
			getLottiePagePercentage() {
				return elementorModules.utils.Scroll.getPageScrollPercentage(this.getOffset());
			}
			getLottieViewportHeightPercentage() {
				return elementorModules.utils.Scroll.getPageScrollPercentage(this.getOffset(), window.innerHeight);
			}
			/**
			* @param {number} percent - Percent value between 0-100
			*/
			getFrameNumberByPercent(percent) {
				const frame = this.getAnimationFrames();
				percent = Math.min(100, Math.max(0, percent));
				return frame.first + (frame.last - frame.first) * percent / 100;
			}
			getAnimationFrames() {
				const lottieSettings = this.getLottieSettings();
				const currentFrame = this.getAnimationCurrentFrame();
				const startPoint = this.getAnimationRange().start;
				const endPoint = this.getAnimationRange().end;
				let firstFrame = this.lottie.__initialFirstFrame;
				let lastFrame = 0 === this.lottie.__initialFirstFrame ? this.lottie.__initialTotalFrames : this.lottie.__initialFirstFrame + this.lottie.__initialTotalFrames;
				if (startPoint && startPoint > firstFrame) firstFrame = startPoint;
				if (endPoint && endPoint < lastFrame) lastFrame = endPoint;
				if (!this.state.isNewLoopCycle && "bind_to_scroll" !== lottieSettings.trigger) firstFrame = startPoint && startPoint > currentFrame ? startPoint : currentFrame;
				if ("backward" === this.state.animationDirection && this.isReverseMode()) {
					firstFrame = currentFrame;
					lastFrame = startPoint && startPoint > this.lottie.__initialFirstFrame ? startPoint : this.lottie.__initialFirstFrame;
				}
				return {
					first: firstFrame,
					last: lastFrame,
					current: currentFrame,
					total: this.lottie.__initialTotalFrames
				};
			}
			getAnimationRange() {
				const lottieSettings = this.getLottieSettings();
				return {
					start: this.getInitialFrameNumberByPercent(lottieSettings.start_point.size),
					end: this.getInitialFrameNumberByPercent(lottieSettings.end_point.size)
				};
			}
			getInitialFrameNumberByPercent(percent) {
				percent = Math.min(100, Math.max(0, percent));
				return this.lottie.__initialFirstFrame + (this.lottie.__initialTotalFrames - this.lottie.__initialFirstFrame) * percent / 100;
			}
			getAnimationCurrentFrame() {
				return 0 === this.lottie.firstFrame ? this.lottie.currentFrame : this.lottie.firstFrame + this.lottie.currentFrame;
			}
			setLinkTimeout() {
				var _a;
				const lottieSettings = this.getLottieSettings();
				if ("on_click" === lottieSettings.trigger && ((_a = lottieSettings.custom_link) == null ? void 0 : _a.url) && lottieSettings.link_timeout) this.elements.$containerLink.on("click", (event) => {
					event.preventDefault();
					if (!this.isEdit) setTimeout(() => {
						const tabTarget = "on" === lottieSettings.custom_link.is_external ? "_blank" : "_self";
						window.open(lottieSettings.custom_link.url, tabTarget);
					}, lottieSettings.link_timeout);
				});
			}
			bindAnimationClickEvents() {
				this.listeners.elements.$container.triggerAnimationClick = () => {
					this.playLottie();
				};
				this.addSessionEventListener(this.elements.$container, "click", this.listeners.elements.$container.triggerAnimationClick);
			}
			getLottieSettings() {
				var _a;
				var _b;
				const lottieSettings = this.getElementSettings();
				const settings = __spreadProps$1(__spreadValues$1({}, lottieSettings), {
					lazyload: "yes" === lottieSettings.lazyload,
					loop: "yes" === lottieSettings.loop
				});
				if ("external_url" === lottieSettings.source) settings.source_external_url = __spreadProps$1(__spreadValues$1({}, (_a = lottieSettings.source_external_url) != null ? _a : {}), { url: ((_b = settings.source_external_url) == null ? void 0 : _b.url) || this.getDynamicValue() });
				return settings;
			}
			playLottie() {
				const frame = this.getAnimationFrames();
				this.lottie.stop();
				this.lottie.playSegments([frame.first, frame.last], true);
				this.state.isNewLoopCycle = false;
			}
			bindAnimationHoverEvents() {
				this.createAnimationHoverInEvents();
				this.createAnimationHoverOutEvents();
			}
			createAnimationHoverInEvents() {
				const lottieSettings = this.getLottieSettings();
				const $widgetArea = this.getHoverAreaElement();
				this.state.hoverArea = lottieSettings.hover_area;
				this.listeners.elements.$widgetArea.triggerAnimationHoverIn = () => {
					this.state.animationDirection = "forward";
					this.playLottie();
				};
				this.addSessionEventListener($widgetArea, "mouseenter", this.listeners.elements.$widgetArea.triggerAnimationHoverIn);
			}
			/**
			* @param {jQuery}   $el
			* @param {string}   event    - event type
			* @param {Function} callback
			*/
			addSessionEventListener($el, event, callback) {
				$el.on(event, callback);
				this.listeners.collection.push({
					$el,
					event,
					callback
				});
			}
			createAnimationHoverOutEvents() {
				const lottieSettings = this.getLottieSettings();
				const $widgetArea = this.getHoverAreaElement();
				if ("pause" === lottieSettings.on_hover_out || "reverse" === lottieSettings.on_hover_out) {
					this.state.hoverOutMode = lottieSettings.on_hover_out;
					this.listeners.elements.$widgetArea.triggerAnimationHoverOut = () => {
						if ("pause" === lottieSettings.on_hover_out) this.lottie.pause();
						else {
							this.state.animationDirection = "backward";
							this.playLottie();
						}
					};
					this.addSessionEventListener($widgetArea, "mouseleave", this.listeners.elements.$widgetArea.triggerAnimationHoverOut);
				}
			}
			getHoverAreaElement() {
				switch (this.getLottieSettings().hover_area) {
					case "section": return this.elements.$sectionParent;
					case "column": return this.elements.$columnParent;
					case "container": return this.elements.$containerParent;
				}
				return this.elements.$container;
			}
			setLoopOnAnimationComplete() {
				const lottieSettings = this.getLottieSettings();
				this.state.isNewLoopCycle = true;
				if (lottieSettings.loop && !this.isReverseMode()) this.setLoopWhenNotReverse();
				else if (lottieSettings.loop && this.isReverseMode()) this.setReverseAnimationOnLoop();
				else if (!lottieSettings.loop && this.isReverseMode()) this.setReverseAnimationOnSingleTrigger();
			}
			isReverseMode() {
				const lottieSettings = this.getLottieSettings();
				return "yes" === lottieSettings.reverse_animation || "reverse" === lottieSettings.on_hover_out && "backward" === this.state.animationDirection;
			}
			setLoopWhenNotReverse() {
				const lottieSettings = this.getLottieSettings();
				if (lottieSettings.number_of_times > 0) {
					this.state.playAnimationCount++;
					if (this.state.playAnimationCount < lottieSettings.number_of_times) this.playLottie();
					else this.state.playAnimationCount = 0;
				} else this.playLottie();
			}
			setReverseAnimationOnLoop() {
				const lottieSettings = this.getLottieSettings();
				if (!lottieSettings.number_of_times || this.state.playAnimationCount < lottieSettings.number_of_times) {
					this.state.animationDirection = "forward" === this.state.animationDirection ? "backward" : "forward";
					this.playLottie();
					if ("backward" === this.state.animationDirection) this.state.playAnimationCount++;
				} else {
					this.state.playAnimationCount = 0;
					this.state.animationDirection = "forward";
				}
			}
			setReverseAnimationOnSingleTrigger() {
				if (this.state.playAnimationCount < 1) {
					this.state.playAnimationCount++;
					this.state.animationDirection = "backward";
					this.playLottie();
				} else if (this.state.playAnimationCount >= 1 && "forward" === this.state.animationDirection) {
					this.state.animationDirection = "backward";
					this.playLottie();
				} else {
					this.state.playAnimationCount = 0;
					this.state.animationDirection = "forward";
				}
			}
			setAnimationSpeed() {
				const lottieSettings = this.getLottieSettings();
				if (lottieSettings.play_speed) this.lottie.setSpeed(lottieSettings.play_speed.size);
			}
			onElementChange() {
				this.updateLottieValues();
				this.resetAnimationTrigger();
			}
			updateLottieValues() {
				var _a;
				const lottieSettings = this.getLottieSettings();
				[
					{
						sourceVal: (_a = lottieSettings.play_speed) == null ? void 0 : _a.size,
						stateProp: "animationSpeed",
						callback: () => this.setAnimationSpeed()
					},
					{
						sourceVal: lottieSettings.link_timeout,
						stateProp: "linkTimeout",
						callback: () => this.setLinkTimeout()
					},
					{
						sourceVal: lottieSettings.caption,
						stateProp: "caption",
						callback: () => this.setCaption()
					},
					{
						sourceVal: lottieSettings.effects_relative_to,
						stateProp: "effectsRelativeTo",
						callback: () => this.updateAnimationByScrollPosition()
					},
					{
						sourceVal: lottieSettings.loop,
						stateProp: "loop",
						callback: () => this.onLoopStateChange()
					}
				].forEach((item) => {
					if ("undefined" !== typeof item.sourceVal && item.sourceVal !== this.state[item.stateProp]) {
						this.state[item.stateProp] = item.sourceVal;
						item.callback();
					}
				});
			}
			onLoopStateChange() {
				const isInActiveViewportMode = "arriving_to_viewport" === this.state.currentAnimationTrigger && this.state.isInViewport;
				if (this.state.loop && (isInActiveViewportMode || "none" === this.state.currentAnimationTrigger)) this.playLottie();
			}
			resetAnimationTrigger() {
				const lottieSettings = this.getLottieSettings();
				const isTriggerChange = lottieSettings.trigger !== this.state.currentAnimationTrigger;
				const isViewportOffsetChange = lottieSettings.viewport ? this.isViewportOffsetChange() : false;
				const isHoverOutModeChange = lottieSettings.on_hover_out ? this.isHoverOutModeChange() : false;
				const isHoverAreaChange = lottieSettings.hover_area ? this.isHoverAreaChange() : false;
				if (isTriggerChange || isViewportOffsetChange || isHoverOutModeChange || isHoverAreaChange) {
					this.removeAnimationFrameRequests();
					this.removeObservers();
					this.removeEventListeners();
					this.initAnimationTrigger();
				}
			}
			isViewportOffsetChange() {
				const lottieSettings = this.getLottieSettings();
				const isStartOffsetChange = lottieSettings.viewport.sizes.start !== this.state.viewportOffset.start;
				const isEndOffsetChange = lottieSettings.viewport.sizes.end !== this.state.viewportOffset.end;
				return isStartOffsetChange || isEndOffsetChange;
			}
			isHoverOutModeChange() {
				return this.getLottieSettings().on_hover_out !== this.state.hoverOutMode;
			}
			isHoverAreaChange() {
				return this.getLottieSettings().hover_area !== this.state.hoverArea;
			}
			removeEventListeners() {
				this.listeners.collection.forEach((listener) => {
					listener.$el.off(listener.event, null, listener.callback);
				});
			}
			removeObservers() {
				for (const type in this.intersectionObservers) if (this.intersectionObservers[type].observer && this.intersectionObservers[type].element) this.intersectionObservers[type].observer.unobserve(this.intersectionObservers[type].element);
			}
			removeAnimationFrameRequests() {
				cancelAnimationFrame(this.animationFrameRequest.timer);
			}
			onDestroy() {
				super.onDestroy();
				this.destroyLottie();
			}
			destroyLottie() {
				this.removeAnimationFrameRequests();
				this.removeObservers();
				this.removeEventListeners();
				this.elements.$animation.removeData("lottie");
				if (this.lottie) this.lottie.destroy();
			}
			onLottieDomLoaded() {
				this.saveInitialValues();
				this.setAnimationSpeed();
				this.setLinkTimeout();
				this.setCaption();
				this.setAnimationFirstFrame();
				this.initAnimationTrigger();
			}
			onComplete() {
				this.setLoopOnAnimationComplete();
			}
			onLottieIntersection(event) {
				if (event.isInViewport) {
					if (this.state.isAnimationScrollUpdateNeededOnFirstLoad) {
						this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
						this.updateAnimationByScrollPosition();
					}
					this.animationFrameRequest.timer = requestAnimationFrame(() => this.onAnimationFrameRequest());
				} else {
					const frame = this.getAnimationFrames();
					const finalFrame = "up" === event.intersectionScrollDirection ? frame.first : frame.last;
					this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
					cancelAnimationFrame(this.animationFrameRequest.timer);
					this.lottie.goToAndStop(finalFrame, true);
				}
			}
			onAnimationFrameRequest() {
				if (window.scrollY !== this.animationFrameRequest.lastScrollY) {
					this.updateAnimationByScrollPosition();
					this.animationFrameRequest.lastScrollY = window.scrollY;
				}
				this.animationFrameRequest.timer = requestAnimationFrame(() => this.onAnimationFrameRequest());
			}
			getDynamicValue() {
				var _a;
				var _b;
				var _c;
				var _d;
				var _e;
				if (!this.isEdit || !(elementor == null ? void 0 : elementor.dynamicTags)) return "";
				const modelSettings = (_b = (_a = elementor.getContainer(this.getID())) == null ? void 0 : _a.model) == null ? void 0 : _b.get("settings");
				const dynamicValue = (_d = (_c = modelSettings == null ? void 0 : modelSettings.get("__dynamic__")) == null ? void 0 : _c.source_external_url) != null ? _d : null;
				if (!dynamicValue) return "";
				const dynamicData = elementor.dynamicTags.tagTextToTagData(dynamicValue);
				if (!dynamicData) return "";
				try {
					return (_e = elementor.dynamicTags.parseTagsText(dynamicValue, dynamicData, elementor.dynamicTags.getTagDataContent)) != null ? _e : "";
				} catch (e) {
					return "";
				}
			}
		};
	}));
	//#endregion
	//#region modules/lottie/assets/js/frontend/frontend.js
	var frontend_default$16 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("lottie", () => __vitePreload(() => Promise.resolve().then(() => (init_handler(), handler_exports)), void 0));
		}
	};
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
	var init_typeof = __esmMin((() => {}));
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
	var init_toPrimitive = __esmMin((() => {
		init_typeof();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	var init_toPropertyKey = __esmMin((() => {
		init_typeof();
		init_toPrimitive();
	}));
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
	var init_defineProperty = __esmMin((() => {
		init_toPropertyKey();
	}));
	//#endregion
	//#region assets/dev/js/frontend/utils/anchor-link.js
	var AnchorLinks;
	var init_anchor_link = __esmMin((() => {
		init_defineProperty();
		AnchorLinks = class {
			constructor($anchorLinks, classes) {
				_defineProperty(this, "observer", null);
				this.$anchorLinks = $anchorLinks;
				this.activeAnchorClass = classes.activeAnchorItem;
				this.anchorClass = classes.anchorItem;
			}
			getViewportHeight() {
				return window.innerHeight;
			}
			bindEvents() {
				this.onResize = this.onResize.bind(this);
				window.addEventListener("resize", this.onResize);
			}
			initialize() {
				this.viewPortHeight = this.getViewportHeight();
				this.followMenuAnchors();
				this.bindEvents();
			}
			followMenuAnchors() {
				this.$anchorLinks.each((index, anchorLink) => {
					if (location.pathname === anchorLink.pathname && "" !== anchorLink.hash) this.followMenuAnchor(jQuery(anchorLink));
				});
			}
			followMenuAnchor($element) {
				const $targetElement = $element.hasClass(this.anchorClass) ? $element : $element.closest(`.${this.anchorClass}`);
				const anchorElement = this.getAnchorElement($element);
				if (!anchorElement) return;
				const options = this.getObserverOptions(anchorElement);
				this.observer = this.createObserver($targetElement, $element, options);
				this.observer.observe(anchorElement);
			}
			getAnchorElement($element) {
				const anchorSelector = $element[0].hash;
				try {
					const decodedSelector = decodeURIComponent(anchorSelector);
					return document.querySelector(decodedSelector);
				} catch (e) {
					return null;
				}
			}
			getObserverOptions(element) {
				return {
					root: null,
					rootMargin: this.calculateRootMargin(element)
				};
			}
			calculateRootMargin(element) {
				const isAnchorHeightLargerThanHalfViewport = ((element === null || element === void 0 ? void 0 : element.offsetHeight) || 0) > this.viewPortHeight / 2;
				const rootMarginBlockEnd = -1 * this.viewPortHeight / 2;
				return `${isAnchorHeightLargerThanHalfViewport ? rootMarginBlockEnd : 0}px 0px ${rootMarginBlockEnd}px 0px`;
			}
			createObserver($targetElement, $element, options) {
				return new IntersectionObserver((entries) => {
					entries.forEach((entry) => {
						$targetElement.toggleClass(this.activeAnchorClass, entry.isIntersecting);
						$element.attr("aria-current", entry.isIntersecting ? "location" : "");
					});
				}, options);
			}
			onResize() {
				this.viewPortHeight = this.getViewportHeight();
				if (this.observer) this.observer.disconnect();
				this.followMenuAnchors();
			}
		};
	}));
	//#endregion
	//#region modules/nav-menu/assets/js/frontend/handlers/nav-menu.js
	var nav_menu_exports = /* @__PURE__ */ __exportAll({ default: () => nav_menu_default });
	var nav_menu_default;
	var init_nav_menu = __esmMin((() => {
		init_anchor_link();
		nav_menu_default = elementorModules.frontend.handlers.Base.extend({
			stretchElement: null,
			getDefaultSettings() {
				return {
					selectors: {
						menu: ".elementor-nav-menu",
						anchorLink: ".elementor-nav-menu--main .elementor-item-anchor",
						dropdownMenu: ".elementor-nav-menu__container.elementor-nav-menu--dropdown",
						menuToggle: ".elementor-menu-toggle"
					},
					classes: {
						anchorItem: "elementor-item-anchor",
						activeAnchorItem: "elementor-item-active"
					}
				};
			},
			getDefaultElements() {
				var selectors = this.getSettings("selectors");
				var elements = {};
				elements.$menu = this.$element.find(selectors.menu);
				elements.$anchorLink = this.$element.find(selectors.anchorLink);
				elements.$dropdownMenu = this.$element.find(selectors.dropdownMenu);
				elements.$dropdownMenuFinalItems = elements.$dropdownMenu.find(".menu-item:not(.menu-item-has-children) > a");
				elements.$menuToggle = this.$element.find(selectors.menuToggle);
				elements.$links = elements.$dropdownMenu.find("a.elementor-item");
				return elements;
			},
			dropdownMenuHeightControllerConfig() {
				const selectors = this.getSettings("selectors");
				return {
					elements: {
						$element: this.$element,
						$dropdownMenuContainer: this.$element.find(selectors.dropdownMenu),
						$menuToggle: this.$element.find(selectors.menuToggle)
					},
					attributes: { menuToggleState: "aria-expanded" },
					settings: {
						dropdownMenuContainerMaxHeight: "1000vmax",
						menuHeightCssVarName: "--menu-height"
					}
				};
			},
			bindEvents() {
				if (!this.elements.$menu.length) return;
				this.elements.$menuToggle.on("click", this.toggleMenu.bind(this)).on("keyup", this.triggerClickOnEnterSpace.bind(this));
				if (this.getElementSettings("full_width")) this.elements.$dropdownMenuFinalItems.on("click", this.toggleMenu.bind(this, false)).on("keyup", this.triggerClickOnEnterSpace.bind(this));
				elementorFrontend.addListenerOnce(this.$element.data("model-cid"), "resize", this.stretchMenu);
				elementorFrontend.addListenerOnce(this.$element.data("model-cid"), "scroll", elementorFrontend.debounce(this.menuHeightController.reassignMobileMenuHeight.bind(this.menuHeightController), 250));
			},
			initStretchElement() {
				this.stretchElement = new elementorModules.frontend.tools.StretchElement({ element: this.elements.$dropdownMenu });
			},
			toggleNavLinksTabIndex(enabled = true) {
				this.elements.$links.attr("tabindex", enabled ? 0 : -1);
			},
			toggleMenu(show) {
				var isDropdownVisible = this.elements.$menuToggle.hasClass("elementor-active");
				if ("boolean" !== typeof show) show = !isDropdownVisible;
				this.elements.$menuToggle.attr("aria-expanded", show);
				this.elements.$dropdownMenu.attr("aria-hidden", !show);
				this.elements.$menuToggle.toggleClass("elementor-active", show);
				this.toggleNavLinksTabIndex(show);
				this.menuHeightController.reassignMobileMenuHeight(this);
				if (show && this.getElementSettings("full_width")) this.stretchElement.stretch();
			},
			triggerClickOnEnterSpace(event) {
				if (13 === event.keyCode || 32 === event.keyCode) {
					event.currentTarget.click();
					event.stopPropagation();
				}
			},
			stretchMenu() {
				if (this.getElementSettings("full_width")) {
					this.stretchElement.stretch();
					this.elements.$dropdownMenu.css("top", this.elements.$menuToggle.outerHeight());
				} else this.stretchElement.reset();
			},
			onInit() {
				this.menuHeightController = new elementorProFrontend.utils.DropdownMenuHeightController(this.dropdownMenuHeightControllerConfig());
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				if (!this.elements.$menu.length) return;
				this.elements.$menu.smartmenus({
					subIndicators: false,
					subMenusMaxWidth: "1000px"
				});
				this.initStretchElement();
				this.stretchMenu();
				if (!elementorFrontend.isEditMode()) {
					const classes = this.getSettings("classes");
					this.anchorLinks = new AnchorLinks(this.elements.$anchorLink, classes);
					this.anchorLinks.initialize();
				}
			},
			onElementChange(propertyName) {
				if ("full_width" === propertyName) this.stretchMenu();
			}
		});
	}));
	//#endregion
	//#region modules/nav-menu/assets/js/frontend/frontend.js
	var frontend_default$15 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			if (jQuery.fn.smartmenus) {
				jQuery.SmartMenus.prototype.isCSSOn = function() {
					return true;
				};
				if (elementorFrontend.config.is_rtl) jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = true;
			}
			elementorFrontend.elementsHandler.attachHandler("nav-menu", () => __vitePreload(() => Promise.resolve().then(() => (init_nav_menu(), nav_menu_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers/base.js
	var base_default$1 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor(settings, callback) {
			super(settings);
			this.callback = callback;
		}
		getTriggerSetting(settingKey) {
			return this.getSettings(this.getName() + "_" + settingKey);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers/page-load.js
	var page_load_default = class extends base_default$1 {
		static {
			__name(this, "default");
		}
		getName() {
			return "page_load";
		}
		run() {
			this.timeout = setTimeout(this.callback, this.getTriggerSetting("delay") * 1e3);
		}
		destroy() {
			clearTimeout(this.timeout);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers/scrolling.js
	var scrolling_default = class extends base_default$1 {
		static {
			__name(this, "default");
		}
		constructor(...args) {
			super(...args);
			this.checkScroll = this.checkScroll.bind(this);
			this.lastScrollOffset = 0;
		}
		getName() {
			return "scrolling";
		}
		checkScroll() {
			const scrollDirection = scrollY > this.lastScrollOffset ? "down" : "up";
			const requestedDirection = this.getTriggerSetting("direction");
			this.lastScrollOffset = scrollY;
			if (scrollDirection !== requestedDirection) return;
			if ("up" === scrollDirection) {
				this.callback();
				return;
			}
			const fullScroll = elementorFrontend.elements.$document.height() - innerHeight;
			if (scrollY / fullScroll * 100 >= this.getTriggerSetting("offset")) this.callback();
		}
		run() {
			elementorFrontend.elements.$window.on("scroll", this.checkScroll);
		}
		destroy() {
			elementorFrontend.elements.$window.off("scroll", this.checkScroll);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers/scrolling-to.js
	var scrolling_to_default = class extends base_default$1 {
		static {
			__name(this, "default");
		}
		getName() {
			return "scrolling_to";
		}
		run() {
			let $targetElement;
			try {
				$targetElement = jQuery(this.getTriggerSetting("selector"));
			} catch (e) {
				return;
			}
			if ($targetElement.length) {
				this.setUpIntersectionObserver();
				this.observer.observe($targetElement[0]);
			}
		}
		setUpIntersectionObserver() {
			this.observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) this.callback();
				});
			});
		}
		destroy() {
			if (this.observer) this.observer.disconnect();
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers/click.js
	var click_default = class extends base_default$1 {
		static {
			__name(this, "default");
		}
		constructor(...args) {
			super(...args);
			this.checkClick = this.checkClick.bind(this);
			this.clicksCount = 0;
		}
		getName() {
			return "click";
		}
		checkClick() {
			this.clicksCount++;
			if (this.clicksCount === this.getTriggerSetting("times")) this.callback();
		}
		run() {
			elementorFrontend.elements.$body.on("click", this.checkClick);
		}
		destroy() {
			elementorFrontend.elements.$body.off("click", this.checkClick);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers/inactivity.js
	var inactivity_default = class extends base_default$1 {
		static {
			__name(this, "default");
		}
		constructor(...args) {
			super(...args);
			this.restartTimer = this.restartTimer.bind(this);
		}
		getName() {
			return "inactivity";
		}
		run() {
			this.startTimer();
			elementorFrontend.elements.$document.on("keypress mousemove", this.restartTimer);
		}
		startTimer() {
			this.timeOut = setTimeout(this.callback, this.getTriggerSetting("time") * 1e3);
		}
		clearTimer() {
			clearTimeout(this.timeOut);
		}
		restartTimer() {
			this.clearTimer();
			this.startTimer();
		}
		destroy() {
			this.clearTimer();
			elementorFrontend.elements.$document.off("keypress mousemove", this.restartTimer);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers/exit-intent.js
	var exit_intent_default = class extends base_default$1 {
		static {
			__name(this, "default");
		}
		constructor(...args) {
			super(...args);
			this.detectExitIntent = this.detectExitIntent.bind(this);
		}
		getName() {
			return "exit_intent";
		}
		detectExitIntent(event) {
			if (event.clientY <= 0) this.callback();
		}
		run() {
			elementorFrontend.elements.$window.on("mouseleave", this.detectExitIntent);
		}
		destroy() {
			elementorFrontend.elements.$window.off("mouseleave", this.detectExitIntent);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers/adblock-detection.js
	var adblock_detection_default = class extends base_default$1 {
		static {
			__name(this, "default");
		}
		getName() {
			return "adblock_detection";
		}
		generateRandomString() {
			const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
			let result = "";
			for (let i = 0; i < 6; i++) {
				const randomIndex = Math.floor(Math.random() * 36);
				result += chars[randomIndex];
			}
			return result;
		}
		hasAdblock() {
			var _a;
			const elementId = `elementor-adblock-detection-${this.generateRandomString()}`;
			this.createEmptyAdBlockElement(elementId);
			const tempAdBlockEle = document.querySelector(`#${elementId}`);
			if (!tempAdBlockEle) return true;
			const hasAdBlock = "none" === ((_a = window.getComputedStyle(tempAdBlockEle)) == null ? void 0 : _a.display);
			this.removeEmptyAdBlockElement(tempAdBlockEle);
			return hasAdBlock;
		}
		createEmptyAdBlockElement(elementId) {
			const tempAdDiv = document.createElement("div");
			tempAdDiv.id = elementId;
			tempAdDiv.className = "ad-box";
			tempAdDiv.style.position = "fixed";
			tempAdDiv.style.top = "0";
			tempAdDiv.style.left = "0";
			tempAdDiv.setAttribute("aria-hidden", "true");
			tempAdDiv.innerHTML = "&nbsp;";
			document.body.appendChild(tempAdDiv);
		}
		removeEmptyAdBlockElement(tempAdBlockEle) {
			tempAdBlockEle.remove();
		}
		run() {
			this.timeout = setTimeout(() => {
				if (this.hasAdblock()) this.callback();
			}, this.getTriggerSetting("delay") * 1e3);
		}
		destroy() {
			clearTimeout(this.timeout);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/triggers.js
	var triggers_default = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor(settings, document) {
			super(settings);
			this.document = document;
			this.triggers = [];
			this.triggerClasses = {
				page_load: page_load_default,
				scrolling: scrolling_default,
				scrolling_to: scrolling_to_default,
				click: click_default,
				inactivity: inactivity_default,
				exit_intent: exit_intent_default,
				adblock_detection: adblock_detection_default
			};
			this.runTriggers();
		}
		runTriggers() {
			const settings = this.getSettings();
			jQuery.each(this.triggerClasses, (key, TriggerClass) => {
				if (!settings[key]) return;
				const trigger = new TriggerClass(settings, () => this.onTriggerFired());
				trigger.run();
				this.triggers.push(trigger);
			});
		}
		destroyTriggers() {
			this.triggers.forEach((trigger) => trigger.destroy());
			this.triggers = [];
		}
		onTriggerFired() {
			this.document.showModal(true);
			this.destroyTriggers();
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/base.js
	var base_default = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor(settings, document) {
			super(settings);
			this.document = document;
		}
		getTimingSetting(settingKey) {
			return this.getSettings(this.getName() + "_" + settingKey);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/page-views.js
	var page_views_default = class extends base_default {
		static {
			__name(this, "default");
		}
		getName() {
			return "page_views";
		}
		check() {
			const pageViews = elementorFrontend.storage.get("pageViews");
			const name = this.getName();
			let initialPageViews = this.document.getStorage(name + "_initialPageViews");
			if (!initialPageViews) {
				this.document.setStorage(name + "_initialPageViews", pageViews);
				initialPageViews = pageViews;
			}
			return pageViews - initialPageViews >= this.getTimingSetting("views");
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/sessions.js
	var sessions_default = class extends base_default {
		static {
			__name(this, "default");
		}
		getName() {
			return "sessions";
		}
		check() {
			const sessions = elementorFrontend.storage.get("sessions");
			const name = this.getName();
			let initialSessions = this.document.getStorage(name + "_initialSessions");
			if (!initialSessions) {
				this.document.setStorage(name + "_initialSessions", sessions);
				initialSessions = sessions;
			}
			return sessions - initialSessions >= this.getTimingSetting("sessions");
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/url.js
	var url_default = class extends base_default {
		static {
			__name(this, "default");
		}
		getName() {
			return "url";
		}
		check() {
			const url = this.getTimingSetting("url");
			const action = this.getTimingSetting("action");
			const referrer = document.referrer;
			if ("regex" !== action) return "hide" === action ^ -1 !== referrer.indexOf(url);
			let regexp;
			try {
				regexp = new RegExp(url);
			} catch (e) {
				return false;
			}
			return regexp.test(referrer);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/sources.js
	var sources_default = class extends base_default {
		static {
			__name(this, "default");
		}
		getName() {
			return "sources";
		}
		check() {
			const sources = this.getTimingSetting("sources");
			if (3 === sources.length) return true;
			const referrer = document.referrer.replace(/https?:\/\/(?:www\.)?/, "");
			if (0 === referrer.indexOf(location.host.replace("www.", ""))) return -1 !== sources.indexOf("internal");
			if (-1 !== sources.indexOf("external")) return true;
			if (-1 !== sources.indexOf("search")) return /^(google|yahoo|bing|yandex|baidu)\./.test(referrer);
			return false;
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/logged-in.js
	var logged_in_default = class extends base_default {
		static {
			__name(this, "default");
		}
		getName() {
			return "logged_in";
		}
		check() {
			const userConfig = elementorFrontend.config.user;
			if (!userConfig) return true;
			if ("all" === this.getTimingSetting("users")) return false;
			return !this.getTimingSetting("roles").filter((role) => -1 !== userConfig.roles.indexOf(role)).length;
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/devices.js
	var devices_default = class extends base_default {
		static {
			__name(this, "default");
		}
		getName() {
			return "devices";
		}
		check() {
			return -1 !== this.getTimingSetting("devices").indexOf(elementorFrontend.getCurrentDeviceMode());
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/times-utils.js
	var TimesUtils = class {
		constructor(args) {
			this.uniqueId = args.uniqueId;
			this.settings = args.settings;
			this.storage = args.storage;
		}
		getTimeFramesInSecounds(timeFrame) {
			return {
				day: 86400,
				week: 604800,
				month: 2628288
			}[timeFrame];
		}
		setExpiration(name, value, timeFrame) {
			if (!this.storage.get(name)) {
				const options = { lifetimeInSeconds: this.getTimeFramesInSecounds(timeFrame) };
				this.storage.set(name, value, options);
				return;
			}
			this.storage.set(name, value);
		}
		getImpressionsCount() {
			var _a;
			const impressionCount = (_a = this.storage.get(this.uniqueId)) != null ? _a : 0;
			return parseInt(impressionCount);
		}
		incrementImpressionsCount() {
			var _a;
			var _b;
			if (!this.settings.period) this.storage.set("times", ((_a = this.storage.get("times")) != null ? _a : 0) + 1);
			else if ("session" !== this.settings.period) {
				const impressionCount = this.getImpressionsCount();
				this.setExpiration(this.uniqueId, impressionCount + 1, this.settings.period);
			} else sessionStorage.setItem(this.uniqueId, parseInt((_b = sessionStorage.getItem(this.uniqueId)) != null ? _b : 0) + 1);
		}
		shouldCountOnOpen() {
			if (this.settings.countOnOpen) this.incrementImpressionsCount();
		}
		shouldDisplayPerTimeFrame() {
			if (this.getImpressionsCount() < this.settings.showsLimit) {
				this.shouldCountOnOpen();
				return true;
			}
			return false;
		}
		shouldDisplayPerSession() {
			var _a;
			const impressionCount = (_a = sessionStorage.getItem(this.uniqueId)) != null ? _a : 0;
			if (parseInt(impressionCount) < this.settings.showsLimit) {
				this.shouldCountOnOpen();
				return true;
			}
			return false;
		}
		shouldDisplayBackwordCompatible(impressionCount = 0, showsLimit) {
			const shouldDisplay = parseInt(impressionCount) < parseInt(showsLimit);
			this.shouldCountOnOpen();
			return shouldDisplay;
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/times.js
	var times_default = class extends base_default {
		static {
			__name(this, "default");
		}
		constructor(...args) {
			super(...args);
			this.uniqueId = `popup-${this.document.getSettings("id")}-impressions-count`;
			const { times_count: countOnOpen, times_period: period, times_times: showsLimit } = this.getSettings();
			this.settings = {
				countOnOpen,
				period,
				showsLimit: parseInt(showsLimit)
			};
			if ("" === this.settings.period) this.settings.period = false;
			if (["", "close"].includes(this.settings.countOnOpen)) {
				this.settings.countOnOpen = false;
				this.onPopupHide();
			} else this.settings.countOnOpen = true;
			this.utils = new TimesUtils({
				uniqueId: this.uniqueId,
				settings: this.settings,
				storage: elementorFrontend.storage
			});
		}
		getName() {
			return "times";
		}
		check() {
			if (!this.settings.period) {
				const impressionCount = this.document.getStorage("times") || 0;
				const showsLimit = this.getTimingSetting("times");
				return this.utils.shouldDisplayBackwordCompatible(impressionCount, showsLimit);
			}
			if ("session" !== this.settings.period) {
				if (!this.utils.shouldDisplayPerTimeFrame()) return false;
			} else if (!this.utils.shouldDisplayPerSession()) return false;
			return true;
		}
		onPopupHide() {
			window.addEventListener("elementor/popup/hide", () => {
				this.utils.incrementImpressionsCount();
			});
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/browsers.js
	var browsers_default = class extends base_default {
		static {
			__name(this, "default");
		}
		getName() {
			return "browsers";
		}
		check() {
			if ("all" === this.getTimingSetting("browsers")) return true;
			const targetedBrowsers = this.getTimingSetting("browsers_options");
			const browserDetectionFlags = elementorFrontend.utils.environment;
			return targetedBrowsers.some((browserName) => browserDetectionFlags[browserName]);
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/schedule-utils.js
	var __defProp$4 = Object.defineProperty;
	var __defNormalProp$4 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$4(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __publicField$3 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
	var ScheduleUtils = class {
		constructor(args) {
			__publicField$3(this, "shouldDisplay", () => {
				if (!this.settings.startDate && !this.settings.endDate) return true;
				const now = this.getCurrentDateTime();
				if ((!this.settings.startDate || now >= this.settings.startDate) && (!this.settings.endDate || now <= this.settings.endDate)) return true;
				return false;
			});
			this.settings = args.settings;
		}
		getCurrentDateTime() {
			let now = /* @__PURE__ */ new Date();
			if ("site" === this.settings.timezone && this.settings.serverDatetime) now = new Date(this.settings.serverDatetime);
			return now;
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing/schedule.js
	var schedule_default = class extends base_default {
		static {
			__name(this, "default");
		}
		constructor(...args) {
			super(...args);
			const { schedule_timezone: timezone, schedule_start_date: startDate, schedule_end_date: endDate, schedule_server_datetime: serverDatetime } = this.getSettings();
			this.settings = {
				timezone,
				startDate: startDate ? new Date(startDate) : false,
				endDate: endDate ? new Date(endDate) : false,
				serverDatetime: serverDatetime ? new Date(serverDatetime) : false
			};
			this.scheduleUtils = new ScheduleUtils({ settings: this.settings });
		}
		getName() {
			return "schedule";
		}
		check() {
			return this.scheduleUtils.shouldDisplay();
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/timing.js
	var timing_default = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor(settings, document) {
			super(settings);
			this.document = document;
			this.timingClasses = {
				page_views: page_views_default,
				sessions: sessions_default,
				url: url_default,
				sources: sources_default,
				logged_in: logged_in_default,
				devices: devices_default,
				times: times_default,
				browsers: browsers_default,
				schedule: schedule_default
			};
		}
		check() {
			const settings = this.getSettings();
			let checkPassed = true;
			jQuery.each(this.timingClasses, (key, TimingClass) => {
				if (!settings[key]) return;
				if (!new TimingClass(settings, this.document).check()) checkPassed = false;
			});
			return checkPassed;
		}
	};
	//#endregion
	//#region assets/dev/js/frontend/utils/icons/manager.js
	var __defProp$3 = Object.defineProperty;
	var __defNormalProp$3 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$3(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __publicField$2 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
	var _IconsManager = class _IconsManager {
		constructor(elementsPrefix) {
			this.prefix = `${elementsPrefix}-`;
			if (!_IconsManager.symbolsContainer) {
				const symbolsContainerId = "e-font-icon-svg-symbols";
				_IconsManager.symbolsContainer = document.getElementById(symbolsContainerId);
				if (!_IconsManager.symbolsContainer) {
					_IconsManager.symbolsContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
					_IconsManager.symbolsContainer.setAttributeNS(null, "style", "display: none;");
					_IconsManager.symbolsContainer.setAttributeNS(null, "class", symbolsContainerId);
					document.body.appendChild(_IconsManager.symbolsContainer);
				}
			}
		}
		createSvgElement(name, { path, width, height }) {
			const elementName = this.prefix + name;
			const elementSelector = "#" + this.prefix + name;
			if (!_IconsManager.iconsUsageList.includes(elementName)) {
				if (!_IconsManager.symbolsContainer.querySelector(elementSelector)) {
					const symbol = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
					symbol.id = elementName;
					symbol.innerHTML = "<path d=\"" + path + "\"></path>";
					symbol.setAttributeNS(null, "viewBox", "0 0 " + width + " " + height);
					_IconsManager.symbolsContainer.appendChild(symbol);
				}
				_IconsManager.iconsUsageList.push(elementName);
			}
			const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			svg.innerHTML = "<use xlink:href=\"" + elementSelector + "\" />";
			svg.setAttributeNS(null, "class", "e-font-icon-svg e-" + elementName);
			return svg;
		}
	};
	__publicField$2(_IconsManager, "symbolsContainer");
	__publicField$2(_IconsManager, "iconsUsageList", []);
	//#endregion
	//#region assets/dev/js/frontend/utils/icons/e-icons.js
	var iconsManager = new _IconsManager("eicon");
	var close = { get element() {
		return iconsManager.createSvgElement("close", {
			path: "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",
			width: 1e3,
			height: 1e3
		});
	} };
	//#endregion
	//#region assets/dev/js/frontend/utils/focusable-element-selectors.js
	function focusableElementSelectors() {
		return "audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], a[href], area[href], [tabindex]";
	}
	var init_focusable_element_selectors = __esmMin((() => {}));
	//#endregion
	//#region assets/dev/js/frontend/utils/modal-keyboard-handler.js
	var ModalKeyboardHandler;
	var init_modal_keyboard_handler = __esmMin((() => {
		init_focusable_element_selectors();
		init_defineProperty();
		ModalKeyboardHandler = class {
			constructor(elementConfig) {
				_defineProperty(this, "lastFocusableElement", null);
				_defineProperty(this, "firstFocusableElement", null);
				_defineProperty(this, "modalTriggerElement", null);
				this.config = elementConfig;
				this.changeFocusAfterAnimation = false;
			}
			onOpenModal() {
				this.initializeElements();
				this.setTriggerElement();
				this.changeFocusAfterAnimation = "popup" === this.config.modalType && !!this.config.hasEntranceAnimation;
				if (!this.changeFocusAfterAnimation) this.changeFocus();
				this.bindEvents();
			}
			onCloseModal() {
				elementorFrontend.elements.$window.off("keydown", this.onKeyDownPressed.bind(this));
				if (this.modalTriggerElement) this.setFocusToElement(this.modalTriggerElement);
			}
			bindEvents() {
				elementorFrontend.elements.$window.on("keydown", this.onKeyDownPressed.bind(this));
				if (this.changeFocusAfterAnimation) this.config.$modalElements.on("animationend animationcancel", this.changeFocus.bind(this));
				if ("popup" === this.config.modalType) this.onPopupCloseEvent();
			}
			onPopupCloseEvent() {
				elementorFrontend.elements.$window.on("elementor/popup/hide", this.onCloseModal.bind(this));
			}
			getFocusableElements() {
				const selectorFocusedElements = "popup" === this.config.modalType ? ":focusable" : focusableElementSelectors();
				return this.config.$modalElements.find(selectorFocusedElements);
			}
			initializeElements() {
				const $focusableElements = this.getFocusableElements();
				if (!$focusableElements.length) return;
				this.lastFocusableElement = $focusableElements[$focusableElements.length - 1];
				this.firstFocusableElement = $focusableElements[0];
			}
			setTriggerElement() {
				if (!!elementorFrontend.elements.window.document.activeElement) this.modalTriggerElement = elementorFrontend.elements.window.document.activeElement;
				else this.modalTriggerElement = null;
			}
			changeFocus() {
				if (!!this.firstFocusableElement) this.setFocusToElement(this.firstFocusableElement);
				else {
					this.config.$elementWrapper.attr("tabindex", "0");
					this.setFocusToElement(this.config.$elementWrapper[0]);
				}
			}
			onKeyDownPressed(keyDownEvent) {
				const TAB_KEY = 9;
				const isShiftPressed = keyDownEvent.shiftKey;
				const isTabPressed = "Tab" === keyDownEvent.key || TAB_KEY === keyDownEvent.keyCode;
				const isContentWrapperFocused = "0" === this.config.$elementWrapper.attr("tabindex");
				if (isTabPressed && isContentWrapperFocused) keyDownEvent.preventDefault();
				else if (isTabPressed) this.onTabKeyPressed(isTabPressed, isShiftPressed, keyDownEvent);
			}
			onTabKeyPressed(isTabPressed, isShiftPressed, keyDownEvent) {
				if (elementorFrontend.isEditMode()) this.initializeElements();
				const activeElement = elementorFrontend.elements.window.document.activeElement;
				if (isShiftPressed) {
					if (activeElement === this.firstFocusableElement) {
						this.setFocusToElement(this.lastFocusableElement);
						keyDownEvent.preventDefault();
					}
				} else if (activeElement === this.lastFocusableElement) {
					this.setFocusToElement(this.firstFocusableElement);
					keyDownEvent.preventDefault();
				}
			}
			setFocusToElement(element) {
				const focusDelayToEnsureThatAllAnimationsHaveFinished = "popup" === this.config.modalType ? 250 : 100;
				setTimeout(() => {
					element === null || element === void 0 || element.focus();
				}, focusDelayToEnsureThatAllAnimationsHaveFinished);
			}
		};
	}));
	//#endregion
	//#region modules/popup/assets/js/frontend/document.js
	init_modal_keyboard_handler();
	init_defineProperty();
	init_asyncToGenerator();
	var document_default = class extends elementorModules.frontend.Document {
		static {
			__name(this, "default");
		}
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "keyboardHandler", null);
		}
		bindEvents() {
			const openSelector = this.getDocumentSettings("open_selector");
			if (openSelector) elementorFrontend.elements.$body.on("click", openSelector, this.showModal.bind(this));
		}
		startTiming() {
			if (new timing_default(this.getDocumentSettings("timing"), this).check()) this.initTriggers();
		}
		initTriggers() {
			this.triggers = new triggers_default(this.getDocumentSettings("triggers"), this);
		}
		showModal(avoidMultiple) {
			const settings = this.getDocumentSettings();
			if (!this.isEdit) {
				if (!elementorFrontend.isWPPreviewMode()) {
					if (this.getStorage("disable")) return;
					if (avoidMultiple && elementorProFrontend.modules.popup.popupPopped && settings.avoid_multiple_popups) return;
				}
				this.$element = jQuery(this.elementHTML);
				this.elements.$elements = this.$element.find(this.getSettings("selectors.elements"));
			}
			const modal = this.getModal();
			const $closeButton = modal.getElements("closeButton");
			modal.setMessage(this.$element).show();
			if (!this.isEdit) {
				if (settings.close_button_delay) {
					$closeButton.hide();
					clearTimeout(this.closeButtonTimeout);
					this.closeButtonTimeout = setTimeout(() => $closeButton.show(), settings.close_button_delay * 1e3);
				}
				super.runElementsHandlers();
			}
			this.setEntranceAnimation();
			if (!settings.timing || !settings.timing.times_count) this.countTimes();
			elementorProFrontend.modules.popup.popupPopped = true;
			if (!this.isEdit && settings.a11y_navigation) this.handleKeyboardA11y();
		}
		setEntranceAnimation() {
			const $widgetContent = this.getModal().getElements("widgetContent");
			const settings = this.getDocumentSettings();
			const newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, "entrance_animation");
			if (this.currentAnimation) $widgetContent.removeClass(this.currentAnimation);
			this.currentAnimation = newAnimation;
			if (!newAnimation) return;
			const animationDuration = settings.entrance_animation_duration.size;
			$widgetContent.addClass(newAnimation);
			setTimeout(() => $widgetContent.removeClass(newAnimation), animationDuration * 1e3);
		}
		handleKeyboardA11y() {
			if (!this.keyboardHandler) this.keyboardHandler = new ModalKeyboardHandler(this.getKeyboardHandlingConfig());
			this.keyboardHandler.onOpenModal();
		}
		setExitAnimation() {
			const modal = this.getModal();
			const settings = this.getDocumentSettings();
			const $widgetContent = modal.getElements("widgetContent");
			const newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, "exit_animation");
			const animationDuration = newAnimation ? settings.entrance_animation_duration.size : 0;
			setTimeout(() => {
				if (newAnimation) $widgetContent.removeClass(newAnimation + " reverse");
				if (!this.isEdit) {
					this.$element.remove();
					modal.getElements("widget").hide();
				}
			}, animationDuration * 1e3);
			if (newAnimation) $widgetContent.addClass(newAnimation + " reverse");
		}
		initModal() {
			let modal;
			this.getModal = () => {
				if (!modal) {
					const settings = this.getDocumentSettings();
					const id = this.getSettings("id");
					const triggerPopupEvent = (eventType) => {
						const event = "elementor/popup/" + eventType;
						elementorFrontend.elements.$document.trigger(event, [id, this]);
						window.dispatchEvent(new CustomEvent(event, { detail: {
							id,
							instance: this
						} }));
					};
					let classes = "elementor-popup-modal";
					if (settings.classes) classes += " " + settings.classes;
					const modalProperties = {
						id: "elementor-popup-modal-" + id,
						className: classes,
						closeButton: true,
						preventScroll: settings.prevent_scroll,
						onShow: () => triggerPopupEvent("show"),
						onHide: () => triggerPopupEvent("hide"),
						effects: {
							hide: () => {
								if (settings.timing && settings.timing.times_count) this.countTimes();
								this.setExitAnimation();
							},
							show: "show"
						},
						hide: {
							auto: !!settings.close_automatically,
							autoDelay: settings.close_automatically * 1e3,
							onBackgroundClick: !settings.prevent_close_on_background_click,
							onOutsideClick: !settings.prevent_close_on_background_click,
							onEscKeyPress: !settings.prevent_close_on_esc_key,
							ignore: ".flatpickr-calendar"
						},
						position: { enable: false }
					};
					if (elementorFrontend.config.experimentalFeatures.e_font_icon_svg) modalProperties.closeButtonOptions = { iconElement: close.element };
					modalProperties.closeButtonClass = "eicon-close";
					modal = elementorFrontend.getDialogsManager().createWidget("lightbox", modalProperties);
					modal.getElements("widgetContent").addClass("animated");
					const $closeButton = modal.getElements("closeButton");
					if (this.isEdit) {
						$closeButton.off("click");
						modal.hide = () => {};
					}
					this.setCloseButtonPosition();
				}
				return modal;
			};
		}
		setCloseButtonPosition() {
			const modal = this.getModal();
			const closeButtonPosition = this.getDocumentSettings("close_button_position");
			modal.getElements("closeButton").prependTo(modal.getElements("outside" === closeButtonPosition ? "widget" : "widgetContent"));
		}
		disable() {
			this.setStorage("disable", true);
		}
		setStorage(key, value, options) {
			elementorFrontend.storage.set(`popup_${this.getSettings("id")}_${key}`, value, options);
		}
		getStorage(key, options) {
			return elementorFrontend.storage.get(`popup_${this.getSettings("id")}_${key}`, options);
		}
		countTimes() {
			const displayTimes = this.getStorage("times") || 0;
			this.setStorage("times", displayTimes + 1);
		}
		runElementsHandlers() {}
		onInit() {
			var _superprop_getOnInit = () => super.onInit;
			var _this = this;
			return _asyncToGenerator(function* () {
				_superprop_getOnInit().call(_this);
				if (!window.DialogsManager) yield elementorFrontend.utils.assetsLoader.load("script", "dialog");
				_this.initModal();
				if (_this.isEdit) {
					_this.showModal();
					return;
				}
				_this.$element.show().remove();
				_this.elementHTML = _this.$element[0].outerHTML;
				if (elementorFrontend.isEditMode()) return;
				if (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === _this.getSettings("id")) {
					_this.showModal();
					return;
				}
				_this.startTiming();
			})();
		}
		onSettingsChange(model) {
			const changedKey = Object.keys(model.changed)[0];
			if (-1 !== changedKey.indexOf("entrance_animation")) this.setEntranceAnimation();
			if ("exit_animation" === changedKey) this.setExitAnimation();
			if ("close_button_position" === changedKey) this.setCloseButtonPosition();
		}
		getEntranceAnimationDuration() {
			var _settings$entrance_an;
			const settings = this.getDocumentSettings();
			const entranceAnimation = settings === null || settings === void 0 ? void 0 : settings.entrance_animation;
			if (!entranceAnimation || "" === entranceAnimation || "none" === entranceAnimation) return 0;
			const entranceAnimationDuration = settings === null || settings === void 0 || (_settings$entrance_an = settings.entrance_animation_duration) === null || _settings$entrance_an === void 0 ? void 0 : _settings$entrance_an.size;
			return !!entranceAnimationDuration ? Number(entranceAnimationDuration) : 0;
		}
		getKeyboardHandlingConfig() {
			return {
				$modalElements: this.getModal().getElements("widgetContent"),
				$elementWrapper: this.$element,
				hasEntranceAnimation: 0 !== this.getEntranceAnimationDuration(),
				modalType: "popup",
				modalId: this.$element.data("elementor-id")
			};
		}
	};
	//#endregion
	//#region modules/popup/assets/js/frontend/handlers/forms-action.js
	var forms_action_exports = /* @__PURE__ */ __exportAll({ default: () => forms_action_default });
	var forms_action_default;
	var init_forms_action = __esmMin((() => {
		forms_action_default = elementorModules.frontend.handlers.Base.extend({
			getDefaultSettings() {
				return { selectors: { form: ".elementor-form" } };
			},
			getDefaultElements() {
				var selectors = this.getSettings("selectors");
				var elements = {};
				elements.$form = this.$element.find(selectors.form);
				return elements;
			},
			bindEvents() {
				this.elements.$form.on("submit_success", this.handleFormAction);
			},
			handleFormAction(event, response) {
				if ("undefined" === typeof response.data.popup) return;
				const popupSettings = response.data.popup;
				if ("open" === popupSettings.action) return elementorProFrontend.modules.popup.showPopup(popupSettings);
				setTimeout(() => {
					return elementorProFrontend.modules.popup.closePopup(popupSettings, event);
				}, 1e3);
			}
		});
	}));
	//#endregion
	//#region modules/popup/assets/js/frontend/frontend.js
	var frontend_default$14 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.hooks.addAction("elementor/frontend/documents-manager/init-classes", this.addDocumentClass);
			elementorFrontend.elementsHandler.attachHandler("form", () => __vitePreload(() => Promise.resolve().then(() => (init_forms_action(), forms_action_exports)), void 0));
			elementorFrontend.on("components:init", () => this.onFrontendComponentsInit());
			if (this.shouldSetViewsAndSessions()) this.setViewsAndSessions();
		}
		shouldSetViewsAndSessions() {
			return !elementorFrontend.isEditMode() && !elementorFrontend.isWPPreviewMode() && ElementorProFrontendConfig.popup.hasPopUps;
		}
		addDocumentClass(documentsManager) {
			documentsManager.addDocumentClass("popup", document_default);
		}
		setViewsAndSessions() {
			const pageViews = elementorFrontend.storage.get("pageViews") || 0;
			elementorFrontend.storage.set("pageViews", pageViews + 1);
			if (!elementorFrontend.storage.get("activeSession", { session: true })) {
				elementorFrontend.storage.set("activeSession", true, { session: true });
				const sessions = elementorFrontend.storage.get("sessions") || 0;
				elementorFrontend.storage.set("sessions", sessions + 1);
			}
		}
		showPopup(settings, event) {
			const popup = elementorFrontend.documentsManager.documents[settings.id];
			if (!popup) return;
			const modal = popup.getModal();
			if (settings.toggle && modal.isVisible()) modal.hide();
			else popup.showModal(null, event);
		}
		closePopup(settings, event) {
			const popupID = jQuery(event.target).parents("[data-elementor-type=\"popup\"]").data("elementorId");
			if (!popupID) return;
			const document = elementorFrontend.documentsManager.documents[popupID];
			document.getModal().hide();
			if (settings.do_not_show_again) document.disable();
		}
		onFrontendComponentsInit() {
			elementorFrontend.utils.urlActions.addAction("popup:open", (settings, event) => this.showPopup(settings, event));
			elementorFrontend.utils.urlActions.addAction("popup:close", (settings, event) => this.closePopup(settings, event));
		}
	};
	//#endregion
	//#region modules/posts/assets/js/frontend/handlers/load-more.js
	var load_more_exports$1 = /* @__PURE__ */ __exportAll({ default: () => LoadMore });
	var LoadMore;
	var init_load_more$1 = __esmMin((() => {
		LoadMore = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return {
					selectors: {
						postsContainer: ".elementor-posts-container",
						postWrapperTag: "article",
						loadMoreButton: ".elementor-button",
						loadMoreSpinnerWrapper: ".e-load-more-spinner",
						loadMoreSpinner: ".e-load-more-spinner i, .e-load-more-spinner svg",
						loadMoreAnchor: ".e-load-more-anchor"
					},
					classes: {
						loadMoreSpin: "eicon-animation-spin",
						loadMoreIsLoading: "e-load-more-pagination-loading",
						loadMorePaginationEnd: "e-load-more-pagination-end",
						loadMoreNoSpinner: "e-load-more-no-spinner"
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					postsWidgetWrapper: this.$element[0],
					postsContainer: this.$element[0].querySelector(selectors.postsContainer),
					loadMoreButton: this.$element[0].querySelector(selectors.loadMoreButton),
					loadMoreSpinnerWrapper: this.$element[0].querySelector(selectors.loadMoreSpinnerWrapper),
					loadMoreSpinner: this.$element[0].querySelector(selectors.loadMoreSpinner),
					loadMoreAnchor: this.$element[0].querySelector(selectors.loadMoreAnchor)
				};
			}
			bindEvents() {
				super.bindEvents();
				if (!this.elements.loadMoreButton) return;
				this.elements.loadMoreButton.addEventListener("click", (event) => {
					if (this.isLoading) return;
					event.preventDefault();
					this.handlePostsQuery();
				});
			}
			onInit() {
				super.onInit();
				this.classes = this.getSettings("classes");
				this.isLoading = false;
				const paginationType = this.getElementSettings("pagination_type");
				if ("load_more_on_click" !== paginationType && "load_more_infinite_scroll" !== paginationType) return;
				this.isInfinteScroll = "load_more_infinite_scroll" === paginationType;
				this.isSpinnerAvailable = this.getElementSettings("load_more_spinner").value;
				if (!this.isSpinnerAvailable) this.elements.postsWidgetWrapper.classList.add(this.classes.loadMoreNoSpinner);
				if (this.isInfinteScroll) this.handleInfiniteScroll();
				else if (this.elements.loadMoreSpinnerWrapper && this.elements.loadMoreButton) this.elements.loadMoreButton.insertAdjacentElement("beforeEnd", this.elements.loadMoreSpinnerWrapper);
				this.elementId = this.getID();
				this.postId = elementorFrontendConfig.post.id;
				if (this.elements.loadMoreAnchor) {
					this.currentPage = parseInt(this.elements.loadMoreAnchor.getAttribute("data-page"));
					this.maxPage = parseInt(this.elements.loadMoreAnchor.getAttribute("data-max-page"));
					if (this.currentPage === this.maxPage || !this.currentPage) this.handleUiWhenNoPosts();
				}
			}
			handleInfiniteScroll() {
				if (this.isEdit) return;
				this.observer = elementorModules.utils.Scroll.scrollObserver({ callback: (event) => {
					if (!event.isInViewport || this.isLoading) return;
					this.observer.unobserve(this.elements.loadMoreAnchor);
					this.handlePostsQuery().then(() => {
						if (this.currentPage !== this.maxPage) this.observer.observe(this.elements.loadMoreAnchor);
					});
				} });
				this.observer.observe(this.elements.loadMoreAnchor);
			}
			handleUiBeforeLoading() {
				this.isLoading = true;
				if (this.elements.loadMoreSpinner) this.elements.loadMoreSpinner.classList.add(this.classes.loadMoreSpin);
				this.elements.postsWidgetWrapper.classList.add(this.classes.loadMoreIsLoading);
			}
			handleUiAfterLoading() {
				this.isLoading = false;
				if (this.elements.loadMoreSpinner) this.elements.loadMoreSpinner.classList.remove(this.classes.loadMoreSpin);
				if (this.isInfinteScroll && this.elements.loadMoreSpinnerWrapper && this.elements.loadMoreAnchor) this.elements.loadMoreAnchor.insertAdjacentElement("afterend", this.elements.loadMoreSpinnerWrapper);
				this.elements.postsWidgetWrapper.classList.remove(this.classes.loadMoreIsLoading);
			}
			handleUiWhenNoPosts() {
				this.elements.postsWidgetWrapper.classList.add(this.classes.loadMorePaginationEnd);
			}
			afterInsertPosts() {}
			handleSuccessFetch(result) {
				this.handleUiAfterLoading();
				const selectors = this.getSettings("selectors");
				const postsElements = result.querySelectorAll(`[data-id="${this.elementId}"] ${selectors.postsContainer} > ${selectors.postWrapperTag}`);
				const nextPageUrl = result.querySelector(`[data-id="${this.elementId}"] .e-load-more-anchor`).getAttribute("data-next-page");
				postsElements.forEach((element) => this.elements.postsContainer.append(element));
				this.elements.loadMoreAnchor.setAttribute("data-page", this.currentPage);
				this.elements.loadMoreAnchor.setAttribute("data-next-page", nextPageUrl);
				if (this.currentPage === this.maxPage) this.handleUiWhenNoPosts();
				this.afterInsertPosts(postsElements, result);
			}
			handlePostsQuery() {
				this.handleUiBeforeLoading();
				this.currentPage++;
				const nextPageUrl = this.elements.loadMoreAnchor.getAttribute("data-next-page");
				return fetch(nextPageUrl).then((response) => response.text()).then((html) => {
					const doc = new DOMParser().parseFromString(html, "text/html");
					this.handleSuccessFetch(doc);
				});
			}
		};
	}));
	//#endregion
	//#region modules/posts/assets/js/frontend/handlers/posts.js
	var posts_exports = /* @__PURE__ */ __exportAll({ default: () => posts_default });
	var posts_default;
	var init_posts = __esmMin((() => {
		posts_default = elementorModules.frontend.handlers.Base.extend({
			getSkinPrefix() {
				return "classic_";
			},
			bindEvents() {
				elementorFrontend.addListenerOnce(this.getModelCID(), "resize", this.onWindowResize);
			},
			unbindEvents() {
				elementorFrontend.removeListeners(this.getModelCID(), "resize", this.onWindowResize);
			},
			getClosureMethodsNames() {
				return elementorModules.frontend.handlers.Base.prototype.getClosureMethodsNames.apply(this, arguments).concat([
					"fitImages",
					"onWindowResize",
					"runMasonry"
				]);
			},
			getDefaultSettings() {
				return {
					classes: {
						fitHeight: "elementor-fit-height",
						hasItemRatio: "elementor-has-item-ratio"
					},
					selectors: {
						postsContainer: ".elementor-posts-container",
						post: ".elementor-post",
						postThumbnail: ".elementor-post__thumbnail",
						postThumbnailImage: ".elementor-post__thumbnail img"
					}
				};
			},
			getDefaultElements() {
				var selectors = this.getSettings("selectors");
				return {
					$postsContainer: this.$element.find(selectors.postsContainer),
					$posts: this.$element.find(selectors.post)
				};
			},
			fitImage($post) {
				var settings = this.getSettings();
				var $imageParent = $post.find(settings.selectors.postThumbnail);
				var image = $imageParent.find("img")[0];
				if (!image) return;
				var imageParentRatio = $imageParent.outerHeight() / $imageParent.outerWidth();
				var imageRatio = image.naturalHeight / image.naturalWidth;
				$imageParent.toggleClass(settings.classes.fitHeight, imageRatio < imageParentRatio);
			},
			fitImages() {
				var $ = jQuery;
				var self = this;
				var itemRatio = getComputedStyle(this.$element[0], ":after").content;
				var settings = this.getSettings();
				if (self.isMasonryEnabled()) {
					this.elements.$postsContainer.removeClass(settings.classes.hasItemRatio);
					return;
				}
				this.elements.$postsContainer.toggleClass(settings.classes.hasItemRatio, !!itemRatio.match(/\d/));
				this.elements.$posts.each(function() {
					var $post = $(this);
					var $image = $post.find(settings.selectors.postThumbnailImage);
					self.fitImage($post);
					$image.on("load", function() {
						self.fitImage($post);
					});
				});
			},
			setColsCountSettings() {
				const settings = this.getElementSettings();
				const skinPrefix = this.getSkinPrefix();
				const colsCount = elementorProFrontend.utils.controls.getResponsiveControlValue(settings, `${skinPrefix}columns`);
				this.setSettings("colsCount", colsCount);
			},
			isMasonryEnabled() {
				return !!this.getElementSettings(this.getSkinPrefix() + "masonry");
			},
			initMasonry() {
				imagesLoaded(this.elements.$posts, this.runMasonry);
			},
			getVerticalSpaceBetween() {
				let verticalSpaceBetween = elementorProFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), `${this.getSkinPrefix()}row_gap`, "size");
				if ("" === this.getSkinPrefix() && "" === verticalSpaceBetween) verticalSpaceBetween = this.getElementSettings("item_gap.size");
				return verticalSpaceBetween;
			},
			runMasonry() {
				var elements = this.elements;
				elements.$posts.css({
					marginTop: "",
					transitionDuration: ""
				});
				this.setColsCountSettings();
				var colsCount = this.getSettings("colsCount");
				var hasMasonry = this.isMasonryEnabled() && colsCount >= 2;
				elements.$postsContainer.toggleClass("elementor-posts-masonry", hasMasonry);
				if (!hasMasonry) {
					elements.$postsContainer.height("");
					return;
				}
				const verticalSpaceBetween = this.getVerticalSpaceBetween();
				new elementorModules.utils.Masonry({
					container: elements.$postsContainer,
					items: elements.$posts.filter(":visible"),
					columnsCount: this.getSettings("colsCount"),
					verticalSpaceBetween: verticalSpaceBetween || 0
				}).run();
			},
			run() {
				setTimeout(this.fitImages, 0);
				this.initMasonry();
			},
			onInit() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				this.bindEvents();
				this.run();
			},
			onWindowResize() {
				this.fitImages();
				this.runMasonry();
			},
			onElementChange() {
				this.fitImages();
				setTimeout(this.runMasonry);
			}
		});
	}));
	//#endregion
	//#region modules/posts/assets/js/frontend/handlers/cards.js
	var cards_exports = /* @__PURE__ */ __exportAll({ default: () => cards_default });
	var cards_default;
	var init_cards = __esmMin((() => {
		init_posts();
		cards_default = posts_default.extend({ getSkinPrefix() {
			return "cards_";
		} });
	}));
	//#endregion
	//#region modules/posts/assets/js/frontend/handlers/portfolio.js
	var portfolio_exports = /* @__PURE__ */ __exportAll({ default: () => portfolio_default });
	var portfolio_default;
	var init_portfolio = __esmMin((() => {
		init_posts();
		portfolio_default = posts_default.extend({
			isActive(settings) {
				return settings.$element.find(".elementor-portfolio").length;
			},
			getSkinPrefix() {
				return "";
			},
			getDefaultSettings() {
				var settings = posts_default.prototype.getDefaultSettings.apply(this, arguments);
				settings.transitionDuration = 450;
				jQuery.extend(settings.classes, {
					active: "elementor-active",
					item: "elementor-portfolio-item",
					ghostItem: "elementor-portfolio-ghost-item"
				});
				return settings;
			},
			getDefaultElements() {
				var elements = posts_default.prototype.getDefaultElements.apply(this, arguments);
				elements.$filterButtons = this.$element.find(".elementor-portfolio__filter");
				return elements;
			},
			getOffset(itemIndex, itemWidth, itemHeight) {
				var settings = this.getSettings();
				var itemGap = this.elements.$postsContainer.width() / settings.colsCount - itemWidth;
				itemGap += itemGap / (settings.colsCount - 1);
				return {
					start: (itemWidth + itemGap) * (itemIndex % settings.colsCount),
					top: (itemHeight + itemGap) * Math.floor(itemIndex / settings.colsCount)
				};
			},
			getClosureMethodsNames() {
				return posts_default.prototype.getClosureMethodsNames.apply(this, arguments).concat(["onFilterButtonClick"]);
			},
			filterItems(term) {
				var $posts = this.elements.$posts;
				var activeClass = this.getSettings("classes.active");
				var termSelector = ".elementor-filter-" + term;
				if ("__all" === term) {
					$posts.addClass(activeClass);
					return;
				}
				$posts.not(termSelector).removeClass(activeClass);
				$posts.filter(termSelector).addClass(activeClass);
			},
			removeExtraGhostItems() {
				var settings = this.getSettings();
				var $shownItems = this.elements.$posts.filter(":visible");
				var emptyColumns = (settings.colsCount - $shownItems.length % settings.colsCount) % settings.colsCount;
				this.elements.$postsContainer.find("." + settings.classes.ghostItem).slice(emptyColumns).remove();
			},
			handleEmptyColumns() {
				this.removeExtraGhostItems();
				var settings = this.getSettings();
				var $shownItems = this.elements.$posts.filter(":visible");
				var $ghostItems = this.elements.$postsContainer.find("." + settings.classes.ghostItem);
				var emptyColumns = (settings.colsCount - ($shownItems.length + $ghostItems.length) % settings.colsCount) % settings.colsCount;
				for (var i = 0; i < emptyColumns; i++) this.elements.$postsContainer.append(jQuery("<div>", { class: settings.classes.item + " " + settings.classes.ghostItem }));
			},
			showItems($activeHiddenItems) {
				$activeHiddenItems.show();
				setTimeout(function() {
					$activeHiddenItems.css({ opacity: 1 });
				});
			},
			hideItems($inactiveShownItems) {
				$inactiveShownItems.hide();
			},
			arrangeGrid() {
				var $ = jQuery;
				var self = this;
				var settings = self.getSettings();
				var $activeItems = self.elements.$posts.filter("." + settings.classes.active);
				var $inactiveItems = self.elements.$posts.not("." + settings.classes.active);
				var $activeHiddenItems = $activeItems.filter(":hidden");
				var $inactiveShownItems = $inactiveItems.filter(":visible");
				self.elements.$posts.css("transition-duration", settings.transitionDuration + "ms");
				self.showItems($activeHiddenItems);
				if (self.isEdit) self.fitImages();
				self.handleEmptyColumns();
				if (self.isMasonryEnabled()) {
					self.hideItems($inactiveShownItems);
					self.showItems($activeHiddenItems);
					self.handleEmptyColumns();
					self.runMasonry();
					return;
				}
				$inactiveShownItems.css({
					opacity: 0,
					transform: "scale3d(0.2, 0.2, 1)"
				});
				const $shownItems = self.elements.$posts.filter(":visible");
				const $activeOrShownItems = $activeItems.add($shownItems);
				const $activeShownItems = $activeItems.filter(":visible");
				const itemWidth = $shownItems.outerWidth();
				const itemHeight = $shownItems.outerHeight();
				$activeShownItems.each(function() {
					var $item = $(this);
					var currentOffset = self.getOffset($activeOrShownItems.index($item), itemWidth, itemHeight);
					var requiredOffset = self.getOffset($shownItems.index($item), itemWidth, itemHeight);
					if (currentOffset.start === requiredOffset.start && currentOffset.top === requiredOffset.top) return;
					requiredOffset.start -= currentOffset.start;
					requiredOffset.top -= currentOffset.top;
					if (elementorFrontend.config.is_rtl) requiredOffset.start *= -1;
					$item.css({
						transitionDuration: "",
						transform: "translate3d(" + requiredOffset.start + "px, " + requiredOffset.top + "px, 0)"
					});
				});
				setTimeout(function() {
					$activeItems.each(function() {
						var $item = $(this);
						var currentOffset = self.getOffset($activeOrShownItems.index($item), itemWidth, itemHeight);
						var requiredOffset = self.getOffset($activeItems.index($item), itemWidth, itemHeight);
						$item.css({ transitionDuration: settings.transitionDuration + "ms" });
						requiredOffset.start -= currentOffset.start;
						requiredOffset.top -= currentOffset.top;
						if (elementorFrontend.config.is_rtl) requiredOffset.start *= -1;
						setTimeout(function() {
							$item.css("transform", "translate3d(" + requiredOffset.start + "px, " + requiredOffset.top + "px, 0)");
						});
					});
				});
				setTimeout(function() {
					self.hideItems($inactiveShownItems);
					$activeItems.css({
						transitionDuration: "",
						transform: "translate3d(0px, 0px, 0px)"
					});
					self.handleEmptyColumns();
				}, settings.transitionDuration);
			},
			activeFilterButton(filter) {
				var activeClass = this.getSettings("classes.active");
				var $filterButtons = this.elements.$filterButtons;
				var $button = $filterButtons.filter("[data-filter=\"" + filter + "\"]");
				$filterButtons.removeClass(activeClass);
				$button.addClass(activeClass);
			},
			setFilter(filter) {
				this.activeFilterButton(filter);
				this.filterItems(filter);
				this.arrangeGrid();
			},
			refreshGrid() {
				this.setColsCountSettings();
				this.arrangeGrid();
			},
			bindEvents() {
				posts_default.prototype.bindEvents.apply(this, arguments);
				this.elements.$filterButtons.on("click", this.onFilterButtonClick);
			},
			isMasonryEnabled() {
				return !!this.getElementSettings("masonry");
			},
			run() {
				posts_default.prototype.run.apply(this, arguments);
				this.setColsCountSettings();
				this.setFilter("__all");
				this.handleEmptyColumns();
			},
			onFilterButtonClick(event) {
				this.setFilter(jQuery(event.currentTarget).data("filter"));
			},
			onWindowResize() {
				posts_default.prototype.onWindowResize.apply(this, arguments);
				this.refreshGrid();
			},
			onElementChange(propertyName) {
				posts_default.prototype.onElementChange.apply(this, arguments);
				if ("classic_item_ratio" === propertyName) this.refreshGrid();
			}
		});
	}));
	//#endregion
	//#region modules/posts/assets/js/frontend/frontend.js
	var frontend_default$13 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			[
				"classic",
				"full_content",
				"cards"
			].forEach((skinName) => {
				elementorFrontend.elementsHandler.attachHandler("posts", () => __vitePreload(() => Promise.resolve().then(() => (init_load_more$1(), load_more_exports$1)), void 0), skinName);
			});
			elementorFrontend.elementsHandler.attachHandler("posts", () => __vitePreload(() => Promise.resolve().then(() => (init_posts(), posts_exports)), void 0), "classic");
			elementorFrontend.elementsHandler.attachHandler("posts", () => __vitePreload(() => Promise.resolve().then(() => (init_posts(), posts_exports)), void 0), "full_content");
			elementorFrontend.elementsHandler.attachHandler("posts", () => __vitePreload(() => Promise.resolve().then(() => (init_cards(), cards_exports)), void 0), "cards");
			elementorFrontend.elementsHandler.attachHandler("portfolio", () => __vitePreload(() => Promise.resolve().then(() => (init_portfolio(), portfolio_exports)), void 0));
		}
	};
	//#endregion
	//#region assets/dev/js/frontend/utils/handle-parameter-pollution.js
	function handleParameterPollution(inputURL) {
		const urlObject = new URL(inputURL);
		const mainDomain = urlObject.hostname;
		const params = new URLSearchParams(urlObject.search);
		["u"].forEach((key) => {
			const paramValue = params.get(key);
			if (paramValue) try {
				if (new URL(paramValue).hostname !== mainDomain) params.delete(key);
			} catch (error) {
				params.delete(key);
			}
		});
		urlObject.search = params.toString();
		return urlObject.toString();
	}
	var init_handle_parameter_pollution = __esmMin((() => {}));
	//#endregion
	//#region modules/share-buttons/assets/js/frontend/handlers/share-buttons.js
	var share_buttons_exports = /* @__PURE__ */ __exportAll({ default: () => share_buttons_default });
	var share_buttons_default;
	var init_share_buttons = __esmMin((() => {
		init_handle_parameter_pollution();
		init_asyncToGenerator();
		share_buttons_default = elementorModules.frontend.handlers.Base.extend({
			onInit() {
				var _arguments = arguments;
				var _this = this;
				return _asyncToGenerator(function* () {
					if (!_this.isActive()) return;
					elementorModules.frontend.handlers.Base.prototype.onInit.apply(_this, _arguments);
					const elementSettings = _this.getElementSettings();
					const classes = _this.getSettings("classes");
					const isCustomURL = elementSettings.share_url && elementSettings.share_url.url;
					const shareLinkSettings = { classPrefix: classes.shareLinkPrefix };
					if (isCustomURL) shareLinkSettings.url = elementSettings.share_url.url;
					else {
						shareLinkSettings.url = handleParameterPollution(location.href);
						shareLinkSettings.title = elementorFrontend.config.post.title;
						shareLinkSettings.text = elementorFrontend.config.post.excerpt;
						shareLinkSettings.image = elementorFrontend.config.post.featuredImage;
					}
					/**
					* First check of the ShareLink is for detecting if the optimized mode is disabled and the library should be loaded dynamically.
					* Checking if the assetsLoader exist, in case that the library is not loaded due to Ad Blockers and not because the optimized mode is enabled.
					*/
					if (!window.ShareLink && elementorFrontend.utils.assetsLoader) yield elementorFrontend.utils.assetsLoader.load("script", "share-link");
					/**
					* The following condition should remain regardless of the share-link dynamic loading.
					* Ad Blockers may block the share script. (/assets/lib/share-link/share-link.js).
					*/
					if (!_this.elements.$shareButton.shareLink) return;
					_this.elements.$shareButton.shareLink(shareLinkSettings);
				})();
			},
			getDefaultSettings() {
				return {
					selectors: { shareButton: ".elementor-share-btn" },
					classes: { shareLinkPrefix: "elementor-share-btn_" }
				};
			},
			getDefaultElements() {
				var selectors = this.getSettings("selectors");
				return { $shareButton: this.$element.find(selectors.shareButton) };
			},
			isActive() {
				return !elementorFrontend.isEditMode();
			}
		});
	}));
	//#endregion
	//#region modules/share-buttons/assets/js/frontend/frontend.js
	var frontend_default$12 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("share-buttons", () => __vitePreload(() => Promise.resolve().then(() => (init_share_buttons(), share_buttons_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/slides/assets/js/frontend/handlers/slides.js
	var slides_exports = /* @__PURE__ */ __exportAll({ default: () => SlidesHandler });
	var SlidesHandler;
	var init_slides = __esmMin((() => {
		init_asyncToGenerator();
		SlidesHandler = class extends elementorModules.frontend.handlers.SwiperBase {
			getDefaultSettings() {
				return {
					selectors: {
						slider: ".elementor-slides-wrapper",
						slide: ".swiper-slide",
						slideInnerContents: ".swiper-slide-contents",
						activeSlide: ".swiper-slide-active",
						activeDuplicate: ".swiper-slide-duplicate-active"
					},
					classes: {
						animated: "animated",
						kenBurnsActive: "elementor-ken-burns--active",
						slideBackground: "swiper-slide-bg"
					},
					attributes: {
						dataSliderOptions: "slider_options",
						dataAnimation: "animation"
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				const elements = { $swiperContainer: this.$element.find(selectors.slider) };
				elements.$slides = elements.$swiperContainer.find(selectors.slide);
				return elements;
			}
			getSwiperOptions() {
				const elementSettings = this.getElementSettings();
				const swiperOptions = {
					autoplay: this.getAutoplayConfig(),
					grabCursor: true,
					initialSlide: this.getInitialSlide(),
					slidesPerView: 1,
					slidesPerGroup: 1,
					loop: "yes" === elementSettings.infinite,
					speed: elementSettings.transition_speed,
					effect: elementSettings.transition,
					observeParents: true,
					observer: true,
					handleElementorBreakpoints: true,
					on: { slideChange: () => {
						this.handleKenBurns();
					} }
				};
				const showArrows = "arrows" === elementSettings.navigation || "both" === elementSettings.navigation;
				const pagination = "dots" === elementSettings.navigation || "both" === elementSettings.navigation;
				if (showArrows) swiperOptions.navigation = {
					prevEl: ".elementor-swiper-button-prev",
					nextEl: ".elementor-swiper-button-next"
				};
				if (pagination) swiperOptions.pagination = {
					el: ".swiper-pagination",
					type: "bullets",
					clickable: true
				};
				if (true === swiperOptions.loop) swiperOptions.loopedSlides = this.getSlidesCount();
				if ("fade" === swiperOptions.effect) swiperOptions.fadeEffect = { crossFade: true };
				return swiperOptions;
			}
			getAutoplayConfig() {
				const elementSettings = this.getElementSettings();
				if ("yes" !== elementSettings.autoplay) return false;
				return {
					stopOnLastSlide: true,
					delay: elementSettings.autoplay_speed,
					disableOnInteraction: "yes" === elementSettings.pause_on_interaction
				};
			}
			initSingleSlideAnimations() {
				const settings = this.getSettings();
				const animation = this.elements.$swiperContainer.data(settings.attributes.dataAnimation);
				this.elements.$swiperContainer.find("." + settings.classes.slideBackground).addClass(settings.classes.kenBurnsActive);
				if (animation) this.elements.$swiperContainer.find(settings.selectors.slideInnerContents).addClass(settings.classes.animated + " " + animation);
			}
			initSlider() {
				var _this = this;
				return _asyncToGenerator(function* () {
					const $slider = _this.elements.$swiperContainer;
					if (!$slider.length) return;
					if (1 >= _this.getSlidesCount()) return;
					const Swiper = elementorFrontend.utils.swiper;
					_this.swiper = yield new Swiper($slider, _this.getSwiperOptions());
					$slider.data("swiper", _this.swiper);
					_this.handleKenBurns();
					if (_this.getElementSettings().pause_on_hover) _this.togglePauseOnHover(true);
					const settings = _this.getSettings();
					const animation = $slider.data(settings.attributes.dataAnimation);
					if (!animation) return;
					_this.swiper.on("slideChangeTransitionStart", function() {
						$slider.find(settings.selectors.slideInnerContents).removeClass(settings.classes.animated + " " + animation).hide();
					});
					_this.swiper.on("slideChangeTransitionEnd", function() {
						$slider.find(settings.selectors.slideInnerContents).show().addClass(settings.classes.animated + " " + animation);
					});
				})();
			}
			onInit() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				if (2 > this.getSlidesCount()) {
					this.initSingleSlideAnimations();
					return;
				}
				this.initSlider();
			}
			getChangeableProperties() {
				return {
					pause_on_hover: "pauseOnHover",
					pause_on_interaction: "disableOnInteraction",
					autoplay_speed: "delay",
					transition_speed: "speed"
				};
			}
			updateSwiperOption(propertyName) {
				if (0 === propertyName.indexOf("width")) {
					this.swiper.update();
					return;
				}
				const elementSettings = this.getElementSettings();
				const newSettingValue = elementSettings[propertyName];
				let propertyToUpdate = this.getChangeableProperties()[propertyName];
				let valueToUpdate = newSettingValue;
				switch (propertyName) {
					case "autoplay_speed":
						propertyToUpdate = "autoplay";
						valueToUpdate = {
							delay: newSettingValue,
							disableOnInteraction: "yes" === elementSettings.pause_on_interaction
						};
						break;
					case "pause_on_hover":
						this.togglePauseOnHover("yes" === newSettingValue);
						break;
					case "pause_on_interaction":
						valueToUpdate = "yes" === newSettingValue;
						break;
				}
				if ("pause_on_hover" !== propertyName) this.swiper.params[propertyToUpdate] = valueToUpdate;
				this.swiper.update();
			}
			onElementChange(propertyName) {
				if (1 >= this.getSlidesCount()) return;
				const changeableProperties = this.getChangeableProperties();
				if (Object.prototype.hasOwnProperty.call(changeableProperties, propertyName)) {
					this.updateSwiperOption(propertyName);
					this.swiper.autoplay.start();
				}
			}
			onEditSettingsChange(propertyName) {
				if (1 >= this.getSlidesCount()) return;
				if ("activeItemIndex" === propertyName) {
					this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1);
					this.swiper.autoplay.stop();
				}
			}
		};
	}));
	//#endregion
	//#region modules/slides/assets/js/frontend/frontend.js
	var frontend_default$11 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("slides", () => __vitePreload(() => Promise.resolve().then(() => (init_slides(), slides_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/social/assets/js/frontend/handlers/facebook.js
	var facebook_exports = /* @__PURE__ */ __exportAll({ default: () => FacebookHandler });
	var FacebookHandler;
	var init_facebook = __esmMin((() => {
		FacebookHandler = class extends elementorModules.frontend.handlers.Base {
			getConfig() {
				return elementorProFrontend.config.facebook_sdk;
			}
			setConfig(prop, value) {
				elementorProFrontend.config.facebook_sdk[prop] = value;
			}
			parse() {
				FB.XFBML.parse(this.$element[0]);
			}
			loadSDK() {
				const config = this.getConfig();
				if (config.isLoading || config.isLoaded) return;
				this.setConfig("isLoading", true);
				jQuery.ajax({
					url: "https://connect.facebook.net/" + config.lang + "/sdk.js",
					dataType: "script",
					cache: true,
					success: () => {
						FB.init({
							appId: config.app_id,
							version: "v2.10",
							xfbml: false
						});
						this.setConfig("isLoaded", true);
						this.setConfig("isLoading", false);
						elementorFrontend.elements.$document.trigger("fb:sdk:loaded");
					}
				});
			}
			onInit(...args) {
				super.onInit(...args);
				this.loadSDK();
				if (this.getConfig().isLoaded) this.parse();
				else elementorFrontend.elements.$document.on("fb:sdk:loaded", () => this.parse());
			}
		};
	}));
	//#endregion
	//#region modules/social/assets/js/frontend/frontend.js
	var frontend_default$10 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("facebook-button", () => __vitePreload(() => Promise.resolve().then(() => (init_facebook(), facebook_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("facebook-comments", () => __vitePreload(() => Promise.resolve().then(() => (init_facebook(), facebook_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("facebook-embed", () => __vitePreload(() => Promise.resolve().then(() => (init_facebook(), facebook_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("facebook-page", () => __vitePreload(() => Promise.resolve().then(() => (init_facebook(), facebook_exports)), void 0));
		}
	};
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
	//#region modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js
	var table_of_contents_exports = /* @__PURE__ */ __exportAll({ default: () => TOCHandler });
	var TOCHandler;
	var init_table_of_contents = __esmMin((() => {
		init_purify_es();
		TOCHandler = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return {
					selectors: {
						widgetContainer: ".elementor-widget-container",
						postContentContainer: ".elementor:not([data-elementor-type=\"header\"]):not([data-elementor-type=\"footer\"]):not([data-elementor-type=\"popup\"])",
						expandButton: ".elementor-toc__toggle-button--expand",
						collapseButton: ".elementor-toc__toggle-button--collapse",
						body: ".elementor-toc__body",
						headerTitle: ".elementor-toc__header-title"
					},
					classes: {
						anchor: "elementor-menu-anchor",
						listWrapper: "elementor-toc__list-wrapper",
						listItem: "elementor-toc__list-item",
						listTextWrapper: "elementor-toc__list-item-text-wrapper",
						firstLevelListItem: "elementor-toc__top-level",
						listItemText: "elementor-toc__list-item-text",
						activeItem: "elementor-item-active",
						headingAnchor: "elementor-toc__heading-anchor",
						collapsed: "elementor-toc--collapsed"
					},
					listWrapperTag: "numbers" === this.getElementSettings().marker_view ? "ol" : "ul"
				};
			}
			getDefaultElements() {
				const settings = this.getSettings();
				let widgetContainer = this.$element.find(settings.selectors.widgetContainer);
				if (0 === widgetContainer.length) widgetContainer = this.$element;
				return {
					$pageContainer: this.getContainer(),
					$widgetContainer: widgetContainer,
					$expandButton: this.$element.find(settings.selectors.expandButton),
					$collapseButton: this.$element.find(settings.selectors.collapseButton),
					$tocBody: this.$element.find(settings.selectors.body),
					$listItems: this.$element.find("." + settings.classes.listItem)
				};
			}
			getContainer() {
				const elementSettings = this.getElementSettings();
				if (elementSettings.container) return jQuery(purify.sanitize(elementSettings.container));
				const $documentWrapper = this.$element.parents(".elementor");
				if ("popup" === $documentWrapper.attr("data-elementor-type")) return $documentWrapper;
				const settings = this.getSettings();
				return jQuery(settings.selectors.postContentContainer);
			}
			bindEvents() {
				const elementSettings = this.getElementSettings();
				if (elementSettings.minimize_box) {
					this.elements.$expandButton.on("click", () => this.expandBox()).on("keyup", (event) => this.triggerClickOnEnterSpace(event));
					this.elements.$collapseButton.on("click", () => this.collapseBox()).on("keyup", (event) => this.triggerClickOnEnterSpace(event));
				}
				if (elementSettings.collapse_subitems) this.elements.$listItems.on("hover", (event) => jQuery(event.target).slideToggle());
			}
			getHeadings() {
				const elementSettings = this.getElementSettings();
				const tags = elementSettings.headings_by_tags.join(",");
				const selectors = this.getSettings("selectors");
				const excludedSelectors = elementSettings.exclude_headings_by_selector;
				return this.elements.$pageContainer.find(tags).not(selectors.headerTitle).filter((index, heading) => {
					return !jQuery(heading).closest(excludedSelectors).length;
				});
			}
			addAnchorsBeforeHeadings() {
				const classes = this.getSettings("classes");
				this.elements.$headings.before((index) => {
					if (jQuery(this.elements.$headings[index]).data("hasOwnID")) return;
					return `<span id="${classes.headingAnchor}-${index}" class="${classes.anchor} "></span>`;
				});
			}
			activateItems($listItems) {
				const classes = this.getSettings("classes");
				this.deactivateItems($listItems);
				const $activeListsToExpand = [];
				$listItems.forEach(($item) => {
					$item.addClass(classes.activeItem);
					if (!this.getElementSettings("collapse_subitems")) return;
					let $activeList;
					if ($item.hasClass(classes.firstLevelListItem)) $activeList = $item.parent().next();
					else $activeList = $item.parents("." + classes.listWrapper).eq(-2);
					if ($activeList.length && !$activeListsToExpand.some(($list) => $list[0].contains($activeList[0]))) $activeListsToExpand.push($activeList);
				});
				this.deactivateLists($activeListsToExpand);
				this.$activeItems = $listItems;
				this.$activeLists = $activeListsToExpand;
				this.$activeLists.forEach(($list) => $list.stop().slideDown());
			}
			deactivateItems($activeToBe) {
				if (!this.$activeItems || 0 === this.$activeItems.length) return;
				const { classes } = this.getSettings();
				this.$activeItems.forEach(($item) => {
					if (!$activeToBe.some(($toBe) => $item.is($toBe))) $item.removeClass(classes.activeItem);
				});
			}
			deactivateLists($activeListsToBe) {
				if (this.$activeLists) this.$activeLists.forEach(($list) => {
					if (!$activeListsToBe.some(($listToBe) => $list[0].contains($listToBe[0]))) $list.slideUp();
				});
			}
			updateActiveItemFromViewport(scrollDirection) {
				const $visibleItems = [];
				this.$listItemTexts.each((_, element) => {
					const anchorSelector = element.hash;
					if (!anchorSelector) return;
					let $anchor;
					try {
						$anchor = jQuery(decodeURIComponent(anchorSelector));
					} catch (e) {
						return;
					}
					const id = $anchor.attr("id");
					if (this.viewportItems[id]) $visibleItems.push(jQuery(element));
				});
				if ($visibleItems.length > 0) this.activateItems($visibleItems);
				else if ("up" === scrollDirection) {
					const currentIndex = this.$listItemTexts.index(this.$activeItems[0]);
					if (0 === currentIndex) {
						this.activateItems([]);
						return;
					}
					const itemToActivate = this.$listItemTexts.eq(currentIndex - 1);
					if (itemToActivate.length) this.activateItems([itemToActivate]);
				}
			}
			followAnchor($element) {
				const anchorSelector = $element[0].hash;
				let $anchor;
				try {
					$anchor = jQuery(decodeURIComponent(anchorSelector));
				} catch (e) {
					return;
				}
				this.createObserver($anchor, {
					rootMargin: "0px",
					threshold: 0
				}).observe($anchor[0]);
			}
			createObserver($anchor, options) {
				let lastScrollTop = 0;
				return new IntersectionObserver((entries) => {
					entries.forEach((entry) => {
						const scrollTop = document.documentElement.scrollTop;
						const isScrollingDown = scrollTop > lastScrollTop;
						const id = $anchor.attr("id");
						if (entry.isIntersecting) this.viewportItems[id] = true;
						else delete this.viewportItems[id];
						lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
						if (this.itemClicked) return;
						this.updateActiveItemFromViewport(isScrollingDown ? "down" : "up");
					});
				}, options);
			}
			followAnchors() {
				this.$listItemTexts.each((_index, element) => this.followAnchor(jQuery(element)));
			}
			populateTOC() {
				this.listItemPointer = 0;
				if (this.getElementSettings().hierarchical_view) this.createNestedList();
				else this.createFlatList();
				this.$listItemTexts = this.$element.find(".elementor-toc__list-item-text");
				this.$listItemTexts.on("click", this.onListItemClick.bind(this));
				if (!elementorFrontend.isEditMode()) {
					this.followAnchors();
					requestAnimationFrame(() => this.updateActiveItemFromViewport());
				}
			}
			createNestedList() {
				this.headingsData.forEach((heading, index) => {
					heading.level = 0;
					for (let i = index - 1; i >= 0; i--) {
						const currentOrderedItem = this.headingsData[i];
						if (currentOrderedItem.tag <= heading.tag) {
							heading.level = currentOrderedItem.level;
							if (currentOrderedItem.tag < heading.tag) heading.level++;
							break;
						}
					}
				});
				this.elements.$tocBody.html(this.getNestedLevel(0));
			}
			createFlatList() {
				this.elements.$tocBody.html(this.getNestedLevel());
			}
			getNestedLevel(level) {
				const settings = this.getSettings();
				const elementSettings = this.getElementSettings();
				const icon = this.getElementSettings("icon");
				let renderedIcon;
				if (icon) if (elementorFrontend.config.experimentalFeatures.e_font_icon_svg && !elementorFrontend.isEditMode()) renderedIcon = typeof icon.rendered_tag !== "undefined" ? icon.rendered_tag : "";
				else renderedIcon = icon.value ? `<i class="${icon.value}"></i>` : "";
				let html = `<${settings.listWrapperTag} class="${settings.classes.listWrapper}">`;
				while (this.listItemPointer < this.headingsData.length) {
					const currentItem = this.headingsData[this.listItemPointer];
					let listItemTextClasses = settings.classes.listItemText;
					if (0 === currentItem.level) listItemTextClasses += " " + settings.classes.firstLevelListItem;
					if (level > currentItem.level) break;
					if (level === currentItem.level) {
						html += `<li class="${settings.classes.listItem}">`;
						html += `<div class="${settings.classes.listTextWrapper}">`;
						let liContent = `<a href="#${currentItem.anchorLink}" class="${listItemTextClasses}">${currentItem.text}</a>`;
						if ("bullets" === elementSettings.marker_view && icon) liContent = `${renderedIcon}${liContent}`;
						liContent = purify.sanitize(liContent);
						html += liContent;
						html += "</div>";
						this.listItemPointer++;
						const nextItem = this.headingsData[this.listItemPointer];
						if (nextItem && level < nextItem.level) html += this.getNestedLevel(nextItem.level);
						html += "</li>";
					}
				}
				html += `</${settings.listWrapperTag}>`;
				return html;
			}
			handleNoHeadingsFound() {
				const noHeadingsText = this.getElementSettings("no_headings_message");
				return this.elements.$tocBody.html(noHeadingsText);
			}
			collapseBodyListener() {
				const activeBreakpoints = elementorFrontend.breakpoints.getActiveBreakpointsList({ withDesktop: true });
				const minimizedOn = this.getElementSettings("minimized_on");
				const currentDeviceMode = elementorFrontend.getCurrentDeviceMode();
				const isCollapsed = this.$element.hasClass(this.getSettings("classes.collapsed"));
				if ("desktop" === minimizedOn || activeBreakpoints.indexOf(minimizedOn) >= activeBreakpoints.indexOf(currentDeviceMode)) {
					if (!isCollapsed) this.collapseBox(false);
				} else if (isCollapsed) this.expandBox(false);
			}
			onElementChange(settings) {
				if ("minimized_on" === settings) this.collapseBodyListener();
			}
			getHeadingAnchorLink(index, classes) {
				var _a;
				const headingID = this.elements.$headings[index].id;
				const wrapperID = (_a = this.elements.$headings[index].closest(".elementor-widget")) == null ? void 0 : _a.id;
				const anchorLink = headingID || wrapperID;
				if (anchorLink) {
					jQuery(this.elements.$headings[index]).data("hasOwnID", true);
					return anchorLink;
				}
				return `${classes.headingAnchor}-${index}`;
			}
			setHeadingsData() {
				this.headingsData = [];
				const classes = this.getSettings("classes");
				this.elements.$headings.each((index, element) => {
					const anchorLink = this.getHeadingAnchorLink(index, classes);
					this.headingsData.push({
						tag: +element.nodeName.slice(1),
						text: element.textContent,
						anchorLink
					});
				});
			}
			run() {
				this.elements.$headings = this.getHeadings();
				if (!this.elements.$headings.length) return this.handleNoHeadingsFound();
				this.setHeadingsData();
				if (!elementorFrontend.isEditMode()) this.addAnchorsBeforeHeadings();
				this.populateTOC();
				if (this.getElementSettings("minimize_box")) this.collapseBodyListener();
			}
			expandBox(changeFocus = true) {
				const boxHeight = this.getCurrentDeviceSetting("min_height");
				this.$element.removeClass(this.getSettings("classes.collapsed"));
				this.elements.$tocBody.slideDown();
				this.elements.$expandButton.attr("aria-expanded", "true");
				this.elements.$collapseButton.attr("aria-expanded", "true");
				this.elements.$widgetContainer.css("min-height", boxHeight.size + boxHeight.unit);
				if (changeFocus) this.elements.$collapseButton.trigger("focus");
			}
			collapseBox(changeFocus = true) {
				this.$element.addClass(this.getSettings("classes.collapsed"));
				this.elements.$tocBody.slideUp();
				this.elements.$expandButton.attr("aria-expanded", "false");
				this.elements.$collapseButton.attr("aria-expanded", "false");
				this.elements.$widgetContainer.css("min-height", "0px");
				if (changeFocus) this.elements.$expandButton.trigger("focus");
			}
			triggerClickOnEnterSpace(event) {
				if (13 === event.keyCode || 32 === event.keyCode) {
					event.currentTarget.click();
					event.stopPropagation();
				}
			}
			onInit(...args) {
				super.onInit(...args);
				this.viewportItems = {};
				this.$activeItems = [];
				this.$activeLists = [];
				jQuery(() => this.run());
			}
			onListItemClick(event) {
				this.itemClicked = true;
				const scrollEndFallbackTimer = setTimeout(() => {
					this.itemClicked = false;
					this.updateActiveItemFromViewport();
				}, 2e3);
				window.addEventListener("scrollend", () => {
					this.itemClicked = false;
					clearTimeout(scrollEndFallbackTimer);
					this.updateActiveItemFromViewport();
				}, { once: true });
				const $clickedItem = jQuery(event.target);
				const $list = $clickedItem.parent().next();
				const collapseNestedList = this.getElementSettings("collapse_subitems");
				let listIsActive;
				if (collapseNestedList && $clickedItem.hasClass(this.getSettings("classes.firstLevelListItem"))) {
					if ($list.is(":visible")) listIsActive = true;
				}
				this.activateItems([$clickedItem]);
				if (collapseNestedList && listIsActive) $list.slideUp();
			}
		};
	}));
	//#endregion
	//#region modules/table-of-contents/assets/js/frontend/frontend.js
	var frontend_default$9 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("table-of-contents", () => __vitePreload(() => Promise.resolve().then(() => (init_table_of_contents(), table_of_contents_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/frontend/handlers/archive-posts-load-more.js
	var archive_posts_load_more_exports = /* @__PURE__ */ __exportAll({ default: () => ArchivePostsLoadMore });
	var ArchivePostsLoadMore;
	var init_archive_posts_load_more = __esmMin((() => {
		init_load_more$1();
		ArchivePostsLoadMore = class extends LoadMore {};
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js
	var archive_posts_skin_classic_exports = /* @__PURE__ */ __exportAll({ default: () => archive_posts_skin_classic_default });
	var archive_posts_skin_classic_default;
	var init_archive_posts_skin_classic = __esmMin((() => {
		init_posts();
		archive_posts_skin_classic_default = posts_default.extend({ getSkinPrefix() {
			return "archive_classic_";
		} });
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js
	var archive_posts_skin_cards_exports = /* @__PURE__ */ __exportAll({ default: () => archive_posts_skin_cards_default });
	var archive_posts_skin_cards_default;
	var init_archive_posts_skin_cards = __esmMin((() => {
		init_cards();
		archive_posts_skin_cards_default = cards_default.extend({ getSkinPrefix() {
			return "archive_cards_";
		} });
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/frontend/frontend.js
	var frontend_default$8 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			[
				"archive_classic",
				"archive_full_content",
				"archive_cards"
			].forEach((skinName) => {
				elementorFrontend.elementsHandler.attachHandler("archive-posts", () => __vitePreload(() => Promise.resolve().then(() => (init_archive_posts_load_more(), archive_posts_load_more_exports)), void 0), skinName);
			});
			elementorFrontend.elementsHandler.attachHandler("archive-posts", () => __vitePreload(() => Promise.resolve().then(() => (init_archive_posts_skin_classic(), archive_posts_skin_classic_exports)), void 0), "archive_classic");
			elementorFrontend.elementsHandler.attachHandler("archive-posts", () => __vitePreload(() => Promise.resolve().then(() => (init_archive_posts_skin_classic(), archive_posts_skin_classic_exports)), void 0), "archive_full_content");
			elementorFrontend.elementsHandler.attachHandler("archive-posts", () => __vitePreload(() => Promise.resolve().then(() => (init_archive_posts_skin_cards(), archive_posts_skin_cards_exports)), void 0), "archive_cards");
			jQuery(function() {
				var match = location.search.match(/theme_template_id=(\d*)/);
				var $element = match ? jQuery(".elementor-" + match[1]) : [];
				if ($element.length) jQuery("html, body").animate({ scrollTop: $element.offset().top - window.innerHeight / 2 });
			});
		}
	};
	//#endregion
	//#region modules/theme-elements/assets/js/frontend/handlers/search-form.js
	var search_form_exports = /* @__PURE__ */ __exportAll({ default: () => search_form_default });
	var search_form_default;
	var init_search_form = __esmMin((() => {
		search_form_default = elementorModules.frontend.handlers.Base.extend({
			getDefaultSettings() {
				return {
					selectors: {
						wrapper: ".elementor-search-form",
						container: ".elementor-search-form__container",
						icon: ".elementor-search-form__icon",
						input: ".elementor-search-form__input",
						toggle: ".elementor-search-form__toggle",
						submit: ".elementor-search-form__submit",
						closeButton: ".dialog-close-button"
					},
					classes: {
						isFocus: "elementor-search-form--focus",
						isFullScreen: "elementor-search-form--full-screen",
						lightbox: "elementor-lightbox"
					}
				};
			},
			getDefaultElements() {
				var selectors = this.getSettings("selectors");
				var elements = {};
				elements.$wrapper = this.$element.find(selectors.wrapper);
				elements.$container = this.$element.find(selectors.container);
				elements.$input = this.$element.find(selectors.input);
				elements.$icon = this.$element.find(selectors.icon);
				elements.$toggle = this.$element.find(selectors.toggle);
				elements.$submit = this.$element.find(selectors.submit);
				elements.$closeButton = this.$element.find(selectors.closeButton);
				return elements;
			},
			bindEvents() {
				var self = this;
				var $container = self.elements.$container;
				var $closeButton = self.elements.$closeButton;
				var $input = self.elements.$input;
				var $wrapper = self.elements.$wrapper;
				var $icon = self.elements.$icon;
				var $toggle = self.elements.$toggle;
				var skin = this.getElementSettings("skin");
				var classes = this.getSettings("classes");
				const openFullScreenSearch = () => {
					$container.addClass(classes.isFullScreen).addClass(classes.lightbox);
					$input.trigger("focus");
				};
				const closeFullScreenSearch = () => {
					$container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
					$toggle.trigger("focus");
				};
				const triggerClickOnEnterSpace = (event) => {
					if (13 === event.keyCode || 32 === event.keyCode) {
						event.currentTarget.click();
						event.stopPropagation();
					}
				};
				if ("full_screen" === skin) {
					$toggle.on("click", () => openFullScreenSearch()).on("keyup", (event) => triggerClickOnEnterSpace(event));
					$container.on("click", function(event) {
						if ($container.hasClass(classes.isFullScreen) && $container[0] === event.target) $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
					});
					$closeButton.on("click", () => closeFullScreenSearch()).on("keyup", (event) => triggerClickOnEnterSpace(event));
					elementorFrontend.elements.$document.on("keyup", function(event) {
						if (27 === event.keyCode) {
							if ($container.hasClass(classes.isFullScreen)) $container.trigger("click");
						}
					});
				} else $input.on({
					focus() {
						$wrapper.addClass(classes.isFocus);
					},
					blur() {
						$wrapper.removeClass(classes.isFocus);
					}
				});
				if ("minimal" === skin) $icon.on("click", function() {
					$wrapper.addClass(classes.isFocus);
					$input.trigger("focus");
				});
			}
		});
	}));
	//#endregion
	//#region modules/theme-elements/assets/js/frontend/frontend.js
	var frontend_default$7 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("search-form", () => __vitePreload(() => Promise.resolve().then(() => (init_search_form(), search_form_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/handlers/menu-cart.js
	var menu_cart_exports = /* @__PURE__ */ __exportAll({ default: () => menu_cart_default });
	var menu_cart_default;
	var init_menu_cart = __esmMin((() => {
		menu_cart_default = class extends elementorModules.frontend.handlers.Base {
			static {
				__name(this, "default");
			}
			getDefaultSettings() {
				return {
					selectors: {
						container: ".elementor-menu-cart__container",
						main: ".elementor-menu-cart__main",
						toggle: ".elementor-menu-cart__toggle",
						toggleButton: "#elementor-menu-cart__toggle_button",
						toggleWrapper: ".elementor-menu-cart__toggle_wrapper",
						closeButton: ".elementor-menu-cart__close-button, .elementor-menu-cart__close-button-custom",
						productList: ".elementor-menu-cart__products"
					},
					classes: { isShown: "elementor-menu-cart--shown" }
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$container: this.$element.find(selectors.container),
					$main: this.$element.find(selectors.main),
					$toggleWrapper: this.$element.find(selectors.toggleWrapper),
					$closeButton: this.$element.find(selectors.closeButton)
				};
			}
			toggleCart() {
				if (!this.isCartOpen) this.showCart();
				else this.hideCart();
			}
			showCart() {
				if (this.isCartOpen) return;
				const classes = this.getSettings("classes");
				const selectors = this.getSettings("selectors");
				this.isCartOpen = true;
				this.$element.addClass(classes.isShown);
				this.$element.find(selectors.toggleButton).attr("aria-expanded", true);
				this.elements.$main.attr("aria-hidden", false);
				this.elements.$container.attr("aria-hidden", false);
			}
			hideCart() {
				if (!this.isCartOpen) return;
				const classes = this.getSettings("classes");
				const selectors = this.getSettings("selectors");
				this.isCartOpen = false;
				this.$element.removeClass(classes.isShown);
				this.$element.find(selectors.toggleButton).attr("aria-expanded", false);
				this.elements.$main.attr("aria-hidden", true);
				this.elements.$container.attr("aria-hidden", true);
			}
			automaticallyOpenCart() {
				if ("yes" === this.getElementSettings().automatically_open_cart) this.showCart();
			}
			refreshFragments(eventType, data = null) {
				if (elementorFrontend.isEditMode() && elementorPro.modules.woocommerce.didManuallyTriggerAddToCartEvent(data)) return false;
				const templatesInPage = [];
				jQuery.each(elementorFrontend.documentsManager.documents, (index) => {
					templatesInPage.push(index);
				});
				jQuery.ajax({
					type: "POST",
					url: elementorProFrontend.config.ajaxurl,
					context: this,
					data: {
						action: "elementor_menu_cart_fragments",
						templates: templatesInPage,
						_nonce: ElementorProFrontendConfig.woocommerce.menu_cart.fragments_nonce,
						is_editor: elementorFrontend.isEditMode()
					},
					success(successData) {
						if (successData === null || successData === void 0 ? void 0 : successData.fragments) jQuery.each(successData.fragments, (key, value) => {
							jQuery(key).replaceWith(value);
						});
					},
					complete() {
						if ("added_to_cart" === eventType) this.automaticallyOpenCart();
					}
				});
			}
			bindEvents() {
				const menuCart = elementorProFrontend.config.woocommerce.menu_cart;
				const currentUrl = -1 === menuCart.cart_page_url.indexOf("?") ? window.location.origin + window.location.pathname : window.location.href;
				const cartUrl = menuCart.cart_page_url;
				const isCart = menuCart.cart_page_url === currentUrl;
				const isCheckout = menuCart.checkout_page_url === currentUrl;
				const selectors = this.getSettings("selectors");
				if (isCart && isCheckout) {
					this.$element.find(selectors.toggleButton).attr("href", cartUrl);
					return;
				}
				const classes = this.getSettings("classes");
				this.isCartOpen = this.$element.hasClass(classes.isShown);
				if ("mouseover" === this.getElementSettings().open_cart) {
					this.elements.$toggleWrapper.on("mouseover click", selectors.toggleButton, (event) => {
						event.preventDefault();
						this.showCart();
					});
					this.elements.$toggleWrapper.on("mouseleave", () => this.hideCart());
				} else this.elements.$toggleWrapper.on("click", selectors.toggleButton, (event) => {
					event.preventDefault();
					this.toggleCart();
				});
				elementorFrontend.elements.$document.on("click", (event) => {
					if (!this.isCartOpen) return;
					const $target = jQuery(event.target);
					if ($target.closest(this.elements.$main).length || $target.closest(selectors.toggle).length) return;
					this.hideCart();
				});
				this.elements.$closeButton.on("click", (event) => {
					event.preventDefault();
					this.hideCart();
				});
				elementorFrontend.elements.$document.on("keyup", (event) => {
					if (27 === event.keyCode) this.hideCart();
				});
				elementorFrontend.elements.$body.on("wc_fragments_refreshed removed_from_cart added_to_cart", (event, data) => this.refreshFragments(event.type, data));
				elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + "_window_resize_dropdown", "resize", () => this.governDropdownHeight());
				elementorFrontend.elements.$body.on("wc_fragments_loaded wc_fragments_refreshed", () => this.governDropdownHeight());
			}
			unbindEvents() {
				elementorFrontend.removeListeners(this.getUniqueHandlerID() + "_window_resize_dropdown", "resize");
			}
			onInit() {
				super.onInit();
				/**
				* When the page is reloaded after an item is added to cart, and the user activated the
				* "Automatically Open Cart" option, the cart should open to show the updated contents.
				*/
				if (elementorProFrontend.config.woocommerce.productAddedToCart) this.automaticallyOpenCart();
				this.governDropdownHeight();
			}
			governDropdownHeight() {
				if ("mini-cart" !== this.getElementSettings().cart_type) return;
				const selectors = this.getSettings("selectors");
				const $productList = this.$element.find(selectors.productList);
				const $toggle = this.$element.find(selectors.toggle);
				if (!$productList.length || !$toggle.length) return;
				this.$element.find(selectors.productList).css("max-height", "");
				const windowHeight = document.documentElement.clientHeight;
				const toggleHeight = $toggle.height() + parseInt(this.elements.$main.css("margin-top"));
				const toggleTopPosition = $toggle[0].getBoundingClientRect().top;
				const productListHeight = $productList.height();
				const dropdownWithoutViewportHeight = this.elements.$main.prop("scrollHeight") - productListHeight;
				const maxViewportHeight = windowHeight - toggleTopPosition - toggleHeight - dropdownWithoutViewportHeight - 30;
				const optimalViewportHeight = Math.max(120, maxViewportHeight);
				$productList.css("max-height", optimalViewportHeight);
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/handlers/base.js
	var Base$5;
	var init_base = __esmMin((() => {
		Base$5 = class extends elementorModules.frontend.handlers.Base {
			static {
				__name(this, "Base");
			}
			getDefaultSettings() {
				return {
					selectors: { stickyRightColumn: ".e-sticky-right-column" },
					classes: { stickyRightColumnActive: "e-sticky-right-column--active" }
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return { $stickyRightColumn: this.$element.find(selectors.stickyRightColumn) };
			}
			bindEvents() {
				elementorFrontend.elements.$document.on("select2:open", (event) => {
					this.addSelect2Wrapper(event);
				});
			}
			addSelect2Wrapper(event) {
				const selectElement = jQuery(event.target).data("select2");
				if (selectElement.$dropdown) selectElement.$dropdown.addClass("e-woo-select2-wrapper");
			}
			isStickyRightColumnActive() {
				const classes = this.getSettings("classes");
				return this.elements.$stickyRightColumn.hasClass(classes.stickyRightColumnActive);
			}
			activateStickyRightColumn() {
				const elementSettings = this.getElementSettings();
				const $wpAdminBar = elementorFrontend.elements.$wpAdminBar;
				const classes = this.getSettings("classes");
				let stickyOptionsOffset = elementSettings.sticky_right_column_offset || 0;
				if ($wpAdminBar.length && "fixed" === $wpAdminBar.css("position")) stickyOptionsOffset += $wpAdminBar.height();
				if ("yes" === this.getElementSettings("sticky_right_column")) {
					this.elements.$stickyRightColumn.addClass(classes.stickyRightColumnActive);
					this.elements.$stickyRightColumn.css("top", stickyOptionsOffset + "px");
				}
			}
			deactivateStickyRightColumn() {
				if (!this.isStickyRightColumnActive()) return;
				const classes = this.getSettings("classes");
				this.elements.$stickyRightColumn.removeClass(classes.stickyRightColumnActive);
			}
			/**
			* Activates the sticky column
			*
			* @return {void}
			*/
			toggleStickyRightColumn() {
				if (!this.getElementSettings("sticky_right_column")) {
					this.deactivateStickyRightColumn();
					return;
				}
				if (!this.isStickyRightColumnActive()) this.activateStickyRightColumn();
			}
			equalizeElementHeight($element) {
				if ($element.length) {
					$element.removeAttr("style");
					let maxHeight = 0;
					$element.each((index, element) => {
						maxHeight = Math.max(maxHeight, element.offsetHeight);
					});
					if (0 < maxHeight) $element.css({ height: maxHeight + "px" });
				}
			}
			/**
			* WooCommerce prints the Purchase Note separated from the product name by a border and padding.
			* In Elementor's Order Summary design, the product name and purchase note are displayed un-separated.
			* To achieve this design, it is necessary to access the Product Name line before the Purchase Note line to adjust
			* its padding. Since this cannot be achieved in CSS, it is done in this method.
			*
			* @param {Object} $element
			*
			* @return {void}
			*/
			removePaddingBetweenPurchaseNote($element) {
				if ($element) $element.each((index, element) => {
					jQuery(element).prev().children("td").addClass("product-purchase-note-is-below");
				});
			}
			/**
			* `elementorPageId` and `elementorWidgetId` are added to the url in the `_wp_http_referer` input which is then
			* received when WooCommerce does its cart and checkout ajax requests e.g `update_order_review` and `update_cart`.
			* These query strings are extracted from the url and used in our `load_widget_before_wc_ajax` method.
			*/
			updateWpReferers() {
				const selectors = this.getSettings("selectors");
				const wpHttpRefererInputs = this.$element.find(selectors.wpHttpRefererInputs);
				const url = new URL(document.location);
				url.searchParams.set("elementorPageId", elementorFrontend.config.post.id);
				url.searchParams.set("elementorWidgetId", this.getID());
				wpHttpRefererInputs.attr("value", url);
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/handlers/purchase-summary.js
	var purchase_summary_exports = /* @__PURE__ */ __exportAll({ default: () => PurchaseSummaryHandler });
	var PurchaseSummaryHandler;
	var init_purchase_summary = __esmMin((() => {
		init_base();
		PurchaseSummaryHandler = class extends Base$5 {
			getDefaultSettings() {
				return { selectors: {
					container: ".elementor-widget-woocommerce-purchase-summary",
					address: "address",
					purchasenote: ".product-purchase-note"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$container: this.$element.find(selectors.container),
					$address: this.$element.find(selectors.address),
					$purchasenote: this.$element.find(selectors.purchasenote)
				};
			}
			onElementChange(propertyName) {
				for (const property of [
					"general_text_typography",
					"sections_padding",
					"sections_border_width"
				]) if (propertyName.startsWith(property)) this.equalizeElementHeight(this.elements.$address);
				if (propertyName.startsWith("order_details_rows_gap")) this.removePaddingBetweenPurchaseNote(this.elements.$purchasenote);
			}
			applyButtonsHoverAnimation() {
				const elementSettings = this.getElementSettings();
				if (elementSettings.order_details_button_hover_animation) this.$element.find(".order-again .button, td .button").addClass("elementor-animation-" + elementSettings.order_details_button_hover_animation);
			}
			onInit(...args) {
				super.onInit(...args);
				this.equalizeElementHeight(this.elements.$address);
				this.removePaddingBetweenPurchaseNote(this.elements.$purchasenote);
				this.applyButtonsHoverAnimation();
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/handlers/checkout-page.js
	var checkout_page_exports = /* @__PURE__ */ __exportAll({ default: () => Checkout });
	var __defProp$2, __defProps, __getOwnPropDescs, __getOwnPropSymbols, __hasOwnProp, __propIsEnum, __defNormalProp$2, __spreadValues, __spreadProps, Checkout;
	var init_checkout_page = __esmMin((() => {
		init_base();
		__defProp$2 = Object.defineProperty;
		__defProps = Object.defineProperties;
		__getOwnPropDescs = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols = Object.getOwnPropertySymbols;
		__hasOwnProp = Object.prototype.hasOwnProperty;
		__propIsEnum = Object.prototype.propertyIsEnumerable;
		__defNormalProp$2 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$2(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues = (a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
			if (__getOwnPropSymbols) {
				for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
			}
			return a;
		};
		__spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
		Checkout = class extends Base$5 {
			getDefaultSettings(...args) {
				const defaultSettings = super.getDefaultSettings(...args);
				return {
					selectors: __spreadProps(__spreadValues({}, defaultSettings.selectors), {
						container: ".elementor-widget-woocommerce-checkout-page",
						loginForm: ".e-woocommerce-login-anchor",
						loginSubmit: ".e-woocommerce-form-login-submit",
						loginSection: ".e-woocommerce-login-section",
						showCouponForm: ".e-show-coupon-form",
						couponSection: ".e-coupon-anchor",
						showLoginForm: ".e-show-login",
						applyCoupon: ".e-apply-coupon",
						checkoutForm: "form.woocommerce-checkout",
						couponBox: ".e-coupon-box",
						address: "address",
						wpHttpRefererInputs: "[name=\"_wp_http_referer\"]"
					}),
					classes: defaultSettings.classes,
					ajaxUrl: elementorProFrontend.config.ajaxurl
				};
			}
			getDefaultElements(...args) {
				const selectors = this.getSettings("selectors");
				return __spreadProps(__spreadValues({}, super.getDefaultElements(...args)), {
					$container: this.$element.find(selectors.container),
					$loginForm: this.$element.find(selectors.loginForm),
					$showCouponForm: this.$element.find(selectors.showCouponForm),
					$couponSection: this.$element.find(selectors.couponSection),
					$showLoginForm: this.$element.find(selectors.showLoginForm),
					$applyCoupon: this.$element.find(selectors.applyCoupon),
					$loginSubmit: this.$element.find(selectors.loginSubmit),
					$couponBox: this.$element.find(selectors.couponBox),
					$checkoutForm: this.$element.find(selectors.checkoutForm),
					$loginSection: this.$element.find(selectors.loginSection),
					$address: this.$element.find(selectors.address)
				});
			}
			bindEvents(...args) {
				super.bindEvents(...args);
				this.elements.$showCouponForm.on("click", (event) => {
					event.preventDefault();
					this.elements.$couponSection.slideToggle();
				});
				this.elements.$showLoginForm.on("click", (event) => {
					event.preventDefault();
					this.elements.$loginForm.slideToggle();
				});
				this.elements.$applyCoupon.on("click", (event) => {
					event.preventDefault();
					this.applyCoupon();
				});
				this.elements.$loginSubmit.on("click", (event) => {
					event.preventDefault();
					this.loginUser();
				});
				elementorFrontend.elements.$body.on("updated_checkout", () => {
					this.applyPurchaseButtonHoverAnimation();
					this.updateWpReferers();
				});
			}
			onInit(...args) {
				super.onInit(...args);
				this.toggleStickyRightColumn();
				this.updateWpReferers();
				this.equalizeElementHeight(this.elements.$address);
				if (elementorFrontend.isEditMode()) {
					this.elements.$loginForm.show();
					this.elements.$couponSection.show();
					this.applyPurchaseButtonHoverAnimation();
				}
			}
			onElementChange(propertyName) {
				if ("sticky_right_column" === propertyName) this.toggleStickyRightColumn();
			}
			onDestroy(...args) {
				super.onDestroy(...args);
				this.deactivateStickyRightColumn();
			}
			applyPurchaseButtonHoverAnimation() {
				const purchaseButtonHoverAnimation = this.getElementSettings("purchase_button_hover_animation");
				if (purchaseButtonHoverAnimation) jQuery("#place_order").addClass("elementor-animation-" + purchaseButtonHoverAnimation);
			}
			applyCoupon() {
				if (!wc_checkout_params) return;
				this.startProcessing(this.elements.$couponBox);
				const data = {
					security: wc_checkout_params.apply_coupon_nonce,
					coupon_code: this.elements.$couponBox.find("input[name=\"coupon_code\"]").val()
				};
				jQuery.ajax({
					type: "POST",
					url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "apply_coupon"),
					context: this,
					data,
					success(code) {
						jQuery(".woocommerce-error, .woocommerce-message").remove();
						this.elements.$couponBox.removeClass("processing").unblock();
						if (code.includes("woocommerce-error") || code.includes("does not exist")) jQuery("html, body").animate({ scrollTop: 0 }, "fast");
						if (code) {
							this.elements.$checkoutForm.before(code);
							this.elements.$couponSection.slideUp();
							elementorFrontend.elements.$body.trigger("applied_coupon_in_checkout", [data.coupon_code]);
							elementorFrontend.elements.$body.trigger("update_checkout", { update_shipping_method: false });
						}
					},
					dataType: "html"
				});
			}
			loginUser() {
				this.startProcessing(this.elements.$loginSection);
				const data = {
					action: "elementor_woocommerce_checkout_login_user",
					username: this.elements.$loginSection.find("input[name=\"username\"]").val(),
					password: this.elements.$loginSection.find("input[name=\"password\"]").val(),
					nonce: this.elements.$loginSection.find("input[name=\"woocommerce-login-nonce\"]").val(),
					remember: this.elements.$loginSection.find("input#rememberme").prop("checked")
				};
				jQuery.ajax({
					type: "POST",
					url: this.getSettings("ajaxUrl"),
					context: this,
					data,
					success(code) {
						code = JSON.parse(code);
						this.elements.$loginSection.removeClass("processing").unblock();
						jQuery(".woocommerce-error, .woocommerce-message").remove();
						if (code.logged_in) location.reload();
						else {
							this.elements.$checkoutForm.before(code.message);
							elementorFrontend.elements.$body.trigger("checkout_error", [code.message]);
						}
					}
				});
			}
			startProcessing($form) {
				if ($form.is(".processing")) return;
				$form.addClass("processing").block({
					message: null,
					overlayCSS: {
						background: "#fff",
						opacity: .6
					}
				});
			}
		};
	}));
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
	var init_objectSpread2 = __esmMin((() => {
		init_defineProperty();
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/handlers/cart.js
	var cart_exports = /* @__PURE__ */ __exportAll({ default: () => Cart });
	var Cart;
	var init_cart = __esmMin((() => {
		init_base();
		init_objectSpread2();
		Cart = class extends Base$5 {
			getDefaultSettings(...args) {
				const defaultSettings = super.getDefaultSettings(...args);
				return {
					selectors: _objectSpread2(_objectSpread2({}, defaultSettings.selectors), {}, {
						shippingForm: ".shipping-calculator-form",
						quantityInput: ".qty",
						updateCartButton: "button[name=update_cart]",
						wpHttpRefererInputs: "[name=_wp_http_referer]",
						hiddenInput: "input[type=hidden]",
						productRemove: ".product-remove a"
					}),
					classes: defaultSettings.classes,
					ajaxUrl: elementorProFrontend.config.ajaxurl
				};
			}
			getDefaultElements(...args) {
				const selectors = this.getSettings("selectors");
				return _objectSpread2(_objectSpread2({}, super.getDefaultElements(...args)), {}, {
					$shippingForm: this.$element.find(selectors.shippingForm),
					$stickyColumn: this.$element.find(selectors.stickyColumn),
					$hiddenInput: this.$element.find(selectors.hiddenInput)
				});
			}
			bindEvents() {
				super.bindEvents();
				const selectors = this.getSettings("selectors");
				elementorFrontend.elements.$body.on("wc_fragments_refreshed", () => this.applyButtonsHoverAnimation());
				if ("yes" === this.getElementSettings("update_cart_automatically")) this.$element.on("input", selectors.quantityInput, () => this.updateCart());
				elementorFrontend.elements.$body.on("wc_fragments_loaded wc_fragments_refreshed", () => {
					this.updateWpReferers();
					if (elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode()) this.disableActions();
				});
				elementorFrontend.elements.$body.on("added_to_cart", function(e, data) {
					if (data.e_manually_triggered) return false;
				});
			}
			onInit(...args) {
				super.onInit(...args);
				this.toggleStickyRightColumn();
				this.hideHiddenInputsParentElements();
				if (elementorFrontend.isEditMode()) this.elements.$shippingForm.show();
				this.applyButtonsHoverAnimation();
				this.updateWpReferers();
				if (elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode()) this.disableActions();
			}
			/**
			* Using the WooCommerce Cart controls (quantity, remove product) in the editor will cause the cart to disappear.
			* This is because WooCommerce does an ajax round trip where it modifies the cart, then loads that cart into the
			* current page and attempts to grab the elements from that page via ajax. In the Editor, if the page is not
			* published yet, it fetches an empty page that does not contain the required elements. As a result, the cart
			* is rendered empty.
			*
			* Due to this issue, the cart controls (quantity, remove product) need to be disabled in the Editor.
			*/
			disableActions() {
				const selectors = this.getSettings("selectors");
				this.$element.find(selectors.updateCartButton).attr({
					disabled: "disabled",
					"aria-disabled": "true"
				});
				if (elementorFrontend.isEditMode()) {
					this.$element.find(selectors.quantityInput).attr("disabled", "disabled");
					this.$element.find(selectors.productRemove).css("pointer-events", "none");
				}
			}
			onElementChange(propertyName) {
				if ("sticky_right_column" === propertyName) this.toggleStickyRightColumn();
				if ("additional_template_select" === propertyName) elementorPro.modules.woocommerce.onTemplateIdChange("additional_template_select");
			}
			onDestroy(...args) {
				super.onDestroy(...args);
				this.deactivateStickyRightColumn();
			}
			updateCart() {
				const selectors = this.getSettings("selectors");
				clearTimeout(this._debounce);
				this._debounce = setTimeout(() => {
					this.$element.find(selectors.updateCartButton).trigger("click");
				}, 1500);
			}
			applyButtonsHoverAnimation() {
				const elementSettings = this.getElementSettings();
				if (elementSettings.checkout_button_hover_animation) jQuery(".checkout-button").addClass("elementor-animation-" + elementSettings.checkout_button_hover_animation);
				if (elementSettings.forms_buttons_hover_animation) jQuery(".shop_table .button").addClass("elementor-animation-" + elementSettings.forms_buttons_hover_animation);
			}
			/**
			* In the editor, WC Frontend JS does not fire (not registered).
			* This causes that hidden inputs parent paragraph elements do not get display:none
			* as they would have on the front end.
			* So this function manually display:none the parent elements of these hidden inputs to avoid having
			* gaps/spaces in the layout caused by these parent elements' margins/paddings.
			*/
			hideHiddenInputsParentElements() {
				if (this.isEdit) {
					if (this.elements.$hiddenInput) this.elements.$hiddenInput.parent(".form-row").addClass("elementor-hidden");
				}
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/handlers/my-account.js
	var my_account_exports = /* @__PURE__ */ __exportAll({ default: () => MyAccountHandler });
	var MyAccountHandler;
	var init_my_account = __esmMin((() => {
		init_base();
		MyAccountHandler = class extends Base$5 {
			getDefaultSettings() {
				return { selectors: {
					address: "address",
					tabLinks: ".woocommerce-MyAccount-navigation-link a",
					viewOrderButtons: ".my_account_orders .woocommerce-button.view",
					viewOrderLinks: ".woocommerce-orders-table__cell-order-number a",
					authForms: "form.login, form.register",
					tabWrapper: ".e-my-account-tab",
					tabItem: ".woocommerce-MyAccount-navigation li",
					allPageElements: "[e-my-account-page]",
					purchasenote: "tr.product-purchase-note",
					contentWrapper: ".woocommerce-MyAccount-content-wrapper"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$address: this.$element.find(selectors.address),
					$tabLinks: this.$element.find(selectors.tabLinks),
					$viewOrderButtons: this.$element.find(selectors.viewOrderButtons),
					$viewOrderLinks: this.$element.find(selectors.viewOrderLinks),
					$authForms: this.$element.find(selectors.authForms),
					$tabWrapper: this.$element.find(selectors.tabWrapper),
					$tabItem: this.$element.find(selectors.tabItem),
					$allPageElements: this.$element.find(selectors.allPageElements),
					$purchasenote: this.$element.find(selectors.purchasenote),
					$contentWrapper: this.$element.find(selectors.contentWrapper)
				};
			}
			editorInitTabs() {
				this.elements.$allPageElements.each((index, element) => {
					const currentPage = element.getAttribute("e-my-account-page");
					let $linksToThisPage;
					switch (currentPage) {
						case "view-order":
							$linksToThisPage = this.elements.$viewOrderLinks.add(this.elements.$viewOrderButtons);
							break;
						default: $linksToThisPage = this.$element.find(".woocommerce-MyAccount-navigation-link--" + currentPage);
					}
					$linksToThisPage.on("click", () => {
						this.currentPage = currentPage;
						this.editorShowTab();
					});
				});
			}
			editorShowTab() {
				const $currentPage = this.$element.find("[e-my-account-page=\"" + this.currentPage + "\"]");
				this.$element.attr("e-my-account-page", this.currentPage);
				this.elements.$allPageElements.hide();
				$currentPage.show();
				this.toggleEndpointClasses();
				if ("view-order" !== this.currentPage) {
					this.elements.$tabItem.removeClass("is-active");
					this.$element.find(".woocommerce-MyAccount-navigation-link--" + this.currentPage).addClass("is-active");
				}
				if ("edit-address" === this.currentPage || "view-order" === this.currentPage) this.equalizeElementHeights();
			}
			toggleEndpointClasses() {
				const wcPages = [
					"dashboard",
					"orders",
					"view-order",
					"downloads",
					"edit-account",
					"edit-address",
					"payment-methods"
				];
				let wrapperClass = "";
				this.elements.$tabWrapper.removeClass("e-my-account-tab__" + wcPages.join(" e-my-account-tab__") + " e-my-account-tab__dashboard--custom");
				if ("dashboard" === this.currentPage && this.elements.$contentWrapper.find(".elementor").length) wrapperClass = " e-my-account-tab__dashboard--custom";
				if (wcPages.includes(this.currentPage)) this.elements.$tabWrapper.addClass("e-my-account-tab__" + this.currentPage + wrapperClass);
			}
			applyButtonsHoverAnimation() {
				const elementSettings = this.getElementSettings();
				if (elementSettings.forms_buttons_hover_animation) this.$element.find(".woocommerce button.button,  #add_payment_method #payment #place_order").addClass("elementor-animation-" + elementSettings.forms_buttons_hover_animation);
				if (elementSettings.tables_button_hover_animation) this.$element.find(".order-again .button, td .button, .woocommerce-pagination .button").addClass("elementor-animation-" + elementSettings.tables_button_hover_animation);
			}
			equalizeElementHeights() {
				this.equalizeElementHeight(this.elements.$address);
				if (!this.isEdit) this.equalizeElementHeight(this.elements.$authForms);
			}
			onElementChange(propertyName) {
				if (0 === propertyName.indexOf("general_text_typography") || 0 === propertyName.indexOf("sections_padding")) this.equalizeElementHeights();
				if (0 === propertyName.indexOf("forms_rows_gap")) this.removePaddingBetweenPurchaseNote(this.elements.$purchasenote);
				if ("customize_dashboard_select" === propertyName) elementorPro.modules.woocommerce.onTemplateIdChange("customize_dashboard_select");
			}
			bindEvents() {
				super.bindEvents();
				elementorFrontend.elements.$body.on("keyup change", ".register #reg_password", () => {
					this.equalizeElementHeights();
				});
			}
			onInit(...args) {
				super.onInit(...args);
				if (this.isEdit) {
					this.editorInitTabs();
					if (!this.$element.attr("e-my-account-page")) this.currentPage = "dashboard";
					else this.currentPage = this.$element.attr("e-my-account-page");
					this.editorShowTab();
				}
				this.applyButtonsHoverAnimation();
				this.equalizeElementHeights();
				this.removePaddingBetweenPurchaseNote(this.elements.$purchasenote);
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/handlers/notices.js
	var notices_exports = /* @__PURE__ */ __exportAll({ default: () => notices_default });
	var notices_default;
	var init_notices = __esmMin((() => {
		notices_default = class extends elementorModules.frontend.handlers.Base {
			static {
				__name(this, "default");
			}
			getDefaultSettings() {
				return { selectors: {
					woocommerceNotices: ":not(.woocommerce-NoticeGroup) .wc-block-components-notice-banner, .woocommerce-NoticeGroup, :not(.woocommerce-NoticeGroup) .woocommerce-error, :not(.woocommerce-NoticeGroup) .woocommerce-message, :not(.woocommerce-NoticeGroup) .woocommerce-info",
					noticesWrapper: ".e-woocommerce-notices-wrapper"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$documentScrollToElements: elementorFrontend.elements.$document.find("html, body"),
					$woocommerceCheckoutForm: elementorFrontend.elements.$body.find(".form.checkout"),
					$noticesWrapper: this.$element.find(selectors.noticesWrapper)
				};
			}
			moveNotices(scrollToNotices = false) {
				const selectors = this.getSettings("selectors");
				let $notices = elementorFrontend.elements.$body.find(selectors.woocommerceNotices);
				if (elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode()) $notices = $notices.filter(":not(.e-notices-demo-notice)");
				if (scrollToNotices) this.elements.$documentScrollToElements.stop();
				this.elements.$noticesWrapper.prepend($notices);
				if (!this.is_ready) {
					this.elements.$noticesWrapper.removeClass("e-woocommerce-notices-wrapper-loading");
					this.is_ready = true;
				}
				if (scrollToNotices) {
					let $scrollToElement = $notices;
					if (!$scrollToElement.length) $scrollToElement = this.elements.$woocommerceCheckoutForm;
					if ($scrollToElement.length) this.elements.$documentScrollToElements.animate({ scrollTop: $scrollToElement.offset().top - document.documentElement.clientHeight / 2 }, 1e3);
				}
			}
			onInit() {
				super.onInit();
				this.is_ready = false;
				this.moveNotices(true);
			}
			bindEvents() {
				elementorFrontend.elements.$body.on("updated_wc_div updated_checkout updated_cart_totals applied_coupon removed_coupon applied_coupon_in_checkout removed_coupon_in_checkout checkout_error", () => this.moveNotices(true));
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/handlers/product-add-to-cart.js
	var product_add_to_cart_exports = /* @__PURE__ */ __exportAll({ default: () => ProductAddToCart });
	var ProductAddToCart;
	var init_product_add_to_cart = __esmMin((() => {
		init_base();
		ProductAddToCart = class extends Base$5 {
			getDefaultSettings() {
				return { selectors: {
					quantityInput: ".e-loop-add-to-cart-form input.qty",
					addToCartButton: ".e-loop-add-to-cart-form .ajax_add_to_cart",
					addedToCartButton: ".added_to_cart",
					loopFormContainer: ".e-loop-add-to-cart-form-container"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$quantityInput: this.$element.find(selectors.quantityInput),
					$addToCartButton: this.$element.find(selectors.addToCartButton)
				};
			}
			updateAddToCartButtonQuantity() {
				this.elements.$addToCartButton.attr("data-quantity", this.elements.$quantityInput.val());
			}
			handleAddedToCart($button) {
				const selectors = this.getSettings("selectors");
				const $addToCartButton = $button.siblings(selectors.addedToCartButton);
				const $loopFormContainer = $addToCartButton.parents(selectors.loopFormContainer);
				$loopFormContainer.children(selectors.addedToCartButton).remove();
				$loopFormContainer.append($addToCartButton);
			}
			bindEvents(...args) {
				super.bindEvents(...args);
				this.elements.$quantityInput.on("change", () => {
					this.updateAddToCartButtonQuantity();
				});
				elementorFrontend.elements.$body.off("added_to_cart.elementor-woocommerce-product-add-to-cart");
				elementorFrontend.elements.$body.on("added_to_cart.elementor-woocommerce-product-add-to-cart", (e, fragments, cartHash, $button) => {
					this.handleAddedToCart($button);
				});
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/frontend/frontend.js
	var frontend_default$6 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("woocommerce-menu-cart", () => __vitePreload(() => Promise.resolve().then(() => (init_menu_cart(), menu_cart_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("woocommerce-purchase-summary", () => __vitePreload(() => Promise.resolve().then(() => (init_purchase_summary(), purchase_summary_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("woocommerce-checkout-page", () => __vitePreload(() => Promise.resolve().then(() => (init_checkout_page(), checkout_page_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("woocommerce-cart", () => __vitePreload(() => Promise.resolve().then(() => (init_cart(), cart_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("woocommerce-my-account", () => __vitePreload(() => Promise.resolve().then(() => (init_my_account(), my_account_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("woocommerce-notices", () => __vitePreload(() => Promise.resolve().then(() => (init_notices(), notices_exports)), void 0));
			elementorFrontend.elementsHandler.attachHandler("woocommerce-product-add-to-cart", () => __vitePreload(() => Promise.resolve().then(() => (init_product_add_to_cart(), product_add_to_cart_exports)), void 0));
			if (elementorFrontend.isEditMode()) elementorFrontend.on("components:init", () => {
				if (!elementorFrontend.elements.$body.find(".elementor-widget-woocommerce-cart").length) elementorFrontend.elements.$body.append("<div class=\"woocommerce-cart-form\">");
			});
		}
	};
	//#endregion
	//#region assets/dev/js/frontend/utils/run-element-handlers.js
	function runElementHandlers(elements) {
		[...elements].flatMap((el) => [...el.querySelectorAll(".elementor-element")]).forEach((el) => elementorFrontend.elementsHandler.runReadyTrigger(el));
	}
	var init_run_element_handlers = __esmMin((() => {}));
	//#endregion
	//#region modules/loop-builder/assets/js/frontend/handlers/load-more.js
	var load_more_exports = /* @__PURE__ */ __exportAll({ default: () => LoopLoadMore });
	var LoopLoadMore;
	var init_load_more = __esmMin((() => {
		init_load_more$1();
		init_run_element_handlers();
		LoopLoadMore = class extends LoadMore {
			getDefaultSettings() {
				const defaultSettings = super.getDefaultSettings();
				defaultSettings.selectors.postsContainer = ".elementor-loop-container";
				defaultSettings.selectors.postWrapperTag = ".e-loop-item";
				defaultSettings.selectors.loadMoreButton = ".e-loop__load-more .elementor-button";
				defaultSettings.selectors.dynamicStyleElement = "style[id^=\"loop-dynamic\"]";
				return defaultSettings;
			}
			afterInsertPosts(postsElements, result) {
				super.afterInsertPosts(postsElements);
				if (ElementorProFrontendConfig.settings.lazy_load_background_images) document.dispatchEvent(new Event("elementor/lazyload/observe"));
				this.handleDynamicStyleElements(result);
				runElementHandlers(postsElements);
				elementorFrontend.elements.$window.trigger("elementor-pro/loop-builder/after-insert-posts");
			}
			/**
			* Handle Dynamic Style Elements.
			*
			* Adds the dynamic `<style>` block responsible for any styling that effects each individual loop-item
			* e.g. dynamic-tag background images
			*
			* @param {Object} result - Dom element after the remaining content `afterInsertPosts()` has run.
			*/
			handleDynamicStyleElements(result) {
				const selectors = this.getSettings("selectors");
				const dynamicStyleElements = result.querySelectorAll(`[data-id="${this.elementId}"] ${selectors.dynamicStyleElement}`);
				this.$element.append(dynamicStyleElements);
			}
		};
	}));
	//#endregion
	//#region assets/dev/js/preview/utils/document-handle.js
	function addDocumentHandle({ element, id, title = (0, _wordpress_i18n.__)("Template", "elementor-pro") }, context = EDIT_CONTEXT, onCloseDocument = null, selector = null) {
		if ("edit" === context) {
			if (!id || !element) throw Error("`id` and `element` are required.");
			if (isCurrentlyEditing(element) || hasHandle(element)) return;
		}
		const handleElement = createHandleElement({
			title,
			onClick: () => onDocumentClick(id, context, onCloseDocument, selector)
		}, context, element);
		element.prepend(handleElement);
		if ("edit" === context) element.dataset.editableElementorDocument = id;
	}
	function isCurrentlyEditing(element) {
		return element.classList.contains(EDIT_MODE_CLASS_NAME);
	}
	function hasHandle(element) {
		return !!element.querySelector(`:scope > .${EDIT_HANDLE_CLASS_NAME}`);
	}
	function createHandleElement({ title, onClick }, context, element = null) {
		const handleTitle = ["header", "footer"].includes(element == null ? void 0 : element.dataset.elementorType) ? "%s" : (0, _wordpress_i18n.__)("Edit %s", "elementor-pro");
		const innerElement = createElement({
			tag: "div",
			classNames: [`${EDIT_HANDLE_CLASS_NAME}__inner`],
			children: [createElement({
				tag: "i",
				classNames: [getHandleIcon(context)]
			}), createElement({
				tag: "div",
				classNames: [`${"edit" === context ? EDIT_HANDLE_CLASS_NAME : SAVE_HANDLE_CLASS_NAME}__title`],
				children: [document.createTextNode("edit" === context ? handleTitle.replace("%s", title) : (0, _wordpress_i18n.__)("Save %s", "elementor-pro").replace("%s", title))]
			})]
		});
		const classNames = [EDIT_HANDLE_CLASS_NAME];
		if ("edit" !== context) classNames.push(SAVE_HANDLE_CLASS_NAME);
		const containerElement = createElement({
			tag: "div",
			classNames,
			children: [innerElement]
		});
		containerElement.addEventListener("click", onClick);
		return containerElement;
	}
	function getHandleIcon(context) {
		let icon = "eicon-edit";
		if ("save" === context) icon = elementorFrontend.config.is_rtl ? "eicon-arrow-right" : "eicon-arrow-left";
		return icon;
	}
	function createElement({ tag, classNames = [], children = [] }) {
		const element = document.createElement(tag);
		element.classList.add(...classNames);
		children.forEach((child) => element.appendChild(child));
		return element;
	}
	function onDocumentClick(id, context, onCloseDocument = null, selector = null) {
		return __async(this, null, function* () {
			if ("edit" === context) {
				window.top.$e.internal("panel/state-loading");
				yield window.top.$e.run("editor/documents/switch", {
					id: parseInt(id),
					onClose: onCloseDocument,
					selector
				});
				window.top.$e.internal("panel/state-ready");
			} else {
				elementorCommon.api.internal("panel/state-loading");
				elementorCommon.api.run("editor/documents/switch", {
					id: elementor.config.initial_document.id,
					mode: "save",
					shouldScroll: false,
					selector
				}).finally(() => elementorCommon.api.internal("panel/state-ready"));
			}
		});
	}
	var __async, EDIT_HANDLE_CLASS_NAME, EDIT_MODE_CLASS_NAME, EDIT_CONTEXT, SAVE_HANDLE_CLASS_NAME;
	var init_document_handle = __esmMin((() => {
		__async = (__this, __arguments, generator) => {
			return new Promise((resolve, reject) => {
				var fulfilled = (value) => {
					try {
						step(generator.next(value));
					} catch (e) {
						reject(e);
					}
				};
				var rejected = (value) => {
					try {
						step(generator.throw(value));
					} catch (e) {
						reject(e);
					}
				};
				var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
				step((generator = generator.apply(__this, __arguments)).next());
			});
		};
		EDIT_HANDLE_CLASS_NAME = "elementor-document-handle";
		EDIT_MODE_CLASS_NAME = "elementor-edit-mode";
		EDIT_CONTEXT = "edit";
		SAVE_HANDLE_CLASS_NAME = "elementor-document-save-back-handle";
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/frontend/handlers/loop.js
	var loop_exports = /* @__PURE__ */ __exportAll({ default: () => Loop });
	var Loop;
	var init_loop = __esmMin((() => {
		init_posts();
		init_document_handle();
		Loop = class extends posts_default {
			getSkinPrefix() {
				return "";
			}
			getDefaultSettings() {
				const defaultSettings = super.getDefaultSettings();
				defaultSettings.selectors.post = ".elementor-loop-container .elementor";
				defaultSettings.selectors.postsContainer = ".elementor-loop-container";
				defaultSettings.classes.inPlaceTemplateEditable = "elementor-in-place-template-editable";
				return defaultSettings;
			}
			/**
			* Fit Images is used in the extended Posts widget handler to apply the "Image Size", "Image Ratio" and
			* "Image Width" controls. These controls don't exist in the Loop Grid widget, so we override `fitImages()`
			* to disable it's functionality.
			*/
			fitImages() {}
			getVerticalSpaceBetween() {
				return elementorProFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "row_gap", "size");
			}
			/**
			* This is a callback that runs when the "Edit Template" document handle is clicked in the Editor.
			*/
			onInPlaceEditTemplate() {
				this.$element.addClass(this.getDefaultSettings().classes.inPlaceTemplateEditable);
				this.elementsToRemove = [];
				this.handleSwiper();
				const templateID = this.getElementSettings("template_id");
				this.elementsToRemove = [
					...this.elementsToRemove,
					"style#loop-" + templateID,
					"link#font-loop-" + templateID,
					"style#loop-dynamic-" + templateID
				];
				this.elementsToRemove.forEach((elementToRemove) => {
					this.$element.find(elementToRemove).remove();
				});
			}
			handleSwiper() {
				const swiper = this.elements.$postsContainer.data("swiper");
				if (!swiper) return;
				swiper.slideTo(0);
				swiper.autoplay.pause();
				swiper.allowTouchMove = false;
				swiper.params.autoplay.delay = 1e6;
				swiper.update();
				this.elementsToRemove = [
					...this.elementsToRemove,
					".swiper-pagination",
					".elementor-swiper-button",
					".elementor-document-handle"
				];
			}
			attachEditDocumentHandle() {
				const templateId = this.getElementSettings("template_id");
				if (!templateId) return;
				const elementSettings = this.getElementSettings();
				const widgetSelector = `.elementor-element-${this.getID()}`;
				const editHandleSelector = (elementSettings === null || elementSettings === void 0 ? void 0 : elementSettings.edit_handle_selector) + ("[data-elementor-type=\"loop-item\"]" === (elementSettings === null || elementSettings === void 0 ? void 0 : elementSettings.edit_handle_selector) ? `.elementor-${templateId}` : "");
				const editHandleElement = this.$element.find(editHandleSelector).first()[0];
				if (!editHandleElement) return;
				if (this.isFirstEdit()) {
					this.$element.find(".elementor-swiper-button").remove();
					return;
				}
				addDocumentHandle({
					element: editHandleElement,
					title: (0, _wordpress_i18n.__)("Template", "elementor-pro"),
					id: templateId
				}, EDIT_CONTEXT, () => this.onInPlaceEditTemplate(), `${widgetSelector} .elementor-${templateId}`);
			}
			isFirstEdit() {
				return this.$element.has(".e-loop-first-edit").length;
			}
			handleCTA() {
				const emptyViewContainer = document.querySelector(`[data-id="${this.getID()}"] .e-loop-empty-view__wrapper`);
				if (!emptyViewContainer) return;
				const shadowRoot = emptyViewContainer.attachShadow({ mode: "open" });
				shadowRoot.appendChild(elementorPro.modules.loopBuilder.getCtaStyles());
				shadowRoot.appendChild(elementorPro.modules.loopBuilder.getCtaContent(this.getWidgetType()));
				shadowRoot.querySelector(".e-loop-empty-view__box-cta").addEventListener("click", () => {
					elementorPro.modules.loopBuilder.createTemplate();
				});
			}
			/**
			* Allows 3rd party add-ons to run code on the Loop Grid handler when the handler is initialized in the Editor.
			*/
			doEditorInitAction() {
				elementor.hooks.doAction("editor/widgets/loop-grid/on-init", this);
			}
			onElementChange(control) {
				if ("_skin" === control) elementorPro.modules.loopBuilder.onApplySkinChange();
				posts_default.prototype.onElementChange.apply(this);
			}
			bindEvents() {
				super.bindEvents();
				elementorFrontend.elements.$window.on("elementor-pro/loop-builder/after-insert-posts", this.reInitMasonry.bind(this));
			}
			reInitMasonry() {
				const selectors = this.getSettings("selectors");
				this.elements.$posts = jQuery(`.elementor-element-${this.getID()} ${selectors.post}`);
				super.runMasonry();
			}
			unbindEvents() {
				super.unbindEvents();
				elementorFrontend.elements.$window.off("elementor-pro/loop-builder/after-insert-posts", this.reInitMasonry.bind(this));
			}
			onInit(...args) {
				super.onInit(...args);
				if (elementorFrontend.isEditMode()) {
					this.doEditorInitAction();
					this.attachEditDocumentHandle();
					this.handleCTA();
				}
			}
		};
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/frontend/handlers/loop-carousel.js
	var loop_carousel_exports = /* @__PURE__ */ __exportAll({ default: () => LoopCarousel });
	var LoopCarousel;
	var init_loop_carousel = __esmMin((() => {
		init_run_element_handlers();
		init_asyncToGenerator();
		LoopCarousel = class extends elementorModules.frontend.handlers.CarouselBase {
			getDefaultSettings() {
				const defaultSettings = super.getDefaultSettings();
				defaultSettings.selectors.carousel = ".elementor-loop-container";
				return defaultSettings;
			}
			getSwiperSettings() {
				const swiperOptions = super.getSwiperSettings();
				const elementSettings = this.getElementSettings();
				const isRtl = elementorFrontend.config.is_rtl;
				const widgetSelector = `.elementor-element-${this.getID()}`;
				if ("yes" === elementSettings.arrows) swiperOptions.navigation = {
					prevEl: isRtl ? `${widgetSelector} .elementor-swiper-button-next` : `${widgetSelector} .elementor-swiper-button-prev`,
					nextEl: isRtl ? `${widgetSelector} .elementor-swiper-button-prev` : `${widgetSelector} .elementor-swiper-button-next`
				};
				swiperOptions.on.beforeInit = () => {
					this.a11ySetSlidesAriaLabels();
				};
				return swiperOptions;
			}
			onInit(...args) {
				var _superprop_getOnInit = () => super.onInit;
				var _this = this;
				return _asyncToGenerator(function* () {
					_superprop_getOnInit().call(_this, ...args);
					_this.ranElementHandlers = false;
				})();
			}
			handleElementHandlers() {
				if (this.ranElementHandlers || !this.swiper) return;
				runElementHandlers(Array.from(this.swiper.slides).slice(this.swiper.activeIndex - 1, this.swiper.slides.length));
				this.ranElementHandlers = true;
			}
			a11ySetSlidesAriaLabels() {
				const slides = Array.from(this.elements.$slides);
				slides.forEach((slide, index) => {
					slide.setAttribute("aria-label", `${parseInt(index + 1)} ${(0, _wordpress_i18n.__)("of", "elementor-pro")} ${slides.length}`);
				});
			}
		};
	}));
	//#endregion
	//#region assets/dev/js/frontend/utils/ajax-helper.js
	var AjaxHelper;
	var init_ajax_helper = __esmMin((() => {
		AjaxHelper = class {
			addLoadingAnimationOverlay(elementId) {
				const widget = document.querySelector(`.elementor-element-${elementId}`);
				if (!widget) return;
				widget.classList.add("e-loading-overlay");
			}
			removeLoadingAnimationOverlay(elementId) {
				const widget = document.querySelector(`.elementor-element-${elementId}`);
				if (!widget) return;
				widget.classList.remove("e-loading-overlay");
			}
		};
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/frontend/handlers/ajax-pagination.js
	var ajax_pagination_exports = /* @__PURE__ */ __exportAll({ default: () => AjaxPagination });
	var AjaxPagination;
	var init_ajax_pagination = __esmMin((() => {
		init_ajax_helper();
		init_run_element_handlers();
		AjaxPagination = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return { selectors: {
					links: "a.page-numbers:not(.current)",
					widgetContainer: ".elementor-widget-container",
					postWrapperTag: ".e-loop-item"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					links: this.$element[0].querySelectorAll(selectors.links),
					widgetContainer: this.$element[0].querySelector(selectors.widgetContainer)
				};
			}
			bindEvents() {
				super.bindEvents();
				this.linksEventListeners();
			}
			linksEventListeners() {
				if (!this.elements.links.length) return;
				if ("ajax" !== this.getElementSettings("pagination_load_type")) return;
				this.elements.links.forEach((link) => {
					link.addEventListener("click", (event) => {
						this.handleLinkClick(event);
					});
				});
			}
			handleLinkClick(event) {
				event.preventDefault();
				if (this.isLoading) return;
				this.removeLinksListeners();
				this.handleUiBeforeLoading();
				const nextPageUrl = event === null || event === void 0 ? void 0 : event.target.getAttribute("href");
				this.updateURLQueryString(nextPageUrl);
				return fetch(nextPageUrl).then((response) => response.text()).then((html) => {
					const doc = new DOMParser().parseFromString(html, "text/html");
					this.handleSuccessFetch(doc);
				});
			}
			removeLinksListeners() {
				if (!this.elements.links.length) return;
				this.elements.links.forEach((link) => {
					link.removeEventListener("click", this.handleLinkClick);
				});
			}
			updateURLQueryString(nextPageUrl) {
				const currentUrl = new URL(window.location.href);
				const currentParams = currentUrl.searchParams;
				const targetParams = new URL(nextPageUrl).searchParams;
				targetParams.forEach((value, key) => {
					currentParams.set(key, value);
				});
				if (!targetParams.has("e-page-" + this.elementId)) currentParams.delete("e-page-" + this.elementId);
				history.pushState(null, "", currentUrl.href);
			}
			handleUiBeforeLoading() {
				this.setLoading(true);
				this.ajaxHelper.addLoadingAnimationOverlay(this.elementId);
				this.maybeScrollToTop();
			}
			setLoading(loadng) {
				this.isLoading = loadng;
			}
			maybeScrollToTop() {
				if ("yes" !== this.getElementSettings("auto_scroll")) return;
				const widget = document.querySelector(`.elementor-element-${this.elementId}`);
				if (!widget) return;
				widget.scrollIntoView({ behavior: "smooth" });
			}
			handleUiAfterLoading() {
				this.setLoading(false);
				this.ajaxHelper.removeLoadingAnimationOverlay(this.elementId);
			}
			handleSuccessFetch(result) {
				this.handleUiAfterLoading();
				const selectors = this.getSettings("selectors");
				const newWidgetContainer = result.querySelector(`[data-id="${this.elementId}"] ${selectors.widgetContainer}`);
				const existingWidgetContainer = this.elements.widgetContainer;
				this.$element[0].replaceChild(newWidgetContainer, existingWidgetContainer);
				this.afterInsertPosts();
			}
			afterInsertPosts() {
				const selectors = this.getSettings("selectors");
				const postsElements = document.querySelectorAll(`[data-id="${this.elementId}"] ${selectors.postWrapperTag}`);
				elementorFrontend.elementsHandler.runReadyTrigger(this.$element[0]);
				runElementHandlers(postsElements);
				if (ElementorProFrontendConfig.settings.lazy_load_background_images) document.dispatchEvent(new Event("elementor/lazyload/observe"));
			}
			onInit() {
				super.onInit();
				this.setLoading(false);
				this.elementId = this.getID();
				this.ajaxHelper = new AjaxHelper();
			}
		};
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/frontend/frontend.js
	var frontend_default$5 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			[
				"post",
				"product",
				"post_taxonomy",
				"product_taxonomy"
			].forEach((skinName) => {
				elementorFrontend.elementsHandler.attachHandler("loop-grid", () => __vitePreload(() => Promise.resolve().then(() => (init_load_more(), load_more_exports)), void 0), skinName);
				elementorFrontend.elementsHandler.attachHandler("loop-grid", () => __vitePreload(() => Promise.resolve().then(() => (init_loop(), loop_exports)), void 0), skinName);
				elementorFrontend.elementsHandler.attachHandler("loop-carousel", () => __vitePreload(() => Promise.resolve().then(() => (init_loop(), loop_exports)), void 0), skinName);
				elementorFrontend.elementsHandler.attachHandler("loop-carousel", () => __vitePreload(() => Promise.resolve().then(() => (init_loop_carousel(), loop_carousel_exports)), void 0), skinName);
				elementorFrontend.elementsHandler.attachHandler("loop-grid", () => __vitePreload(() => Promise.resolve().then(() => (init_ajax_pagination(), ajax_pagination_exports)), void 0), skinName);
			});
		}
	};
	//#endregion
	//#region modules/mega-menu/assets/js/frontend/utils.js
	function isMenuInDropdownMode(elementSettings) {
		if ("dropdown" === elementSettings.item_layout) return true;
		const activeBreakpointsList = elementorFrontend.breakpoints.getActiveBreakpointsList({ withDesktop: true });
		const breakpointIndex = activeBreakpointsList.indexOf(elementSettings.breakpoint_selector);
		return activeBreakpointsList.indexOf(elementorFrontend.getCurrentDeviceMode()) <= breakpointIndex;
	}
	var init_utils = __esmMin((() => {}));
	//#endregion
	//#region assets/dev/js/frontend/utils/flex-horizontal-scroll.js
	function changeScrollStatus(element, event) {
		if ("mousedown" === event.type) {
			element.classList.add("e-scroll");
			element.dataset.pageX = event.pageX;
		} else {
			element.classList.remove("e-scroll", "e-scroll-active");
			element.dataset.pageX = "";
		}
	}
	function setHorizontalTitleScrollValues(element, horizontalScrollStatus, event) {
		const isActiveScroll = element.classList.contains("e-scroll");
		const isHorizontalScrollActive = "enable" === horizontalScrollStatus;
		const headingContentIsWiderThanWrapper = element.scrollWidth > element.clientWidth;
		if (!isActiveScroll || !isHorizontalScrollActive || !headingContentIsWiderThanWrapper) return;
		event.preventDefault();
		const previousPositionX = parseFloat(element.dataset.pageX);
		const mouseMoveX = event.pageX - previousPositionX;
		const maximumScrollValue = 5;
		const stepLimit = 20;
		let toScrollDistanceX = 0;
		if (stepLimit < mouseMoveX) toScrollDistanceX = maximumScrollValue;
		else if (stepLimit * -1 > mouseMoveX) toScrollDistanceX = -1 * maximumScrollValue;
		else toScrollDistanceX = mouseMoveX;
		element.scrollLeft = element.scrollLeft - toScrollDistanceX;
		element.classList.add("e-scroll-active");
	}
	function setHorizontalScrollAlignment({ element, direction, justifyCSSVariable, horizontalScrollStatus }) {
		if (!element) return;
		if (isHorizontalScroll(element, horizontalScrollStatus)) initialScrollPosition(element, direction, justifyCSSVariable);
		else element.style.setProperty(justifyCSSVariable, "");
	}
	function isHorizontalScroll(element, horizontalScrollStatus) {
		return element.clientWidth < getChildrenWidth(element.children) && "enable" === horizontalScrollStatus;
	}
	function getChildrenWidth(children) {
		let totalWidth = 0;
		const parentContainer = children[0].parentNode;
		const computedStyles = getComputedStyle(parentContainer);
		const gap = parseFloat(computedStyles.gap) || 0;
		for (let i = 0; i < children.length; i++) totalWidth += children[i].offsetWidth + gap;
		return totalWidth;
	}
	function initialScrollPosition(element, direction, justifyCSSVariable) {
		const isRTL = elementorFrontend.config.is_rtl;
		switch (direction) {
			case "end":
				element.style.setProperty(justifyCSSVariable, "start");
				element.scrollLeft = isRTL ? -1 * getChildrenWidth(element.children) : getChildrenWidth(element.children);
				break;
			default:
				element.style.setProperty(justifyCSSVariable, "start");
				element.scrollLeft = 0;
		}
	}
	var init_flex_horizontal_scroll = __esmMin((() => {}));
	//#endregion
	//#region modules/mega-menu/assets/js/frontend/handlers/mega-menu.js
	var mega_menu_exports = /* @__PURE__ */ __exportAll({ default: () => MegaMenu });
	var MegaMenu;
	var init_mega_menu = __esmMin((() => {
		init_utils();
		init_anchor_link();
		init_flex_horizontal_scroll();
		MegaMenu = class extends elementorModules.frontend.handlers.Base {
			constructor(...args) {
				super(...args);
				if (elementorFrontend.isEditMode()) this.lifecycleChangeListener = null;
				this.resizeListener = null;
				this.prevMouseY = null;
				this.isKeyboardNavigation = false;
			}
			getDefaultSettings() {
				return {
					selectors: {
						elementorWidgetWrapper: ".elementor-widget-n-menu",
						widgetContainer: ".e-n-menu",
						dropdownMenuToggle: ".e-n-menu-toggle",
						menuWrapper: ".e-n-menu-wrapper",
						headingContainer: ".e-n-menu-heading",
						menuItem: ".e-n-menu-item",
						tabTitle: ".e-n-menu-title",
						tabTitleText: ".e-n-menu-title-text",
						directTabTitle: ":scope > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-title, :scope > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-title",
						tabClickableTitle: ".e-n-menu-title.e-click",
						tabDropdown: ".e-n-menu-dropdown-icon",
						menuContent: ".e-n-menu-content",
						tabContent: ".e-n-menu-content > .e-con, .e-n-menu-heading > .e-con",
						directTabContent: ":scope > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-content > .e-con, :scope > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con, :scope > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-content > .e-con, :scope > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con",
						tabContentBeforeInterlacing: "> .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con, > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con",
						newContainerAfterRepeaterAction: "> .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con, > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-content > .e-con:nth-child(2), > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con, > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-content > .e-con:nth-child(2)",
						anchorLink: ".e-anchor a"
					},
					classes: {
						active: "e-active",
						anchorItem: "e-anchor",
						activeAnchorItem: "e-current"
					},
					dataAttributes: { tabIndex: "data-tab-index" },
					ariaAttributes: {
						titleStateAttribute: "aria-expanded",
						activeTitleSelector: "[aria-expanded=\"true\"]"
					},
					autoExpand: false,
					autoFocus: false,
					showTabFn: "show",
					hideTabFn: "hide",
					toggleSelf: false,
					hidePrevious: true,
					postUrl: "post-url",
					internalUrl: "internal-url"
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$tabContents: this.findElement(selectors.tabContent),
					$widgetContainer: this.findElement(selectors.widgetContainer),
					$dropdownMenuToggle: this.findElement(selectors.dropdownMenuToggle),
					$menuWrapper: this.findElement(selectors.menuWrapper),
					$menuContent: this.findElement(selectors.menuContent),
					$headingContainer: this.findElement(selectors.headingContainer),
					$menuItems: this.findElement(selectors.menuItem),
					$tabTitles: this.findElement(selectors.tabTitle),
					$tabDropdowns: this.findElement(selectors.tabDropdown),
					$anchorLink: this.findElement(selectors.anchorLink),
					$tabContentsBeforeInterlacing: this.findElement(selectors.tabContentBeforeInterlacing)
				};
			}
			getTabTitleFilterSelector(tabIndex) {
				return `[${this.getSettings("dataAttributes").tabIndex}="${tabIndex}"]`;
			}
			getTabIndex(tabTitleElement) {
				return tabTitleElement.getAttribute(this.getSettings("dataAttributes").tabIndex);
			}
			setKeyboardNavigation(event2) {
				if ("Tab" === event2.key) this.isKeyboardNavigation = true;
			}
			dropdownMenuHeightControllerConfig() {
				const selectors = this.getSettings("selectors");
				return {
					elements: {
						$element: this.$element,
						$dropdownMenuContainer: this.$element.find(selectors.menuWrapper),
						$menuToggle: this.$element.find(selectors.dropdownMenuToggle)
					},
					attributes: { menuToggleState: "aria-expanded" },
					settings: {
						dropdownMenuContainerMaxHeight: "auto",
						menuHeightCssVarName: "--n-menu-dropdown-content-box-height"
					}
				};
			}
			handleContentContainerPosition($contentContainer = null) {
				this.resetContentContainersPosition();
				const activeTitleSelector = this.getSettings("ariaAttributes").activeTitleSelector;
				const tabIndex = this.elements.$tabDropdowns.filter(activeTitleSelector).attr("data-tab-index");
				$contentContainer = $contentContainer || this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex));
				if (!$contentContainer.length) return;
				this.setContentContainerAbsolutePosition($contentContainer);
			}
			setContentContainerAbsolutePosition($contentContainer) {
				const elementSettings = this.getElementSettings();
				const isFitToContent = "fit_to_content" === elementSettings.content_width;
				if (isMenuInDropdownMode(elementSettings)) return;
				if (isFitToContent) {
					const direction = elementorFrontend.config.is_rtl ? "right" : "left";
					const menuItemContainerOffset = 0 < this.getMenuItemContainerAbsolutePosition($contentContainer) ? this.getMenuItemContainerAbsolutePosition($contentContainer) : 0;
					$contentContainer.css(direction, menuItemContainerOffset);
				}
				const headingsHeight = this.elements.$headingContainer[0].getBoundingClientRect().height;
				if (this.shouldPositionContentAbove($contentContainer, headingsHeight)) {
					const contentContainerBoundingBox = $contentContainer[0].getBoundingClientRect();
					$contentContainer.css({
						width: isFitToContent ? "max-content" : "",
						"max-width": contentContainerBoundingBox.width
					});
					this.elements.$widgetContainer.addClass("content-above");
				}
			}
			getMenuItemContainerAbsolutePosition($contentContainer) {
				const tabIndex = $contentContainer.data("tab-index");
				const titleBoundingBox = this.elements.$tabDropdowns.filter(this.getTabTitleFilterSelector(tabIndex))[0].closest(this.getSettings("selectors").tabTitle).getBoundingClientRect();
				const contentContainerWidth = $contentContainer[0].clientWidth;
				let menuItemContainerOffset = null;
				switch (this.getElementSettings("content_horizontal_position")) {
					case "left":
						menuItemContainerOffset = this.getLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox);
						break;
					case "right":
						menuItemContainerOffset = this.getRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox);
						break;
					default: menuItemContainerOffset = this.getCenteredContainerOffset(contentContainerWidth, titleBoundingBox);
				}
				return menuItemContainerOffset;
			}
			getCenteredContainerOffset(contentContainerWidth, titleBoundingBox) {
				const menuItemContentContainerHalfWidth = contentContainerWidth / 2;
				const bodyWidth = elementorFrontend.elements.$body[0].clientWidth;
				let titleMiddleOffset = this.adjustForScrollbarIfNeeded(titleBoundingBox.left + titleBoundingBox.width / 2);
				if (elementorFrontend.config.is_rtl) titleMiddleOffset = bodyWidth - titleMiddleOffset;
				let offset = titleMiddleOffset - menuItemContentContainerHalfWidth;
				if (titleMiddleOffset + menuItemContentContainerHalfWidth > bodyWidth) offset = bodyWidth - contentContainerWidth;
				else if (menuItemContentContainerHalfWidth > titleMiddleOffset) offset = 0;
				return offset;
			}
			getLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
				return elementorFrontend.config.is_rtl ? this.getRtlLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox) : this.getLtrLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox);
			}
			getRtlLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
				const bodyWidth = elementorFrontend.elements.$body[0].clientWidth;
				let offset = bodyWidth - this.adjustForScrollbarIfNeeded(titleBoundingBox.left) - contentContainerWidth;
				if (-offset + contentContainerWidth > bodyWidth) offset = 0;
				return offset;
			}
			getLtrLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
				let offset = this.adjustForScrollbarIfNeeded(titleBoundingBox.left);
				offset = this.adjustStartOffsetToViewport(offset, contentContainerWidth);
				return offset;
			}
			getRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
				return elementorFrontend.config.is_rtl ? this.getRtlRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox) : this.getLtrRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox);
			}
			getRtlRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
				let offset = elementorFrontend.elements.$body[0].clientWidth - this.adjustForScrollbarIfNeeded(titleBoundingBox.right);
				offset = this.adjustStartOffsetToViewport(offset, contentContainerWidth);
				return offset;
			}
			/**
			* If the content container doesn't fit in the viewport, align its right edge with the viewport's right edge.
			*
			* @param {number} offset
			* @param {number} contentContainerWidth
			*/
			adjustStartOffsetToViewport(offset, contentContainerWidth) {
				const bodyWidth = elementorFrontend.elements.$body[0].clientWidth;
				if (offset + contentContainerWidth > bodyWidth) offset = bodyWidth - contentContainerWidth;
				return offset;
			}
			getLtrRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
				return contentContainerWidth > titleBoundingBox.right ? 0 : titleBoundingBox.right - contentContainerWidth;
			}
			adjustForScrollbarIfNeeded(offset) {
				if (elementorFrontend.config.is_rtl && elementorFrontend.isEditMode()) {
					const scrollbarWidth = window.innerWidth - elementorFrontend.elements.$body[0].clientWidth;
					offset -= scrollbarWidth;
				}
				return offset;
			}
			getMenuContainerOffset() {
				const menuContainerBoundingBox = this.elements.$widgetContainer[0].getBoundingClientRect();
				return elementorFrontend.config.is_rtl ? this.getMenuContainerOffsetRtl(menuContainerBoundingBox) : menuContainerBoundingBox.left;
			}
			getMenuContainerOffsetRtl(menuContainerBoundingBox) {
				const bodyWidth = elementorFrontend.elements.$body[0].clientWidth;
				let menuContainerOffset = bodyWidth - menuContainerBoundingBox.right;
				if (elementorFrontend.isEditMode()) {
					const scrollbarWidth = window.innerWidth - bodyWidth;
					menuContainerOffset += scrollbarWidth;
				}
				return menuContainerOffset;
			}
			resetContentContainersPosition() {
				this.elements.$tabContents.css({
					left: "",
					right: "",
					bottom: "",
					position: "var(--position)",
					"max-width": "",
					width: "var(--width)"
				});
				this.elements.$widgetContainer.removeClass("content-above");
			}
			getTabContentFilterSelector(tabIndex) {
				return `[data-tab-index="${tabIndex}"]`;
			}
			isActiveTab(tabIndex) {
				return "true" === this.elements.$tabDropdowns.filter("[data-tab-index=\"" + tabIndex + "\"]").attr(this.getSettings("ariaAttributes").titleStateAttribute);
			}
			activateDefaultTab() {
				const settings = this.getSettings();
				const defaultActiveTab = this.getEditSettings("activeItemIndex") || 1;
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
				this.elements.$widgetContainer.addClass("e-activated");
			}
			activateTab(tabIndex) {
				const settings = this.getSettings();
				const activeClass = settings.classes.active;
				const childMenuDropdownSelector = `.elementor-element-${this.getID()} .e-n-menu .e-n-menu .e-n-menu-dropdown-icon`;
				const childMenuContentSelector = `.elementor-element-${this.getID()} .e-n-menu .e-n-menu .e-n-menu-content > .e-con`;
				const $requestedTitle = this.elements.$tabDropdowns.filter(this.getTabTitleFilterSelector(tabIndex)).not(childMenuDropdownSelector);
				const animationDuration = "show" === settings.showTabFn ? 0 : 400;
				const $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex)).not(childMenuContentSelector);
				this.addAnimationToContentIfNeeded(tabIndex);
				$requestedContent[settings.showTabFn](animationDuration, () => this.onShowTabContent($requestedContent));
				$requestedTitle.attr(this.getTitleActivationAttributes());
				$requestedTitle.prev(".e-n-menu-title-container").find("a").attr(this.getTitleActivationAttributes("link"));
				$requestedContent.addClass(activeClass).parent().addClass(activeClass);
				$requestedContent.css({ display: "var(--display)" });
				$requestedContent.removeAttr("display");
				if (elementorFrontend.isEditMode() && !!$requestedContent.length) this.activeContainerWidthListener($requestedContent);
				this.menuHeightController.reassignMenuHeight($requestedContent);
			}
			deactivateActiveTab() {
				var _a;
				const settings = this.getSettings();
				const activeClass = settings.classes.active;
				const activeTitleFilter = settings.ariaAttributes.activeTitleSelector;
				const activeContentFilter = "." + activeClass;
				const $activeTitle = this.elements.$tabDropdowns.filter(activeTitleFilter);
				const $activeContent = this.elements.$tabContents.filter(activeContentFilter);
				this.setTabDeactivationAttributes($activeTitle);
				this.elements.$menuContent.removeClass(activeClass);
				$activeContent.removeClass(activeClass);
				$activeContent[settings.hideTabFn](0, () => this.onHideTabContent($activeContent));
				this.removeAnimationFromContentIfNeeded();
				if (elementorFrontend.isEditMode() && !!$activeContent.length) (_a = this.observedContainer) == null || _a.unobserve($activeContent[0]);
				this.menuHeightController.resetMenuHeight($activeContent);
				this.clickInProgress = true;
			}
			getTitleActivationAttributes(elementType = "tab") {
				const titleAttributes = {};
				if ("tab" === elementType) titleAttributes["aria-expanded"] = "true";
				return titleAttributes;
			}
			setTabDeactivationAttributes($activeTitle) {
				const titleStateAttribute = this.getSettings("ariaAttributes").titleStateAttribute;
				$activeTitle.attr(`${titleStateAttribute}`, "false");
			}
			shouldPositionContentAbove($contentContainer, offset = 0) {
				const contentDimensions = $contentContainer[0].getBoundingClientRect();
				return this.isContentShorterThanItsTopOffset(contentDimensions, offset) && this.isContentTallerThanItsBottomOffset(contentDimensions);
			}
			isContentShorterThanItsTopOffset(contentDimensions, offset) {
				return contentDimensions.height < contentDimensions.top - offset;
			}
			isContentTallerThanItsBottomOffset(contentDimensions) {
				return window.innerHeight - contentDimensions.top < contentDimensions.height;
			}
			onShowTabContent($requestedContent) {
				this.handleContentContainerPosition($requestedContent);
				elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc");
				elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate", $requestedContent);
				elementorFrontend.elements.$window.trigger("elementor/bg-video/recalc");
			}
			onHideTabContent() {
				if (this.elements.$widgetContainer.hasClass("content-above")) this.resetContentContainersPosition();
			}
			changeActiveTab(tabIndex, fromUser = true, byKeyboard = false) {
				if (this.clickInProgress && elementorFrontend.isEditMode() && !byKeyboard) return;
				const isActiveTab = this.isActiveTab(tabIndex);
				this.deactivateActiveTab();
				if (!isActiveTab || isActiveTab && !fromUser) {
					this.clickInProgress = true;
					this.activateTab(tabIndex);
				}
				setTimeout(() => {
					this.clickInProgress = false;
				});
			}
			changeActiveTabByKeyboard(event2, settings) {
				if (settings.widgetId.toString() !== this.getID().toString()) return;
				if (!settings.titleIndex) {
					this.changeActiveTab("", true, true);
					return;
				}
				const $focusableElement = this.$element.find(`[data-focus-index="${settings.titleIndex}"]`);
				const isLinkElement = "a" === $focusableElement[0].tagName.toLowerCase();
				const dropdownSelector = this.getSettings("selectors.tabDropdown");
				const $tabDropdown = isLinkElement ? $focusableElement.next(dropdownSelector) : $focusableElement;
				const tabIndex = this.getTabIndex($tabDropdown[0]);
				this.changeActiveTab(tabIndex, true, true);
				event2.stopPropagation();
			}
			onTabClick(event2) {
				var _a;
				var _b;
				var _c;
				var _d;
				if (elementorFrontend.isEditMode()) event2.preventDefault();
				const hasNoDropdown = (_b = (_a = event2 == null ? void 0 : event2.currentTarget) == null ? void 0 : _a.classList) == null ? void 0 : _b.contains("link-only");
				const blockMouseClickEvents = !this.isNeedToOpenOnClick() && !this.isKeyboardNavigation;
				if (hasNoDropdown || blockMouseClickEvents) return;
				const selectors = this.getSettings("selectors");
				if (((_d = (_c = event2 == null ? void 0 : event2.target) == null ? void 0 : _c.closest(selectors.elementorWidgetWrapper)) == null ? void 0 : _d.getAttribute("data-id")) !== this.getID().toString()) return;
				const clickedElement = event2 == null ? void 0 : event2.currentTarget;
				const dropdownElement = clickedElement == null ? void 0 : clickedElement.querySelector(selectors.tabDropdown);
				const tabIndex = this.getTabIndex(dropdownElement);
				this.changeActiveTab(tabIndex, true);
			}
			bindEvents() {
				this.elements.$tabTitles.on(this.getTabEvents());
				this.elements.$dropdownMenuToggle.on("click", this.onClickToggleDropdownMenu.bind(this));
				this.elements.$tabContents.on(this.getContentEvents());
				this.elements.$menuContent.on(this.getContentEvents());
				this.elements.$headingContainer.on(this.getHeadingEvents());
				elementorFrontend.addListenerOnce(this.getModelCID(), "scroll", elementorFrontend.debounce(this.menuHeightController.reassignMobileMenuHeight.bind(this.menuHeightController), 250));
				elementorFrontend.elements.$window.on("elementor/nested-tabs/activate", this.reInitSwipers);
				elementorFrontend.elements.$window.on("elementor/nested-elements/activate-by-keyboard", this.changeActiveTabByKeyboard.bind(this));
				elementorFrontend.elements.$window.on("elementor/mega-menu/dropdown-toggle-by-keyboard", this.onClickToggleDropdownMenuByKeyboard.bind(this));
				elementorFrontend.elements.$window.on("resize", this.resizeEventHandler.bind(this));
				if (elementorFrontend.isEditMode()) {
					this.addChildLifeCycleEventListeners();
					elementorFrontend.elements.$window.on("elementor/dynamic/url_change", this.changeMegaMenuTitleContainerTag.bind(this));
				}
				elementorFrontend.elements.$window.on("elementor/nested-container/atomic-repeater", this.linkContainer.bind(this));
			}
			unbindEvents() {
				this.elements.$tabTitles.off();
				this.elements.$menuContent.off();
				this.elements.$tabContents.off();
				this.elements.$headingContainer.off();
				elementorFrontend.elements.$window.off("resize");
				if (elementorFrontend.isEditMode()) {
					this.removeChildLifeCycleEventListeners();
					elementorFrontend.elements.$window.on("elementor/dynamic/url_change", this.changeMegaMenuTitleContainerTag.bind(this));
				}
				elementorFrontend.elements.$window.off("elementor/nested-tabs/activate", this.reInitSwipers);
				elementorFrontend.elements.$window.off("elementor/nested-elements/activate-by-keyboard", this.changeActiveTabByKeyboard.bind(this));
				elementorFrontend.elements.$window.off("elementor/mega-menu/dropdown-toggle-by-keyboard", this.onClickToggleDropdownMenuByKeyboard.bind(this));
				elementorFrontend.elements.$window.off("resize", this.resizeEventHandler.bind(this));
				elementorFrontend.elements.$window.off("elementor/nested-container/atomic-repeater", this.linkContainer.bind(this));
			}
			/**
			* Fixes issues where Swipers that have been initialized while a tab is not visible are not properly rendered
			* and when switching to the tab the swiper will not respect any of the chosen `autoplay` related settings.
			*
			* This is triggered when switching to a nested tab, looks for Swipers in the tab content and reinitializes them.
			*
			* @param {Object} event   - Incoming event.
			* @param {Object} content - Active nested tab dom element.
			*/
			reInitSwipers(event2, content) {
				const swiperElements = content.querySelectorAll(".swiper");
				for (const element of swiperElements) {
					if (!element.swiper) return;
					element.swiper.initialized = false;
					element.swiper.init();
				}
			}
			resizeEventHandler() {
				this.resizeListener = this.handleContentContainerPosition();
				this.setLayoutType();
				this.setTouchMode();
				this.menuHeightController.reassignMobileMenuHeight();
				this.setScrollPosition();
				const activeTitleSelector = this.getSettings("ariaAttributes").activeTitleSelector;
				const tabIndex = this.elements.$tabDropdowns.filter(activeTitleSelector).attr("data-tab-index");
				const childMenuContentSelector = `.elementor-element-${this.getID()} .e-n-menu .e-n-menu .e-n-menu-content > .e-con`;
				const $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex)).not(childMenuContentSelector);
				this.menuHeightController.resetMenuHeight($requestedContent);
				this.menuHeightController.reassignMenuHeight($requestedContent);
			}
			/**
			* Add Child Lifecycle Event Listeners
			*
			* This method adds event listeners for the elementor/editor/element-rendered and elementor/editor/element-destroyed
			* events. These events are fired when an element is rendered or destroyed in the editor. The callback functions
			* check if the rendered/destroyed element is nested in this mega-menu instance, and if it is, triggers the
			* recalculation of the mega-menu's content containers position.
			*/
			addChildLifeCycleEventListeners() {
				this.lifecycleChangeListener = this.handleContentContainerChildrenChanges.bind(this);
				window.addEventListener("elementor/editor/element-rendered", this.lifecycleChangeListener);
				window.addEventListener("elementor/editor/element-destroyed", this.lifecycleChangeListener);
			}
			removeChildLifeCycleEventListeners() {
				window.removeEventListener("elementor/editor/element-rendered", this.lifecycleChangeListener);
				window.removeEventListener("elementor/editor/element-destroyed", this.lifecycleChangeListener);
			}
			handleContentContainerChildrenChanges(event2) {
				if (!this.isNestedElementRenderedInContentContainer(event2.detail.elementView)) return;
				this.handleContentContainerPosition();
			}
			isNestedElementRenderedInContentContainer(elementView) {
				const elementContainer = elementView == null ? void 0 : elementView.getContainer();
				if (!elementContainer) return false;
				return elementContainer.getParentAncestry().some((parent) => this.getID().toString() === parent.model.get("id").toString());
			}
			getTabEvents() {
				const tabEvents = { click: this.onTabClick.bind(this) };
				return this.isNeedToOpenOnClick() ? tabEvents : this.replaceClickWithHover(tabEvents);
			}
			getContentEvents() {
				return this.isNeedToOpenOnClick() ? {} : {
					mouseleave: this.onMouseLeave.bind(this),
					mousemove: this.trackMousePosition.bind(this)
				};
			}
			isNeedToOpenOnClick() {
				const elementSettings = this.getElementSettings();
				return this.isEdit || this.isMobileDevice() || "hover" !== elementSettings.open_on || "dropdown" === elementSettings.item_layout;
			}
			isMobileDevice() {
				return [
					"mobile",
					"mobile_extra",
					"tablet",
					"tablet_extra"
				].includes(elementorFrontend.getCurrentDeviceMode());
			}
			replaceClickWithHover(tabEvents) {
				tabEvents.mouseenter = this.onMouseTitleEnter.bind(this);
				tabEvents.mouseleave = this.onMouseLeave.bind(this);
				tabEvents.keyup = this.setKeyboardNavigation.bind(this);
				return tabEvents;
			}
			onMouseTitleEnter(event2) {
				var _a;
				event2.preventDefault();
				const settings = this.getSettings();
				const currentTarget = event2 == null ? void 0 : event2.currentTarget;
				const currentTargetWidgetId = (_a = currentTarget == null ? void 0 : currentTarget.closest(settings.selectors.elementorWidgetWrapper)) == null ? void 0 : _a.getAttribute("data-id");
				if (this.$element[0].getAttribute("data-id") !== currentTargetWidgetId) return;
				const titleStateAttribute = settings.ariaAttributes.titleStateAttribute;
				const dropdownSelector = settings.selectors.tabDropdown;
				const activeDropdownElement = currentTarget == null ? void 0 : currentTarget.querySelector(dropdownSelector);
				if ("true" === (activeDropdownElement == null ? void 0 : activeDropdownElement.getAttribute(titleStateAttribute))) return;
				const tabIndex = activeDropdownElement == null ? void 0 : activeDropdownElement.getAttribute("data-tab-index");
				this.changeActiveTab(tabIndex, true);
			}
			onClickToggleDropdownMenu(show) {
				this.elements.$widgetContainer.attr("data-layout", "dropdown");
				const titleStateAttribute = this.getSettings("ariaAttributes").titleStateAttribute;
				const isDropdownVisible = "true" === this.elements.$dropdownMenuToggle.attr(titleStateAttribute);
				if ("boolean" !== typeof show) show = !isDropdownVisible;
				const activeTabTitleValue = show ? "true" : "false";
				this.elements.$dropdownMenuToggle.attr(titleStateAttribute, activeTabTitleValue);
				elementorFrontend.utils.events.dispatch(window, "elementor-pro/mega-menu/dropdown-open");
				this.menuHeightController.reassignMobileMenuHeight();
			}
			onClickOutsideDropdownMenu(event2) {
				var _a;
				var _b;
				var _c;
				if (!this.isNeedToOpenOnClick()) return;
				const settings = this.getSettings();
				const selectors = settings.selectors;
				const widgetWrapper = `.elementor-element-${this.getID()}`;
				const activeContentFilter = `> .e-con.${settings.classes.active}`;
				const isMenuDropdownsClosed = 0 === this.elements.$menuContent.find(activeContentFilter).length;
				const isElementRemovedFromDOM = elementorFrontend.isEditMode() && !document.body.contains(event2 == null ? void 0 : event2.target);
				const isClickedInsideCurrentMenu = !!((_a = event2 == null ? void 0 : event2.target) == null ? void 0 : _a.closest(`${widgetWrapper} ${selectors.widgetContainer}`));
				if ((_c = (_b = event2 == null ? void 0 : event2.target) == null ? void 0 : _b.classList) == null ? void 0 : _c.contains(selectors.menuContent.replace(".", ""))) {
					this.deactivateActiveTab();
					return;
				}
				if (isMenuDropdownsClosed || isClickedInsideCurrentMenu || isElementRemovedFromDOM) return;
				this.deactivateActiveTab();
			}
			onClickToggleDropdownMenuByKeyboard(event2, settings) {
				if (settings.widgetId.toString() !== this.getID().toString()) return;
				this.onClickToggleDropdownMenu(settings.show);
			}
			addAnimationToContentIfNeeded(tabIndex) {
				const openAnimation = this.getElementSettings("open_animation");
				if ("none" === openAnimation || "" === openAnimation) return;
				this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex)).addClass(`animated ${openAnimation}`);
			}
			removeAnimationFromContentIfNeeded() {
				const openAnimation = this.getElementSettings("open_animation");
				if ("none" === openAnimation || "" === openAnimation) return;
				this.elements.$tabContents.removeClass(`animated ${openAnimation}`);
			}
			/**
			* Store the current Y-coordinate of the mouse cursor.
			*
			* @param {Event} event - The mouse event object.
			*/
			trackMousePosition(event2) {
				this.prevMouseY = event2 == null ? void 0 : event2.clientY;
			}
			/**
			* Check if the menu content is currently hovered.
			*
			* @return {boolean} - True if menu content is hovered, otherwise false.
			*/
			isMenuContentHovered() {
				const settings = this.getSettings();
				return this.$element.find(`${settings.selectors.menuContent}:hover`).length > 0;
			}
			isCursorInBetweenMenuTitleAndContent(event2) {
				var _a;
				var _b;
				var _c;
				const settings = this.getSettings();
				const selectors = settings.selectors;
				const currentElement = event2 == null ? void 0 : event2.currentTarget;
				const activeContent = (_a = currentElement == null ? void 0 : currentElement.closest(selectors.menuItem)) == null ? void 0 : _a.querySelector(selectors.menuContent);
				const isMouseLeavingTabTitle = (_b = currentElement.classList) == null ? void 0 : _b.contains(selectors.tabTitle.replace(".", ""));
				const hasActiveTabTitle = (_c = activeContent == null ? void 0 : activeContent.classList) == null ? void 0 : _c.contains(settings.classes.active);
				if (!isMouseLeavingTabTitle || !hasActiveTabTitle) return false;
				const titleBoundingClientRect = currentElement.getBoundingClientRect();
				const contentBoundingClientRect = activeContent.getBoundingClientRect();
				const mouseY = event2.clientY;
				return titleBoundingClientRect.bottom <= contentBoundingClientRect.top ? mouseY >= titleBoundingClientRect.bottom && mouseY < contentBoundingClientRect.top : mouseY <= titleBoundingClientRect.top && mouseY > contentBoundingClientRect.bottom;
			}
			/**
			* Determines whether the cursor moved sideways or downwards.
			*
			* @param {Event} event - The mouse event object.
			* @return {boolean} - True if the cursor moved sideways or downwards, otherwise false.
			*/
			didCursorMoveSidewaysOrDown(event2) {
				return this.prevMouseY !== null && (event2 == null ? void 0 : event2.clientY) >= this.prevMouseY;
			}
			/**
			* Check whether the dropdown menu should remain open based on hover and cursor movement.
			*
			* @param {boolean} isMouseLeavingTabContent - True if the mouse is leaving the tab content.
			* @param {Event}   event                    - The mouse event object.
			* @return {boolean} - True if dropdown should be considered as hovered, otherwise false.
			*/
			isHoveredDropdownMenu(isMouseLeavingTabContent, event2) {
				if (isMouseLeavingTabContent && this.didCursorMoveSidewaysOrDown(event2)) return false;
				return this.isMenuContentHovered();
			}
			/**
			* Handle the event when the mouse leaves the dropdown.
			*
			* @param {Event} event - The mouse event object.
			*/
			onMouseLeave(event2) {
				var _a;
				var _b;
				event2.preventDefault();
				const isMouseLeavingTabContent = (_b = (_a = event2 == null ? void 0 : event2.currentTarget) == null ? void 0 : _a.classList) == null ? void 0 : _b.contains("e-con");
				if (!this.isHoveredDropdownMenu(isMouseLeavingTabContent, event2) && !this.isCursorInBetweenMenuTitleAndContent(event2)) this.deactivateActiveTab();
			}
			onInit(...args) {
				this.menuHeightController = new elementorProFrontend.utils.DropdownMenuHeightController(this.dropdownMenuHeightControllerConfig());
				super.onInit(...args);
				if (this.getSettings("autoExpand")) this.activateDefaultTab();
				setHorizontalScrollAlignment(this.getHorizontalScrollingSettings());
				this.setTouchMode();
				if (!elementorFrontend.isEditMode()) {
					const classes = this.getSettings("classes");
					this.anchorLinks = new AnchorLinks(this.elements.$anchorLink, classes);
					this.anchorLinks.initialize();
					elementorFrontend.elements.$window.on("elementor/dynamic/url_change", this.changeMegaMenuTitleContainerTag.bind(this));
				}
				this.menuToggleVisibilityListener(this.elements.$dropdownMenuToggle);
				this.setScrollPosition();
				this.onClickOutsideDropdownMenu = this.onClickOutsideDropdownMenu.bind(this);
				document.addEventListener("click", this.onClickOutsideDropdownMenu);
				this.clickInProgress = false;
			}
			onDestroy() {
				document.removeEventListener("click", this.onClickOutsideDropdownMenu);
				elementorFrontend.elements.$window.off("elementor/dynamic/url_change");
			}
			setScrollPosition() {
				setHorizontalScrollAlignment({
					element: this.elements.$headingContainer[0],
					direction: this.getItemPosition(),
					justifyCSSVariable: "--n-menu-heading-justify-content",
					horizontalScrollStatus: this.getHorizontalScrollSetting()
				});
			}
			getPropsThatTriggerContentPositionCalculations() {
				return [
					"content_horizontal_position",
					"content_position",
					"item_position_horizontal",
					"content_width",
					"item_layout"
				];
			}
			activeContainerWidthListener($activeContainer) {
				let previousWidth = 0;
				this.observedContainer = new ResizeObserver((activeContainer) => {
					var _a;
					const currentWidth = (_a = activeContainer[0].borderBoxSize) == null ? void 0 : _a[0].inlineSize;
					if (!!currentWidth && currentWidth !== previousWidth) {
						previousWidth = currentWidth;
						if (0 !== previousWidth) this.handleContentContainerPosition();
					}
				});
				this.observedContainer.observe($activeContainer[0]);
			}
			menuToggleVisibilityListener($menuToggle) {
				let previousWidth;
				this.observedContainer = new ResizeObserver((menuToggle) => {
					var _a;
					const currentWidth = (_a = menuToggle[0].borderBoxSize) == null ? void 0 : _a[0].inlineSize;
					if (currentWidth !== previousWidth) {
						previousWidth = currentWidth;
						this.setLayoutType();
					}
				});
				this.observedContainer.observe($menuToggle[0]);
			}
			onElementChange(propertyName) {
				if (this.getPropsThatTriggerContentPositionCalculations().includes(propertyName)) this.handleContentContainerPosition();
				this.setLayoutType();
			}
			onEditSettingsChange(propertyName, value) {
				if (this.getSettings().autoFocus && "activeItemIndex" === propertyName) this.changeActiveTab(value, false);
				this.setLayoutType();
			}
			/**
			* Sets the layout type as a data attribute, so that it can be use for the responsive or dropdown menu styling.
			*
			* Originally this styling was handled by the distinction between the heading and the content styling elements.
			* Since we removed the title duplication, we needed another way to distinguish between the horizontal and the dropdown styling.
			*/
			setLayoutType() {
				const layoutType = "none" === this.elements.$dropdownMenuToggle.css("display") ? "horizontal" : "dropdown";
				this.elements.$widgetContainer.attr("data-layout", layoutType);
			}
			getHeadingEvents() {
				const navigationWrapper = this.elements.$headingContainer[0];
				return {
					mousedown: this.changeScrollStatusAndDispatch.bind(this, navigationWrapper),
					mouseup: this.changeScrollStatusAndDispatch.bind(this, navigationWrapper),
					mouseleave: this.changeScrollStatusAndDispatch.bind(this, navigationWrapper),
					mousemove: this.setHorizontalTitleScrollValuesAndDispatch.bind(this, navigationWrapper)
				};
			}
			getHorizontalScrollSetting() {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "horizontal_scroll", "", currentDevice);
			}
			getItemPosition() {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "item_position_horizontal", "", currentDevice);
			}
			changeScrollStatusAndDispatch(navigationWrapper, event2) {
				changeScrollStatus(navigationWrapper, event2);
				elementorFrontend.elements.$window.trigger("elementor-pro/mega-menu/heading-mouse-event");
			}
			setHorizontalTitleScrollValuesAndDispatch(navigationWrapper, event2) {
				setHorizontalTitleScrollValues(navigationWrapper, this.getHorizontalScrollSetting(), event2);
				elementorFrontend.elements.$window.trigger("elementor-pro/mega-menu/heading-mouse-event");
			}
			linkContainer(event2) {
				const { container } = event2.detail, id = container.model.get("id"), currentId = String(this.$element.data("id")), view = container.view.$el;
				if (id === currentId) {
					this.updateIndexValues(view);
					this.updateListeners(view);
				}
			}
			updateIndexValues(view) {
				const { selectors: { directTabTitle, directTabContent } } = this.getDefaultSettings(), currentMenu = view[0], tabsContents = currentMenu.querySelectorAll(directTabContent), tabTitles = currentMenu.querySelectorAll(directTabTitle), settings = this.getSettings(), itemIdBase = tabTitles[0].getAttribute("id").slice(0, -1);
				tabTitles.forEach((element, index) => {
					var _a;
					var _b;
					var _c;
					var _d;
					var _e;
					var _f;
					var _g;
					const newIndex = index + 1;
					const updatedTabID = itemIdBase + newIndex;
					const updatedContainerID = updatedTabID.replace("e-n-menu-title-", "e-n-menu-content-");
					const updatedTabDropdownID = updatedTabID.replace("e-n-menu-title-", "e-n-menu-dropdown-icon-");
					element.setAttribute("id", updatedTabID);
					(_a = element.querySelector(settings.selectors.tabDropdown)) == null || _a.setAttribute("data-tab-index", newIndex);
					(_b = element.querySelector(settings.selectors.tabDropdown)) == null || _b.setAttribute("id", updatedTabDropdownID);
					(_c = element.querySelector(settings.selectors.tabDropdown)) == null || _c.setAttribute("aria-controls", updatedContainerID);
					(_d = element.querySelector(settings.selectors.tabTitleText)) == null || _d.setAttribute("data-binding-index", newIndex);
					(_e = tabsContents[index]) == null || _e.setAttribute("aria-labelledby", updatedTabDropdownID);
					(_f = tabsContents[index]) == null || _f.setAttribute("data-tab-index", newIndex);
					(_g = tabsContents[index]) == null || _g.setAttribute("id", updatedContainerID);
				});
			}
			updateListeners(view) {
				const { selectors: { tabClickableTitle, tabDropdown, tabContent, tabTitle } } = this.getSettings(), $tabTitles = view.find(tabTitle), $tabClickableTitle = view.find(tabClickableTitle);
				this.elements.$tabTitles = view.find(tabClickableTitle);
				this.elements.$tabDropdowns = view.find(tabDropdown);
				this.elements.$tabContents = view.find(tabContent);
				$tabTitles.off();
				$tabClickableTitle.on(this.getTabEvents());
				this.clickInProgress = false;
			}
			/**
			* Toggle the container tag of the mega menu title.
			* Needs to be places in pro Mega Menu frontend handler
			*
			* @param {Event} event
			* @return {undefined}
			*/
			changeMegaMenuTitleContainerTag(event2) {
				var _a;
				const { element, actionName, value } = event2.detail, elementParent = element.parentNode, closestMenuItemTitle = elementParent.parentNode, newElement = this.maybeCreateNewElement(elementParent, value), elementToUpdate = this.maybeReplaceMenuItemTitleContent(elementParent, newElement, closestMenuItemTitle), currentUrl = ((_a = element.dataset) == null ? void 0 : _a.currentUrl) || null;
				this.maybeUpdateNewElementsHref(value, elementToUpdate);
				this.eCurrentClassHandler(actionName, closestMenuItemTitle, currentUrl === value);
			}
			maybeReplaceMenuItemTitleContent(elementParent, newElement, closestMenuItemTitle) {
				if (!newElement) return elementParent;
				Array.from(elementParent.attributes).forEach((attr) => {
					newElement.setAttribute(attr.name, attr.value);
				});
				if ("A" === newElement.tagName) newElement.classList.add("e-link", "e-focus");
				else if ("DIV" === newElement.tagName) newElement.classList.remove("e-link", "e-focus");
				newElement.innerHTML = elementParent.innerHTML;
				closestMenuItemTitle.replaceChild(newElement, elementParent);
				return newElement;
			}
			maybeCreateNewElement(elementParent, value) {
				if (!value) return document.createElement("div");
				if (value && "DIV" === elementParent.tagName) return document.createElement("a");
			}
			maybeUpdateNewElementsHref(value, newElement) {
				if (value) newElement.setAttribute("href", value);
				else newElement.removeAttribute("href");
			}
			eCurrentClassHandler(actionName, closestMenuItemTitle, isCurrentUrl) {
				const { classes: { activeAnchorItem: eCurrentClassName }, postUrl, internalUrl } = this.getSettings();
				switch (actionName) {
					case postUrl:
						closestMenuItemTitle.classList.add(eCurrentClassName);
						break;
					case internalUrl:
						if (isCurrentUrl) closestMenuItemTitle.classList.add(eCurrentClassName);
						else closestMenuItemTitle.classList.remove(eCurrentClassName);
						break;
					default:
						if (closestMenuItemTitle.classList.contains(eCurrentClassName) && postUrl !== actionName) closestMenuItemTitle.classList.remove(eCurrentClassName);
						break;
				}
			}
			setTouchMode() {
				const widgetSelector = this.getSettings("selectors").widgetContainer;
				if (elementorFrontend.isEditMode() || "resize" === (event == null ? void 0 : event.type)) {
					const responsiveDevices = [
						"mobile",
						"mobile_extra",
						"tablet",
						"tablet_extra"
					];
					const currentDevice = elementorFrontend.getCurrentDeviceMode();
					if (-1 !== responsiveDevices.indexOf(currentDevice)) {
						this.$element.find(widgetSelector).attr("data-touch-mode", "true");
						return;
					}
				} else if ("ontouchstart" in window) {
					this.$element.find(widgetSelector).attr("data-touch-mode", "true");
					return;
				}
				this.$element.find(widgetSelector).attr("data-touch-mode", "false");
			}
			getTabsDirection() {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "tabs_justify_horizontal", "", currentDevice);
			}
			getHorizontalScrollingSettings() {
				return {
					element: this.elements.$headingContainer[0],
					direction: this.getTabsDirection(),
					justifyCSSVariable: "--n-tabs-heading-justify-content",
					horizontalScrollStatus: this.getHorizontalScrollSetting()
				};
			}
		};
	}));
	//#endregion
	//#region modules/mega-menu/assets/js/frontend/handlers/stretch-menu-item-content.js
	var stretch_menu_item_content_exports = /* @__PURE__ */ __exportAll({ default: () => StretchedMenuItemContent });
	var StretchedMenuItemContent;
	var init_stretch_menu_item_content = __esmMin((() => {
		StretchedMenuItemContent = class extends elementorModules.frontend.handlers.StretchedElement {
			getStretchedClass() {
				return "elementor-widget-n-menu";
			}
			getStretchElementForConfig() {
				return this.$element.find(".e-n-menu-wrapper");
			}
			getStretchElementConfig() {
				const elementConfig = super.getStretchElementConfig();
				elementConfig.cssOutput = "variables";
				return elementConfig;
			}
			bindEvents() {
				super.bindEvents();
				elementorFrontend.addListenerOnce(this.getUniqueHandlerID(), "elementor-pro/mega-menu/dropdown-open", this.stretch);
				elementorFrontend.elements.$window.on("elementor-pro/mega-menu/heading-mouse-event", this.stretch);
			}
			unbindEvents() {
				super.unbindEvents();
				elementorFrontend.removeListeners(this.getUniqueHandlerID(), "elementor-pro/mega-menu/dropdown-open", this.stretch);
				elementorFrontend.elements.$window.off("elementor-pro/mega-menu/heading-mouse-event", this.stretch);
			}
			isStretchSettingEnabled() {
				return true;
			}
			isActive() {
				return true;
			}
		};
	}));
	//#endregion
	//#region modules/mega-menu/assets/js/frontend/handlers/menu-title-keyboard-handler.js
	var menu_title_keyboard_handler_exports = /* @__PURE__ */ __exportAll({ default: () => MenuTitleKeyboardHandler });
	var MenuTitleKeyboardHandler;
	var init_menu_title_keyboard_handler = __esmMin((() => {
		init_focusable_element_selectors();
		init_defineProperty();
		MenuTitleKeyboardHandler = class extends elementorModules.frontend.handlers.Base {
			constructor(..._args) {
				super(..._args);
				_defineProperty(this, "isEditorElementsChanged", false);
			}
			__construct(...args) {
				super.__construct(...args);
				this.focusableElementSelector = focusableElementSelectors();
				this.handleMenuToggleKeydown = this.handleMenuToggleKeydown.bind(this);
			}
			getDefaultSettings() {
				return {
					selectors: {
						widgetInnerWrapper: ".e-n-menu",
						menuItem: ".e-n-menu-item",
						menuItemWrapper: ".e-n-menu-title",
						focusableMenuElement: ".e-focus",
						itemContainer: ".e-n-menu-content > .e-con, .e-n-menu-heading > .e-con",
						menuToggle: ".e-n-menu-toggle",
						directTabTitle: ":scope > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-title,:scope > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-title",
						tabDropdown: ".e-n-menu-dropdown-icon"
					},
					ariaAttributes: {
						titleStateAttribute: "aria-expanded",
						activeTitleSelector: "[aria-expanded=\"true\"]",
						titleControlAttribute: "aria-controls"
					},
					datasets: { titleIndex: "data-focus-index" }
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$menuItemWrappers: this.findElement(selectors.menuItemWrapper),
					$focusableMenuElements: this.findElement(selectors.focusableMenuElement),
					$itemContainers: this.findElement(selectors.itemContainer),
					$focusableContainerElements: this.getFocusableElements(this.findElement(selectors.itemContainer)),
					$menuToggle: this.findElement(selectors.menuToggle)
				};
			}
			getFocusableElements($elements) {
				return $elements.find(this.focusableElementSelector).not("[disabled], [inert], [tabindex=\"-1\"]");
			}
			getTitleIndex(focusableMenuElement) {
				const { titleIndex: indexAttribute } = this.getSettings("datasets");
				return parseInt(focusableMenuElement === null || focusableMenuElement === void 0 ? void 0 : focusableMenuElement.getAttribute(indexAttribute));
			}
			getTitleFilterSelector(titleIndex) {
				const { titleIndex: indexAttribute } = this.getSettings("datasets");
				return `[${indexAttribute}="${titleIndex}"]`;
			}
			getActiveTitleElement() {
				const activeTitleFilter = this.getSettings("ariaAttributes").activeTitleSelector;
				return this.elements.$focusableMenuElements.filter(activeTitleFilter);
			}
			onInit(...args) {
				super.onInit(...args);
				let focusTitleCount = 1;
				this.elements.$focusableMenuElements.each((index, title) => {
					title.setAttribute(this.getSettings("datasets").titleIndex, focusTitleCount++);
				});
			}
			getTitleEvents() {
				return {
					keydown: this.handleTitleKeyboardNavigation.bind(this),
					keyup: this.handeTitleKeyUp.bind(this)
				};
			}
			getContentElementEvents() {
				return { keydown: this.handleContentElementKeyboardNavigation.bind(this) };
			}
			bindEvents() {
				this.elements.$focusableMenuElements.on(this.getTitleEvents());
				this.elements.$focusableContainerElements.on(this.getContentElementEvents());
				elementorFrontend.elements.$window.on("keydown", this.handleMenuToggleKeydown);
				elementorFrontend.elements.$window.on("elementor/nested-container/atomic-repeater", this.linkContainer.bind(this));
			}
			unbindEvents() {
				this.elements.$focusableMenuElements.off(this.getTitleEvents());
				this.elements.$focusableContainerElements.off(this.getContentElementEvents());
				elementorFrontend.elements.$window.off("keydown", this.handleMenuToggleKeydown);
				elementorFrontend.elements.$window.off("elementor/nested-container/atomic-repeater", this.linkContainer.bind(this));
			}
			handleMenuToggleKeydown(event) {
				if ("Escape" !== event.key) return;
				event.preventDefault();
				event.stopPropagation();
				this.closeMenuDropdown();
			}
			handleTitleKeyboardNavigation(event) {
				switch (event.key) {
					case "Tab":
						var _event$currentTarget;
						this.maybeRebindFocusableElements();
						const $menuItemElements = this.elements.$focusableMenuElements;
						const isForward = !event.shiftKey;
						const isLastMenuItemElementForward = isForward && $menuItemElements.last().is(jQuery(event.currentTarget));
						const isFirstMenuItemElementBackwards = !isForward && $menuItemElements.first().is(jQuery(event.currentTarget));
						if (this.isDropdownLayout() && !isLastMenuItemElementForward && !isFirstMenuItemElementBackwards) return;
						const isNotOpenDropdown = !event.currentTarget.getAttribute("aria-expanded") || "false" === ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : _event$currentTarget.getAttribute("aria-expanded"));
						if (isForward && isNotOpenDropdown || isFirstMenuItemElementBackwards) {
							this.closeActiveContentElements();
							this.closeMenuDropdown();
						}
						break;
					case "Home":
					case "End":
						this.handleTitleHomeOrEndKey(event);
						break;
					case "Enter":
					case " ":
						this.handleTitleActivationKey(event);
						break;
					case "Escape":
						this.handleTitleEscapeKey(event);
						break;
				}
			}
			handeTitleKeyUp(event) {
				var _event$currentTarget2;
				if (this.isDropdownLayout()) return true;
				const isTabKey = "Tab" === event.key;
				const isNotOpenDropdown = !event.currentTarget.getAttribute("aria-expanded") || "false" === ((_event$currentTarget2 = event.currentTarget) === null || _event$currentTarget2 === void 0 ? void 0 : _event$currentTarget2.getAttribute("aria-expanded"));
				if (isTabKey && isNotOpenDropdown) this.closeActiveContentElements();
			}
			isDropdownLayout() {
				const selectors = this.getSettings("selectors");
				return "dropdown" === this.$element.find(selectors.widgetInnerWrapper).attr("data-layout");
			}
			closeMenuDropdown() {
				if (!this.isDropdownLayout()) return;
				elementorFrontend.elements.$window.trigger("elementor/mega-menu/dropdown-toggle-by-keyboard", {
					widgetId: this.getID(),
					show: false
				});
			}
			handleTitleHomeOrEndKey(event) {
				event.preventDefault();
				const currentTitleIndex = this.getTitleIndex(event.currentTarget) || 1;
				const numberOfTitles = this.elements.$focusableMenuElements.length;
				const titleIndexUpdated = this.getTitleIndexFocusUpdated(event, currentTitleIndex, numberOfTitles);
				this.setTitleFocus(titleIndexUpdated);
				event.stopPropagation();
			}
			handleTitleActivationKey(event) {
				event.preventDefault();
				if (this.handleTitleLinkEnterOrSpaceEvent(event)) return;
				const titleIndex = this.getTitleIndex(event.currentTarget);
				elementorFrontend.elements.$window.trigger("elementor/nested-elements/activate-by-keyboard", {
					widgetId: this.getID(),
					titleIndex
				});
			}
			setTitleFocus(titleIndexUpdated) {
				this.elements.$focusableMenuElements.filter(this.getTitleFilterSelector(titleIndexUpdated)).trigger("focus");
			}
			handleTitleLinkEnterOrSpaceEvent(event) {
				var _event$currentTarget3;
				const isLinkElement = "a" === (event === null || event === void 0 || (_event$currentTarget3 = event.currentTarget) === null || _event$currentTarget3 === void 0 || (_event$currentTarget3 = _event$currentTarget3.tagName) === null || _event$currentTarget3 === void 0 ? void 0 : _event$currentTarget3.toLowerCase());
				if (!elementorFrontend.isEditMode() && isLinkElement) {
					var _event$currentTarget4;
					event === null || event === void 0 || (_event$currentTarget4 = event.currentTarget) === null || _event$currentTarget4 === void 0 || _event$currentTarget4.click();
					event.stopPropagation();
				}
				return isLinkElement;
			}
			handleTitleEscapeKey(event) {
				event.preventDefault();
				event.stopPropagation();
				if (this.isDropdownLayout()) {
					elementorFrontend.elements.$window.trigger("elementor/mega-menu/dropdown-toggle-by-keyboard", { widgetId: this.getID() });
					this.setFocusToMenuToggle();
				}
				elementorFrontend.elements.$window.trigger("elementor/nested-elements/activate-by-keyboard", { widgetId: this.getID() });
			}
			setFocusToMenuToggle() {
				const selectors = this.getSettings("selectors");
				this.$element.find(selectors.menuToggle).trigger("focus");
			}
			handleContentElementKeyboardNavigation(event) {
				switch (event.key) {
					case "Tab":
						if (!event.shiftKey) this.handleContentElementTabEvents(event);
						break;
					case "Escape":
						event.preventDefault();
						event.stopPropagation();
						this.handleContentElementEscapeEvents(event);
						break;
				}
			}
			maybeRebindFocusableElements() {
				if (!this.isEditorElementsChanged) return;
				this.elements.$focusableContainerElements.off(this.getContentElementEvents());
				this.elements.$focusableContainerElements = this.getFocusableElements(this.elements.$itemContainers);
				this.elements.$focusableContainerElements.on(this.getContentElementEvents());
				this.isEditorElementsChanged = false;
			}
			handleContentElementTabEvents(event) {
				const selectors = this.getSettings("selectors");
				const $currentElement = jQuery(event.currentTarget);
				const containerSelector = selectors.itemContainer;
				const $currentContainer = $currentElement.closest(containerSelector);
				const $lastFocusableElement = this.getFocusableElements($currentContainer).last();
				if (!$currentElement.is($lastFocusableElement)) return;
				if (!this.isDropdownLayout()) this.closeActiveContentElements();
				const menuItemSelector = selectors.menuItem;
				const isLastMenuItem = 0 === $currentContainer.closest(menuItemSelector).next(menuItemSelector).length;
				if (this.isDropdownLayout() && isLastMenuItem) {
					this.closeActiveContentElements();
					this.closeMenuDropdown();
				}
			}
			handleContentElementEscapeEvents() {
				this.getActiveTitleElement().trigger("focus");
				this.closeActiveContentElements();
			}
			closeActiveContentElements() {
				elementorFrontend.elements.$window.trigger("elementor/nested-elements/activate-by-keyboard", { widgetId: this.getID() });
			}
			linkContainer(event) {
				const { container } = event.detail, id = container.model.get("id"), currentId = String(this.$element.data("id")), view = container.view.$el;
				if (id === currentId) {
					this.updateIndexValues(view);
					this.updateListeners(view);
				}
			}
			updateIndexValues(view) {
				const { selectors: { directTabTitle, tabDropdown } } = this.getDefaultSettings(), tabTitles = view[0].querySelectorAll(directTabTitle);
				let focusTitleCount = 1;
				tabTitles.forEach((element) => {
					if (element.querySelector("a")) element.querySelector("a").setAttribute("data-focus-index", focusTitleCount++);
					if (element.querySelector(tabDropdown)) element.querySelector(tabDropdown).setAttribute("data-focus-index", focusTitleCount++);
				});
			}
			updateListeners(view) {
				this.elements.$focusableMenuElements.off();
				const { selectors: { focusableMenuElement, itemContainer } } = this.getSettings();
				this.elements.$focusableMenuElements = view.find(focusableMenuElement);
				this.elements.$itemContainers = view.find(itemContainer);
				this.elements.$focusableMenuElements.on(this.getTitleEvents());
				this.isEditorElementsChanged = true;
			}
		};
	}));
	//#endregion
	//#region modules/mega-menu/assets/js/frontend/frontend.js
	var frontend_default$4 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("mega-menu", [
				() => __vitePreload(() => Promise.resolve().then(() => (init_mega_menu(), mega_menu_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_stretch_menu_item_content(), stretch_menu_item_content_exports)), void 0),
				() => __vitePreload(() => Promise.resolve().then(() => (init_menu_title_keyboard_handler(), menu_title_keyboard_handler_exports)), void 0)
			]);
		}
	};
	//#endregion
	//#region modules/nested-carousel/assets/js/frontend/handlers/nested-carousel.js
	var nested_carousel_exports = /* @__PURE__ */ __exportAll({ default: () => NestedCarousel });
	var NestedCarousel;
	var init_nested_carousel = __esmMin((() => {
		init_run_element_handlers();
		init_asyncToGenerator();
		NestedCarousel = class extends elementorModules.frontend.handlers.CarouselBase {
			getDefaultSettings() {
				const defaultSettings = super.getDefaultSettings();
				defaultSettings.selectors.carousel = ".e-n-carousel";
				defaultSettings.selectors.slidesWrapper = ".e-n-carousel > .swiper-wrapper";
				return defaultSettings;
			}
			getSwiperSettings() {
				const swiperOptions = super.getSwiperSettings();
				const elementSettings = this.getElementSettings();
				const isRtl = elementorFrontend.config.is_rtl;
				const widgetSelector = `.elementor-element-${this.getID()}`;
				if (elementorFrontend.isEditMode()) {
					delete swiperOptions.autoplay;
					swiperOptions.loop = false;
					swiperOptions.noSwipingSelector = ".swiper-slide > .e-con .elementor-element";
				}
				if ("yes" === elementSettings.arrows) swiperOptions.navigation = {
					prevEl: isRtl ? `${widgetSelector} .elementor-swiper-button-next` : `${widgetSelector} .elementor-swiper-button-prev`,
					nextEl: isRtl ? `${widgetSelector} .elementor-swiper-button-prev` : `${widgetSelector} .elementor-swiper-button-next`
				};
				this.applySwipeOptions(swiperOptions);
				return swiperOptions;
			}
			onInit(...args) {
				var _superprop_getOnInit = () => super.onInit;
				var _this = this;
				return _asyncToGenerator(function* () {
					_this.wrapSlideContent();
					_superprop_getOnInit().call(_this, ...args);
					_this.ranElementHandlers = false;
				})();
			}
			initSwiper() {
				var _this2 = this;
				return _asyncToGenerator(function* () {
					const Swiper = elementorFrontend.utils.swiper;
					_this2.swiper = yield new Swiper(_this2.elements.$swiperContainer, _this2.getSwiperSettings());
					_this2.elements.$swiperContainer.data("swiper", _this2.swiper);
				})();
			}
			handleElementHandlers() {
				if (this.ranElementHandlers || !this.swiper) return;
				runElementHandlers(Array.from(this.swiper.slides).filter((slide) => slide.classList.contains(this.swiper.params.slideDuplicateClass)));
				this.ranElementHandlers = true;
			}
			wrapSlideContent() {
				if (!elementorFrontend.isEditMode()) return;
				const settings = this.getSettings();
				const slideContentClass = settings.selectors.slideContent.replace(".", "");
				const $widget = this.$element;
				let index = 1;
				this.findElement(`${settings.selectors.slidesWrapper} > .e-con`).each(function() {
					const $currentContainer = jQuery(this);
					const hasSwiperSlideWrapper = $currentContainer.closest("div").hasClass(slideContentClass);
					const $currentSlide = $widget.find(`${settings.selectors.slidesWrapper} > .${slideContentClass}:nth-child(${index})`);
					if (!hasSwiperSlideWrapper) $currentSlide.append($currentContainer);
					index++;
				});
			}
			togglePauseOnHover(toggleOn) {
				if (elementorFrontend.isEditMode()) return;
				super.togglePauseOnHover(toggleOn);
			}
			getChangeableProperties() {
				return { arrows_position: "arrows_position" };
			}
			applySwipeOptions(swiperOptions) {
				if (!this.isTouchDevice()) swiperOptions.shortSwipes = false;
				else {
					swiperOptions.touchRatio = 1;
					swiperOptions.longSwipesRatio = .3;
					swiperOptions.followFinger = true;
					swiperOptions.threshold = 10;
				}
			}
			isTouchDevice() {
				return elementorFrontend.utils.environment.isTouchDevice;
			}
			linkContainer(event) {
				var _this3 = this;
				return _asyncToGenerator(function* () {
					const { container, index, targetContainer, action: { type } } = event.detail, view = container.view.$el;
					if (container.model.get("id") === _this3.$element.data("id")) {
						const { $slides } = _this3.getDefaultElements();
						let carouselItemWrapper;
						let contentContainer;
						switch (type) {
							case "move":
								[carouselItemWrapper, contentContainer] = _this3.move(view, index, targetContainer, $slides);
								break;
							case "duplicate":
								[carouselItemWrapper, contentContainer] = _this3.duplicate(view, index, targetContainer, $slides);
								break;
							default: break;
						}
						if (void 0 !== carouselItemWrapper) carouselItemWrapper.appendChild(contentContainer);
						_this3.shouldHideNavButtons(view, $slides);
						_this3.updateIndexValues($slides);
						const isSwiperActive = _this3.swiper && !_this3.swiper.destroyed;
						const hasMultipleSlides = $slides.length > 1;
						if (!isSwiperActive && hasMultipleSlides) yield _this3.initSwiper();
						else if (isSwiperActive && !hasMultipleSlides) _this3.swiper.destroy(true);
						_this3.updateListeners();
					}
				})();
			}
			updateListeners() {
				this.swiper.initialized = false;
				this.swiper.init();
			}
			move(view, index, targetContainer, slides) {
				return [slides[index], targetContainer.view.$el[0]];
			}
			duplicate(view, index, targetContainer, slides) {
				return [slides[index + 1], targetContainer.view.$el[0]];
			}
			updateIndexValues($slides) {
				$slides.each((index, element) => {
					const newIndex = index + 1;
					element.setAttribute("data-slide", newIndex);
				});
			}
			bindEvents() {
				super.bindEvents();
				elementorFrontend.elements.$window.on("elementor/nested-container/atomic-repeater", this.linkContainer.bind(this));
			}
			shouldHideNavButtons(view, $slides) {
				var _navButtons$;
				const navButtons = view[0].querySelectorAll(".elementor-swiper-button");
				const shouldHide = 1 === $slides.length;
				if (shouldHide !== ((_navButtons$ = navButtons[0]) === null || _navButtons$ === void 0 ? void 0 : _navButtons$.classList.contains("hide"))) navButtons.forEach((button) => {
					button.classList.toggle("hide", shouldHide);
				});
			}
		};
	}));
	//#endregion
	//#region modules/nested-carousel/assets/js/frontend/frontend.js
	var frontend_default$3 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("nested-carousel", () => __vitePreload(() => Promise.resolve().then(() => (init_nested_carousel(), nested_carousel_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/loop-filter/assets/js/frontend/loop-widgets-store.js
	init_objectSpread2();
	var LoopWidgetsStore = class {
		constructor() {
			this.widgets = {};
		}
		get() {
			return this.widgets;
		}
		getWidget(widgetId) {
			return this.widgets[widgetId];
		}
		setWidget(widgetId, widget) {
			this.widgets[widgetId] = widget;
		}
		unsetWidget(widgetId) {
			delete this.widgets[widgetId];
		}
		getFilters(widgetId) {
			return this.getWidget(widgetId).filters;
		}
		getFilter(widgetId, filterId) {
			return this.getWidget(widgetId).filters[filterId];
		}
		setFilter(widgetId, filterId, filterData) {
			this.getWidget(widgetId).filters[filterId] = filterData;
		}
		unsetFilter(widgetId, filterId) {
			delete this.getWidget(widgetId).filters[filterId];
		}
		getFilterTerms(widgetId, filterId) {
			var _this$getFilter$filte;
			return (_this$getFilter$filte = this.getFilter(widgetId, filterId).filterData.terms) !== null && _this$getFilter$filte !== void 0 ? _this$getFilter$filte : [];
		}
		setFilterTerms(widgetId, filterId, termData) {
			this.getFilter(widgetId, filterId).filterData.terms = termData;
		}
		getConsolidatedFilters(widgetId) {
			return this.getWidget(widgetId).consolidatedFilters;
		}
		setConsolidatedFilters(widgetId, consolidatedFilters) {
			this.getWidget(widgetId).consolidatedFilters = consolidatedFilters;
		}
		/**
		*
		* @param {string} widgetId
		*/
		addWidget(widgetId) {
			this.setWidget(widgetId, {
				filters: {},
				consolidatedFilters: {}
			});
		}
		maybeInitializeWidget(widgetId) {
			if (!!this.getWidget(widgetId)) return;
			this.addWidget(widgetId);
		}
		maybeInitializeFilter(widgetId, filterId) {
			if (!!this.getFilter(widgetId, filterId)) return;
			this.setFilter(widgetId, filterId, { filterData: { terms: [] } });
		}
		/**
		* Consolidates all filters for a loop widget.
		*
		* filters: {
		* 	filter1: { filterType: 'type1', filterData: { selectedTaxonomy: 'taxonomy1', terms: [ 'term1', 'term2' ] } },
		* 	filter2: { filterType: 'type1', filterData: { selectedTaxonomy: 'taxonomy1', terms: [ 'term2' ] } },
		* },
		* consolidatedFilters: {},
		*
		* @param {string} widgetId
		*/
		consolidateFilters(widgetId) {
			const loopWidgetFilters = this.getFilters(widgetId);
			const consolidatedFilters = {};
			for (const filterId in loopWidgetFilters) {
				const filter = loopWidgetFilters[filterId];
				const filterType = filter.filterType;
				const filterData = filter.filterData;
				if (0 === filterData.terms.length) continue;
				if (!consolidatedFilters[filterType]) consolidatedFilters[filterType] = {};
				if (!consolidatedFilters[filterType][filterData.selectedTaxonomy]) consolidatedFilters[filterType][filterData.selectedTaxonomy] = [];
				if (filterData.terms && (!consolidatedFilters[filterType][filterData.selectedTaxonomy].terms || !consolidatedFilters[filterType][filterData.selectedTaxonomy].terms.includes(filterData.terms))) consolidatedFilters[filterType][filterData.selectedTaxonomy] = { terms: filterData.terms === "string" ? [filterData.terms] : filterData.terms };
				if (filterData.logicalJoin && !consolidatedFilters[filterType][filterData.selectedTaxonomy].logicalJoin) {
					var _filterData$logicalJo;
					consolidatedFilters[filterType][filterData.selectedTaxonomy] = _objectSpread2(_objectSpread2({}, consolidatedFilters[filterType][filterData.selectedTaxonomy] || {}), {}, { logicalJoin: (_filterData$logicalJo = filterData.logicalJoin) !== null && _filterData$logicalJo !== void 0 ? _filterData$logicalJo : "AND" });
				}
			}
			this.setConsolidatedFilters(widgetId, consolidatedFilters);
		}
	};
	//#endregion
	//#region modules/loop-filter/assets/js/query-constants.js
	var require_query_constants = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = { queryConstants: {
			AND: {
				separator: {
					decoded: "+",
					fromBrowser: " ",
					encoded: "%2B"
				},
				operator: "AND"
			},
			OR: {
				separator: {
					decoded: "~",
					fromBrowser: "~",
					encoded: "%7C"
				},
				operator: "IN"
			},
			NOT: {
				separator: {
					decoded: "!",
					fromBrowser: "!",
					encoded: "%21"
				},
				operator: "NOT IN"
			},
			DISABLED: {
				separator: {
					decoded: "",
					fromBrowser: "",
					encoded: ""
				},
				operator: "AND"
			}
		} };
	}));
	//#endregion
	//#region modules/loop-filter/assets/js/frontend/frontend-module-base.js
	init_run_element_handlers();
	init_ajax_helper();
	var import_query_constants$1 = require_query_constants();
	var BaseFilterFrontendModule = class extends elementorModules.Module {
		constructor() {
			super();
			this.loopWidgetsStore = new LoopWidgetsStore();
		}
		/**
		* Removes selected filter term from the filter array
		*
		* @param {string} widgetId
		* @param {string} filterId
		* @param {string} filterTerm
		* @param {string} defaultFilter
		*/
		removeFilterFromLoopWidget(widgetId, filterId, filterTerm = "", defaultFilter = "") {
			if (!this.loopWidgetsStore.getWidget(widgetId)) {
				this.loopWidgetsStore.addWidget(widgetId);
				this.refreshLoopWidget(widgetId, filterId);
				return;
			}
			if (filterTerm === defaultFilter) this.loopWidgetsStore.unsetFilter(widgetId, filterId);
			if (filterTerm !== defaultFilter) {
				const newTerms = this.loopWidgetsStore.getFilterTerms(widgetId, filterId).filter(function(e) {
					return e !== filterTerm;
				});
				this.loopWidgetsStore.setFilterTerms(widgetId, filterId, newTerms);
			}
			this.refreshLoopWidget(widgetId, filterId);
		}
		/**
		* Sets the filter data for a loop widget.
		*
		* This function should trigger the following sequence:
		* 1. Update the filter data for the passed ID in the loopElements object by adding new filters to the loopWidgetsStore filters array.
		* 2. Trigger a rerender of the loop widget if refresh is true.
		* 3  Trigger a consolidation of all filters belonging to the passed loop widget ID if refresh is false.
		*   - This should create an object with filter type keys, and for each type, an object of filter IDs, which contain the filter values.
		*   - This should also remove duplicates.
		*
		* @param {string}  widgetId
		* @param {string}  filterId
		* @param {Object}  filter                     new data for this filterId in loopWidgetsStore
		* @param {boolean} refresh
		* @param {string}  multipleFiltersLogicalJoin AND / OR / 'DISABLED' for single filter (default)
		*/
		setFilterDataForLoopWidget(widgetId, filterId, filter, refresh = true, multipleFiltersLogicalJoin = "DISABLED") {
			var _a;
			this.loopWidgetsStore.maybeInitializeWidget(widgetId);
			this.loopWidgetsStore.maybeInitializeFilter(widgetId, filterId);
			const logicalJoin = this.validateMultipleFilterOperator(multipleFiltersLogicalJoin);
			if ("DISABLED" !== logicalJoin) {
				const existingTerms = (_a = this.loopWidgetsStore.getFilterTerms(widgetId, filterId)) != null ? _a : [];
				const newTerms = filter.filterData.terms;
				filter.filterData.terms = [.../* @__PURE__ */ new Set([...existingTerms, ...newTerms])];
				filter.filterData.logicalJoin = logicalJoin;
			}
			this.loopWidgetsStore.setFilter(widgetId, filterId, filter);
			if (refresh) {
				this.refreshLoopWidget(widgetId, filterId);
				return;
			}
			this.loopWidgetsStore.consolidateFilters(widgetId);
		}
		/**
		* Validates the operator values for wp_query.
		* @param {string} operator
		* @return {*|string} 'AND' | 'OR' | 'DISABLED'
		*/
		validateMultipleFilterOperator(operator) {
			if (!operator || !["AND", "OR"].includes(operator)) return "DISABLED";
			return operator;
		}
		/**
		*
		* @return {{}} Query string in object form.
		*/
		getQueryStringInObjectForm() {
			var _a;
			const queryString = {};
			for (const widgetId in this.loopWidgetsStore.get()) {
				const loopWidget = this.loopWidgetsStore.getWidget(widgetId);
				for (const filterType in loopWidget.consolidatedFilters) {
					const filterData = loopWidget.consolidatedFilters[filterType];
					for (const filterName in filterData) {
						const separator = import_query_constants$1.queryConstants[(_a = filterData[filterName].logicalJoin) != null ? _a : "AND"].separator.decoded;
						queryString[`e-filter-${widgetId}-${filterName}`] = Object.values(filterData[filterName].terms).join(separator);
					}
				}
			}
			return queryString;
		}
		/**
		* Updates the URL query string with the current filter values.
		*
		* @param {string} widgetId
		* @param {string} filterId
		*/
		updateURLQueryString(widgetId, filterId) {
			const existingQueryString = new URL(window.location.href).searchParams;
			const queryStringObject = this.getQueryStringInObjectForm();
			const updatedParams = new URLSearchParams();
			existingQueryString.forEach((value, key) => {
				if (!key.startsWith("e-filter")) updatedParams.append(key, value);
				if (key.startsWith("e-page-" + widgetId)) updatedParams.delete(key);
			});
			for (const key in queryStringObject) updatedParams.set(key, queryStringObject[key]);
			let queryString = updatedParams.toString();
			queryString = queryString.replace(new RegExp(`${import_query_constants$1.queryConstants.AND.separator.encoded}`, "g"), import_query_constants$1.queryConstants.AND.separator.decoded);
			queryString = queryString.replace(new RegExp(`${import_query_constants$1.queryConstants.OR.separator.encoded}`, "g"), import_query_constants$1.queryConstants.OR.separator.decoded);
			const helpers = this.getFilterHelperAttributes(filterId);
			if (helpers.pageNum > 1) queryString = queryString ? this.formatQueryString(helpers.baseUrl, queryString) : helpers.baseUrl;
			else queryString = queryString ? `?${queryString}` : location.pathname;
			history.pushState(null, null, queryString);
		}
		/**
		* Formats the query string to remove any duplicate parameters.
		*
		* @param {string} baseURL
		* @param {string} queryString
		* @return {*} deduplicated query string
		*/
		formatQueryString(baseURL, queryString) {
			const baseURLParams = baseURL.includes("?") ? new URLSearchParams(baseURL.split("?")[1]) : new URLSearchParams();
			const inputParams = new URLSearchParams(queryString);
			for (const param of baseURLParams.keys()) if (inputParams.has(param)) inputParams.delete(param);
			for (const excludedVar of ["page", "paged"]) {
				baseURLParams.delete(excludedVar);
				inputParams.delete(excludedVar);
			}
			const mergedParams = new URLSearchParams(baseURLParams.toString());
			for (const [param, value] of inputParams.entries()) mergedParams.append(param, value);
			return baseURL.split("?")[0] + (mergedParams.toString() ? `?${mergedParams.toString()}` : "");
		}
		/**
		*
		* @param {string} filterId
		* @return {{baseUrl: string, pageNum: number}|*|DOMStringMap} Base URL and page number for the loop widget.
		*/
		getFilterHelperAttributes(filterId) {
			const filterWidget = document.querySelector("[data-id=\"" + filterId + "\"]");
			if (!filterWidget) return {
				baseUrl: location.href,
				pageNum: 1
			};
			return filterWidget.querySelector(".e-filter").dataset;
		}
		/**
		* Prepares the data to be sent to the server for the loop widget update.
		*
		* @param {string} widgetId
		* @param {string} filterId
		* @return {{post_id: (*|number), widget_id, pagination_base_url: string, widget_filters: *}} data for loop update
		*/
		prepareLoopUpdateRequestData(widgetId, filterId) {
			const widgetFilters = this.loopWidgetsStore.getConsolidatedFilters(widgetId);
			const helpers = this.getFilterHelperAttributes(filterId);
			const data = {
				post_id: this.getClosestDataElementorId(document.querySelector(`.elementor-element-${widgetId}`)) || elementorFrontend.config.post.id,
				widget_filters: widgetFilters,
				widget_id: widgetId,
				pagination_base_url: helpers.baseUrl
			};
			if (elementorFrontend.isEditMode()) {
				data.widget_model = window.top.$e.components.get("document").utils.findContainerById(widgetId).model.toJSON({ remove: [
					"default",
					"editSettings",
					"defaultEditSettings"
				] });
				data.is_edit_mode = true;
			}
			return data;
		}
		/**
		* Returns the closest data-elementor-id attribute value.
		*
		* @param {Object} element
		* @return {string} elementor id of parent
		*/
		getClosestDataElementorId(element) {
			const closestParent = element == null ? void 0 : element.closest("[data-elementor-id]");
			return closestParent ? closestParent.getAttribute("data-elementor-id") : null;
		}
		/**
		*
		* @param {string} widgetId
		* @param {string} filterId
		* @return {{headers: {"Content-Type": string}, method: string, body: string}} Fetch arguments for loop Widget update
		*/
		getFetchArgumentsForLoopUpdate(widgetId, filterId) {
			var _a;
			var _b;
			const data = this.prepareLoopUpdateRequestData(widgetId, filterId);
			const args = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			};
			if (elementorFrontend.isEditMode() && !!((_a = elementorPro.config.loopFilter) == null ? void 0 : _a.nonce)) args.headers["X-WP-Nonce"] = (_b = elementorPro.config.loopFilter) == null ? void 0 : _b.nonce;
			return args;
		}
		/**
		* Fetches the updated loop widget markup from the server.
		*
		* @param {string} widgetId
		* @param {string} filterId
		* @return {Promise<Response>} Promise for the fetch request.
		*/
		fetchUpdatedLoopWidgetMarkup(widgetId, filterId) {
			return fetch(`${elementorProFrontend.config.urls.rest}elementor-pro/v1/refresh-loop`, this.getFetchArgumentsForLoopUpdate(widgetId, filterId));
		}
		createElementFromHTMLString(widgetContainerHTMLString) {
			const div = document.createElement("div");
			if (!widgetContainerHTMLString) {
				div.classList.add("elementor-widget-container");
				return div;
			}
			div.innerHTML = widgetContainerHTMLString.trim();
			return div.firstElementChild;
		}
		refreshLoopWidget(widgetId, filterId) {
			this.loopWidgetsStore.consolidateFilters(widgetId);
			this.updateURLQueryString(widgetId, filterId);
			const widget = document.querySelector(`.elementor-element-${widgetId}`);
			if (!widget) return;
			if (!this.ajaxHelper) this.ajaxHelper = new AjaxHelper();
			this.ajaxHelper.addLoadingAnimationOverlay(widgetId);
			return this.fetchUpdatedLoopWidgetMarkup(widgetId, filterId).then((response) => {
				if (!(response instanceof Response) || !(response == null ? void 0 : response.ok) || 400 <= (response == null ? void 0 : response.status)) return {};
				return response.json();
			}).catch(() => {
				return {};
			}).then((response) => {
				if (!(response == null ? void 0 : response.data) && "" !== (response == null ? void 0 : response.data)) return;
				const existingWidgetContainer = widget.querySelector(".elementor-widget-container");
				const newWidgetContainer = this.createElementFromHTMLString(response.data);
				widget.replaceChild(newWidgetContainer, existingWidgetContainer);
				this.handleElementHandlers(widget);
				if (ElementorProFrontendConfig.settings.lazy_load_background_images) document.dispatchEvent(new Event("elementor/lazyload/observe"));
				elementorFrontend.elementsHandler.runReadyTrigger(document.querySelector(`.elementor-element-${widgetId}`));
				widget.classList.remove("e-loading");
			}).finally(() => {
				this.ajaxHelper.removeLoadingAnimationOverlay(widgetId);
			});
		}
		handleElementHandlers(newWidgetMarkup) {
			runElementHandlers(newWidgetMarkup.querySelectorAll(".e-loop-item"));
		}
	};
	//#endregion
	//#region modules/loop-filter/assets/js/frontend/handlers/taxonomy-filter.js
	var taxonomy_filter_exports = /* @__PURE__ */ __exportAll({ default: () => TaxonomyFilter });
	var import_query_constants, TaxonomyFilter;
	var init_taxonomy_filter = __esmMin((() => {
		init_flex_horizontal_scroll();
		import_query_constants = require_query_constants();
		TaxonomyFilter = class extends elementorModules.frontend.handlers.Base {
			constructor(...args) {
				super(...args);
				this.resizeListenerNestedTabs = null;
			}
			/**
			*
			* @return {{filterValues: {default: string}, selectors: {container: string, item: string}}} Default Settings
			*/
			getDefaultSettings() {
				return {
					selectors: {
						item: ".e-filter-item",
						container: ".e-filter"
					},
					filterValues: { default: "__all" }
				};
			}
			/**
			*
			* @return {{$filterButtons: *, $container: *}} Default Elements
			*/
			getDefaultElements() {
				return {
					$filterButtons: this.$element.find(this.getSettings("selectors.item")),
					$container: this.$element.find(this.getSettings("selectors.container"))
				};
			}
			getHeadingEvents() {
				const container = this.elements.$container[0];
				return {
					mousedown: changeScrollStatus.bind(this, container),
					mouseup: changeScrollStatus.bind(this, container),
					mouseleave: changeScrollStatus.bind(this, container),
					mousemove: setHorizontalTitleScrollValues.bind(this, container, this.getHorizontalScrollSetting())
				};
			}
			bindEvents() {
				this.elements.$filterButtons.on("click", this.onFilterButtonClick.bind(this));
				this.elements.$container.on(this.getHeadingEvents());
				const settingsObject = {
					element: this.elements.$container[0],
					direction: this.getItemsAlignment(),
					justifyCSSVariable: "--e-filter-justify-content",
					horizontalScrollStatus: this.getHorizontalScrollSetting()
				};
				this.resizeListenerNestedTabs = setHorizontalScrollAlignment.bind(this, settingsObject);
				elementorFrontend.elements.$window.on("resize", this.resizeListenerNestedTabs);
			}
			/**
			*
			* @param {string} propertyName
			*/
			onElementChange(propertyName) {
				if (this.checkSliderPropsToWatch(propertyName)) setHorizontalScrollAlignment({
					element: this.elements.$container[0],
					direction: this.getItemsAlignment(),
					justifyCSSVariable: "--e-filter-justify-content",
					horizontalScrollStatus: this.getHorizontalScrollSetting()
				});
			}
			/**
			*
			* @param {string} propertyName
			* @return {boolean} Is slider property
			*/
			checkSliderPropsToWatch(propertyName) {
				return 0 === propertyName.indexOf("horizontal_scroll") || 0 === propertyName.indexOf("item_alignment_horizontal");
			}
			/**
			* Get the filter buttons elements.
			*
			* If the filter buttons weren't rendered when the handler was initialized, this method will cache the filter
			* button elements and add the necessary event listeners.
			*
			* @return {*} jQuery collection of filter button elements. Might be empty.
			*/
			getFilterButtonElements() {
				var _a;
				if ((_a = this.elements) == null ? void 0 : _a.$filterButtons.length) return this.elements.$filterButtons;
				this.elements = this.getDefaultElements();
				this.bindEvents();
				return this.elements.$filterButtons;
			}
			/**
			* Get the active filter buttons elements.
			*
			* @return {*} jQuery collection of the active filter button elements. Might be empty.
			*/
			getActiveFilterButtonElements() {
				return this.getFilterButtonElements().filter("[aria-pressed=\"true\"]");
			}
			/**
			*
			* @param {string} selectedTermSlug
			*/
			activateFilterButton(selectedTermSlug) {
				const $filterButtons = this.getFilterButtonElements();
				const multipleSelectionActive = "yes" === this.getElementSettings("multiple_selection");
				if (!$filterButtons.length) return;
				const defaultFilter = this.getSettings("filterValues.default");
				if (!multipleSelectionActive || defaultFilter === selectedTermSlug) $filterButtons.attr("aria-pressed", false);
				$filterButtons.filter("[data-filter=\"" + selectedTermSlug + "\"]").attr("aria-pressed", true);
				const activeFiltersButtons = this.getCurrentlyActiveFilter();
				if (activeFiltersButtons && activeFiltersButtons.includes(defaultFilter) && defaultFilter !== selectedTermSlug) this.deactivateDefaultFilterButton($filterButtons);
			}
			/**
			*
			* @param {string} clickedFilter
			*/
			deactivateFilterButton(clickedFilter) {
				const $filterButtons = this.getFilterButtonElements();
				const multipleSelectionActive = "yes" === this.getElementSettings("multiple_selection");
				if (!$filterButtons.length) return;
				const $activeButton = $filterButtons.filter("[data-filter=\"" + clickedFilter + "\"]");
				const defaultFilter = this.getSettings("filterValues.default");
				const currentlyActiveButtons = this.getCurrentlyActiveFilter();
				const isActivateDefaultFilterButtonNeeded = !multipleSelectionActive || !currentlyActiveButtons.includes(defaultFilter) && 1 === currentlyActiveButtons.length;
				$activeButton.attr("aria-pressed", false);
				if (isActivateDefaultFilterButtonNeeded) this.activateDefaultFilterButton();
				elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(this.getElementSettings("selected_element"), this.getID(), clickedFilter, defaultFilter);
			}
			activateDefaultFilterButton() {
				const $filterButtons = this.getFilterButtonElements();
				const $defaultButton = $filterButtons.filter("[data-filter=\"" + this.getSettings("filterValues.default") + "\"]");
				$filterButtons.attr("aria-pressed", false);
				$defaultButton.attr("aria-pressed", true);
			}
			deactivateDefaultFilterButton() {
				this.getFilterButtonElements().filter("[data-filter=\"" + this.getSettings("filterValues.default") + "\"]").attr("aria-pressed", false);
			}
			/**
			* Gets the currently active buttons independent of URL params.
			* @return {Array} Currently active filter(s).
			*/
			getCurrentlyActiveFilter() {
				const $activeFilterButtons = this.getActiveFilterButtonElements();
				const currentlyActiveFilterButtons = [];
				for (let i = 0; i < $activeFilterButtons.length; i++) currentlyActiveFilterButtons.push($activeFilterButtons[i].dataset.filter);
				return currentlyActiveFilterButtons;
			}
			/**
			* Get the filter operator for WP_Query. OR is translated IN.
			* @return {string} 'IN' or 'AND' for WP_Query or DISABLED for single selection.
			*/
			getFilterOperator() {
				const elementSettings = this.getElementSettings();
				if (!elementSettings.multiple_selection || !["AND", "OR"].includes(elementSettings.logical_combination)) return "DISABLED";
				return elementSettings.logical_combination;
			}
			/**
			*
			* @param {string} selectedTermSlug - Slug of currently selected term relating to last clicked button
			*/
			filterItems(selectedTermSlug) {
				const elementSettings = this.getElementSettings();
				const defaultFilterValue = this.getSettings("filterValues.default");
				if (defaultFilterValue === selectedTermSlug) {
					elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(elementSettings.selected_element, this.getID(), selectedTermSlug, defaultFilterValue);
					return;
				}
				const multipleSelectionLogicalJoin = this.getFilterOperator();
				elementorProFrontend.modules.taxonomyFilter.setFilterDataForLoopWidget(elementSettings.selected_element, this.getID(), {
					filterType: "taxonomy",
					filterData: {
						selectedTaxonomy: elementSettings.taxonomy,
						terms: [selectedTermSlug]
					}
				}, true, multipleSelectionLogicalJoin);
			}
			/**
			*
			* @param {string} filter
			*/
			setFilter(filter = this.getSettings("filterValues.default")) {
				this.filterItems(filter);
				this.activateFilterButton(filter);
			}
			onFilterButtonClick(event) {
				var _a;
				var _b;
				this.removePaginationHiddenClassOnLoopWidgetContainer();
				const currentlyActiveFilterButtons = this.getCurrentlyActiveFilter();
				const clickedFilter = (_b = (_a = event.currentTarget) == null ? void 0 : _a.dataset) == null ? void 0 : _b.filter;
				if (this.userClickedOnAllWhileItWasActive(clickedFilter, currentlyActiveFilterButtons)) return;
				if (currentlyActiveFilterButtons.includes(clickedFilter)) {
					this.deactivateFilterButton(clickedFilter);
					return;
				}
				this.setFilter(clickedFilter);
			}
			removePaginationHiddenClassOnLoopWidgetContainer() {
				const elementSettings = this.getElementSettings();
				const loopWidget = document.querySelector(".elementor-element-" + elementSettings.selected_element);
				if (loopWidget) loopWidget.classList.remove("e-load-more-pagination-end");
			}
			/**
			*
			* @param {string} clickedFilter
			* @param {Array}  currentlyActiveFilter
			* @return {boolean} User clicked on all while it was active.
			*/
			userClickedOnAllWhileItWasActive(clickedFilter, currentlyActiveFilter) {
				return currentlyActiveFilter.includes(clickedFilter) && clickedFilter === this.getSettings("filterValues.default");
			}
			onDestroy() {
				const selectedElementId = this.getElementSettings("selected_element");
				const selectedTaxonomy = this.getElementSettings("taxonomy");
				const filterId = this.getID();
				if (selectedElementId && selectedTaxonomy) elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(selectedElementId, filterId, "");
				super.onDestroy();
			}
			populateLoopWidgetsStoreOnInitialPageLoad() {
				const elementSettings = this.getElementSettings();
				let selectedTermSlugs = new URLSearchParams(window.location.search).get("e-filter-" + elementSettings.selected_element + "-" + elementSettings.taxonomy);
				if (selectedTermSlugs) {
					selectedTermSlugs = this.getTermsFromParams(selectedTermSlugs);
					const multipleSelectionLogicalJoin = this.getFilterOperator();
					elementorProFrontend.modules.taxonomyFilter.setFilterDataForLoopWidget(elementSettings.selected_element, this.getID(), {
						filterType: "taxonomy",
						filterData: {
							selectedTaxonomy: elementSettings.taxonomy,
							terms: selectedTermSlugs
						}
					}, false, multipleSelectionLogicalJoin);
				}
			}
			getTermsFromParams(params) {
				let separator = import_query_constants.queryConstants.AND.separator.fromBrowser;
				if (params.includes(import_query_constants.queryConstants.OR.separator.fromBrowser)) separator = import_query_constants.queryConstants.OR.separator.fromBrowser;
				return params.split(separator);
			}
			onInit() {
				super.onInit();
				this.populateLoopWidgetsStoreOnInitialPageLoad();
				setHorizontalScrollAlignment({
					element: this.elements.$container[0],
					direction: this.getItemsAlignment(),
					justifyCSSVariable: "--e-filter-justify-content",
					horizontalScrollStatus: this.getHorizontalScrollSetting()
				});
			}
			getHorizontalScrollSetting() {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "horizontal_scroll", "", currentDevice);
			}
			getItemsAlignment() {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "item_alignment_horizontal", "", currentDevice);
			}
		};
	}));
	//#endregion
	//#region modules/loop-filter/assets/js/frontend/frontend.js
	var LoopFilter = class extends BaseFilterFrontendModule {
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("taxonomy-filter", () => __vitePreload(() => Promise.resolve().then(() => (init_taxonomy_filter(), taxonomy_filter_exports)), void 0));
		}
	};
	//#endregion
	//#region modules/off-canvas/assets/js/frontend/handlers/off-canvas.js
	var off_canvas_exports = /* @__PURE__ */ __exportAll({ default: () => OffCanvas });
	var OffCanvas;
	var init_off_canvas = __esmMin((() => {
		init_modal_keyboard_handler();
		init_run_element_handlers();
		init_defineProperty();
		OffCanvas = class extends elementorModules.frontend.handlers.Base {
			constructor(..._args) {
				super(..._args);
				_defineProperty(this, "keyboardHandler", null);
				_defineProperty(this, "isOffCanvasOpenedOnce", false);
			}
			getDefaultSettings() {
				return { selectors: {
					wrapper: ".e-off-canvas",
					overlay: ".e-off-canvas__overlay",
					main: ".e-off-canvas__main",
					content: ".e-off-canvas__content",
					body: "body"
				} };
			}
			getDefaultElements() {
				const settings = this.getSettings();
				return {
					$wrapper: this.$element.find(settings.selectors.wrapper),
					$overlay: this.$element.find(settings.selectors.overlay),
					$main: this.$element.find(settings.selectors.main),
					$content: this.$element.find(settings.selectors.content),
					$body: jQuery(settings.selectors.body)
				};
			}
			onInit() {
				super.onInit();
				this.initAriaAttributesToTriggerElements();
				if (this.isEditingMode()) this.maybeDisableScroll();
				else this.addClassToPreviousSiblingInsideASection();
			}
			onDestroy() {
				super.onDestroy();
				this.enableScroll();
			}
			bindEvents() {
				this.elements.$overlay.on("click", (event) => {
					event.preventDefault();
					this.onClickOverlay(event);
				});
				elementorFrontend.elements.$window.on("keydown", this.onCanvasKeyDown.bind(this));
				this.elements.$main.on("animationend animationcancel", this.removeAnimationClasses.bind(this));
				elementorFrontend.elements.$window.on("elementor-pro/off-canvas/toggle-display-mode", this.handleDisplayToggle.bind(this));
			}
			unbindEvents() {
				this.elements.$overlay.off();
				this.elements.$main.off();
				elementorFrontend.elements.$window.off("keydown", this.onCanvasKeyDown);
				elementorFrontend.elements.$window.off("elementor-pro/off-canvas/toggle-display-mode");
			}
			handleDisplayToggle(event) {
				var _event$originalEvent;
				if (event.originalEvent.detail.id !== this.getWidgetId()) return;
				const displayMode = event.originalEvent.detail.displayMode;
				const currentDisplayMode = this.isVisible() ? "open" : "close";
				const isKeyboardEvent = "" === (event === null || event === void 0 || (_event$originalEvent = event.originalEvent) === null || _event$originalEvent === void 0 || (_event$originalEvent = _event$originalEvent.detail) === null || _event$originalEvent === void 0 || (_event$originalEvent = _event$originalEvent.previousEvent) === null || _event$originalEvent === void 0 ? void 0 : _event$originalEvent.pointerType);
				if ("open" === displayMode) this.openOffCanvas(isKeyboardEvent);
				else if ("close" === displayMode) this.closeOffCanvas();
				else if ("toggle" === displayMode) this["open" === currentDisplayMode ? "closeOffCanvas" : "openOffCanvas"](isKeyboardEvent);
			}
			openOffCanvas(isKeyboardEvent = false) {
				if (this.isVisible() || this.isInsideCarousel()) return;
				this.elements.$wrapper.attr("aria-hidden", "false");
				this.elements.$wrapper.removeAttr("inert");
				this.elements.$wrapper.removeAttr("data-delay-child-handlers");
				this.updateAriaExpandedOfTriggerElements("true");
				this.toggleDraggable(false);
				this.maybeOnOpenAnimation();
				this.maybeDisableScroll();
				this.handleElementHandlers();
				if (isKeyboardEvent) this.handleKeyboardA11y();
			}
			handleKeyboardA11y() {
				this.initKeyboardHandler();
				this.keyboardHandler.onOpenModal();
			}
			closeOffCanvas() {
				if (!this.isVisible()) return;
				this.maybeOnCloseAnimation();
				this.elements.$wrapper.attr("aria-hidden", "true");
				this.elements.$wrapper.attr("inert", "");
				this.updateAriaExpandedOfTriggerElements("false");
				this.toggleDraggable(true);
				this.enableScroll();
			}
			onCanvasKeyDown(event) {
				if ("Escape" !== event.key || "yes" === this.getElementSettings("is_not_close_on_esc_overlay")) return;
				this.closeOffCanvas();
			}
			onClickOverlay() {
				if ("yes" === this.getElementSettings().is_not_close_on_overlay || this.isEditingMode()) return;
				this.closeOffCanvas();
			}
			maybeOnOpenAnimation() {
				const openAnimationClass = this.getResponsiveSetting("entrance_animation") || "none";
				if ("none" === openAnimationClass) this.elements.$wrapper.addClass("no-animation");
				else this.elements.$wrapper.removeClass("no-animation");
				this.elements.$main.addClass(`animated ${openAnimationClass}`);
				this.elements.$wrapper.removeClass("animated-reverse-wrapper");
			}
			maybeOnCloseAnimation() {
				const exitAnimationClass = this.getResponsiveSetting("exit_animation") || "none";
				if ("none" === exitAnimationClass) this.elements.$wrapper.addClass("no-animation");
				else this.elements.$wrapper.removeClass("no-animation");
				this.elements.$main.addClass(`animated reverse ${exitAnimationClass}`);
				this.elements.$wrapper.addClass("animated-reverse-wrapper");
				this.elements.$body.addClass("e-off-canvas__no-scroll-animation");
			}
			removeAnimationClasses() {
				const isExitAnimation = this.elements.$main.hasClass("reverse");
				const openAnimationClass = this.getResponsiveSetting("entrance_animation") || "none";
				const exitAnimationClass = this.getResponsiveSetting("exit_animation") || "none";
				if (isExitAnimation) {
					var _this$keyboardHandler;
					this.elements.$main.removeClass(`animated reverse ${exitAnimationClass}`);
					this.elements.$wrapper.removeClass("animated-reverse-wrapper");
					this.elements.$body.removeClass("e-off-canvas__no-scroll-animation");
					(_this$keyboardHandler = this.keyboardHandler) === null || _this$keyboardHandler === void 0 || _this$keyboardHandler.onCloseModal();
				} else this.elements.$main.removeClass(`animated ${openAnimationClass}`);
			}
			getResponsiveSetting(controlName) {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), controlName, "", currentDevice);
			}
			isEditingMode() {
				return "yes" === this.getElementSettings("editing_mode") && elementorFrontend.isEditMode();
			}
			maybeDisableScroll() {
				if ("yes" === this.getElementSettings("prevent_scroll")) this.elements.$body.addClass("e-off-canvas__no-scroll");
			}
			enableScroll() {
				this.elements.$body.removeClass("e-off-canvas__no-scroll");
			}
			toggleDraggable(value) {
				if (elementorFrontend.isEditMode() && "0" !== this.elements.$overlay.css("opacity")) this.$element.attr("draggable", value);
			}
			handleEditingModeToggle() {
				if ("yes" === this.getElementSettings("editing_mode")) this.openOffCanvas();
				else this.closeOffCanvas();
			}
			getKeyboardHandlingConfig() {
				return {
					$modalElements: this.elements.$wrapper,
					$elementWrapper: this.elements.$content,
					modalType: "off-canvas",
					modalId: this.getID()
				};
			}
			initAriaAttributesToTriggerElements() {
				this.getTriggerElements().forEach((triggerElement) => {
					triggerElement.setAttribute("aria-controls", `off-canvas-${this.getID()}`);
					triggerElement.setAttribute("aria-expanded", "false");
				});
			}
			getTriggerElements() {
				const links = elementorFrontend.elements.window.document.body.querySelectorAll("a");
				const unfilteredTriggerElements = Array.from(links).filter((link) => {
					var _link$href;
					return (_link$href = link.href) === null || _link$href === void 0 ? void 0 : _link$href.includes("elementor-action");
				});
				const matchingTriggerElements = [];
				unfilteredTriggerElements.forEach((triggerElement) => {
					if (!this.isActionUrlIdEqualToWidgetId(triggerElement.href)) return false;
					matchingTriggerElements.push(triggerElement);
				});
				return matchingTriggerElements;
			}
			updateAriaExpandedOfTriggerElements(isExpanded) {
				elementorFrontend.elements.window.document.body.querySelectorAll(`[aria-controls="off-canvas-${this.getID()}"]`).forEach((triggerElement) => {
					triggerElement.setAttribute("aria-expanded", isExpanded);
				});
			}
			isActionUrlIdEqualToWidgetId(encodedUrl) {
				const url = decodeURIComponent(encodedUrl);
				let settings = {};
				const settingsMatch = url.match(/settings=(.+)/);
				if (settingsMatch) settings = JSON.parse(atob(settingsMatch[1]));
				return this.getID() === (settings === null || settings === void 0 ? void 0 : settings.id);
			}
			isVisible() {
				return "false" === this.elements.$wrapper.attr("aria-hidden");
			}
			maybeDragWidgetsBeneathOverlay() {
				this.elements.$overlay.toggleClass("no-pointer-events");
			}
			onElementChange(propertyName) {
				if ("editing_mode" === propertyName) this.handleEditingModeToggle();
				if ("has_overlay" === propertyName) this.maybeDragWidgetsBeneathOverlay("has_overlay");
			}
			handleElementHandlers() {
				if (this.isOffCanvasOpenedOnce) return;
				runElementHandlers(this.elements.$main[0].querySelectorAll(".e-off-canvas__content"));
				this.isOffCanvasOpenedOnce = true;
			}
			initKeyboardHandler() {
				if (!this.keyboardHandler) this.keyboardHandler = new ModalKeyboardHandler(this.getKeyboardHandlingConfig());
			}
			addClassToPreviousSiblingInsideASection() {
				if (!this.$element[0].closest(".elementor-section")) return;
				const previousElement = this.$element[0].previousElementSibling;
				previousElement === null || previousElement === void 0 || previousElement.classList.add("e-element-before-off-canvas");
			}
			getWidgetId() {
				if (!(this.$element.closest(".e-loop-item").length > 0)) return this.getID().toString();
				const id = this.elements.$wrapper.attr("id");
				return id ? id.replace("off-canvas-", "") : this.getID().toString();
			}
			isInsideCarousel() {
				return this.$element.closest(".swiper-wrapper").length > 0;
			}
		};
	}));
	//#endregion
	//#region modules/off-canvas/assets/js/frontend/frontend.js
	var frontend_default$2 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("off-canvas", () => __vitePreload(() => Promise.resolve().then(() => (init_off_canvas(), off_canvas_exports)), void 0));
			elementorFrontend.on("components:init", () => this.onFrontendComponentsInit());
		}
		onFrontendComponentsInit() {
			this.addUrlActions();
		}
		addUrlActions() {
			elementorFrontend.utils.urlActions.addAction("off_canvas:open", (settings) => {
				this.toggleOffCanvasDisplay(settings);
			});
			elementorFrontend.utils.urlActions.addAction("off_canvas:close", (settings) => {
				this.toggleOffCanvasDisplay(settings);
			});
			elementorFrontend.utils.urlActions.addAction("off_canvas:toggle", (settings) => {
				this.toggleOffCanvasDisplay(settings);
			});
		}
		toggleOffCanvasDisplay(settings) {
			window.dispatchEvent(new CustomEvent("elementor-pro/off-canvas/toggle-display-mode", { detail: settings }));
		}
	};
	//#endregion
	//#region ../elementor/assets/dev/js/frontend/handlers/base.js
	var require_base = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.ViewModule.extend({
			$element: null,
			editorListeners: null,
			onElementChange: null,
			onEditSettingsChange: null,
			onPageSettingsChange: null,
			isEdit: null,
			__construct(settings) {
				if (!this.isActive(settings)) return;
				this.$element = settings.$element;
				this.isEdit = this.$element.hasClass("elementor-element-edit-mode");
				if (this.isEdit) this.addEditorListeners();
			},
			isActive() {
				return true;
			},
			isElementInTheCurrentDocument() {
				if (!elementorFrontend.isEditMode()) return false;
				return elementor.documents.currentDocument.id.toString() === this.$element[0].closest(".elementor").dataset.elementorId;
			},
			findElement(selector) {
				var $mainElement = this.$element;
				return $mainElement.find(selector).filter(function() {
					return jQuery(this).parent().closest(".elementor-element").is($mainElement);
				});
			},
			getUniqueHandlerID(cid, $element) {
				if (!cid) cid = this.getModelCID();
				if (!$element) $element = this.$element;
				return cid + $element.attr("data-element_type") + this.getConstructorID();
			},
			initEditorListeners() {
				var self = this;
				self.editorListeners = [{
					event: "element:destroy",
					to: elementor.channels.data,
					callback(removedModel) {
						if (removedModel.cid !== self.getModelCID()) return;
						self.onDestroy();
					}
				}];
				if (self.onElementChange) {
					const elementType = self.getWidgetType() || self.getElementType();
					let eventName = "change";
					if ("global" !== elementType) eventName += ":" + elementType;
					self.editorListeners.push({
						event: eventName,
						to: elementor.channels.editor,
						callback(controlView, elementView) {
							if (self.getUniqueHandlerID(elementView.model.cid, elementView.$el) !== self.getUniqueHandlerID()) return;
							self.onElementChange(controlView.model.get("name"), controlView, elementView);
						}
					});
				}
				if (self.onEditSettingsChange) self.editorListeners.push({
					event: "change:editSettings",
					to: elementor.channels.editor,
					callback(changedModel, view) {
						if (view.model.cid !== self.getModelCID()) return;
						const propName = Object.keys(changedModel.changed)[0];
						self.onEditSettingsChange(propName, changedModel.changed[propName]);
					}
				});
				["page"].forEach(function(settingsType) {
					var listenerMethodName = "on" + settingsType[0].toUpperCase() + settingsType.slice(1) + "SettingsChange";
					if (self[listenerMethodName]) self.editorListeners.push({
						event: "change",
						to: elementor.settings[settingsType].model,
						callback(model) {
							self[listenerMethodName](model.changed);
						}
					});
				});
			},
			getEditorListeners() {
				if (!this.editorListeners) this.initEditorListeners();
				return this.editorListeners;
			},
			addEditorListeners() {
				var uniqueHandlerID = this.getUniqueHandlerID();
				this.getEditorListeners().forEach(function(listener) {
					elementorFrontend.addListenerOnce(uniqueHandlerID, listener.event, listener.callback, listener.to);
				});
			},
			removeEditorListeners() {
				var uniqueHandlerID = this.getUniqueHandlerID();
				this.getEditorListeners().forEach(function(listener) {
					elementorFrontend.removeListeners(uniqueHandlerID, listener.event, null, listener.to);
				});
			},
			getElementType() {
				return this.$element.data("element_type");
			},
			getWidgetType() {
				const widgetType = this.$element.data("widget_type");
				if (!widgetType) return;
				return widgetType.split(".")[0];
			},
			getID() {
				return this.$element.data("id");
			},
			getModelCID() {
				return this.$element.data("model-cid");
			},
			getElementSettings(setting) {
				let elementSettings = {};
				const modelCID = this.getModelCID();
				if (this.isEdit && modelCID) {
					const settings = elementorFrontend.config.elements.data[modelCID];
					const attributes = settings.attributes;
					let type = attributes.widgetType || attributes.elType;
					if (attributes.isInner) type = "inner-" + type;
					let settingsKeys = elementorFrontend.config.elements.keys[type];
					if (!settingsKeys) {
						settingsKeys = elementorFrontend.config.elements.keys[type] = [];
						jQuery.each(settings.controls, (name, control) => {
							if (control.frontend_available || control.editor_available) settingsKeys.push(name);
						});
					}
					jQuery.each(settings.getActiveControls(), function(controlKey) {
						if (-1 !== settingsKeys.indexOf(controlKey)) {
							let value = attributes[controlKey];
							if (value.toJSON) value = value.toJSON();
							elementSettings[controlKey] = value;
						}
					});
				} else elementSettings = this.$element.data("settings") || {};
				return this.getItems(elementSettings, setting);
			},
			getEditSettings(setting) {
				var attributes = {};
				if (this.isEdit) attributes = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes;
				return this.getItems(attributes, setting);
			},
			getCurrentDeviceSetting(settingKey) {
				return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), settingKey);
			},
			onInit() {
				if (this.isActive(this.getSettings())) elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
			},
			onDestroy() {
				if (this.isEdit) this.removeEditorListeners();
				if (this.unbindEvents) this.unbindEvents();
			}
		});
	}));
	//#endregion
	//#region modules/floating-buttons/assets/js/shared/frontend/handlers/click-tracking.js
	var import_base$4, ClickTrackingHandler;
	var init_click_tracking = __esmMin((() => {
		import_base$4 = /* @__PURE__ */ __toESM(require_base());
		init_defineProperty();
		ClickTrackingHandler = class extends import_base$4.default {
			constructor(..._args) {
				super(..._args);
				_defineProperty(this, "clicks", []);
			}
			getDefaultSettings() {
				return { selectors: {
					contentWrapper: ".e-contact-buttons__content-wrapper",
					contentWrapperFloatingBars: ".e-floating-bars",
					floatingBarCouponButton: ".e-floating-bars__coupon-button",
					floatingBarsHeadline: ".e-floating-bars__headline",
					contactButtonsVar4: ".e-contact-buttons__contact-icon-link",
					contactButtonsVar5: ".e-contact-buttons__chat-button",
					contactButtonsVar6: ".e-contact-buttons-var-6",
					contactButtonsVar8: ".e-contact-buttons-var-8",
					elementorWrapper: "[data-elementor-type=\"floating-buttons\"]",
					contactButtonCore: ".e-contact-buttons__send-button"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					contentWrapper: this.$element[0].querySelector(selectors.contentWrapper),
					contentWrapperFloatingBars: this.$element[0].querySelector(selectors.contentWrapperFloatingBars),
					contactButtonsVar5: this.$element[0].querySelector(selectors.contactButtonsVar5),
					contactButtonsVar6: this.$element[0].querySelector(selectors.contactButtonsVar6)
				};
			}
			bindEvents() {
				if (this.elements.contentWrapper) this.elements.contentWrapper.addEventListener("click", this.onChatButtonTrackClick.bind(this));
				if (this.elements.contactButtonsVar5) this.elements.contactButtonsVar5.addEventListener("click", this.onChatButtonTrackClick.bind(this));
				if (this.elements.contactButtonsVar6) this.elements.contactButtonsVar6.addEventListener("click", this.onChatButtonTrackClick.bind(this));
				if (this.elements.contentWrapperFloatingBars) this.elements.contentWrapperFloatingBars.addEventListener("click", this.onChatButtonTrackClick.bind(this));
				window.addEventListener("beforeunload", () => {
					if (this.clicks.length > 0) this.sendClicks();
				});
			}
			onChatButtonTrackClick(event) {
				const targetElement = event.target || event.srcElement;
				const selectors = this.getSettings("selectors");
				const buttonSelectors = [
					selectors.contactButtonsVar4,
					selectors.contactButtonsVar6,
					selectors.floatingBarCouponButton,
					selectors.floatingBarsHeadline,
					selectors.contactButtonCore
				];
				for (const selector of buttonSelectors) if (targetElement.matches(selector) || targetElement.closest(selector)) this.getDocumentIdAndTrack(targetElement, selectors);
				if ((targetElement.matches(selectors.contactButtonsVar5) || targetElement.closest(selectors.contactButtonsVar5)) && targetElement.closest(".e-contact-buttons-var-5")) this.getDocumentIdAndTrack(targetElement, selectors);
			}
			getDocumentIdAndTrack(targetElement, selectors) {
				const documentId = targetElement.closest(selectors.elementorWrapper).dataset.elementorId;
				this.trackClick(documentId);
			}
			trackClick(documentId) {
				if (!documentId) return;
				this.clicks.push(documentId);
				if (this.clicks.length >= 10) this.sendClicks();
			}
			sendClicks() {
				var _elementorFrontendCon;
				var _elementorFrontendCon2;
				const formData = new FormData();
				formData.append("action", "elementor_send_clicks");
				formData.append("_nonce", (_elementorFrontendCon = elementorFrontendConfig) === null || _elementorFrontendCon === void 0 || (_elementorFrontendCon = _elementorFrontendCon.nonces) === null || _elementorFrontendCon === void 0 ? void 0 : _elementorFrontendCon.floatingButtonsClickTracking);
				this.clicks.forEach((documentId) => formData.append("clicks[]", documentId));
				fetch((_elementorFrontendCon2 = elementorFrontendConfig) === null || _elementorFrontendCon2 === void 0 || (_elementorFrontendCon2 = _elementorFrontendCon2.urls) === null || _elementorFrontendCon2 === void 0 ? void 0 : _elementorFrontendCon2.ajaxurl, {
					method: "POST",
					body: formData
				}).then(() => {
					this.clicks = [];
				});
			}
		};
	}));
	//#endregion
	//#region modules/floating-buttons/assets/js/frontend/handlers/contact-buttons.js
	var contact_buttons_exports = /* @__PURE__ */ __exportAll({ default: () => ContactButtonsHandler });
	var import_base$3, ContactButtonsHandler;
	var init_contact_buttons = __esmMin((() => {
		import_base$3 = /* @__PURE__ */ __toESM(require_base());
		init_click_tracking();
		init_defineProperty();
		ContactButtonsHandler = class extends import_base$3.default {
			constructor(..._args) {
				super(..._args);
				_defineProperty(this, "clicks", []);
			}
			getDefaultSettings() {
				return {
					selectors: {
						main: ".e-contact-buttons",
						content: ".e-contact-buttons__content",
						contentWrapper: ".e-contact-buttons__content-wrapper",
						chatButton: ".e-contact-buttons__chat-button",
						closeButton: ".e-contact-buttons__close-button",
						messageBubbleTime: ".e-contact-buttons__message-bubble-time"
					},
					constants: {
						entranceAnimation: "style_chat_box_entrance_animation",
						exitAnimation: "style_chat_box_exit_animation",
						chatButtonAnimation: "style_chat_button_animation",
						animated: "animated",
						animatedWrapper: "animated-wrapper",
						visible: "visible",
						reverse: "reverse",
						hidden: "hidden",
						hasAnimations: "has-animations",
						hasEntranceAnimation: "has-entrance-animation",
						none: "none"
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					main: this.$element[0].querySelector(selectors.main),
					content: this.$element[0].querySelector(selectors.content),
					contentWrapper: this.$element[0].querySelector(selectors.contentWrapper),
					chatButton: this.$element[0].querySelector(selectors.chatButton),
					closeButton: this.$element[0].querySelector(selectors.closeButton),
					messageBubbleTime: this.$element[0].querySelector(selectors.messageBubbleTime)
				};
			}
			getResponsiveSetting(controlName) {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), controlName, "", currentDevice);
			}
			bindEvents() {
				if (this.elements.closeButton) this.elements.closeButton.addEventListener("click", this.closeChatBox.bind(this));
				if (this.elements.chatButton) {
					this.elements.chatButton.addEventListener("click", this.onChatButtonClick.bind(this));
					this.elements.chatButton.addEventListener("animationend", this.removeChatButtonAnimationClasses.bind(this));
				}
				if (this.elements.content) this.elements.content.addEventListener("animationend", this.removeAnimationClasses.bind(this));
				if (this.elements.contentWrapper) window.addEventListener("keyup", this.onDocumentKeyup.bind(this));
			}
			contentWrapperIsHidden(hide) {
				if (!this.elements.contentWrapper) return false;
				const { hidden } = this.getSettings("constants");
				if (true === hide) {
					this.elements.contentWrapper.classList.add(hidden);
					this.elements.contentWrapper.setAttribute("aria-hidden", "true");
					return;
				}
				if (false === hide) {
					this.elements.contentWrapper.classList.remove(hidden);
					this.elements.contentWrapper.setAttribute("aria-hidden", "false");
					return;
				}
				return this.elements.contentWrapper.classList.contains(hidden);
			}
			onDocumentKeyup(event) {
				if (event.keyCode !== 27 || !this.elements.main) return;
				if (!this.contentWrapperIsHidden() && this.elements.main.contains(document.activeElement)) this.closeChatBox();
			}
			onChatButtonTrackClick(event) {
				const targetElement = event.target || event.srcElement;
				const selectors = this.getSettings("selectors");
				const buttonSelectors = [
					selectors.contactButtonsVar4,
					selectors.contactButtonsVar6,
					selectors.contactButtonCore
				];
				for (const selector of buttonSelectors) if (targetElement.matches(selector) || targetElement.closest(selector)) this.getDocumentIdAndTrack(targetElement, selectors);
				if ((targetElement.matches(selectors.contactButtonsVar5) || targetElement.closest(selectors.contactButtonsVar5)) && targetElement.closest(".e-contact-buttons-var-5")) this.getDocumentIdAndTrack(targetElement, selectors);
			}
			getDocumentIdAndTrack(targetElement, selectors) {
				let documentId = targetElement.closest(selectors.main).dataset.documentId;
				if (!documentId) documentId = targetElement.closest(selectors.elementorWrapper).dataset.elementorId;
				this.trackClick(documentId);
			}
			trackClick(documentId) {
				if (!documentId) return;
				this.clicks.push(documentId);
				if (this.clicks.length >= 10) this.sendClicks();
			}
			sendClicks() {
				var _elementorFrontendCon;
				var _elementorFrontendCon2;
				const formData = new FormData();
				formData.append("action", "elementor_send_clicks");
				formData.append("_nonce", (_elementorFrontendCon = elementorFrontendConfig) === null || _elementorFrontendCon === void 0 || (_elementorFrontendCon = _elementorFrontendCon.nonces) === null || _elementorFrontendCon === void 0 ? void 0 : _elementorFrontendCon.floatingButtonsClickTracking);
				this.clicks.forEach((documentId) => formData.append("clicks[]", documentId));
				fetch((_elementorFrontendCon2 = elementorFrontendConfig) === null || _elementorFrontendCon2 === void 0 || (_elementorFrontendCon2 = _elementorFrontendCon2.urls) === null || _elementorFrontendCon2 === void 0 ? void 0 : _elementorFrontendCon2.ajaxurl, {
					method: "POST",
					body: formData
				}).then(() => {
					this.clicks = [];
				});
			}
			removeAnimationClasses() {
				if (!this.elements.content) return;
				const { reverse, entranceAnimation, exitAnimation, animated, visible } = this.getSettings("constants");
				const isExitAnimation = this.elements.content.classList.contains(reverse);
				const openAnimationClass = this.getResponsiveSetting(entranceAnimation);
				const exitAnimationClass = this.getResponsiveSetting(exitAnimation);
				if (isExitAnimation) {
					this.elements.content.classList.remove(animated);
					this.elements.content.classList.remove(reverse);
					if (exitAnimationClass) this.elements.content.classList.remove(exitAnimationClass);
					this.elements.content.classList.remove(visible);
				} else {
					this.elements.content.classList.remove(animated);
					if (openAnimationClass) this.elements.content.classList.remove(openAnimationClass);
					this.elements.content.classList.add(visible);
				}
			}
			chatBoxEntranceAnimation() {
				const { entranceAnimation, animated, animatedWrapper, none } = this.getSettings("constants");
				const entranceAnimationControl = this.getResponsiveSetting(entranceAnimation);
				if (!entranceAnimationControl || none === entranceAnimationControl) return;
				if (this.elements.content) {
					this.elements.content.classList.add(animated);
					this.elements.content.classList.add(entranceAnimationControl);
				}
				if (this.elements.contentWrapper) this.elements.contentWrapper.classList.remove(animatedWrapper);
			}
			chatBoxExitAnimation() {
				const { reverse, exitAnimation, animated, animatedWrapper, none } = this.getSettings("constants");
				const exitAnimationControl = this.getResponsiveSetting(exitAnimation);
				if (!exitAnimationControl || none === exitAnimationControl) return;
				if (this.elements.content) {
					this.elements.content.classList.add(animated);
					this.elements.content.classList.add(reverse);
					this.elements.content.classList.add(exitAnimationControl);
				}
				if (this.elements.contentWrapper) this.elements.contentWrapper.classList.add(animatedWrapper);
			}
			openChatBox() {
				const { hasAnimations, visible } = this.getSettings("constants");
				if (this.elements.main && this.elements.main.classList.contains(hasAnimations)) this.chatBoxEntranceAnimation();
				else if (this.elements.content) this.elements.content.classList.add(visible);
				if (this.elements.contentWrapper) {
					this.contentWrapperIsHidden(false);
					if (!elementorFrontend.isEditMode()) {
						this.elements.contentWrapper.setAttribute("tabindex", "0");
						this.elements.contentWrapper.focus({ focusVisible: true });
					}
				}
				if (this.elements.chatButton) this.elements.chatButton.setAttribute("aria-expanded", "true");
				if (this.elements.closeButton) this.elements.closeButton.setAttribute("aria-expanded", "true");
			}
			closeChatBox() {
				const { hasAnimations, visible } = this.getSettings("constants");
				if (this.elements.main && this.elements.main.classList.contains(hasAnimations)) this.chatBoxExitAnimation();
				else if (this.elements.content) this.elements.content.classList.remove(visible);
				if (this.elements.contentWrapper) this.contentWrapperIsHidden(true);
				if (this.elements.chatButton) {
					this.elements.chatButton.setAttribute("aria-expanded", "false");
					this.elements.chatButton.focus({ focusVisible: true });
				}
				if (this.elements.closeButton) this.elements.closeButton.setAttribute("aria-expanded", "false");
			}
			onChatButtonClick() {
				if (this.elements.contentWrapper && this.contentWrapperIsHidden()) this.openChatBox();
				else this.closeChatBox();
			}
			initMessageBubbleTime() {
				if (!this.elements.messageBubbleTime) return;
				const is12hFormat = "12h" === this.elements.messageBubbleTime.dataset.timeFormat;
				const time = new Intl.DateTimeFormat("default", {
					hour12: is12hFormat,
					hour: "numeric",
					minute: "numeric"
				}).format(/* @__PURE__ */ new Date());
				this.elements.messageBubbleTime.innerHTML = time;
			}
			removeChatButtonAnimationClasses() {
				if (!this.elements.chatButton) return;
				const { chatButtonAnimation, visible } = this.getSettings("constants");
				this.elements.chatButton.classList.remove(chatButtonAnimation);
				this.elements.chatButton.classList.add(visible);
			}
			initChatButtonEntranceAnimation() {
				const { none, chatButtonAnimation } = this.getSettings("constants");
				const entranceAnimationControl = this.getResponsiveSetting(chatButtonAnimation);
				if (!entranceAnimationControl || none === entranceAnimationControl) return;
				this.elements.chatButton.classList.add(entranceAnimationControl);
			}
			initDefaultState() {
				var _elementor;
				if (this.elements.contentWrapper) {
					const isHidden = this.contentWrapperIsHidden();
					if (this.elements.chatButton) this.elements.chatButton.setAttribute("aria-expanded", !isHidden);
					if (this.elements.closeButton) this.elements.closeButton.setAttribute("aria-expanded", !isHidden);
				}
				if (elementorFrontend.isEditMode() && "floating-buttons" === ((_elementor = elementor) === null || _elementor === void 0 || (_elementor = _elementor.config) === null || _elementor === void 0 || (_elementor = _elementor.document) === null || _elementor === void 0 ? void 0 : _elementor.type)) this.openChatBox();
			}
			setupInnerContainer() {
				this.elements.main.closest(".e-con-inner").classList.add("e-con-inner--floating-buttons");
			}
			onInit(...args) {
				const { hasEntranceAnimation } = this.getSettings("constants");
				super.onInit(...args);
				this.clickTrackingHandler = new ClickTrackingHandler({ $element: this.$element });
				if (this.elements.messageBubbleTime) this.initMessageBubbleTime();
				this.initDefaultState();
				if (this.elements.chatButton) {
					if (this.elements.chatButton.classList.contains(hasEntranceAnimation)) this.initChatButtonEntranceAnimation();
				}
				this.setupInnerContainer();
			}
		};
	}));
	//#endregion
	//#region modules/floating-buttons/assets/js/frontend/handlers/contact-buttons-v10.js
	var contact_buttons_v10_exports = /* @__PURE__ */ __exportAll({ default: () => ContactButtonsv10Handler });
	var import_base$2, ContactButtonsv10Handler;
	var init_contact_buttons_v10 = __esmMin((() => {
		import_base$2 = /* @__PURE__ */ __toESM(require_base());
		init_click_tracking();
		ContactButtonsv10Handler = class extends import_base$2.default {
			getDefaultSettings() {
				return {
					selectors: {
						main: ".e-contact-buttons-var-10",
						links: ".e-contact-buttons__contact-icon-link"
					},
					constants: { active: "active" }
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					main: this.$element[0].querySelector(selectors.main),
					links: this.$element[0].querySelectorAll(selectors.links)
				};
			}
			isMobileDevice() {
				return ["mobile", "mobile_extra"].includes(elementorFrontend.getCurrentDeviceMode());
			}
			handleLinkClick(event) {
				event.preventDefault();
				const { active } = this.getSettings("constants");
				if (event.currentTarget.classList.contains(active)) {
					const href = event.currentTarget.getAttribute("href");
					const target = event.currentTarget.getAttribute("target");
					if (target) window.open(href, target);
					else if (href) window.location.href = href;
					event.currentTarget.classList.remove(active);
				} else {
					this.closeAllLinks();
					event.currentTarget.classList.add(active);
				}
			}
			closeAllLinks() {
				const { active } = this.getSettings("constants");
				this.elements.links.forEach((link) => link.classList.remove(active));
			}
			linksEventListeners() {
				if (!this.elements.links.length) return;
				if (this.isMobileDevice()) {
					this.elements.links.forEach((link) => {
						link.addEventListener("click", (event) => {
							this.handleLinkClick(event);
						});
					});
					document.addEventListener("click", (event) => {
						if (!this.elements.main.contains(event.target)) this.closeAllLinks();
					});
				}
			}
			bindEvents() {
				this.linksEventListeners();
			}
			setupInnerContainer() {
				this.elements.main.closest(".e-con-inner").classList.add("e-con-inner--floating-buttons");
			}
			onInit(...args) {
				super.onInit(...args);
				this.clickTrackingHandler = new ClickTrackingHandler({ $element: this.$element });
				this.setupInnerContainer();
			}
		};
	}));
	//#endregion
	//#region modules/floating-buttons/assets/js/frontend/classes/floatin-bar-dom.js
	var FloatingBarDomHelper;
	var init_floatin_bar_dom = __esmMin((() => {
		FloatingBarDomHelper = class {
			constructor($element) {
				this.$element = $element;
			}
			maybeMoveToTop() {
				const el = this.$element[0];
				const widget = el.querySelector(".e-floating-bars");
				if (elementorFrontend.isEditMode()) {
					widget.classList.add("is-sticky");
					return;
				}
				if (el.dataset.widget_type.startsWith("floating-bars") && widget.classList.contains("has-vertical-position-top") && !widget.classList.contains("is-sticky")) {
					const wpAdminBar = document.getElementById("wpadminbar");
					const elementToInsert = el.closest(".elementor");
					if (wpAdminBar) wpAdminBar.after(elementToInsert);
					else document.body.prepend(elementToInsert);
				}
			}
		};
	}));
	//#endregion
	//#region modules/floating-buttons/assets/js/frontend/handlers/floating-bars-v2.js
	var floating_bars_v2_exports = /* @__PURE__ */ __exportAll({ default: () => FloatingBarsHandler$1 });
	var import_base$1, FloatingBarsHandler$1;
	var init_floating_bars_v2 = __esmMin((() => {
		import_base$1 = /* @__PURE__ */ __toESM(require_base());
		init_floatin_bar_dom();
		init_click_tracking();
		FloatingBarsHandler$1 = class extends import_base$1.default {
			static {
				__name(this, "FloatingBarsHandler");
			}
			getDefaultSettings() {
				return {
					selectors: {
						main: ".e-floating-bars",
						closeButton: ".e-floating-bars__close-button",
						playButton: ".e-floating-bars__play-button",
						pauseButton: ".e-floating-bars__pause-button",
						headline: ".e-floating-bars__headline",
						headlines: ".e-floating-bars__headlines",
						headlinesInner: ".e-floating-bars__headlines-inner",
						overlay: ".e-floating-bars__overlay"
					},
					constants: {
						isHidden: "is-hidden",
						isSticky: "is-sticky",
						hasVerticalPositionTop: "has-vertical-position-top",
						hasVerticalPositionBottom: "has-vertical-position-bottom",
						isPaused: "is-paused",
						animationTypeControl: "style_ticker_animation_type",
						autoplay: "autoplay"
					}
				};
			}
			onElementChange(property) {
				if ([
					"style_headline_text_typography_font_size",
					"style_headlines_icon_size",
					"style_floating_bar_padding",
					"style_floating_bar_controls_size",
					"style_floating_bar_element_spacing"
				].includes(property)) this.initDefaultState();
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					main: this.$element[0].querySelector(selectors.main),
					closeButton: this.$element[0].querySelector(selectors.closeButton),
					pauseButton: this.$element[0].querySelector(selectors.pauseButton),
					playButton: this.$element[0].querySelector(selectors.playButton),
					headlineAll: this.$element[0].querySelectorAll(selectors.headline),
					headlines: this.$element[0].querySelector(selectors.headlines),
					headlinesInner: this.$element[0].querySelector(selectors.headlinesInner),
					overlay: this.$element[0].querySelector(selectors.overlay)
				};
			}
			getResponsiveSetting(controlName) {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), controlName, "", currentDevice);
			}
			bindEvents() {
				if (this.elements.closeButton) this.elements.closeButton.addEventListener("click", this.closeFloatingBar.bind(this));
				if (this.elements.pauseButton) this.elements.pauseButton.addEventListener("click", this.pauseCarousel.bind(this));
				if (this.elements.playButton) this.elements.playButton.addEventListener("click", this.playCarousel.bind(this));
				if (this.hasStickyElements()) window.addEventListener("resize", this.handleStickyElements.bind(this));
			}
			isMobileDevice() {
				return ["mobile", "mobile_extra"].includes(elementorFrontend.getCurrentDeviceMode());
			}
			isStickyTop() {
				const { isSticky, hasVerticalPositionTop } = this.getSettings("constants");
				return this.elements.main.classList.contains(isSticky) && this.elements.main.classList.contains(hasVerticalPositionTop);
			}
			isStickyBottom() {
				const { isSticky, hasVerticalPositionBottom } = this.getSettings("constants");
				return this.elements.main.classList.contains(isSticky) && this.elements.main.classList.contains(hasVerticalPositionBottom);
			}
			hasStickyElements() {
				return document.querySelectorAll(".elementor-sticky").length > 0;
			}
			pauseCarousel() {
				const { isPaused } = this.getSettings("constants");
				this.elements.headlines.classList.add(isPaused);
				if (this.elements.playButton && this.elements.pauseButton) {
					this.elements.playButton.setAttribute("aria-hidden", "false");
					this.elements.pauseButton.setAttribute("aria-hidden", "true");
				}
			}
			playCarousel() {
				const { isPaused } = this.getSettings("constants");
				this.elements.headlines.classList.remove(isPaused);
				if (this.elements.playButton && this.elements.pauseButton) {
					this.elements.pauseButton.setAttribute("aria-hidden", "false");
					this.elements.playButton.setAttribute("aria-hidden", "true");
				}
			}
			closeFloatingBar() {
				const { isHidden } = this.getSettings("constants");
				if (!elementorFrontend.isEditMode()) {
					this.elements.main.classList.add(isHidden);
					if (this.hasStickyElements()) this.handleStickyElements();
					else if (this.isStickyTop()) this.removeBodyPadding();
				}
			}
			focusOnLoad() {
				this.elements.main.setAttribute("tabindex", "0");
				this.elements.main.focus({ focusVisible: true });
			}
			applyBodyPadding() {
				const mainHeight = this.elements.main.offsetHeight;
				document.body.style.paddingTop = `${mainHeight}px`;
			}
			removeBodyPadding() {
				document.body.style.paddingTop = "0";
			}
			cloneScrollerContent() {
				Array.from(this.elements.headlinesInner.children).forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					duplicatedItem.setAttribute("aria-hidden", "true");
					duplicatedItem.classList.add("e-floating-bars__headline--clone");
					this.elements.headlinesInner.appendChild(duplicatedItem);
				});
			}
			cloneHeadlinesToFillContainer() {
				let headlinesInnerWidth = this.elements.headlinesInner.offsetWidth;
				const headlinesWidth = this.elements.headlines.offsetWidth;
				while (headlinesInnerWidth < headlinesWidth) {
					this.cloneScrollerContent();
					headlinesInnerWidth = this.elements.headlinesInner.offsetWidth;
				}
			}
			cloneHeadlinesInner() {
				const headlinesInnerDuplicate = this.elements.headlinesInner.cloneNode(true);
				const overlay = this.elements.overlay;
				headlinesInnerDuplicate.classList.add("e-floating-bars__headlines-inner--clone");
				headlinesInnerDuplicate.setAttribute("aria-hidden", "true");
				this.elements.headlines.insertBefore(headlinesInnerDuplicate, overlay);
			}
			handleBrowserScrollAnimation() {
				document.addEventListener("scroll", () => {
					const scrollPosition = window.scrollY;
					const lastHeadline = this.elements.headlinesInner.lastElementChild;
					if (elementorFrontend.config.is_rtl) {
						this.elements.headlinesInner.style.transform = `translateX(${scrollPosition}px)`;
						if (lastHeadline.lastElementChild.getBoundingClientRect().left >= this.elements.headlines.getBoundingClientRect().left) this.cloneScrollerContent();
					} else {
						this.elements.headlinesInner.style.transform = `translateX(-${scrollPosition}px)`;
						if (lastHeadline.lastElementChild.getBoundingClientRect().right <= this.elements.headlines.getBoundingClientRect().right) this.cloneScrollerContent();
					}
				});
			}
			handleTickerClick(event) {
				event.preventDefault();
				const { isPlaying } = this.getSettings("constants");
				if (this.elements.headlines.classList.contains(isPlaying)) this.pauseCarousel();
				else {
					const href = event.currentTarget.getAttribute("href");
					const target = event.currentTarget.getAttribute("target");
					if (!!target) window.open(href, target);
					else if (href) window.location.href = href;
					this.playCarousel();
				}
			}
			handleWPAdminBar() {
				const wpAdminBar = elementorFrontend.elements.$wpAdminBar;
				if (wpAdminBar.length) this.elements.main.style.top = `${wpAdminBar.height()}px`;
			}
			handleStickyElements() {
				const mainHeight = this.elements.main.offsetHeight;
				const wpAdminBar = elementorFrontend.elements.$wpAdminBar;
				const stickyElements = document.querySelectorAll(".elementor-sticky:not(.elementor-sticky__spacer)");
				if (0 === stickyElements.length) return;
				stickyElements.forEach((stickyElement) => {
					var _a;
					const dataSettings = stickyElement.getAttribute("data-settings");
					const stickyPosition = (_a = JSON.parse(dataSettings)) == null ? void 0 : _a.sticky;
					const isTop = "0px" === stickyElement.style.top || "top" === stickyPosition;
					const isBottom = "0px" === stickyElement.style.bottom || "bottom" === stickyPosition;
					if (this.isStickyTop() && isTop) if (wpAdminBar.length) stickyElement.style.top = `${mainHeight + wpAdminBar.height()}px`;
					else stickyElement.style.top = `${mainHeight}px`;
					else if (this.isStickyBottom() && isBottom) stickyElement.style.bottom = `${mainHeight}px`;
					if (elementorFrontend.isEditMode()) {
						if (isTop) stickyElement.style.top = this.isStickyTop() ? `${mainHeight}px` : "0px";
						else if (isBottom) stickyElement.style.bottom = this.isStickyBottom() ? `${mainHeight}px` : "0px";
					}
				});
				document.querySelectorAll(".elementor-sticky__spacer").forEach((stickySpacer) => {
					var _a;
					const dataSettings = stickySpacer.getAttribute("data-settings");
					const stickyPosition = (_a = JSON.parse(dataSettings)) == null ? void 0 : _a.sticky;
					const isTop = "0px" === stickySpacer.style.top || "top" === stickyPosition;
					if (this.isStickyTop() && isTop) stickySpacer.style.marginBottom = `${mainHeight}px`;
				});
			}
			handleClickOutside() {
				const { isPlaying } = this.getSettings("constants");
				document.addEventListener("click", (event) => {
					if (!this.elements.headlines.classList.contains(isPlaying) && !this.elements.main.contains(event.target)) this.playCarousel();
				});
			}
			initScrollingAnimation() {
				const { autoplay, animationTypeControl } = this.getSettings("constants");
				if (autoplay === this.getResponsiveSetting(animationTypeControl)) {
					this.cloneHeadlinesInner();
					this.elements.headlines.setAttribute("data-animated", "true");
					this.playCarousel();
					if (this.isMobileDevice()) {
						this.elements.headlineAll.forEach((headline) => {
							headline.addEventListener("click", this.handleTickerClick.bind(this));
						});
						this.handleClickOutside();
					}
				} else this.handleBrowserScrollAnimation();
			}
			initDefaultState() {
				if (this.isStickyTop()) this.handleWPAdminBar();
				if (this.hasStickyElements()) this.handleStickyElements();
				else if (this.isStickyTop()) this.applyBodyPadding();
				if (this.elements.main && !elementorFrontend.isEditMode()) this.focusOnLoad();
				if (this.elements.headlinesInner) this.cloneHeadlinesToFillContainer();
				if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) this.initScrollingAnimation();
			}
			setupInnerContainer() {
				this.elements.main.closest(".e-con-inner").classList.add("e-con-inner--floating-bars");
				this.elements.main.closest(".e-con").classList.add("e-con--floating-bars");
			}
			onInit(...args) {
				super.onInit(...args);
				this.clickTrackingHandler = new ClickTrackingHandler({ $element: this.$element });
				new FloatingBarDomHelper(this.$element).maybeMoveToTop();
				this.initDefaultState();
				this.setupInnerContainer();
			}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/services/copy-to-clipboard/index.js
	/**
	* Check if there is access to the clipboard API
	* (Usually, when a website doesn't have an SSL certificate, the browser won't expose the clipboard API).
	*
	* @return {boolean} can copy to clipboard?
	*/
	function canCopyToClipboard() {
		var _navigator;
		return !!((_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.clipboard);
	}
	/**
	* Will copy value to the clipboard
	*
	* @param {string} value
	*/
	function copyToClipboard(value) {
		if (!canCopyToClipboard()) throw new Error("Cannot copy to clipboard, please make sure you are using SSL in your website.");
		navigator.clipboard.writeText(value);
	}
	var init_copy_to_clipboard = __esmMin((() => {}));
	//#endregion
	//#region modules/floating-buttons/assets/js/frontend/handlers/floating-bars-v3.js
	var floating_bars_v3_exports = /* @__PURE__ */ __exportAll({ default: () => FloatingBarsHandler });
	var import_base, FloatingBarsHandler;
	var init_floating_bars_v3 = __esmMin((() => {
		import_base = /* @__PURE__ */ __toESM(require_base());
		init_copy_to_clipboard();
		init_floatin_bar_dom();
		init_click_tracking();
		FloatingBarsHandler = class extends import_base.default {
			getDefaultSettings() {
				return {
					selectors: {
						main: ".e-floating-bars",
						mainV3: ".e-floating-bars-var-3",
						closeButton: ".e-floating-bars__close-button",
						couponButton: ".e-floating-bars__coupon-button",
						couponCode: ".e-floating-bars__coupon-code",
						codeTextGroup: ".e-floating-bars__coupon-code",
						successTextGroup: ".e-floating-bars__coupon-success"
					},
					constants: {
						couponEntranceAnimation: "style_coupon_animation",
						couponEntranceAnimationDelay: "style_coupon_animation_delay",
						hasEntranceAnimation: "has-entrance-animation",
						visible: "visible",
						isSticky: "is-sticky",
						hasVerticalPositionTop: "has-vertical-position-top",
						hasVerticalPositionBottom: "has-vertical-position-bottom",
						isHidden: "is-hidden",
						successMessageDurationControl: "style_coupon_success_message_duration",
						animated: "animated"
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					main: this.$element[0].querySelector(selectors.main),
					mainV3: this.$element[0].querySelector(selectors.mainV3),
					mainAll: this.$element[0].querySelectorAll(selectors.main),
					closeButton: this.$element[0].querySelector(selectors.closeButton),
					couponButton: this.$element[0].querySelector(selectors.couponButton),
					couponCode: this.$element[0].querySelector(selectors.couponCode),
					codeTextGroup: this.$element[0].querySelector(selectors.codeTextGroup),
					successTextGroup: this.$element[0].querySelector(selectors.successTextGroup)
				};
			}
			getResponsiveSetting(controlName) {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), controlName, "", currentDevice);
			}
			bindEvents() {
				if (this.elements.closeButton) this.elements.closeButton.addEventListener("click", this.closeFloatingBar.bind(this));
				if (this.elements.couponButton) this.elements.couponButton.addEventListener("animationend", this.handleAnimationEnd.bind(this));
				if (this.elements.main) window.addEventListener("keyup", this.onDocumentKeyup.bind(this));
				if (this.elements.couponButton) this.elements.couponButton.addEventListener("click", this.handleCouponButtonClick.bind(this));
				if (this.hasStickyElements()) window.addEventListener("resize", this.handleStickyElements.bind(this));
			}
			isStickyTop() {
				const { isSticky, hasVerticalPositionTop } = this.getSettings("constants");
				return this.elements.main.classList.contains(isSticky) && this.elements.main.classList.contains(hasVerticalPositionTop);
			}
			isStickyBottom() {
				const { isSticky, hasVerticalPositionBottom } = this.getSettings("constants");
				return this.elements.main.classList.contains(isSticky) && this.elements.main.classList.contains(hasVerticalPositionBottom);
			}
			hasStickyElements() {
				return document.querySelectorAll(".elementor-sticky").length > 0;
			}
			focusOnLoad() {
				this.elements.main.setAttribute("tabindex", "0");
				this.elements.main.focus({ focusVisible: true });
			}
			applyBodyPadding() {
				const offsetHeight = this.elements.main.offsetHeight;
				document.body.style.paddingTop = `${offsetHeight}px`;
			}
			removeBodyPadding() {
				document.body.style.paddingTop = "0";
			}
			handleWPAdminBar() {
				const wpAdminBar = elementorFrontend.elements.$wpAdminBar;
				if (wpAdminBar.length) this.elements.main.style.top = `${wpAdminBar.height()}px`;
			}
			handleStickyElements() {
				const mainHeight = this.elements.main.offsetHeight;
				const wpAdminBar = elementorFrontend.elements.$wpAdminBar;
				const stickyElements = document.querySelectorAll(".elementor-sticky:not(.elementor-sticky__spacer)");
				if (0 === stickyElements.length) return;
				stickyElements.forEach((stickyElement) => {
					var _JSON$parse;
					const dataSettings = stickyElement.getAttribute("data-settings");
					const stickyPosition = (_JSON$parse = JSON.parse(dataSettings)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.sticky;
					const isTop = "0px" === stickyElement.style.top || "top" === stickyPosition;
					const isBottom = "0px" === stickyElement.style.bottom || "bottom" === stickyPosition;
					if (this.isStickyTop() && isTop) if (wpAdminBar.length) stickyElement.style.top = `${mainHeight + wpAdminBar.height()}px`;
					else stickyElement.style.top = `${mainHeight}px`;
					else if (this.isStickyBottom() && isBottom) stickyElement.style.bottom = `${mainHeight}px`;
					if (elementorFrontend.isEditMode()) {
						if (isTop) stickyElement.style.top = this.isStickyTop() ? `${mainHeight}px` : "0px";
						else if (isBottom) stickyElement.style.bottom = this.isStickyBottom() ? `${mainHeight}px` : "0px";
					}
				});
				document.querySelectorAll(".elementor-sticky__spacer").forEach((stickySpacer) => {
					var _JSON$parse2;
					const dataSettings = stickySpacer.getAttribute("data-settings");
					const stickyPosition = (_JSON$parse2 = JSON.parse(dataSettings)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.sticky;
					const isTop = "0px" === stickySpacer.style.top || "top" === stickyPosition;
					if (this.isStickyTop() && isTop) stickySpacer.style.marginBottom = `${mainHeight}px`;
				});
			}
			closeFloatingBar() {
				const { isHidden } = this.getSettings("constants");
				if (!elementorFrontend.isEditMode()) {
					this.elements.main.classList.add(isHidden);
					if (this.hasStickyElements()) this.handleStickyElements();
					else if (this.isStickyTop()) this.removeBodyPadding();
				}
			}
			initEntranceAnimation() {
				const { animated, couponEntranceAnimation, couponEntranceAnimationDelay, hasEntranceAnimation } = this.getSettings("constants");
				const entranceAnimationClass = this.getResponsiveSetting(couponEntranceAnimation);
				const setTimeoutDelay = (this.getResponsiveSetting(couponEntranceAnimationDelay) || 0) + 500;
				this.elements.couponButton.classList.add(animated);
				this.elements.couponButton.classList.add(entranceAnimationClass);
				setTimeout(() => {
					this.elements.couponButton.classList.remove(hasEntranceAnimation);
				}, setTimeoutDelay);
			}
			handleAnimationEnd() {
				this.removeEntranceAnimationClasses();
				this.focusOnLoad();
			}
			removeEntranceAnimationClasses() {
				if (!this.elements.couponButton) return;
				const { animated, couponEntranceAnimation, visible } = this.getSettings("constants");
				const entranceAnimationClass = this.getResponsiveSetting(couponEntranceAnimation);
				this.elements.couponButton.classList.remove(animated);
				this.elements.couponButton.classList.remove(entranceAnimationClass);
				this.elements.couponButton.classList.add(visible);
			}
			onDocumentKeyup(event) {
				if (event.keyCode !== 27 || !this.elements.main) return;
				if (this.elements.main.contains(document.activeElement)) this.closeFloatingBar();
			}
			getDuration(duration) {
				const isUnitSeconds = "s" === duration.unit;
				const DEFAULT_DURATION_SIZE = isUnitSeconds ? "1.5" : "1500";
				const size = "" !== duration.size ? duration.size : DEFAULT_DURATION_SIZE;
				return isUnitSeconds ? size * 1e3 : size;
			}
			handleCouponButtonClick(element) {
				const { successMessageDurationControl, isHidden } = this.getSettings("constants");
				const text = this.elements.couponCode.innerText;
				const successMessageDuration = this.getResponsiveSetting(successMessageDurationControl);
				const duration = this.getDuration(successMessageDuration);
				const currentWidth = element.currentTarget.getBoundingClientRect().width;
				const currentHeight = element.currentTarget.getBoundingClientRect().height;
				this.elements.mainV3.style.setProperty("--e-floating-bars-coupon-width", `${currentWidth}px`);
				this.elements.mainV3.style.setProperty("--e-floating-bars-coupon-height", `${currentHeight}px`);
				copyToClipboard(text);
				this.elements.codeTextGroup.classList.add(isHidden);
				this.elements.successTextGroup.classList.remove(isHidden);
				setTimeout(() => {
					this.elements.codeTextGroup.classList.remove(isHidden);
					this.elements.successTextGroup.classList.add(isHidden);
					this.elements.mainV3.style.setProperty("--e-floating-bars-coupon-width", "initial");
					this.elements.mainV3.style.setProperty("--e-floating-bars-coupon-height", "initial");
				}, duration);
			}
			initDefaultState() {
				const { hasEntranceAnimation } = this.getSettings("constants");
				if (this.isStickyTop()) this.handleWPAdminBar();
				if (this.hasStickyElements()) this.handleStickyElements();
				else if (this.isStickyTop()) this.applyBodyPadding();
				if (this.elements.main && !this.elements.couponButton.classList.contains(hasEntranceAnimation) && !elementorFrontend.isEditMode()) this.focusOnLoad();
			}
			setupInnerContainer() {
				this.elements.main.closest(".e-con-inner").classList.add("e-con-inner--floating-bars");
				this.elements.main.closest(".e-con").classList.add("e-con--floating-bars");
			}
			onInit(...args) {
				const { hasEntranceAnimation } = this.getSettings("constants");
				super.onInit(...args);
				this.clickTrackingHandler = new ClickTrackingHandler({ $element: this.$element });
				new FloatingBarDomHelper(this.$element).maybeMoveToTop();
				if (this.elements.couponButton && this.elements.couponButton.classList.contains(hasEntranceAnimation)) this.initEntranceAnimation();
				this.initDefaultState();
				this.setupInnerContainer();
			}
		};
	}));
	//#endregion
	//#region modules/floating-buttons/assets/js/frontend/frontend.js
	var frontend_default$1 = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			if (elementorFrontend.config.experimentalFeatures.container) {
				[
					"contact-buttons-var-1",
					"contact-buttons-var-3",
					"contact-buttons-var-4",
					"contact-buttons-var-5",
					"contact-buttons-var-6",
					"contact-buttons-var-7",
					"contact-buttons-var-8",
					"contact-buttons-var-9"
				].forEach((handler) => {
					elementorFrontend.elementsHandler.attachHandler(handler, () => __vitePreload(() => Promise.resolve().then(() => (init_contact_buttons(), contact_buttons_exports)), void 0));
				});
				elementorFrontend.elementsHandler.attachHandler("contact-buttons-var-10", () => __vitePreload(() => Promise.resolve().then(() => (init_contact_buttons_v10(), contact_buttons_v10_exports)), void 0));
				elementorFrontend.elementsHandler.attachHandler("floating-bars-var-2", () => __vitePreload(() => Promise.resolve().then(() => (init_floating_bars_v2(), floating_bars_v2_exports)), void 0));
				elementorFrontend.elementsHandler.attachHandler("floating-bars-var-3", () => __vitePreload(() => Promise.resolve().then(() => (init_floating_bars_v3(), floating_bars_v3_exports)), void 0));
			}
		}
	};
	//#endregion
	//#region modules/search/assets/js/frontend/handlers/search.js
	var search_exports = /* @__PURE__ */ __exportAll({ default: () => Search });
	var __defProp$1, __defNormalProp$1, __publicField$1, Search;
	var init_search = __esmMin((() => {
		init_run_element_handlers();
		__defProp$1 = Object.defineProperty;
		__defNormalProp$1 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$1(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__publicField$1 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
		Search = class extends elementorModules.frontend.handlers.Base {
			constructor() {
				super(...arguments);
				__publicField$1(this, "debounceTimeoutId");
				__publicField$1(this, "page_number");
			}
			__construct(...args) {
				super.__construct(...args);
				elementorFrontend.hooks.addAction("search:results-displayed", (id) => {
					if (id === this.getID()) this.hideOtherResults();
				});
			}
			getDefaultSettings() {
				return {
					selectors: {
						searchWrapper: ".e-search",
						searchField: ".e-search-input",
						submitButton: ".e-search-submit",
						clearIcon: ".e-search-input-wrapper > svg, .e-search-input-wrapper > i",
						searchIcon: ".e-search-label > svg, .e-search-label > i",
						resultsContainer: ".e-search-results-container",
						results: ".e-search-results",
						links: "a.page-numbers:not(.current)"
					},
					classes: {
						searchResultsListWrapper: "e-search-results-list",
						searchResultsPagination: "elementor-pagination"
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					searchWidget: this.$element[0],
					searchWrapper: this.$element[0].querySelector(selectors.searchWrapper),
					searchField: this.$element[0].querySelector(selectors.searchField),
					submitButton: this.$element[0].querySelector(selectors.submitButton),
					clearIcon: this.$element[0].querySelector(selectors.clearIcon),
					searchIcon: this.$element[0].querySelector(selectors.searchIcon),
					resultsContainer: this.$element[0].querySelector(selectors.resultsContainer),
					results: this.$element[0].querySelector(selectors.results),
					links: this.$element[0].querySelectorAll(selectors.links)
				};
			}
			onInit() {
				super.onInit();
				this.changeClearIconVisibility(true);
				this.updateInputStyle();
				this.toggleSearchResultsVisibility = this.toggleSearchResultsVisibility.bind(this);
				document.addEventListener("click", this.toggleSearchResultsVisibility);
				document.fonts.ready.then(() => this.updateInputStyle());
			}
			onDestroy() {
				document.removeEventListener("click", this.toggleSearchResultsVisibility);
			}
			bindEvents() {
				var _a;
				this.elements.submitButton.addEventListener("click", this.onSubmit.bind(this));
				this.elements.searchField.addEventListener("input", (event) => {
					this.changeClearIconVisibility(!event.target.value.length);
					this.debounce(this.onType)(event);
				});
				this.elements.searchField.addEventListener("keydown", this.onSearchFieldKeydown.bind(this));
				this.elements.searchWidget.addEventListener("click", this.onClick.bind(this));
				["focusin", "focusout"].forEach((eventType) => {
					this.elements.searchField.addEventListener(eventType, this.toggleWidgetFocusClass.bind(this));
				});
				(_a = this.elements.clearIcon) == null || _a.addEventListener("click", this.onClear.bind(this));
				this.linksEventListeners();
			}
			linksEventListeners() {
				if (!this.elements.links.length) return;
				this.elements.links.forEach((link) => {
					link.addEventListener("click", (event) => {
						this.handleLinkClick(event);
					});
				});
			}
			handleLinkClick(event) {
				event.preventDefault();
				const nextPageUrl = event == null ? void 0 : event.target.getAttribute("href");
				const pageNumber = new URLSearchParams(new URL(nextPageUrl).search).get("e-search-page");
				this.page_number = pageNumber ? parseInt(pageNumber, 10) : 1;
				this.removeLinksListeners();
				this.renderLiveResults();
			}
			removeLinksListeners() {
				if (!this.elements.links.length) return;
				this.elements.links.forEach((link) => {
					link.removeEventListener("click", this.handleLinkClick);
				});
			}
			reInitLinks() {
				this.elements.links = document.querySelectorAll(`[data-id="${this.getID()}"] a.page-numbers:not(.current)`);
				this.linksEventListeners();
			}
			onClick() {
				this.elements.resultsContainer.classList.add("hide-loader");
			}
			onType(event) {
				event.preventDefault();
				this.updateAriaLabel(this.elements.searchField.value);
				if (!this.elements.searchField.value.length) {
					this.clearResultsMarkup();
					return;
				}
				const minimumSearchLength = this.getMinimumSearchLength();
				if (this.shouldShowLiveResults() && this.elements.searchField.value.length >= minimumSearchLength) {
					this.page_number = 1;
					this.renderLiveResults();
				}
			}
			toggleWidgetFocusClass(event) {
				const isFocusIn = "focusin" === event.type;
				this.$element[0].classList.toggle("e-focus", isFocusIn);
			}
			onSubmit(event) {
				if (elementorFrontend.isEditMode()) event.preventDefault();
			}
			onClear(event) {
				event.preventDefault();
				this.elements.searchField.value = "";
				this.clearResultsMarkup();
				this.elements.searchField.focus();
				this.changeClearIconVisibility(true);
			}
			onSearchFieldKeydown(event) {
				if ("Enter" === event.code) {
					this.clearResultsMarkup();
					this.onSubmit(event);
				}
			}
			fetchUpdatedSearchWidgetMarkup() {
				return fetch(`${elementorProFrontend.config.urls.rest}elementor-pro/v1/refresh-search`, this.getFetchArgumentsForSearchUpdate());
			}
			getMinimumSearchLength() {
				return this.getElementSettings().minimum_search_characters || 3;
			}
			shouldShowLiveResults() {
				return this.getElementSettings().live_results && this.getElementSettings().template_id;
			}
			renderLiveResults() {
				if (!document.querySelector(`.elementor-element-${this.getID()}`)) return;
				if (!this.elements.searchField.value) {
					this.clearResultsMarkup();
					return;
				}
				this.elements.resultsContainer.classList.remove("hide-loader");
				this.elements.resultsContainer.classList.remove("hidden");
				return this.fetchUpdatedSearchWidgetMarkup().then((response) => {
					if (!(response instanceof Response) || !(response == null ? void 0 : response.ok) || 400 <= (response == null ? void 0 : response.status)) return {};
					return response.json();
				}).catch(() => {
					return {};
				}).then((response) => {
					if (!(response == null ? void 0 : response.data)) {
						this.updateAriaExpanded(false);
						return;
					}
					const resultNode = this.createResultNode(response);
					this.elements.results.replaceChildren(resultNode.resultContentNode);
					this.elements.results.append(resultNode.paginationNode);
					this.elements.resultsContainer.classList.add("hide-loader");
					this.maybeHandleNoResults(resultNode.resultContentNode);
					elementorFrontend.hooks.doAction("search:results-updated");
				}).finally(() => {
					runElementHandlers(document.querySelectorAll(`[data-id="${this.getID()}"] .e-loop-item`));
					this.reInitLinks();
					if (ElementorProFrontendConfig.settings.lazy_load_background_images) document.dispatchEvent(new Event("elementor/lazyload/observe"));
				});
			}
			maybeHandleNoResults(resultsNode) {
				const isNoResultsMessage = !!resultsNode.querySelector(".e-search-nothing-found-message");
				this.elements.results.classList[isNoResultsMessage ? "add" : "remove"]("no-results");
				if (!isNoResultsMessage) this.hideOtherResults();
			}
			hideOtherResults(id = null) {
				if (id && id !== this.getID()) return;
				const visibleResultsContainers = document.querySelectorAll(`${this.getSettings("selectors").resultsContainer}:not(.hidden)`);
				Array.from(visibleResultsContainers).filter((resultsContainer) => !resultsContainer.closest(`.elementor-element-${this.getID()}`)).forEach((resultsContainer) => resultsContainer.classList.add("hidden"));
			}
			createResultNode(responseData) {
				const resultContentNode = document.createElement("div");
				const searchResultsList = this.getSettings("classes.searchResultsListWrapper");
				const paginationNode = document.createElement("nav");
				const searchResultPagination = this.getSettings("classes.searchResultsPagination");
				const searchResultPaginationAriaLabel = "Pagination";
				paginationNode.setAttribute("class", searchResultPagination);
				paginationNode.setAttribute("aria-label", searchResultPaginationAriaLabel);
				resultContentNode.setAttribute("class", searchResultsList);
				paginationNode.innerHTML = responseData.pagination;
				resultContentNode.innerHTML = responseData.data;
				const hasResults = resultContentNode.querySelectorAll(".e-loop-item").length > 0;
				this.updateAriaExpanded(hasResults);
				return {
					resultContentNode,
					paginationNode
				};
			}
			updateAriaExpanded(expanded) {
				this.elements.searchField.setAttribute("aria-expanded", expanded ? "true" : "false");
			}
			updateAriaLabel(searchTerms) {
				if (searchTerms) this.elements.resultsContainer.setAttribute("aria-label", `Results for ${searchTerms}`);
				else this.elements.resultsContainer.removeAttribute("aria-label");
			}
			clearResultsMarkup() {
				this.elements.results.innerHTML = "";
				this.updateAriaExpanded(false);
			}
			getFetchArgumentsForSearchUpdate() {
				var _a;
				var _b;
				const data = this.prepareSearchUpdateRequestData();
				const args = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data)
				};
				if (elementorFrontend.isEditMode() && !!((_a = elementorPro.config.eSearch) == null ? void 0 : _a.nonce)) args.headers["X-WP-Nonce"] = (_b = elementorPro.config.eSearch) == null ? void 0 : _b.nonce;
				return args;
			}
			prepareSearchUpdateRequestData() {
				var _a;
				var _b;
				const widgetId = "" + this.getID();
				const breakpoint = (_b = (_a = elementorFrontend.getCurrentDeviceMode) == null ? void 0 : _a.call(elementorFrontend)) != null ? _b : "desktop";
				const data = {
					post_id: this.getClosestDataElementorId(this.$element[0]),
					widget_id: widgetId,
					search_term: this.elements.searchField.value || "",
					page_number: this.page_number,
					breakpoint
				};
				if (elementorFrontend.isEditMode()) {
					data.widget_model = window.top.$e.components.get("document").utils.findContainerById(widgetId).model.toJSON({ remove: [
						"default",
						"editSettings",
						"defaultEditSettings"
					] });
					data.is_edit_mode = true;
				}
				return data;
			}
			getClosestDataElementorId(element) {
				const closestParent = element.closest("[data-elementor-id]");
				return closestParent ? closestParent.getAttribute("data-elementor-id") : 0;
			}
			debounce(callback, timeout = 300) {
				return (...args) => {
					clearTimeout(this.debounceTimeoutId);
					this.debounceTimeoutId = setTimeout(() => callback.apply(this, args), timeout);
				};
			}
			updateInputStyle(iconSlugs = ["searchIcon", "clearIcon"]) {
				var _a;
				const cssVariableNamesMap = {
					searchIcon: "icon-label",
					clearIcon: "icon-clear"
				};
				const widgetStyle = this.$element[0].style;
				const hiddenRoots = this.getAllDisplayNoneParents(this.$element[0].parentNode);
				this.setElementsDisplay(hiddenRoots, "block");
				for (const iconSlug of iconSlugs) {
					const { width } = ((_a = this.elements[iconSlug]) == null ? void 0 : _a.getBoundingClientRect()) || { width: 0 }, cssVariableSlug = cssVariableNamesMap[iconSlug];
					widgetStyle.setProperty(`--e-search-${cssVariableSlug}-absolute-width`, width + "px");
					this.elements.searchField.classList[width ? "remove" : "add"](`no-${cssVariableSlug}`);
				}
				this.setElementsDisplay(hiddenRoots, "");
				this.elements.searchWrapper.classList.remove("hidden");
			}
			/**
			* Sets the clear icon visibility.
			* @param { boolean } shouldHide true to hide or false to show.
			* @return { void } the width.
			*/
			changeClearIconVisibility(shouldHide) {
				var _a;
				(_a = this.elements.clearIcon) == null || _a.classList[shouldHide ? "add" : "remove"]("hidden");
			}
			toggleSearchResultsVisibility(event) {
				var _a;
				var _b;
				var _c;
				var _d;
				const selectors = this.getSettings("selectors"), widgetWrapper = `.elementor-element-${this.getID()}`, { target } = event, isTargetPartOfResults = !!(target == null ? void 0 : target.closest(`${widgetWrapper} ${selectors.resultsContainer}`)) || ((_a = target == null ? void 0 : target.classList) == null ? void 0 : _a.contains(selectors.resultsContainer)) && !!(target == null ? void 0 : target.closest(widgetWrapper)), isSearchContainerClicked = !!(target == null ? void 0 : target.closest(`${widgetWrapper} ${selectors.searchWrapper}`)), isSearchInputClicked = (_b = target == null ? void 0 : target.classList) == null ? void 0 : _b.contains(selectors.searchField.replace(".", "")), isSearchResultsPresent = (_d = (_c = this.elements.resultsContainer) == null ? void 0 : _c.children) == null ? void 0 : _d.length;
				if (isTargetPartOfResults) this.hideOtherResults();
				if (!isSearchResultsPresent || isTargetPartOfResults) return;
				if (!isSearchInputClicked || !isSearchContainerClicked) this.elements.resultsContainer.classList.add("hidden");
			}
			getAllDisplayNoneParents(elementNode, foundElements = []) {
				if (!elementNode || elementNode === document.body) return foundElements;
				if ("none" === window.getComputedStyle(elementNode).display) foundElements.push(elementNode);
				return this.getAllDisplayNoneParents(elementNode.parentNode, foundElements);
			}
			setElementsDisplay(elements, displayValue) {
				elements.forEach((element) => {
					element.style.display = displayValue;
				});
			}
			onElementChange(propertyName) {
				const propertyNameCallbackMap = {
					search_field_icon_label_size: () => this.updateInputStyle(["searchIcon"]),
					icon_clear_size: () => this.updateInputStyle(["clearIcon"])
				};
				if (propertyNameCallbackMap[propertyName]) propertyNameCallbackMap[propertyName]();
			}
		};
	}));
	//#endregion
	//#region modules/search/assets/js/frontend/handlers/search-keyboard-handler.js
	var search_keyboard_handler_exports = /* @__PURE__ */ __exportAll({ default: () => SearchKeyboardHandler });
	var __defProp, __defNormalProp, __publicField, SearchKeyboardHandler;
	var init_search_keyboard_handler = __esmMin((() => {
		init_focusable_element_selectors();
		__defProp = Object.defineProperty;
		__defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value;
		__publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
		SearchKeyboardHandler = class extends elementorModules.frontend.handlers.Base {
			constructor() {
				super(...arguments);
				__publicField(this, "focusableResultElements");
				__publicField(this, "currentResultFocusedIndex", -1);
			}
			__construct(...args) {
				super.__construct(...args);
				elementorFrontend.hooks.addAction("search:results-updated", this.loadResultElementsEvents.bind(this));
			}
			getDefaultSettings() {
				return { selectors: {
					searchWrapper: ".e-search",
					searchField: ".e-search-input",
					resultsContainer: ".e-search-results-container",
					loopItem: ".e-loop-item",
					clearIcon: ".e-search-input-wrapper > svg, .e-search-input-wrapper > i"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					resultsContainer: this.$element[0].querySelector(selectors.resultsContainer),
					searchField: this.$element[0].querySelector(selectors.searchField),
					clearIcon: this.$element[0].querySelector(selectors.clearIcon)
				};
			}
			setFocusableElements(elementContainer) {
				const focusableSelectors = focusableElementSelectors();
				const focusableElements = elementContainer.querySelectorAll(focusableSelectors);
				this.focusableResultElements = Array.from(focusableElements).filter((element) => !element.disabled && !element.inert && element.tabIndex !== -1);
			}
			isSearchInputFocused() {
				return this.elements.searchField === elementorFrontend.elements.window.document.activeElement;
			}
			bindEvents() {
				this.boundHandleKeyboardNavigation = this.handleKeyboardNavigation.bind(this);
				this.boundHandleEscapeKey = this.handleEscapeKey.bind(this);
				this.elements.searchField.addEventListener("keydown", this.boundHandleKeyboardNavigation);
				elementorFrontend.elements.window.document.addEventListener("keydown", this.boundHandleEscapeKey);
				this.elements.searchField.addEventListener("focus", this.openResults.bind(this));
			}
			loadResultElementsEvents() {
				var _a;
				this.setFocusableElements(this.$element[0].querySelector(this.getSettings("selectors.resultsContainer")));
				(_a = this.focusableResultElements) == null || _a.forEach((element) => {
					element.addEventListener("keydown", this.handleKeyboardNavigation.bind(this));
				});
			}
			unbindEvents() {
				if (this.boundHandleKeyboardNavigation) this.elements.searchField.removeEventListener("keydown", this.boundHandleKeyboardNavigation);
				elementorFrontend.elements.window.document.removeEventListener("keydown", this.boundHandleEscapeKey);
				this.elements.searchField.removeEventListener("focus", this.openResults.bind(this));
			}
			handleKeyboardNavigation(event) {
				switch (event.key) {
					case "ArrowDown":
						this.focusNextElement();
						break;
					case "ArrowUp":
						this.focusPreviousElement();
						break;
					case "Enter":
						this.handleEnterKey();
						break;
				}
			}
			areResultsClosed() {
				return 0 === this.elements.resultsContainer.querySelectorAll(this.getSettings("selectors.loopItem")).length || this.elements.resultsContainer.classList.contains("hidden");
			}
			openResults() {
				if (this.areResultsClosed()) {
					this.elements.resultsContainer.classList.remove("hidden");
					elementorFrontend.hooks.doAction("search:results-displayed", this.getID());
				}
			}
			handleEnterKey() {
				this.closeResults();
			}
			handleEscapeKey(event) {
				if ("Escape" !== event.key) return;
				const activeElement = elementorFrontend.elements.window.document.activeElement;
				if (this.elements.resultsContainer.contains(activeElement) || false) this.elements.searchField.focus();
				this.closeResults();
			}
			focusNextElement() {
				if (this.isSearchInputFocused()) this.currentResultFocusedIndex = 0;
				else {
					this.currentResultFocusedIndex++;
					this.checkFocusIndexBounds();
				}
				this.updateFocus();
			}
			focusPreviousElement() {
				if (this.isSearchInputFocused()) this.currentResultFocusedIndex = this.focusableResultElements.length - 1;
				else {
					this.currentResultFocusedIndex--;
					this.checkFocusIndexBounds();
				}
				this.updateFocus();
			}
			checkFocusIndexBounds() {
				if (this.currentResultFocusedIndex >= this.focusableResultElements.length) this.currentResultFocusedIndex = -1;
				else if (this.currentResultFocusedIndex < -1) this.currentResultFocusedIndex = this.focusableResultElements.length - 1;
			}
			updateFocus() {
				if (-1 === this.currentResultFocusedIndex) this.focusSearchAndMoveCursorToEnd();
				else this.setFocusToElement(this.focusableResultElements[this.currentResultFocusedIndex]);
			}
			closeResults() {
				this.elements.resultsContainer.classList.add("hidden");
				this.updateAriaExpanded(false);
			}
			updateAriaExpanded(expanded) {
				this.elements.searchField.setAttribute("aria-expanded", expanded);
			}
			focusSearchAndMoveCursorToEnd() {
				const searchField = this.elements.searchField;
				const length = searchField.value.length;
				this.setFocusToElement(this.elements.searchField);
				searchField.setSelectionRange(length, length);
			}
			setFocusToElement(element) {
				element.focus();
			}
		};
	}));
	//#endregion
	//#region modules/search/assets/js/frontend/frontend.js
	var frontend_default = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			super();
			elementorFrontend.elementsHandler.attachHandler("search", [() => __vitePreload(() => Promise.resolve().then(() => (init_search(), search_exports)), void 0), () => __vitePreload(() => Promise.resolve().then(() => (init_search_keyboard_handler(), search_keyboard_handler_exports)), void 0)]);
		}
	};
	//#endregion
	//#region assets/dev/js/frontend/elements-handlers.js
	init_objectSpread2();
	var extendDefaultHandlers = (defaultHandlers) => {
		const handlers = {
			animatedText: frontend_default$23,
			carousel: frontend_default$22,
			countdown: frontend_default$21,
			dynamicTags: frontend_default$20,
			hotspot: frontend_default$19,
			form: frontend_default$18,
			gallery: frontend_default$17,
			lottie: frontend_default$16,
			nav_menu: frontend_default$15,
			popup: frontend_default$14,
			posts: frontend_default$13,
			share_buttons: frontend_default$12,
			slides: frontend_default$11,
			social: frontend_default$10,
			themeBuilder: frontend_default$8,
			themeElements: frontend_default$7,
			woocommerce: frontend_default$6,
			tableOfContents: frontend_default$9,
			loopBuilder: frontend_default$5,
			megaMenu: frontend_default$4,
			nestedCarousel: frontend_default$3,
			taxonomyFilter: LoopFilter,
			offCanvas: frontend_default$2,
			contactButtons: frontend_default$1,
			search: frontend_default
		};
		return _objectSpread2(_objectSpread2({}, defaultHandlers), handlers);
	};
	elementorProFrontend.on("elementor-pro/modules/init/before", () => {
		elementorFrontend.hooks.addFilter("elementor-pro/frontend/handlers", extendDefaultHandlers);
	});
	//#endregion
})(wp.i18n);

//# sourceMappingURL=elements-handlers.js.map
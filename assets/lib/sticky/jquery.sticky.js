/*
 * By Elementor Team
 */
( function( $ ) {
	var Sticky = function( element, userSettings ) {
		var $element,
			isSticky = false,
			isFollowingParent = false,
			isReachedEffectsPoint = false,
			elements = {},
			settings,
			elementOffsetValue,
			elementWidth;

		var defaultSettings = {
			to: 'top',
			offset: 0,
			effectsOffset: 0,
			parent: false,
			classes: {
				sticky: 'sticky',
				stickyActive: 'sticky-active',
				stickyEffects: 'sticky-effects',
				spacer: 'sticky-spacer',
			},
			isRTL: false,
			isScrollSnapActive: false,
			handleScrollbarWidth: false,
		};

		var initElements = function() {
			$element = $( element ).addClass( settings.classes.sticky );

			elements.$window = $( window );
			elements.$body = $( document ).find( 'body' );

			if ( settings.parent ) {
				elements.$parent = $element.parent();

				if ( 'parent' !== settings.parent ) {
					elements.$parent = elements.$parent.closest( settings.parent );
				}
			}
		};

		var initSettings = function() {
			settings = jQuery.extend( true, defaultSettings, userSettings );
		};

		var bindEvents = function() {
			elements.$window.on( 'resize', onWindowResize );

			if ( settings.isScrollSnapActive ) {
				elements.$body.on( 'scroll', onWindowScroll );
			} else {
				elements.$window.on( 'scroll', onWindowScroll );
			}
		};

		var unbindEvents = function() {
			elements.$window
				.off( 'scroll', onWindowScroll )
				.off( 'resize', onWindowResize );

			elements.$body.off( 'scroll', onWindowScroll );
		};

		var init = function() {
			initSettings();

			initElements();

			bindEvents();

			checkPosition();
		};

		var backupCSS = function( $elementBackupCSS, backupState, properties ) {
			var css = {},
				elementStyle = $elementBackupCSS[ 0 ].style;

			properties.forEach( function( property ) {
				css[ property ] = undefined !== elementStyle[ property ] ? elementStyle[ property ] : '';
			} );

			$elementBackupCSS.data( 'css-backup-' + backupState, css );
		};

		var getCSSBackup = function( $elementCSSBackup, backupState ) {
			return $elementCSSBackup.data( 'css-backup-' + backupState );
		};

		const updateElementSizesData = () => {
			elementWidth = getElementOuterSize( $element, 'width' );
			elementOffsetValue = $element.offset().left;

			if ( settings.isRTL ) {
				// `window.innerWidth` includes the scrollbar while `document.body.offsetWidth` doesn't.
				const documentWidth = settings.handleScrollbarWidth ? window.innerWidth : document.body.offsetWidth;

				elementOffsetValue = Math.max( documentWidth - elementWidth - elementOffsetValue, 0 );
			}
		}

		var addSpacer = function() {
			elements.$spacer = $element.clone()
				.addClass( settings.classes.spacer )
				.css( {
					visibility: 'hidden',
					transition: 'none',
					animation: 'none',
				} );

			$element.after( elements.$spacer );
		};

		var removeSpacer = function() {
			elements.$spacer.remove();
		};

		var stickElement = function() {
			backupCSS( $element, 'unsticky', [ 'position', 'width', 'margin-top', 'margin-bottom', 'top', 'bottom', 'inset-inline-start' ] );

			const css = {
				position: 'fixed',
				width: elementWidth,
				marginTop: 0,
				marginBottom: 0,
			};

			css[ settings.to ] = settings.offset;
			css[ 'top' === settings.to ? 'bottom' : 'top' ] = '';

			if ( elementOffsetValue ) {
				css[ 'inset-inline-start' ] = elementOffsetValue + 'px';
			}

			$element
				.css( css )
				.addClass( settings.classes.stickyActive );
		};

		var unstickElement = function() {
			$element
				.css( getCSSBackup( $element, 'unsticky' ) )
				.removeClass( settings.classes.stickyActive );
		};

		var followParent = function() {
			backupCSS( elements.$parent, 'childNotFollowing', [ 'position' ] );

			elements.$parent.css( 'position', 'relative' );

			backupCSS( $element, 'notFollowing', [ 'position', 'inset-inline-start', 'top', 'bottom' ] );

			const css = {
				position: 'absolute',
			};

			elementOffsetValue = elements.$spacer.position().left;

			if ( settings.isRTL ) {
				const parentWidth = $element.parent().outerWidth(),
					elementOffsetValueLeft = elements.$spacer.position().left;

				elementWidth = elements.$spacer.outerWidth();
				elementOffsetValue = Math.max( parentWidth - elementWidth - elementOffsetValueLeft, 0 );
			}

			css[ 'inset-inline-start' ] = elementOffsetValue + 'px';

			css[ settings.to ] = '';

			css[ 'top' === settings.to ? 'bottom' : 'top' ] = 0;

			$element.css( css );

			isFollowingParent = true;
		};

		var unfollowParent = function() {
			elements.$parent.css( getCSSBackup( elements.$parent, 'childNotFollowing' ) );

			$element.css( getCSSBackup( $element, 'notFollowing' ) );

			isFollowingParent = false;
		};

		var getElementOuterSize = function( $elementOuterSize, dimension, includeMargins ) {
			var computedStyle = getComputedStyle( $elementOuterSize[ 0 ] ),
				elementSize = parseFloat( computedStyle[ dimension ] ),
				sides = 'height' === dimension ? [ 'top', 'bottom' ] : [ 'left', 'right' ],
				propertiesToAdd = [];

			if ( 'border-box' !== computedStyle.boxSizing ) {
				propertiesToAdd.push( 'border', 'padding' );
			}

			if ( includeMargins ) {
				propertiesToAdd.push( 'margin' );
			}

			propertiesToAdd.forEach( function( property ) {
				sides.forEach( function( side ) {
					elementSize += parseFloat( computedStyle[ property + '-' + side ] );
				} );
			} );

			return elementSize;
		};

		var getElementViewportOffset = function( $elementViewportOffset ) {
			var windowScrollTop = elements.$window.scrollTop(),
				elementHeight = getElementOuterSize( $elementViewportOffset, 'height' ),
				viewportHeight = innerHeight,
				elementOffsetFromTop = $elementViewportOffset.offset().top,
				distanceFromTop = elementOffsetFromTop - windowScrollTop,
				topFromBottom = distanceFromTop - viewportHeight;

			return {
				top: {
					fromTop: distanceFromTop,
					fromBottom: topFromBottom,
				},
				bottom: {
					fromTop: distanceFromTop + elementHeight,
					fromBottom: topFromBottom + elementHeight,
				},
			};
		};

		var stick = function() {
			updateElementSizesData();

			addSpacer();

			stickElement();

			isSticky = true;

			$element.trigger( 'sticky:stick' );
		};

		var unstick = function() {
			unstickElement();

			removeSpacer();

			isSticky = false;

			$element.trigger( 'sticky:unstick' );
		};

		var checkParent = function() {
			var elementOffset = getElementViewportOffset( $element ),
				isTop = 'top' === settings.to;

			if ( isFollowingParent ) {
				var isNeedUnfollowing = isTop ? elementOffset.top.fromTop > settings.offset : elementOffset.bottom.fromBottom < -settings.offset;

				if ( isNeedUnfollowing ) {
					unfollowParent();
				}
			} else {
				var parentOffset = getElementViewportOffset( elements.$parent ),
					parentStyle = getComputedStyle( elements.$parent[ 0 ] ),
					borderWidthToDecrease = parseFloat( parentStyle[ isTop ? 'borderBottomWidth' : 'borderTopWidth' ] ),
					parentViewportDistance = isTop ? parentOffset.bottom.fromTop - borderWidthToDecrease : parentOffset.top.fromBottom + borderWidthToDecrease,
					isNeedFollowing = isTop ? parentViewportDistance <= elementOffset.bottom.fromTop : parentViewportDistance >= elementOffset.top.fromBottom;

				if ( isNeedFollowing ) {
					followParent();
				}
			}
		};

		var checkEffectsPoint = function( distanceFromTriggerPoint ) {
			if ( isReachedEffectsPoint && -distanceFromTriggerPoint < settings.effectsOffset ) {
				$element.removeClass( settings.classes.stickyEffects );

				isReachedEffectsPoint = false;
			} else if ( ! isReachedEffectsPoint && -distanceFromTriggerPoint >= settings.effectsOffset ) {
				$element.addClass( settings.classes.stickyEffects );

				isReachedEffectsPoint = true;
			}
		};

		var checkPosition = function() {
			var offset = settings.offset,
				distanceFromTriggerPoint;

			if ( isSticky ) {
				var spacerViewportOffset = getElementViewportOffset( elements.$spacer );

				distanceFromTriggerPoint = 'top' === settings.to ? spacerViewportOffset.top.fromTop - offset : -spacerViewportOffset.bottom.fromBottom - offset;

				if ( settings.parent ) {
					checkParent();
				}

				if ( distanceFromTriggerPoint > 0 ) {
					unstick();
				}
			} else {
				var elementViewportOffset = getElementViewportOffset( $element );

				distanceFromTriggerPoint = 'top' === settings.to ? elementViewportOffset.top.fromTop - offset : -elementViewportOffset.bottom.fromBottom - offset;

				if ( distanceFromTriggerPoint <= 0 ) {
					stick();

					if ( settings.parent ) {
						checkParent();
					}
				}
			}

			checkEffectsPoint( distanceFromTriggerPoint );
		};

		var onWindowScroll = function() {
			checkPosition();
		};

		var onWindowResize = function() {
			if ( ! isSticky ) {
				return;
			}

			unstickElement();

			removeSpacer();

			updateElementSizesData();

			addSpacer();

			stickElement();

			if ( settings.parent ) {
				// Force recalculation of the relation between the element and its parent.
				isFollowingParent = false;

				checkParent();
			}
		};

		this.destroy = function() {
			if ( isSticky ) {
				unstick();
			}

			unbindEvents();

			$element.removeClass( settings.classes.sticky );
		};

		init();
	};

	$.fn.sticky = function( settings ) {
		var isCommand = 'string' === typeof settings;

		this.each( function() {
			var $this = $( this );

			if ( ! isCommand ) {
				$this.data( 'sticky', new Sticky( this, settings ) );

				return;
			}

			var instance = $this.data( 'sticky' );

			if ( ! instance ) {
				throw Error( 'Trying to perform the `' + settings + '` method prior to initialization' );
			}

			if ( ! instance[ settings ] ) {
				throw ReferenceError( 'Method `' + settings + '` not found in sticky instance' );
			}

			instance[ settings ].apply( instance, Array.prototype.slice.call( arguments, 1 ) );

			if ( 'destroy' === settings ) {
				$this.removeData( 'sticky' );
			}
		} );

		return this;
	};

	window.Sticky = Sticky;
} )( jQuery );

# Page Transitions Web Component - `<e-page-transition>`

## Product Knowledge Base:

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)


- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)


- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
  

- [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)


- [Barba.js](https://barba.js.org/) - 3rd party page transitions library.
  

- [Swup.js](https://swup.js.org/) - 3rd party page transitions library.
  

- [Instant Page](https://instant.page/) - Improves pages load using `<link relf="prefetch" />`

## Technical Description:

A custom element that's responsible for creating & animating Elementor's Page Transitions.

It's built as a Web Component and uses [Instant Page](https://instant.page/) library.

This element can render an icon, an image or a custom pre-loader (using `<e-preloader>`) based on HTML attributes.
(`preloader-type`, `preloader-icon`, `preloader-image-url`, `preloader-animation-type`).

## Attention Needed / Known Issues:
- The CSS isn't encapsulated because some styles (CSS variables, etc.) are applied from the `Site Settings`, and we didn't use Shadow DOM, 
  	so any external CSS _could potentially be applied_ to this element. Use with caution.


- Most of the styles are based on CSS variables (colors, animations, etc.) - see the code for reference.


- The animation sequence is pretty complex. On page _enter_, the Page Transition component actually _exits_ the viewport, so it's treated as an exit
	animation in the code (and vice-versa).
  	Additionally, the exit animation is actually handled by CSS, and the entrance animation by JS, which means the transition
  	between pages is just an optical illusion for the user (plus it makes the code harder to maintain). 
  	We chose this approach since it's the only one that can make such feature work inside an existing WordPress website
  	without converting everything to an SPA using AJAX over a headless WordPress setup (Or similar solutions).


- "Instant Page" creates a `<link rel="prefetch" />` each time the mouse enters a link that should trigger a Page Transition.

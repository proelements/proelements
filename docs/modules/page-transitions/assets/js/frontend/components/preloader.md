# Preloader Web Component - `<e-preloader>`

## Product Knowledge Base:

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)


- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)


- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
  

- [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
  

- [CSS Loading Animations](https://codepen.io/EvyatarDa/pen/zNmdGb)

## Technical Description:

A custom element that's responsible for preloading animations in Elementor's Page Transitions.

It's built as a Web Component and renders some basic HTML structures for loading animations.

This element can render custom pre-loaders based on the `type` attribute (`circle`, `circle-dashed`, `bouncing-dots`, `pulsing-dots`, etc.).

## Attention Needed / Known Issues:
- The CSS isn't encapsulated, and we didn't use Shadow DOM, so any external CSS _could potentially be applied_ to this element,
	so use with caution.


- Most of the styles are based on CSS variables (colors, animations, etc.) - see the code for reference.


- All of the CSS selectors are based on the element name and the `type` attribute, and not using class names, so note
	that when you want to style a loader using an external CSS.

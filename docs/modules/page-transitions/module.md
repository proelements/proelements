# Page Transitions Module

## Product Knowledge Base:

- [ Prefetching, preloading, prebrowsing ](https://css-tricks.com/prefetching-preloading-prebrowsing/) on CSS Tricks.

  
- [Instant Page](https://instant.page/)


- [Preload, prefetch and other <link> tags](https://3perf.com/blog/link-rels/).

## Technical Description:

This is the `Page Trantisions` module for the Pro version of Elementor (An experiment as of writing those lines).

Page Transitions have been common in the web world for several years. Therefore, in order to align with the industry, we've added this feature.

Our Page Transitions lets the user create rich transition between internal pages using spectacular entrance & exit animations, as well as custom loaders.


## Attention Needed / Known Issues:

- At first, we thought about using a Page Transitions library for this feature, but all of them (or at least those we checked) don't 
	really unloads the current page and loads a new one. They all use a custom mechanism that loads the next page into a "hidden browser tab"
  	and then injects the HTML markup into the current page, while replacing the old content, which causes issues with scripts
  	that should run on specific load events (`load`, `DOMContentLoaded`, etc.).
  
	Therefore, we ended up using a 3rd party library called [Instant Page](https://instant.page/) for faster loading times.
	Using this polyfill decreased the loading times by about 30% (!).

  See Also: [Barba.js](https://barba.js.org/), [Swup.js](https://swup.js.org/), [Instant Page](https://instant.page/).


- This feature is also our first one ever that uses [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) (!).
  	Due to some technical difficulties (specifically changing settings on-the-fly from the Page Settings panel),
  	we decided to use Web Components for the Page Transition element, and for the custom loaders
  	(`e-page-transition` & `e-preloader` respectively).


___
See Also: [`module.js`](./assets/js/editor/module.md), [`<e-page-trantition>`](./assets/js/frontend/components/page-transition.md) & [`<e-preloader>`](./assets/js/frontend/components/preloader.md)

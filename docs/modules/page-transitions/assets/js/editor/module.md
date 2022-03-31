# Page Transitions Editor Module

## Product Knowledge Base:

- [Elementor Commands API](https://github.com/elementor/elementor/blob/master/docs/core/common/assets/js/api/core/commands.md)

## Technical Description:

The Editor JS module for Elementor's Page Transitions.

It registers all of the `hooks` & `commands` that are used in this module.


### Hooks:

- Data Hook - `AnimatePageTransition` - Animates the Page Transition component when entrance / exit animations are changed.


- Data Hook - `ReRenderPageTransition` - Passes the new settings from the panel as attributes to the Page Transition component,
	in order to re-render it.


- Route Hook - `PageTransitionPreview` - Changes the Page Transition component state to preview mode when navigating
	to the `Site Settings -> Page Transitions` tab, so the user will be able to see what's changed in the Page Transition.

### Commands:

- `$e.run( 'page-transitions/animate' )` - Animates the Page Transition component.

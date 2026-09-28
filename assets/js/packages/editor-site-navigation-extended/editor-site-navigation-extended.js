/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_editor_site_navigation, _elementor_icons) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#endregion
	//#region packages/packages/pro/editor-site-navigation-extended/src/icons-map.ts
	function extendDocumentsIcons() {
		if (_elementor_editor_site_navigation.extendIconsMap) (0, _elementor_editor_site_navigation.extendIconsMap)({
			header: _elementor_icons.HeaderTemplateIcon,
			footer: _elementor_icons.FooterTemplateIcon,
			"single-post": _elementor_icons.PostTypeIcon,
			"single-page": _elementor_icons.PageTypeIcon,
			popup: _elementor_icons.PopupTemplateIcon,
			archive: _elementor_icons.ArchiveTemplateIcon,
			"search-results": _elementor_icons.SearchResultsTemplateIcon,
			"loop-item": _elementor_icons.LoopItemTemplateIcon,
			"error-404": _elementor_icons.Error404TemplateIcon,
			"landing-page": _elementor_icons.LandingPageTemplateIcon
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-site-navigation-extended/src/init.ts
	function init() {
		extendDocumentsIcons();
	}
	//#endregion
	exports.init = init;
})(this.elementorV2.editorSiteNavigationExtended = this.elementorV2.editorSiteNavigationExtended || {}, elementorV2.editorSiteNavigation, elementorV2.icons);

window.elementorV2.editorSiteNavigationExtended?.init?.();
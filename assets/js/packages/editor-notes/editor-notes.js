/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_editor_app_bar, _elementor_editor_v1_adapters, _elementor_icons, _wordpress_i18n) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#endregion
	//#region packages/packages/pro/editor-notes/src/hooks/use-notes-action-props.ts
	function useNotesActionProps() {
		const { isActive, isBlocked } = (0, _elementor_editor_v1_adapters.__privateUseRouteStatus)("notes", { allowedEditModes: ["edit", "preview"] });
		return {
			title: (0, _wordpress_i18n.__)("Notes", "elementor-pro"),
			icon: _elementor_icons.MessageIcon,
			onClick: () => {
				var _extendedWindow$eleme;
				const extendedWindow = window;
				const eventsManager = extendedWindow === null || extendedWindow === void 0 || (_extendedWindow$eleme = extendedWindow.elementorCommon) === null || _extendedWindow$eleme === void 0 ? void 0 : _extendedWindow$eleme.eventsManager;
				const config = eventsManager === null || eventsManager === void 0 ? void 0 : eventsManager.config;
				if (config) eventsManager.dispatchEvent(config.names.topBar.notes, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.notes,
					trigger: config.triggers.toggleClick,
					element: config.elements.buttonIcon
				});
				(0, _elementor_editor_v1_adapters.__privateRunCommand)("notes/toggle");
			},
			selected: isActive,
			disabled: isBlocked
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-notes/src/init.ts
	function init() {
		_elementor_editor_app_bar.mainMenu.registerAction({
			id: "toggle-notes",
			group: "default",
			priority: 20,
			useProps: useNotesActionProps
		});
	}
	//#endregion
	exports.init = init;
})(this.elementorV2.editorNotes = this.elementorV2.editorNotes || {}, elementorV2.editorAppBar, elementorV2.editorV1Adapters, elementorV2.icons, wp.i18n);

window.elementorV2.editorNotes?.init?.();
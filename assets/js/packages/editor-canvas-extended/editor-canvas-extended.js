/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_editor_v1_adapters) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#endregion
	//#region packages/packages/pro/editor-canvas-extended/src/register-drop-container-redirect.ts
	/**
	* Hooks `preview/drop` so widgets land in the correct container during nested edit modes.
	*
	* Panel clicks with empty selection target the document root; drag-and-drop can also miss the
	* subtree being edited. Register this when a scoped context (e.g. component document, loop, etc.)
	* should absorb those drops instead of the page or an outer container.
	*
	* @param config - When to handle drops and how to resolve the redirected container.
	*/
	function registerDropContainerRedirect(config) {
		(0, _elementor_editor_v1_adapters.registerDataHook)("dependency", "preview/drop", (args) => {
			var _args$containers;
			if (!config.shouldHandle()) return true;
			const containers = (_args$containers = args.containers) !== null && _args$containers !== void 0 ? _args$containers : args.container ? [args.container] : [];
			for (const container of containers) {
				const { shouldRedirect, container: redirectedContainer } = config.resolveRedirect(container);
				if (!shouldRedirect) continue;
				if (args.containers) {
					const index = args.containers.indexOf(container);
					args.containers[index] = redirectedContainer;
				} else args.container = redirectedContainer;
			}
			return true;
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-canvas-extended/src/subscribe-to-element-changes.ts
	var ELEMENT_MUTATION_COMMANDS = [
		"document/elements/settings",
		"document/elements/set-settings",
		"document/elements/create",
		"document/elements/delete",
		"document/elements/move"
	];
	/**
	* Subscribes to every V1 element-mutation command (settings, create, delete, move) and calls
	* `onChange` when any id on the affected element's ancestor chain satisfies `shouldNotify`.
	*
	* One composable primitive instead of N per-source listeners вЂ” the caller decides what
	* "affected" means (e.g. `( id ) => id === subtreeRootId` for "notify on subtree change").
	*
	* Ancestors are read off the command's own `container.parent` rather than re-resolved by id,
	* since deleted elements are already gone from the live tree by the time their event fires;
	* the held `container` reference still has an intact `.parent` chain.
	*
	* @param shouldNotify - Return `true` for an ancestor id to trigger `onChange`.
	* @param onChange     - Invoked once per event with a matching ancestor.
	* @return Unsubscribe function.
	*/
	function subscribeToElementChanges(shouldNotify, onChange) {
		return (0, _elementor_editor_v1_adapters.__privateListenTo)(ELEMENT_MUTATION_COMMANDS.map(_elementor_editor_v1_adapters.commandEndEvent), (event) => {
			if (extractAffectedIds(event.args).some(shouldNotify)) onChange();
		});
	}
	function extractAffectedIds(args) {
		var _args$containers;
		return ((args === null || args === void 0 ? void 0 : args.container) ? [args.container] : (_args$containers = args === null || args === void 0 ? void 0 : args.containers) !== null && _args$containers !== void 0 ? _args$containers : []).flatMap(collectAncestorChainIds);
	}
	function collectAncestorChainIds(element) {
		const ids = [];
		let current = element;
		while (current) {
			ids.push(current.id);
			current = current.parent;
		}
		return ids;
	}
	//#endregion
	exports.registerDropContainerRedirect = registerDropContainerRedirect;
	exports.subscribeToElementChanges = subscribeToElementChanges;
})(this.elementorV2.editorCanvasExtended = this.elementorV2.editorCanvasExtended || {}, elementorV2.editorV1Adapters);

window.elementorV2.editorCanvasExtended?.init?.();
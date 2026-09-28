/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#endregion
	//#region packages/packages/pro/core-adapter-utils/src/is-core.ts
	function getCoreVersion() {
		var _window$elementorComm;
		var _window$elementorComm2;
		return (_window$elementorComm = (_window$elementorComm2 = window.elementorCommonConfig) === null || _window$elementorComm2 === void 0 ? void 0 : _window$elementorComm2.version) !== null && _window$elementorComm !== void 0 ? _window$elementorComm : "0.0";
	}
	function isCoreAtLeast(minVersion) {
		const [major, minor] = getCoreVersion().split(".").map(Number);
		const [minMajor, minMinor] = minVersion.split(".").map(Number);
		return major > minMajor || major === minMajor && minor >= minMinor;
	}
	//#endregion
	exports.isCoreAtLeast = isCoreAtLeast;
})(this.elementorV2.coreAdapterUtils = this.elementorV2.coreAdapterUtils || {});

window.elementorV2.coreAdapterUtils?.init?.();
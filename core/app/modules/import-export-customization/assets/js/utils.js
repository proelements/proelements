import { isVersionGreaterOrEqual } from '@elementor/utils';

export function isExperimentActive( experimentName ) {
	return !! globalThis.elementorCommon?.config?.experimentalFeatures?.[ experimentName ];
}

export function isAtomicElementsFeatureActive() {
	return isExperimentActive( 'e_atomic_elements' );
}

const COMPONENT_OVERRIDES_MIN_CORE_VERSION = '4.4';
const SITE_SETTINGS_MANIFEST_KEY = 'site-settings';
const WP_CONTENT_MANIFEST_KEY = 'wp-content';
const REGISTRY_STATE_KEY = '__elementorImportExportCustomization';

function getCoreVersion() {
	return globalThis.elementorCommon?.config?.version ?? null;
}

export function getCustomizationDialogsRegistry() {
	return globalThis.elementorModules?.importExport?.customizationDialogsRegistry ?? null;
}

export function isCustomizationDialogsUiRegistered() {
	const registry = getCustomizationDialogsRegistry();

	return !! registry?.[ REGISTRY_STATE_KEY ]?.hasRegisteredUi;
}

export function supportsCustomizationDialogOverrides() {
	return isVersionGreaterOrEqual( getCoreVersion(), COMPONENT_OVERRIDES_MIN_CORE_VERSION );
}

export function getCustomizationDialog( dialogKey ) {
	return getCustomizationDialogsRegistry()?.get?.( dialogKey ) ?? null;
}

export function getImportManifest( data ) {
	return data?.uploadedData?.manifest ?? null;
}

export function getManifestItem( data, manifestKey ) {
	return getImportManifest( data )?.[ manifestKey ];
}

export function hasExportedPages( data ) {
	const contentPages = getManifestItem( data, 'content' )?.page || {};
	const wpContentPages = getManifestItem( data, WP_CONTENT_MANIFEST_KEY )?.page || {};

	return Object.keys( contentPages ).length > 0 || Object.keys( wpContentPages ).length > 0;
}

export function hasExportedMenuItems( data ) {
	return Object.keys( getManifestItem( data, WP_CONTENT_MANIFEST_KEY )?.nav_menu_item || {} ).length > 0;
}

export function getSiteSettingsManifest( data ) {
	return getManifestItem( data, SITE_SETTINGS_MANIFEST_KEY );
}

export function isSiteSettingExported( data, settingKey ) {
	return !! getSiteSettingsManifest( data )?.[ settingKey ];
}

export function isClassesExported( data ) {
	return isSiteSettingExported( data, 'classes' );
}

export function isVariablesExported( data ) {
	return isSiteSettingExported( data, 'variables' );
}

export function isDefaultStylesExported( data ) {
	return isSiteSettingExported( data, 'defaultStyles' );
}

export function getImportedClassesCount( data ) {
	return getSiteSettingsManifest( data )?.classesCount ?? 0;
}

export function getImportedVariablesCount( data ) {
	return getSiteSettingsManifest( data )?.variablesCount ?? 0;
}

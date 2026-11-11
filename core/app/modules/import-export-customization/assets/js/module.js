import { KitContentCustomizationDialog } from './components/kit-content-customization-dialog';
import { KitTemplatesCustomizationDialog } from './components/kit-templates-customization-dialog';
import { KitSettingsCustomizationDialog } from './components/kit-settings-customization-dialog';
import {
	MenusSection,
	SitePagesSection,
	TaxonomiesSection,
} from './components/content-overrides';
import {
	ClassesVariablesSection,
} from './components/classes-variables-section';
import {
	CustomCodeSettingsRow,
	CustomFontsSettingsRow,
	CustomIconsSettingsRow,
	ExperimentsSettingsRow,
	GeneralSettingsRow,
	GlobalColorsSettingsRow,
	GlobalFontsSettingsRow,
	ThemeStyleSettingsRow,
} from './components/settings-overrides';
import {
	GlobalWidgetsSection,
	SiteTemplatesSection,
	ThemeBuilderSection,
} from './components/template-overrides';
import {
	KIT_SECTIONS,
	KIT_SECTION_ITEMS,
} from './constants';
import {
	getCustomizationDialogsRegistry,
	getImportManifest,
	getManifestItem,
	isCustomizationDialogsUiRegistered,
	isExperimentActive,
	getSiteSettingsManifest,
	supportsCustomizationDialogOverrides,
} from './utils';

export const CUSTOMIZATION_DIALOGS_READY_EVENT = 'elementor/import-export-customization/ready';

function createBooleanSettingInitialStateResolver( manifestKey ) {
	return ( { contextData, includesSettings, isImport } ) => {
		if ( ! isImport ) {
			return includesSettings;
		}

		return includesSettings && !! getSiteSettingsManifest( contextData?.data )?.[ manifestKey ];
	};
}

function createCustomFileInitialStateResolver( manifestKey ) {
	return ( { contextData, includesSettings, isImport } ) => {
		if ( ! isImport ) {
			return includesSettings;
		}

		return includesSettings && !! getManifestItem( contextData?.data, manifestKey );
	};
}

function createTemplateInitialStateResolver( exportGroup ) {
	return ( { contextData, includesTemplates, isImport } ) => {
		if ( ! isImport ) {
			return { enabled: includesTemplates };
		}

		if ( contextData?.isOldExport ) {
			return { enabled: true };
		}

		const manifest = getImportManifest( contextData?.data );
		const exportGroups = elementorAppConfig?.[ 'import-export-customization' ]?.exportGroups || {};
		const enabled = Object.values( manifest?.templates || {} ).some( ( template ) => exportGroups[ template?.doc_type ] === exportGroup );

		return { enabled };
	};
}

export default class Module {
	constructor() {
		this.hasRegisteredCustomizationDialogs = false;
		this.handleCustomizationDialogsReady = this.handleCustomizationDialogsReady.bind( this );

		if ( ! this.isCustomizationDialogsEnabled() ) {
			return;
		}

		if ( ! supportsCustomizationDialogOverrides() ) {
			this.registerSections();
			return;
		}

		if ( isCustomizationDialogsUiRegistered() && this.tryRegisterCustomizationDialogs() ) {
			return;
		}

		globalThis.addEventListener( CUSTOMIZATION_DIALOGS_READY_EVENT, this.handleCustomizationDialogsReady, { once: true } );
	}

	isCustomizationDialogsEnabled() {
		return isExperimentActive( 'import-export-customization' );
	}

	handleCustomizationDialogsReady() {
		this.tryRegisterCustomizationDialogs();
	}

	supportsComponentOverrides() {
		return supportsCustomizationDialogOverrides();
	}

	registerContentOverrides() {
		const registrations = [
			{
				key: KIT_SECTION_ITEMS.CONTENT_SITE_PAGES,
				parentKey: KIT_SECTIONS.CONTENT,
				title: 'Site pages',
				order: 10,
				component: SitePagesSection,
			},
			{
				key: KIT_SECTION_ITEMS.CONTENT_MENUS,
				parentKey: KIT_SECTIONS.CONTENT,
				title: 'Menus',
				order: 40,
				component: MenusSection,
			},
			{
				key: KIT_SECTION_ITEMS.CONTENT_TAXONOMIES,
				parentKey: KIT_SECTIONS.CONTENT,
				title: 'Taxonomies',
				order: 50,
				component: TaxonomiesSection,
			},
		];

		registrations.forEach( ( registration ) => getCustomizationDialogsRegistry()?.register( registration ) );
	}

	registerTemplateOverrides() {
		const registrations = [
			{
				key: KIT_SECTION_ITEMS.TEMPLATES_SITE_TEMPLATES,
				parentKey: KIT_SECTIONS.TEMPLATES,
				title: 'Site templates',
				order: 10,
				component: SiteTemplatesSection,
				settingKey: 'siteTemplates',
				getInitialState: createTemplateInitialStateResolver( 'site-templates' ),
			},
			{
				key: KIT_SECTION_ITEMS.TEMPLATES_THEME_BUILDER,
				parentKey: KIT_SECTIONS.TEMPLATES,
				title: 'Theme builder',
				order: 20,
				component: ThemeBuilderSection,
				settingKey: 'themeBuilder',
				getInitialState: createTemplateInitialStateResolver( 'theme-builder' ),
			},
			{
				key: KIT_SECTION_ITEMS.TEMPLATES_GLOBAL_WIDGETS,
				parentKey: KIT_SECTIONS.TEMPLATES,
				title: 'Global widgets',
				order: 30,
				component: GlobalWidgetsSection,
				settingKey: 'globalWidgets',
				getInitialState: createTemplateInitialStateResolver( 'global-widget' ),
			},
		];

		registrations.forEach( ( registration ) => getCustomizationDialogsRegistry()?.register( registration ) );
	}

	registerSettingsOverrides() {
		const registrations = [
			{
				key: KIT_SECTION_ITEMS.SETTINGS_DESIGN_SYSTEM,
				title: 'Classes, variables & default styles',
				component: ClassesVariablesSection,
			},
			{
				key: KIT_SECTION_ITEMS.SETTINGS_GLOBAL_COLORS,
				parentKey: KIT_SECTIONS.SETTINGS,
				title: 'Global colors',
				order: 50,
				component: GlobalColorsSettingsRow,
				settingKey: 'globalColors',
				getInitialState: createBooleanSettingInitialStateResolver( 'globalColors' ),
			},
			{
				key: KIT_SECTION_ITEMS.SETTINGS_GLOBAL_FONTS,
				parentKey: KIT_SECTIONS.SETTINGS,
				title: 'Global fonts',
				order: 60,
				component: GlobalFontsSettingsRow,
				settingKey: 'globalFonts',
				getInitialState: createBooleanSettingInitialStateResolver( 'globalFonts' ),
			},
			{
				key: KIT_SECTION_ITEMS.SETTINGS_THEME_STYLE_SETTINGS,
				parentKey: KIT_SECTIONS.SETTINGS,
				title: 'Theme style settings',
				order: 70,
				component: ThemeStyleSettingsRow,
				settingKey: 'themeStyleSettings',
				getInitialState: createBooleanSettingInitialStateResolver( 'themeStyleSettings' ),
			},
			{
				key: KIT_SECTION_ITEMS.SETTINGS_GENERAL_SETTINGS,
				parentKey: KIT_SECTIONS.SETTINGS,
				title: 'Settings',
				order: 80,
				component: GeneralSettingsRow,
				settingKey: 'generalSettings',
				getInitialState: createBooleanSettingInitialStateResolver( 'generalSettings' ),
			},
			{
				key: KIT_SECTION_ITEMS.SETTINGS_EXPERIMENTS,
				parentKey: KIT_SECTIONS.SETTINGS,
				title: 'Experiments',
				order: 90,
				component: ExperimentsSettingsRow,
				settingKey: 'experiments',
				getInitialState: createCustomFileInitialStateResolver( 'experiments' ),
			},
			{
				key: KIT_SECTION_ITEMS.SETTINGS_CUSTOM_FONTS,
				parentKey: KIT_SECTIONS.SETTINGS,
				title: 'Custom fonts',
				order: 100,
				component: CustomFontsSettingsRow,
				settingKey: 'customFonts',
				getInitialState: createCustomFileInitialStateResolver( 'custom-fonts' ),
			},
			{
				key: KIT_SECTION_ITEMS.SETTINGS_CUSTOM_ICONS,
				parentKey: KIT_SECTIONS.SETTINGS,
				title: 'Custom icons',
				order: 110,
				component: CustomIconsSettingsRow,
				settingKey: 'customIcons',
				getInitialState: createCustomFileInitialStateResolver( 'custom-icons' ),
			},
			{
				key: KIT_SECTION_ITEMS.SETTINGS_CUSTOM_CODE,
				parentKey: KIT_SECTIONS.SETTINGS,
				title: 'Custom code',
				order: 120,
				component: CustomCodeSettingsRow,
				settingKey: 'customCode',
				getInitialState: createCustomFileInitialStateResolver( 'custom-code' ),
			},
		];

		registrations.forEach( ( registration ) => getCustomizationDialogsRegistry()?.register( registration ) );
	}

	registerSections() {
		const registry = getCustomizationDialogsRegistry();
		const registrations = [
			{
				key: KIT_SECTIONS.CONTENT,
				title: 'Content Dialog',
				component: KitContentCustomizationDialog,
			},
			{
				key: KIT_SECTIONS.TEMPLATES,
				title: 'Templates Dialog',
				component: KitTemplatesCustomizationDialog,
			},
			{
				key: KIT_SECTIONS.SETTINGS,
				title: 'Settings Dialog',
				component: KitSettingsCustomizationDialog,
			},
		];

		registrations.forEach( ( registration ) => registry?.register( registration ) );
	}

	tryRegisterCustomizationDialogs() {
		if ( this.hasRegisteredCustomizationDialogs || ! getCustomizationDialogsRegistry() ) {
			return this.hasRegisteredCustomizationDialogs;
		}

		const supportsComponentOverrides = this.supportsComponentOverrides();

		if ( supportsComponentOverrides ) {
			this.registerContentOverrides();
			this.registerTemplateOverrides();
			this.registerSettingsOverrides();
		} else {
			this.registerSections();
		}

		this.hasRegisteredCustomizationDialogs = true;

		return true;
	}
}

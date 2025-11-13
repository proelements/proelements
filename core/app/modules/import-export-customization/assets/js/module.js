import { KitContentCustomizationDialog } from './components/kit-content-customization-dialog';
import { KitTemplatesCustomizationDialog } from './components/kit-templates-customization-dialog';
import { KitSettingsCustomizationDialog } from './components/kit-settings-customization-dialog';

export default class Module {
	constructor() {
		this.registerCustomizationDialogs();
	}

	registerCustomizationDialogs() {
		if ( ! elementorCommon?.config?.experimentalFeatures?.[ 'import-export-customization' ] ) {
			return;
		}

		const registry = window.elementorModules?.importExport?.customizationDialogsRegistry;
		if ( ! registry ) {
			return;
		}

		registry.register( {
			key: 'content',
			title: 'Content Dialog',
			component: KitContentCustomizationDialog,
		} );

		registry.register( {
			key: 'templates',
			title: 'Templates Dialog',
			component: KitTemplatesCustomizationDialog,
		} );

		registry.register( {
			key: 'settings',
			title: 'Settings Dialog',
			component: KitSettingsCustomizationDialog,
		} );
	}
}

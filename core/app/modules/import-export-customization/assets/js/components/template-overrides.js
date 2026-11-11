import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { SettingSection } from './customization-setting-section';
import { ThemeBuilderCustomization } from './theme-builder-customization';
import { isHighTier } from '../hooks/use-tier';
import { hasTemplatesForExportGroup } from './kit-templates-customization-dialog';
import { getImportManifest } from '../utils';

export function SiteTemplatesSection( { data, isImport, isOldExport, onSectionStateChange, templates } ) {
	if ( isOldExport ) {
		return null;
	}

	return (
		<SettingSection
			checked={ templates.siteTemplates?.enabled || false }
			title={ __( 'Site Templates', 'elementor' ) }
			settingKey="siteTemplates"
			onSettingChange={ ( key, isChecked ) => onSectionStateChange( key, { enabled: isChecked } ) }
			disabled={ ! isHighTier() || ( isImport && ! hasTemplatesForExportGroup( 'site-templates', getImportManifest( data ) ) ) }
			tooltip={ ! isHighTier() }
		/>
	);
}

SiteTemplatesSection.propTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	isOldExport: PropTypes.bool,
	onSectionStateChange: PropTypes.func.isRequired,
	templates: PropTypes.object.isRequired,
};

export function ThemeBuilderSection( { data, isImport, onSectionStateChange, templates } ) {
	return (
		<ThemeBuilderCustomization
			state={ templates.themeBuilder ?? { enabled: false } }
			settingKey="themeBuilder"
			onStateChange={ onSectionStateChange }
			data={ data }
			disabled={ ! isHighTier() || ( isImport && ! hasTemplatesForExportGroup( 'theme-builder', getImportManifest( data ) ) ) }
			tooltip={ ! isHighTier() }
		/>
	);
}

ThemeBuilderSection.propTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	onSectionStateChange: PropTypes.func.isRequired,
	templates: PropTypes.object.isRequired,
};

export function GlobalWidgetsSection( { data, isImport, isOldExport, onSectionStateChange, templates } ) {
	if ( isOldExport ) {
		return null;
	}

	return (
		<SettingSection
			checked={ templates.globalWidgets?.enabled || false }
			title={ __( 'Global Widgets', 'elementor' ) }
			settingKey="globalWidgets"
			onSettingChange={ ( key, isChecked ) => onSectionStateChange( key, { enabled: isChecked } ) }
			disabled={ ! isHighTier() || ( isImport && ! hasTemplatesForExportGroup( 'global-widget', getImportManifest( data ) ) ) }
			tooltip={ ! isHighTier() }
		/>
	);
}

GlobalWidgetsSection.propTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	isOldExport: PropTypes.bool,
	onSectionStateChange: PropTypes.func.isRequired,
	templates: PropTypes.object.isRequired,
};

import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { SettingSection } from './customization-setting-section';
import { SubSetting } from './customization-sub-setting';
import { isHighTier } from '../hooks/use-tier';
import {
	getManifestItem,
	getSiteSettingsManifest,
} from '../utils';

function renderGroupedSetting( { data, isImport, label, manifestKey, onSettingChange, settingKey, settings } ) {
	return (
		<SubSetting
			label={ label }
			settingKey={ settingKey }
			onSettingChange={ onSettingChange }
			checked={ settings[ settingKey ] ?? false }
			disabled={ ( isImport && ! getSiteSettingsManifest( data )?.[ manifestKey ] ) || ! isHighTier() }
			tooltip={ ! isHighTier() }
			notExported={ isImport && ! getSiteSettingsManifest( data )?.[ manifestKey ] }
		/>
	);
}

export function GlobalColorsSettingsRow( props ) {
	return renderGroupedSetting( {
		...props,
		label: __( 'Global colors', 'elementor-pro' ),
		manifestKey: 'globalColors',
		settingKey: 'globalColors',
	} );
}

export function GlobalFontsSettingsRow( props ) {
	return renderGroupedSetting( {
		...props,
		label: __( 'Global fonts', 'elementor-pro' ),
		manifestKey: 'globalFonts',
		settingKey: 'globalFonts',
	} );
}

export function ThemeStyleSettingsRow( props ) {
	return renderGroupedSetting( {
		...props,
		label: __( 'Theme style settings', 'elementor-pro' ),
		manifestKey: 'themeStyleSettings',
		settingKey: 'themeStyleSettings',
	} );
}

function renderCustomFileSetting( { data, isImport, label, manifestKey, onSettingChange, settingKey, settings } ) {
	return (
		<SubSetting
			label={ label }
			settingKey={ settingKey }
			onSettingChange={ onSettingChange }
			checked={ settings[ settingKey ] ?? false }
			disabled={ ( isImport && ! getManifestItem( data, manifestKey ) ) || ! isHighTier() }
			tooltip={ ! isHighTier() }
			notExported={ isImport && ! getManifestItem( data, manifestKey ) }
		/>
	);
}

export function CustomFontsSettingsRow( props ) {
	return renderCustomFileSetting( {
		...props,
		label: __( 'Custom fonts', 'elementor-pro' ),
		manifestKey: 'custom-fonts',
		settingKey: 'customFonts',
	} );
}

export function CustomIconsSettingsRow( props ) {
	return renderCustomFileSetting( {
		...props,
		label: __( 'Custom icons', 'elementor-pro' ),
		manifestKey: 'custom-icons',
		settingKey: 'customIcons',
	} );
}

export function CustomCodeSettingsRow( props ) {
	return renderCustomFileSetting( {
		...props,
		label: __( 'Custom code', 'elementor-pro' ),
		manifestKey: 'custom-code',
		settingKey: 'customCode',
	} );
}

export function GeneralSettingsRow( { data, isImport, onSettingChange, settings } ) {
	return (
		<SettingSection
			checked={ settings.generalSettings ?? false }
			title={ __( 'Settings', 'elementor' ) }
			description={ __( 'Include site identity, background, layout, Lightbox, page transitions, and custom CSS', 'elementor' ) }
			settingKey="generalSettings"
			onSettingChange={ onSettingChange }
			disabled={ ( isImport && ! getSiteSettingsManifest( data )?.generalSettings ) || ! isHighTier() }
			tooltip={ ! isHighTier() }
		/>
	);
}

GeneralSettingsRow.propTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	onSettingChange: PropTypes.func.isRequired,
	settings: PropTypes.object.isRequired,
};

export function ExperimentsSettingsRow( { data, isImport, onSettingChange, settings } ) {
	return (
		<SettingSection
			checked={ settings.experiments ?? false }
			title={ __( 'Experiments', 'elementor' ) }
			description={ __( 'This will apply all experiments that are still active during import', 'elementor' ) }
			settingKey="experiments"
			onSettingChange={ onSettingChange }
			disabled={ ( isImport && ! getManifestItem( data, 'experiments' ) ) || ! isHighTier() }
			tooltip={ ! isHighTier() }
		/>
	);
}

ExperimentsSettingsRow.propTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	onSettingChange: PropTypes.func.isRequired,
	settings: PropTypes.object.isRequired,
};

const groupedSettingsRowPropTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	onSettingChange: PropTypes.func.isRequired,
	settings: PropTypes.object.isRequired,
};

GlobalColorsSettingsRow.propTypes = groupedSettingsRowPropTypes;
GlobalFontsSettingsRow.propTypes = groupedSettingsRowPropTypes;
ThemeStyleSettingsRow.propTypes = groupedSettingsRowPropTypes;
CustomFontsSettingsRow.propTypes = groupedSettingsRowPropTypes;
CustomIconsSettingsRow.propTypes = groupedSettingsRowPropTypes;
CustomCodeSettingsRow.propTypes = groupedSettingsRowPropTypes;

import { Stack } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { SettingSection } from './customization-setting-section';
import { SubSetting } from './customization-sub-setting';
import { KitCustomizationDialog } from './kit-customization-dialog';
import { UpgradeNoticeBanner } from './upgrade-notice-banner';
import { isHighTier } from '../hooks/use-tier';
import { UpgradeVersionBanner } from './upgrade-version-banner';
import { transformValueForAnalytics } from '../utils/analytics-transformer';

const transformAnalyticsData = ( payload ) => {
	const transformed = {};

	for ( const [ key, value ] of Object.entries( payload ) ) {
		transformed[ key ] = transformValueForAnalytics( key, value, [] );
	}

	return transformed;
};

export function KitSettingsCustomizationDialog( {
	open,
	handleClose,
	handleSaveChanges,
	data,
	isImport,
	isOldExport,
	isOldElementorVersion,
} ) {
	const getState = useCallback( ( initialState ) => {
		if ( ! data.includes.includes( 'settings' ) ) {
			return {
				theme: initialState,
				globalColors: initialState,
				globalFonts: initialState,
				themeStyleSettings: initialState,
				generalSettings: initialState,
				experiments: initialState,
				customFonts: initialState,
				customIcons: initialState,
				customCode: initialState,
			};
		}

		if ( isImport ) {
			const manifestData = data?.uploadedData?.manifest?.[ 'site-settings' ];

			let themeState = false;
			if ( isOldExport ) {
				themeState = ! initialState ? false : data?.uploadedData?.manifest?.theme;
			} else {
				themeState = manifestData?.theme ?? initialState;
			}

			return {
				theme: themeState,
				globalColors: isOldExport ? true : manifestData?.globalColors ?? initialState,
				globalFonts: isOldExport ? true : manifestData?.globalFonts ?? initialState,
				themeStyleSettings: isOldExport ? true : manifestData?.themeStyleSettings ?? initialState,
				generalSettings: isOldExport ? true : manifestData?.generalSettings ?? initialState,
				experiments: isOldExport ? true : manifestData?.experiments ?? initialState,
				customFonts: isOldExport ? true : manifestData?.customFonts ?? initialState,
				customIcons: isOldExport ? true : manifestData?.customIcons ?? initialState,
				customCode: isOldExport ? true : manifestData?.customCode ?? initialState,
			};
		}

		const customization = data?.customization?.settings;
		return {
			theme: customization?.theme ?? initialState,
			globalColors: customization?.globalColors ?? initialState,
			globalFonts: customization?.globalFonts ?? initialState,
			themeStyleSettings: customization?.themeStyleSettings ?? initialState,
			generalSettings: customization?.generalSettings ?? initialState,
			experiments: customization?.experiments ?? initialState,
			customFonts: customization?.customFonts ?? initialState,
			customIcons: customization?.customIcons ?? initialState,
			customCode: customization?.customCode ?? initialState,
		};
	}, [ data.includes, data?.uploadedData?.manifest, data?.customization?.settings, isImport, isOldExport ] );

	const initialState = data.includes.includes( 'settings' );

	const [ settings, setSettings ] = useState( () => {
		if ( data.customization.settings ) {
			return data.customization.settings;
		}

		return getState( initialState );
	} );

	useEffect( () => {
		if ( open ) {
			if ( data.customization.settings ) {
				setSettings( data.customization.settings );
			} else {
				const state = getState( initialState );
				setSettings( state );
			}
		}
	}, [ open, data.customization.settings, data?.uploadedData, initialState, getState ] );

	useEffect( () => {
		if ( open ) {
			window.elementorModules?.appsEventTracking?.AppsEventTracking?.sendPageViewsWebsiteTemplates( elementorCommon.eventsManager.config.secondaryLocations.kitLibrary.kitExportCustomizationEdit );
		}
	}, [ open ] );

	const handleToggleChange = ( settingKey ) => {
		setSettings( ( prev ) => ( {
			...prev,
			[ settingKey ]: ! prev[ settingKey ],
		} ) );
	};

	return (
		<KitCustomizationDialog
			open={ open }
			title={ __( 'Edit settings & configurations', 'elementor' ) }
			handleClose={ handleClose }
			handleSaveChanges={ () => {
				const hasEnabledCustomization = settings.theme || settings.globalColors || settings.globalFonts || settings.themeStyleSettings || settings.generalSettings || settings.experiments || settings.customFonts || settings.customIcons || settings.customCode;
				const transformedAnalytics = transformAnalyticsData( settings );
				handleSaveChanges( 'settings', settings, hasEnabledCustomization, transformedAnalytics );
			} }
		>
			<Stack sx={ { position: 'relative' } } gap={ 2 }>
				{ isOldElementorVersion && (
					<UpgradeVersionBanner />
				) }
				<Stack>
					<SettingSection
						checked={ settings.theme }
						title={ __( 'Theme', 'elementor' ) }
						description={ __( 'Only public WordPress themes are supported', 'elementor' ) }
						settingKey="theme"
						onSettingChange={ handleToggleChange }
						notExported={ isImport && ! data?.uploadedData?.manifest.theme }
					/>

					{ ! isOldExport && (
						<>
							<SettingSection
								title={ __( 'Site settings', 'elementor' ) }
								hasToggle={ false }
							>
								<Stack>
									<SubSetting
										label={ __( 'Global colors', 'elementor' ) }
										settingKey="globalColors"
										onSettingChange={ handleToggleChange }
										checked={ settings.globalColors }
										disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'site-settings' ]?.globalColors ) || ! isHighTier() }
										tooltip={ ! isHighTier() }
									/>
									<SubSetting
										label={ __( 'Global fonts', 'elementor' ) }
										settingKey="globalFonts"
										onSettingChange={ handleToggleChange }
										checked={ settings.globalFonts }
										disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'site-settings' ]?.globalFonts ) || ! isHighTier() }
										tooltip={ ! isHighTier() }
									/>
									<SubSetting
										label={ __( 'Theme style settings', 'elementor' ) }
										settingKey="themeStyleSettings"
										onSettingChange={ handleToggleChange }
										checked={ settings.themeStyleSettings }
										disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'site-settings' ]?.themeStyleSettings ) || ! isHighTier() }
										tooltip={ ! isHighTier() }
									/>
								</Stack>
							</SettingSection>

							<SettingSection
								checked={ settings.generalSettings }
								title={ __( 'Settings', 'elementor' ) }
								description={ __( 'Include site identity, background, layout, Lightbox, page transitions, and custom CSS', 'elementor' ) }
								settingKey="generalSettings"
								onSettingChange={ handleToggleChange }
								disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'site-settings' ]?.generalSettings ) || ! isHighTier() }
								tooltip={ ! isHighTier() }
							/>

							<SettingSection
								checked={ settings.experiments }
								title={ __( 'Experiments', 'elementor' ) }
								description={ __( 'This will apply all experiments that are still active during import', 'elementor' ) }
								settingKey="experiments"
								onSettingChange={ handleToggleChange }
								disabled={ ( isImport && ! data?.uploadedData?.manifest?.experiments ) || ! isHighTier() }
								tooltip={ ! isHighTier() }
							/>

							<SettingSection
								title={ __( 'Custom files', 'elementor' ) }
								hasToggle={ false }
							>
								<Stack>
									<SubSetting
										label={ __( 'Custom fonts', 'elementor' ) }
										settingKey="customFonts"
										onSettingChange={ handleToggleChange }
										checked={ settings.customFonts }
										disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'custom-fonts' ] ) || ! isHighTier() }
										tooltip={ ! isHighTier() }
									/>
									<SubSetting
										label={ __( 'Custom icons', 'elementor' ) }
										settingKey="customIcons"
										onSettingChange={ handleToggleChange }
										checked={ settings.customIcons }
										disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'custom-icons' ] ) || ! isHighTier() }
										tooltip={ ! isHighTier() }
									/>
									<SubSetting
										label={ __( 'Custom code', 'elementor' ) }
										settingKey="customCode"
										onSettingChange={ handleToggleChange }
										checked={ settings.customCode }
										disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'custom-code' ] ) || ! isHighTier() }
										tooltip={ ! isHighTier() }
									/>
								</Stack>
							</SettingSection>
						</>
					) }
				</Stack>
				<UpgradeNoticeBanner />
			</Stack>
		</KitCustomizationDialog>
	);
}

KitSettingsCustomizationDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	isImport: PropTypes.bool,
	isOldExport: PropTypes.bool,
	isOldElementorVersion: PropTypes.bool,
	handleClose: PropTypes.func.isRequired,
	handleSaveChanges: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
};

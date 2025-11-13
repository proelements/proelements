import { Stack } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { SettingSection } from './customization-setting-section';
import { KitCustomizationDialog } from './kit-customization-dialog';
import { UpgradeNoticeBanner } from './upgrade-notice-banner';
import { isHighTier } from '../hooks/use-tier';
import { ThemeBuilderCustomization } from './theme-builder-customization';
import { UpgradeVersionBanner } from './upgrade-version-banner';
import { transformValueForAnalytics } from '../utils/analytics-transformer';

const transformAnalyticsData = ( payload ) => {
	const transformed = {};

	for ( const [ key, value ] of Object.entries( payload ) ) {
		transformed[ key ] = transformValueForAnalytics( key, value, [] );
	}

	return transformed;
};

export const hasTemplatesForExportGroup = ( exportGroup, manifest ) => {
	if ( ! manifest?.templates ) {
		return false;
	}

	const exportGroups = elementorAppConfig?.[ 'import-export-customization' ]?.exportGroups || {};

	return Object.values( manifest.templates ).some( ( template ) => {
		if ( ! template || typeof template !== 'object' || ! template.doc_type ) {
			return false;
		}
		const templateExportGroup = exportGroups[ template.doc_type ];
		return templateExportGroup === exportGroup;
	} );
};

export function KitTemplatesCustomizationDialog( {
	open,
	handleClose,
	handleSaveChanges,
	data,
	isImport,
	isOldExport,
	isOldElementorVersion,
} ) {
	const initialState = data.includes.includes( 'templates' );

	const getState = useCallback( ( parentInitialState ) => {
		if ( ! data.includes.includes( 'templates' ) ) {
			return {
				siteTemplates: {
					enabled: parentInitialState,
				},
				themeBuilder: {
					enabled: parentInitialState,
				},
				globalWidgets: {
					enabled: parentInitialState,
				},
			};
		}

		if ( isImport ) {
			return {
				siteTemplates: {
					enabled: isImport && isOldExport ? true : hasTemplatesForExportGroup( 'site-templates', data?.uploadedData?.manifest ) ?? parentInitialState,
				},
				themeBuilder: {
					enabled: isImport && isOldExport ? true : hasTemplatesForExportGroup( 'theme-builder', data?.uploadedData?.manifest ) ?? parentInitialState,
				},
				globalWidgets: {
					enabled: isImport && isOldExport ? true : hasTemplatesForExportGroup( 'global-widget', data?.uploadedData?.manifest ) ?? parentInitialState,
				},
			};
		}

		return {
			siteTemplates: {
				enabled: data?.customization?.templates?.siteTemplates?.enabled ?? parentInitialState,
			},
			themeBuilder: {
				enabled: data?.customization?.templates?.themeBuilder?.enabled ?? parentInitialState,
			},
			globalWidgets: {
				enabled: data?.customization?.templates?.globalWidgets?.enabled ?? parentInitialState,
			},
		};
	}, [ data.includes, data?.uploadedData?.manifest, data?.customization?.templates, isImport, isOldExport ] );

	const [ templates, setTemplates ] = useState( {} );

	useEffect( () => {
		if ( open ) {
			if ( data.customization.templates ) {
				setTemplates( data.customization.templates );
			} else {
				const state = getState( initialState );
				setTemplates( state );
			}
		}
	}, [ open, data.customization.templates, data?.uploadedData, initialState, getState ] );

	useEffect( () => {
		if ( open ) {
			elementorModules?.appsEventTracking?.AppsEventTracking?.sendPageViewsWebsiteTemplates( elementorCommon.eventsManager.config.secondaryLocations.kitLibrary.kitExportCustomizationEdit );
		}
	}, [ open ] );

	const handleToggleChange = ( settingKey, isChecked ) => {
		setTemplates( ( prev ) => ( {
			...prev,
			[ settingKey ]: {
				...prev[ settingKey ],
				enabled: isChecked,
			},
		} ) );
	};

	return (
		<KitCustomizationDialog
			open={ open }
			title={ __( 'Edit templates', 'elementor' ) }
			handleClose={ handleClose }
			handleSaveChanges={ () => {
				const hasEnabledCustomization = templates.siteTemplates?.enabled || templates.themeBuilder?.enabled || templates.globalWidgets?.enabled;
				const transformedAnalytics = transformAnalyticsData( templates );
				handleSaveChanges( 'templates', templates, hasEnabledCustomization, transformedAnalytics );
			} }
			minHeight="auto"
		>
			<Stack sx={ { position: 'relative' } } gap={ 2 }>
				{ isOldElementorVersion && (
					<UpgradeVersionBanner />
				) }
				<Stack>
					{ ! isOldExport && (
						<SettingSection
							checked={ templates.siteTemplates?.enabled || false }
							title={ __( 'Site Templates', 'elementor' ) }
							settingKey="siteTemplates"
							onSettingChange={ handleToggleChange }
							disabled={ ! isHighTier() || ( isImport && ! hasTemplatesForExportGroup( 'site-templates', data?.uploadedData?.manifest ) ) }
							tooltip={ ! isHighTier() }
						/>
					) }

					<ThemeBuilderCustomization
						state={ templates.themeBuilder }
						settingKey="themeBuilder"
						onStateChange={ ( key, newState, mergeMode = false ) => {
							setTemplates( ( prev ) => {
								if ( mergeMode ) {
									return {
										...prev,
										[ key ]: { ...prev[ key ], ...newState },
									};
								}
								return {
									...prev,
									[ key ]: newState,
								};
							} );
						} }
						data={ data }
						disabled={ ! isHighTier() || ( isImport && ! hasTemplatesForExportGroup( 'theme-builder', data?.uploadedData?.manifest ) ) }
						tooltip={ ! isHighTier() }
					/>

					{ ! isOldExport && (
						<SettingSection
							checked={ templates.globalWidgets?.enabled || false }
							title="Global Widgets"
							settingKey="globalWidgets"
							onSettingChange={ handleToggleChange }
							disabled={ ! isHighTier() || ( isImport && ! hasTemplatesForExportGroup( 'global-widget', data?.uploadedData?.manifest ) ) }
							tooltip={ ! isHighTier() }
						/>
					) }
				</Stack>
				<UpgradeNoticeBanner />
			</Stack>
		</KitCustomizationDialog>
	);
}

KitTemplatesCustomizationDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	isImport: PropTypes.bool,
	isOldExport: PropTypes.bool,
	isOldElementorVersion: PropTypes.bool,
	handleClose: PropTypes.func.isRequired,
	handleSaveChanges: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
};

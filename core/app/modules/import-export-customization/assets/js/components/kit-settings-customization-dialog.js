import { Stack } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useCallback, useMemo } from 'react';
import * as PropTypes from 'prop-types';
import { ClassesVariablesSection } from './classes-variables-section';
import { KitCustomizationDialog } from './kit-customization-dialog';
import { OverrideConfirmationDialog } from './override-confirmation-dialog';
import { SettingSection } from './customization-setting-section';
import { SubSetting } from './customization-sub-setting';
import { UpgradeNoticeBanner } from './upgrade-notice-banner';
import { UpgradeVersionBanner } from './upgrade-version-banner';
import { isHighTier } from '../hooks/use-tier';
import { useClassesVariablesLimits } from '../hooks/use-classes-variables-limits';
import { transformValueForAnalytics } from '../utils/analytics-transformer';

function isExperimentActive( experimentName ) {
	return !! elementorCommon?.config?.experimentalFeatures?.[ experimentName ];
}

function isClassesFeatureActive() {
	return isExperimentActive( 'e_atomic_elements' );
}

function isVariablesFeatureActive() {
	return isExperimentActive( 'e_atomic_elements' );
}

function isClassesExported( data ) {
	return !! data?.uploadedData?.manifest?.[ 'site-settings' ]?.classes;
}

function isVariablesExported( data ) {
	return !! data?.uploadedData?.manifest?.[ 'site-settings' ]?.variables;
}

const transformAnalyticsData = ( payload ) => {
	const transformed = {};

	for ( const [ key, value ] of Object.entries( payload ) ) {
		transformed[ key ] = transformValueForAnalytics( key, value, [] );
	}

	return transformed;
};

async function fetchManagerUrl( panelId ) {
	const baseUrl = window.wpApiSettings?.root || '/wp-json/';
	const nonce = window.wpApiSettings?.nonce || '';

	const response = await fetch(
		`${ baseUrl }elementor/v1/import-export-customization/manager-url?panel=${ panelId }`,
		{
			headers: {
				'X-WP-Nonce': nonce,
			},
		},
	);

	if ( ! response.ok ) {
		throw new Error( 'Failed to fetch manager URL' );
	}

	const data = await response.json();
	return data.data?.url || data.url;
}

export function KitSettingsCustomizationDialog( {
	open,
	handleClose,
	handleSaveChanges,
	data,
	isImport,
	isOldExport,
	isOldElementorVersion,
} ) {
	const showClassesSection = useMemo( () => isClassesFeatureActive(), [] );
	const showVariablesSection = useMemo( () => isVariablesFeatureActive(), [] );
	const showClassesVariablesSection = showClassesSection || showVariablesSection;

	const classesExportedInManifest = !! data?.uploadedData?.manifest?.[ 'site-settings' ]?.classes;
	const variablesExportedInManifest = !! data?.uploadedData?.manifest?.[ 'site-settings' ]?.variables;

	const {
		existingClassesCount,
		existingVariablesCount,
		classesLimit,
		variablesLimit,
		calculateLimitInfo,
	} = useClassesVariablesLimits( { open, isImport } );

	const importedClassesCount = data?.uploadedData?.manifest?.[ 'site-settings' ]?.classesCount ?? 0;
	const importedVariablesCount = data?.uploadedData?.manifest?.[ 'site-settings' ]?.variablesCount ?? 0;

	const classesLimitInfo = useMemo(
		() => calculateLimitInfo( existingClassesCount, importedClassesCount, classesLimit ),
		[ existingClassesCount, importedClassesCount, classesLimit, calculateLimitInfo ],
	);

	const variablesLimitInfo = useMemo(
		() => calculateLimitInfo( existingVariablesCount, importedVariablesCount, variablesLimit ),
		[ existingVariablesCount, importedVariablesCount, variablesLimit, calculateLimitInfo ],
	);

	const classesVariablesInitialState = useMemo( () => {
		if ( ! showClassesVariablesSection ) {
			return {};
		}
		return {
			classes: ! isImport || classesExportedInManifest,
			variables: ! isImport || variablesExportedInManifest,
			classesOverrideAll: false,
			variablesOverrideAll: false,
		};
	}, [ showClassesVariablesSection, isImport, classesExportedInManifest, variablesExportedInManifest ] );

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
				...( showClassesVariablesSection ? classesVariablesInitialState : {} ),
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
				...( showClassesVariablesSection ? classesVariablesInitialState : {} ),
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
			...( showClassesVariablesSection ? classesVariablesInitialState : {} ),
		};
	}, [ data.includes, data?.uploadedData?.manifest, data?.customization?.settings, isImport, isOldExport, showClassesVariablesSection, classesVariablesInitialState ] );

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ open ] );

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

	const handleClassesVariablesChange = ( settingKey, value ) => {
		setSettings( ( prev ) => ( {
			...prev,
			[ settingKey ]: value,
		} ) );
	};

	const handleReviewClick = useCallback( async ( panelId ) => {
		const transformedAnalytics = transformAnalyticsData( settings );
		handleSaveChanges( 'settings', settings, true, transformedAnalytics );
		handleClose();

		try {
			const url = await fetchManagerUrl( panelId );
			window.open( url, '_blank' );
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( `Failed to open ${ panelId }:`, error );
		}
	}, [ settings, handleSaveChanges, handleClose ] );

	const handleClassesReviewClick = useCallback( () => {
		handleReviewClick( 'global-classes-manager' );
	}, [ handleReviewClick ] );

	const handleVariablesReviewClick = useCallback( () => {
		handleReviewClick( 'variables-manager' );
	}, [ handleReviewClick ] );

	const classesNotExported = isImport && ! isClassesExported( data );
	const variablesNotExported = isImport && ! isVariablesExported( data );
	const classesVariablesNotExported = classesNotExported && variablesNotExported;

	const classesLimitExceeded = isImport && classesLimitInfo.isExceeded;
	const variablesLimitExceeded = isImport && variablesLimitInfo.isExceeded;
	const classesOverLimitCount = classesLimitInfo.overLimitCount;
	const variablesOverLimitCount = variablesLimitInfo.overLimitCount;

	const [ confirmationDialog, setConfirmationDialog ] = useState( {
		open: false,
		type: 'classes',
	} );

	const performSave = useCallback( () => {
		const hasEnabledCustomization = settings.theme || settings.globalColors || settings.globalFonts || settings.themeStyleSettings || settings.generalSettings || settings.experiments || settings.customFonts || settings.customIcons || settings.customCode || settings.classes || settings.variables;
		const transformedAnalytics = transformAnalyticsData( settings );
		handleSaveChanges( 'settings', settings, hasEnabledCustomization, transformedAnalytics );
		handleClose();
	}, [ settings, handleSaveChanges, handleClose ] );

	const handleSaveClick = useCallback( () => {
		const classesOverrideEnabled = settings.classesOverrideAll && settings.classes;
		const variablesOverrideEnabled = settings.variablesOverrideAll && settings.variables;

		if ( classesOverrideEnabled && variablesOverrideEnabled ) {
			setConfirmationDialog( { open: true, type: 'both' } );
			return;
		}

		if ( classesOverrideEnabled ) {
			setConfirmationDialog( { open: true, type: 'classes' } );
			return;
		}

		if ( variablesOverrideEnabled ) {
			setConfirmationDialog( { open: true, type: 'variables' } );
			return;
		}

		performSave();
	}, [ settings, performSave ] );

	const handleConfirmationClose = useCallback( () => {
		setConfirmationDialog( { open: false, type: '' } );
	}, [] );

	const handleConfirmationConfirm = useCallback( () => {
		setConfirmationDialog( { open: false, type: '' } );
		performSave();
	}, [ performSave ] );

	return (
		<>
			<KitCustomizationDialog
				open={ open }
				title={ __( 'Edit settings & configurations', 'elementor' ) }
				handleClose={ handleClose }
				handleSaveChanges={ handleSaveClick }
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

						{ showClassesVariablesSection && (
							<ClassesVariablesSection
								settings={ {
									classes: settings.classes ?? false,
									variables: settings.variables ?? false,
									classesOverrideAll: settings.classesOverrideAll ?? false,
									variablesOverrideAll: settings.variablesOverrideAll ?? false,
								} }
								onSettingChange={ handleClassesVariablesChange }
								isImport={ isImport }
								classesExported={ ! classesNotExported && showClassesSection }
								variablesExported={ ! variablesNotExported && showVariablesSection }
								classesLimitExceeded={ classesLimitExceeded }
								variablesLimitExceeded={ variablesLimitExceeded }
								classesOverLimitCount={ classesOverLimitCount }
								variablesOverLimitCount={ variablesOverLimitCount }
								onClassesReviewClick={ handleClassesReviewClick }
								onVariablesReviewClick={ handleVariablesReviewClick }
								notExported={ classesVariablesNotExported }
							/>
						) }

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
											notExported={ isImport && ! data?.uploadedData?.manifest?.[ 'custom-fonts' ] }
										/>
										<SubSetting
											label={ __( 'Custom icons', 'elementor' ) }
											settingKey="customIcons"
											onSettingChange={ handleToggleChange }
											checked={ settings.customIcons }
											disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'custom-icons' ] ) || ! isHighTier() }
											tooltip={ ! isHighTier() }
											notExported={ isImport && ! data?.uploadedData?.manifest?.[ 'custom-icons' ] }
										/>
										<SubSetting
											label={ __( 'Custom code', 'elementor' ) }
											settingKey="customCode"
											onSettingChange={ handleToggleChange }
											checked={ settings.customCode }
											disabled={ ( isImport && ! data?.uploadedData?.manifest?.[ 'custom-code' ] ) || ! isHighTier() }
											tooltip={ ! isHighTier() }
											notExported={ isImport && ! data?.uploadedData?.manifest?.[ 'custom-code' ] }
										/>
									</Stack>
								</SettingSection>
							</>
						) }
					</Stack>
					<UpgradeNoticeBanner />
				</Stack>
			</KitCustomizationDialog>

			<OverrideConfirmationDialog
				open={ confirmationDialog.open }
				onClose={ handleConfirmationClose }
				onConfirm={ handleConfirmationConfirm }
				type={ confirmationDialog.type }
			/>
		</>
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

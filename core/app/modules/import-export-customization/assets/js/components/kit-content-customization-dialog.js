import { useState, useEffect, useRef } from 'react';
import * as PropTypes from 'prop-types';
import { Stack, CircularProgress, Box, Radio, RadioGroup, FormControlLabel, FormControl, Typography, Alert, SvgIcon } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import { KitCustomizationDialog } from './kit-customization-dialog';
import { ListSettingSection } from './customization-list-setting-section';
import { SettingSection } from './customization-setting-section';
import { SubSetting } from './customization-sub-setting';
import { UpgradeNoticeBanner } from './upgrade-notice-banner';
import { useKitCustomizationPages } from '../hooks/use-kit-customization-pages';
import { useKitCustomizationTaxonomies } from '../hooks/use-kit-customization-taxonomies';
import { useKitCustomizationCustomPostTypes } from '../hooks/use-kit-customization-custom-post-types';
import { isHighTier } from '../hooks/use-tier';
import { UpgradeVersionBanner } from './upgrade-version-banner';
import { transformValueForAnalytics } from '../utils/analytics-transformer';

const MEDIA_FORMAT_OPTIONS = {
	LINK: 'link',
	CLOUD: 'cloud',
};

const MEDIA_FORMAT_CONFIG = [
	{
		value: MEDIA_FORMAT_OPTIONS.LINK,
		title: __( 'Link to media', 'elementor-pro' ),
		description: __( 'Stores only the URLs. The export stays light, but files load only while the original site is online.', 'elementor-pro' ),
	},
	{
		value: MEDIA_FORMAT_OPTIONS.CLOUD,
		title: __( 'Save media to the cloud', 'elementor-pro' ),
		description: __( 'All images and files are stored with the template. Keeps everything intact, but the file is larger.', 'elementor-pro' ),
	},
];

const transformAnalyticsData = ( payload, pageOptions, taxonomyOptions, customPostTypes ) => {
	const optionsArray = [
		{ key: 'pages', options: pageOptions },
		{ key: 'taxonomies', options: taxonomyOptions },
		{ key: 'customPostTypes', options: customPostTypes },
	];

	const transformed = {};

	for ( const [ key, value ] of Object.entries( payload ) ) {
		transformed[ key ] = transformValueForAnalytics( key, value, optionsArray );
	}

	return transformed;
};

export function KitContentCustomizationDialog( {
	open,
	handleClose,
	handleSaveChanges,
	data,
	isImport,
	isOldExport,
	isOldElementorVersion,
	isCloudKitsEligible = false,
	showMediaFormatValidation = false,
} ) {
	const initialState = data.includes.includes( 'content' );
	const { isLoading: isPagesLoading, pageOptions, isLoaded: isPagesLoaded } = useKitCustomizationPages( { open, data } );
	const { isLoading: isTaxonomiesLoading, taxonomyOptions, isLoaded: isTaxonomiesLoaded } = useKitCustomizationTaxonomies( { open, data } );
	const { customPostTypes } = useKitCustomizationCustomPostTypes( { data } );

	const alertRef = useRef( null );
	const mediaFormatSectionRef = useRef( null );

	const [ settings, setSettings ] = useState( () => {
		if ( data.customization.content ) {
			return data.customization.content;
		}

		return {
			pages: [],
			menus: initialState,
			taxonomies: [],
			customPostTypes: [],
			mediaFormat: MEDIA_FORMAT_OPTIONS.LINK,
		};
	} );

	useEffect( () => {
		if ( ! open || data.includes.includes( 'content' ) ) {
			return;
		}

		setSettings( {
			pages: [],
			menus: false,
			taxonomies: [],
			customPostTypes: [],
			mediaFormat: MEDIA_FORMAT_OPTIONS.LINK,
		} );
	}, [ open, data.includes ] );

	useEffect( () => {
		if ( ! open || ! data.includes.includes( 'content' ) ) {
			return;
		}

		setSettings( ( prevSettings ) => ( {
			...prevSettings,
			pages: isPagesLoaded || isImport
				? ( data.customization.content?.pages || pageOptions.map( ( { value } ) => value ) )
				: prevSettings.pages,
		} ) );
	}, [
		open,
		data.includes,
		data.customization.content?.pages,
		isPagesLoaded,
		isImport,
		pageOptions,
	] );

	useEffect( () => {
		if ( ! open || ! data.includes.includes( 'content' ) ) {
			return;
		}

		setSettings( ( prevSettings ) => ( {
			...prevSettings,
			taxonomies: isTaxonomiesLoaded || isImport
				? ( data.customization.content?.taxonomies || taxonomyOptions.map( ( { value } ) => value ) )
				: prevSettings.taxonomies,
		} ) );
	}, [
		open,
		data.includes,
		data.customization.content?.taxonomies,
		isTaxonomiesLoaded,
		isImport,
		taxonomyOptions,
	] );

	useEffect( () => {
		if ( ! open || ! data.includes.includes( 'content' ) ) {
			return;
		}

		setSettings( ( prevSettings ) => ( {
			...prevSettings,
			customPostTypes: customPostTypes
				? ( data.customization.content?.customPostTypes || customPostTypes.map( ( { value } ) => value ) )
				: prevSettings.customPostTypes,
		} ) );
	}, [
		open,
		data.includes,
		data.customization.content?.customPostTypes,
		customPostTypes,
	] );

	useEffect( () => {
		if ( ! open || ! data.includes.includes( 'content' ) ) {
			return;
		}

		setSettings( ( prevSettings ) => ( {
			...prevSettings,
			menus: isImport
				? ( data.customization.content?.menus || Object.keys( data?.uploadedData?.manifest[ 'wp-content' ]?.nav_menu_item || {} ).length > 0 )
				: ( data.customization.content?.menus ?? initialState ),
		} ) );
	}, [
		open,
		data.includes,
		data.customization.content?.menus,
		data.uploadedData?.manifest,
		isImport,
	] );

	useEffect( () => {
		if ( ! open || ! data.includes.includes( 'content' ) ) {
			return;
		}

		setSettings( ( prevSettings ) => ( {
			...prevSettings,
			mediaFormat: data.customization.content?.mediaFormat || MEDIA_FORMAT_OPTIONS.LINK,
		} ) );
	}, [
		open,
		data.includes,
		data.customization.content?.mediaFormat,
	] );

	useEffect( () => {
		if ( open ) {
			window.elementorModules?.appsEventTracking?.AppsEventTracking?.sendPageViewsWebsiteTemplates( elementorCommon.eventsManager.config.secondaryLocations.kitLibrary.kitExportCustomizationEdit );
		}
	}, [ open ] );

	useEffect( () => {
		if ( showMediaFormatValidation ) {
			setTimeout( () => {
				const targetElement = alertRef.current || mediaFormatSectionRef.current;
				if ( targetElement ) {
					targetElement.scrollIntoView( { behavior: 'smooth', block: 'center' } );
				}
			} );
		}
	}, [ showMediaFormatValidation ] );

	const handleSettingsChange = ( settingKey, payload ) => {
		setSettings( ( prev ) => ( {
			...prev,
			[ settingKey ]: payload,
		} ) );
	};

	const isTaxonomiesExported = () => {
		return isImport && taxonomyOptions?.length > 0;
	};

	const isPagesExported = () => {
		const content = data?.uploadedData?.manifest?.content;
		const wpContent = data?.uploadedData?.manifest?.[ 'wp-content' ];

		const isSomeContentExported = Object.keys( content?.page || {} )?.length;
		const isSomeWPContentExported = Object.keys( wpContent?.page || {} )?.length;

		return Boolean( isSomeContentExported || isSomeWPContentExported );
	};
	const isMenusExported = () => {
		return Object.keys( data?.uploadedData?.manifest?.[ 'wp-content' ]?.nav_menu_item || {} ).length > 0 ||
			customPostTypes?.find( ( cpt ) => cpt.value.includes( 'nav_menu' ) );
	};

	const isCustomPostTypesExported = () => {
		return isImport && customPostTypes?.length > 0;
	};

	const renderPagesSection = () => {
		if ( isImport && isOldExport ) {
			return null;
		}

		return isImport && ! isPagesExported() ? (
			<SettingSection
				title={ __( 'Site pages', 'elementor-pro' ) }
				settingKey="pages"
				notExported
			/>
		) : (
			<ListSettingSection
				settingKey="pages"
				title={ __( 'Site pages', 'elementor-pro' ) }
				onSettingChange={ ( selectedPages ) => {
					handleSettingsChange( 'pages', selectedPages );
				} }
				settings={ settings.pages }
				items={ pageOptions }
				loading={ isPagesLoading }
				disabled={ ! isHighTier() }
				tooltip={ ! isHighTier() }
			/>
		);
	};

	const renderMenusSection = () => {
		if ( isImport && isOldExport ) {
			return null;
		}

		return (
			<SettingSection
				checked={ settings.menus }
				disabled={ ( isImport && ! isMenusExported() ) || ! isHighTier() }
				title={ __( 'Menus', 'elementor-pro' ) }
				settingKey="menus"
				tooltip={ ! isHighTier() }
				onSettingChange={ ( key, isChecked ) => {
					handleSettingsChange( key, isChecked );
				} }
			/>
		);
	};

	const renderMediaFormatSection = () => {
		if ( isImport ) {
			return (
				<SettingSection
					title={ __( 'Media format', 'elementor-pro' ) }
					settingKey="mediaFormat"
					hasToggle={ false }
				>
					<Alert
						icon={
							<SvgIcon color="info" viewBox="0 0 24 24">
								<path d="M11.8623 14.7549C12.3665 14.8061 12.7598 15.2322 12.7598 15.75C12.7598 16.2678 12.3665 16.6939 11.8623 16.7451L11.7598 16.75H11.75C11.1977 16.75 10.75 16.3023 10.75 15.75C10.75 15.1977 11.1977 14.75 11.75 14.75H11.7598L11.8623 14.7549Z" fill="currentColor" />
								<path d="M11.75 7C12.1642 7 12.5 7.33579 12.5 7.75V12.75C12.5 13.1642 12.1642 13.5 11.75 13.5C11.3358 13.5 11 13.1642 11 12.75V7.75C11 7.33579 11.3358 7 11.75 7Z" fill="currentColor" />
								<path fillRule="evenodd" clipRule="evenodd" d="M11.75 2C17.1348 2 21.5 6.36522 21.5 11.75C21.5 17.1348 17.1348 21.5 11.75 21.5C6.36522 21.5 2 17.1348 2 11.75C2 6.36522 6.36522 2 11.75 2ZM11.75 3.5C7.19365 3.5 3.5 7.19365 3.5 11.75C3.5 16.3063 7.19365 20 11.75 20C16.3063 20 20 16.3063 20 11.75C20 7.19365 16.3063 3.5 11.75 3.5Z" fill="currentColor" />
							</SvgIcon>
						}
						sx={ {
							backgroundColor: 'transparent',
							p: 0,
						} }
					>
						<Typography variant="body2" color="text.primary">
							<strong>{ __( 'Note:', 'elementor-pro' ) }</strong> { __( 'The media will be uploaded automatically, just as it was saved during export', 'elementor-pro' ) }
						</Typography>
					</Alert>
				</SettingSection>
			);
		}

		if ( ! isImport && ! isCloudKitsEligible ) {
			return null;
		}

		return (
			<SettingSection
				ref={ mediaFormatSectionRef }
				description={ __( 'Select how do you want to save & export the media files.', 'elementor-pro' ) }
				title={ __( 'Media format', 'elementor-pro' ) }
				settingKey="mediaFormat"
				hasToggle={ false }
				disabled={ ! isHighTier() }
				tooltip={ ! isHighTier() }
			>
				<Box sx={ { pt: 2.5 } }>
					<FormControl component="fieldset" disabled={ ! isHighTier() } sx={ { width: '100%' } }>
						<RadioGroup
							value={ settings.mediaFormat }
							onChange={ ( event ) => {
								handleSettingsChange( 'mediaFormat', event.target.value );
							} }
							sx={ { width: '100%' } }
						>
							{ MEDIA_FORMAT_CONFIG.map( ( option, index ) => (
								<Box
									key={ option.value }
									sx={ {
										border: 1,
										borderColor: settings.mediaFormat === option.value ? 'info.light' : 'divider',
										borderRadius: 2,
										p: 1,
										mb: index < MEDIA_FORMAT_CONFIG.length - 1 ? 1.5 : 0,
										width: '100%',
									} }
								>
									<FormControlLabel
										value={ option.value }
										control={
											<Radio color="info" data-testid={ `media-format-${ option.value }` } />
										}
										label={
											<Box>
												<Typography variant="body2" sx={ { mb: 0.25 } }>
													{ option.title }
												</Typography>
												<Typography variant="body2" color="text.secondary">
													{ option.description }
												</Typography>
											</Box>
										}
										sx={ { alignItems: 'flex-start', m: 0, width: '100%' } }
									/>
								</Box>
							) ) }
						</RadioGroup>
					</FormControl>
					{ showMediaFormatValidation && (
						<Alert
							ref={ alertRef }
							icon={
								<SvgIcon color="error" viewBox="0 0 24 24">
									<path d="M11.8623 14.7549C12.3665 14.8061 12.7598 15.2322 12.7598 15.75C12.7598 16.2678 12.3665 16.6939 11.8623 16.7451L11.7598 16.75H11.75C11.1977 16.75 10.75 16.3023 10.75 15.75C10.75 15.1977 11.1977 14.75 11.75 14.75H11.7598L11.8623 14.7549Z" fill="currentColor" />
									<path d="M11.75 7C12.1642 7 12.5 7.33579 12.5 7.75V12.75C12.5 13.1642 12.1642 13.5 11.75 13.5C11.3358 13.5 11 13.1642 11 12.75V7.75C11 7.33579 11.3358 7 11.75 7Z" fill="currentColor" />
									<path fillRule="evenodd" clipRule="evenodd" d="M11.75 2C17.1348 2 21.5 6.36522 21.5 11.75C21.5 17.1348 17.1348 21.5 11.75 21.5C6.36522 21.5 2 17.1348 2 11.75C2 6.36522 6.36522 2 11.75 2ZM11.75 3.5C7.19365 3.5 3.5 7.19365 3.5 11.75C3.5 16.3063 7.19365 20 11.75 20C16.3063 20 20 16.3063 20 11.75C20 7.19365 16.3063 3.5 11.75 3.5Z" fill="currentColor" />
								</SvgIcon>
							}
							sx={ {
								mt: 2,
								ml: 1,
								backgroundColor: 'transparent',
								p: 0,
							} }
						>
							<Typography variant="body2" color="text.primary">
								<strong>{ __( 'Note:', 'elementor-pro' ) }</strong> { __( 'To export a ZIP, go to Edit Content, choose \'Link to Media\', then Export as ZIP.', 'elementor-pro' ) }<br></br>{ __( 'Or, save this template to the cloud instead.', 'elementor-pro' ) }
							</Typography>
						</Alert>
					) }
				</Box>
			</SettingSection>
		);
	};

	const renderTaxonomiesSection = () => {
		if ( isImport && isOldExport ) {
			return null;
		}

		return (
			<SettingSection
				description={ __( 'Group your content by type, topic, or any structure you choose.', 'elementor-pro' ) }
				title={ __( 'Taxonomies', 'elementor-pro' ) }
				settingKey="taxonomies"
				notExported={ isImport && ! isTaxonomiesExported() }
				hasToggle={ false }
			>
				{ isTaxonomiesLoading
					? <Box sx={ { p: 1, alignItems: 'center', textAlign: 'center' } } >
						<CircularProgress size={ 30 } />
					</Box>
					: ( taxonomyOptions.map( ( taxonomy ) => {
						return (
							<SubSetting
								key={ taxonomy.value }
								label={ taxonomy.label }
								settingKey="taxonomies"
								checked={ settings.taxonomies.includes( taxonomy.value ) }
								disabled={ ! isHighTier() }
								tooltip={ ! isHighTier() }
								onSettingChange={ ( key, isChecked ) => {
									setSettings( ( prevState ) => {
										const selectedTaxonomies = isChecked
											? [ ...prevState.taxonomies, taxonomy.value ]
											: prevState.taxonomies.filter( ( value ) => value !== taxonomy.value );

										return {
											...prevState,
											taxonomies: selectedTaxonomies,
										};
									} );
								} }
							/>
						);
					} )
					) }
			</SettingSection>
		);
	};

	return (
		<KitCustomizationDialog
			open={ open }
			title={ __( 'Edit content', 'elementor-pro' ) }
			handleClose={ handleClose }
			handleSaveChanges={ () => {
				const hasEnabledCustomization = settings.pages.length > 0 || settings.menus || settings.customPostTypes.length > 0 || settings.taxonomies.length > 0 || settings.mediaFormat !== MEDIA_FORMAT_OPTIONS.LINK;
				const transformedAnalytics = transformAnalyticsData( settings, pageOptions, taxonomyOptions, customPostTypes );
				handleSaveChanges( 'content', settings, hasEnabledCustomization, transformedAnalytics );
			} }
		>
			<Stack sx={ { position: 'relative' } } gap={ 2 }>
				{ isOldElementorVersion && (
					<UpgradeVersionBanner />
				) }
				<Stack>
					{ renderPagesSection() }
					{
						isImport && ! isCustomPostTypesExported() ? (
							<SettingSection
								title={ __( 'Custom post types', 'elementor-pro' ) }
								settingKey="customPostTypes"
								notExported
							/>
						) : (
							<ListSettingSection
								settingKey="customPostTypes"
								title={ __( 'Custom post types', 'elementor-pro' ) }
								onSettingChange={ ( selectedCustomPostTypes ) => {
									handleSettingsChange( 'customPostTypes', selectedCustomPostTypes );
								} }
								settings={ settings.customPostTypes }
								items={ customPostTypes }
								disabled={ ( isImport && undefined === data?.uploadedData?.manifest[ 'custom-post-type-title' ] ) || ! isHighTier() }
								tooltip={ ! isHighTier() }
							/>
						)
					}
					{ renderMediaFormatSection() }
					{ renderMenusSection() }
					{ renderTaxonomiesSection() }
				</Stack>
				<UpgradeNoticeBanner />
			</Stack>
		</KitCustomizationDialog>
	);
}

KitContentCustomizationDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	isImport: PropTypes.bool,
	isOldExport: PropTypes.bool,
	isOldElementorVersion: PropTypes.bool,
	handleClose: PropTypes.func.isRequired,
	handleSaveChanges: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
	isCloudKitsEligible: PropTypes.bool,
	showMediaFormatValidation: PropTypes.bool,
};

import { Box, CircularProgress } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListSettingSection } from './customization-list-setting-section';
import { SettingSection } from './customization-setting-section';
import { SubSetting } from './customization-sub-setting';
import { useKitCustomizationCustomPostTypes } from '../hooks/use-kit-customization-custom-post-types';
import { useKitCustomizationPages } from '../hooks/use-kit-customization-pages';
import { useKitCustomizationTaxonomies } from '../hooks/use-kit-customization-taxonomies';
import { isHighTier } from '../hooks/use-tier';
import { hasExportedMenuItems, hasExportedPages } from '../utils';

export function SitePagesSection( { data, isImport, isOldExport, onSettingChange, open, settings } ) {
	const { isLoading, pageOptions, isLoaded } = useKitCustomizationPages( { open, data } );

	const initialPages = data.customization.content?.pages;
	const shouldSeedPages = open &&
		data.includes.includes( 'content' ) &&
		undefined === settings.pages &&
		( isLoaded || isImport );

	useEffect( () => {
		if ( shouldSeedPages ) {
			onSettingChange( 'pages', initialPages || pageOptions.map( ( { value } ) => value ) );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ initialPages, pageOptions, shouldSeedPages ] );

	if ( isImport && isOldExport ) {
		return null;
	}

	return isImport && ! hasExportedPages( data ) ? (
		<SettingSection
			title={ __( 'Site pages', 'elementor-pro' ) }
			settingKey="pages"
			notExported
		/>
	) : (
		<ListSettingSection
			settingKey="pages"
			title={ __( 'Site pages', 'elementor-pro' ) }
			onSettingChange={ ( selectedPages ) => onSettingChange( 'pages', selectedPages ) }
			settings={ settings.pages ?? ( isLoaded ? pageOptions.map( ( { value } ) => value ) : [] ) }
			items={ pageOptions }
			loading={ isLoading }
			disabled={ ! isHighTier() }
			tooltip={ ! isHighTier() }
		/>
	);
}

SitePagesSection.propTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	isOldExport: PropTypes.bool,
	onSettingChange: PropTypes.func.isRequired,
	open: PropTypes.bool,
	settings: PropTypes.object.isRequired,
};

export function MenusSection( { data, isImport, isOldExport, onSettingChange, settings } ) {
	const { customPostTypes } = useKitCustomizationCustomPostTypes( { data } );

	const initialMenus = isImport
		? ( data.customization.content?.menus || hasExportedMenuItems( data ) )
		: ( data.customization.content?.menus ?? true );
	const shouldSeedMenus = data.includes.includes( 'content' ) && undefined === settings.menus;

	useEffect( () => {
		if ( shouldSeedMenus ) {
			onSettingChange( 'menus', initialMenus );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ initialMenus, shouldSeedMenus ] );

	if ( isImport && isOldExport ) {
		return null;
	}

	const isMenusExported = () => {
		return hasExportedMenuItems( data ) ||
			customPostTypes?.find( ( cpt ) => cpt.value.includes( 'nav_menu' ) );
	};

	return (
		<SettingSection
			checked={ settings.menus ?? false }
			disabled={ ( isImport && ! isMenusExported() ) || ! isHighTier() }
			title={ __( 'Menus', 'elementor-pro' ) }
			settingKey="menus"
			tooltip={ ! isHighTier() }
			onSettingChange={ onSettingChange }
		/>
	);
}

MenusSection.propTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	isOldExport: PropTypes.bool,
	onSettingChange: PropTypes.func.isRequired,
	settings: PropTypes.object.isRequired,
};

export function TaxonomiesSection( { data, isImport, isOldExport, onSettingChange, open, settings } ) {
	const { isLoading, taxonomyOptions, isLoaded } = useKitCustomizationTaxonomies( { open, data } );

	const initialTaxonomies = data.customization.content?.taxonomies;
	const shouldSeedTaxonomies = open &&
		data.includes.includes( 'content' ) &&
		undefined === settings.taxonomies &&
		( isLoaded || isImport );

	useEffect( () => {
		if ( shouldSeedTaxonomies ) {
			onSettingChange( 'taxonomies', initialTaxonomies || taxonomyOptions.map( ( { value } ) => value ) );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ initialTaxonomies, shouldSeedTaxonomies, taxonomyOptions ] );

	if ( isImport && isOldExport ) {
		return null;
	}

	return (
		<SettingSection
			description={ __( 'Group your content by type, topic, or any structure you choose.', 'elementor-pro' ) }
			title={ __( 'Taxonomies', 'elementor-pro' ) }
			settingKey="taxonomies"
			notExported={ isImport && 0 === taxonomyOptions.length }
			hasToggle={ false }
		>
			{ isLoading ? (
				<Box sx={ { p: 1, alignItems: 'center', textAlign: 'center' } }>
					<CircularProgress size={ 30 } />
				</Box>
			) : (
				taxonomyOptions.map( ( taxonomy ) => (
					<SubSetting
						key={ taxonomy.value }
						label={ taxonomy.label }
						settingKey={ `taxonomies_${ taxonomy.value }` }
						checked={ ( settings.taxonomies ?? [] ).includes( taxonomy.value ) }
						disabled={ ! isHighTier() }
						tooltip={ ! isHighTier() }
						onSettingChange={ ( key, isChecked ) => {
							const selectedTaxonomies = isChecked
								? [ ...( settings.taxonomies ?? [] ), taxonomy.value ]
								: ( settings.taxonomies ?? [] ).filter( ( value ) => value !== taxonomy.value );

							onSettingChange( 'taxonomies', selectedTaxonomies );
						} }
					/>
				) )
			) }
		</SettingSection>
	);
}

TaxonomiesSection.propTypes = {
	data: PropTypes.object.isRequired,
	isImport: PropTypes.bool,
	isOldExport: PropTypes.bool,
	onSettingChange: PropTypes.func.isRequired,
	open: PropTypes.bool,
	settings: PropTypes.object.isRequired,
};

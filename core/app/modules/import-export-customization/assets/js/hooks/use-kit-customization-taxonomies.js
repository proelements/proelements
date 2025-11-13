import { useMemo } from 'react';
import { useTaxonomies } from './use-taxonomies';

export function useKitCustomizationTaxonomies( { data, open } ) {
	const isImport = data?.hasOwnProperty( 'uploadedData' );

	const { isLoading, taxonomyOptions: loadedTaxonomyOptions, isLoaded } = useTaxonomies( {
		skipLoading: isImport || ! open, exclude: [ 'nav_menu' ],
	} );

	const taxonomyOptions = useMemo( () => {
		if ( ! isImport ) {
			return loadedTaxonomyOptions;
		}

		const taxonomiesMap = {};

		Object.values( data?.uploadedData?.manifest?.taxonomies || {} ).forEach( ( taxonomiesListForPostType ) => {
			taxonomiesListForPostType.forEach( ( taxonomy ) => {
				const taxonomyObj = 'string' === typeof taxonomy
					// BC For Old Export
					? { name: taxonomy, label: taxonomy.split( '_' ).join( ' ' ) }
					: taxonomy;

				if ( ! taxonomiesMap[ taxonomyObj.name ] ) {
					taxonomiesMap[ taxonomyObj.name ] = { value: taxonomyObj.name, label: taxonomyObj.label };
				}
			} );
		} );

		return Object.values( taxonomiesMap );
	}, [ data?.uploadedData, isImport, loadedTaxonomyOptions ] );

	return {
		taxonomyOptions,
		isLoading,
		isLoaded,
	};
}

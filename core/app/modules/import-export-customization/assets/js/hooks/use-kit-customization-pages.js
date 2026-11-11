import { useMemo } from 'react';
import { usePages } from './use-pages';
import { getManifestItem } from '../utils';

export function useKitCustomizationPages( { data, open } ) {
	const isImport = data?.hasOwnProperty( 'uploadedData' );

	const { isLoading, pageOptions: loadedPagesOptions, isLoaded } = usePages( { skipLoading: isImport || ! open } );

	const pageOptions = useMemo( () => {
		if ( ! isImport ) {
			return loadedPagesOptions;
		}

		const elementorPages = Object.entries( getManifestItem( data, 'content' )?.page || {} ).map( ( [ id, page ] ) => {
			return { value: id, label: page.title };
		} );

		const wpPages = Object.entries( getManifestItem( data, 'wp-content' )?.page || {} ).map( ( [ id, page ] ) => {
			return { value: id, label: page.title };
		} );

		return [ ...elementorPages, ...wpPages ];
	}, [ loadedPagesOptions, isImport, data?.uploadedData ] );

	return {
		isLoading,
		pageOptions,
		isLoaded,
	};
}

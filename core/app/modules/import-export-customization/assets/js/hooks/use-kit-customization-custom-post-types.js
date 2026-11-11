import { useMemo } from 'react';
import { useCustomPostTypes } from './use-custom-post-types';
import { getManifestItem } from '../utils';

export function useKitCustomizationCustomPostTypes( { data } ) {
	const isImport = data?.hasOwnProperty( 'uploadedData' );

	const { customPostTypes: builtInCustomPostTypes } = useCustomPostTypes( { include: [ 'post' ] } );

	const customPostTypes = useMemo( () => {
		if ( ! isImport ) {
			return builtInCustomPostTypes;
		}

		const customPostTypesTitles = Object.values( getManifestItem( data, 'custom-post-type-title' ) || {} ).map( ( postType ) => {
			return {
				value: postType.name,
				label: postType.label,
			};
		} );

		if ( ! customPostTypesTitles.some( ( postType ) => 'post' === postType.value ) ) {
			customPostTypesTitles.push( {
				value: 'post',
				label: 'Post',
			} );
		}

		const wpContent = getManifestItem( data, 'wp-content' ) || {};
		const content = getManifestItem( data, 'content' ) || {};

		return customPostTypesTitles.filter( ( postType ) => {
			const postTypeValue = postType.value;

			const wpContentObject = wpContent[ postTypeValue ];
			const isInWpContent = wpContentObject && 'object' === typeof wpContentObject && Object.keys( wpContentObject ).length > 0;

			const contentObject = content[ postTypeValue ];
			const isInElementorContent = contentObject && 'object' === typeof contentObject && Object.keys( contentObject ).length > 0;

			return isInWpContent || isInElementorContent;
		} );
	}, [ isImport, data, builtInCustomPostTypes ] );

	return {
		customPostTypes,
	};
}

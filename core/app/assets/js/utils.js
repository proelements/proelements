// Copied from Core.
export const arrayToClassName = ( array, action ) => {
	return array
		.filter( ( item ) => 'object' === typeof ( item ) ? Object.entries( item )[ 0 ][ 1 ] : item )
		.map( ( item ) => {
			const value = 'object' === typeof ( item ) ? Object.entries( item )[ 0 ][ 0 ] : item;

			return action ? action( value ) : value;
		} )
		.join( ' ' );
};

export const htmlDecodeTextContent = ( input ) => {
	const doc = new DOMParser().parseFromString( input, 'text/html' );
	return doc.documentElement.textContent;
};

export const replaceUtmPlaceholders = ( link = '', utms = {} ) => {
	if ( ! link || ! utms ) {
		return link;
	}

	Object.keys( utms ).forEach( ( key ) => {
		const match = new RegExp( `%%${ key }%%`, 'g' );
		link = link.replace( match, utms[ key ] );
	} );

	return link;
};

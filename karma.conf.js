const karmaCoreConfig = require( '../elementor/karma.conf' );

module.exports = function( config ) {
	karmaCoreConfig( config );

	// Set base path.
	config.basePath = __dirname + '/../elementor/';

	// Change qunit-tests to pro.
	Object.entries( config.files ).some( ( [ key, path ] ) => {
		if ( 'assets/js/qunit-tests.js' === path ) {
			config.files[ key ] = __dirname + '/' + path;
			return true;
		}
	} );
};

export default class Condition {
	id = elementorCommon.helpers.getUniqueId();
	default = '';
	type = 'include';
	name = '';
	sub = '';
	subId = '';
	options = [];
	subOptions = [];
	subIdAutocomplete = [];
	subIdOptions = [];
	conflictErrors = [];

	constructor( args ) {
		this.set( args );
	}

	set( args ) {
		Object.assign( this, args );
		return this;
	}

	clone() {
		return Object.assign( new Condition(), this );
	}

	remove( keys ) {
		if ( ! Array.isArray( keys ) ) {
			keys = [ keys ];
		}

		keys.forEach( ( key ) => {
			delete this[ key ];
		} );

		return this;
	}

	only( keys ) {
		if ( ! Array.isArray( keys ) ) {
			keys = [ keys ];
		}

		const keysToRemove = Object.keys( this )
			.filter( ( conditionKey ) => ! keys.includes( conditionKey ) );

		this.remove( keysToRemove );

		return this;
	}

	toJson() {
		return JSON.stringify( this );
	}

	toString() {
		return this.forDb().filter( ( item ) => item ).join( '/' );
	}

	forDb() {
		return [ this.type, this.name, this.sub, this.subId ];
	}

	forContext() {
		return {
			type: this.type,
			name: this.name,
			sub: this.sub,
			subId: this.subId,
		};
	}
}

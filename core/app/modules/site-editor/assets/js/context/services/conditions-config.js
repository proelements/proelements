import { ConditionsConfig as ConditionsConfigCommand } from '../../data/commands';

export class ConditionsConfig {
	static instance;

	config = null;

	constructor( config ) {
		this.config = config;
	}

	/**
	 * @return {Promise<ConditionsConfig>} -
	 */
	static create() {
		if ( ConditionsConfig.instance ) {
			return Promise.resolve( ConditionsConfig.instance );
		}

		return $e.data.get( ConditionsConfigCommand.signature, {}, { refresh: true } )
			.then( ( response ) => {
				ConditionsConfig.instance = new ConditionsConfig( response.data );

				return ConditionsConfig.instance;
			} );
	}

	/**
	 * Get main options for condition name.
	 *
	 * @return {Array} -
	 */
	getOptions() {
		return this.getSubOptions( 'general', true )
			.map( ( { label, value } ) => {
				return {
					label,
					value,
				};
			} );
	}

	/**
	 * Get the sub options for the select.
	 *
	 * @param {string}  itemName
	 * @param {boolean} isSubItem
	 * @return {Array} -
	 */
	getSubOptions( itemName, isSubItem = false ) {
		const config = this.config[ itemName ];

		if ( ! config ) {
			return [];
		}

		return [
			{ label: config.all_label, value: isSubItem ? itemName : '' },
			...config.sub_conditions.map( ( subName ) => {
				const subConfig = this.config[ subName ];

				return {
					label: subConfig.label,
					value: subName,
					children: subConfig.sub_conditions.length ? this.getSubOptions( subName, true ) : null,
				};
			} ),
		];
	}

	/**
	 * Get the autocomplete property from the conditions config
	 *
	 * @param {string} sub
	 * @return {{}|any} -
	 */
	getSubIdAutocomplete( sub ) {
		const config = this.config[ sub ];

		if ( ! config || ! ( 'object' === typeof ( config.controls ) ) ) {
			return {};
		}

		const controls = Object.values( config.controls );

		if ( ! controls?.[ 0 ]?.autocomplete ) {
			return {};
		}

		return controls[ 0 ].autocomplete;
	}

	/**
	 * Calculate instances from the conditions.
	 *
	 * @param {Array} conditions
	 * @return {Object} -
	 */
	calculateInstances( conditions ) {
		let instances = conditions.reduce( ( current, condition ) => {
			if ( 'exclude' === condition.type ) {
				return current;
			}

			const key = condition.sub || condition.name,
				config = this.config[ key ];

			if ( ! config ) {
				return current;
			}

			const instanceLabel = condition.subId
				? `${ config.label } #${ condition.subId }`
				: config.all_label;

			return {
				...current,
				[ key ]: instanceLabel,
			};
		}, {} );

		if ( 0 === Object.keys( instances ).length ) {
			instances = [ __( 'No instances', 'elementor-pro' ) ];
		}

		return instances;
	}
}

export default ConditionsConfig;

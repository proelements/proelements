import Condition from './models/condition';
import ConditionsConfig from './services/conditions-config';
import BaseContext from './base-context';
import { TemplatesConditions, TemplatesConditionsConflicts } from '../data/commands';

export const Context = React.createContext();

export class ConditionsProvider extends BaseContext {
	static propTypes = {
		children: PropTypes.any.isRequired,
		currentTemplate: PropTypes.object.isRequired,
		onConditionsSaved: PropTypes.func.isRequired,
		validateConflicts: PropTypes.bool,
	};

	static defaultProps = {
		validateConflicts: true,
	};

	static actions = {
		FETCH_CONFIG: 'fetch-config',
		SAVE: 'save',
		CHECK_CONFLICTS: 'check-conflicts',
	};

	/**
	 * Holds the conditions config object.
	 *
	 * @type {ConditionsConfig}
	 */
	conditionsConfig = null;

	/**
	 * ConditionsProvider constructor.
	 *
	 * @param {any} props
	 */
	constructor( props ) {
		super( props );

		this.state = {
			...this.state,

			conditions: {},

			updateConditionItemState: this.updateConditionItemState.bind( this ),
			removeConditionItemInState: this.removeConditionItemInState.bind( this ),
			createConditionItemInState: this.createConditionItemInState.bind( this ),
			findConditionItemInState: this.findConditionItemInState.bind( this ),

			saveConditions: this.saveConditions.bind( this ),
		};
	}

	/**
	 * Fetch the conditions config, then normalize the conditions and then setup titles for
	 * the subIds.
	 */
	componentDidMount() {
		this.executeAction( ConditionsProvider.actions.FETCH_CONFIG, () => ConditionsConfig.create() )
			.then( ( conditionsConfig ) => this.conditionsConfig = conditionsConfig )
			.then( this.normalizeConditionsState.bind( this ) )
			.then( this.setSubIdTitles.bind( this ) );
	}

	/**
	 * Execute a request to save the template conditions.
	 *
	 * @return {any} Saved conditions
	 */
	saveConditions() {
		const conditions = Object.values( this.state.conditions )
			.map( ( condition ) => condition.forDb() );

		return this.executeAction(
			ConditionsProvider.actions.SAVE,
			() => $e.data.update( TemplatesConditions.signature, { conditions }, { id: this.props.currentTemplate.id } ),
		).then( () => {
			const contextConditions = Object.values( this.state.conditions )
				.map( ( condition ) => condition.forContext() );

			this.props.onConditionsSaved( this.props.currentTemplate.id, {
				conditions: contextConditions,
				instances: this.conditionsConfig.calculateInstances( Object.values( this.state.conditions ) ),
				isActive: !! ( Object.keys( this.state.conditions ).length && 'publish' === this.props.currentTemplate.status ),
			} );
		} );
	}

	/**
	 * Check for conflicts in the server and mark the condition if there
	 * is a conflict.
	 *
	 * @param {any} condition
	 */
	checkConflicts( condition ) {
		return this.executeAction(
			ConditionsProvider.actions.CHECK_CONFLICTS,
			() => $e.data.get( TemplatesConditionsConflicts.signature, {
				post_id: this.props.currentTemplate.id,
				condition: condition.clone().toString(),
			} ),
		).then( ( response ) =>
			this.updateConditionItemState( condition.id, { conflictErrors: Object.values( response.data ) }, false ),
		);
	}

	/**
	 * Fetching subId titles.
	 *
	 * @param {any} condition
	 * @return {Promise<unknown>} Titles
	 */
	fetchSubIdsTitles( condition ) {
		return new Promise( ( resolve ) => {
			return elementorCommon.ajax.loadObjects( {
				action: 'query_control_value_titles',
				ids: _.isArray( condition.subId ) ? condition.subId : [ condition.subId ],
				data: {
					get_titles: condition.subIdAutocomplete,
					unique_id: elementorCommon.helpers.getUniqueId(),
				},
				success( response ) {
					resolve( response );
				},
			} );
		} );
	}

	/**
	 * Get the conditions from the template and normalize it to data structure
	 * that the components can work with.
	 */
	normalizeConditionsState() {
		this.updateConditionsState( () => {
			return this.props.currentTemplate.conditions.reduce( ( current, condition ) => {
				const conditionObj = new Condition( {
					...condition,
					default: this.props.currentTemplate.defaultCondition,
					options: this.conditionsConfig.getOptions(),
					subOptions: this.conditionsConfig.getSubOptions( condition.name ),
					subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete( condition.sub ),
					supIdOptions: condition.subId ? [ { value: condition.subId, label: condition.subId } ] : [],
				} );

				return {
					...current,
					[ conditionObj.id ]: conditionObj,
				};
			}, {} );
		} ).then( () => {
			Object.values( this.state.conditions ).forEach( ( condition ) => this.checkConflicts( condition ) );
		} );
	}

	/**
	 * Set titles to the subIds,
	 * for the first render of the component.
	 */
	setSubIdTitles() {
		return Object.values( this.state.conditions ).forEach( ( condition ) => {
			if ( ! condition.subId ) {
				return;
			}

			return this.fetchSubIdsTitles( condition )
				.then( ( response ) =>
					this.updateConditionItemState( condition.id, {
						subIdOptions: [ {
							label: Object.values( response )[ 0 ],
							value: condition.subId,
						} ],
					}, false ),
				);
		} );
	}

	/**
	 * Update state of specific condition item.
	 *
	 * @param {any}     id
	 * @param {any}     args
	 * @param {boolean} shouldCheckConflicts
	 */
	updateConditionItemState( id, args, shouldCheckConflicts = true ) {
		if ( args.name ) {
			args.subOptions = this.conditionsConfig.getSubOptions( args.name );
		}

		if ( args.sub || args.name ) {
			args.subIdAutocomplete = this.conditionsConfig.getSubIdAutocomplete( args.sub );

			// In case that the condition has been changed, it will set the options of the subId
			// to empty array to let select2 autocomplete handle the options.
			args.subIdOptions = [];
		}

		this.updateConditionsState( ( prev ) => {
			const condition = prev[ id ];

			return {
				...prev,
				[ id ]: condition.clone().set( args ),
			};
		} ).then( () => {
			if ( shouldCheckConflicts ) {
				this.checkConflicts( this.findConditionItemInState( id ) );
			}
		} );
	}

	/**
	 * Remove a condition item from the state.
	 *
	 * @param {any} id
	 */
	removeConditionItemInState( id ) {
		this.updateConditionsState( ( prev ) => {
			const newConditions = { ...prev };

			delete newConditions[ id ];

			return newConditions;
		} );
	}

	/**
	 * Add a new condition item into the state.
	 *
	 * @param {boolean} shouldCheckConflicts
	 */
	createConditionItemInState( shouldCheckConflicts = true ) {
		const defaultCondition = this.props.currentTemplate.defaultCondition,
			newCondition = new Condition( {
				name: defaultCondition,
				default: defaultCondition,
				options: this.conditionsConfig.getOptions(),
				subOptions: this.conditionsConfig.getSubOptions( defaultCondition ),
				subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete( '' ),
			} );

		this.updateConditionsState( ( prev ) => ( { ...prev, [ newCondition.id ]: newCondition } ) )
			.then( () => {
				if ( shouldCheckConflicts ) {
					this.checkConflicts( newCondition );
				}
			} );
	}

	/**
	 * Find a condition item from the conditions state.
	 *
	 * @param {any} id
	 * @return {Condition|null} Condition
	 */
	findConditionItemInState( id ) {
		return Object.values( this.state.conditions ).find( ( c ) => c.id === id );
	}

	/**
	 * Update the whole conditions state.
	 *
	 * @param {Function} callback
	 * @return {Promise<undefined>} Conditions state
	 */
	updateConditionsState( callback ) {
		return new Promise( ( resolve ) =>
			this.setState( ( prev ) => ( { conditions: callback( prev.conditions ) } ), resolve ),
		);
	}

	/**
	 * Renders the provider.
	 *
	 * @return {any} Element
	 */
	render() {
		if ( this.state.action.current === ConditionsProvider.actions.FETCH_CONFIG ) {
			if ( this.state.error ) {
				return <h3>{ __( 'Error:', 'elementor-pro' ) } { this.state.error }</h3>;
			}

			if ( this.state.loading ) {
				return <h3>{ __( 'Loading', 'elementor-pro' ) }...</h3>;
			}
		}

		return (
			<Context.Provider value={ this.state }>
				{ this.props.children }
			</Context.Provider>
		);
	}
}

export default ConditionsProvider;

import BaseContext from './base-context';
import { Templates } from '../data/commands';
import Component from '../data/component';

export const Context = React.createContext();

export class TemplatesProvider extends BaseContext {
	static propTypes = {
		children: PropTypes.object.isRequired,
	};

	static actions = {
		FETCH: 'fetch',
		DELETE: 'delete',
		UPDATE: 'update',
		IMPORT: 'import',
	};

	constructor( props ) {
		super( props );

		this.state = {
			...this.state,
			action: {
				...this.state.action,
				current: TemplatesProvider.actions.FETCH,
				loading: true,
			},

			templates: {},

			updateTemplateItemState: this.updateTemplateItemState.bind( this ),
			findTemplateItemInState: this.findTemplateItemInState.bind( this ),

			fetchTemplates: this.fetchTemplates.bind( this ),
			deleteTemplate: this.deleteTemplate.bind( this ),
			updateTemplate: this.updateTemplate.bind( this ),
			importTemplates: this.importTemplates.bind( this ),
		};
	}

	componentDidMount() {
		this.fetchTemplates();
	}

	importTemplates( { fileName, fileData } ) {
		return this.executeAction(
			TemplatesProvider.actions.IMPORT,
			() => $e.data.create( Templates.signature, { fileName, fileData } ),
		).then( ( response ) => {
			this.updateTemplatesState( ( prev ) => (
					{
						...prev,
						...Object.values( response.data ).reduce(
							( current, template ) => {
								if ( ! template.supportsSiteEditor ) {
									return current;
								}

								return { ...current, [ template.id ]: template };
							}, {},
						),
					}
				),
			);

			return response;
		} );
	}

	deleteTemplate( id ) {
		return this.executeAction(
			TemplatesProvider.actions.DELETE,
			() => $e.data.delete( Templates.signature, { id } ),
		).then( () => {
			this.updateTemplatesState( ( prev ) => {
				const newTemplates = { ...prev };

				delete newTemplates[ id ];

				return newTemplates;
			} );
		} );
	}

	updateTemplate( id, args ) {
		return this.executeAction(
			TemplatesProvider.actions.UPDATE,
			() => $e.data.update( Templates.signature, args, { id } ),
		).then( ( response ) => {
			this.updateTemplateItemState( id, response.data );
		} );
	}

	fetchTemplates() {
		return this.executeAction(
			TemplatesProvider.actions.FETCH,
			() => $e.data.get( Templates.signature, {}, { refresh: true } ),
		).then( ( response ) => {
			this.updateTemplatesState( () => Object.values( response.data ).reduce(
				( current, template ) => ( { ...current, [ template.id ]: template } ), {},
			), false );
		} );
	}

	updateTemplateItemState( id, args ) {
		return this.updateTemplatesState( ( prev ) => {
			const template = {
				...prev[ id ],
				...args,
			};

			return {
				...prev,
				[ id ]: template,
			};
		} );
	}

	updateTemplatesState( callback, clearCache = true ) {
		if ( clearCache ) {
			$e.data.deleteCache( $e.components.get( Component.namespace ), Templates.signature );
		}

		return this.setState( ( prev ) => {
			return { templates: callback( prev.templates ) };
		} );
	}

	findTemplateItemInState( id ) {
		return this.state.templates[ id ];
	}

	render() {
		if ( this.state.action.current === TemplatesProvider.actions.FETCH ) {
			if ( this.state.action.error ) {
				return <h3>{ __( 'Error:', 'elementor-pro' ) } { this.state.action.error }</h3>;
			}

			if ( this.state.action.loading ) {
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

export default TemplatesProvider;

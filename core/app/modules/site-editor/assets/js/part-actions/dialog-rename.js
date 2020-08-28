import { Dialog } from '@elementor/app-ui';
import { Context as TemplatesContext } from '../context/templates';

export default function DialogRename( props ) {
	const { findTemplateItemInState, updateTemplate } = React.useContext( TemplatesContext ),
		template = findTemplateItemInState( props.id );

	const [ title, setTitle ] = React.useState( false );

	const closeDialog = ( shouldUpdate ) => {
		props.setId( null );

		if ( shouldUpdate ) {
			updateTemplate( props.id, { post_title: title } );
		}
	};

	if ( ! props.id ) {
		return '';
	}

	return (
		<Dialog
			title={ __( 'Rename Part', 'elementor-pro' ) }
			approveButtonText={ __( 'Change', 'elementor-pro' ) }
			onSubmit={() => closeDialog( true )}
			approveButtonOnClick={ () => closeDialog( true ) }
			dismissButtonText={ __( 'Cancel', 'elementor-pro' ) }
			dismissButtonOnClick={ () => closeDialog() }
		>
			<input
				type="text"
				className="eps-input eps-input-text eps-input--block"
				autoFocus
				defaultValue={ template.title }
				onChange={ ( e ) => setTitle( e.target.value ) }
			/>
		</Dialog>
	);
}

DialogRename.propTypes = {
	id: PropTypes.number,
	setId: PropTypes.func.isRequired,
};

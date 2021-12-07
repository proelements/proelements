import { useEffect } from 'react';
import { Dialog } from '@elementor/app-ui';
import { Context as TemplatesContext } from '../context/templates';

export default function DialogRename( props ) {
	const { findTemplateItemInState, updateTemplate } = React.useContext( TemplatesContext ),
		template = findTemplateItemInState( props.id );

	const [ title, setTitle ] = React.useState( '' );

	useEffect( () => {
		// The "title" state should be updated if the template title changed.
		if ( template ) {
			setTitle( template.title );
		}
	}, [ template ] );

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
			title={ __( 'Rename Site Part', 'elementor-pro' ) }
			approveButtonText={ __( 'Change', 'elementor-pro' ) }
			onSubmit={ () => closeDialog( true ) }
			approveButtonOnClick={ () => closeDialog( true ) }
			approveButtonColor="primary"
			dismissButtonText={ __( 'Cancel', 'elementor-pro' ) }
			dismissButtonOnClick={ () => closeDialog() }
			onClose={ () => closeDialog() }
		>
			<input
				type="text"
				className="eps-input eps-input-text eps-input--block"
				autoFocus
				value={ title }
				onChange={ ( e ) => setTitle( e.target.value ) }
			/>
		</Dialog>
	);
}

DialogRename.propTypes = {
	id: PropTypes.number,
	setId: PropTypes.func.isRequired,
};

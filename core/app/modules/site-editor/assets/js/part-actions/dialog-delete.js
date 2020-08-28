import { Dialog } from '@elementor/app-ui';
import { Context as TemplatesContext } from '../context/templates';

export default function DialogDelete( props ) {
	const { deleteTemplate, findTemplateItemInState } = React.useContext( TemplatesContext ),
		template = findTemplateItemInState( props.id );

	const closeDialog = ( shouldUpdate ) => {
		props.setId( null );

		if ( shouldUpdate ) {
			deleteTemplate( props.id );
		}
	};

	if ( ! props.id ) {
		return '';
	}

	return (
		<Dialog
			title={ __( 'Delete Part', 'elementor-pro' ) }
			text={ __( 'Are you sure you want to delete this item', 'elementor-pro' ) + ` ${ template.title }` }
			onSubmit={() => closeDialog( true )}
			approveButtonText={ __( 'Delete', 'elementor-pro' ) }
			approveButtonOnClick={() => closeDialog( true )}
			approveButtonColor="danger"
			dismissButtonText={ __( 'Cancel', 'elementor-pro' ) }
			dismissButtonOnClick={() => closeDialog()}
		/>
	);
}

DialogDelete.propTypes = {
	id: PropTypes.number,
	setId: PropTypes.func.isRequired,
};

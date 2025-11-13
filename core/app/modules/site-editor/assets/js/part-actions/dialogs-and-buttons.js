import DialogRename from './dialog-rename';
import DialogDelete from './dialog-delete';
import { Button, Popover } from '@elementor/app-ui';

export const handlers = {
	rename: null,
	delete: null,
};

// TODO: Think about refactor to portals: https://reactjs.org/docs/portals.html
export function PartActionsDialogs() {
	const [ DialogRenameId, setDialogRenameId ] = React.useState( null );
	const [ DialogDeleteId, setDialogDeleteId ] = React.useState( null );

	handlers.rename = setDialogRenameId;
	handlers.delete = setDialogDeleteId;

	return (
		<>
			<DialogRename id={ DialogRenameId } setId={ setDialogRenameId } />
			<DialogDelete id={ DialogDeleteId } setId={ setDialogDeleteId } />
		</>
	);
}

export default function PartActionsButtons( props ) {
	const [ showMenu, setShowMenu ] = React.useState( false );

	let SiteTemplatePopover = '';

	if ( showMenu ) {
		SiteTemplatePopover = (
			<Popover closeFunction={ () => setShowMenu( ! showMenu ) }>
				<li>
					<Button
						className="eps-popover__item"
						icon="eicon-sign-out"
						text={ __( 'Export', 'elementor-pro' ) }
						url={ props.exportLink }
					/>
				</li>
				<li>
					<Button
						className="eps-popover__item eps-popover__item--danger"
						icon="eicon-trash-o"
						text={ __( 'Trash', 'elementor-pro' ) }
						onClick={ () => handlers.delete( props.id ) }
					/>
				</li>
				<li>
					<Button
						className="eps-popover__item"
						icon="eicon-edit"
						text={ __( 'Rename', 'elementor-pro' ) }
						onClick={ () => handlers.rename( props.id ) }
					/>
				</li>
			</Popover>
		);
	}

	return (
		<div className="eps-popover__container">
			<Button
				text={ __( 'Toggle', 'elementor-pro' ) }
				hideText={ true }
				icon="eicon-ellipsis-h"
				size="lg"
				onClick={ () => setShowMenu( ! showMenu ) }
			/>
			{ SiteTemplatePopover }
		</div>
	);
}

PartActionsButtons.propTypes = {
	id: PropTypes.number.isRequired,
	exportLink: PropTypes.string.isRequired,
};

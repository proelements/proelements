import { Button } from '@elementor/app-ui';

export default function ConditionConflicts( props ) {
	if ( ! props.conflicts.length ) {
		return '';
	}

	const conflictLinks = props.conflicts.map( ( conflict ) => {
		return (
			<Button
				key={ conflict.template_id }
				target="_blank"
				url={ conflict.edit_url }
				text={ conflict.template_title }
			/>
		);
	} );

	return (
		<div className="row-conflict-error">
			{ __( 'Elementor recognized that you have set this location for other templates: ', 'elementor-pro' ) } { conflictLinks }
		</div>
	);
}

ConditionConflicts.propTypes = {
	conflicts: PropTypes.array.isRequired,
};

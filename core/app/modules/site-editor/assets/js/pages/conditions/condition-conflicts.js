import { Button, Text } from '@elementor/app-ui';

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
		<Text className="e-site-editor-conditions__conflict" variant="sm">
			{ __( 'Elementor recognized that you have set this location for other templates: ', 'elementor-pro' ) } { conflictLinks }
		</Text>
	);
}

ConditionConflicts.propTypes = {
	conflicts: PropTypes.array.isRequired,
};

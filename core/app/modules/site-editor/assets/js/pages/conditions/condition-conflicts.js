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
			{
				sprintf(
					/* Translators: %s: a list of conflicted templates */
					__( 'We noticed that you already applied %s with the same condition.', 'elementor-pro' ),
					conflictLinks,
				)
			}
			<br />
			{ __( "To continue, set different conditions for each so they don't conflict.", 'elementor-pro' ) }
		</Text>
	);
}

ConditionConflicts.propTypes = {
	conflicts: PropTypes.array.isRequired,
};

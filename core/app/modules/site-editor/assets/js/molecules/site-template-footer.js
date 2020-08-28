import { Button, CardFooter, Icon, Text } from '@elementor/app-ui';

export const SiteTemplateFooter = ( props ) => {
	const instances = Object.values( props.instances ).join( ', ' );

	return (
		<CardFooter>
			<div className="e-site-template__instances">
				<Icon className="eicon-flow"/>
				<Text tag="span" variant="sm"><b>{ __( 'Instances', 'elementor-pro' ) }:</b></Text>
				<Text className="e-site-template__instances-list" tag="span" variant="xxs"> { instances }</Text>
				<Button text={ __( 'Edit Conditions', 'elementor-pro' ) }
						className="e-site-template__edit-conditions"
						url={ `/site-editor/conditions/${ props.id }` } />
			</div>
		</CardFooter>
	);
};

SiteTemplateFooter.propTypes = {
	id: PropTypes.number.isRequired,
	instances: PropTypes.any,
};

import { Tooltip, Box } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import * as PropTypes from 'prop-types';

export const UpgradeTooltip = ( { children, disabled = false, tooltip = false, ...props } ) => {
	if ( disabled && tooltip ) {
		return (
			<Tooltip
				title={ __( 'Upgrade your plan to choose which elements to adjust.', 'elementor' ) }
				placement="top"
				arrow
				componentsProps={ {
					tooltip: {
						sx: {
							maxWidth: 200,
							fontSize: '12px',
							fontWeight: 500,
							lineHeight: 1.4,
							textAlign: 'center',
							backgroundColor: 'background.paper',
							color: 'text.secondary',
							padding: 1.5,
							boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
						},
					},
					arrow: {
						sx: {
							fontSize: '1.2rem',
							color: 'background.paper',
							filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))',
							'&::before': {
								backgroundColor: 'background.paper',
							},
						},
					},
				} }
				{ ...props }
			>
				<Box component="span">{ children }</Box>
			</Tooltip>
		);
	}

	return children;
};

UpgradeTooltip.propTypes = {
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	tooltip: PropTypes.bool,
};

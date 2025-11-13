import { Box, Button, Typography, Paper } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import { isHighTier } from '../hooks/use-tier';

export function UpgradeNoticeBanner() {
	if ( isHighTier() ) {
		return null;
	}

	return (
		<Paper
			sx={ {
				position: 'sticky',
				bottom: 0,
				marginLeft: -3,
				marginRight: -3,
				zIndex: 1000,
				py: 2,
				px: 3,
			} }
		>
			<Paper
				elevation={ 0 }
				color="promotion"
				sx={ {
					borderRadius: 1,
					p: 2,
				} }
			>
				<Box sx={ { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 } }>
					<Box sx={ { flex: 1, minWidth: 0 } }>
						<Typography variant="body2" color="text.secondary">
							{ __( 'Take control of your workflow. The Expert plan lets you decide exactly what\'s included in your export/import kits, from themes to experiments so nothing gets left behind.', 'elementor' ) }
						</Typography>
					</Box>
					<Button
						variant="outlined"
						color="promotion"
						onClick={ () => window.open( 'https://go.elementor.com/go-pro-import-export', '_blank' ) }
						startIcon={ <span className="eicon-upgrade-crown"></span> }
						sx={ { flexShrink: 0, whiteSpace: 'nowrap' } }
					>
						{ __( 'Check Expert plan', 'elementor' ) }
					</Button>
				</Box>
			</Paper>
		</Paper>
	);
}

import { AlertTriangleFilledIcon } from '@elementor/icons';
import { Box, Checkbox, FormControlLabel, Tooltip, Typography } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';

export function KitPartSelectionSection( {
	data,
	DialogComponent,
	disabled,
	handleSaveCustomization,
	hasSettingsLimitWarning,
	isActive,
	isCloudKitsEligible,
	isImport,
	isLockedFeaturesNoPro,
	isOldElementorVersion,
	isOldExport,
	item,
	onCheckboxChange,
	onCloseDialog,
	onOpenDialog,
	renderEditControl,
	renderFeatureDescription,
} ) {
	return (
		<>
			<Box
				data-testid={ `KitPartsSelectionRow-${ item.type }` }
				sx={ {
					mb: 3,
					border: 1,
					borderRadius: 1,
					borderColor: 'action.focus',
					p: 2.5,
				} }
			>
				<Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } }>
					<Box sx={ { flex: 1, opacity: isLockedFeaturesNoPro ? 0.5 : 1 } }>
						<Box sx={ { display: 'flex', alignItems: 'center' } }>
							<FormControlLabel
								control={
									<Checkbox
										color="info"
										checked={ item.checked }
										onChange={ onCheckboxChange }
										disabled={ disabled }
										sx={ { p: 0, mx: 1 } }
									/>
								}
								label={ <Typography color="text.primary" variant="body1" sx={ { fontWeight: 500 } }>{ item.data.title }</Typography> }
								sx={ {
									'& .MuiFormControlLabel-label.Mui-disabled': {
										color: 'text.primary',
									},
								} }
							/>
							{ 'settings' === item.type && hasSettingsLimitWarning && (
								<Tooltip
									title={ __( 'Limit exceeded. Click \'Edit\' to review conflicts or override existing items', 'elementor' ) }
									placement="top"
									arrow
								>
									<AlertTriangleFilledIcon
										sx={ {
											fontSize: 20,
											color: 'warning.main',
											ml: 0.5,
										} }
										aria-hidden
									/>
								</Tooltip>
							) }
						</Box>
						{ renderFeatureDescription( item, isLockedFeaturesNoPro ) }
					</Box>
					{ renderEditControl( item, isLockedFeaturesNoPro, onOpenDialog ) }
				</Box>
			</Box>
			{ DialogComponent && (
				<DialogComponent
					data={ data }
					open={ isActive }
					handleClose={ onCloseDialog }
					handleSaveChanges={ handleSaveCustomization }
					isImport={ isImport }
					isOldExport={ isOldExport }
					isOldElementorVersion={ isOldElementorVersion }
					isCloudKitsEligible={ isCloudKitsEligible }
				/>
			) }
		</>
	);
}

KitPartSelectionSection.propTypes = {
	data: PropTypes.object,
	DialogComponent: PropTypes.elementType,
	disabled: PropTypes.bool,
	handleSaveCustomization: PropTypes.func.isRequired,
	hasSettingsLimitWarning: PropTypes.bool,
	isActive: PropTypes.bool,
	isCloudKitsEligible: PropTypes.bool,
	isImport: PropTypes.bool,
	isLockedFeaturesNoPro: PropTypes.bool,
	isOldElementorVersion: PropTypes.bool,
	isOldExport: PropTypes.bool,
	item: PropTypes.object.isRequired,
	onCheckboxChange: PropTypes.func.isRequired,
	onCloseDialog: PropTypes.func.isRequired,
	onOpenDialog: PropTypes.func.isRequired,
	renderEditControl: PropTypes.func.isRequired,
	renderFeatureDescription: PropTypes.func.isRequired,
};

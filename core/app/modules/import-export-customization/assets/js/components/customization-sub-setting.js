import { Box, Typography, Switch } from '@elementor/ui';
import * as PropTypes from 'prop-types';
import { UpgradeTooltip } from './upgrade-tooltip';

export const SubSetting = ( {
	label,
	settingKey,
	onSettingChange,
	checked = false,
	disabled = false,
	notExported = false,
	tooltip = false,
} ) => {
	const getToggle = () => {
		if ( notExported ) {
			return (
				<Typography
					data-testid={ `${ settingKey }-description` }
					variant="body1"
					color="text.secondary"
					sx={ {
						fontWeight: 400,
						alignSelf: 'center',
					} }
				>
					{ __( 'Not exported', 'elementor' ) }
				</Typography>
			);
		}

		const switchElement = (
			<Switch
				data-testid={ `${ settingKey }-switch` }
				checked={ checked }
				disabled={ disabled }
				onChange={ ( _, isChecked ) => onSettingChange && onSettingChange( settingKey, isChecked ) }
				color="info"
				size="medium"
				sx={ {
					alignSelf: 'center',
					...( disabled && tooltip && { cursor: 'pointer' } ),
				} }
			/>
		);

		return (
			<UpgradeTooltip disabled={ disabled } tooltip={ tooltip }>
				{ switchElement }
			</UpgradeTooltip>
		);
	};

	return (
		<Box
			sx={ {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			} }
		>
			<Typography data-testid={ `${ settingKey }-label` } variant="body1">
				{ label }
			</Typography>
			{ getToggle() }
		</Box>
	);
};

SubSetting.propTypes = {
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	notExported: PropTypes.bool,
	label: PropTypes.string.isRequired,
	settingKey: PropTypes.string.isRequired,
	onSettingChange: PropTypes.func,
	tooltip: PropTypes.bool,
};

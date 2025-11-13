import { Box, Typography, Switch, Stack } from '@elementor/ui';
import * as PropTypes from 'prop-types';
import { UpgradeTooltip } from './upgrade-tooltip';

export const SettingSection = ( {
	checked = false,
	title,
	description,
	children,
	settingKey,
	onSettingChange,
	hasToggle = true,
	disabled = false,
	notExported = false,
	tooltip = false,
} ) => {
	const getToggle = () => {
		if ( notExported ) {
			return (
				<Typography data-testid={ `${ settingKey }-description` } variant="body1" color="text.secondary">
					{ __( 'Not exported', 'elementor' ) }
				</Typography>
			);
		}

		if ( ! hasToggle ) {
			return null;
		}

		const switchElement = (
			<Switch
				data-testid={ `${ settingKey }-switch` }
				checked={ checked }
				onChange={ ( _, isChecked ) => onSettingChange && onSettingChange( settingKey, isChecked ) }
				color="info"
				size="medium"
				sx={ {
					alignSelf: 'center',
					...( disabled && tooltip && { cursor: 'pointer' } ),
				} }
				disabled={ disabled }
			/>
		);

		return (
			<UpgradeTooltip disabled={ disabled } tooltip={ tooltip }>
				{ switchElement }
			</UpgradeTooltip>
		);
	};

	return (
		<Box key={ settingKey } sx={ { mb: 3, border: 1, borderRadius: 1, borderColor: 'action.focus', p: 2.5 } }>
			<Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
				<Stack spacing={ 1 }>
					<Typography variant="h6">
						{ title }
					</Typography>
					{ description && (
						<Typography data-testid={ `${ settingKey }-description` } variant="body1" color="text.secondary">
							{ description }
						</Typography>
					) }
				</Stack>
				{ getToggle() }
			</Box>
			{ children && (
				<Box sx={ { mt: 1 } }>
					{ children }
				</Box>
			) }
		</Box>
	);
};

SettingSection.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	children: PropTypes.node,
	hasToggle: PropTypes.bool,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	settingKey: PropTypes.string,
	onSettingChange: PropTypes.func,
	notExported: PropTypes.bool,
	tooltip: PropTypes.bool,
};

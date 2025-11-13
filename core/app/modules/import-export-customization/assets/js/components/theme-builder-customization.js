import { Stack, Box, Typography, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, FormControlLabel, Link, SvgIcon, Alert, AlertTitle } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { UpgradeTooltip } from './upgrade-tooltip';

const ExternalLinkIcon = ( props ) => {
	return (
		<SvgIcon
			viewBox="0 0 18 18"
			sx={ {
				fontSize: 16,
				color: 'info.light',
			} }
			{ ...props }
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11 1C11 0.585786 11.3358 0.25 11.75 0.25H16.75C17.1642 0.25 17.5 0.585786 17.5 1V6C17.5 6.41421 17.1642 6.75 16.75 6.75C16.3358 6.75 16 6.41421 16 6V2.81066L7.28033 11.5303C6.98744 11.8232 6.51256 11.8232 6.21967 11.5303C5.92678 11.2374 5.92678 10.7626 6.21967 10.4697L14.9393 1.75H11.75C11.3358 1.75 11 1.41421 11 1ZM0.805456 4.05546C1.32118 3.53973 2.02065 3.25 2.75 3.25H7.75C8.16421 3.25 8.5 3.58579 8.5 4C8.5 4.41421 8.16421 4.75 7.75 4.75H2.75C2.41848 4.75 2.10054 4.8817 1.86612 5.11612C1.6317 5.35054 1.5 5.66848 1.5 6V15C1.5 15.3315 1.6317 15.6495 1.86612 15.8839C2.10054 16.1183 2.41848 16.25 2.75 16.25H11.75C12.0815 16.25 12.3995 16.1183 12.6339 15.8839C12.8683 15.6495 13 15.3315 13 15V10C13 9.58579 13.3358 9.25 13.75 9.25C14.1642 9.25 14.5 9.58579 14.5 10V15C14.5 15.7293 14.2103 16.4288 13.6945 16.9445C13.1788 17.4603 12.4793 17.75 11.75 17.75H2.75C2.02065 17.75 1.32118 17.4603 0.805456 16.9445C0.289731 16.4288 0 15.7293 0 15V6C0 5.27065 0.289731 4.57118 0.805456 4.05546Z"
				fill="currentColor"
			/>
		</SvgIcon>
	);
};

export function ThemeBuilderCustomization( { state, settingKey, onStateChange, data, disabled, tooltip = false } ) {
	const isImport = data.hasOwnProperty( 'uploadedData' );

	const [ conflicts, setConflicts ] = useState( [] );
	const [ loading, setLoading ] = useState( false );

	useEffect( () => {
		if ( state?.enabled && isImport ) {
			loadConflicts();
		} else {
			setConflicts( [] );
			setLoading( false );
		}
	}, [ state?.enabled, isImport, data ] );

	const loadConflicts = async () => {
		setLoading( true );
		try {
			const actualConflicts = data?.uploadedData?.conflicts ? Object.entries( data.uploadedData.conflicts ) : [];

			const formattedConflicts = actualConflicts.map( ( [ importedTemplateId, conflictsList ] ) => {
				const importedTemplate = data?.uploadedData?.manifest?.templates?.[ importedTemplateId ];
				const firstConflict = conflictsList[ 0 ];

				return {
					template_id: firstConflict.template_id,
					template_name: firstConflict.template_title,
					edit_url: firstConflict.edit_url,

					imported_template_id: parseInt( importedTemplateId ),
					imported_template_name: importedTemplate?.title || 'Unknown Template',

					location: importedTemplate?.location || '',
					location_label: getTemplateTypeLabel( importedTemplateId ),
				};
			} );

			setConflicts( formattedConflicts );

			if ( ! state?.overrideConditions || 0 === state.overrideConditions.length ) {
				const defaultOverrides = formattedConflicts.map( ( conflict ) => conflict.imported_template_id );

				onStateChange( settingKey, {
					...state,
					overrideConditions: defaultOverrides,
				} );
			}
		} catch ( error ) {
			setConflicts( [] );
		} finally {
			setLoading( false );
		}
	};

	const getTemplateTypeLabel = ( templateId ) => {
		const template = data?.uploadedData?.manifest?.templates?.[ templateId ];
		if ( ! template ) {
			return 'Unknown Template';
		}

		const templateType = template.doc_type;
		const summaryTitle = elementorAppConfig?.[ 'import-export-customization' ]?.summaryTitles?.templates?.[ templateType ];

		return summaryTitle?.single || templateType;
	};

	const handleToggleEnabled = () => {
		const newState = {
			enabled: ! state?.enabled,
		};

		if ( isImport ) {
			newState.overrideConditions = state?.enabled ? [] : ( state?.overrideConditions || [] );
		}

		onStateChange( settingKey, newState );
	};

	const handleConflictChoice = ( location, choice, importedTemplateId ) => {
		const currentOverrides = state?.overrideConditions || [];
		let newOverrides;

		if ( 'imported' === choice ) {
			if ( ! currentOverrides.includes( importedTemplateId ) ) {
				newOverrides = [ ...currentOverrides, importedTemplateId ];
			} else {
				newOverrides = currentOverrides;
			}
		} else {
			newOverrides = currentOverrides.filter( ( templateId ) => templateId !== importedTemplateId );
		}

		onStateChange( settingKey, {
			...state,
			overrideConditions: newOverrides,
		} );
	};

	const getConflictChoice = ( importedTemplateId ) => {
		const overrides = state?.overrideConditions || [];
		const hasOverride = overrides.includes( importedTemplateId );
		return hasOverride ? 'imported' : 'current';
	};

	const renderConflictTable = () => {
		if ( loading ) {
			return (
				<Typography variant="body2" color="text.secondary">
					{ __( 'Checking for conflicts...', 'elementor-pro' ) }
				</Typography>
			);
		}

		return (
			<Stack spacing={ 2 }>
				<Alert severity="warning">
					<AlertTitle key="title">{ __( 'Conflicted part', 'elementor-pro' ) }</AlertTitle>
					{ __( 'Some parts are in conflict. Choose which one you want to assign.', 'elementor-pro' ) }
				</Alert>

				<TableContainer component={ Box } sx={ {
					maxWidth: '100%',
					border: 1,
					borderRadius: 1,
					borderColor: 'action.focus',
				} }>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell>{ __( 'Conflicted part', 'elementor-pro' ) }</TableCell>
								<TableCell>{ __( 'Current site part', 'elementor-pro' ) }</TableCell>
								<TableCell>{ __( 'Imported template part', 'elementor-pro' ) }</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{ conflicts.map( ( conflict, index ) => (
								<TableRow key={ index }>
									<TableCell>
										<Typography variant="body2" fontWeight="medium">
											{ getTemplateTypeLabel( conflict.imported_template_id ) }
										</Typography>
									</TableCell>
									<TableCell>
										<FormControlLabel
											control={
												<Radio
													checked={ 'current' === getConflictChoice( conflict.imported_template_id, conflict.location ) }
													onChange={ () => handleConflictChoice( conflict.location, 'current', conflict.imported_template_id ) }
													size="small"
												/>
											}
											label={ conflict.template_name }
										/>
									</TableCell>
									<TableCell>
										<FormControlLabel
											control={
												<Radio
													checked={ 'imported' === getConflictChoice( conflict.imported_template_id, conflict.location ) }
													onChange={ () => handleConflictChoice( conflict.location, 'imported', conflict.imported_template_id ) }
													size="small"
												/>
											}
											label={ conflict.imported_template_name }
										/>
									</TableCell>
								</TableRow>
							) ) }
						</TableBody>
					</Table>
				</TableContainer>
			</Stack>
		);
	};

	return (
		<Box sx={ { mb: 3, border: 1, borderRadius: 1, borderColor: 'action.focus', p: 2.5 } }>
			<Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
				<Stack spacing={ 1 }>
					<Typography variant="h6">
						{ __( 'Theme builder', 'elementor-pro' ) }
					</Typography>
					<Link
						href={ elementorAppConfig.base_url + '#/site-editor/templates' }
						target="_blank"
						rel="noopener noreferrer"
						color="info.light"
						underline="hover"
						sx={ {
							display: 'inline-flex',
							alignItems: 'center',
							gap: 0.5,
						} }
					>
						{ __( 'Check your themes builder', 'elementor-pro' ) }
						<ExternalLinkIcon />
					</Link>
				</Stack>
				<UpgradeTooltip disabled={ disabled } tooltip={ tooltip }>
					<Switch
						data-testid={ `${ settingKey }-switch` }
						checked={ state?.enabled || false }
						disabled={ disabled }
						onChange={ handleToggleEnabled }
						color="info"
						size="medium"
						sx={ {
							alignSelf: 'center',
							...( disabled && tooltip && { cursor: 'pointer' } ),
						} }
					/>
				</UpgradeTooltip>
			</Box>

			{ state?.enabled && isImport && 0 < conflicts.length && (
				<Box sx={ { mt: 1 } }>
					{ renderConflictTable() }
				</Box>
			) }
		</Box>
	);
}

ThemeBuilderCustomization.propTypes = {
	state: PropTypes.object.isRequired,
	settingKey: PropTypes.string.isRequired,
	onStateChange: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
	disabled: PropTypes.bool,
	tooltip: PropTypes.bool,
};

import { ExternalLinkIcon } from '@elementor/icons';
import { Stack, Box, Typography, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, FormControlLabel, Link, Alert, AlertTitle } from '@elementor/ui';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { UpgradeTooltip } from './upgrade-tooltip';
import { getManifestItem } from '../utils';

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
				const importedTemplate = getManifestItem( data, 'templates' )?.[ importedTemplateId ];
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
		const template = getManifestItem( data, 'templates' )?.[ templateId ];
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

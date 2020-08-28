import { Context as ConditionsContext, ConditionsProvider } from '../../context/conditions';
import { Button, Dialog } from '@elementor/app-ui';
import ConditionType from './condition-type';
import ConditionName from './condition-name';
import ConditionSub from './condition-sub';
import ConditionSubId from './condition-sub-id';
import ConditionConflicts from './condition-conflicts';

export default function ConditionsRows() {
	const {
		conditions,
		createConditionItemInState: create,
		updateConditionItemState: update,
		removeConditionItemInState: remove,
		saveConditions: save,
		action,
		resetActionState,
	} = React.useContext( ConditionsContext );

	const rows = Object.values( conditions ).map( ( condition ) =>
		<div key={ condition.id }>
			<div className="row">
				<div className={ `row-controls ${ condition.conflictErrors.length && 'row-controls--error' }` }>
					<ConditionType { ...condition } updateConditions={ update }/>
					<div className="row-controls-condition">
						<ConditionName { ...condition } updateConditions={ update }/>
						<ConditionSub { ...condition } updateConditions={ update }/>
						<ConditionSubId { ...condition } updateConditions={ update }/>
					</div>
				</div>
				<Button
					className="row-icon"
					text={ __( 'Delete', 'elementor-pro' ) }
					icon="eicon-close"
					hideText={ true }
					onClick={ () => remove( condition.id ) }
				/>
			</div>
			<ConditionConflicts conflicts={ condition.conflictErrors }/>
		</div>
	);

	const savingIcon = action.current === ConditionsProvider.actions.SAVE && action.loading ? 'eicon-loading eicon-animation-spin' : '';

	return (
		<>
			{
				action.error &&
					<Dialog
						text={ action.error }
						dismissButtonText={ __( 'Go Back', 'elementor-pro' ) }
						dismissButtonOnClick={ resetActionState }
						approveButtonText={ __( 'Learn More', 'elementor-pro' ) }
						approveButtonColor="link"
						approveButtonUrl="https://go.elementor.com/app-theme-builder-conditions-load-issue"
						approveButtonTarget="_target"
					/>
			}
			{ rows }
			<div className="add-button-wrapper">
				<Button className="add-button" text={ __( 'Add Condition', 'elementor-pro' ) } onClick={ create }/>
			</div>

			<div className="save-button-wrapper">
				<Button
					variant="contained"
					color="primary"
					size="sm"
					icon={ savingIcon }
					text={ __( 'Save & Close', 'elementor-pro' ) }
					onClick={ () => save().then( () => history.back() ) }
				/>
			</div>
		</>
	);
}

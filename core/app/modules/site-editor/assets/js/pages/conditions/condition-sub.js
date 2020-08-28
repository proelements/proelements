import Select from '../../form-elements/select.js';

export default function ConditionSub( props ) {
	if ( 'general' === props.name || ! props.subOptions.length ) {
		return '';
	}

	const onChange = ( e ) => props.updateConditions( props.id, { sub: e.target.value, subId: '' } );

	return (
		<div className="elementor-control-input-wrapper condition-sub-wrapper">
			<Select options={ props.subOptions } value={ props.sub } onChange={ onChange } />
		</div>
	);
}

ConditionSub.propTypes = {
	updateConditions: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	sub: PropTypes.string.isRequired,
	subOptions: PropTypes.array.isRequired,
};

ConditionSub.defaultProps = {
	sub: '',
	subOptions: {},
};

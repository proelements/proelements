import Select from '../../form-elements/select.js';

export default function ConditionName( props ) {
	// Hide for template types that has another default, like single & archive.
	if ( 'general' !== props.default ) {
		return '';
	}

	const onChange = ( e ) => props.updateConditions( props.id, { name: e.target.value, sub: '', subId: '' } );

	return (
		<div className="elementor-control-input-wrapper condition-name-wrapper">
			<Select options={ props.options } value={ props.name } onChange={ onChange } />
		</div>
	);
}

ConditionName.propTypes = {
	updateConditions: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	default: PropTypes.string.isRequired,
};

ConditionName.defaultProps = {
	name: '',
};

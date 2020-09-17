import { Select } from '@elementor/app-ui';

export default function ConditionType( props ) {
	const wrapperRef = React.createRef();

	const options = [
		{
			label: __( 'Include', 'elementor-pro' ),
			value: 'include',
		},
		{
			label: __( 'Exclude', 'elementor-pro' ),
			value: 'exclude',
		},
	];

	const onChange = ( e ) => {
		props.updateConditions( props.id, { type: e.target.value } );
	};

	React.useEffect( () => {
		wrapperRef.current.setAttribute( 'data-elementor-condition-type', props.type );
	} );

	return (
		<div className="e-site-editor-conditions__input-wrapper e-site-editor-conditions__input-wrapper--condition-type" ref={ wrapperRef }>
			<Select options={ options } value={ props.type } onChange={ onChange } />
		</div>
	);
}

ConditionType.propTypes = {
	updateConditions: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

ConditionType.defaultProps = {
	type: '',
};

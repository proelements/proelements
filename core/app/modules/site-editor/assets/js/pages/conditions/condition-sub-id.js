import { Select2 } from '@elementor/app-ui';

/**
 * Main component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export default function ConditionSubId( props ) {
	if ( ! props.sub || ! Object.keys( props.subIdAutocomplete ).length ) {
		return '';
	}

	const settings = React.useMemo( () => getSettings( props.subIdAutocomplete ), [ props.subIdAutocomplete ] );

	const onChange = ( e ) => props.updateConditions( props.id, { subId: e.target.value } );

	return (
		<div className="e-site-editor-conditions__input-wrapper">
			<Select2
				onChange={ onChange }
				value={ props.subId }
				settings={ settings }
				options={ props.subIdOptions }
			/>
		</div>
	);
}

/**
 * Get settings for the select2 base on the autocomplete settings,
 * that passes as a prop
 *
 * @param autocomplete
 * @returns object
 */
function getSettings( autocomplete ) {
	return {
		allowClear: false,
		placeholder: __( 'All', 'elementor-pro' ),
		dir: elementorCommon.config.isRTL ? 'rtl' : 'ltr',
		ajax: {
			transport( params, success, failure ) {
				return elementorCommon.ajax.addRequest( 'pro_panel_posts_control_filter_autocomplete', {
					data: {
						q: params.data.q,
						autocomplete,
					},
					success: success,
					error: failure,
				} );
			},
			data( params ) {
				return {
					q: params.term,
					page: params.page,
				};
			},
			cache: true,
		},
		escapeMarkup( markup ) {
			return markup;
		},
		minimumInputLength: 1,
	};
}

ConditionSubId.propTypes = {
	subIdAutocomplete: PropTypes.object,
	id: PropTypes.string.isRequired,
	sub: PropTypes.string,
	subId: PropTypes.string,
	updateConditions: PropTypes.func,
	subIdOptions: PropTypes.array,
};

ConditionSubId.defaultProps = {
	subId: '',
	subIdOptions: [],
};

import './indicator-bullet.scss';

export const Indicator = ( props ) => {
	let className = 'eps-indicator-bullet';

	if ( props.active ) {
		className += ` ${ className }--active`;
	}

	return <i className={ className } />;
};

Indicator.propTypes = {
	active: PropTypes.bool,
};

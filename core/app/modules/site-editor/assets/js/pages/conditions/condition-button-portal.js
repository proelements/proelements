import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';

const ConditionButtonPortal = ( props ) => {
	const [ shouldCreatePortal, setShouldCreatePortal ] = useState( false ),
		portalRoot = document.getElementById( 'portal-root' );

	useEffect( () => {
		setShouldCreatePortal( ! ! portalRoot );
	}, [ portalRoot ] );

	return shouldCreatePortal
		? createPortal( props.children, portalRoot )
		: null;
};

ConditionButtonPortal.propTypes = {
	children: PropTypes.oneOfType( [ PropTypes.node, PropTypes.string ] ),
};

export default ConditionButtonPortal;

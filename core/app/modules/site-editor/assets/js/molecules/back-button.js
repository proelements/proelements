import { Button } from '@elementor/app-ui';

import './back-button.scss';

export default function BackButton( props ) {
	return (
		<div className="back-button-wrapper">
			<Button
				className="eps-back-button"
				text={ __( 'Back', 'elementor-pro' ) }
				icon="eicon-chevron-left"
				onClick={ props.onClick }
			/>
		</div>
	);
}

BackButton.propTypes = {
	onClick: PropTypes.func,
};

BackButton.defaultProps = {
	onClick: () => history.back(),
};

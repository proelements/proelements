import { Button, CardImage, CardOverlay } from '@elementor/app-ui';

export default function SiteTemplateThumbnail( props ) {
	return (
		<CardImage
			alt={ props.title }
			src={ props.thumbnail || props.placeholder }
			className={ ! props.thumbnail ? 'e-site-template__placeholder' : '' }
		>
			<CardOverlay className="e-site-template__overlay-preview">
				<Button
					className="e-site-template__overlay-preview-button"
					text={ __( 'Preview', 'elementor-pro' ) }
					icon="eicon-preview-medium"
					url={ `/site-editor/templates/${ props.type }/${ props.id }` }
				/>
			</CardOverlay>
		</CardImage>
	);
}

SiteTemplateThumbnail.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	type: PropTypes.string,
	thumbnail: PropTypes.string,
	placeholder: PropTypes.string,
};

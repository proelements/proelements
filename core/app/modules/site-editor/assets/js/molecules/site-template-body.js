import { CardBody } from '@elementor/app-ui';
import SiteTemplateThumbnail from './site-template-thumbnail';
import PreviewIFrame from '../atoms/preview-iframe';

export const SiteTemplateBody = ( props ) => {
	return (
		<CardBody>
			{
				props.extended ?
					<PreviewIFrame src={ props.previewUrl } templateType={ props.type }/> :
					<SiteTemplateThumbnail
						id={props.id}
						title={props.title}
						type={props.type}
						thumbnail={props.thumbnail}
						placeholder={props.placeholderUrl}
					/>
			}
		</CardBody>
	);
};

SiteTemplateBody.propTypes = {
	extended: PropTypes.bool,
	id: PropTypes.number,
	title: PropTypes.string,
	thumbnail: PropTypes.string,
	placeholderUrl: PropTypes.string,
	type: PropTypes.string,
	previewUrl: PropTypes.string,
};

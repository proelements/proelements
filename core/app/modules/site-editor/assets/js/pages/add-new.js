import { AddNewButton, Heading } from '@elementor/app-ui';
import { SiteParts } from '@elementor/site-editor';
import './add-new.scss';
import { Context as TemplatesContext } from '../context/templates';
import BackButton from '../molecules/back-button';

export default function AddNew() {
	const { templates } = React.useContext( TemplatesContext ),
		hasTemplates = 1 <= Object.keys( templates ).length;

	/**
	 * An hover element for each site part.
	 */
	const HoverElement = ( props ) => {
		return (
			<a href={ props.urls.create } className="eps-card__image-overlay eps-add-new__overlay">
				<AddNewButton hideText={true}/>
			</a>
		);
	};

	HoverElement.propTypes = {
		urls: PropTypes.object.isRequired,
	};

	return (
		<section className="e-site-editor__add-new">
			<header className="e-site-editor__header">
				{ hasTemplates && <BackButton/> }
				<Heading variant="h1">{__( 'Start customizing every part of your site', 'elementor-pro' )}</Heading>
			</header>
			<SiteParts hoverElement={ HoverElement } />
		</section>
	);
}

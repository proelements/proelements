import { AddNewButton, Heading, Grid, CardOverlay } from '@elementor/app-ui';
import { SiteParts } from '@elementor/site-editor';
import './add-new.scss';
import { Context as TemplatesContext } from '../context/templates';
import BackButton from '../molecules/back-button';
import useFeatureLock from 'elementor-pro-app/hooks/use-feature-lock';

export default function AddNew() {
	const { templates } = React.useContext( TemplatesContext ),
		hasTemplates = 1 <= Object.keys( templates ).length;

	const { isLocked, ConnectButton } = useFeatureLock( 'site-editor' );

	/**
	 * An hover element for each site part.
	 *
	 * @param {any} props
	 */
	const HoverElement = ( props ) => {
		if ( isLocked ) {
			return (
				<CardOverlay className="e-site-editor__promotion-overlay">
					<div className="e-site-editor__promotion-overlay__link">
						<i className="e-site-editor__promotion-overlay__icon eicon-lock" />
					</div>
				</CardOverlay>
			);
		}

		return (
			<a href={ props.urls.create } className="eps-card__image-overlay eps-add-new__overlay">
				<AddNewButton hideText={ true } />
			</a>
		);
	};

	HoverElement.propTypes = {
		urls: PropTypes.object.isRequired,
	};

	return (
		<section className="e-site-editor__add-new">
			<Grid container direction="column" className="e-site-editor__header">
				{ hasTemplates && <Grid item><BackButton /></Grid> }
				<Grid item container justify="space-between" alignItems="start">
					<Heading variant="h1">{ __( 'Start customizing every part of your site', 'elementor-pro' ) }</Heading>
					{ isLocked && <ConnectButton /> }
				</Grid>
			</Grid>
			<SiteParts hoverElement={ HoverElement } />
		</section>
	);
}

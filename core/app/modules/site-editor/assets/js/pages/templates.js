import SiteTemplates from '../organisms/site-templates';
import { AddNewButton, Grid } from '@elementor/app-ui';

export default function Templates() {
	return (
		<section className="e-site-editor__site-templates">
			<Grid container justify="space-between" className="page-header">
				<h1>{ __( 'Your Site\'s Global Parts', 'elementor-pro' ) }</h1>
				<AddNewButton url="/site-editor/add-new"/>
			</Grid>
			<hr className="eps-separator"/>
			<SiteTemplates />
		</section>
	);
}

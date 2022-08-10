import { TemplateTypesContext } from '@elementor/site-editor';
import { AddNewButton, Grid, Heading, NotFound } from '@elementor/app-ui';
import SiteTemplates from '../organisms/site-templates';

import './template-type.scss';

export default function TemplateType( props ) {
	const { templateTypes } = React.useContext( TemplateTypesContext ),
		currentType = templateTypes.find( ( item ) => item.type === props.type );

	if ( ! currentType ) {
		return <NotFound />;
	}

	return (
		<section className={ `e-site-editor__templates e-site-editor__templates--type-${ props.type }` }>
			<Grid className="page-header" container justify="space-between">
				<Heading variant="h1">{ currentType.page_title }</Heading>
				<AddNewButton url={ currentType.urls.create } text={ __( 'Add New', 'elementor-pro' ) } />
			</Grid>
			<hr className="eps-separator" />
			<SiteTemplates type={ currentType.type } id={ props.id } />
		</section>
	);
}

TemplateType.propTypes = {
	type: PropTypes.string,
	page_title: PropTypes.string,
	id: PropTypes.string,
};

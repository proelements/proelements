import ConditionsProvider from '../../context/conditions';
import { Context as TemplatesContext } from '../../context/templates';
import ConditionsRows from './conditions-rows';

import './conditions.scss';
import BackButton from '../../molecules/back-button';

export default function Conditions( props ) {
	const { findTemplateItemInState, updateTemplateItemState } = React.useContext( TemplatesContext ),
		template = findTemplateItemInState( parseInt( props.id ) );

	if ( ! template ) {
		return <div>{ __( 'Not Found', 'elementor-pro' ) }</div>;
	}
	return (
		<section className="e-site-editor__site-templates">
			<div className="e-site-editor__conditions">
				<BackButton />
				<div className="title">
					<div className="title__icon">
						<img
							src={ `${ elementorAppProConfig.baseUrl }/modules/theme-builder/assets/images/conditions-tab.svg` }
							alt=""
						/>
					</div>
					<h1 className="title__text">
						{ __( 'Where Do You Want to Display Your Template?', 'elementor-pro' ) }
					</h1>
					<p className="title__description">
						{ __( 'Set the conditions that determine where your template is used throughout your site.', 'elementor-pro' ) }
						<br/>
						{ __( 'For example, choose \'Entire Site\' to display the template across your site.', 'elementor-pro' ) }
					</p>
				</div>
				<div className="conditions">
					<ConditionsProvider currentTemplate={ template } onConditionsSaved={ updateTemplateItemState }>
						<ConditionsRows/>
					</ConditionsProvider>
				</div>
			</div>
		</section>
	);
}

Conditions.propTypes = {
	id: PropTypes.string,
};

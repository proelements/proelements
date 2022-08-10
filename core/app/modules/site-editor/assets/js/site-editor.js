import { Router, LocationProvider, Redirect } from '@reach/router';
import Templates from './pages/templates';
import TemplateType from './pages/template-type';
import AddNew from './pages/add-new';
import Conditions from './pages/conditions/conditions';
import Import from './pages/import';
import TemplatesProvider, { Context as TemplatesContext } from './context/templates';
import { Layout, AllPartsButton, NotFound } from '@elementor/site-editor';
import { ErrorBoundary, Grid, Button } from '@elementor/app-ui';
import router from '@elementor/router';
import Component from './data/component';

import './site-editor.scss';

function SiteEditor() {
	const headerButtons = [
		{
			id: 'import',
			text: __( 'import', 'elementor-pro' ),
			hideText: true,
			icon: 'eicon-download-circle-o',
			onClick: () => router.appHistory.navigate( 'site-editor/import' ),
		},
	];

	// Remove Core cache.
	elementorCommon.ajax.invalidateCache( {
		unique_id: 'app_site_editor_template_types',
	} );

	const SiteEditorDefault = () => {
		const { templates } = React.useContext( TemplatesContext );

		if ( Object.keys( templates ).length ) {
			return <Redirect from={ '/' } to={ '/site-editor/templates' } noThrow={ true } />;
		}

		return <Redirect from={ '/' } to={ '/site-editor/add-new' } noThrow={ true } />;
	};

	return (
		<ErrorBoundary
			title={ __( 'Theme Builder could not be loaded', 'elementor-pro' ) }
			learnMoreUrl="https://go.elementor.com/app-theme-builder-load-issue"
		>
			<Layout allPartsButton={ <AllPartsButton url="/site-editor" /> } headerButtons={ headerButtons }>
				<Grid container className="e-site-editor__content_container">
					<Grid item className="e-site-editor__content_container_main">
						<TemplatesProvider>
							<LocationProvider history={ router.appHistory }>
								<Router>
									<SiteEditorDefault path="/site-editor" />
									<Templates path="site-editor/templates" />
									<TemplateType path="site-editor/templates/:type/*id" />
									<AddNew path="site-editor/add-new" />
									<Conditions path="site-editor/conditions/:id" />
									<Import path="site-editor/import" />
									<NotFound default />
								</Router>
							</LocationProvider>
						</TemplatesProvider>
					</Grid>
					<Grid item className="e-site-editor__content_container_secondary">
						<Button
							text={ __( 'Switch to table view', 'elementor-pro' ) }
							url={ elementorAppProConfig[ 'site-editor' ]?.urls?.legacy_view }
						/>
					</Grid>
				</Grid>
			</Layout>
		</ErrorBoundary>
	);
}

export default class Module {
	constructor() {
		elementorCommon.debug.addURLToWatch( 'elementor-pro/assets' );

		$e.components.register( new Component() );

		router.addRoute( {
			path: '/site-editor/*',
			component: SiteEditor,
		} );
	}
}

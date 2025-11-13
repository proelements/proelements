import { Context as TemplatesContext } from '../context/templates';
import useScreenshot, { SCREENSHOT_STATUS_SUCCEED, SCREENSHOT_STATUS_FAILED } from 'modules/screenshots/app/assets/js/hooks/use-screenshot';

/**
 * Wrapper function that was made to take screenshots specific for template.
 * it will capture a screenshot and update the templates context with the new screenshot.
 *
 * @param {any} templateType
 */
export default function useTemplatesScreenshot( templateType = null ) {
	const { updateTemplateItemState, templates } = React.useContext( TemplatesContext );

	const templatesForScreenshot = Object.values( templates ).filter(
		( template ) => shouldScreenshotTemplate( template, templateType ),
	);

	// Start to capture screenshots.
	const screenshot = useScreenshot( templatesForScreenshot );

	// Update the thumbnail url when screenshot created.
	React.useEffect( () => {
		screenshot.posts
			.filter( ( post ) => post.status === SCREENSHOT_STATUS_SUCCEED )
			.forEach( ( post ) => updateTemplateItemState( post.id, { thumbnail: post.imageUrl } ) );
	}, [ screenshot.succeed ] );

	// Update the screenshot url that was failed.
	// When the user will hit the route on the second time it will avoid trying to take another screenshot.
	React.useEffect( () => {
		screenshot.posts
			.filter( ( post ) => post.status === SCREENSHOT_STATUS_FAILED )
			.forEach( ( post ) => updateTemplateItemState( post.id, { screenshot_url: null } ) );
	}, [ screenshot.failed ] );

	return screenshot;
}

/**
 * Filter handler.
 * will remove all the drafts and private and also will filter by template type if exists.
 *
 * @param {any} template
 * @param {any} templateType
 * @return {boolean} should screenshot template
 */
function shouldScreenshotTemplate( template, templateType = null ) {
	if ( templateType ) {
		return false;
	}

	return 'publish' === template.status &&
		! template.thumbnail &&
		template.screenshot_url;
}

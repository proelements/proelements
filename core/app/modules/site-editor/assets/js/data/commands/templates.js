export class Templates extends $e.modules.CommandData {
	static signature = 'site-editor/templates';

	static getEndpointFormat() {
		return 'site-editor/templates/{id}';
	}
}

export default Templates;

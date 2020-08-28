export class TemplatesConditionsConflicts extends $e.modules.CommandData {
	static signature = 'site-editor/templates-conditions-conflicts';

	static getEndpointFormat() {
		return `${ TemplatesConditionsConflicts.signature }/{id}`;
	}
}

export default TemplatesConditionsConflicts;

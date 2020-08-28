export class ConditionsConfig extends $e.modules.CommandData {
	static signature = 'site-editor/conditions-config';

	static getEndpointFormat() {
		return 'site-editor/conditions-config/{id}';
	}
}

export default ConditionsConfig;

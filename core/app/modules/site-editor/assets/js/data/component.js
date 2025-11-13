import * as dataCommands from './commands';

export default class Component extends $e.modules.ComponentBase {
	static namespace = 'site-editor';

	getNamespace() {
		return this.constructor.namespace;
	}

	defaultData() {
		return this.importCommands( dataCommands );
	}
}

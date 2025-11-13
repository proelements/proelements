export const isHighTier = () => {
	try {
		return 'expert' === elementorCommon?.config?.library_connect?.plan_type ||
			'agency' === elementorCommon?.config?.library_connect?.plan_type;
	} catch ( error ) {
		return false;
	}
};

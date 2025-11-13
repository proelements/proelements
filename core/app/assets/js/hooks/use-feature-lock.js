import ConnectButtonUI from '../ui/connect-button';
import { htmlDecodeTextContent, replaceUtmPlaceholders } from '../utils';

export default function useFeatureLock( featureName ) {
	const appConfig = elementorAppProConfig[ featureName ] ?? {},
		isLocked = appConfig.lock?.is_locked ?? false;

	const buttonText = htmlDecodeTextContent( appConfig.lock?.button.text );
	const buttonLink = replaceUtmPlaceholders(
		appConfig.lock?.button.url ?? '',
		appConfig.utms ?? {},
	);

	const ConnectButton = () => (
		<ConnectButtonUI text={ buttonText } url={ buttonLink } />
	);

	return {
		isLocked,
		ConnectButton,
	};
}

import { Card } from '@elementor/app-ui';
import { SiteTemplateHeader } from './site-template-header';
import { SiteTemplateBody } from './site-template-body';
import { SiteTemplateFooter } from './site-template-footer';

import './site-template.scss';

export default function SiteTemplate( props ) {
	const baseClassName = 'e-site-template',
		classes = [ baseClassName ],
		ref = React.useRef( null );

	React.useEffect( () => {
		if ( ! props.isSelected ) {
			return;
		}

		ref.current.scrollIntoView( {
			behavior: 'smooth',
			block: 'start',
		} );
	}, [ props.isSelected ] );

	if ( props.extended ) {
		classes.push( `${ baseClassName }--extended` );
	}

	if ( props.aspectRatio ) {
		classes.push( `${ baseClassName }--${ props.aspectRatio }` );
	}

	const CardFooter = props.extended && props.showInstances ? <SiteTemplateFooter { ...props } /> : '';

	return (
		<Card className={ classes.join( ' ' ) } ref={ ref }>
			<SiteTemplateHeader { ... props } />
			<SiteTemplateBody { ... props } />
			{ CardFooter }
		</Card>
	);
}

SiteTemplate.propTypes = {
	aspectRatio: PropTypes.string,
	className: PropTypes.string,
	extended: PropTypes.bool,
	id: PropTypes.number.isRequired,
	isActive: PropTypes.bool.isRequired,
	status: PropTypes.string,
	thumbnail: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isSelected: PropTypes.bool,
	type: PropTypes.string.isRequired,
	showInstances: PropTypes.bool,
};

SiteTemplate.defaultProps = {
	isSelected: false,
};

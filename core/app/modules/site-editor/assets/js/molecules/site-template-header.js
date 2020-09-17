import { Button, CardHeader, Heading, Icon, Text } from '@elementor/app-ui';
import PartActionsButtons from '../part-actions/dialogs-and-buttons';
import { Indicator } from '../atoms/indicator-bullet';

export const SiteTemplateHeader = ( props ) => {
	const status = props.status && 'publish' !== props.status ? ` (${ props.status })` : '',
		title = props.title + status,
		ActionButtons = () => (
			<>
				<Button text={__( 'Edit', 'elementor-pro' )} icon="eicon-edit" className="e-site-template__edit-btn" size="sm" url={ props.editURL } />
				<PartActionsButtons { ... props } />
			</>
		),
		MetaDataIcon = ( innerProps ) => (
			<Text tag="span" className="e-site-template__meta-data">
				<Icon className={ innerProps.icon } />
				{ innerProps.content }
			</Text>
		),
		MetaData = () => (
			<>
				<MetaDataIcon icon="eicon-user-circle-o" content={ props.author } />
				<MetaDataIcon icon="eicon-clock-o" content={ props.modifiedDate } />
			</>
		);

	return (
		<CardHeader>
			<Indicator active={ props.isActive }/>
			<Heading tag="h1" title={ title } variant="text-sm" className="eps-card__headline">{ title }</Heading>
			{ props.extended && <MetaData/> }
			{ props.extended && <ActionButtons/> }
		</CardHeader>
	);
};

SiteTemplateHeader.propTypes = {
	isActive: PropTypes.bool,
	author: PropTypes.string,
	editURL: PropTypes.string,
	extended: PropTypes.bool,
	modifiedDate: PropTypes.string,
	status: PropTypes.string,
	title: PropTypes.string,
};

import React from 'react';

import MaterialIconButton  from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Mail from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Dashboard from '@material-ui/icons/Dashboard';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import Favorite from '@material-ui/icons/Favorite';
import Email from '@material-ui/icons/Email';
import AddBox from '@material-ui/icons/AddBox';

import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const iconSelected = id => {
	switch (id) {
		case 'email':
			return (<Email/>);
			break;
		case 'addbox':
			return (<AddBox/>);
			break;
		case 'favorite':
			return (<Favorite/>);
			break;
		case 'personadd':
			return (<PersonAdd/>);
			break;
		case 'settings':
			return (<Settings/>);
			break;
		case 'dashboard':
			return (<Dashboard/>);
			break;
		case 'exit':
			return (<ExitToApp/>);
			break;
		case 'chevronleft':
			return (<ChevronLeft/>);
			break;
		case 'notifications':
			return (<Notifications/>);
			break;
		case 'mail':
			return (<Mail/>);
			break;
		case 'menu':
			return (<Menu/>);
			break;
		case 'account':
			return (<AccountCircle/>);
			break;
		default:
			return (<Menu/>);
	}
};

const ListButton = props => {
	const { icon, clickAction, quantBadge, text, id } = props;

	return (
		<div onClick={() => clickAction(id)}>
			<ListItem button>
				<ListItemIcon >
					{iconSelected(id)}
				</ListItemIcon>
				<ListItemText primary={text} />
			</ListItem>
		</div>
	);
};

export { ListButton };

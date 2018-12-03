import React from 'react';

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

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const iconSelected = id => {
	switch (id) {
		case 'email':
			return (<Email/>);
		case 'addbox':
			return (<AddBox/>);
		case 'favorite':
			return (<Favorite/>);
		case 'personadd':
			return (<PersonAdd/>);
		case 'settings':
			return (<Settings/>);
		case 'dashboard':
			return (<Dashboard/>);
		case 'exit':
			return (<ExitToApp/>);
		case 'chevronleft':
			return (<ChevronLeft/>);
		case 'notifications':
			return (<Notifications/>);
		case 'mail':
			return (<Mail/>);
		case 'menu':
			return (<Menu/>);
		case 'account':
			return (<AccountCircle/>);
		default:
			return (<Menu/>);
	}
};

const ListButton = props => {
	const { clickAction, text, id } = props;

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

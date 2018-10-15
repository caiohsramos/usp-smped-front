import React from 'react';

import MaterialIconButton  from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Mail from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Badge from '@material-ui/core/Badge';


const iconSelected = icon => {
	switch (icon) {
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

const IconButton = props => {
	const { icon, clickAction, quantBadge, aria, popup } = props;

	return (
        <div>
        <MaterialIconButton aria-haspopup="true" aria-owns={aria} onClick={clickAction} className='buttons'>
        { quantBadge ?
            <Badge badgeContent={quantBadge} color="secondary">
                {iconSelected(icon)}
            </Badge>
         :  iconSelected(icon) }
        </MaterialIconButton>
        </div>
	);
};

export { IconButton };

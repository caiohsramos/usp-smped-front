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

const IconButton = props => {
	const { icon, clickAction, quantBadge, aria } = props;

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

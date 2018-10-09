import React from 'react';

import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { IconButton } from '../../atoms';
import { Menu } from '..';
import { Logo } from '../../molecules';

const headerButtons = props => {
	const { handleMenu, menuState } = props;
	return (
        <div className='header-buttons'>
            <IconButton
                icon='notifications'
                quantBadge={8}
                clickAction={()=> console.log('not yet implemented')}/>
            <IconButton
                icon='mail'
                quantBadge={5}
                clickAction={()=> console.log('not yet implemented')}/>
            <IconButton
                icon='account'
                aria={'simple-menu'}
                popup
                clickAction={handleMenu}/>
            <Menu state={menuState} close={handleMenu}/>
        </div>
	);
};

const AppBar = props => {
	const { handleDrawer, headerDrawerState, redirectTo } = props;

	let appShiftClass = headerDrawerState ? 'appBarShift' : 'appBar';
	return (
        <div>
            <MaterialAppBar className={appShiftClass + ' bar'}>
                <Toolbar>
                    <IconButton icon='menu' clickAction={handleDrawer}/>
                    <div className="header-actions flex -sb">
                        <Logo
                            classes='header-logo'
                            id='logo'
                            clickAction={redirectTo}/>
                        {headerButtons(props)}
                    </div>
                </Toolbar>
            </MaterialAppBar>
        </div>
	);
};

export { AppBar };

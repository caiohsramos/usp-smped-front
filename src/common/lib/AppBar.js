import React from 'react';

import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { IconButton, Logo } from '..';
import { Menu } from '../../common';

const headerButtons = props => {
    const { handleMenu, menuState } = props;
    return (
        <div className='header-buttons'>
            <IconButton
                icon='account'
                aria={'simple-menu'}
                popup
                clickAction={handleMenu} />
            {menuState && <Menu state={menuState} close={handleMenu} />}
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
                    <IconButton icon='menu' clickAction={handleDrawer} />
                    <div className="header-actions flex -sb">
                        <Logo
                            small
                            id='logo'
                            clickAction={redirectTo} />
                        {headerButtons(props)}
                    </div>
                </Toolbar>
            </MaterialAppBar>
        </div>
    );
};

export { AppBar };

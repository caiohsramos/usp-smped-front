import React from 'react';
import { AppBar, Drawer } from '../../common';

const Header = props => {
	const { handleMenuClick, menuStatus, handleDrawerClick, headerStatus, handleRedirect } = props;
	return (
            <div>
                <AppBar
                    redirectTo={handleRedirect}
                    handleDrawer={handleDrawerClick}
                    headerDrawerState={headerStatus}
                    handleMenu={handleMenuClick}
                    menuState={menuStatus}
                />
                <Drawer
                    redirectTo={handleRedirect}
                    handleDrawer={handleDrawerClick}
                    headerDrawerState={headerStatus}/>
            </div>
	);
};

export { Header };

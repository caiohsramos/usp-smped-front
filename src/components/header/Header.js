import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Logo } from '../../molecules';
import { AccountCircle }  from '@material-ui/icons';

const Header = props => {
	const { data, handleMenuOpen, handleMenuClose, menuStatus } = props;
	return (
        <div className='header'>
            <AppBar position="static">
                <div className='head flex -sb'>
                    <div className='logo'>
                        <Logo/>
                    </div>
          <IconButton   color="white" onClick={(e) => handleMenuOpen(e)}>
            <AccountCircle className="profile-logo"/>
          </IconButton>
                    <Menu
              id="simple-menu"
              anchorEl={menuStatus}
              open={Boolean(menuStatus)}
              onClose={(e) => handleMenuClose(e)}
                    >
              <MenuItem
                         id="profile"
                         onClick={(e) => handleMenuClose(e)}>
                         Perfil
                        </MenuItem>
              <MenuItem
                            id="settings"
                            onClick={(e) => handleMenuClose(e)}>Configurações
                        </MenuItem>
              <MenuItem
                            id='exit'
                            onClick={(e) => handleMenuClose(e)}>
                            Sair
                        </MenuItem>
            </Menu>
                </div>
            </AppBar>
        </div>
	);
};

export { Header };

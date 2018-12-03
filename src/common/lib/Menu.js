import React from 'react';

import MaterialMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Menu = props => {
        const { state, close } = props;
	return (
        <div>
            <MaterialMenu
                id="simple-menu"
                anchorEl={state}
                open={Boolean(state)}
                onClose={(e) => close(e, true)}
                >
                    <MenuItem onClick={() => console.log("blah") }>Perfil</MenuItem>
                    <MenuItem onClick={() => console.log("blah") }>Configurações</MenuItem>
                    <MenuItem onClick={() => console.log("blah") }>Sair</MenuItem>
            </MaterialMenu>
        </div>
	);
};

export { Menu };

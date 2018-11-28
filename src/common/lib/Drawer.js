import React from 'react';

import MaterialDrawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { IconButton, ListButton } from '..';



const leftButtonList = props => {
	const { redirectTo } = props;
	return (
        <div>
            <List>
                <ListButton
                    id="addbox"
                    text="Novo formulário"
                    clickAction={redirectTo}/>
            </List>
            <List>
                <ListButton
                    id="dashboard"
                    text="Dashboard"
                    clickAction={redirectTo} />
            </List>
            <List>
                <ListButton
                    id="personadd"
                    text="Convidar usuário"
                    clickAction={redirectTo} />
            </List>
            <Divider/>
            <List>
                <ListButton
                    id="exit"
                    text="Sair"
                    clickAction={redirectTo} />
            </List>
        </div>
	);
};

const Drawer = props => {
	const { handleDrawer, headerDrawerState } = props;

	let drawerShiftClass = headerDrawerState ? 'drawerPaper' : 'drawerPaperClose';
	return (
        <div>
            <MaterialDrawer
                variant="permanent"
                className={drawerShiftClass}>
                <div className='button-left-drawer'>
                    <IconButton
                        icon='chevronleft'
                        clickAction={handleDrawer}/>
                </div>
                {leftButtonList(props)}
            </MaterialDrawer>
        </div>
	);
};

export { Drawer };

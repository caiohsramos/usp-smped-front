import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const CenteredTabs = props => {
    
    const handleChange = (event, value) => {
        props.handleChangeTab (value)
    }

    return (
        <Tabs
            value={props.tabState}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Secretarias" />
            <Tab label="Eixos" />
        </Tabs>
    );
}

export default CenteredTabs;


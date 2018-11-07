import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import { formList } from '../../common/mocks/FormListMock';
import CenteredTabs from './components/Tabs'
import { DashboardController } from './DashboardController';
import { Button } from '../../common';
import { Table } from './components/Table';

class Dashboard extends Container {

    constructor(props) {
        super(props);

        this.state = {
            formsMock: formList,
            tabState: 0
        };

        const toController = {
            callback: this.callback,
            getState: this.getState,
            getProps: this.getProps,
            router: props.router
        };
        this.controller = new DashboardController(toController);
    }

    getAxes (formList) {
        let allAxis = formList.map ((form) => form.axis);
        return allAxis.filter ((axisName, idx) => allAxis.indexOf (axisName) == idx && axisName != "");
    }

    render() {
        const { handleClick } = this.controller;
        const { formsMock, tabState } = this.state;
        const axisList = this.getAxes (formsMock);

        return (
            <div className='new-form'>
                <Table
                        data={formsMock}
                        handleClick={handleTest}
                        expandedState={expandedStatus}
                        handleExpandClick={handleExpandAction}/>
                    <Button
                        id='button'
                        type='button'
                        label='Novo formulário'
                        clickAction={handleClick}
                    />
            </div>
		);
	}
}

const mstp = state => {
	return {};
};


export default connect(mstp, {})(Dashboard);

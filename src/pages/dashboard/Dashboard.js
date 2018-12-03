import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import CenteredTabs from './components/Tabs';
import { DashboardController } from './DashboardController';
import { Button } from '../../common';
import { Table } from './components/Table';
import { clearMsg } from '../../actions/MessageActions';
import Snackbar from '@material-ui/core/Snackbar';
import { bindActionCreators } from 'redux';

class Dashboard extends Container {
    constructor(props) {
        super(props);
        this.state = {
            formsList: [],
            tabState: 0
        };
        const toController = {
            callback: this.callback,
            getState: this.getState,
            getProps: this.getProps,
            router: props.router
        };
        this.controller = new DashboardController(toController);
        this.controller.fetchForms();
    }

    getAxes(formList) {
        let allAxis = formList.map((form) => form.activity);
        return allAxis.filter((axisName, idx) => allAxis.indexOf(axisName) === idx && axisName !== "");
    }

    render() {
        const { handleClick, handleFormView } = this.controller;
        const { formsList, tabState } = this.state;
        const axisList = this.getAxes(formsList);
        return (
            <div className='new-form'>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={this.props.message.success}
                    onClose={this.props.clearMsg}
                    className={this.props.message.success != '' ? this.props.message.success ? 'snack-success' : 'snack-fail' : 'snack-success'}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.message.msg}</span>}
                />
                <h1>Relatórios de atividades</h1>
                <CenteredTabs
                    tabState={tabState}
                    handleChangeTab={(tabState) => this.callback({ ...this.state, ...{ tabState } })}
                />
                <Table
                    data={formsList}
                    axisList={axisList}
                    filterType={tabState}
                    handleFormView={handleFormView}
                />
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
    return {
        message: state.message
    };
};

const mdtp = dispatch =>
    bindActionCreators({ clearMsg }, dispatch);

export default connect(mstp, mdtp)(Dashboard);
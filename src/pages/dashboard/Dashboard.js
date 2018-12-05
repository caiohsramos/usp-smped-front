import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import CenteredTabs from './components/Tabs';
import { DashboardController } from './DashboardController';
import { Table } from './components/Table';
import { setMsg, clearMsg } from '../../actions/MessageActions';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
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
        const { handleClick, handleFormView, handleFormDelete } = this.controller;
        const { formsList, tabState } = this.state;
        const axisList = this.getAxes(formsList);
        return (
            <div className='new-form'>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={Boolean(this.props.message.success)}
                    onClose={this.props.clearMsg}
                    className={this.props.message.success !== '' ? this.props.message.success ? 'snack-success' : 'snack-fail' : 'snack-success'}
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
                    handleFormDelete={handleFormDelete}
                />
                <Button
                    onClick={handleClick}
                    color='primary'
                    variant='contained'
                    size='large'
                >
                    Novo formulário
                </Button>
            </div>
        );
    }
}

const mstp = state => {
    return {
        message: state.message,
        token: state.session.accessToken
    };
};

const mdtp = dispatch =>
    bindActionCreators({ setMsg, clearMsg }, dispatch);

export default connect(mstp, mdtp)(Dashboard);
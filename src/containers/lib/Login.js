import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { LoginController } from '../../controllers';
import { LoginForm, LoginLogo, LoginFooter } from '../../components';
import { setToken, clearToken } from '../../actions/TokenActions';
import { bindActionCreators } from 'redux'

class Login extends Container {
    constructor(props) {
        super(props);

        this.state = {
            EMAIL: '',
            PASSWORD: '',
            LOGINERROR: '',
        };

        const toController = {
            callback: this.callback,
            getState: this.getState,
            getProps: this.getProps,
            router: props.router,
            setToken: props.setToken,
            clearToken: props.clearToken
        };

        this.controller = new LoginController(toController);
    }

    render() {
        const { handleChangeAction, handleSubmitAction } = this.controller;
        const { EMAIL, PASSWORD, LOGINERROR } = this.state;
        return (
        <div className='login'>
                <LoginLogo />
                <LoginForm
                    email={EMAIL}
                    password={PASSWORD}
                    loginError={LOGINERROR}
                    changeAction={handleChangeAction}
                    submitAction={handleSubmitAction}
                />
                <LoginFooter/>
            </div>
        );
    }
}

const mstp = state => {
    return {};
};

const mdtp = dispatch => 
    bindActionCreators({setToken, clearToken}, dispatch);

export default connect(mstp, mdtp)(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import { LoginController } from './LoginController';
import { LoginForm } from './components/LoginForm';
import { setToken } from '../../actions/TokenActions';
import { bindActionCreators } from 'redux';
import { Logo } from '../../common';

const LoginLogo = props => {
	const { } = props;

	return (
        <div className='login-logo'>
            <Logo/>
            <div></div>
        </div>
	);
};

const LoginFooter = props => {
	const { } = props;

	return (
        <div className='login-foot'>
            LabXP IME-USP © 2018
        </div>
	);
};

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
    bindActionCreators({setToken}, dispatch);

export default connect(mstp, mdtp)(Login);



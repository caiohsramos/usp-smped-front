import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { LoginController } from '../../controllers';
import { LoginForm, LoginLogo, LoginFooter } from '../../components';

class Login extends Container {
	constructor(props) {
		super(props);

		this.state = {
			EMAIL: '',
			PASSWORD: ''
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router
		};

		this.controller = new LoginController(toController);
	}

	render() {
		const { handleChangeAction, handleSubmitAction } = this.controller;
		const { EMAIL, PASSWORD, loginError_value } = this.state;
		return (
    	<div className='login'>
				<LoginLogo />
				<LoginForm
					email={EMAIL}
					password={PASSWORD}
					loginError={loginError_value}
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

export default connect(mstp, {})(Login);

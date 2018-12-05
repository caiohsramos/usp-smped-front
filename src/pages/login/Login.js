import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import { LoginController } from './LoginController';
import { LoginForm } from './components/LoginForm';
import { setToken } from '../../actions/TokenActions';
import { bindActionCreators } from 'redux';
import { Logo } from '../../common';
import styled from 'styled-components'

const LoginDiv = styled.div`
    height:100vh;
    text-align:center!important;
    -webkit-box-align:center;
    justify-content:center;
    background-color:#f5f5f5;
    padding-top:40px;
`

const LoginLogo = styled(Logo)`
	display:block;
`

const LoginFooter = styled(LoginDiv)`
	display:block;
`

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
			<LoginDiv>
				<LoginLogo />
				<LoginForm
					email={EMAIL}
					password={PASSWORD}
					loginError={LOGINERROR}
					changeAction={handleChangeAction}
					submitAction={handleSubmitAction}
				/>
				<LoginFooter>
					LabXP IME-USP © 2018
				</LoginFooter>
			</LoginDiv>
		);
	}
}

const mstp = state => {
	return {};
};

const mdtp = dispatch =>
	bindActionCreators({ setToken }, dispatch);

export default connect(mstp, mdtp)(Login);



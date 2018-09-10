import React from 'react';

import { Button, TextInput } from '../../atoms';

const LoginForm = props => {
	const { email, password, loginError, changeAction, submitAction	} = props;

	return (
		<form className={`login-form${loginError ? ' -error' : ''}`}>
			{ loginError ? <div className='error-msg'>{loginError}</div> : null }
			<TextInput
				id='EMAIL'
				label='E-MAIL'
				value={email}
				changeAction={changeAction}
			/>
			<TextInput
				type='password'
				id='PASSWORD'
				label='SENHA'
				value={password}
				changeAction={changeAction}
			/>
			<Button
				id='submit'
				type='submit'
				label='ENTRAR'
				clickAction={submitAction}
			/>
			<Button
				id='forgot-password'
				label='Esqueci minha senha'
				clickAction={submitAction}
			/>
		</form>
	);
};

LoginForm.propTypes = {};

export { LoginForm };

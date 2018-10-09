import React from 'react';

import { Button, TextInput } from '../../atoms';

const LoginForm = props => {
	const { email, password, loginError, changeAction, submitAction } = props;

	return (
        <form className={`login-form${loginError ? ' -error' : ''}`}>
            { loginError ? <div className='error-msg'>{loginError}</div> : null }
            <TextInput
                id='EMAIL'
                label='E-MAIL'
                value={email}
                changeAction={changeAction}
                placeholder='Endereço de email'
            />
            <TextInput
                type='password'
                id='PASSWORD'
                label='SENHA'
                value={password}
                changeAction={changeAction}
                placeholder='Senha'
            />
            <Button
                id='submit'
                type='submit'
                label='Entrar'
                clickAction={submitAction}
            />
        </form>
	);
};

LoginForm.propTypes = {};

export { LoginForm };

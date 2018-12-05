import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'

const Form = styled.form`
    width:100%;
    max-width:330px;
    padding:15px;
    margin:0 auto;
`
const EmailField = styled(TextField)`
    && {
        margin-bottom:-1px;
        border-bottom-right-radius:0;
        border-bottom-left-radius:0
    }
`
const PasswordField = styled(TextField)`
    && {
        margin-bottom:10px;
        border-top-right-radius:0;
        border-top-left-radius:0
    }
`

const LoginForm = props => {
    const { email, password, loginError, changeAction, submitAction } = props;

    return (
        <Form>
            {loginError ? <div className='error-msg'>{loginError}</div> : null}
            <EmailField
                id="EMAIL"
                label="Usuário"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={changeAction}
            />
            <PasswordField
                id="PASSWORD"
                label="Senha"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={changeAction}
            />
            <Button
                onClick={submitAction}
                color="primary"
                variant="contained"
                type="submit"
            >
                Entrar
            </Button>
        </Form>
    );
};

LoginForm.propTypes = {};

export { LoginForm };

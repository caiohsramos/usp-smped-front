import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import { NewuserController } from './NewuserController';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core';

class NewUser extends Container {
    constructor(props) {
        super(props);
        this.state = {
            IDUSER: props.params.iduser,
            PASSWORD1: '',
            PASSWORD2: ''
        };
        const toController = {
            callback: this.callback,
            getState: this.getState,
            getProps: this.getProps,
            router: props.router,
            setToken: props.setToken,
        };

        this.controller = new NewuserController(toController);
    }

    render() {
        const { handleChange, handleSubmit } = this.controller;
        const { IDUSER, PASSWORD1, PASSWORD2 } = this.state;
        return (
            <Grid
                container
                direction='column'
                alignItems='center'
            >
                <TextField
                    id='IDUSER'
                    value={IDUSER}
                    label='ID Usuário'
                    onChange={handleChange}
                    disabled
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id='PASSWORD1'
                    value={PASSWORD1}
                    label='Senha'
                    onChange={handleChange}
                    type="password"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id='PASSWORD2'
                    value={PASSWORD2}
                    label='Repetir Senha'
                    onChange={handleChange}
                    type="password"
                    margin="normal"
                    variant="outlined"
                />

                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Cadastrar Senha
    		    </Button>
            </Grid>
        );
    }
}

const mstp = state => {
    return {};
};


export default connect(mstp, {})(NewUser); 
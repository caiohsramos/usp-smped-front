import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import { InviteController } from './InviteController';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'

const SelectUser = styled(TextField)`
    && {width:14em}
`

class Invite extends Container {
    constructor(props) {
        super(props);
        this.state = {
            NAME: '',
            EMAIL: '',
            USERTYPE: 0,
            MENSAGEM: 'Voce foi convidado(a) para SMPED'
        };

        const toController = {
            callback: this.callback,
            getState: this.getState,
            getProps: this.getProps,
        };

        this.controller = new InviteController(toController);
    }

    render() {
        const { handleChange, handleSubmit } = this.controller;
        const { NAME, EMAIL, USERTYPE, MENSAGEM } = this.state;
        return (
            <Grid
                container
                direction='column'
                alignItems='center'
            >
                <TextField
                    id='NAME'
                    value={NAME}
                    label='Usuário'
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id='EMAIL'
                    value={EMAIL}
                    label='Email'
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <SelectUser
                    select
                    label="Tipo de usuário"
                    value={USERTYPE}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                >
                    <MenuItem value={0}>Selecione</MenuItem>
                    <MenuItem value={1}>Administrador</MenuItem>
                    <MenuItem value={2}>Digitador</MenuItem>
                    <MenuItem value={3}>Convidado</MenuItem>
                </SelectUser>

                <TextField
                    id='MENSAGEM'
                    value={MENSAGEM}
                    label='Mensagem de convite'
                    onChange={handleChange}
                    multiline
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Convidar
      			</Button>
            </Grid>

        );
    }
}

const mstp = state => {
    return {
        token: state.session.accessToken,
    };
};


export default connect(mstp, {})(Invite); 
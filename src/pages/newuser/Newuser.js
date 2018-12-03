import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import { NewuserController } from './NewuserController';
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button';
import { TextInput } from '../../common';

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
            <div className='TrocaSenha'>
                <InputLabel htmlFor="name-simple">Id Usuario </InputLabel>
                <TextInput
                    id='IDUSER'
                    value={IDUSER}
                    changeAction={handleChange}
                    read='readonly'

                />
                <InputLabel htmlFor="name-simple">PASSWORD </InputLabel>
                <TextInput
                    id='PASSWORD1'
                    value={PASSWORD1}
                    changeAction={handleChange}
                    type="password"
                />
                <InputLabel htmlFor="name-simple">PASSWORD</InputLabel>
                <TextInput
                    id='PASSWORD2'
                    value={PASSWORD2}
                    changeAction={handleChange}
                    type="password"
                />
                <div>
                    <Button variant="contained" color="primary" className='button-submit' onClick={handleSubmit}>
                        Cadastrar Senha
      			 </Button>
                </div>
            </div>
        );
    }
}

const mstp = state => {
    return {};
};


export default connect(mstp, {})(NewUser); 
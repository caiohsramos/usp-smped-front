import React from 'react';
import { Container } from '../Container';
import { FormController } from './FormController';
import Paper from '@material-ui/core/Paper';
import FormHeader from './components/FormHeader';
import FormQuestions from './components/FormQuestions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const BackButton = styled(Button)`
    && {margin-top: 20px;}
`;

export default class Form extends Container {
    constructor(props) {
        super(props);
        const toController = {
            callback: this.callback,
            getState: this.getState,
            getProps: this.getProps,
            router: props.router,
        };
        this.controller = new FormController(toController);
        this.state = {
            form: '',
        }
        this.controller.loadForm(props.params.id)
    }

    render() {
        const { goBack } = this.controller;
        return (
            !this.state.form ||
            <div>
                <Paper>
                    <FormHeader form={this.state.form} />
                    <FormQuestions fields={this.state.form.fields} edit={false} />
                </Paper>
                <BackButton id='voltar-bt' size="large" variant="contained" color="primary" onFocus={null} onClick={goBack}>
                    Voltar
                </BackButton>       
            </div>
        )
    }
}
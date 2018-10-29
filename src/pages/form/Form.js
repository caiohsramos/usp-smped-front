import React from 'react';
import { Container } from '../Container';
import { FormController } from './FormController'

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
        return (
            this.state.form ? <h1>{this.state.form.name}</h1> : <h1>Carregando...</h1>
        )
    }
}
import React from 'react';
import { Container } from '../Container';
import { FormController } from './FormController'
import Paper from '@material-ui/core/Paper'
import FormHeader from './components/FormHeader'
import FormQuestions from './components/FormQuestions'

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
            !this.state.form ||
            <Paper className="form-container">
                <FormHeader form={this.state.form} />
                <FormQuestions fields={this.state.form.fields} edit={false} />
            </Paper>
        )
    }
}
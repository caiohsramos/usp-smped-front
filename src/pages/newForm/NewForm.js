import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '../Container';
import { NewFormController } from './NewFormController';
import { PaperContainer } from '../../common';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { FormItem } from './components/FormItem';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Snackbar from '@material-ui/core/Snackbar';
import { setMsg } from '../../actions/MessageActions';
import styled from 'styled-components'

const SelectSecretary = styled(TextField)`
    && {width:10em}
`

class NewForm extends Container {

    constructor(props) {
        super(props);

        this.state = {
            version: '1',
            owner: '',
            name: '',
            office: 'smped',
            activity: '',
            fields: [],
            errors: {},
            snack: { open: false, msg: '', success: false }
        };

        const offices = [
            {
                value: 'smped',
                label: 'SMPED'
            },
            {
                value: 'smdhc',
                label: 'SMDHC'
            }
        ];

        const toController = {
            callback: this.callback,
            getState: this.getState,
            getProps: this.getProps,
            router: props.router,
            setMsg: props.setMsg
        };

        this.controller = new NewFormController(toController);
        this.offices = offices;
    }

    componentDidUpdate() {
    }

    render() {
        const { snackHandleClose } = this.controller;
        return (
            <>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={(this.state.snack.open)}
                    onClose={snackHandleClose}
                    className={this.state.snack.success ? 'snack-success' : 'snack-fail'}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.snack.msg}</span>}
                />
                <PaperContainer>
                    <Grid container spacing={16} alignItems="center" justify='space-evenly'>
                        <Grid item container justify='center'>
                            <Grid><h1>Novo formulário</h1></Grid>
                        </Grid>
                        <Grid item zeroMinWidth>
                            <TextField
                                id="form-name"
                                label="Nome do formulário"
                                className="field-name"
                                value={this.state.name}
                                onChange={this.controller.handleChange('name')}
                                margin="normal"
                                error={this.state.errors["form-name"]}
                            />
                        </Grid>
                        <Grid item>
                            <SelectSecretary
                                id="office"
                                select
                                label="Secretaria"
                                value={this.state.office}
                                onChange={this.controller.handleChange('office')}
                                margin="normal">
                                {this.offices.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </SelectSecretary>
                        </Grid>
                        <Grid item zeroMinWidth>
                            <TextField
                                id="form-activity"
                                label="Atividade"
                                className="field-name"
                                value={this.state.activity}
                                onChange={this.controller.handleChange('activity')}
                                margin="normal"
                                error={this.state.errors["form-activity"]}
                            />
                        </Grid>
                        <Grid item container direction='column' >
                            <div aria-live="polite">
                                {
                                    this.state.fields.map(formItem => (
                                        <Grid item key={formItem.order} >
                                            <FormItem
                                                key={formItem.order}
                                                formItem={formItem}
                                                handleChangeFormItem={this.controller.handleChangeFormItem}
                                                errors={this.state.errors}
                                            />
                                        </Grid>
                                    ))
                                }
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify='space-evenly' alignItems='center'>
                        <Button
                            id='novo-btn'
                            variant='contained'
                            color='primary'
                            onClick={this.controller.addFormItem}>
                            Novo item
                        </Button>
                        <Button
                            id='remover-btn'
                            color='secondary'
                            variant='contained'
                            disabled={!(this.state.fields.length)}
                            onClick={this.controller.removeFormItem}>
                            Remover Item
                        </Button>
                    </Grid>
                    <Grid container id='fields-grid' justify='center'>
                        <Button
                            id='salvar-btn'
                            color='primary'
                            variant='contained'
                            disabled={!(this.state.fields.length)}
                            onClick={this.controller.submitForm}>
                            Salvar formulário
                            <SaveIcon />
                        </Button>
                    </Grid>
                </PaperContainer>
            </>
        );
    }


}

const mstp = (state) => {
    return {
        token: state.session.accessToken,
    };
};

const mdtp = dispatch =>
    bindActionCreators({ setMsg }, dispatch);

export default connect(mstp, mdtp)(NewForm);

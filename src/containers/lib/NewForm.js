import React from 'react';
import { Container } from './Container';
import { NewFormController } from '../../controllers';
import { FormItem } from '../../components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class NewForm extends Container {
    
    constructor(props) {
        super(props);

        this.state = {
            VERSION: 1,
            OWNER: '',
            NAME: '',
            OFFICE: 'smped',
            ACTIVITY: '',
            FIELDS: [],	
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
            router: props.router
        };

        this.controller = new NewFormController(toController);
        this.offices = offices;
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {

        return (
            <div className="newFormContainer">
                <Paper>
                    <Grid container spacing='16' alignItems="center" justify='space-evenly'>
                        <Grid item container justify='center'>
                            <Grid><h1>Novo formulário</h1></Grid>
                        </Grid>
                        <Grid item zeroMinWidth>
                            <FormControl className="field-name">
                                <InputLabel htmlFor="name-simple">Nome do formulário</InputLabel>
                                <Input 
                                id="form-name" 
                                value={this.state.NAME} 
                                onChange={this.controller.handleChange('NAME')} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="office"
                                select
                                label="Secretaria"
                                className="select-type"
                                value={this.state.OFFICE}
                                onChange={this.controller.handleChange('OFFICE')}
                                margin="normal">
                                {this.offices.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item zeroMinWidth>
                            <FormControl className="field-name">
                                <InputLabel htmlFor="name-simple">Atividade</InputLabel>
                                <Input
                                    id="form-activity"
                                    value={this.state.ACTIVITY}
                                    onChange={this.controller.handleChange('ACTIVITY')} />
                            </FormControl>
                        </Grid>
                        <Grid item container direction='column' >
                            <div aria-live="polite">
                                {
                                    this.state.FIELDS.map(formItem => (
                                        <Grid item >
                                        <FormItem
                                            key={formItem.ORDER}
                                            formItem={formItem}
                                            handleChangeFormItem={this.controller.handleChangeFormItem}
                                            /> 
                                        </Grid>
                                    ))

                                
                            }
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify='space-evenly' alignItems='center'>
                        <Button
                            id='button-item'
                            variant='contained'
                            color='primary'
                            onClick={this.controller.addFormItem}>
                            Novo item
                        </Button>
                        <Button 
                            id='button-item'
                            color='secondary'
                            variant='contained'
                            disabled={ !(this.state.FIELDS.length) }
                            onClick={this.controller.removeFormItem}>
                            Remover Item
                        </Button>
                    </Grid>
                </Paper>
            </div>
        );
    }


}

export default (NewForm);

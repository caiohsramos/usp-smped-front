import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '../Container';
import { NewFormController } from '../../controllers';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { FormItem } from './components/FormItem';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

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
                        <TextField
                            id="form-name"
                            label="Nome do formulário"
                            className="field-name"
                            value={this.state.name}
                            onChange={this.controller.handleChange('name')}
                            margin="normal"
                        />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="office"
                                select
                                label="Secretaria"
                                className="select-type"
                                value={this.state.office}
                                onChange={this.controller.handleChange('office')}
                                margin="normal">
                                {this.offices.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item zeroMinWidth>
                            <TextField
                                id="form-activity"
                                label="Atividade"
                                className="field-name"
                                value={this.state.activity}
                                onChange={this.controller.handleChange('activity')} 
                                margin="normal"
                            />
                        </Grid>
                        <Grid item container direction='column' >
                            <div aria-live="polite">
                                {
                                    this.state.fields.map(formItem => (
                                        <Grid item >
                                        <FormItem
                                            key={formItem.order}
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
                            disabled={ !(this.state.fields.length) }
                            onClick={this.controller.removeFormItem}>
                            Remover Item
                        </Button>
                    </Grid>
                    <Grid container justify='center'> 
                        <Button 
                            id='button-item'
                            color='success'
                            variant='contained'
                            disabled={ !(this.state.fields.length) }
                            onClick={this.controller.submitForm}>
                            Salvar formulário 
                            <SaveIcon />
                        </Button>
                    </Grid>
                </Paper>
            </div>
		);
	}


}

const mstp = (state) => {
	return {
	    token: state.session.accessToken,
	};
};

const mdtp = dispatch => 
    bindActionCreators({}, dispatch);

export default connect(mstp, mdtp)(NewForm);

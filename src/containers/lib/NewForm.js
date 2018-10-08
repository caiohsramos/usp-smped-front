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
			<div className="container newFormContainer">
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<Paper>
							<h1>Novo formulário</h1>
							<FormControl className="field-name">
								<InputLabel htmlFor="name-simple">Nome do formulário</InputLabel>
								<Input 
								id="form-name" 
								value={this.state.NAME} 
								onChange={this.controller.handleChange('NAME')} />
							</FormControl>
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
							<FormControl className="field-name">
								<InputLabel htmlFor="name-simple">Atividade</InputLabel>
								<Input
									id="form-activity"
									value={this.state.ACTIVITY}
									onChange={this.controller.handleChange('ACTIVITY')} />
							</FormControl>
							
							<div aria-live="polite">
								{
									this.state.FIELDS.map(formItem => (
										<FormItem
											key={formItem.ORDER}
											formItem={formItem}
											handleChangeFormItem={this.controller.handleChangeFormItem}
											/> 
										
									))

								
							}
							</div>
							<div className="row">
								<Button
									id='novo-item'
									variant='contained'
									color='primary'
									onClick={this.controller.addFormItem}>
									Novo item
								</Button>
								<Button 
									id='remover-item'
									color='secondary'
									variant='contained'
									onClick={this.controller.removeFormItem}>
									Remover Item
								</Button>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}


}

export default (NewForm);

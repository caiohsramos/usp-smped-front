import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '../Container';
import { InviteController } from './InviteController';
import { bindActionCreators } from 'redux';
import { SelectButton, TextInput } from '../../common';
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button';

class Invite extends Container { 
	constructor(props) {
		super(props);
		this.state = {
			NAME: '',
			EMAIL: '',
			USERTYPE: 0,
			open: false,
			error: ''
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
		};

		this.controller = new InviteController(toController);
	}

	render() {
		const { handleChange, handleOpen, handleClose, handleSubmit } = this.controller;
		const { NAME, EMAIL, USERTYPE, open } = this.state;
		return (
            <div className='invite'>
			 <InputLabel htmlFor="name-simple">Nome</InputLabel>
				<TextInput
				 id='NAME'
				 value={NAME}
				 changeAction={handleChange}
				/>
				<InputLabel htmlFor="name-simple">Email</InputLabel>
				<TextInput
				 id='EMAIL'
				 value={EMAIL}
				 changeAction={handleChange}
				/>
				<InputLabel htmlFor="demo-controlled-open-select">Tipo de usuário</InputLabel>
				<SelectButton 
					handleOpen={handleOpen}
					handleClose={handleClose}
					handleChange={handleChange}
					userType={USERTYPE}
					dropDownState={open}
				/>
				<div>
				 <Button variant="contained" color="primary" className='button-submit' onClick={handleSubmit}>
      			 Convidar
      			 </Button>	
			    </div>
            </div>
			
		);
	}
} 

const mstp = state => {
	return {};
};


export default connect(mstp, {})(Invite); 
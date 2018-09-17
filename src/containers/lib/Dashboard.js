import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { DashboardController } from '../../controllers';
import { Button } from '../../atoms';

class Dashboard extends Container {
	constructor(props) {
		super(props);

		this.state = {
			name: "Teste"
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router
		};
		this.controller = new DashboardController(toController);
	}

	render() {
		const { handleClick } = this.controller;

		return (
			<div className='new-form'>
				<Button
					id='button'
					type='button'
					label='Novo formulário'
					clickAction={handleClick}
				/>
			</div>
		);
	}
}

const mstp = state => {
	return {};
};


export default connect(mstp, {})(Dashboard);

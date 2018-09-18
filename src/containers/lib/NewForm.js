import React from 'react';
import { Container } from './Container';
import { NewFormController } from '../../controllers';

class NewForm extends Container {
	constructor(props) {
		super(props);

		this.state = {

		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router
		};

		this.controller = new NewFormController(toController);
	}

	render() {

		return (
			<div>
			</div>
		);
	}
}

export default (NewForm);

import React from 'react';
import { Container } from './Container';
import { NewFormController } from '../../controllers';
import { FormItem } from '../../components'

class NewForm extends Container {
	constructor(props) {
		super(props);

		this.state = {
			fields: {
				
			}
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
			<section className="container">
				<FormItem name={this.state.name} handleChange={this.controller.handleChange} /> 

			</section>
		);
	}
}

export default (NewForm);

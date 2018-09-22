import React from 'react';
import { Container } from './Container';
import { NewFormController } from '../../controllers';
import { FormItem } from '../../components';

class NewForm extends Container {
	constructor(props) {
		super(props);

		this.state = {
			FIELD: {
				LABEL: '',
				SELECTED_TYPE: '',
				REQUIRED: false,
				ORDER: ''
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
				<FormItem 
					field={this.state.FIELD} 
					handleChangeAction={this.controller.handleChangeAction} 
				/> 

			</section>
		);
	}
}

export default (NewForm);

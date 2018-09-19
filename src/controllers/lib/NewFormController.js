export class NewFormController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		this.handleChange = event => {
			this.callback({ name: event.target.value });
		};
	}

}

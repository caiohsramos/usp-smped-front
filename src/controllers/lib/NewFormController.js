export class NewFormController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		
		this.handleChange = e => {
			this.callback({ name: e.target.value });	
		};
		this.handleChangeAction = name => e => {
			e.preventDefault();			
			const value = name == 'REQUIRED' ? e.target.checked : e.target.value;
			const newField = Object.assign({}, this.getState().FIELD, { [name]: value });
          	this.callback({FIELD: newField});
		};
	}

}

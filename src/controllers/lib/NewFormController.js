export class NewFormController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		
		this.handleChange = propertyName => e => {
			this.callback({ [propertyName]: e.target.value });	
		};

		this.handleChangeAction = name => e => {
			const value = name == 'REQUIRED' ? e.target.checked : e.target.value;
			const newField = Object.assign({}, this.getState().FIELD, { [name]: value });
          	this.callback({FIELD: newField});
		};
		
		this.addFormItem = e => {

			this.callback(
				this.getState().FIELDS.push(
					{
						LABEL: '',
						SELECTED_TYPE: '',
						REQUIRED: false,
						ORDER: 1
					})
			);
			
		};
	}

}

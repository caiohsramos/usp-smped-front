import axios from 'axios';

export class NewFormController {

	constructor({ callback, getState, getProps, router }) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.handleChange = propertyName => e => {
			this.callback({ [propertyName]: e.target.value });
		};

		this.handleChangeFormItem = (propertyName, e) => {

			const fields = this.getState().FIELDS;
			this.callback({
				FIELDS: fields.map(
                    field => {
	const order = propertyName == 'SELECTED_TYPE' ? e.target.name.split('-').pop() : e.target.id.split('-').pop() ;
	if (field.ORDER == order){
		const value = propertyName == 'REQUIRED' ? e.target.checked : e.target.value; 
		return Object.assign({}, field, { [propertyName]: value });
	} 
	else{
		return field;
	}
}
                )
			});
		};

		this.orderManager = () => {
			return this.getState().FIELDS.length + 1;
		};

		this.addFormItem = () => {
			this.callback(
                this.getState().FIELDS.push(
	{
		LABEL: '',
		SELECTED_TYPE: 'text',
		REQUIRED: false,
		ORDER: this.orderManager()
	})
            );
		};

		this.removeFormItem = () => {
			this.callback(
                this.getState().FIELDS.pop()
            );
		};
        
		this.submitForm = () => {
			console.log("Not implemented yet!");
			//getProps().accessToken
			//getState().formulario
            
		};
	}

}

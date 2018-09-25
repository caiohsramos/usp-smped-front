export class NewFormController {

	constructor({ callback, getState, getProps, router }) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.handleChange = propertyName => e => {
			this.callback({ [propertyName]: e.target.value });
		};

		this.handleChangeFormItem = propertyName => e => {

			const fields = this.getState().FIELDS;

			this.callback({
				FIELDS: fields.map(
					field => {
						if (field.ORDER == e.target.parentElement.dataset.key){
							//return Object.assign(field, { description: "New Description" });
							const value = propertyName == 'REQUIRED' ? e.target.checked : e.target.value; 
							return Object.assign({}, field, { [propertyName]: value });
						} else{
							return field;
						}
					}
				)
			});

			// const value = propertyName == 'REQUIRED' ? e.target.checked : e.target.value;
			// const newField = Object.assign({}, this.getState().FIELD, { [propertyName]: value });
			// this.callback({ FIELD: newField });

		};

		this.orderManager = () => {
			return this.getState().FIELDS.length + 1;
		};

		this.addFormItem = e => {
			this.callback(
				this.getState().FIELDS.push(
					{
						LABEL: '',
						SELECTED_TYPE: '',
						REQUIRED: false,
						ORDER: this.orderManager()
					})
			);
			
			// else {
			// 	this.callback(
			// 		this.getState().FIELDS.push(this.getState().FIELD)
			// 	);
			// 	this.callback({
			// 		FIELD: {
			// 			LABEL: '',
			// 			SELECTED_TYPE: '',
			// 			REQUIRED: false,
			// 			ORDER: this.orderManager()
			// 		}
			// 	});
			// }

		};
	}

}

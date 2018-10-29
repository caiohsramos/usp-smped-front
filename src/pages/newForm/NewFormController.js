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

            //fields.map(field => {
            //  if (field.ORDER == e.target.id.split('-').pop()) {
            //      const value = propertyName == 'REQUIRED' ? e.target.checked : e.target.value; 
            //      return Object.assign({}, field, { [propertyName]: value });
            //  }
            //  else
            //})


            this.callback({
                FIELDS: fields.map(
                    field => {
                        console.log(e.target);

                        if (propertyName == 'SELECTED_TYPE' && (field.ORDER == e.target.name.split('-').pop())) {
                            const value = e.target.value;
                            return Object.assign({}, field, { [propertyName]: value });
                        }
                        else if (field.ORDER == e.target.id.split('-').pop()) {
                            const value = propertyName == 'REQUIRED' ? e.target.checked : e.target.value;
                            return Object.assign({}, field, { [propertyName]: value });
                        }
                        else {
                            return field;
                        }
                    }
                )
            });
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
            //  this.callback(
            //      this.getState().FIELDS.push(this.getState().FIELD)
            //  );
            //  this.callback({
            //      FIELD: {
            //          LABEL: '',
            //          SELECTED_TYPE: '',
            //          REQUIRED: false,
            //          ORDER: this.orderManager()
            //      }
            //  });
            // }

        };
    }

}

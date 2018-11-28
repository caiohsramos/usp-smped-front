import { SMPEDRepository } from '../../repositories';

export class NewFormController {

    constructor({ callback, getState, getProps, router }) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;

        this.smpedapi = new SMPEDRepository();

        this.handleChange = propertyName => e => {
            this.callback({ [propertyName]: e.target.value });
        };

        this.handleChangeFormItem = (propertyName, e) => {

            const fields = this.getState().fields;
            this.callback({
                fields: fields.map(
                    field => {
                        const order = propertyName === 'type' ? e.target.name.split('-').pop() : e.target.id.split('-').pop();
                        if (field.order === Number(order)) {
                            const value = propertyName === 'required' ? e.target.checked : e.target.value;
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
            return this.getState().fields.length + 1;
        };

        this.addFormItem = () => {
            this.callback(
                this.getState().fields.push({
                    label: '',
                    type: 'text',
                    required: false,
                    order: this.orderManager()
                })
            );
        };

        this.removeFormItem = () => {
            this.callback(
                this.getState().fields.pop()
            );
        };

        this.validateFields = () => {
            const form = this.getState();
            form.fields.map((x) => {
                if (!x.label) return false;
                return true
            });
            if (!form.name) return false;
            if (!form.activity) return false;
            return true;
        };

        this.submitForm = () => {
            //call verify required
            if (!this.validateFields()) {
                console.log('problemas com o form');
                return;
            }
            const token = this.getProps().token;
            const token_decoded = JSON.parse(atob(token.split('.')[1]));
            const form = this.getState();
            form.owner = token_decoded.username;
            this.smpedapi.post_with_token('forms', form, token)
                .then((resp) => { console.log(resp); })
                .catch((error) => { console.log(error); });
        };
    }

}

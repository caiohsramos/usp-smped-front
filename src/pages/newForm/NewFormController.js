import { SMPEDRepository } from '../../repositories';
import store from '../../routes';
import { Navigator } from '../../helper';


export class NewFormController {

    constructor({ callback, getState, getProps, router, setMsg }) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;
        this.setMsg = setMsg;

        this.store = store();
        this.navigator = new Navigator(this.store.props.history);
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

        this.snackHandleClose = () => {
            let state = this.getState();
            state.snack.open = false;
            this.callback(state);
        };

        this.snackHandleOpen = (msg, success) => {
            let state = this.getState();
            state.snack.open = true;
            state.snack.msg = msg;
            state.snack.success = success;
            this.callback(state);

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
            let status = true;
            form.errors = {};
            form.fields.map((x) => {
                if (!x.label) {
                    let str = 'item-name-' + x.order;
                    form.errors[str] = true;
                    status = false;
                }
                return x
            });
            if (!form.name) {
                let str = 'form-name';
                form.errors[str] = true;
                status = false;
            }
            if (!form.activity) {
                let str = 'form-activity';
                form.errors[str] = true;
                status = false;
            }
            this.callback(form);
            return status;
        };


        this.submitForm = () => {
            //call verify required
            if (!this.validateFields()) {
                this.snackHandleOpen('Verificar os campos em branco!', false);
                return;
            }

            const token = this.getProps().token;
            const token_decoded = JSON.parse(atob(token.split('.')[1]));
            const form = this.getState();
            delete form['errors']
            delete form['snack']
            form.owner = token_decoded.username;
            console.log(form);
            console.log(token);
            this.smpedapi.post_with_token('forms', form, token)
                .then((resp) => {
                    this.setMsg('Formulário salvo com sucesso!', 'snack-success', true)
                    this.snackHandleOpen('Formulário salvo com sucesso!', true);
                    this.navigator.navigateTo('/dashboard');
                })
                .catch((error) => { console.log(error); });

        };


    }

}

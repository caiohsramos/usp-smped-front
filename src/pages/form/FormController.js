import { Navigator } from '../../helper';
import store from '../../routes';
import { SMPEDRepository } from '../../repositories';

export class FormController {

    constructor({ callback, getState, getProps }) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;

        this.store = store();
        this.navigator = new Navigator(this.store.props.history);
        this.smpedapi = new SMPEDRepository();
        this.goBack = this.goBack.bind(this);
        this.loadForm = this.loadForm.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    loadForm(formId) {
        console.log(formId)
        this.smpedapi.get(`/forms/${formId}`)
            .then((resp) => this.renderForm(resp.data)).catch((err) => console.log(err))
    };

    renderForm(form) {
        console.log(form)
        this.callback({ form })
    };

    goBack() {
        this.navigator.navigateTo('/dashboard');
    }
}

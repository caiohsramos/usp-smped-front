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
}

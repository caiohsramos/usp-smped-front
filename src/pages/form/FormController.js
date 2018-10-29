import { Navigator } from '../../helper';
import store from '../../routes';
import axios from 'axios'

export class FormController {

    constructor({ callback, getState, getProps }) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;

        this.store = store();
        this.navigator = new Navigator(this.store.props.history);

    }

    loadForm(formId) {
        console.log(formId)
        axios.get(`http://api-dev-smped.ml:3001/forms/${formId}`)
            .then((resp) => this.renderForm(resp.data)).catch((err) => console.log(err))
    };

    renderForm(form) {
        console.log(form)
        this.callback({ form })
    };
}

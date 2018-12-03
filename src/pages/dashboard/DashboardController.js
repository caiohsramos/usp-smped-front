import { Navigator } from '../../helper';
import { SMPEDRepository } from '../../repositories';

export class DashboardController {

    constructor({ callback, getState, getProps, router }) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;
        this.navigator = new Navigator(router);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchForms = this.fetchForms.bind(this);
        this.repository = new SMPEDRepository();
        this.handleFormView = this.handleFormView.bind(this);
        this.handleFormDelete = this.handleFormDelete.bind(this)
    }

    handleChange(event) {
        this.callback({ auth: event.target.checked });
    }

    handleClick(e) {
        e.preventDefault();
        this.navigator.navigateTo('/newform');
    }

    fetchForms() {
        this.repository.get('/forms')
            .then((response) => {
                this.callback({ ...this.getState(), formsList: response.data._items });
            })
            .catch((e) => console.log(e))
    }

    handleFormView(id) {
        this.navigator.navigateTo(`/form/${id}`);
    }

    handleFormDelete(id) {
        const { token, setMsg } = this.getProps()
        this.repository.delete_with_token(`forms/${id}`, token)
            .then(() => {
                this.navigator.navigateTo(`/dashboard`)
                this.fetchForms()
                setMsg('Formulário excluido com sucesso!', 'snack-success', true)
            })
            .catch((e) => console.log(e))
    }
}

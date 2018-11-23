import { Navigator } from '../../helper';
import { SMPEDRepository } from '../../repositories';

export class DashboardController {

    constructor({callback, getState, getProps, router}) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;
        this.navigator = new Navigator(router);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchForms = this.fetchForms.bind(this);
        this.repository = new SMPEDRepository();
    }

    handleChange(event){
        this.callback({ auth: event.target.checked });
    }

    handleClick (e) {
        e.preventDefault();
        this.navigator.navigateTo('/newform');
    }

    fetchForms () {
        this.repository.get('/forms')
        .then((response) => {
            this.callback ({... this.getState (), formsList: response.data._items});
        })
        .catch((e) => console.log(e))
    }
}

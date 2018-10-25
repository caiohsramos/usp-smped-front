import { Navigator } from '../../helper';
import store from '../../routes';

export class FormController {

    constructor({callback, getState, getProps}) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;

        this.store = store();
        this.navigator = new Navigator(this.store.props.history);

    }

	
}

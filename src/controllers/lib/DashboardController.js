import { Navigator } from '../../helper';
import store from '../../routes';

export class DashboardController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.store = store();
		this.navigator = new Navigator(this.store.props.history);

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick (e) {
		e.preventDefault();
		this.navigator.navigateTo('/newform');
	}

}

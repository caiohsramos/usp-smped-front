import { Navigator } from '../../helper';
import store from '../../routes';

export class LoginController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		this.navigator = new Navigator(router);

		this.store = store();
		this.navigator = new Navigator(this.store.props.history);

		this.handleChangeAction = this.handleChangeAction.bind(this);
		this.handleSubmitAction = this.handleSubmitAction.bind(this);
	}
	handleChangeAction (e) {
		e.preventDefault();
		const to    = {};
		const id    = e.target.id;
		const value = e.target.value;
		to[id] = value;
		this.callback(to);
	}
	handleSubmitAction (e) {
		e.preventDefault();
		this.navigator.navigateTo('/dashboard');
		console.log("Warning! Login not implemented yet ;)");
	}
}

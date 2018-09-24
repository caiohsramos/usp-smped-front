import { Navigator } from "../../helper";

export class MainController {

	constructor({ callback, getState, getProps, setAuth, router }) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.handleMenuCloseAction = this.handleMenuCloseAction.bind(this);
		this.handleMenuOpenAction = this.handleMenuOpenAction.bind(this);
		this.logout = this.logout.bind(this);
		this.navigator = new Navigator(router);
	}
	logout() {
		window.localStorage.setItem('session_token', '');
		window.localStorage.setItem('user_id', '');
		this.navigator.navigateTo('/');
	}
	handleMenuCloseAction(e) {
		const button = e.target.id;

		if (button === 'exit') this.logout();
		this.callback({profile_menu:null});
	}
	handleMenuOpenAction(e) {
		this.callback({profile_menu:e.currentTarget});
	}
}

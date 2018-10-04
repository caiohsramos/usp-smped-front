import { Navigator } from "../../helper";
import { SMPEDRepository } from '../../repositories';

export class MainController {

	constructor({ callback, getState, getProps, setAuth, router }) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.handleMenuCloseAction = this.handleMenuCloseAction.bind(this);
		this.handleMenuOpenAction = this.handleMenuOpenAction.bind(this);
		this.logout = this.logout.bind(this);
		this.handleRefresh = this.handleRefresh.bind(this);
		this.navigator = new Navigator(router);
		this.smpedapi = new SMPEDRepository();
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

	handleRefresh() {
		const refresh = {
			refresh_token: localStorage.getItem('refresh_token')
		};
		this.smpedapi.post('auth/refresh',refresh).
        then((resp) => {
	console.log(resp);
	const token = {
		access: resp.data.access_token,
		refresh: localStorage.getItem('refresh_token')
	};
	this.getProps().setToken(token);
}).catch((e) => {
	console.log('refresh_token not valid');
	this.navigator.navigateTo('/');
});
	}
}

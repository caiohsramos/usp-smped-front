import { Navigator } from '../../helper';
import store from '../../routes';

export class LoginController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

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
		const user = this.getState().EMAIL;
		const password = this.getState().PASSWORD;
		const auth_body = {
			username:  user,
			password: password
		};
		this.smpedapi.post('auth/tokens', auth_body)
		.then((resp) => {
			console.log(resp);
			const token = {
				access: resp.data.access_token,
				refresh: resp.data.refresh_token
			};
			localStorage.setItem('refresh_token',token.refresh);
			this.setToken(token);
			this.navigator.navigateTo('/dashboard');
		})
		.catch ((e) => {
			console.log (e);
			console.log (e.response.data._error);
			const state = {...this.getState (), LOGINERROR: e.response.data._error.message};
			this.callback (state);
		});
	}
}

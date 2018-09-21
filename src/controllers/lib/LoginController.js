import { Navigator } from '../../helper';
import store from '../../routes';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';

const URL = 'http://localhost:3001'

export class LoginController {

	constructor({callback, getState, getProps, router, setToken, clearToken}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		this.setToken = setToken;
		this.clearToken = clearToken;

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
		//pegar o usuario e senha do this.getState
		const user = this.getState().EMAIL
		const password = this.getState().PASSWORD
		
		axios.post(`${URL}/auth/tokens`,{
			username: user,
			password: password
		})
		.then((resp) => {
			console.log(resp);
			const token = {
				access: resp.data.access_token,
				refresh: resp.data.refresh_token
			};
			this.setToken(token);
			this.navigator.navigateTo('/dashboard');
		})
		.catch ((e) => {
			console.log (e.response.data._error);
			const state = {...this.getState (), LOGINERROR: e.response.data._error.message};
			this.callback (state);
		})
		//salvar no reducer
		//redirecionamento (login ou retry)
		//console.log("Warning! Login not implemented yetttttttttt ;)");
	}
}

import { Navigator } from '../../helper';
import store from '../../routes';
import axios from 'axios'

const URL = 'http://api-dev-smped.ml:5000'

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
		//requisicao para o backend
		/*axios.post(`${URL}auth/tokens`, {
			username: user,
			password: password
		}).then(function(response){
			console.log(response)
		})
		*/
		axios.post(`${URL}/auth/tokens`,{
			username: user,
			password: password
		}).then((resp) => {
			console.log(resp)
		})
		//salvar no reducer
		//redirecionamento (login ou retry)
		this.setToken('settoken');
		this.navigator.navigateTo('/dashboard');
		//console.log("Warning! Login not implemented yetttttttttt ;)");
	}
}

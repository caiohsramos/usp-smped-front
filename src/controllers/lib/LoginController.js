import { Navigator } from '../../helper';

export class LoginController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		
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
	handleSubmitAction () {
		console.log("not implemented yet");
	}
}

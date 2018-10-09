import { Navigator } from '../../helper';

export class DashboardController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		this.navigator = new Navigator(router);

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleTest = this.handleTest.bind(this);
		this.handleExpandAction = this.handleExpandAction.bind(this);
	}
	handleChange(event){
		this.callback({ auth: event.target.checked });
	}

	handleClick (e) {
		e.preventDefault();
		this.navigator.navigateTo('/newform');
	}
	handleTest(e, id) {
		e.preventDefault();
	}
	handleExpandAction(e, id){
		let { expandedStatus } = this.getState();
		expandedStatus.id = !expandedStatus.id;
		this.callback({ expandedStatus });
	}
}

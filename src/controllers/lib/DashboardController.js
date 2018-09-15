import { Navigator } from '../../helper';

export class DashboardController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.handleChange = this.handleChange.bind(this);
		this.handleMenu = this.handleMenu.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	handleChange(event){
		this.callback({ auth: event.target.checked });
	}

	handleMenu(event) {
		this.callback({ anchorEl: event.currentTarget });
	};

	handleClose(event) {
		this.callback({ anchorEl: null });
	};


}
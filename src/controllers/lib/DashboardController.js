export class DashboardController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
	}

	handleDrawerOpen() {
		this.callback({ open: true });
	}

	handleDrawerClose() {
		this.callback({ open: false });
	}
}

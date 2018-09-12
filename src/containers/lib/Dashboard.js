import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { DashboardController } from '../../controllers';

class Dashboard extends Container {
	constructor(props) {
		super(props);

		this.state = {

		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router
		};
		this.controller = new DashboardController(toController);
	}

	render() {


	 return (
		 <div>
		 </div>
	 );
	}
}

const mstp = state => {
	return {};
};


export default connect(mstp, {})(Dashboard);

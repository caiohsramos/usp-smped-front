import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './Container';
import { MainController } from '../../controllers';
import { Header } from '../../components';

const actions = { };

class Main extends Container {

	constructor(props) {
		super(props);

		this.state = {
			profile_menu: false
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router,
		};

		this.controller = new MainController(toController);
	}

	componentWillMount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	render() {
		const { handleMenuOpen } = this.controller;
		return (
      <section className="main">
				<Header handleMenu={handleMenuOpen}/>
				{this.props.children}
      </section>
		);
	}
}

const mstp = state => {
	return {
	};
};

export default connect(mstp, actions)(Main);

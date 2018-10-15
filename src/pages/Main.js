import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './Container';
import { MainController } from '../controllers';
import { Header } from '../common';
import { setToken } from '../actions/TokenActions';

const actions = { };

class Main extends Container {

	constructor(props) {
		super(props);
		this.state = {
			headerMenu: '',
			headerDrawer: false
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
		this.controller.handleRefresh();
	}

	componentWillReceiveProps(nextProps) {
	}

	render() {
		const { handleMenuAction, handleDrawerAction, redirectTo } = this.controller;
		const { headerMenu, headerDrawer } = this.state;

		let containerState = headerDrawer ? 'container' : 'container-closed';
		return (
      <section className="main">
				<Header
				 handleMenuClick={handleMenuAction}
				 menuStatus={headerMenu}
				 headerStatus={headerDrawer}
				 handleDrawerClick={handleDrawerAction}
				 handleRedirect={redirectTo}
				/>
				<div className={containerState}>
					{this.props.children}
				</div>
      </section>
		);
	}
}

const mstp = state => {
	return {
	};
};

const mdtp = dispatch => bindActionCreators({setToken}, dispatch);

export default connect(mstp, mdtp)(Main);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './Container';
import { MainController } from '../../controllers';
import { Header } from '../../components';
import { setToken } from '../../actions/TokenActions';

const actions = { };

class Main extends Container {

	constructor(props) {
		super(props);
		this.state = {
			profile_menu: ''
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
		const { handleMenuOpenAction, handleMenuCloseAction } = this.controller;
		const { profile_menu } = this.state;
		return (
            <section className="main">
                <Header
                    handleMenuOpen={handleMenuOpenAction}
                    handleMenuClose={handleMenuCloseAction}
                    menuStatus={profile_menu}
                />
                {this.props.children}
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

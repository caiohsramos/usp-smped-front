import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { DashboardController } from '../../controllers';
import { Table } from '../../components';


class Dashboard extends Container {
	constructor(props) {
		super(props);

		this.state = {
			formsMock: [{name: 'Form1', id:'r982ur982', version: '1.0', author: 'Marcos', description: 'Lorem ipsum condimentum sociosqu lorem auctor tellus praesent donec leo arcu, mollis ipsum eu nisi leo.'},
			 						{name: 'Form2', id:'rdsadr982', version: '2.0', author: 'Aline', description: 'Lorem ipsum lorem fames maecenas sollicitudin nullam mattis netus, ligula convallis mauris rhoncus nisi.'},
									{name: 'Form3', id:'rdsdasd22', version: '3.0', author: 'Gabrielly', description: 'Vehicula morbi a fermentum tincidunt etiam curabitur nisi dictumst, aenean malesuada suscipit porttitor.'},
									{name: 'Form4', id:'rdsdda323', version: '4.0', author: 'Lucas', description: 'Dolor id nisl etiam potenti aptent duis tortor ultrices ornare, convallis fermentum magna malesuada cubilia.'}]
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
		const { classes } = this.props;
		const { formsMock } = this.state;
	    return (
					<Table data={formsMock}/>
	    );

	  }

}

const mstp = state => {
	return {};
};


export default connect(mstp, {})(Dashboard);
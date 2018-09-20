import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { } from './middlewares';

import App from './containers/lib/App';
import Main from './containers/lib/Main';
import Login from './containers/lib/Login';
import Dashboard from './containers/lib/Dashboard';
import NewForm from './containers/lib/NewForm';


export default store => {
	return (
		<Router history={browserHistory}>
			<Route component={App} >
				<Route path='/' component={Login} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/newform' component={NewForm} />
				<Route component={Main}>
				</Route>
			</Route>
    </Router>);
};

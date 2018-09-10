import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { } from './middlewares';

import App from './containers/lib/App';
import Main from './containers/lib/Main';
import Home from './containers/lib/Home';
import Login from './containers/lib/Login';


export default store => {
	return (
		<Router history={browserHistory}>
			<Route component={App} >
				<Route path='/' component={Login} />
				<Route component={Main}>
				</Route>
			</Route>
    </Router>);
};

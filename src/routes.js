import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './pages/App';
import Main from './pages/Main';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import NewForm from './pages/newForm/NewForm';
import Form from './pages/form/Form'
import Invite from './pages/invite/Invite';

export default store => {
    return (
        <Router history={browserHistory}>
            <Route component={App} >
                <Route path='/' component={Login} />
                <Route component={Main}>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/newform' component={NewForm} />
                    <Route path='/invite' component={Invite} />
                    <Route path='/form/:id' component={Form} />
                </Route>
            </Route>
        </Router>);
};

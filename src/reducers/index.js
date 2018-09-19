import { combineReducers } from 'redux';
import sessionReducer from './SessionReducer';

export default combineReducers({
	session: sessionReducer
});

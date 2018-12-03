import { combineReducers } from 'redux';
import sessionReducer from './SessionReducer';
import messageReducer from './MessageReducer';

export default combineReducers({
	session: sessionReducer,
	message: messageReducer
});

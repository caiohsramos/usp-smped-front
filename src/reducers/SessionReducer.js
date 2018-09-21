const INITIAL_STATE = { accessToken: '', refreshToken: '' };

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case 'TOKEN_SET':
			return {
				...state, 
				accessToken: action.payload.access, 
				refreshToken: action.payload.refresh
			};
		case 'TOKEN_CLEAR':
			return {...state, accessToken: '', refreshToken: ''};
		default:
			return state;
	}
};
const INITIAL_STATE = { token: '' }

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case 'TOKEN_SET':
			return {...state, token: action.payload}
		case 'TOKEN_CLEAR':
			return {...state, token: ''}
		default:
			return state
	}
}
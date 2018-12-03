const INITIAL_STATE = { msg: '', id: '', success: ''};

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case 'MSG_SET':
			return {
				...state,
				msg: action.payload.msg,
				id: action.payload.id,
				success: action.payload.success
			};
		case 'MSG_CLEAR':
			return {...state, msg: '', id: '', success: ''};
		default:
			return state;
	}
};

export const setToken = (token) => {
	return {type: 'TOKEN_SET', payload: token};
};

export const clearToken = () => ({type: 'TOKEN_CLEAR'});

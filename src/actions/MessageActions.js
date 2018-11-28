export const setMsg = (msg, id, success) => {
	console.log("ppp", msg);
	return {type: 'MSG_SET', payload: { msg, id, success }};
};

export const clearMsg = () => ({type: 'MSG_CLEAR'});

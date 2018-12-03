export const setMsg = (msg, id, success) => {
	return { type: 'MSG_SET', payload: { msg, id, success } };
};

export const clearMsg = () => ({ type: 'MSG_CLEAR' });

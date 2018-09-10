import React from 'react';

const Button = props => {
	const { label, title, id, clickAction, type } = props;

	return (
		<button
			id={id}
			className={`button`}
			onClick={clickAction}
			type={type || ""}
			title={title}
		> {label} </button>
	);
};


export { Button };

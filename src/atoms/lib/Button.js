import React from 'react';

const Button = props => {
	const { label, title, id, clickAction, type } = props;

	return (
		<button
			id={id}
			className={`btn btn-lg btn-primary btn-block`}
			onClick={clickAction}
			type={type || ""}
			title={title}
		> {label} </button>
	);
};


export { Button };

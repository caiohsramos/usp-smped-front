import React from 'react';

const TextInput = props => {
	const { id, type, value, placeholder, changeAction } = props;

	return (
		<div id={`text-input-${id}`} className='text-input'>
			<input
				className={`input`}
				onChange={changeAction}
				type={type || 'text'}
				id={id}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
};

export { TextInput };

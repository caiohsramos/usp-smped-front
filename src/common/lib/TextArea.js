import React from 'react';

const TextArea = props => {
	const { id, type, value, placeholder, changeAction } = props;

	return (
        <div id={`text-input-${id}`}>
            <textarea
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

export { TextArea };

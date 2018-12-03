import React from 'react';

const TextInput = props => {
    const { id, type, value, placeholder, changeAction, read } = props;

    return (
        <div id={`text-input-${id}`} className='text-input' >
            <input
                className={`input`}
                onChange={changeAction}
                type={type || 'text'}
                id={id}
                value={value}
                placeholder={placeholder}
                readOnly={read}
            />
        </div>
    );
};

export { TextInput };

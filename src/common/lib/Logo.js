import React from 'react';

const Logo = props => {
	const { classes, clickAction, id } = props;

	return (
		<div onClick={clickAction} className={classes ? classes : 'logo'}>
			<img id={id} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bras%C3%A3o_da_cidade_de_S%C3%A3o_Paulo.svg/200px-Bras%C3%A3o_da_cidade_de_S%C3%A3o_Paulo.svg.png"/>
		</div>
	);
};

export { Logo };

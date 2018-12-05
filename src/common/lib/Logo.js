import React from 'react';
import styled from 'styled-components'

const LogoImage = styled.img`
    height:${props => props.small && "46px"};
    padding-left:${props => props.small && "20px"};
`

const Logo = props => {
    const { clickAction, id, small } = props;
    return (
        <LogoImage small={small} onClick={clickAction} id={id} alt='login-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bras%C3%A3o_da_cidade_de_S%C3%A3o_Paulo.svg/200px-Bras%C3%A3o_da_cidade_de_S%C3%A3o_Paulo.svg.png" />
    );
};

export { Logo };

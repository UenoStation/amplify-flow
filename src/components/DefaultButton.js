import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
border: 1px solid e5e5e5;
box-sizing: border-box;
padding: 0 30px;
margin: 0;
vertical-align: middle;
font-size: 14px;
line-height: 38px;
text-align: center;
text-decoration: none;
text-transform: uppercase;
:focus {
    border: 1px solid;
    border-color: #b2b2b2;
    outline: none;
    background-color: transparent;
    color: #222;
}
:hover {
    background-color: transparent;
    border: 1px solid;
    border-color: #b2b2b2;
    color: #222;
}
`;

const DefaultButton = props => {
    return (
        <Button onClick={(e) => props.onClick(e)}>{props.children}</Button>
    )
}

export default DefaultButton;
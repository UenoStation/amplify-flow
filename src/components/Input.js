import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
height: 40px;
background-color: white;
color: #666;
box-sizing: border-box;
margin: 0;
border-radius: 0;
padding: 0 10px;
border: 1px solid #e5e5e5;
:focus {
    border-color: #1e87f0;
}
`;

const Input = props => {
    return (
        <TextInput
            name={props.name}
            placeholder={props.placeholder}
            onChange={(e) => props.onInputChange(props.name, e.currentTarget.value)}
        />
    )
}

export default Input;
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
font-size: 16px;
`;

const InputLabel = props => {
    return (
        <Label>{props.children}</Label>
    )
}

export default InputLabel;
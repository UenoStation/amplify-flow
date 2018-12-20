import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid #efefef;
background-color: white;
display: flex;
flex-flow: column nowrap;
max-width: 600px;
`;

const Panel = props => {
    return <Container>{props.children}</Container>
}

export default Panel;
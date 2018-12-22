import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
justify-content: center;
`;

const FullScreenContainer = props => {
    return <Container>{props.children}</Container>
}

export default FullScreenContainer;
import React from 'react';
import styled from 'styled-components';

const TopHeader = styled.header`
border: 1px solid #e9e9e9;
background-color: white;
display: flex;
flex-flow: row nowrap;
padding: 20px;
`;

const Header = props => {
    return <TopHeader>{props.children}</TopHeader>
}

export default Header;
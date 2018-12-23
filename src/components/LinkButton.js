import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
color: darkcyan;
:hover {
    color: darkseagreen;
    cursor: pointer;
}
`;

const LinkButton = props => {
    return <Link onClick={props.onClick}>{props.children}</Link>
}

export default LinkButton;
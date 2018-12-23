import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';

const Section = styled.section`
background-color: aquamarine;
`;

class HomeView extends Component {
    onHandleSignOut = () => this.props.onHandleSignOut()

    render() {
        return (
            <Section>
                <Header>
                    <LinkButton onClick={this.onHandleSignOut}>Sign Out</LinkButton>
                </Header>
                <h1>Welcome</h1>
                <p>Pellentesque ac lacinia felis. Proin nec nibh eget felis malesuada vehicula. Sed efficitur lorem sit amet nunc luctus, at malesuada diam consectetur. Fusce luctus sem eget elit consequat aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla molestie posuere lacus at convallis. Phasellus metus quam, porta vitae quam aliquam, vulputate accumsan nibh. Nulla facilisi. Phasellus nec enim ac nunc pharetra maximus.</p>
            </Section>
        )
    }
}

export default HomeView;
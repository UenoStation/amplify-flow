import React, { Component, Fragment } from 'react';
import LinkButton from '../components/LinkButton';

class HomeView extends Component {
    onHandleSignOut = () => this.props.onHandleSignOut()

    render() {
        return (
            <Fragment>
                <LinkButton onClick={this.onHandleSignOut}>Sign Out</LinkButton>
                <h1>Welcome</h1>
                <p>Pellentesque ac lacinia felis. Proin nec nibh eget felis malesuada vehicula. Sed efficitur lorem sit amet nunc luctus, at malesuada diam consectetur. Fusce luctus sem eget elit consequat aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla molestie posuere lacus at convallis. Phasellus metus quam, porta vitae quam aliquam, vulputate accumsan nibh. Nulla facilisi. Phasellus nec enim ac nunc pharetra maximus.</p>
            </Fragment>
        )
    }
}

export default HomeView;
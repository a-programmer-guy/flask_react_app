import React, { Component } from 'react'
import { LoginButton, LogoutButton } from './LoginSection'


export class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: false }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({ authenticated: true });
    }

    handleLogoutClick() {
        this.setState({ authenticated: false });
    }

    render() {
        let login_button;
        login_button = <LoginButton onClick={this.handleLoginClick}/>
        return (
            <div>
                <h1>Welcome...please sign in to continue</h1>
                {login_button}
            </div>
        )
    }
}

export default Welcome

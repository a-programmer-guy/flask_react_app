import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LoginButton, LogoutButton, SignUpButton } from './Buttons'


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
        let login_button; let sign_up_button;
        login_button = <LoginButton onClick={this.handleLoginClick}/>
        sign_up_button = <SignUpButton onClick={this.handleSignInClick} />
        return (
            <div className='p-5'>
                <Row className="justify-content-center p-2">
                    <Col lg='6'>
                        <h1>Welcome...please sign in to continue</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center my-5'>
                    <Col lg='6'>
                        <Button onClick={this.props.handleSignInClick} className="btn-block">Sign in</Button>
                        <Link to="/sign_up" className="btn btn-success btn-block">Sign up</Link>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Welcome

import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router'

import history  from './History'

import Welcome from './Welcome'

class SplashPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            authenticated: false,
            sign_in: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
    }

    handleChange = (event) => {
        let { target: { name, value } } = event
        this.setState({ [name]: value, event: event })
    }

    handleSignInClick() {
        this.setState({ sign_in: true });
    }

    parseJSON(response) {
        return response.json()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var body = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
        fetch('/login', {
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: body })
            .then(this.parseJSON)
            .then(function(response) {
            console.log('request succeeded with JSON response',response)
            history.push({
                pathname: '/home',
                state: { user: response }
            })
            })
            .catch(function(error) {
                console.log('request failed', error)
            })
    }
    render() {
        let authenticated = this.state.authenticated
        console.log('auth',this.state.authenticated)
        return (
            <>
                <Welcome handleSignInClick={this.handleSignInClick}/>
                <div>
                    <div className='splash_content'>
                        <h1 className='mx-auto mb-4' >Sign In</h1>
                        <Row>
                            <Col>
                                <Form onSubmit={this.handleSubmit} className='sign_up_form'>
                                    <Form.Group>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name='email'
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name='password'
                                            value={this.state.password}
                                            onChange={this.handleChange} />
                                    </Form.Group>
                                    <Button className='sign_in w-100' type="submit" >
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
        </>
        )
    }
}

export default withRouter(SplashPage);

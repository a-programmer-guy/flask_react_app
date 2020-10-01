import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

import Welcome from './Welcome'

class SplashPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            authenticated: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        let { target: { name, value } } = event
        this.setState({ [name]: value, event: event })
    }

    handleLoginClick() {
        this.setState({ authenticated: true });
    }

    parseJSON(response) {
        return response.json()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var ebody = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
        fetch('/login', {
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: ebody})
            .then(this.parseJSON)
            .then(function(response) {
            console.log('request succeeded with JSON response',response)
            })
            .catch(function(error) {
                console.log('request failed', error)
            })
    }
    render() {
        let welcome;
        let authenticated = this.state.authenticated
        welcome = <Welcome />
        return (
            <>
            {authenticated ?
                { welcome }
                :
                <>
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
            }
        </>
        )
    }
}

export default SplashPage

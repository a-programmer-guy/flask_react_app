import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

class SplashPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        let { target: { name, value } } = event
        this.setState({ [name]: value, event: event })
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
        fetch('/sign_in', {
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
        return (
            <div>
                <div className='splash_content'>
                    <h1 className='mx-auto mb-4 white' >Sign In</h1>
                    <Row lg={8}>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        id='rounded'
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        id='rounded'
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
        )
    }
}

export default SplashPage

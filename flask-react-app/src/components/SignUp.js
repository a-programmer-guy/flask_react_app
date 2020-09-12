import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birth_month: '',
            birth_day:'',
            birth_year: '',
            apartment_number: '',
            building_number:'',
            street: '',
            province:'',
            gender: ''
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
            info: this.state
        })
        fetch('/sign_up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: ebody
        })
            .then(this.parseJSON)
            .then(function (response) {
                console.log('request succeeded with JSON response', response)
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }
    render() {
        return (
            <div>
                <div className='splash_content'>
                    <h1 className='mx-auto mb-4 white' id='sign_in_title'>Sign Up</h1>
                    <Row lg={8}>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                            <Form.Label id='sign_in_label'>Name</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" name='first_name' placeholder="First" id='rounded'/>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" name='last_name' placeholder="Last" id='rounded'/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Form.Label id='sign_in_label'>Birthdate</Form.Label>
                                        <Form.Control type="text" name='dob' placeholder="YYYY-MM-DD (e.g. 1999-12-31)" id='rounded'/>
                                    </Col>
                                    <Col>
                                    <Form.Label id='sign_in_label'>Gender</Form.Label>
                                        <Form.Control as="select" id='rounded'>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                            <option>Prefer not to say</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Form.Label id='sign_in_label'>Email</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type="email"
                                            placeholder="123example@example.com"
                                            id='rounded'
                                            name='email'
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Col>
                                </Row>
                                <Form.Label id='sign_in_label'>Password</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control
                                        type="password"
                                        placeholder="Must be minimum of 8 alphanumberic characters"
                                        id='rounded'
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col>
                                        <Form.Control
                                        type="password"
                                        placeholder="Confirm password"
                                        id='rounded'
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        />
                                    </Col>
                                </Row>
                                {/* <Form.Label>Address</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" name='apartment_number' placeholder="Unit Number" id='rounded'/>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" name='building_number' placeholder="Building Number" id='rounded'/>
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col>
                                        <Form.Control type="text" name='city' placeholder="City" id='rounded'/>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" name='province' placeholder="Province" id='rounded'/>
                                    </Col>
                                </Row> */}
                                <Row className='mt-5'>
                                    <Col>
                                        <Button className='sign_in w-100' type="submit" id='sign_in_label'>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default SignUp

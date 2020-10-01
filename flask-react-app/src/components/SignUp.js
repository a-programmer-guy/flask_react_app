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
            // birth_month: '',
            // birth_day:'',
            // birth_year: '',
            // apartment_number: '',
            // building_number:'',
            // street: '',
            // province:'',
            // gender: '',
            // dob: ''
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        console.log('old state ', this.state, 'changing ', event.target.name)
        let { target: { name, value } } = event
        this.setState({ [name]: value, event: event },
            () => console.log('state: ', this.state))
    }

    parseJSON(response) {
        return response.json()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var body = JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
        })
        fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
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
            <div className='content_wrapper'>
                <div className='splash_content'>
                    <h1 className='mx-auto mb-4 white' id='sign_in_title'>Sign Up</h1>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit} className='sign_up_form'>
                            <Form.Label id='sign_in_label'>Name</Form.Label>
                                <Row xs={1} md={1} lg={2}>
                                    <Col>
                                        <Form.Control type="text" name='first_name' placeholder="First" onChange={this.handleChange}/>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" name='last_name' placeholder="Last" onChange={this.handleChange}/>
                                    </Col>
                                </Row>
                                <Row xs={1} md={1} lg={2}>
                                    <Col>
                                    <Form.Label id='sign_in_label'>Birthdate</Form.Label>
                                        <Form.Control type="text" name='dob' placeholder="YYYY-MM-DD (e.g. 1999-12-31)"/>
                                    </Col>
                                    <Col>
                                    <Form.Label id='sign_in_label'>Gender</Form.Label>
                                        <Form.Control as="select" id='rounded_select' name='gender' onChange={this.handleChange}>
                                            <option value=''>Select...</option>
                                            <option value='m'>Male</option>
                                            <option value='f'>Female</option>
                                            <option value='o'>Other</option>
                                            <option value='n/a'>Prefer not to say</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Form.Label id='sign_in_label'>Email</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type="email"
                                            placeholder="123example@example.com"
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
                                <Row className='mt-4'>
                                    <Col>
                                        <Button className='sign_in_button w-100' type="submit">
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

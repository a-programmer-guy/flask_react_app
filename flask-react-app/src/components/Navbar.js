import React, { Component } from 'react'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Dope Dash</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#deals">Deals</Nav.Link>
                        <Nav.Link href="#sign_in">Sign In</Nav.Link>
                        <Nav.Link href="#sign_up">Sign Up</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

export default Navigation

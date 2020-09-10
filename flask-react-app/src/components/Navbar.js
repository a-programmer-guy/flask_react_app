import React, { Component } from 'react'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

export class Navigation extends Component {



    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed='top' expand="sm">
                    <Navbar.Brand href="#home">Dope Dash</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#deals">Deals</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#sign_in" >Sign In</Nav.Link>
                        <Nav.Link href="#sign_up">Sign Up</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation

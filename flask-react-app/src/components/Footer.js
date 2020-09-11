import React, { Component } from 'react'
import { Navbar, Nav } from  'react-bootstrap'

export class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" className='footer'>
                    <Nav className="m-auto">
                        <Nav.Item className='mr-2'>&copy;</Nav.Item>
                        <Nav.Item>Kaylan Horne</Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Footer

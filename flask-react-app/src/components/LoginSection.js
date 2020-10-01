import React from 'react'
import { Button } from 'react-bootstrap'

export function LoginButton(props) {
    return (
        <Button variant='primary' onClick={props.onClick}>Login</Button>
    );
}

export function LogoutButton(props) {
    return (
        <Button variant='secondary' onClick={props.onClick}>Logout</Button>
    );
}
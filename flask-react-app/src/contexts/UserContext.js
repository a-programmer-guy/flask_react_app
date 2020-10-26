import React, { useState, createContext } from'react'

export const UserContext =  createContext();

export const UserProvider = props => {
    const [authenticated, setAuthenticated] = useState([
        {
            authenticated: false,
            id: '',
            first_name: '',
            last_name: '',
            email:''
        }
    ])
    return (
        <UserProvider>
            {props.children}
        </UserProvider>
    )
}

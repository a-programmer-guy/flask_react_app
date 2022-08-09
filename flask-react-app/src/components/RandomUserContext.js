import React, { useState, useEffect, createContext } from 'react'

export const RandomUserContext = createContext();

export const RandomUserProvider = props => {

    const [person, setPerson] = useState(null);
    //     [
    //     {
    //         name: { first: 'The Dude', last:'Man'},
    //         email: 'thedude@dude.com'
    //     }
    // ]);
    useEffect(async () => {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const [item] = data.results;
        setPerson(item);
    }, [])
    return (
        <RandomUserContext.Provider value={person}>
            {props.children}
        </RandomUserContext.Provider>
    )
}

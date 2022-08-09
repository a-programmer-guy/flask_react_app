import React, { useContext } from 'react'
import { RandomUserContext } from './RandomUserContext'

const Greeting = () => {
    const person = useContext(RandomUserContext);
    // const user = JSON.stringify(person)
    return (
        <div>
        <p>{person['email']}</p>
            
            {/* <ul>
                {person.map((item, index) => (<li>{item}</li>))}
            </ul> */}
            {/* {person.map(attr => (
                <p>{attr.name}</p>
            ))} */}
        </div>
    )
}

export default Greeting;
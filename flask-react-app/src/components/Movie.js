import React, { useState, useEffect } from 'react'

const Movie = () => {

    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const [item] = data.results;
        setPerson(item);
    }, [])
    return (
        <div>
            {person && <div><h1>Master Clicker: {person.name.first}</h1></div>}
            <p>Times Clicked: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <button onClick={() => setCount(count - 1)}>Decrease count</button>
        </div>
    )
}

export default Movie;
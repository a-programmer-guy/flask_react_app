import React, { useState, useEffect } from 'react';

function Clock() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }, []);

    return (
        <div>
            <h3>{currentTime}</h3>
        </div>
    )

}

export default Clock

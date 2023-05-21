import React, { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTime( (time) => time + 1);
        }, 1000);
    }, []);

    return (
        <div>
            <h1>Timer: {time}</h1>
        </div>
    );
}

export default Timer;
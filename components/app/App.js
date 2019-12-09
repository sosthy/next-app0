import React, { useState, useEffect } from 'react';

const App = () => {
    const [date, setDate] = useState(new Date().toLocaleString());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toLocaleString());
        }, 1000);
        return () => {
            console.log("Unmount Component App")
        }
    })

    return (
        <div className="container">
            <h1>Application principale</h1>
            <h2>{date}</h2>
        </div>
    );
}

export default App;
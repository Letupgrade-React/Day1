import React from 'react';
import Button  from './Button';
import './style.css';

const App =()=>{
    return (
        <div>
            <h1 style={{marginTop:200}}>Hello World</h1>
            <p>Welcome to React Js Program!.</p>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Button text="show" />
            </div>
            <h3>Day 1 Assignment</h3>          
        </div>
    )
}
export default App
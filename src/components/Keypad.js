import React from "react";


function Keypad (){

    const eventHandler = () => {
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={eventHandler}></input>
        </div>
    )
}

export default Keypad;
// Code Keypad Component Here
import React from 'react'


function Keypad() {

    const handleChange = (event) => {
        event.preventDefault()
        console.log("Entering password...")
    }



    return (
        <div>
            <input onChange={handleChange} type="password" />
        </div>
    )
}

export default Keypad

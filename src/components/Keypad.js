import React from 'react';

function Keypad (){

    function Homer(e){
        console.log('Entering passwod...',e)
    }

    return (
        <div>
            <input type='password' placeholder='password' onChange={Homer} />
        </div>
    )
}

export default Keypad;
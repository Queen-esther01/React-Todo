import React from 'react';
 

function handleClick(){
    console.log('A button was clicked')
}

function event(){
    return(
        <button onClick={handleClick}>Click me</button>
    )
}



export default event;
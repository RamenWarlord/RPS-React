import React from 'react'

function Computer(props){
    return(
        <div>
            <button onClick={()=>props.clickHandler(0)}>Rock</button>
            <button onClick={()=>props.clickHandler(1)}>Paper</button>
            <button onClick={()=>props.clickHandler(2)}>Scissor</button>
        </div>
    )
}

export default Computer
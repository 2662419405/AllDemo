import React, { useState } from 'react'

export default function Hooks(){

    const [buttonText,sethandlerClick] = useState('click me!')

    function handlerClick(){
        return sethandlerClick('感谢')
    }

    return (
        <button
            onClick = {handlerClick}
        >
            {buttonText}
        </button>
    )
}
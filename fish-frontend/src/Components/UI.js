import '../css/UI.css'
import React, {useState} from 'react'
import ButtonDisplay from './UI_Components/ButtonDisplay'
function UI({handleFishChangeForward, handleFishChangeBackward, handleSwapClick, number}) {
    return(
        <div>
            <div className = 'toggle-switch'>
                <label>
                    <input type = 'checkbox'/>
                    <span className = 'slider'></span>
                </label>
            </div>
            <div className='button'>
                <button onClick = {handleFishChangeForward} type = "button">
                    forward {number}
                </button>
            </div>
            <div className='button2'>
                <button onClick = {handleFishChangeBackward} type = "button">
                    back {number}
                </button>
            </div>
            <div className='button3'>
                <button onClick = {handleSwapClick} type = "button">
                    swap {number}
                </button>
            </div>
        </div>
        
    )
}
export default UI;
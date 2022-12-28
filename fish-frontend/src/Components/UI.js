import '../css/UI.css'
import React, {useState} from 'react'
import ButtonDisplay from './UI_Components/ButtonDisplay'
function UI({handleButtonClick, number}) {
    return(
        <div>
            <div className = 'toggle-switch'>
                <label>
                    <input type = 'checkbox'/>
                    <span className = 'slider'></span>
                </label>
            </div>
            <div className='button'>
                <button onClick = {handleButtonClick} type = "button">
                    hello {number}
                </button>
            </div>
        </div>
        
    )
}
export default UI;
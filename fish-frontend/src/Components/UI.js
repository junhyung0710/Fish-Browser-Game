import '../css/UI.css'
import ButtonDisplay from './UI_Components/ButtonDisplay'
function UI() {
    return(
        <div className = 'toggle-switch'>
            <label>
                <input type = 'checkbox'/>
                <span className = 'slider'></span>
            </label>
        </div>
        
    )
}
export default UI;
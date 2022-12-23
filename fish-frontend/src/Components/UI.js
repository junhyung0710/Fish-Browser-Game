import '../css/UI.css'
import ButtonDisplay from './UI_Components/ButtonDisplay'
function UI() {
    return(
        <div className = 'container'>
            <div className = 'toggle-switch'>
                <label>
                    <input type = 'checkbox'/>
                    <span className = 'slider'></span>
                </label>
            </div>
        </div>
        
    )
}
export default UI;
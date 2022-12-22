import axios from 'axios'
import { useEffect, useState } from "react"
import '../css/ButtonDisplay.css'
function ButtonDisplay() {
    const [fishList, setFishList] = useState([])
    const [currentFish, setCurrentFish] = useState(0)
    useEffect(() => {
        console.log('effect')
        axios
          .get('http://localhost:3001/fish')
          .then(response => {
            console.log('promise fulfilled')
            setFishList(response.data)
          })
      }, [])
    
    function handleButtonClick() {
        let randid = Math.floor(Math.random() * 9)
        setCurrentFish(fishList[randid])
      
    }
    return (
      <button className='Display' onClick = {handleButtonClick}>
        Your fish is {currentFish.name}
      </button>
    )

}


export default ButtonDisplay
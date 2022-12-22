import { useEffect, useState } from "react"
import axios from "axios"
export function AccessFishData() {
    const [fishList, setFishList] = useState([])
    useEffect(() => {
        console.log('effect')
        axios
          .get('http://localhost:3001/fish')
          .then(response => {
            console.log('promise fulfilled')
            setFishList(response.data)
          })
      }, [])

}
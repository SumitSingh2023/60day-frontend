import React from 'react'
import { useRef, useState } from 'react'

const ValidiationForm = () => {
    const inputRef = useRef(null)
    const[isValid, setIsValid] = useState(false)

    function handleValidation(){
        setIsValid(inputRef.current.value.length >=5 )
    }
  return (
    <div>
        <h2>ValidiationForm</h2>

        <input type="text" 
        ref={inputRef} 
        placeholder='enter at least 5 character'
        onChange={handleValidation}
        style={{backgroundColor : isValid? "green" :" red",color:"white"}}/>
        {isValid ? (<p>Valid Input</p>): (<p>Invalid Input</p>)}
    </div>
  )
}

export default ValidiationForm
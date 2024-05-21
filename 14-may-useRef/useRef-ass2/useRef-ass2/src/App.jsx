import { useRef, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [save, setSave] = useState([])
  let inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  // function handleChange() {
  //   (inputRef.current.value)
  // }

  function print() {
    // inputRef.current.style.backgroundColor="teal"
    setSave([...save, inputRef.current.value])
    
  }

  return (
    <>
      <label>
        Input :
        <input type="text"
          placeholder="Enter details"
          ref={inputRef}
          
        //onChange={handleChange}
        />
      </label>
      <button onClick={print}>submit</button>

      <p>{save}</p>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [newTodo, setNewTodo] = useState([])
  
  function handleSubmit() {
    todo==""?alert("enter task"):
    setNewTodo([
      ...newTodo, { task: todo, completed: false }
    ])
    
    setTodo("")
  }

  function deleted(index){
    let updatedTodo = newTodo.filter((_,i)=>i!==index)
    console.log(i)
    setNewTodo(updatedTodo)
  }

  function toggleComplete(index){
    const updatedTools=[...newTodo]
    console.log(newTodo)
    updatedTools[index].completed=!updatedTools[index].completed
    setNewTodo(updatedTools)

  }

  return (
    <>
      <label>Enter Todo : 
        <input type="text"
          placeholder='Enter todo'
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value)
          }} />

          <button onClick={handleSubmit}>Submit</button>
      </label>

      {newTodo.map((ele,index) => (
        console.log(index),
        <div key={index} style={{textDecoration:ele.completed?"line-through":"none"}}>
          <input type="checkbox" 
          checked={ele.completed}
          onChange={()=>toggleComplete(index)}/>
          {ele.task}
          <button onClick={()=>deleted(index)}>Delete</button>
        </div>
      ))}

    </>
  )
}

export default App

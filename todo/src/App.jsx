import React from 'react'
import { useState } from 'react'
import "./App.css"

export const App = () => {

const [input, setInput] = useState("")

const[tasks,setTasks]=useState([])
const[edit,setEdit]=useState(false)



const addtask=()=>{
  if(!input) return;
  setTasks([...tasks,input])
  setInput("")
}
 const deletetask=(index)=>{
   setTasks(tasks.filter((task,i)=>i !==index))
 }
const handleclick=(index)=>{
  setEdit(true)
  setInput(tasks[index]);
}
const updateTask=()=>
{
 
  setTasks([...tasks,input])
  setInput("")
  setEdit(false)

}
  
  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text"
        value={edit?input:input}
        onChange={(e) => setInput(e.target.value)}
      />
      {edit?<button onClick={updateTask}>Update</button>:
      <button onClick={addtask}>Add</button>      
      }
      <ul>
        {tasks.map((task, index) => (
          <li key={index}
          
          >
            {task}
            <button onClick={()=>handleclick(index)}>edit</button>
            
                <button  className='del' onClick={() => deletetask(index)}>Delete</button>
            
           
          </li>
        ))}
      </ul>
    </>
  );
}
export default App

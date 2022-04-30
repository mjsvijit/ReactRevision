import React from 'react'
import {v4 as uuid} from "uuid"
import { useDispatch } from "react-redux"
import {jsonData } from '../../redux/todo/action'



 const TodoInput = () => {
    const [name, setName] = React.useState("");
    const dispatch = useDispatch();
    // const todos = useSelector((state)=> state.todos.todos)

    const handleChange = (e)=>{
      setName(e.target.value)
    }
      
    const fetchTodos = () => {
      fetch('http://localhost:3004/todos')
      .then((responce)=> responce.json())
      .then((data)=> dispatch(jsonData(data)))
    }

    const handleAdd = () =>{
      console.log(name)
      fetch('http://localhost:3004/todos', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(
            {
                "title": name
            }
        )
    }).then(() => {
        fetchTodos()
    });
};


  return (
    <div> 
    <div>
        <input 
           placeholder='Enter item'
           value={name} 
           onChange={handleChange}
           />
    
           <button onClick={handleAdd}>ADD</button>

    </div>
 
    </div>
  )
}
export default TodoInput
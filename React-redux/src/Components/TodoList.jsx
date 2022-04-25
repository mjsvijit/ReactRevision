import React from 'react'
import { store } from '../Redux/store'
import {
   useSelector
}from 'react-redux'
import { deleteTodo, DELETE_TODO } from '../Redux/action'
const TodoList = () => {
    const [sdelete,setSDelete] = React.useState(0)

    const {todos} =useSelector(store => store );
const handleDelete=(index)=>{
 
  store.dispatch(deleteTodo(index))
 
}
  
    console.log(todos)
  return (
    <div>
    {
        todos.map((task, index) => ( 
            <div key={index}> 
              <h5>{task}</h5>
              <p>{index}</p>
              <button onClick={()=>handleDelete(index)}>delete</button>
            </div>     
              ))
    }
    </div>
  )
}

export default TodoList;
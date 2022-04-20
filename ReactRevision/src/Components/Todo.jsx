import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
import './Todo.css'
import TodoList from './TodoList'

const Todo = () => {
    const [item,setItem]=useState("");
    const [listData,setListData]=useState([]);
    const handleAdd =()=>{
        const payload = {
          item,
          id:uuid()
        }
        setListData([...listData, payload]);
      
    }
   
  return (

    <div className='Todo'>
    <div> 
    <input placeholder='Item' value={item} onChange={(e)=>setItem(e.target.value)} />
  
    <button onClick={()=>handleAdd()}>+</button>
     
    {listData.map((item,id)=>(
      <TodoList {...item} key={item.id}/>
    ))}
   </div>
    </div>
  )
}

export default Todo;
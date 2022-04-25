import React,{useState} from 'react'
import { store } from '../Redux/store';
import {
  useSelector
}from 'react-redux'
import {
    // ADD_NEW_ITEM,
    addItem
} from '../Redux/action';

const AddTodo = () => {
    const [newItem,setNewItem]=useState("");
    
    const {
      todos
    } = useSelector(store=>store);
    const handleChange=(event)=>{
           setNewItem(event.target.value);
             
        }
        
    const handleSubmit =()=>{
        store.dispatch(
          addItem(newItem )

        );
    }
console.log(store.getState())
  return (
    <div>
    <input placeholder='enter todos'  onChange={handleChange}/>
    <button onClick={handleSubmit}>
    Add Todo
    </button>
    
    </div>
  )
}

export default AddTodo
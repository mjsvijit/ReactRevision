import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { jsonData } from '../../redux/todo/action';


 const TodoList = () => {
 const dispatch = useDispatch();
 const {todos} =useSelector((store)=> store.todos);
   
 useEffect(()=>{
  fetch('http://localhost:3004/todos')
  .then((responce)=> responce.json())
  .then((data)=> dispatch(jsonData(data)))
},[])

const fetchTodos = () => {
  fetch("http://localhost:3004/todos")
.then((response) => response.json())
.then((data) => dispatch(jsonData(data)));
}

const  deleteData = (id) => {
  fetch(`http://localhost:3004/todos/${id}`, {
    method: 'DELETE'
  })
  .then((response) => response.json())
  .then(()=> fetchTodos());
};



 console.log(todos);
 return(
  <div>
  {
    todos.map((item,index)=>
    (
      <div key={index}>
      <h3>{item.title}</h3>
       <button onClick={()=> deleteData(item.id)}>delete</button>
    </div>
      ))
  }
  </div>
)
}
export default TodoList
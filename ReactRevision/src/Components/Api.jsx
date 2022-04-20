import React,{useState, useEffect} from 'react'
import './Api.css'
function Api() {
    const [list, setList]=useState([]);

    useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then((res)=> res.json())
      .then((data)=> setList(data));
    })

  return (
    <div className="Api">
     {
       list.map(user=>{
         return(
           <section key={user.id}>
           <img id='img' alt={user.image} src= { user.image }/>
           <h3>Product Name: {user.title}</h3>
           <h3>Price: {user.price}</h3>
           <h3>Description: {user.description}</h3>
           <h3>Category: {user.category}</h3>
           </section>
          
           
         )
       })
     }
    </div>
  );
}
export default Api;
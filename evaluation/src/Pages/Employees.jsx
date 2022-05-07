import React,{useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthContext'

const Employees = () => {
     const [data, setData] = useState([])
    const {isAuth} = useContext(AuthContext);
    const fireEmployee =(id)=>{
      fetch(` http://localhost:3004/employee/${id}`, {
          method: 'DELETE',
          headers: {
              "Content-Type": 'application/json',
          },
        
      })
  }

    useEffect(()=>{
      fetch('http://localhost:3004/employee')
      .then((res)=> res.json())
      .then((data)=>setData(data))
  },[fireEmployee])
    if(!isAuth){
        return <div>
         You are not authenticated <Link to='/login'>Please Login</Link>
        </div>
     }
     


    
  return (
    <div>
          {
            data.map((item)=>{
              return (<div>
                  <h1>{item.name}</h1>
                  <h1>{item.title}</h1>
                  <img src={item.image} />
                  <h1>{item.salary}</h1>
                  <button onClick={()=>fireEmployee(item.id)}>fire </button>
              
              
              </div>)
            }

           

            )
          }
    
    </div>
  )
}

export default Employees
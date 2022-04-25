import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Link } from 'react-router-dom';
const Users = () => {
    const {
        list,
        isAuth 
    }=useContext(AuthContext);
    
    if(!isAuth) {
        return <div>
            Please filled data carefully at ONE page again.<p>click below link to fill data</p> 

            <br/>
            <Link to="/">Please Enter Data</Link>
        </div>
    }
  return (
    <div >
    {
        list.map((data,index) => ( 
            <div key={index}> 
              <h5>{data.map((data1,index1)=>(
                  <div>
                  <h3>Name:{data1.name}</h3>
                  <h3>Age:{data1.age}</h3>
                  <h3>Date of Birth:{data1.dof}</h3>
                  <h3>Residence:{data1.stateOfResidence}</h3>
                  <h3>Address:{data1.address}</h3>
                  <h3>pinCode: {data1.pinCode}</h3>
                  </div>
              ))
            
            
            }</h5>
             <p>{index}</p>
              
            </div>     
              ))
    }
    
    </div>
  )
}

export default Users
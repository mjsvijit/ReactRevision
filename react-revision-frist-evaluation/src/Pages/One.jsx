import React,{useState ,useContext} from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

const One = () => {
    const {
        login
    }=useContext(AuthContext);
    const [userDetails,setUserDetails]=useState({
        name:"",
        age:"",
        dof:""
    })

    const handleChange=(event)=>{
            const {
                name,
                value
            }=event.target;

            setUserDetails({
                ...userDetails,
                [name]:value
            });
    }
  
    const handleSubmit = (event) =>{
          event.preventDefault();
          login(userDetails);
          
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
           <h1>Enter User Details</h1>
           
           <input 
           name='name'
           type='text'
           placeholder='Enter Name'
           value={userDetails.name}
           onChange={handleChange}
           />
           <br />
           <br />

           <input 
           name='age'
           type='number'
           placeholder='Enter Age'
           value={userDetails.age}
           onChange={handleChange}
           />
           <br />
           <br />

           <input 
           name='dof'
           type='date'
           placeholder='Enter Date Of Birth'
           value={userDetails.dof}
           onChange={handleChange}
           />
           <br />
           <br />

          <input type='submit' value='Next Page' disabled={userDetails.name == '' || userDetails.age == ''|| userDetails.dof=='' }/>
       </form>
    
    </div>
  )
}

export default One
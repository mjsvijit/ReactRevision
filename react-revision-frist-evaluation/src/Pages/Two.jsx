import React,{useState,useContext} from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { Link } from 'react-router-dom';
const Two = () => {
    const [addData,setAddData]=useState([])
    const [userDetails,setUserDetails]=useState({
        stateOfResidence:"",
        address:"",
        pinCode:""
    })
    const {
        isAuth,
        oneData,
        updateList
    }=useContext(AuthContext);

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
          setAddData([...oneData,userDetails])
          updateList(addData);
    }
  

    if(!isAuth) {
        return <div>
            Please filled data carefully at ONE page again.<p>click below link to fill data</p> 

            <br/>
            <Link to="/">Please Enter Data</Link>
        </div>
    }

   
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <h1>Enter User Details</h1>
    
    <input 
    name='stateOfResidence'
    type='text'
    placeholder='Enter State of Residence'
    value={userDetails.stateOfResidence}
    onChange={handleChange}
    />
    <br />
    <br />

    <input 
    name='address'
    type='text'
    placeholder='Enter Address'
    value={userDetails.address}
    onChange={handleChange}
    />
    <br />
    <br />

    <input 
    name='pinCode'
    type='text'
    placeholder='Enter Pin Code'
    value={userDetails.pinCode}
    onChange={handleChange}
    />
    <br />
    <br />

   <input type='submit' value='submit data'/>
</form>
    
    </div>
  )
}

export default Two
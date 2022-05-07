import React,{ useState, useContext} from 'react'
import { AuthContext } from '../Auth/AuthContext';
import { Link } from 'react-router-dom';


const Admin = () => {
  const [userDetails, setUserDetails] = useState ({
   
    name:'',
    title:'',
    image:'',
    slary:''

  });
   const handleChange = (event) => {
        const {
            name,
            value
        } = event.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    }

  const {isAuth} = useContext(AuthContext);
  if(!isAuth){
      return <div>
       You are not authenticated <Link to='/login'>Please Login</Link>
      </div>
   }

   const handleSubmit = (event) => {
    event.preventDefault();
    if(userDetails.name != '' && userDetails.title != '') {
        fetch('http://localhost:3004/employee', {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
           
        });
    } else {
        alert('Invalid login credentials');
    }
};
  


  return (
  
    <div>
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <input
        name="name"
        type="text"
        placeholder="name"
        value={userDetails.name}
        onChange={handleChange}
      />
      <br />
      <input
        name="title"
        type="text"
        placeholder="title"
        value={userDetails.title}
        onChange={handleChange}
      />
      <br />
      <input
        name="image"
        type="text"
        placeholder="image"
        value={userDetails.image}
        onChange={handleChange}
      />
      <input
        name="salary"
        type="text"
        placeholder="salary"
        value={userDetails.salary}
        onChange={handleChange}
      />
      <input type="submit" value="LOGIN" />
    </form>
    
    </div>
  )
}

export default Admin
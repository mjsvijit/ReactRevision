import React,{useContext} from 'react';
import { AuthContext } from './Contexts/AuthContext';
import Toggle from './Pages/Toggle';
import {
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import {
  NavBar
} from './Components/NavBar';
import {
  AboutUs
} from './Pages/About';
import {
  Contact
} from './Pages/Contact';
import {
  Users
} from './Pages/Users';
import {
  Login
} from './Pages/Login';
import {
  Home
} from './Pages/Home';
import {
  UserDetails
} from './Pages/UserDetails';
const styles ={
  backgroundColor:"black",
  color:'white',
  height:'625px'
}
const styles2={
  backgroundColor:'white',
  color:'black'
}
function App() {
  const {
    isChecked,
    
} = useContext(AuthContext);
console.log(isChecked)
  return (
    <div className="App" style={isChecked ? styles : styles2 }>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/users/:userId" element={<UserDetails />}/>
        <Route path="/Toggle" element={<Toggle />} />
      </Routes>
    </div>
  );

}

export default App;

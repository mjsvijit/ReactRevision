
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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/users/:userId" element={<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;

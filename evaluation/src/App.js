import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Login } from "./Pages/Login";
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Employees from "./Pages/Employees";
import LogOut from "./Pages/LogOut";



function App() {
  return (
    <div >
    <NavBar />
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employees />} />
        <Route path="/logout" element={<LogOut />} />
     </Routes>
  
    </div>
  );
}

export default App;

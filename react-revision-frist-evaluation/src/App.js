
import './App.css';
import One from './Pages/One';
import { Route,Routes } from 'react-router-dom';
import Two from './Pages/Two';
import NavBar from './Components/NavBar';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
         <NavBar />
                 
         <Routes>
         <Route path='/' element={<One />}/>
         <Route path='/two' element={<Two />} />
         <Route path='/user' element={<Users />}/>
         
         </Routes>
    </div>
  );
}

export default App;

import React,{useContext} from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import './Toggle.css'
const Toggle = () => {
    const {
        toggle,
        isChecked
    }= useContext(AuthContext);
  return (
    <div>
    <label className="switch">
     <input type="checkbox" defaultChecked={isChecked} onChange={()=>toggle()}/>
    <span className="slider round"></span>
    </label>
    </div>
  )
}

export default Toggle
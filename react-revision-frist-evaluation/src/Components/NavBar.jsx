import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div  style={{"backgroundColor":"black", "color":"white", "height":"60px"}}>
        <Link to='/' style={{"marginLeft":"50px"}}>ONE</Link >
        <Link to='/two'  style={{"marginLeft":"50px"}}>TWO</Link>
        <Link to='/user'  style={{"marginLeft":"50px"}}>Users</Link>
    </div>
  )
}

export default NavBar
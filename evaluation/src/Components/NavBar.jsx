import React from 'react';

import {
    Link
} from 'react-router-dom';


export const NavBar = () => {
    return (<div>
        <Link to='/'>Home</Link>
        <Link to='/admin'>Admin</Link>
        <Link to='/employee'>Employee</Link>
        <Link to='/login'>Login</Link>
        <Link to='/logout'>LogOut</Link>
    </div>);
}
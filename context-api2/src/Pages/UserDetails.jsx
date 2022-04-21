import React, { useEffect, useState } from 'react';
import {
    useParams
} from 'react-router-dom';

export const UserDetails = () => {
    const {
        userId
    } = useParams();
    const [userState, setUserState] = useState({});
    // {
    //     userId: '7'
    // }
    console.log(userId);
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((response) => response.json())
        .then(data => setUserState(data.data));
    }, []);
    return (
    <div>
       <div>{userState.email}</div>
       <div>{userId}</div>
    </div>);
}
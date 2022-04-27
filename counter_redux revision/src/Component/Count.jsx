import React from 'react';
import { useSelector } from 'react-redux';

 const Count =()=>{
     const {
         count
     }= useSelector(store=>store);

       return (
              <div>
              <h1>Count:{count}</h1>
              </div>
       );


 }

 export default Count
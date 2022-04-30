import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { incCount,decCount,resetCount } from '../../redux/counter/action';


export const Counter = () => {
  const dispatch= useDispatch();
      const {count} = useSelector((store)=> store.count);
     

  return (
    <div>
            <h1>count:{count}</h1>
            <button onClick={()=>dispatch(incCount())}>INC_COUNT</button>
            <button onClick={()=>dispatch(decCount())}>DEC_COUNT</button>
            <button onClick={()=>dispatch(resetCount())}>RESET_COUNT</button>
    
    </div>
  )
}
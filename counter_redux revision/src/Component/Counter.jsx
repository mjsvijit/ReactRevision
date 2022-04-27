import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { addCount,  addInputCount,  decCount, divCount, multiplyCount, subInputCount } from '../Redux/action'
import { store } from '../Redux/store';

const Counter = () => {
    const [getdata, setGetData]= useState(0);
    
    const {
        count
    }= useSelector(store => store);
    
  const handleChange = (event) =>{
    setGetData(event.target.value);

  }
    const handleAdd=(getdata)=>{
        store.dispatch(
            addCount(getdata)
        )
    }

    const handleDec=(getdata)=>{
      store.dispatch(
        decCount(getdata)
      )
  }

  

  const handleMul =()=>{
    store.dispatch(
      multiplyCount(getdata)
    )
  }

  const handleAddCount=()=>{
    store.dispatch(
      addInputCount(getdata)
    )
  }

  const handleSub = ()=>{
    store.dispatch(
      subInputCount(getdata)
      )
  }

  const handleDiv =()=>{
    store.dispatch(
      divCount(getdata)
    )
  }

   console.log(getdata.type)  
    console.log(count);
  return (
    <div> 
    <div>
       <button onClick={()=>handleAdd(1)}  style={{"width":"150px", "height":"50px" }}>Increment</button>
       <br />
       <button onClick={()=>handleDec(1)} disabled={ count <= 0 }  style={{"width":"150px", "height":"50px","marginTop":"50px" }}>Decrement</button>
    </div>
     <br/>
     <br/>
     <br/>

      <hr />
      <div style={{"display":"grid", "gridTemplateColumns":"1fr 1fr" , "marginTop":"100px"}}> 

      <div> 
     <input type='number' placeholder='enter value' onChange={handleChange} style={{"width":"150px","height":"50px","fontSize":"25px"}}/>
     </div>

     <div  style={{"display":"grid", "gridTemplateColumns":"1fr 1fr", "rowGap":"50px" }}> 
     
     <button onClick={()=>handleAddCount()} style={{"width":"150px", "height":"50px" }}>ADD</button>
     <button onClick={()=>handleMul()} style={{"width":"150px", "height":"50px"}} >MULTIPLY</button>
     <button onClick={()=>handleSub()} style={{"width":"150px", "height":"50px"}}>SUB</button>
     <button onClick={()=>handleDiv()} style={{"width":"150px", "height":"50px"}}>DIV</button>
     </div>   
     
     </div>

    </div>
  )
}

export default Counter
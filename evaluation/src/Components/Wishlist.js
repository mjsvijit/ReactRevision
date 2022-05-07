import React from 'react'
import "./Wishlist.css"
export const Wishlist = () => { 
     const [data, setData] = React.useState("")
     const [list, setList] = React.useState([])
     const [count, setCount] = React.useState(0);
    
     const handleChange=(e)=>{
         const {value}=e.target;
         setData(value);
     }

     const addToList =(val)=>{
         setCount(count+val);
         console.log(count); 
         const payload={
             item:data,
             status:false,
         }

         let listmaker = [...list, payload];
         setList(listmaker);
         setData("");
     }
if(count<=3){ 
  return (
   <div className='wish'>
  
        <h1>Wishlist</h1>
        <input type="text" placeholder='Input Item Here' onChange={handleChange} value={data} /><br></br>
        <button onClick={()=> {addToList(1)}}>ADD</button>

        { 
         list.map(({item,status},idx)=>(<h1 key={idx}>{item}</h1>))
        }
    </div>
   
  )
}

else{
    return(
       <div className='elsediv'>
        <h1>You cannot add more than 3 items to wishlist</h1>
        <br></br>

        <h1>Wishlist</h1>
        { 
           
            list.map(({item,status},idx)=>(<h1 key={idx}>{item}</h1>))
           }
           </div>
     
    )
}
}


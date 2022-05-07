import React from 'react';
import "./Vegitables.css";

export const Vegitables = () => {
    const [veg1, setVeg1] = React.useState(10);
     
    function vegdata1(data1){
            setVeg1(veg1 + data1);
    }

    const [veg2, setVeg2] = React.useState(8);
     
    function vegdata2(data2){
            setVeg2(veg2 + data2);
    }

    const [veg3, setVeg3] = React.useState(5);
     
    function vegdata3(data3){
            setVeg3(veg3 + data3);
    }

    const [veg4, setVeg4] = React.useState(7);
     
    function vegdata4(data4){
            setVeg4(veg4 + data4);
    }

    
  return (
      <div className="vegitable"> 
      <>
      <h1>Vegitables</h1>
    <div>
       <h1 >Tomatoes - { veg1 } kgs</h1>
       <button onClick={()=>{vegdata1(1)}}>Add</button>
       <button onClick={()=>{vegdata1(-1)}}>Sub</button>
    </div>

    <div>
       <h1 >Potatoes - { veg2 } kgs</h1>
       <button onClick={()=>{vegdata2(1)}}>Add</button>
       <button onClick={()=>{vegdata2(-1)}}>Sub</button>
    </div>

    <div>
       <h1 >Carrotes - { veg3 } kgs</h1>
       <button onClick={()=>{vegdata3(1)}}>Add</button>
       <button onClick={()=>{vegdata3(-1)}}>Sub</button>
    </div>

    <div>
       <h1 >Onions - { veg4 } kgs</h1>
       <button onClick={()=>{vegdata4(1)}}>Add</button>
       <button onClick={()=>{vegdata4(-1)}}>Sub</button>
    </div>
    </>
    </div>
  )
}
//tomatoes - 10, potatoes - 8, carrots - 5, onions - 7
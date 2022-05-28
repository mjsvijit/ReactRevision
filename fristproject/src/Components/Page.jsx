import React from 'react'
import Data from './data';
import './Page.css';

const Page = () => {
  return (
    <div className='maindiv'>
          <div>1</div>
          <div>
                <h2>5 circles</h2>
                
                <Data />
          </div>
          <div style={{alignItems:'center',marginTop:"100px"}}>
                  <h2>Text Box</h2>
              <input />
              <br />
              <button >Shoot</button>
          </div>
    </div>
  )
}

export default Page
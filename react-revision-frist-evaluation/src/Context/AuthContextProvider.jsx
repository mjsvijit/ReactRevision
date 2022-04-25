import React, { createContext, useState} from 'react'

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
  const [isAuth, setIsAuth]=useState(false);
  const [oneData,setOneData]=useState([]);
  const [list,setList]=useState([]);

     const login = (token)=>{
         setIsAuth(true);
        setOneData([token])
     }
     const updateList=(payload)=>{
         setList([...list,payload]);
     }
    
    return <AuthContext.Provider value={
        {
            isAuth,
            login,
            oneData,
            updateList,
            list
        }
    }>
    
    {children}
    
    </AuthContext.Provider>
}

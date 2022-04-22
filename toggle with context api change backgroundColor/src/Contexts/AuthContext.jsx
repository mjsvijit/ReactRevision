import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");
    const [isChecked,setIsChecked]=useState(false);

    const login = (token) => {
        setToken(token);
        setIsAuth(true);
    }

    const logOut = () => {
        setToken('');
        setIsAuth(false);
    }
    const toggle =()=>{
       
        setIsChecked(!isChecked);
       
    }
   
    

    return <AuthContext.Provider value={
        {
            isAuth,
            token,
            login,
            logOut,
            isChecked,
            toggle
        }
    }>
        {children}
    </AuthContext.Provider>
}
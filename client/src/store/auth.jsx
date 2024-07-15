import {createContext, useContext } from "react";
// 3step 
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    
     const storetokenInLS =(serverToken) =>{
        return localStorage.setItem("token",serverToken);
     }
    
    return <AuthContext.Provider value={{storetokenInLS}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth =() =>{    //custom hook start with use
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider")
    }
    return authContextValue;
}
// export default AuthProvider;

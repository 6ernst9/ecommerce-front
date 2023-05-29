import {createContext, useState} from "react";
export const LoginContext = createContext({isLogin: false, setIsLogin: (state) => {}});

export const LoginContextProvider = ({children}) =>{
    const [isLogin, setIsLogin] = useState(false);

    return (
        <LoginContext.Provider value={{isLogin, setIsLogin}}>
            {children}
        </LoginContext.Provider>
    );
}
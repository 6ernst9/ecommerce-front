import {createContext, useState} from "react";
export const UserContext = createContext({email: '', setEmail: (state) => {}});

export const UserContextProvider = ({children}) =>{
    const [email, setEmail] = useState('');

    return (
        <UserContext.Provider value={{email, setEmail}}>
            {children}
        </UserContext.Provider>
    );
}
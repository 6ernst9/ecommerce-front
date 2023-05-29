import {createContext, useState} from 'react';

export const ShoppingCartContext = createContext({
    products: [],
    setProducts: (state) => {}
});

export const ShoppingCartContextProvider = ({children}) =>{
    const [products, setProducts] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{products, setProducts}}>
            {children}
        </ShoppingCartContext.Provider>
    );
}




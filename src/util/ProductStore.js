import {createContext, useState} from 'react';

const initialProduct = 0;

export const ProductContext = createContext({
    product: initialProduct,
    setProduct: (state) => {}
});

export const ProductContextProvider = ({children}) =>{
    const [product, setProduct] = useState(initialProduct);

    return (
        <ProductContext.Provider value={{product, setProduct}}>
            {children}
        </ProductContext.Provider>
    );
}




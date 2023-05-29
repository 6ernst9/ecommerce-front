import React, {useContext, useEffect, useState} from 'react';
import './ProductPage.css';
import Navbar from "../components/NavBar";
import {ProductContext} from "../util/ProductStore";
import {ShoppingCartContext} from "../util/ShoppingCartStore";
import {getProductById} from "../api/products";

const ProductPage = () => {
    const {product} = useContext(ProductContext);
    const [thisProduct, setThisProduct] = useState({});
    const {products, setProducts} = useContext(ShoppingCartContext);

    const fetchData = async() =>{
        const response= await getProductById(product);
        console.log(response);
        setThisProduct(response.data);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    const handleAddToCart = () => {
        setProducts([...products, thisProduct]);
        console.log(products);
    };

    return (
        <div className="product-page-container">
            <Navbar/>
            <div className="product-details">
                <h3 className="product-category">{thisProduct.category}</h3>
                <h2 className="product-title">{thisProduct.name}</h2>
                <p className="product-price">${thisProduct.price}</p>
                <p className="product-description">{thisProduct.description}</p>
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductPage;
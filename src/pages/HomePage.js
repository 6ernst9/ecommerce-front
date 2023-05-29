import React, {useContext, useEffect, useState} from "react";
import ProductCard from '../components/ProductCard'
import './HomePage.css';
import {getProducts} from "../api/products";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../components/NavBar";
import { mockProducts } from "../mock/data";
import {ProductContext} from "../util/ProductStore";

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async() => {
        const response = await getProducts();
        console.log(response);
        setProducts(response.data);
    }
    useEffect( () =>{
       fetchProducts()
    }, []);

    const { setProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleProductClick = (id) =>{
        setProduct(id);
        navigate('/product');
    }

    return (
        <div className="homepage-container">
            <Navbar/>
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard onClick = {() => handleProductClick(product.id)} key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;
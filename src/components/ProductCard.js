import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
    return (
        <div className="product-card" onClick={onClick}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;
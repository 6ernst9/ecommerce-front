import React, {useContext} from 'react';
import './CartPage.css';
import Navbar from "../components/NavBar";
import {useNavigate} from "react-router-dom";
import {ShoppingCartContext} from "../util/ShoppingCartStore";
import {addOrder} from "../api/orders";
import {getByEmail} from "../api/users";
import {UserContext} from "../util/UserStore";
import {LoginContext} from "../util/LoginStore";

const CartPage = () => {
    const navigate = useNavigate();
    const { products, setProducts } = useContext(ShoppingCartContext);
    const { isLogin } = useContext(LoginContext);
    const {email} = useContext(UserContext);

    const handleConfirmOrder = async() => {
        const response = await getByEmail(email);
        const currentDate = new Date();
        const isoDateTime = currentDate.toISOString();
        let price = 0;
        products.map((product) =>{
            price+=product.price;
        })
        const cart = {
            customer: response.data,
            singleProductCart: products,
            totalCartPrice : price
        }

        const order = {
            customer: response.data,
            time: isoDateTime,
            shoppingCart: cart,
            shippingAddress: response.data.shippingAddress
        }
        const request = await addOrder(order);
        console.log(request);
        if(request.status === 201){
            setProducts([]);
            navigate('/');
        }
    };

    return (
        <div className='cart-container'>
            <Navbar />
            <h2 className="cart-title">Cart</h2>
            {products.length === 0 && isLogin ? (
                <p className="empty-cart-message">Your cart is empty.</p>
            ) : (<div>
                    <ul className="cart-items-list">
                        {products.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="product-details">
                                    <div className="product-info">
                                        <p className="product-name">{item.name}</p>
                                        <p className="product-price">${item.price}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                {isLogin &&( <button onClick={handleConfirmOrder} className="confirm-button">
                         Confirm Order
                        </button>)}
                </div>)}
            {!isLogin && (
                <p className="empty-cart-message">Login to continue shopping.</p>
            )}
        </div>
    );
};

export default CartPage;

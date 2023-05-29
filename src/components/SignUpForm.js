import React, {useContext, useState} from 'react';
import './SignUpForm.css';
import {Link, useNavigate} from "react-router-dom";
import {LoginContext} from "../util/LoginStore";
import {addCustomer} from "../api/users";

const SignupForm = () => {
    const navigate = useNavigate();
    const {isLogin, setIsLogin} = useContext(LoginContext);

    const handleLogin = () =>{
        navigate('login');
    }
    const handleSignUp = async() =>{
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            customerPhone: formData.customerPhone,
            email: formData.email,
            password: formData.password,
            shippingAddress: {
                address: formData.address,
                city: formData.city,
                zipcode: formData.zipcode,
                country: formData.country
            }
        }
        const response = await addCustomer(data);
        if(response.status === 200){
            setIsLogin(true);
            navigate('/');
        }
    }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        customerPhone: '',
        email: '',
        password: '',
        address: '',
        city: '',
        zipcode: '',
        country: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setFormData({
            firstName: '',
            lastName: '',
            customerPhone: '',
            email: '',
            password: '',
            address: '',
            city: '',
            zipcode: '',
            country: ''
        });
    };

    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="customerPhone">Phone</label>
                    <input type="text" id="customerPhone" name="customerPhone" value={formData.customerPhone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">Zip Code</label>
                    <input type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} />
                </div>
                <button onClick={handleSignUp} type="submit">Sign Up</button>
                <p>Already have an account? <p onClick={handleLogin} className='toggleBtn'>Login</p></p>
            </form>
        </div>
    );
};

export default SignupForm;

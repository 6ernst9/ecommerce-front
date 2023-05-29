import React, {useContext, useEffect, useState} from 'react';
import './AccountPage.css';
import Navbar from "../components/NavBar";
import {LoginContext} from "../util/LoginStore";
import {useNavigate} from "react-router-dom";
import {getByEmail} from "../api/users";
import {UserContext} from "../util/UserStore";

const AccountPage = () => {
    const {isLogin, setIsLogin} = useContext(LoginContext);
    const {email } = useContext(UserContext);
    const [accountDetails, setAccountDetails] = useState({});
    const navigate = useNavigate();

    async function fetchData() {
        if(isLogin) {
            const response = await getByEmail(email);
            console.log(response.data);
            setAccountDetails(response?.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleLogout = () => {
        setIsLogin(false);
    };

    const handleLogin = () =>{
        navigate('/login');
    }

    return (
        <div className="account-page">
            <Navbar/>
            {isLogin? (
                <div>
                    <h2>Account Details</h2>
                    <div className="account-details">
                    <p><strong>First Name:</strong> {accountDetails.firstName}</p>
                    <p><strong>Last Name:</strong> {accountDetails.lastName}</p>
                    <p><strong>Email:</strong> {accountDetails.email}</p>
                    <p><strong>Phone:</strong> {accountDetails.customerPhone}</p>
                    <p><strong>Address:</strong> {accountDetails.address}</p>
                    <p><strong>City:</strong> {accountDetails.city}</p>
                    <p><strong>Zipcode:</strong> {accountDetails.zipcode}</p>
                    <p><strong>Country:</strong> {accountDetails.country}</p>
                    </div>

                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>) : (
                    <div>
                        <h2>Account Details</h2>
                        <button className="logout-button" onClick={handleLogin}>Click to Login</button>
                    </div>
            )}
        </div>
    );
};

export default AccountPage;

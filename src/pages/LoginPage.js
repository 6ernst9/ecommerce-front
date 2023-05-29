import React from 'react';
import SignupForm from "../components/SignUpForm";
import './SignPage.css';
import Navbar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

const SignPage = () => {

    return (
        <div className="login-page-container">
            <Navbar/>
            <div className="login-form-container">
                <LoginForm/>
            </div>
        </div>
    );
};

export default SignPage;
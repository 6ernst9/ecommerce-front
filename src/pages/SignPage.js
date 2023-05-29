import React from 'react';
import SignupForm from "../components/SignUpForm";
import './SignPage.css';
import Navbar from "../components/NavBar";

const SignPage = () => {

    return (
        <div className="login-page-container">
            <Navbar/>
            <div className="login-form-container">
                <SignupForm/>
            </div>
        </div>
    );
};

export default SignPage;
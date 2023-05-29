import React, {useContext, useState} from 'react';
import './LoginForm.css';
import {Link, useNavigate} from "react-router-dom";
import {LoginContext} from "../util/LoginStore";
import {getByEmail} from "../api/users";
import {httpGetParamRequest} from "../util/RequestUtil";
import {UserContext} from "../util/UserStore";

const LoginForm = () => {
    const navigate = useNavigate();
    const {setIsLogin} = useContext(LoginContext);
    const {setEmail} = useContext(UserContext);
    const [emaill, setEmaill] = useState('');
    const [pass, setPass] = useState('');

    const handleSignUp = () =>{
        navigate('/signup');
    }

    const handleEmailChange = (event) =>{
        setEmaill(event.target.value);
    }

    const handlePassChange = (event) =>{
        setPass(event.target.value);
    }
    const handleLogin =async(event) => {
        event.preventDefault();
        const response = await getByEmail(emaill);

        if(response.data.password=== pass){
            setIsLogin(true);
            setEmail(emaill);
            navigate('/');
        }
    }
    return (
        <div className="login-form-container">
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input onChange={handleEmailChange}type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassChange} type="password" id="password" name="password" />
                </div>
                <button onClick={handleLogin} type="submit">Login</button>
                <p>Don't have an account? <p className='toggleBtn' onClick={handleSignUp}>Sign Up</p></p>
            </form>
        </div>
    );
};

export default LoginForm;

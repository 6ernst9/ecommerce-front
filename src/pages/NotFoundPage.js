import React from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from "../components/NavBar";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const handleHomeJump = () => {
        navigate('/');
    }
    return (
        <div className="not-found-page">
            <Navbar/>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <p>Return to <p onClick={handleHomeJump}>homepage</p></p>
        </div>
    );
};

export default NotFoundPage;

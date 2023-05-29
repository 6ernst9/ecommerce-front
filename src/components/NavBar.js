import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import SearchBar from './SearchBar';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to='/'>
                        <h1 className="navbar-title">ResellX</h1>
                    </Link>
                </div>
                <div className="navbar-right">
                    <Link to="/cart" className="navbar-icon">
                        <FaShoppingCart />
                    </Link>
                    <Link to="/account" className="navbar-icon">
                        <FaUser />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

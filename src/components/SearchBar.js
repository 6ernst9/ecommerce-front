import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default SearchBar;

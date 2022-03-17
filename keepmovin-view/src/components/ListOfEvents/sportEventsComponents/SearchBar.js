import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    
    return (
        <div className="search-bar">
            <button type="submit" className="search-button">
                <SearchIcon />
            </button>
            <input type="text" className="search-txt" placeholder="Search.." />
        </div>
    )
}

export default SearchBar;
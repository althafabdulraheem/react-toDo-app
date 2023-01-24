import React from 'react';
import './header.css';
import {Link} from "react-router-dom";
function Header() {
    return (  
        <header>
            <Link to="/">Home</Link>
            <p>|</p>
            <Link to="/about">About</Link>
        
        </header>
    );
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <Link to='/'><h1>Movie Search App</h1></Link>
        </nav>
    )
}

export default Navbar

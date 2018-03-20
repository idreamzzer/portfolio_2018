import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeClassName="selected">Home</NavLink>    
                <NavLink to="/about" activeClassName="selected">About</NavLink>    
                <NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink>    
                <NavLink to="/contact" activeClassName="selected">Contact</NavLink>    
            </nav>
        );
    }
}

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/navbar.css';

const Navbar = () => (
    <header>
        <h1>Search for summer drinks</h1>
        <NavLink to="/" activeClassName="is-active" exact>
            Home
        </NavLink>
        <NavLink to="/explorePage" activeClassName="is-active">
            Explore
        </NavLink>

    </header>
); export default Navbar;
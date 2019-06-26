import React from "react";
import './NavBar.css';
import {NavLink} from "react-router-dom";
function NavBar(){
    return (
        <nav id="menu">
            <ul>
                <li><NavLink exact to="/">.</NavLink></li>
                <li><NavLink to="/projects" >.</NavLink></li>
                <li><NavLink to="/abilities" >.</NavLink></li>
                <li><NavLink to="/education" >.</NavLink></li>
                <li><NavLink to="/sendmessage" >.</NavLink></li>
                <li><NavLink to="/socials" >.</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
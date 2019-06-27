import React from "react";
import './NavBar.css';
import {NavLink} from "react-router-dom";
function NavBar(){
    return (
        <nav id="menu">
            <ul>
                <li className="menu-li"><NavLink exact to="/">.</NavLink></li>
                <li className="menu-li"><NavLink to="/projects" >.</NavLink></li>
                <li className="menu-li"><NavLink to="/abilities" >.</NavLink></li>
                <li className="menu-li"><NavLink to="/education" >.</NavLink></li>
                <li className="menu-li"><NavLink to="/sendmessage" >.</NavLink></li>
                <li className="menu-li"><NavLink to="/socials" >.</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
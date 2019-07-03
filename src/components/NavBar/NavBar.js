import React from "react";
import './NavBar.css';
import {NavLink} from "react-router-dom";
function NavBar(){
    return (
        <>
        <nav id="menu">
            <ul id="Nav">
                <li className="menu-li"><NavLink className="menu-a" exact to="/">.</NavLink></li>
                <li className="menu-li"><NavLink className="menu-a"  to="/projects" >.</NavLink></li>
                <li className="menu-li"><NavLink className="menu-a"  to="/abilities" >.</NavLink></li>
                <li className="menu-li"><NavLink className="menu-a"  to="/education" >.</NavLink></li>
                <li className="menu-li"><NavLink className="menu-a"  to="/sendmessage" >.</NavLink></li>
                <li className="menu-li"><NavLink className="menu-a"  to="/socials" >.</NavLink></li>
            </ul>
        </nav>
        <div className="rec"></div>
        </>
    );
}

export default NavBar;
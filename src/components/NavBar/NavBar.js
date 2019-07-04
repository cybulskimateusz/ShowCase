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
        <div className="rec">
            <ul>
        <li className="rec_li">About</li>
        <li className="rec_li">Projects</li>
        <li className="rec_li">Abilities</li>
        <li className="rec_li">Education</li>
        <li className="rec_li">Send message</li>
        <li className="rec_li">Contact</li>
        </ul>
        </div>
        </>
    );
}

export default NavBar;
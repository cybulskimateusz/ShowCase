import React, {Component} from "react";
import './NavBar.css';
import {NavLink} from "react-router-dom";
import lateRealisticTyper from '../../global/lateRealisticTyper'
import ReactDOM from 'react-dom';

class NavBar extends Component{
    render(){
        return (
        <>
        <nav id="menu" className=" d-flex flex-column position-fixed">
            <ul id="Nav"className="mb-0 d-flex flex-column list-group">
                <NavLink className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle" id="about_button" exact to="/"
                    onMouseEnter={
                        function(){
                            lateRealisticTyper("Hello","#li_about",0)
                        }
                    }
                    onMouseLeave={
                        function(){
                            ReactDOM.unmountComponentAtNode(document.getElementById('li_about'))
                        }
                    }></NavLink>
                <NavLink className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle" id="projects_button" to="/projects"
                    onMouseEnter={
                        function(){
                            lateRealisticTyper("Projects","#li_projects",0)
                        }
                    }
                    onMouseLeave={
                        function(){
                            ReactDOM.unmountComponentAtNode(document.getElementById('li_projects'))
                        }
                    }></NavLink>
                <NavLink onMouseEnter={
                        function(){
                            lateRealisticTyper("Abilities","#li_abilities",0)
                        }
                    }
                    onMouseLeave={
                        function(){
                            ReactDOM.unmountComponentAtNode(document.getElementById('li_abilities'))
                        }
                    }
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle" id="abilities_button" to="/abilities" ></NavLink>
                <NavLink onMouseEnter={
                        function(){
                            lateRealisticTyper("Education","#li_education",0)
                        }
                    }
                    onMouseLeave={
                        function(){
                            ReactDOM.unmountComponentAtNode(document.getElementById('li_education'))
                        }
                    }
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle" id="education_button" to="/education" ></NavLink>
                <NavLink onMouseEnter={
                        function(){
                            lateRealisticTyper("Send message","#li_sendmessage",0)
                        }
                    }
                    onMouseLeave={
                        function(){
                            ReactDOM.unmountComponentAtNode(document.getElementById('li_sendmessage'))
                        }
                    }
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle" id="sendmessage_button" to="/sendmessage" ></NavLink>
                <NavLink onMouseEnter={
                        function(){
                            lateRealisticTyper("Socials","#li_socials",0)
                        }
                    }
                    onMouseLeave={
                        function(){
                            ReactDOM.unmountComponentAtNode(document.getElementById('li_socials'))
                        }
                    }
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle" id="socials_button" to="/socials" ></NavLink>
            </ul>
        </nav>
                    <ul id="menu_text" className="list-group d-none d-lg-flex flex-column text-right position-absolute">
                        <li id="li_about" className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_projects" className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_abilities" className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_education" className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_sendmessage" className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_socials" className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                    </ul>
        </>
    );
}
    
    
}

export default NavBar;
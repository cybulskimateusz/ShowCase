import React, {Component} from "react"
import './NavBar.css'
import {NavLink} from "react-router-dom"
import lateRealisticTyper from '../../global/lateRealisticTyper'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'





class NavBar extends Component{
    render(){
        const {color} = this.props
        return (
        <>
        <nav id="menu" className=" d-flex flex-column position-fixed">
            <ul id="Nav"className="mb-0 d-flex flex-column list-group">
                <NavLink
                    id="about_button"
                    exact to="/"
                    style={{color}}
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle"
                    activeClassName="my-bg-gray"
                    onMouseEnter={()=>{lateRealisticTyper("Hello","#li_about",0)}}
                    onMouseLeave={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('li_about'))}}
                ></NavLink>
                <NavLink
                    id="projects_button"
                    to="/projects"
                    style={{color}}
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle"
                    activeClassName="my-bg-gray"
                    onMouseEnter={()=>{lateRealisticTyper("Projects","#li_projects",0)}}
                    onMouseLeave={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('li_projects'))}}
                ></NavLink>
                <NavLink
                    id="abilities_button"
                    to="/abilities"
                    style={{color}}
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle"
                    activeClassName="my-bg-green"
                    onMouseEnter={()=>{lateRealisticTyper("Abilities","#li_abilities",0)}}
                    onMouseLeave={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('li_abilities'))}}
                ></NavLink>
                <NavLink
                    id="education_button"
                    to="/education"
                    style={{color}}
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle"
                    activeClassName="my-bg-green"
                    onMouseEnter={()=>{lateRealisticTyper("Education","#li_education",0)}}
                    onMouseLeave={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('li_education'))}}
                ></NavLink>
                <NavLink
                    id="sendmessage_button" 
                    to="/sendmessage"
                    style={{color}} 
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle" 
                    activeClassName="bg-white"
                    onMouseEnter={()=>{lateRealisticTyper("Send message","#li_sendmessage",0)}}
                    onMouseLeave={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('li_sendmessage'))}}
                ></NavLink>
                <NavLink
                    id="socials_button"
                    to="/socials"
                    style={{color}}
                    className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle"
                    activeClassName="my-bg-green"
                    onMouseEnter={()=>{lateRealisticTyper("Socials","#li_socials",0)}}
                    onMouseLeave={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('li_socials'))}}
                ></NavLink>
            </ul>
        </nav>
                    <ul id="menu_text" style={{color}} className="list-group d-none d-lg-flex flex-column text-right position-absolute">
                        <li id="li_about" style={{color}} className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_projects" style={{color}} className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_abilities" style={{color}} className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_education" style={{color}} className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_sendmessage" style={{color}} className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                        <li id="li_socials" style={{color}} className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                    </ul>
        </>
    );
}}

const mapStateToProps = (state) => {
    return { color: state.color };
  };
export default connect(mapStateToProps,{})(NavBar);
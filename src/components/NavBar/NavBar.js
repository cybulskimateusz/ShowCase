import React, {Component} from "react"
import './NavBar.css'
import {connect} from 'react-redux'
import SingleNavLink from './SingleNavLink'

class NavBar extends Component{
    state = {
        color:this.props,
        buttons:[
            {
                id:"about_button",
                exact:true,
                location:"/",
                activeClass:"my-bg-gray",
                typedText:"Hello",
                typedTextLocation:"li_about"
            },
            {
                id:"projects_button",
                exact:false,
                location:"/projects",
                activeClass:"my-bg-gray",
                typedText:"Projects",
                typedTextLocation:"li_projects"
            },
            {
                id:"abilities_button",
                exact:false,
                location:"/abilities",
                activeClass:"my-bg-green",
                typedText:"Abilities",
                typedTextLocation:"li_abilities"
            },
            {
                id:"education_button",
                exact:false,
                location:"/education",
                activeClass:"my-bg-green",
                typedText:"Education",
                typedTextLocation:"li_education"
            },
            {
                id:"sendmessage_button",
                exact:false,
                location:"/sendmessage",
                activeClass:"bg-white",
                typedText:"Send message",
                typedTextLocation:"li_sendmessage"
            },
            {
                id:"socials_button",
                exact:false,
                location:"/socials",
                activeClass:"my-bg-green",
                typedText:"Socials",
                typedTextLocation:"li_socials"
            }
        ]
    }

    componentWillReceiveProps = (props) =>{
        this.setState({color:props})
    }

    render(){
        var {color} = this.state.color
        return (
        <>
        <nav id="menu" className=" d-flex flex-column position-fixed">
            <ul id="Nav"className="mb-0 d-flex flex-column list-group">
                {this.state.buttons.map(function({id, exact, location, activeClass, typedText,typedTextLocation}){
                return (
                    <SingleNavLink
                    key={id}
                    id={id}
                    exact={exact}
                    location={location}
                    color={color}
                    activeClass={activeClass}
                    typedText={typedText}
                    typedTextLocation={typedTextLocation}
                ></SingleNavLink>
                )})}
            </ul>
        </nav>
                    <ul id="menu_text" style={{color}} className="list-group d-none d-lg-flex flex-column text-right position-fixed">
                       {this.state.buttons.map(function({typedTextLocation}){
                          return <li key={typedTextLocation} id={typedTextLocation} style={{color}} className="menu_text_li small mt-auto mr-0 mb-0 ml-auto d-block"></li>
                       })} 
                    </ul>
        </>
    );
}}

const mapStateToProps = (state) => {
    return { color: state.color };
  };
export default connect(mapStateToProps,{})(NavBar);
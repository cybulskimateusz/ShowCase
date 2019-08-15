import React from 'react'
import {NavLink} from "react-router-dom"
import lateRealisticTyper from '../../global/lateRealisticTyper'
import ReactDOM from 'react-dom'

const SingleNavLink=({id, location, color, activeClass, typedText, typedTextLocation, exact=false})=>{
    
    
    return (
        <NavLink
            id={id}
            exact={exact}
            to={location}
            style={{color}}
            className="menu-li mt-auto mr-0 mb-0 ml-auto rounded-circle"
            activeClassName={activeClass}
            onMouseEnter={()=>{lateRealisticTyper(`${typedText}`,`#${typedTextLocation}`,0)}}
            onMouseLeave={()=>{ReactDOM.unmountComponentAtNode(document.getElementById(`${typedTextLocation}`))}}
        ></NavLink>
    )
}

export default SingleNavLink
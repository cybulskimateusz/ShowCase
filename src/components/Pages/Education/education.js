import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import '../black_screen.css';
import Header from '../../Header/Header';
import NavBar_color from '../../NavBar/NavBar_color';
import { TimelineMax } from "gsap";

var width = window.innerWidth;
const tl = new TimelineMax();
class Education extends Component{
    
    render(){
        document.querySelector("html").style.backgroundColor = "#000"
        NavBar_color("#28ff00");
        document.querySelector("body").style.color="#28ff00";
        setTimeout(function(){
            tl.set("#header",{opacity:1},"-=1")
            .set("#menu",{opacity:1})
        },1000
        )
        
        return(
            <Header preText="return " text="education" postText="_"/>
        );
        
    }
}

export default Education;
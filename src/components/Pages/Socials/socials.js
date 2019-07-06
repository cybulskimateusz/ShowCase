import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import '../black_screen.css';
import Header from '../../Header/Header';
import NavBar_color from '../../NavBar/NavBar_color';
import { TimelineMax } from "gsap";

const tl = new TimelineMax();
class Socials extends Component{
    
    render(){
        NavBar_color("#28ff00");
        setTimeout(function(){
            tl.set("#header",{opacity:1},"-=1")
        },1000
        )
        document.querySelector("body").style.color="#28ff00";
        return(<div className="black_screen"><Header preText="System.out.print( " text="contact" postText=" )_"/></div>);
    }}

export default Socials;
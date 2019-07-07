import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import '../black_screen.css';
import Header from '../../Header/Header';
import NavBar_color from '../../NavBar/NavBar_color';
import { TimelineMax } from "gsap";

const tl = new TimelineMax();

var width = window.innerWidth;
class Socials extends Component{
    
    render(){
        document.querySelector("html").style.backgroundColor = "#000"
        NavBar_color("#28ff00");
        setTimeout(function(){
            tl.set("#header",{opacity:1},"-=1")
            .set("#menu",{opacity:1})
        },1000
        )
        document.querySelector("body").style.color="#28ff00";
        return(<Header preText="System.out.print( " text="contact" postText=" )_"/>);
    }}

export default Socials;
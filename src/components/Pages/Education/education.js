import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import '../black_screen.css';
import Header from '../../Header/Header';
import NavBar_color from '../../NavBar/NavBar_color';
import { TimelineMax } from "gsap";

const tl = new TimelineMax();
class Education extends Component{
    
    render(){
        NavBar_color("#28ff00");
        document.querySelector("body").style.color="#28ff00";
        setTimeout(function(){
            tl.set("#header",{opacity:1},"-=1")
        },1000
        )
        
        return(
            <div className="black_screen"><Header preText="return " text="education" postText="_"/></div>
        );
        
    }
}

export default Education;
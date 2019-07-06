import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import '../black_screen.css';
import Header from '../../Header/Header';
import NavBar_color from '../../NavBar/NavBar_color';
import { TimelineMax } from "gsap";

const tl = new TimelineMax();

class SendMessage extends Component{
    render(){
        
        NavBar_color("#fff");
        document.querySelector("body").style.color="#fff";
        setTimeout(function(){
            tl.set("#header",{opacity:1},"-=1")
        },1000
        )
        
        return(
            <div className="black_screen"><Header preText="" text="sendMessage()" postText="_"/></div>
              );
    
    }
}

export default SendMessage;
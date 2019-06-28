import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import '../black_screen.css';
import Header from '../../Header/Header';
import NavBar_color from '../../NavBar/NavBar_color';

class SendMessage extends Component{
    render(){
        
        NavBar_color("#fff");
        document.querySelector("body").style.color="#fff";
        
        return(
            <div className="black_screen"><Header preText="" text="sendMessage()" postText="_"/></div>
              );
    
    }
}

export default SendMessage;
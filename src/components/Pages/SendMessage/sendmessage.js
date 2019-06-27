import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import '../black_screen.css';
import Header from '../../Header/Header';

class SendMessage extends Component{
    
    render(){
        return(<div className="black_screen"><Header preText="" text="sendMessage()" postText="_"/></div>);
    }}

export default SendMessage;
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import '../black_screen.css';
import Header from '../../Header/Header';

class Socials extends Component{
    
    render(){
        return(<div className="black_screen"><Header preText="System.out.print( " text="contact" postText=" )_"/></div>);
    }}

export default Socials;
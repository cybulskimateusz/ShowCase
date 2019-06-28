import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import '../black_screen.css';
import Header from '../../Header/Header';
import NavBar_color from '../../NavBar/NavBar_color';

class Education extends Component{
    
    render(){
        NavBar_color("#28ff00");
        document.querySelector("body").style.color="#28ff00";
        
        return(<div className="black_screen"><Header preText="return " text="education" postText="_"/></div>);
    }}

export default Education;
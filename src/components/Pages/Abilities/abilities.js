import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import './abilities.css';
import '../black_screen.css';
import Header from '../../Header/Header';

class Abilities extends Component{
    
    render(){
        
        return(<div className="black_screen"><Header preText="SELECT * FROM " text="abilities" postText="_"/></div>);
    }}

export default Abilities;
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import './abilities.css';
import '../black_screen.css';
import Header from '../../Header/Header';
import NavBar_color from '../../NavBar/NavBar_color';

class Abilities extends Component{
    render(){
        NavBar_color("#28ff00");
        document.querySelector("body").style.color="#28ff00";
        return(
            <div className="black_screen"><Header preText="SELECT * FROM " text="abilities" postText="_"/></div>
              );
        
    }
}

export default Abilities;
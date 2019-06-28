import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import './about.css';
import NavBar_color from '../../NavBar/NavBar_color';

class About extends Component{
    
    render(){
        NavBar_color("#4d4d4d");
        
    lateRealisticTyper("sooodaaaa","about_content",1500);
    lateRealisticTyper("Hello World, I'm Matthew","about_header",0);
    
    return (
        <article id="about">
            <img className="profile_picture" src="src/profile.jpg"/>
            <section id="hello_world">
                <h1 id="about_header"></h1>
        <br></br> <p id="about_content"></p>
            </section>
            <div id="personal_data"><p><b>Name: </b>Mateusz</p><p><b>Surname: </b>Cybulski</p><p><b>Age: </b>19</p><p><b>City: </b>Łódź</p></div>
        </article>
    );
}
}
               

export default About;
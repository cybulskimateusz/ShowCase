import React , {Component} from 'react';
import lateRealisticTyper from '../../lateRealisticTyper';
import './about.css';
import NavBar_color from '../../NavBar/NavBar_color';
import './about.css'

class About extends Component{
    
    render(){
        NavBar_color("#4d4d4d");
        
    lateRealisticTyper("First, you tell me how you got it. How, where, and when. Alright, take a seat. (Marty stays standing. Biff walks over to the painting of himself. He turns to Marty.) Sit down! (Marty does) November 12th 1955, that was when. (During the following Biff reveals the painting is really a safe. He opens the safe.) November 12th 1955? That was the day I went back... (covering) that was the day of the famous Hill Valley lightning storm. You know your history, very good. I'll never forget that Saturday. I'd just picked my car up from the shop because I'd enrolled it in a drag race a few days earlier.","#about_content",1500);
    lateRealisticTyper("Hello World, I'm Matthew","#about_header",0);
    
    return (
        <article id="about">
            <img className="profile_picture" alt="Hello, It's me" src="src/profile.jpg"/>
            <section id="hello_world">
                <h1 id="about_header"> </h1>
        <br></br> <p id="about_content"></p>
            </section>
            <div id="personal_data"><p><b>Name: </b>Mateusz</p><p><b>Surname: </b>Cybulski</p><p><b>Age: </b>19</p><p><b>City: </b>Łódź</p></div>
        </article>
    );
}
}
               

export default About;
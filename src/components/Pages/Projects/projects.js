import React , {Component} from 'react';
import Header from '../../Header/Header';
import './projects.css';
import NavBar_color from '../../NavBar/NavBar_color';
import lateRealisticTyper from '../../lateRealisticTyper';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import TweenLite from 'gsap';
import scrollTo from '../../../../node_modules/gsap/ScrollToPlugin';

class Projects extends Component{
    
  render(){
      
        NavBar_color("#4d4d4d");
        document.querySelector("body").style.color="#28ff00";
      
        lateRealisticTyper("Some project",".header_project",0);
        lateRealisticTyper("You mean the future. Whatever! It demonstrates precisely how time travel can be misused and why the time machine must be destroyed - after we straighten all of this out. Right, so we go back to the future, and we stop Biff from stealing the almanac. We can't! Because, if we travel into the future from this point in time, it will be the future of this reality! (He underlines 1985-A on the board). In which Biff is corrupt, and powerful, and married to your mother; and in which this has happened to me! (He shows Marty another paper.",".description_project",1000);
         
        
    
    return (
        <ReactScrollWheelHandler
    upHandler={() => TweenLite.to("#projects", .6, {scrollTop:-window.innerHeight})}
    downHandler={() => TweenLite.to("#projects", .6, {scrollTop:window.innerHeight})}
                
    >
        <>
        
        <Header preText="import.all.my." text="projects" postText="_"/>
            
        <div className="projects"id="projects">
            <div id="project_1" className="project">
                <div className="photo_container">
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                </div>
                <div className="about_project">
                    <h1 className="header_project"></h1>
                    <br></br>
                    <p className="description_project"></p>
                </div>
            </div>
            <div id="project_2" className="project">
                <div className="photo_container">
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                </div>
                <div className="about_project">
                    <h1 className="header_project">HEGEGE</h1>
                    <br></br>
                    <p className="description_project">Oh, right, sorry. I gotta get another picture. Takes picture of tombstone. "...shot in the back by Buford Tannen over a matter of 80 dollars!" What kind of a future do you call that?! (Hill Valley Library) (The Library is obviously closed for the night, but Doc and Marty manage to break in and are going over old newspapers.) (reading from the newspaper) "Buford Tannen was a notorious gunman whose short temper and a tendency to drool earned him the nickname Mad Dog. He was quick on the trigger and bragged that he had killed 12 men, not including Indians or Chinamen."</p>
                </div> 
            </div>
        </div>

        </>
</ReactScrollWheelHandler>
    );
  
      }
  }

export default Projects;
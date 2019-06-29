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
        lateRealisticTyper("You mean the future. Whatever! It demonstrates precisely how time travel can be misused and why the time machine must be destroyed - after we straighten all of this out. Right, so we go back to the future, and we stop Biff from stealing the almanac. We can't! Because, if we travel into the future from this point in time, it will be the future of this reality! (He underlines 1985-A on the board). In which Biff is corrupt, and powerful, and married to your mother; and in which this has happened to me! (He shows Marty another paper. The headline says “Emmett Brown Committed - Crackpot Inventor Declared Legally Insane.” A side story says “Biffco To Build New Dioxin Plant” and “Nixon To Seek 5th Term.” Einstein whines as Marty takes it.) No, our only chance to repair the present is in the past, at the point where the timeline skewed into this tangent. In order to put the universe back as we remember it, and get back to our reality, we have to find out the exact date, and the specific circumstances of how, where and when, young Biff got his hands on that sports almanac. I'll ask him.",".description_project",1000);
        var projectHeight = ((window.innerHeight)*0.9);
         
        
    
    return (
        <ReactScrollWheelHandler
    upHandler={() => TweenLite.to("#projects", .2, {scrollTop:-projectHeight})}
    downHandler={() => TweenLite.to("#projects", .2, {scrollTop:projectHeight})}
                
    >
        <>
        
        <Header preText="import.all.my." text="projects" postText="_"/>
        <div className="projects"id="projects"><div id="project_1" className="project"><div className="photo_container"><img className="project_picture" alt=" " src="src/profile.jpg"/><img className="project_picture" alt=" " src="src/profile.jpg"/><img className="project_picture" alt=" " src="src/profile.jpg"/></div><div className="about_project"><h1 className="header_project"></h1><br></br><p className="description_project"></p></div></div><div id="project_2" className="project"><div className="photo_container"><img className="project_picture" alt=" " src="src/profile.jpg"/><img className="project_picture" alt=" " src="src/profile.jpg"/><img className="project_picture" alt=" " src="src/profile.jpg"/></div><div className="about_project"><h1 className="header_project"></h1><br></br><p className="description_project"></p></div></div></div>

        </>
</ReactScrollWheelHandler>
    );
  
      }
  }

export default Projects;
import React , {Component} from 'react';
import Header from '../../Header/Header';
import './projects.css';
import NavBar_color from '../../NavBar/NavBar_color';
import lateRealisticTyper from '../../lateRealisticTyper';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import TweenMax from 'gsap';
import scrollTo from '../../../../node_modules/gsap/ScrollToPlugin';
import Project from './project';
import $ from 'jquery'
class Projects extends Component{
    constructor(props){
        super(props);
        this.state={
          headers:['Project 1', 'Project 2', 'Project 3'],
          contents:['No trouble, Marshall. Just a little personal matter','Where is he? Who? Calvin Klein. Who? The guy with the hat. Where is he?','Come on, come on. (He suddenly screams into the walkie-talkie.) You better hold on to something, Doc, the yellow log'],
          initialIndex:1
      };
    }
    increment(){
        this.setState({initialIndex:this.state.initialIndex + 1},()=>{
        var init = this.state.initialIndex;
        var project_name = "#project_"+init;
        console.log(this.state.initialIndex);
       $('#projects').animate({
            scrollTop: $(project_name).offset().top - window.innerHeight*0.05
        }, 1000); 
                });
        }
    decrement(){
        this.setState({initialIndex:this.state.initialIndex - 1},()=>{
        var init = this.state.initialIndex;
        var project_name = "#project_"+init;
        console.log(project_name);
       $('#projects').animate({
            scrollTop: $(project_name).offset().top - window.innerHeight*0.05
        }, 1000); });
        }
    render(){
        
    function scrollDown(){
       } 
    function scrollUp(){
            
        }
        
        var headers = this.state.headers
        headers= headers.map(function(item, index){
                var project_name = "project_"+index
                return(
                    <div className="project" key={index} id={project_name}>
                        <div className="photo_container">
                            <img className="project_picture" alt=" " src="src/profile.jpg"/>
                            <img className="project_picture" alt=" " src="src/profile.jpg"/>
                            <img className="project_picture" alt=" " src="src/profile.jpg"/>
                        </div>
                        <div className="about_project">
                            <h1 className="header_project">{item}</h1>
                            <br></br>
                            <p className="description_project"></p>
                        </div>
                    </div>
                );
            });
        NavBar_color("#4d4d4d");
        document.querySelector("body").style.color="#28ff00";
        
       
    return (
        <ReactScrollWheelHandler
    upHandler={() => {
        this.decrement.bind(this)}}
    downHandler={() => {this.increment.bind(this)}}>
        
        <Header preText="import.all.my." text="projects" postText="_"/>
        <div className="projects"id="projects">{headers}</div>
        </ReactScrollWheelHandler>
    );
        
      }
      
  }

export default Projects;
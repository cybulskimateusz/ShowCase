import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import './projects.css';
import lateRealisticTyper from '../../lateRealisticTyper';
 
function Project(header, content,i){
    
    let iterator=i;
    let project_name='project_'+iterator+'';
    let header_name='header_project_'+iterator+'';
    let description_name='description_project_'+iterator+'';
    lateRealisticTyper(header,".header_project_"+iterator+"",0);
    lateRealisticTyper(content,".description_project_"+iterator+"",1000);
    
    document.getElementById('projects').innerHTML+="<div id="+project_name+" class='project'></div>"
    
    ReactDOM.render(
        <>
                <div className="photo_container">
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                    <img className="project_picture" alt=" " src="src/profile.jpg"/>
                </div>
                <div className="about_project">
                    <h1 className={header_name}></h1>
                    <br></br>
                    <p className={description_name}></p>
                </div> 
        </>,document.getElementById(project_name)
    );
}
export default Project;
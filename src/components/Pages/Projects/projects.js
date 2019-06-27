import React , {Component} from 'react';
import { RealisticTyper } from 'react-realistic-typer';
import Header from '../../Header/Header';
import './projects.css';

class Projects extends Component{
    
    render(){
    
    return (
        <Header preText="import.all.my." text="projects" postText="_"/>
    );
}
}
export default Projects;
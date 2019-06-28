import React , {Component} from 'react';
import Header from '../../Header/Header';
import './projects.css';
import NavBar_color from '../../NavBar/NavBar_color';
import NavBar from '../../NavBar/NavBar';
import '../../Header/Header_green.css';

class Projects extends Component{
    
    render(){
        NavBar_color("#4d4d4d");
    
    return (
        <>
        <Header preText="import.all.my." text="projects" postText="_"/>
        </>
    );
}
}
export default Projects;
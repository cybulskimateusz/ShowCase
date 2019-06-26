import React, { Component } from "react";
import NavBar from './components/NavBar/NavBar';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from './components/Pages/About/about';
import Projects from './components/Pages/Projects/projects';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <NavBar />
        <div className="content">
            <Route exact path="/" component={About}/>
            <Route path="/projects" component={Projects}/>
        </div>
        </HashRouter>
    );
  }
}
        
export default Main;
import React, { Component } from "react";
import NavBar from './components/NavBar/NavBar';
import {
  Route,
  HashRouter
} from "react-router-dom";
import About from './components/Pages/About/about';
import Projects from './components/Pages/Projects/projects';
import Abilities from './components/Pages/Abilities/abilities';
import Education from './components/Pages/Education/education';
import SendMessage from './components/Pages/SendMessage/sendmessage';
import Socials from './components/Pages/Socials/socials';
import './App.css';
import {connect} from 'react-redux'
 
class App extends Component {
  render() {
    return (
        <>
        <HashRouter>
        <div className="content" id="content">
            <Route exact path="/" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/abilities" component={Abilities}/>
            <Route path="/education" component={Education}/>
            <Route path="/sendmessage" component={SendMessage}/>
            <Route path="/socials" component={Socials}/>
        </div>
        <NavBar />
        </HashRouter>
        </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      turnGray: () => dispatch({ type: 'gray' }),
      turnGreen: () => dispatch({ type: 'green' }),
      turnWhite: () => dispatch({ type: 'white' })
    }
  };        
export default connect(null,mapDispatchToProps)(App);
import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ExchangePosts from "./ExchangePosts";
import Header from "../../Header/Header";
import "./projects.css";
import NavBar_color from "../../NavBar/NavBar_color";
import ReactScrollWheelHandler from "react-scroll-wheel-handler"; 
import TweenMax from 'gsap'; 
import scrollTo from '../../../../node_modules/gsap/ScrollToPlugin'; 

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class Projects extends Component {
  render() {
    NavBar_color("#4d4d4d");
    document.querySelector("body").style.color = "#28ff00"
    
    var currentLocation = 1;
    var nextLocation = 2;
    
    return (
      <>
        <Header preText="import.all.my." text="projects" postText="_" />
        <ReactScrollWheelHandler
            upHandler={() => {
                if(currentLocation<=nextLocation) nextLocation = currentLocation - 1
                
                var where = "#post_"+nextLocation
                TweenMax.to("#projects",.4,{scrollTo:where})
                currentLocation--
                console.log(where)
            }
                             }
            downHandler={() => {
                if(currentLocation>=nextLocation) nextLocation = currentLocation + 1
                
                var where = "#post_"+nextLocation
                TweenMax.to("#projects",.4,{scrollTo:where})
                currentLocation++
                console.log(where)
                               }}
            >
        <div id="projects" className="projects">
        <ApolloProvider client={client}>
          <ExchangePosts />
        </ApolloProvider>
            </div>
        </ReactScrollWheelHandler>
            
      </>
    );
  }
}

export default Projects;

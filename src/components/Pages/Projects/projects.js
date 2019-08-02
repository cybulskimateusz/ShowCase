import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ExchangePosts from "./ExchangePosts";
import Header from "../../Header/Header";
import "./projects.css";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { TimelineMax } from "gsap";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});
const tl = new TimelineMax();

var theHeight = window.innerHeight;

class Projects extends Component {
    constructor(props) {
      super(props);
		
      this.state = {
        isMount: false,
      }
   }
    componentDidMount=()=>{
        const tl = new TimelineMax()
        tl
            .set(".menu-li",{backgroundColor:"transparent",color:"#4d4d4d"})
            .set("html",{backgroundColor:"#fff"})
            .set("#menu_text",{color:"#4d4d4d"})
            .set("#header",{x:-600,opacity:1},"-=1")
            .set(".active",{backgroundColor:"#4d4d4d"})
            .to("#header",2,{x:0,color:"#28ff00"})
        
        setTimeout(function(){
            this.setState({
            isMount:true
        })
        }.bind(this),1000)
        
    }
    componentWillUnmount() {
    this.componentMounted = false;
  }
  render() {

    var currentLocation = 1;
    var nextLocation = 2;

    return (
      <>
        <Header preText="import.all.my." text="projects" postText="_" />
        <ReactScrollWheelHandler
          upHandler={() => {
            tl.addLabel("up")
            if (currentLocation <= nextLocation)
              nextLocation = currentLocation - 1;
            
            var whereGoNext = "#post_" + (currentLocation+1);
            var whereGo = "#post_" + nextLocation;
            var where = "#post_" + currentLocation;
            if (
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGo))
            ) {
              tl.to(where, .5, { y: ((theHeight/10)*9), opacity: 1,"z-index":1 },"up").to(whereGo, .5, {
                y: 0,
                opacity: 1,
                "z-index":2
              },"up");
                document.getElementById("post_1").style.animation = "null"
                if (
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGoNext))
            ){
                tl.set(whereGoNext, {
                y: ((theHeight/10)*9),
                opacity: 1,
                "z-index":0
              },"up").to(whereGoNext,.5, {
                y: theHeight,
                opacity: 0,
                "z-index":0
              },"up"
            )}
                
              currentLocation--;
            } else {
              if(this.state.isMount){
                  window.location.href="/#"
              }
            }
          }}
          downHandler={() => {
            tl.addLabel("down")
            document.getElementById("post_1").style.animation = "hidefirst 1s linear both"
            document.getElementById("post_2").style.animation = "none"            
            if (currentLocation >= nextLocation)
              nextLocation = currentLocation + 1;

            var where = "#post_" + currentLocation;
            var whereGo = "#post_" + nextLocation;
            var whereGoNext = "#post_" + (nextLocation+1);

            if(
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGo))
            ){
              tl.to(where, .5, { y: -theHeight, opacity: 0, "z-index":0 },"down").set(whereGo,{opacity:1, y:((theHeight/10)*9)},"down").to(whereGo,.5, {
                y: 0,
                "z-index":2
              },"down")
              if (
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGoNext))
            ){
                tl.set(whereGoNext, {
                y: theHeight,
                opacity: 0,
                "z-index":1
              },"down").to(whereGoNext,.5, {
                y: ((theHeight/10)*9),
                opacity: 1,
                "z-index":1
              },"down"
            )}
              currentLocation++;
            } else {
              if(this.state.isMount){
                  window.location.href="#/abilities"
              }
            }
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

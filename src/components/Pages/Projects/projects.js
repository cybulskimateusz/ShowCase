import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ExchangePosts from "./ExchangePosts";
import Header from "../../Header/Header";
import "./projects.css";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { TimelineMax } from "gsap";
import {connect} from 'react-redux'

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});
const tl = new TimelineMax();

var theHeight = window.innerHeight;

class Projects extends Component {

    componentDidMount=()=>{
      tl
      .set('#header',{
          x:-600,
          opacity:1  
      },"-=1")
      .to('#header',2,{ 
          x:0
      })}
      
  render() {

    var currentLocation = 1
    var nextLocation = 2
    var isMount = false
    const {turnGray} = this.props

    setTimeout(function(){isMount=true},1000)

    return (
      turnGray(),
      <>
        <Header className="my-green" preText="import.all.my." text="projects" postText="_" />
        <ReactScrollWheelHandler
          upHandler={() => {
            tl.addLabel("up")
            if (currentLocation <= nextLocation)
              nextLocation = currentLocation - 1
            
            var whereGoNext = "#post_" + (currentLocation+1);
            var whereGo = "#post_" + nextLocation;
            var where = "#post_" + currentLocation;
            if (
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGo))
                &&
                isMount) {
              tl.to(where, .1, { y: ((theHeight/10)*95), opacity: 1,"z-index":1 },"+=.1").to(whereGo, .2, {
                y: 0,
                opacity: 1,
                "z-index":2
              });
                document.getElementById("post_1").style.animation = "null"
                if (
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGoNext))
            ){
                tl.set(whereGoNext, {
                y: ((theHeight/10)*95),
                opacity: 1,
                "z-index":0
              },"up").to(whereGoNext,.1, {
                y: theHeight,
                opacity: 0,
                "z-index":0
              },"up"
            )}
                
              currentLocation--
            } else if(isMount){
                  window.location.href="/#"
            }
          }}
          downHandler={() => {
            tl.addLabel("down")
            try{
                document.getElementById("post_1").style.animation = "hidefirst .1s linear both"
                document.getElementById("post_2").style.animation = "none"   
            }catch(e){}

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
              tl.to(where, .2, { y: -theHeight, opacity: 0, "z-index":0 },"down").set(whereGo,{opacity:1, y:((theHeight/10)*95)},"down").to(whereGo,.2, {
                y: 0,
                "z-index":2
              },"down")
              if (
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGoNext))
                &&
                isMount
            ){
                tl.set(whereGoNext, {
                y: theHeight,
                opacity: 0,
                "z-index":1
              },"down").to(whereGoNext,.2, {
                y: ((theHeight/10)*95),
                opacity: 1,
                "z-index":1
              }
            )}
              currentLocation++;
            } else if(isMount){
                  window.location.href="#/abilities"
              }
          }}
        >
        <div className="d-flex h-100 position-absolute w-100 bg-white bg-white my-gray">
          <div id="projects" className="projects p-0 h-100 d-block m-0 position-absolute overflow-hidden col-12">
            <ApolloProvider client={client}>
              <ExchangePosts />
            </ApolloProvider>
          </div>
          </div>
        </ReactScrollWheelHandler>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    turnGray: () => dispatch({ type: 'gray' })
  }
};    
export default connect(null, mapDispatchToProps)(Projects);

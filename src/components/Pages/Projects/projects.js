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

class Projects extends Component {
    componentDidMount=()=>{
        const tl = new TimelineMax()
        tl
            .set(".menu-li",{backgroundColor:"transparent"})
            .set("html",{backgroundColor:"#fff"})
            .set("#menu_text",{color:"#4d4d4d"})
            .set("#menu",{color:"#4d4d4d"})
            .set("#header",{x:-600,opacity:1},"-=1")
            .set(".active",{backgroundColor:"#4d4d4d"})
            .to("#header",2,{x:0,color:"#28ff00"})
    }
  render() {

    var currentLocation = 1;
    var nextLocation = 2;

    return (
      <>
        <Header preText="import.all.my." text="projects" postText="_" />
        <ReactScrollWheelHandler
          upHandler={() => {
            if (currentLocation <= nextLocation)
              nextLocation = currentLocation - 1;
            var whereGo = "#post_" + nextLocation;
            var where = "#post_" + currentLocation;
            if (
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGo))
            ) {
              tl.to(where, 0.2, { y: 300, opacity: 0 }).to(whereGo, 0.2, {
                y: 0,
                opacity: 1
              });
                document.getElementById("post_1").style.animation = "null"
              currentLocation--;
            } else {
              return
            }
          }}
          downHandler={() => {
            document.getElementById("post_1").style.animation = "hidefirst .5s linear both"          
            if (currentLocation >= nextLocation)
              nextLocation = currentLocation + 1;

            var where = "#post_" + currentLocation;
            var whereGo = "#post_" + nextLocation;

            if (
              document
                .getElementById("projects")
                .contains(document.querySelector(whereGo))
            ) {
              tl.to(where, 0.2, { y: -300, opacity: 0 }).to(whereGo, 0.2, {
                y: 0,
                opacity: 1
              });
              currentLocation++;
            } else {
              return
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

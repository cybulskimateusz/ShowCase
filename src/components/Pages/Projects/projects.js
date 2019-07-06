import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ExchangePosts from "./ExchangePosts";
import Header from "../../Header/Header";
import "./projects.css";
import NavBar_color from "../../NavBar/NavBar_color";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import TweenMax from "gsap";
import scrollTo from "../../../../node_modules/gsap/ScrollToPlugin";
import { TimelineMax } from "gsap";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});
const tl = new TimelineMax();

class Projects extends Component {
  render() {
    NavBar_color("#4d4d4d");
    document.querySelector("body").style.color = "#28ff00";

    var currentLocation = 1;
    var nextLocation = 2;

    setTimeout(function() {
      tl.set(".project_container", { opacity: 0, y: 1000 }).to("#post_1", 1, {
        opacity: 1,
        y: 0
      });
    }, 1000);
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
              currentLocation--;
            } else {
              return
            }
          }}
          downHandler={() => {
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

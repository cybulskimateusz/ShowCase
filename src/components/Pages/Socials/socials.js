import React, { Component } from "react"
import Header from "../../Header/Header"
import "./socials.css"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeSocials from "./ExchangeSocials"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import matrixRewrite from '../../../global/matrixRewrite'
import {connect} from 'react-redux'


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class Socials extends Component {
  render() {
    var currentLocation = 0;
    var nextLocation = 1;
    const {turnGreen} = this.props;
    return (
      turnGreen(),
      <>
        <ReactScrollWheelHandler upHandler={()=>{
        window.location.href="#/sendmessage"
    }}>
    <div className="d-flex h-100 position-absolute w-100 my-green my-bg-black">
        <div className="fill-width">
        <Header preText="System.out.print( " text="contact" postText=" )_" />
        <div className="socials ml-lg-5">
          <p
            className="previous ml-5"
            id="previous"
            onClick={function() {
              if (nextLocation >= currentLocation)
                nextLocation = currentLocation - 1;

              var contact = document.querySelectorAll(".contactway");

              if (nextLocation < 0) {
                nextLocation = contact.length - 1;
                currentLocation = contact.length;
              }

              var cell = document.querySelectorAll(".cell");
              var href = contact[nextLocation].getAttribute("href");
              var name = contact[nextLocation].textContent;
              function makeid(length) {
                var result = "";
                var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                  result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                  );
                }
                return result;
              }

              matrixRewrite(0, 500, cell, makeid, name)

              document.querySelector("#contact_a").href = href;

              nextLocation--;
              currentLocation--;
            }}
          >
            &lt;-
          </p>
          <ul className="contacts p-0" >
              <li className="contact ml-3">
                <a className="contact_a" id="contact_a" href="tel:730345312">
                  <span className="cell d-inline-block" >c</span>
                  <span className="cell d-inline-block" >a</span>
                  <span className="cell d-inline-block" >l</span>
                  <span className="cell d-inline-block" >l</span>
                  <span className="cell d-inline-block" > </span>
                  <span className="cell d-inline-block" >m</span>
                  <span className="cell d-inline-block" >e</span>
                  <span className="cell d-inline-block" />
                  <span className="cell d-inline-block" />
                  <span className="cell d-inline-block" />
                  <span className="cell d-inline-block" />
                </a>
              </li>
            </ul>
          <ApolloProvider client={client}>
            <ul id="values" key="1">
              <ExchangeSocials />
            </ul>
          </ApolloProvider>
          <p
            className="next"
            id="next"
            onClick={function() {
              if (nextLocation <= currentLocation)
                nextLocation = currentLocation + 1;

              var contact = document.querySelectorAll(".contactway");

              if (nextLocation > contact.length - 1) {
                nextLocation = 0;
                currentLocation = -1;
              }

              var cell = document.querySelectorAll(".cell");
              var href = contact[nextLocation].getAttribute("href");
              var name = contact[nextLocation].textContent;
              function makeid(length) {
                var result = "";
                var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                  result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                  );
                }
                return result;
              }

              matrixRewrite(0, 500, cell, makeid, name)

              document.querySelector("#contact_a").href = href;

              nextLocation++;
              currentLocation++;
            }}
          >
            -&gt;
          </p>
          <h1 className="copy"
              onClick={function(){
                  var text = document.querySelector("#contact_a").getAttribute('href').split(':')[1]
                  var textArea = document.createElement("textarea")
                  textArea.className+="textarea"
                  document.body.appendChild(textArea)
                  textArea.value = text
                  textArea.focus()
                  textArea.select()
                  document.execCommand("copy")
                  document.body.removeChild(textArea)
                  alert("Copied!")
              }}
              >|| copy</h1>
        </div>
          </div>
          </div>
          </ReactScrollWheelHandler>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    turnGreen: () => dispatch({ type: 'green' })
  }
};    
export default connect(null, mapDispatchToProps)(Socials);
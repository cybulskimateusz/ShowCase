import React, { Component } from "react";
import "./abilities.css";
import Header from "../../Header/Header";
import ExchangeAbilities from "./ExchangeAbilities";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { TimelineMax } from "gsap";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});
const tl = new TimelineMax();
class Abilities extends Component {
    constructor(props) {
      super(props);
		
      this.state = {
        isMount: false,
      }
   }
    componentWillUnmount() {
        this.componentMounted = false;
    }
    componentDidMount=()=>{
        const tl = new TimelineMax()
        tl
            .set(".menu-li",{backgroundColor:"transparent",color:"#28ff00"})
            .set("html",{backgroundColor:"#000"})
            .set("#menu_text",{color:"#28ff00"})
            .set("body",{color:"#28ff00"})
            .set("#header",{opacity:1})
            .set(".active",{backgroundColor:"#28ff00"})
        setTimeout(function(){
            this.setState({
            isMount:true
        })
        }.bind(this),1000)
    }
  render() {
      
      var currentLocation = 0;
      var nextLocation =1;
      
    return (
        <ReactScrollWheelHandler
            upHandler={() => {
                tl.addLabel("up")
                const abilities = document.querySelectorAll(".abilitie")
                
                if (currentLocation <= nextLocation)
                    nextLocation = currentLocation - 1;
        
                if(nextLocation>=0){
                
                    if(currentLocation+2<abilities.length)
                        tl.to(abilities[currentLocation+2],.1,{opacity:.0, y:240},"up")
                        
                    if(currentLocation+1<abilities.length)
                        tl.to(abilities[currentLocation+1],.1,{opacity:.1, y:120},"up")
                        
                    tl
                        .to(abilities[currentLocation],.1,{opacity:.2, y:60},"up")
                        .to(abilities[nextLocation],.1,{opacity:1, y:0},"up")
            
                    if(nextLocation-1>=0)
                        tl.to(abilities[nextLocation-1],.3,{opacity:.3, y:-60},"up")
                       
                    if(nextLocation-2>=0)
                        tl.to(abilities[nextLocation-2],.4,{opacity:.1, y:-120},"up")
                        
                nextLocation--
             currentLocation--

        }else{
            if(this.state.isMount){
            window.location.href="#/projects"
        }}}}
        downHandler={() => {
            tl.addLabel("down")
            const abilities = document.querySelectorAll(".abilitie")
                     
            if (currentLocation >= nextLocation)
                nextLocation = currentLocation + 1;
                      
            if(nextLocation<abilities.length) {
                     
                if(currentLocation-2>=0)
                    tl.to(abilities[currentLocation-2],.1,{opacity:0, y:-240},"down")
                        
                if(currentLocation-1>=0)
                    tl.to(abilities[currentLocation-1],.1,{opacity:.1, y:-120},"down")
                       
                tl
                    .to(abilities[currentLocation],.1,{opacity:.3, y:-60},"down")
                    .to(abilities[nextLocation],.1,{opacity:1, y:0},"down")
                
                if(nextLocation+1<=abilities.length-1)
                            tl.to(abilities[nextLocation+1],.1,{opacity:.3, y:60},"down")
                        
                 if(nextLocation+2<=abilities.length-1)
                            tl.to(abilities[nextLocation+2],.3,{opacity:.1, y:120},"down")
                            
                nextLocation++
                currentLocation++
            }else{
                if(this.state.isMount){
                window.location.href="#/education"
                }}
}}
        >
        <Header preText="SELECT * FROM " text="abilities" postText="_" />
        <div id="abilities_container">
          <ul id="abilities">
            <ApolloProvider client={client}>
              <ExchangeAbilities />
            </ApolloProvider>
          </ul>
        </div>
    </ReactScrollWheelHandler>
    );
  }
}

export default Abilities;

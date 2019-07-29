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
    }
  render() {
      
      var currentLocation = 0;
      var nextLocation =1;
      
    return (
        <ReactScrollWheelHandler
            upHandler={() => {
                const abilities = document.querySelectorAll(".abilitie")
                
                if (currentLocation <= nextLocation)
                    nextLocation = currentLocation - 1;
        
                if(nextLocation>=0){
                
                    if(currentLocation+2<abilities.length)
                        tl.to(abilities[currentLocation+2],.3,{opacity:.0, y:240})
                        
                    if(currentLocation+1<abilities.length)
                        tl.to(abilities[currentLocation+1],.3,{opacity:.1, y:120})
                        
                    tl
                        .to(abilities[currentLocation],.3,{opacity:.2, y:60})
                        .to(abilities[nextLocation],.3,{opacity:1, y:0})
            
                    if(nextLocation-1>=0)
                        tl.to(abilities[nextLocation-1],.4,{opacity:.3, y:-60})
                       
                    if(nextLocation-2>=0)
                        tl.to(abilities[nextLocation-2],.5,{opacity:.1, y:-120})
                        
                nextLocation--
             currentLocation--

        }else{
            return
        }}}
        downHandler={() => {
            const abilities = document.querySelectorAll(".abilitie")
                     
            if (currentLocation >= nextLocation)
                nextLocation = currentLocation + 1;
                      
            if(nextLocation<abilities.length) {
                     
                if(currentLocation-2>=0)
                    tl.to(abilities[currentLocation-2],.2,{opacity:0, y:-240})
                        
                if(currentLocation-1>=0)
                    tl.to(abilities[currentLocation-1],.3,{opacity:.1, y:-120})
                       
                tl
                    .to(abilities[currentLocation],.4,{opacity:.3, y:-60})
                    .to(abilities[nextLocation],.4,{opacity:1, y:0})
                
                if(nextLocation+1<=abilities.length-1)
                            tl.to(abilities[nextLocation+1],.4,{opacity:.3, y:60})
                        
                 if(nextLocation+2<=abilities.length-1)
                            tl.to(abilities[nextLocation+2],.4,{opacity:.1, y:120})
                            
                nextLocation++
                currentLocation++
            }}}
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

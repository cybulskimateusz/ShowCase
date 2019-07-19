import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import Header from '../../Header/Header';
import { TimelineMax } from "gsap";
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeEducation from "./ExchangeEducation"
import './education.css'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

var width = window.innerWidth;
const tl = new TimelineMax();


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class Education extends Component{
    componentDidCatch(error, info){
        console.log(error)
    }
    componentDidMount=()=>{
        const tl = new TimelineMax()
        tl
            .set(".menu-a",{backgroundColor:"transparent"})
            .set("html",{backgroundColor:"#000"})
            .set("#menu_text",{color:"#28ff00"})
            .set("#menu",{color:"#28ff00"})
            .set("body",{color:"#28ff00"})
            .set("#header",{opacity:1})
            .set(".active",{backgroundColor:"#28ff00"})
    }
    render(){
      
      var currentLocation = 0;
      var nextLocation =1;
      
    return (
        <ReactScrollWheelHandler
            upHandler={() => {
                const abilities = document.querySelectorAll(".school")
                
                if (currentLocation <= nextLocation)
                    nextLocation = currentLocation - 1;
        
                if(nextLocation>=0){
                
                    if(currentLocation+2<abilities.length)
                        tl.to(abilities[currentLocation+2],.3,{y:600})
                        
                    if(currentLocation+1<abilities.length)
                        tl.to(abilities[currentLocation+1],.3,{y:300})
                        
                    tl
                        .to(abilities[currentLocation],.3,{y:150})
                        .to(abilities[nextLocation],.3,{y:0})
            
                    if(nextLocation-1>=0)
                        tl.to(abilities[nextLocation-1],.4,{y:-150})
                       
                    if(nextLocation-2>=0)
                        tl.to(abilities[nextLocation-2],.5,{y:-300})
                        
                nextLocation--
             currentLocation--

        }else{
            return
        }}}
        downHandler={() => {
            const abilities = document.querySelectorAll(".school")
                     
            tl.to(abilities, .4, {y:-(window.innerHeight/2)})}}
        >
            <Header preText="return " text="education" postText="_"/>
            <ul id="education" className="education">
            <ApolloProvider client={client}>
              <ExchangeEducation />
            </ApolloProvider>
          </ul>
            </ReactScrollWheelHandler>
        );
        
    }
}

export default Education;
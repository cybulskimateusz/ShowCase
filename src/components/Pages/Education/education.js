import React , {Component} from 'react';
import Header from '../../Header/Header';
import { TimelineMax } from "gsap";
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeEducation from "./ExchangeEducation"
import './education.css'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const maxHeight = window.innerHeight;
const tl = new TimelineMax();


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class Education extends Component{
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
        var li = document.querySelectorAll(".menu-li")
        
        const tl = new TimelineMax()
        tl
            .set(li,{backgroundColor:"transparent",color:"#28ff00"})
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
    render(){
      
      var currentLocation = 0;
      var nextLocation =1;
      
    return (
        <ReactScrollWheelHandler
            upHandler={() => {
        if(this.state.isMount){
                const schools = document.querySelectorAll(".school")
                
                if (currentLocation <= nextLocation)
                    nextLocation = currentLocation - 1;
                
                if(nextLocation>=0){
                    tl
                        .addLabel('up')
                        .to(schools[currentLocation],1,{y:((maxHeight/100)*45)},'up')
                        .to(schools[nextLocation],1,{y:0},'up')
                    if(currentLocation+1<=schools.length-1)
                        tl.to(schools[currentLocation+1],1,{y:(maxHeight)},'up')
                nextLocation--
             currentLocation--

        }else{
            window.location.href="#/abilities"
            }}}}
        downHandler={() => {
            if(this.state.isMount){
            const schools = document.querySelectorAll(".school")
            
            if (currentLocation >= nextLocation)
                nextLocation = currentLocation + 1;
                      
            if(nextLocation<schools.length) {
                tl
                    .addLabel('down')
                    .to(schools[currentLocation],1,{y:-maxHeight},'down')
                    .to(schools[nextLocation],1,{y:0},'down')
                if(nextLocation+1 <= schools.length-1)
                    tl.to(schools[nextLocation+1],1, {y:((maxHeight/100)*45)},'down')
                    
                nextLocation++
             currentLocation++
            }else{
                window.location.href="#/sendmessage"
                }}}}
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
import React , {Component} from 'react';
import Header from '../../Header/Header';
import { TimelineMax } from "gsap";
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeEducation from "./ExchangeEducation"
import './education.css'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import {connect} from 'react-redux'

const maxHeight = window.innerHeight;
const tl = new TimelineMax();


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class Education extends Component{

    render(){
      
      var currentLocation = 0;
      var nextLocation =1;
    var isMount = false
        const {turnGreen}= this.props
    setTimeout(function(){isMount=true},1000)
      
    return (
        turnGreen(),
        <ReactScrollWheelHandler
            upHandler={() => {
        if(isMount){
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
            if(isMount){
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
            <Header className="my-green" preText="return " text="education" postText="_"/>
            <div className="d-flex h-100 position-absolute w-100 my-bg-black my-green">
            <ul id="education" className="education my-0 mr-0 ml-1 mt-lg-2 mr-lg-auto mb-lg-auto ml-lg-5">
            <ApolloProvider client={client}>
              <ExchangeEducation />
            </ApolloProvider>
          </ul>
          </div>
            </ReactScrollWheelHandler>
        );
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      turnGreen: () => dispatch({ type: 'green' })
    }
  };    
export default connect(null, mapDispatchToProps)(Education);
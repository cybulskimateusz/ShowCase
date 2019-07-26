import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from '../../Header/Header'
import { TimelineMax } from "gsap"
import './socials.css'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ExchangeSocials from "./ExchangeSocials";
import textGenerating from "./textGenerating"
const tl = new TimelineMax();

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class Socials extends Component{
    componentDidCatch(error, info){
        console.log(error)
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
    render(){

    var currentLocation = 0
    var nextLocation = 1
        return(
            <>
            <Header preText="System.out.print( " text="contact" postText=" )_"/>
        <div className='socials'>
            <p className='previous' id='previous'
            onClick={function(){
            
                if(nextLocation>=currentLocation)
                    nextLocation = currentLocation - 1
                    
                var contact = document.querySelectorAll('.contactway')
                
                if(nextLocation<0){
                    nextLocation = contact.length-1
                    currentLocation = contact.length }
                
                var cell = document.querySelectorAll('.cell')
                var href = contact[nextLocation].getAttribute('href')
                var name = contact[nextLocation].textContent
                function makeid(length) {
                   var result           = '';
                   var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
                   var charactersLength = characters.length;
                   for ( var i = 0; i < length; i++ ) {
                      result += characters.charAt(Math.floor(Math.random() * charactersLength));
                   }
                   return result;
                }
                
                var starttime = 0
                var maxtime = 500
                
                for(var i=0;i<=10;i++){
                    
                    (function(i){
                        for(var j=starttime;j<=maxtime;j+=100){
                            
                            if(j<maxtime) setTimeout(function(){
                                cell[i].innerHTML = makeid(1)
                            },j)
                            
                            else setTimeout(function(){
                                cell[i].innerHTML = name.charAt(i)
                            },j)
                        }
                    
                })(i, maxtime)
                    starttime+=100
                    maxtime+=100
                    
                }
                
                document.querySelector('#contact_a').href = href
            
                nextLocation--
                currentLocation--
            }}
            >&lt;</p>
            <ApolloProvider client={client}>
            <ul className='contacts'>
            <li className='contact'><a className='contact_a' id='contact_a' href='#'>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          </a></li>
            </ul>
            <ul id='values'>
              <ExchangeSocials />
            </ul>
            </ApolloProvider>
            <p className='next' id='next'
            onClick={function(){
            
                if(nextLocation<=currentLocation)
                    nextLocation = currentLocation + 1
            
                var contact = document.querySelectorAll('.contactway')
                
                if(nextLocation>contact.length-1){
                    nextLocation = 0
                    currentLocation = -1}
                
                var cell = document.querySelectorAll('.cell')
                var href = contact[nextLocation].getAttribute('href')
                var name = contact[nextLocation].textContent
                function makeid(length) {
                   var result           = '';
                   var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
                   var charactersLength = characters.length;
                   for ( var i = 0; i < length; i++ ) {
                      result += characters.charAt(Math.floor(Math.random() * charactersLength));
                   }
                   return result;
                }
                
                var starttime = 0
                var maxtime = 500
                
                for(var i=0;i<=10;i++){
                    
                    (function(i){
                        for(var j=starttime;j<=maxtime;j+=100){
                            
                            if(j<maxtime) setTimeout(function(){
                                cell[i].innerHTML = makeid(1)
                            },j)
                            
                            else setTimeout(function(){
                                cell[i].innerHTML = name.charAt(i)
                            },j)
                        }
                    
                })(i, maxtime)
                    starttime+=100
                    maxtime+=100
                    
                }
                
                
                
                document.querySelector('#contact_a').href = href
            
                nextLocation++
                currentLocation++
            }}
            >&gt;</p>
            </div>
        </>);
    }}

export default Socials;
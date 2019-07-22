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
            <p className='previous' id='previous'>&lt;</p>
            <ApolloProvider client={client}>
            <ul className='contacts'>
              <ExchangeSocials />
            </ul>
            </ApolloProvider>
            <p className='next' id='next'onClick={()=>{
                 var contacts = document.querySelectorAll('.contact')
                
                if (currentLocation >= nextLocation)
                nextLocation = currentLocation + 1;
                      
            if(nextLocation<contacts.length) {
                     new TimelineMax()
                        .to(contacts[currentLocation],0,{"z-index":0,opacity:0})
                        .to(contacts[nextLocation],.1,{"z-index":1,opacity:1})
        nextLocation++
        currentLocation++
                }
        
            }}>&gt;</p>
            </div>
        </>);
    }}

export default Socials;
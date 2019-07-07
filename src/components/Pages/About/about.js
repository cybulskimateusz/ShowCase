import React , {Component} from 'react'
import './about.css'
import NavBar_color from '../../NavBar/NavBar_color'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeAbout from "./ExchangeAbout"
import { TimelineMax } from "gsap"


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});
const tl = new TimelineMax();

class About extends Component{
    
    render(){
        document.querySelector("html").style.backgroundColor = "#fff"
        NavBar_color("#4d4d4d")
        setTimeout(function(){
            tl
                .set("#personal_data",{y:500,opacity:1},"-=1")
                .set(".profile_picture",{opacity:0},"-=1")
                .to(".profile_picture",1,{opacity:1},"+=2")
                .to("#personal_data",1,{y:0})}
        ,1000)
    return (
        <ApolloProvider client={client}>
          <ExchangeAbout />
        </ApolloProvider>
    );
}
}
               

export default About;
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

class About extends Component{
    componentDidCatch(error, info){
        console.log(error)
    }
    componentDidMount=()=>{
        const tl = new TimelineMax()
        tl
            .set(".menu-a",{backgroundColor:"transparent"})
            .set("html",{backgroundColor:"#fff"})
            .set("#menu_text",{color:"#4d4d4d"})
            .set("#menu",{color:"#4d4d4d"})
            .set(".active",{backgroundColor:"#4d4d4d"})
        setTimeout(
            function(){
                tl
                .set("#personal_data",{y:500,opacity:1},"-=1")
                .set(".profile_picture",{opacity:0},"-=1")
                .to(".profile_picture",1,{opacity:1},"+=2")
                .to("#personal_data",1,{y:0})
            },1000);
    }
    
    render(){
    return (
        <ApolloProvider client={client}>
          <ExchangeAbout />
        </ApolloProvider>
    );
}
}
               

export default About;
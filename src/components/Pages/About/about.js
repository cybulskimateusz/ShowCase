import React , {Component} from 'react'
import './about.css'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeAbout from "./ExchangeAbout"
import { TimelineMax } from "gsap"
import ReactDOM from 'react-dom'


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class About extends Component{
    constructor(props) {
    super(props);
  }
    componentDidMount=()=>{
        new TimelineMax()
            .set(".menu-a",{backgroundColor:"transparent"})
            .set("html",{backgroundColor:"#fff"})
            .set("#menu_text",{color:"#4d4d4d"})
            .set("#menu",{color:"#4d4d4d"})
            .set(".active",{backgroundColor:"#4d4d4d"})
    }
    
    render(){
    return (
        <ApolloProvider client={client}>
          <ExchangeAbout/>
        </ApolloProvider>
    );
}
}
               

export default About;
import React , {Component} from 'react'
import lateRealisticTyper from '../../lateRealisticTyper'
import './about.css'
import NavBar_color from '../../NavBar/NavBar_color'
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeAbout from "./ExchangeAbout"


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class About extends Component{
    
    render(){
        NavBar_color("#4d4d4d")
    return (
        <ApolloProvider client={client}>
          <ExchangeAbout />
        </ApolloProvider>
    );
}
}
               

export default About;
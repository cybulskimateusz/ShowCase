import React , {Component} from 'react'
import './about.css'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeAbout from "./ExchangeAbout"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import themeColors from '../../../global/themeColors'


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class About extends Component{
    componentDidMount=()=>{
        themeColors('white', 'gray')
    }
    
    render(){
    return (
        <ReactScrollWheelHandler downHandler={()=>{
        window.location.href = "#/projects"
    }}>
        <div className="content">
        <ApolloProvider client={client}>
          <ExchangeAbout/>
        </ApolloProvider>
        </div>
        </ReactScrollWheelHandler>
    );
}
}
               

export default About;
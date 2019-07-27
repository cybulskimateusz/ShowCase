import React , {Component} from 'react'
import './about.css'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeAbout from "./ExchangeAbout"
import { TimelineMax } from "gsap"


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class About extends Component{
    componentWillMount() {
        this.componentMounted = false;
    }
    componentDidMount=()=>{
        new TimelineMax()
            .set(".menu-li",{backgroundColor:"transparent",color:"#4d4d4d"})
            .set("html",{backgroundColor:"#fff"})
            .set("#menu_text",{color:"#4d4d4d"})
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
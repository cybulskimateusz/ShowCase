import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import lateRealisticTyper from '../../lateRealisticTyper';
import Header from '../../Header/Header';
import { TimelineMax } from "gsap";
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeEducation from "./ExchangeEducation"
import './education.css'

var width = window.innerWidth;
const tl = new TimelineMax();


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class Education extends Component{
    componentDidCatch(error, info){
        console.log(error)
    }
    componentDidMount=()=>{
        const tl = new TimelineMax()
        tl
            .set(".menu-a",{backgroundColor:"transparent"})
            .set("html",{backgroundColor:"#000"})
            .set("#menu_text",{color:"#28ff00"})
            .set("#menu",{color:"#28ff00"})
            .set("body",{color:"#28ff00"})
            .set("#header",{opacity:1})
            .set(".active",{backgroundColor:"#28ff00"})
    }
    render(){
        
        return(
            <>
            <Header preText="return " text="education" postText="_"/>
            <ul id="education" className="education">
            <ApolloProvider client={client}>
              <ExchangeEducation />
            </ApolloProvider>
          </ul>
            </>
        );
        
    }
}

export default Education;
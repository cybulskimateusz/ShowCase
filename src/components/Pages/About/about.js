import React , {Component} from 'react'
import './about.css'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import ExchangeAbout from "./ExchangeAbout"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import {connect} from 'react-redux'


const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class About extends Component{
  render(){
    const {turnGray} = this.props
    return (
      turnGray(),
        <ReactScrollWheelHandler downHandler={()=>{
        window.location.href = "#/projects"
    }}>
        <div className="content bg-white my-gray">
        <ApolloProvider client={client}>
          <ExchangeAbout/>
        </ApolloProvider>
        </div>
        </ReactScrollWheelHandler>
    );
}
}
               
const mapDispatchToProps = (dispatch) => {
  return {
    turnGray: () => dispatch({ type: 'gray' })
  }
};    
export default connect(null, mapDispatchToProps)(About);
import React, { Component } from "react"
import "./abilities.css"
import Header from "../../Header/Header"
import ExchangeAbilities from "./ExchangeAbilities"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { Scrollbars } from 'react-custom-scrollbars'
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import themeColors from '../../../global/themeColors'

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxlm9rgg00bi01hwbfp58wps/master"
});

class Abilities extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            top: 0,
            isMount:false
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    
    handleUpdate(values) {
        const { top } = values;
        this.setState({ top });
    }
    
    componentDidMount=()=>{
        
        
        setTimeout(function(){
            this.setState({
                isMount:true
            })
        }.bind(this),1000)
    }
    render() {
        themeColors('black', 'green', 2)
        return (
            <>
            <ReactScrollWheelHandler
                upHandler={()=>{
                    if(this.state.isMount){
                        if(this.state.top<=0)
                            window.location.href="#/projects"
                    }}}
                downHandler={()=>{
                    if(this.state.isMount){
                        if(this.state.top>=1)
                            window.location.href="#/education"
                    }}}
            >
            <Header preText="SELECT * FROM " text="abilities" postText="_" />
            <div className="d-flex h-100 position-absolute w-100">
            <Scrollbars onUpdate={this.handleUpdate}>
            <div id="abilities" className="position-absolute text-center w-100">
                <ApolloProvider client={client}>
                  <ExchangeAbilities />
                </ApolloProvider>
            </div>
            </Scrollbars>
            </div>
            </ReactScrollWheelHandler>
            </>
        );
  }
}

export default Abilities;

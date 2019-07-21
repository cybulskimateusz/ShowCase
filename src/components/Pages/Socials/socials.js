import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from '../../Header/Header'
import { TimelineMax } from "gsap"
import './socials.css'

const tl = new TimelineMax();

var width = window.innerWidth;
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
        return(
            <>
            <Header preText="System.out.print( " text="contact" postText=" )_"/>
        <p className="contact">ABCDEFGHIJKL</p>
        </>);
    }}

export default Socials;
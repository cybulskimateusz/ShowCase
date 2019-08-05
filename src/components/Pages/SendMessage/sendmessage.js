import React, { Component } from "react";
import Header from "../../Header/Header";
import { TimelineMax } from "gsap";
import Terminal from "terminal-in-react";
import "./sendmessage.css";
import axios from 'axios'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


class SendMessage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
      isMount:false
    };
  }
    componentWillUnmount() {
    this.componentMounted = false;
  }
    componentDidMount=()=>{
        var li = document.querySelectorAll(".menu-li")
        const tl = new TimelineMax()
        tl
            .set(li,{backgroundColor:"transparent",color:"#fff"})
            .set("html",{backgroundColor:"#000"})
            .set("#menu_text",{color:"#fff"})
            .set("body",{color:"#fff"})
            .set("#header",{opacity:1})
            .set(".active",{backgroundColor:"#fff"})
    setTimeout(function(){
            this.setState({
            isMount:true
        })
        }.bind(this),1000)
    }
  render() {

    const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

    return (
      <>
        <ReactScrollWheelHandler downHandler={()=>{
        if(this.state.isMount){
        window.location.href="#/socials"
        }}}
 upHandler={()=>{
            if(this.state.isMount){
            window.location.href="#/education"
           }}}>
        <Header preText="" text="sendMessage()" postText="_" />
          <Terminal
            descriptions={{
        'send':'send message',
        'resume':'show my resume',
        'edit-mail':'edit typed mail',
        'thank':'My pleasure',
        'thanks':'My pleasure'
        }}
            commands={{
              send: {
                method: (args, print, runCommand) => {
                  if (this.state.email !== "") {
                      var text = ""
                      for(var i=0; i<=(args._.length-1);i++){
                          var tmp = ` ${args._[i] || args.send}`
                                 text+=tmp
                                
                        }
                    this.setState({ message: text });
                    axios.post("https://app.99inbound.com/api/e/4ieHVnW2",{
                        email:this.state.email.toString(),
                        message:text.toString()
                    }).then(function(){print("Your message has sent")})
                  } else print("Type your e-mail adress");
                },
                options: [
                  {
                    name: "send",
                    description: "Sends me your text"
                  }
                ]
              },
              resume: {
                method: (args, print, runCommand) => {
                  if (this.state.email !== "") {
                      axios.post("https://app.99inbound.com/api/e/4ieHVnW2",{
                        message:`User >>>${this.state.email.toString()}<<< asked for your resume`
                    })
                      var win = window.open("files/resume.pdf", '_blank');
                      win.focus();
                      print("This is my resume")
                  } else print("Type your e-mail adress");
                },
                options: [
                  {
                    name: "resume",
                    description: "show my resume"
                  }
                ]
              },
              "edit-mail": {
                method: (args, print, runCommand) => {
                  this.setState({ email: "" });
                  print("Type new e-mail adress");
                },
                options: [
                  {
                    name: "edit-mail",
                    description: "if you wrote wrong a e-mail adress"
                  }
                ]
              },
              thank: {
                method: (args, print, runCommand) => {
                  print("My pleasure");
                }
              },
            thanks: {
                method: (args, print, runCommand) => {
                  print("My pleasure");
                }
              }
            }}
            color="#fff"
            id="form"
            msg="To send me a mail, or get my resume you have to write your e-mail adress down here"
            commandPassThrough={(cmd, print) => {
              if (mailReg.test(cmd)) {
                this.setState({ email: cmd });
                print("");
                print(`Your adress is correct. Now tell me what do you want:`);
                print("");
                print("resume   -   you will get my resume");
                print("send [mail content]  -   you will send me a mail (without [])");
                print("edit-mail  -   if you wrote a wrong e-mail edress");
                print("");
              } else print(`-PassedThrough:${cmd}: is not correct`);
            }}
          />
 </ReactScrollWheelHandler>
      </>
    );
  }
}

export default SendMessage;

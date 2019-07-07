import React, { Component } from "react";
import ReactDOM from "react-dom";
import lateRealisticTyper from "../../lateRealisticTyper";
import "../black_screen.css";
import Header from "../../Header/Header";
import NavBar_color from "../../NavBar/NavBar_color";
import { TimelineMax } from "gsap";
import Terminal from "terminal-in-react";
import "./sendmessage.css";

const tl = new TimelineMax();

var width = window.innerWidth;
class SendMessage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: ""
    };
  }
  render() {
    document.querySelector("html").style.backgroundColor = "#000";
    NavBar_color("#fff");
    document.querySelector("body").style.color = "#fff";
    setTimeout(function() {
      tl.set("#header", { opacity: 1 }, "-=1").set("#menu", { opacity: 1 });
    }, 1000);

    const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

    return (
      <>
        <Header preText="" text="sendMessage()" postText="_" />
        <div>
          <Terminal
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
                    print("Your mail is sent");
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
                  if (this.state.email != "") {
                    print("You'll get my resume in a bit");
                  } else print("Type your e-mail adress");
                },
                options: [
                  {
                    name: "resume",
                    description: "Sends you my resume"
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
              consoling: {
                method: (args, print, runCommand) => {
                  console.log(this.state.email.toString());
                  print(this.state.message.toString());
                },
                options: [
                  {
                    name: "resume",
                    description: "Sends you my resume"
                  }
                ]
              }
            }}
            color="#fff"
            id="form"
            msg="To send me a mail you have to write your e-mail adress down here"
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
        </div>
      </>
    );
  }
}

export default SendMessage;

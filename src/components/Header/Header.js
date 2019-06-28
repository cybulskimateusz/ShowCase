import React from 'react';
import './Header.css';
import '../../App.css';
import { RealisticTyper } from 'react-realistic-typer';
import lateRealisticTyper from '../lateRealisticTyper';

function Header({preText, text, postText, color}){
    let pretext = ''+preText+'';
    let maintext = ''+text+'';
    let posttext = ''+postText+'';
    
    lateRealisticTyper(pretext,"preText",0);
    lateRealisticTyper(maintext,"text",500);
    lateRealisticTyper(posttext,"postText",500);
    
    return (
        <header id="header">
            <div className="header_relative">
                <p className="text_header"><span id="preText"></span><b><span id="text"></span></b><span id="postText"></span></p>
            </div>
        </header>
    );
}

export default Header;
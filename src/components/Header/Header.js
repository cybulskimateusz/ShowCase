import React from 'react';
import './Header.css';
import '../../App.css';
import { RealisticTyper } from 'react-realistic-typer';

function Header({preText, text, postText}){
    return (
        <header id="header">
            <div className="header_relative">
                <p className="text_header">{preText}<b>{text}</b>{postText}</p>
            </div>
        </header>
    );
}

export default Header;
import React from 'react';
import './Header.css';
import '../../App.css';
import lateRealisticTyper from '../../global/lateRealisticTyper'

function Header({preText, text, postText}){
    let pretext = ''+preText+'';
    let maintext = ''+text+'';
    let posttext = ''+postText+'';
    
    lateRealisticTyper(pretext,"#preText",2000);
    lateRealisticTyper(maintext,"#text",3000);
    lateRealisticTyper(posttext,"#postText",4000);
    
    return (
        <header id="header" class="h-100 my-0 ml-0 mr-auto position-absolute d-lg-flex d-none">
            <div className="d-flex position-relatve w-100 h-100">
                <p className="text_header mt-auto mr-auto mb-4 ml-1 w-100"><span className="h2"id="preText"></span><b><span className="h2 font-weight-bolder" id="text"></span></b><span className="h2" id="postText"></span></p>
            </div>
        </header>
    );
}

export default Header;
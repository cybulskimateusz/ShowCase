import ReactDOM from 'react-dom';
import { RealisticTyper } from 'react-realistic-typer';
import React from 'react';


function lateRealisticTyper(what,where,when){
    setTimeout(function(){
    let message=``+what+``;
    let location=''+where+'';
    ReactDOM.render(
        
     <RealisticTyper message={message} wpm="10000" maxPause="100"/>,
     document.getElementById(location)
    );
},when);
}

export default lateRealisticTyper;
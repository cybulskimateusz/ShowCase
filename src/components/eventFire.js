import ReactDOM from 'react-dom';
import { RealisticTyper } from 'react-realistic-typer';
import React from 'react';

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
export default eventFire;
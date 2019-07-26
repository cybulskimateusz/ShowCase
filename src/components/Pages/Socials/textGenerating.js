import TimelineMax from 'gsap'
import React from 'react'
import ReactDOM from 'react-dom'
    

function textGenerating(stringTable, where){
    
    ReactDOM.render(<div id='cells'></div>, document.querySelector(where))
    
    var cellsAmount = 0
    var nextIndex   = 1
    
    for(var i=0;i<stringTable.length;i++){
        
        var tmpString = new String(stringTable[i])
        
        if( tmpString.length > cellsAmount)
            cellsAmount = tmpString.length
    }
    for(var i=0; i<cellsAmount; i++){
        ReactDOM.render(<span className='cell'></span>, document.querySelector('#cells'))
    }
    document.querySelector('#next').click(
        function(){
            var tmpString = new String(stringTable[nextIndex])
            var firstCellIndex = Math.floor((tmpString.length % cellsAmount)/2)
            
            for(var i=firstCellIndex;i<=tmpString.length;i++){
                var cells = document.querySelectorAll('.cell')
                
                cells[i].innerHTML = tmpString.charAt(i)
                
            }
        })
}

export default textGenerating
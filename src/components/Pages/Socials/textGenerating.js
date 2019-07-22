import TimelineMax from 'gsap'
    

function textGenerating(){
    var currentLocation=0
    var nextLocation=1
    
        if(document.contains(document.querySelector('.contact'))){
            var contacts = document.querySelectorAll('.contact')
        
        if (currentLocation >= nextLocation)
            nextLocation = currentLocation + 1;
        
        new TimelineMax()
            .to(contacts[currentLocation],0,{"z-index":0,opacity:0})
            .to(contacts[nextLocation],0,{"z-index":1,opacity:1})
        
        nextLocation++
        currentLocation++}
}

export default textGenerating
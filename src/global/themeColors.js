import { TimelineMax } from "gsap"

var switchColor = (expr) => {
    switch(expr){
        case 'white':
            return '#fff'
        case 'green':
            return '#28ff00'
        case 'gray':
            return '#4d4d4d'
        case 'black':
            return '#000'
        default:
            return expr
    }
}

function themeColors(bgColor, themeColor, headerAction, headerColor=themeColor){
    var tl      = new TimelineMax()
    
    var nav     = ['.menu-li', '#menu_text']
    var root    = ['#root', 'body', 'html']
    var header  = '#header'
    
    tl
        .set(root,{
            color:switchColor(themeColor),
            backgroundColor:switchColor(bgColor)
        })
        .set(nav,{
            color:switchColor(themeColor)
        })
    
    switch(headerAction){
        case 1:
            tl
                .set(header,{
                    x:-600,
                    opacity:1  
                },"-=1")
                .to(header,2,{ 
                    x:0,
                    color:switchColor(headerColor)
                })
        break;
        case 2:
            tl.set(header,{
                opacity:1,
                color:switchColor(headerColor)
            })
        break;
        default:
            return
    }
}

export default themeColors
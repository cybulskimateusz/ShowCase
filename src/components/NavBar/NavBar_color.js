function NavBar_color(color){
        if(document.contains(document.querySelector(".active"))){
        document.querySelector(".active").style.backgroundColor="transparent";
        }
            setTimeout(function(){
        document.querySelector(".active").style.backgroundColor=color;
        document.getElementById("menu").style.color=color;
        document.getElementById("menu_text").style.color=color;
            },100)
    }

export default NavBar_color;
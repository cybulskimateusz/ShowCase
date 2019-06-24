import React from 'react';
import { RealisticTyper } from 'react-realistic-typer';
import './App.css';
import Radium, {StyleRoot} from 'radium';

function App() {
  return (
      <>
      <NavBar/>
      <About 
      header="Hello World, I'm Matthew" 
      content="Mentitum eu dolore. Iis ullamco do pariatur hic mandaremus se elit expetendis. Laboris ea magna appellat non in varias sint quae doctrina. Quid nam ullamco, elit ut laborum de hic dolor iis nisi o noster aliquip ab iudicem. Nisi ita admodum de tamen quo eiusmod transferrem ad offendit, illum ex quamquam, excepteur amet admodum. Ab sed exquisitaque, ut enim nostrud, velit probant pariatur ex est sunt domesticarum. Ea litteris et occaecat, esse et possumus, est minim incurreret, id multos labore ex eiusmod."
      age="19"
      name="Mateusz"
      surname="Cybulski"
      city="Łódź"
      />
      </>
    );
}
function AppHeader({preText, text, postText}){
    return (
        <header id="header">
            <div className="header_relative">
                <p className="text_header">{preText}<b>{text}</b>{postText}</p>
            </div>
        </header>
    );
}
function NavBar(){
    return (
        <nav id="menu">
            <ul>
                <li className="default_color"> </li>
                <li className="unactive_button default_color"> </li>
                <li className="unactive_button default_color"> </li>
                <li className="unactive_button default_color"> </li>
                <li className="unactive_button default_color"> </li>
                <li className="unactive_button default_color"> </li>
            </ul>
        </nav>
    );
}
function About({header, content, name, surname, age, city}){
    return (
        <article id="about">
            <img className="profile_picture" src="src/profile.jpg"/>
            <section id="hello_world">
                <h1><RealisticTyper message={header}/></h1>
                <br></br> <p><RealisticTyper message={content} maxPause="100" wpm="200"/></p>
            </section>
            <div id="personal_data"><p><b>Name: </b>{name}</p><p><b>Surname: </b>{surname}</p><p><b>Age: </b>{age}</p><p><b>City: </b>{city}</p></div>
        </article>
    );
}
export default App;

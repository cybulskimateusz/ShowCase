import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { RealisticTyper } from 'react-realistic-typer';

class About extends Component{
    
    render(){
        
    setTimeout(writeContent,1500);
    
    return (
        <article id="about">
            <img className="profile_picture" src="src/profile.jpg"/>
            <section id="hello_world">
                <h1><RealisticTyper message="Hello World, I'm Matthew" wpm="10000" maxPause="0"/></h1>
        <br></br> <p id="about_content"></p>
            </section>
            <div id="personal_data"><p><b>Name: </b>Mateusz</p><p><b>Surname: </b>Cybulski</p><p><b>Age: </b>19</p><p><b>City: </b>Łódź</p></div>
        </article>
    );
}
}

function writeContent(){
    ReactDOM.render(
     <RealisticTyper message="Non anim consequat laboris ex velit doctrina sed cillum quae, quis quibusdam aut quae quis quo aliqua fidelissimae expetendis sunt expetendis, a velit quamquam nostrud, e mentitum imitarentur eu noster incurreret o praetermissum ne excepteur irure ubi proident reprehenderit. Nescius sed consequat ab ubi ex quid quorum quae ut hic nulla " wpm="10000" maxPause="100"/>,
     document.getElementById("about_content"));
}

export default About;
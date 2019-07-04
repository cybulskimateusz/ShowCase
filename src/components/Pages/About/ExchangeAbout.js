import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import React from "react";
import lateRealisticTyper from '../../lateRealisticTyper';

const ExchangeAbout = () => (
  <Query
    query={gql`
{
	abouts(where:{id:"cjxopkjixoi260d538urs4tlz"}){
    id
    header
    content
    name
    surname
    age
    city
    profilephoto{
      handle
    }
  }
}
    `}
  >
    {({ loading, error, data }) => {
        
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error </p>;
      
      return data.abouts.map(({ id,name, surname, age, city, profilephoto}) => (
          <article id="about" key={id}>
            <img src={`https://media.graphcms.com/${profilephoto.handle}`} className="profile_picture" alt="Hello, It's me" />
            <section id="hello_world">
                <h1 id="about_header"></h1>
        <br></br> <p id="about_content"></p>
            </section>
            <div id="personal_data"><p><b>Name: </b>{name}</p><p><b>Surname: </b>{surname}</p><p><b>Age: </b>{age}</p><p><b>City: </b>{city}</p></div>
              {
                  data.abouts.map(function({header, content}){
                      lateRealisticTyper(header.toString(),"#about_header",0)
                      lateRealisticTyper(content.toString(),"#about_content",2500)
                  })
              }
        </article>
        ));
            
    }}
  </Query>
);

export default ExchangeAbout;

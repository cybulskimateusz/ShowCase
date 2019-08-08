import { gql } from "apollo-boost"
import { Query } from "react-apollo"
import React from "react"
import lateRealisticTyper from '../../../global/lateRealisticTyper'
import './about.css'

const ExchangeAbout = () => (
  <Query
    query={gql`
      {
        abouts(where: { id: "cjxopkjixoi260d538urs4tlz" }) {
          id
          header
          content
          name
          surname
          age
          city
          profilephoto {
            handle
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div className='loadercontainer'><div className='loader'></div></div>
      if (error) return <p>Error :-( </p> 

      return data.abouts.map(
        ({ id, name, surname, age, city, profilephoto }) => (
          <article id="about" key={id}>
            <img
              src={`https://media.graphcms.com/${profilephoto.handle}`}
              className="profile_picture"
              alt="Hello, It's me"
            />
            <section id="hello_world">
              <h1 id="about_header">  </h1>
              <br /> <p id="about_content" />
            </section>
            <div id="personal_data">
              <p className="name">
                <b>Name: </b>
                {name}
              </p>
              <p className="surname">
                <b>Surname: </b>
                {surname}
              </p>
              <p className="age">
                <b>Age: </b>
                {age}
              </p>
              <p className="city">
                <b>City: </b>
                {city}
              </p>
            </div>
            {data.abouts.map(function({ header, content }) {
              lateRealisticTyper(header.toString(), "#about_header", 0);
              lateRealisticTyper(content.toString(), "#about_content", 2500);
              return console.log("© Mateusz Cybulski - All rights Reserved");
            })}
          </article>
        )
      );
    }}
  </Query>
);

export default ExchangeAbout;

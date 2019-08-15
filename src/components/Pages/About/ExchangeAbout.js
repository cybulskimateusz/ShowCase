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
        ({ id, name, surname, city, profilephoto }) => (
          <>
          <article id="about" className="col-12 p-0" key={id}>
            <img
              className="profile_picture mb-2 mb-lg-4 mx-auto row rounded-circle"
              src={`https://media.graphcms.com/${profilephoto.handle}`}
              alt="Hello, It's me"
            />
            <section id="hello_world" className="col-10 col-lg-8 mx-auto d-flex flex-column p-0">
              <h2 id="about_header"className='text-center mb-2 mb-lg-4'>  </h2>
              <h4 className='p-0'><small id="about_content"></small></h4>
            </section>
            {data.abouts.map(function({ header, content }) {
              lateRealisticTyper(header.toString(), "#about_header", 0);
              lateRealisticTyper(content.toString(), "#about_content", 2500);
              return console.log("© Mateusz Cybulski - All rights Reserved");
            })}
          </article>
          
          <div id="personal_data" className='p-0 d-inline-flex flex-lg-row fixed-bottom mb-lg-4 col-lg-12 mb-3'>
          <p className="name my-0 mx-auto d-inline">
            <b className="my-0 mx-auto d-inline">Name: </b>
            {name}
          </p>
          <p className="surname my-0 mx-auto d-inline">
            <b className="my-0 mx-auto d-inline">Surname: </b>
            {surname}
          </p>
          <p className="age my-0 mx-auto d-inline">
            <b className="my-0 mx-auto d-inline">Age: </b>
            {calculate_age(new Date(1999, 10, 9))}
          </p>
          <p className="city my-0 mx-auto d-inline">
            <b className="my-0 mx-auto d-inline">City: </b>
            {city}
          </p>
        </div>
        </>
        )
      );
    }}
  </Query>
);

function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
export default ExchangeAbout;

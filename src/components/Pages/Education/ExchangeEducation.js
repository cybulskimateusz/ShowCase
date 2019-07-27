import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import React from "react";


const ExchangeEducation = () => (
  <Query
    query={gql`
      {
  educations{
    id,
    school,
    date,
    more,
  }
}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div className='loadercontainer'><div className='loader'></div></div>
      if (error) return <p>Error :-( </p> 

      return data.educations.map(
        ({ id, school, date, more}) => (
         <li className="school" key={id}>
            <p className="schoolname">{school}</p>
            <p className="date">{date}</p>
            <p className="description">{more}</p>
            </li>
        )
      );
    }}
  </Query>
);

export default ExchangeEducation;

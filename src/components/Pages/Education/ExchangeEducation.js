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
         <li className="school w-75 ml-lg-5" key={id}>
            <h2 className="schoolname font-weight-bolder">{school}</h2>
            <h2 className="date">{date}</h2>
            <h3 className="description font-weigh-lighter">{more}</h3>
            </li>
        )
      );
    }}
  </Query>
);

export default ExchangeEducation;

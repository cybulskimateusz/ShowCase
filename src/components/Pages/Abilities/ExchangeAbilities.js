import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import React from "react";

const ExchangeAbilities = () => (
  <Query
    query={gql`
      {
  abilitieses {
    id
		text
  }
}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div className='loadercontainer'><div className='loader'></div></div>
      if (error) return <p>Error :-( </p> 

      return data.abilitieses.map(
        ({ id, text }) => (
            <li className="abilitie position-relative w-100" key={id}>{text}</li>
        )
      );
    }}
  </Query>
);

export default ExchangeAbilities;

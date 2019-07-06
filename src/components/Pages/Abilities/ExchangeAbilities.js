import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import React from "react";
import lateRealisticTyper from "../../lateRealisticTyper";

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
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error </p>;

      return data.abilitieses.map(
        ({ id, text }) => (
            <li className="abilitie" key={id}>{text}</li>
        )
      );
    }}
  </Query>
);

export default ExchangeAbilities;

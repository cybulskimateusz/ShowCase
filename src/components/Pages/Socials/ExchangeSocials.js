import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import React from "react";

const ExchangeSocials = () => (
  <Query
    query={gql`
    {
  contacts{
    name,
    link,
    tag
    }
    }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p className="load">Loading...</p>;
      if (error) return <p>Error </p>;

      return data.contacts.map(({ name, link, id,tag }) => (
        <li className='contact' id={tag} key={id}><a href={link}>{name}</a></li>
      ));
    }}
  </Query>
);

export default ExchangeSocials;

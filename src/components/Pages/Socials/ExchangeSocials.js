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
      if (error) return <p>lol</p>;

      return data.contacts.map(({ name, link, id,tag }) => (
        <div>
        <a className='contactway'href={link} key={id}>{name}</a>
          </div>
      ));
    }}
  </Query>
);

export default ExchangeSocials;

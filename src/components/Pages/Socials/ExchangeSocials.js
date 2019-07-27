import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import React from "react";

const ExchangeSocials = () => (
  <Query
    query={gql`
      {
        contacts {
          name
          link
          tag
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div className='loadercontainer'><div className='loader'></div></div>
      if (error) return <p>Error :-( </p> 

      return data.contacts.map(({ name, link, id, tag }) => (
        <div key={id}>
          <a className="contactway" href={link}>
            {name}
          </a>
          
        </div>
      ));
    }}
  </Query>
);

export default ExchangeSocials;

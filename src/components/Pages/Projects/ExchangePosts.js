import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import React from "react";

const ExchangePosts = () => (
  <Query
    query={gql`
      {
	posts{
    id
    title
    content
    image1{
      handle
    }
    image2{
      handle
    }
    image3{
      handle
    }
    number
  }
}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.posts.map(({ id, title, content, image1, image2, image3, number }) => (
          <div className="project_container" key={id} id={`post_${number}`}>
          <div className="project" >   
                
                <div className="photo_container">                         
                
                <img className="project_picture" src={`https://media.graphcms.com/${image1.handle}`}/>
                <img className="project_picture" src={`https://media.graphcms.com/${image2.handle}`}/>
                <img className="project_picture" src={`https://media.graphcms.com/${image3.handle}`}/>

                </div>
                <div className="about_project">                
                <h1 className="header_project">{title}</h1>     
                <br></br>                   
                <p className="description_project">{content}</p>        
                </div>                    
          </div>
          </div>
      ));
    }}
  </Query>
);

export default ExchangePosts;

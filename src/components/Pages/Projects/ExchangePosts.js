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
    number
    link
  }
}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div className='loadercontainer'><div className='loader'></div></div>
      if (error) return <p>Error :-( </p> 

      return data.posts.map(({ id, title, content, image1, image2, image3, number, link }) => (
          <div className="project_container h-100 d-block m-0 p-0 position-absolute overflow-hidden col-12" key={id} id={`post_${number}`}>
<a href={link} title="Click to go!">
          <div className="project p-0 h-100 w-100 d-flex flex-column flex-md-row position-relative overflow-hidden col-12 my-1 mx-0 col-md-10 ml-md-5 mt-md-0 mt-md-1" >   
                
                <div className="photo_container d-flex h-100 flex-column my-0 mr-auto col-11 col-md-4 p-0 ml-md-5">                         
                
                <img alt=""className="project_picture d-md-block border mt-1 mr-auto mb-1 ml-1 m-md-auto h-25 w-100 position-relative" src={`https://media.graphcms.com/${image1.handle}`}/>
                <img alt=""className="project_picture d-none d-md-block border m-auto h-25 mw-100" src={`https://media.graphcms.com/${image2.handle}`}/>

                </div>
                <div className="about_project h-100 p-0 mr-auto ml-md-5 ml-0 my-0">                
                <h1 className="font-weight-bolder mb-3 mt-md-3 mt-5 mb-4 w-75 w-md-auto">{title}</h1>                 
                <p className="description_project font-weight-normal h5">{content}</p>        
                </div>                    
          </div>
          </a>
          </div>
      ));
    }}
  </Query>
);

export default ExchangePosts;

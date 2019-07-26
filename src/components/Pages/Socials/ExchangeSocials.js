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
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p className="load">Loading...</p>;
      if (error) return <p>lol</p>;

      return data.contacts.map(({ name, link, id, tag }) => (
        <div>
          <a className="contactway" href={link} key={id}>
            {name}
          </a>
          {data.contacts.map(function({ tag, name, link }) {
            if (tag.toString() === "callme") {
              var cell = document.querySelectorAll(".cell");
              var href = link.toString();
              var name = name.toString();
              function makeid(length) {
                var result = "";
                var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                  result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                  );
                }
                return result;
              }

              var starttime = 0;
              var maxtime = 500;

              for (var i = 0; i <= 10; i++) {
                (function(i) {
                  for (var j = starttime; j <= maxtime; j += 100) {
                    if (j < maxtime)
                      setTimeout(function() {
                        cell[i].innerHTML = makeid(1);
                      }, j);
                    else
                      setTimeout(function() {
                        cell[i].innerHTML = name.charAt(i);
                      }, j);
                  }
                })(i, maxtime);
                starttime += 100;
                maxtime += 100;
              }
              document.querySelector("#contact_a").href = href;
            }
          })}
        </div>
      ));
    }}
  </Query>
);

export default ExchangeSocials;

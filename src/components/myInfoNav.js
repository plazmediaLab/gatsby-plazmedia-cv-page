import React from 'react';
// Gatsby
import { graphql, useStaticQuery, Link } from 'gatsby';

const MyInfoNav = () => {

  const reqGraphQL = useStaticQuery(graphql`
    query{
      allEducationJson{
        edges{
          node{
            title
            description
            slug
          }
        }
      }
    }
  `);
  const nodes = reqGraphQL.allEducationJson.edges;

  return (
    <div className="container mx-auto max-w-4xl my-10">
      <header className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">My educational knowledge information</h2>
      </header>

      <section className="grid grid-cols-2 gap-3 mt-8 text-center">
        {nodes.map(item => (
          // console.log(item.node.slug)
            <Link to={ item.node.slug } className="link-btn" >
              <h3>{ item.node.title }</h3>
              <p>{ item.node.description }</p>
            </Link>
        ))}
      </section>

    </div>
  );
};

export default MyInfoNav;
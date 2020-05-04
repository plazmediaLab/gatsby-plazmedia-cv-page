const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const reqGraphQL = await graphql(`
    query {
      allEducationJson {
        nodes {
          slug
        }
      }
    }
  `);

  response = reqGraphQL.data.allEducationJson.nodes;

  response.forEach(item => {
    const { slug } = item;
  
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/layout.js`),
      context: {
        slug: slug
      }
    })
  });
}
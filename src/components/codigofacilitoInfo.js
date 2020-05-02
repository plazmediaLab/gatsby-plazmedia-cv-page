import React from 'react';
// Gatsby
import { graphql, useStaticQuery } from 'gatsby'; 
// Components 
import Course from './course';


const CodigoFacilitoInfo = () => {

  const queryGraphQL = useStaticQuery(graphql`
    query {
      dataJson {
        data {
          email
          username
          courses {
            progress
            title
            url
          }
        }
        id
      }
    }
  `);

  const dataInfo = queryGraphQL.dataJson.data;
  // Destructuring
  const { username, courses } = dataInfo;

  return (
    <div className="max-w-4xl mx-auto my-10">
      <header className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Online course profile</h2>
        <p className="text-teal-500">
          <span className="text-gray-800">Codigofacilito: </span>{ username }
        </p>
      </header>
      <div className="grid grid-cols-3 gap-3 mt-8">
        {courses.map(item => (
          <Course
            key={ item.url } 
            item={ item } 
          />
        ))}
      </div>
    </div>
  );
};

export default CodigoFacilitoInfo;
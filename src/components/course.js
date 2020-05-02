import React from 'react';

const Course = ({ item }) => {

  return (
    <div className="card">
      <h4 className="text-teal-500 font-bold">{ item.title }</h4>
      <p className="text-gray-800 mr-2">
        Progress: <span className="text-xs inline-block bg-blue-400 rounded-lg px-2 text-white ">{ parseInt(item.progress) }%</span>
      </p>
      <a href={ item.progress } className="text-pink-500" target="_blank" rel="noopener noreferrer">Go to course</a>
    </div>
  );
};

export default Course;
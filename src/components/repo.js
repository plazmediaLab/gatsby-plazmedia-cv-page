import React from 'react';

const Repo = ({ data }) => {

  // Destructuring
  const { name, description, html_url } = data;

  return (
    <li className="flex items-center">
      <div className="flex-1">
        <h4 className="text-pink-600 font-bold">{ name }</h4>
        <p className="text-sm text-gray-800 overflow-y-hidden" style={{ height: "1.5rem" }}>{ description }</p>
      </div>
      <a href={ html_url } target="_blank" rel="noopener noreferrer" className="text-teal-500 ml-3">See</a>
    </li>
  );
};

export default Repo;
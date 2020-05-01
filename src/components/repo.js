import React from 'react';

const Repo = ({ data }) => {
  
  // Destructuring
  const { name, description, html_url, owner } = data;
  
  return (
    <li className="">
      <div className="flex-1">
        <div className="flex mb-2">
          <img src={owner.avatar_url} alt="Avatar img" className="img-avatar"/>
          <h4 className="text-pink-600 font-bold truncate">{ name }</h4>
        </div>
          <p className="text-sm text-gray-500 overflow-y-hidden" >{ owner.login }</p>
          <p className="text-sm text-gray-800 overflow-y-hidden" >{ description }</p>
      </div>
      <a href={ html_url } target="_blank" rel="noopener noreferrer" className="text-teal-500 ml-3 text-right block">See</a>
    </li>
  );
};

export default Repo;
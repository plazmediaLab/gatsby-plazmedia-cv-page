import React from 'react';

const Itemlist = ({ item, slug }) => {

  const { name, degree, score, url } = item;

  return (
    <li className="shadow rounded mb-4 overflow-hidden flex bg-white">
      <p className="vertical-text">{ slug }</p>
      <div className="p-4 flex-1">
        <h3 className="text-lg font-bold text-gray-600">{ name }</h3>
        <p className="text-gray-500">{ degree }</p>

        { url && <a href={ url } target="_blank" rel="noopener noreferrer" className="text-teal-500">Link</a> }

      </div>

      {score && (
        <div className="p-3 bg-blue-200 text-blue-600 font-bold text-xs text-center">
          <p>Score</p>
          <p>{ score }</p>
        </div>
      )}

    </li>
  );
};

export default Itemlist;
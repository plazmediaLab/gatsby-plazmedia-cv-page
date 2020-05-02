import React from 'react';

const Feed = ({ feed }) => {

  const { title, thumbnail, link, pubDate } = feed;

  return (
    <div 
    className="card-img overflow-hidden" 
    style={{ width: "200px" }}
    >
      <img 
        src={thumbnail}
        alt="Thumb img"
        className="object-cover w-full"
        style={{ height: "100px" }}
      />
      <div className="grid grid-flow-row p-3">
        <p className="truncate" title={title}>{ title }</p>
        <small className="text-gray-500">{ pubDate }</small>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-xs text-center mt-5"
        >Read history</a>
      </div>
    </div>
  );
}

export default Feed;
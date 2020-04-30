import React from 'react';
// Data Info
import repos from '../data/repos.json';
// Components 
import Repo from '../components/repo';

const Repos = () => {
  return (
    <div className="max-w-4xl mx-auto my-4">
      <header className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">My work in Open Source</h2>
        <p className="text-gray-800">Collaboration and code contribution</p>
      </header>
      <ul className="repo-list my-8">
        { repos.map(item => (
          <Repo data={ item } key={ item.id } />
        )) }
      </ul>
    </div>
  );
};

export default Repos;
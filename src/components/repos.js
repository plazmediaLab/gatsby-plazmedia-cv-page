import React, { useEffect, useState } from 'react';
// Data Info
import reposFile from '../data/repos.json';
// Components 
import Repo from '../components/repo';

const Repos = () => {

  // Local STATE 
  const [repos, setRepos] = useState([]);
  const [reposcount, setReposCount] = useState(0);
  
  useEffect(() => {
    const dataReposSession = sessionStorage.getItem("repos");
    
    let myRepos;
    if(dataReposSession){
      myRepos = JSON.parse(dataReposSession);
      setReposCount(myRepos.length);
      myRepos = myRepos.slice(0, 8);
      return setRepos(myRepos);
    }
    
    sessionStorage.setItem("repos", JSON.stringify(reposFile));
    setReposCount(reposFile.length);
    setRepos(reposFile.slice(0, 8));
  }, [/* dependencia */]);

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
      <div className="text-center">
        <a href="https://github.com/plazmediaLab" className="btn-pink" target="_blank" rel="noopener noreferrer">
          See all repositories ({reposcount})
        </a>
      </div>
    </div>
  );
};

export default Repos;
import React from "react";
// Components 
import Header from '../components/header';
import Repos from '../components/repos';
import MetaHeader from '../components/metaHeader';

export default () => {

  return (
    <>
      <MetaHeader />

      <Header />

      <Repos />
    </>
  )
}

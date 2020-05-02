import React from "react";
// Components 
import Header from '../components/header';
import Repos from '../components/repos';
import MetaHeader from '../components/metaHeader';
import CodigoFacilitoInfo from "../components/codigofacilitoInfo";
import MediumFeeds from "../components/mediumFeeds";

export default () => {

  return (
    <>
      <MetaHeader />

      <Header />

      <Repos />

      <CodigoFacilitoInfo />

      <MediumFeeds />
    </>
  )
}
